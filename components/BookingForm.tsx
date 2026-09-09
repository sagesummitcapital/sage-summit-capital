"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

type FormData = {
  name: string;
  email: string;
  title: string;
  company: string;
  interest: string;
  message: string;
  /** Honeypot — real users never fill this. Bots do. */
  website: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const initialData: FormData = {
  name: "",
  email: "",
  title: "",
  company: "",
  interest: "",
  message: "",
  website: "",
};

const interests = [
  "A founder or operator exploring a partnership",
  "A founder considering a sale or acquisition",
  "An investor or sponsor",
  "A family office",
  "A CFO / finance leader interested in Vantage Rock",
  "Something else",
];

export function BookingForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed");
      }
      setStatus("success");
      setData(initialData);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  function update<K extends keyof FormData>(key: K, val: FormData[K]) {
    setData((d) => ({ ...d, [key]: val }));
  }

  if (status === "success") {
    return (
      <div className="form form--success" role="status">
        <div className="form__check" aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10l4 4 8-8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="form__success-title">Request received.</h3>
        <p className="form__success-copy">
          We&apos;ll reply within one business day with a calendar link for a
          30-minute call.
        </p>
        <button
          type="button"
          className="form__again"
          onClick={() => setStatus("idle")}
        >
          Submit another →
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__head">
        <span className="form__head-label">30-minute call</span>
        <span className="form__head-meta">Reply within 1 business day</span>
      </div>

      <div className="form__grid">
        <Field label="Full name" required>
          <input
            type="text"
            required
            autoComplete="name"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Smith"
          />
        </Field>

        <Field label="Work email" required>
          <input
            type="email"
            required
            autoComplete="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@company.com"
          />
        </Field>

        <Field label="Title" required>
          <input
            type="text"
            required
            autoComplete="organization-title"
            value={data.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="CEO / CFO / Founder / Partner"
          />
        </Field>

        <Field label="Company" required>
          <input
            type="text"
            required
            autoComplete="organization"
            value={data.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Company or firm"
          />
        </Field>
      </div>

      <div className="form__row">
        <Field label="I am…" required>
          <select
            required
            value={data.interest}
            onChange={(e) => update("interest", e.target.value)}
          >
            <option value="" disabled>
              Select one
            </option>
            {interests.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="form__row">
        <Field label="What would you like to talk about?">
          <textarea
            rows={3}
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Optional · 1–2 sentences is enough"
          />
        </Field>
      </div>

      {/* Honeypot — visually hidden, ignored by humans, filled by bots */}
      <div className="form__hp" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      {status === "error" && (
        <div className="form__error" role="alert">
          {errorMsg} — or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </div>
      )}

      <div className="form__foot">
        <span className="form__foot-note">
          Direct to the founder · confidential · no spam
        </span>
        <button
          type="submit"
          className="btn btn--primary btn--lg"
          disabled={status === "submitting"}
        >
          <span>{status === "submitting" ? "Submitting…" : "Request the call"}</span>
          {status !== "submitting" && (
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="field">
      <span className="field__label">
        {label}
        {required && <span className="field__req"> *</span>}
      </span>
      {children}
    </label>
  );
}
