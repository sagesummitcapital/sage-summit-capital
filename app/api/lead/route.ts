import { NextResponse } from "next/server";
import type { Lead } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadPayload = Lead & {
  /** Honeypot — if filled, the submitter is a bot. */
  website?: string;
};

function validate(data: Partial<LeadPayload>): string | null {
  const required: (keyof LeadPayload)[] = [
    "name",
    "email",
    "title",
    "company",
    "interest",
  ];
  for (const key of required) {
    if (!data[key] || typeof data[key] !== "string" || !String(data[key]).trim()) {
      return `${key} is required`;
    }
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = String(data.email);
  if (!emailRe.test(email) || email.length > 254) return "Invalid email";
  return null;
}

// Simple in-memory rate limit: 5 submissions per IP per 10 minutes.
// Good enough for a marketing site. For multi-region scale, swap in
// Upstash Redis or Vercel KV.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = req.headers.get("user-agent")?.slice(0, 200) || "";

    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again shortly." },
        { status: 429 }
      );
    }

    const body = (await req.json().catch(() => ({}))) as Partial<LeadPayload>;

    // Honeypot: silently accept so bots don't learn they were caught.
    if (body.website && String(body.website).trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const error = validate(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const lead: Lead = {
      name: String(body.name).trim().slice(0, 120),
      email: String(body.email).trim().toLowerCase(),
      title: String(body.title).trim().slice(0, 120),
      company: String(body.company).trim().slice(0, 160),
      interest: String(body.interest).trim().slice(0, 160),
      message: body.message ? String(body.message).trim().slice(0, 2000) : "",
    };

    // Always log so a lead is recoverable from platform logs even if mail fails.
    console.log(
      `[lead] ${lead.email} · ${lead.company} · ${lead.interest} · ip=${ip}`
    );

    const { isEmailConfigured, sendLeadNotification, sendLeadConfirmation } =
      await import("@/lib/email");

    if (!isEmailConfigured()) {
      console.error(
        "[lead] RESEND_API_KEY or LEAD_TO_EMAIL missing — request only logged."
      );
      return NextResponse.json(
        { error: "Submissions are temporarily unavailable." },
        { status: 503 }
      );
    }

    // The notification is the one that matters — nothing else stores the lead.
    try {
      await sendLeadNotification(lead, { ip, userAgent });
    } catch (e) {
      console.error("[lead] notification failed:", e);
      return NextResponse.json(
        { error: "Couldn't submit right now. Please try again." },
        { status: 502 }
      );
    }

    // Acknowledgement to the submitter is best-effort — never fails the request.
    try {
      await sendLeadConfirmation(lead);
    } catch (e) {
      console.error("[lead] confirmation failed:", e);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
