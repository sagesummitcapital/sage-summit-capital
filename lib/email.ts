// Resend email templates for the booking form.
// The client is created lazily so a missing API key never crashes the module
// at import time — the route checks isEmailConfigured() first.

import { Resend } from "resend";
import {
  CONTACT_EMAIL,
  FOUNDER_NAME,
  FOUNDER_TITLE,
  SITE_NAME,
  SITE_URL,
} from "./site";

export type Lead = {
  name: string;
  email: string;
  title: string;
  company: string;
  interest: string;
  message?: string;
};

function getClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not set");
  return new Resend(key);
}

function getFrom() {
  return (
    process.env.LEAD_FROM_EMAIL ||
    `${SITE_NAME} <onboarding@resend.dev>`
  );
}

/** Who gets the lead notification. Supports a comma-separated list. */
function getNotifyRecipients(): string[] {
  return (process.env.LEAD_TO_EMAIL || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY) && getNotifyRecipients().length > 0;
}

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * Notifies you that someone requested a call. This is the email that must
 * succeed — there is no CRM behind the form, so a failure means a lost lead.
 */
export async function sendLeadNotification(
  lead: Lead,
  meta: { ip?: string; userAgent?: string } = {}
) {
  const resend = getClient();
  const to = getNotifyRecipients();
  if (to.length === 0) throw new Error("LEAD_TO_EMAIL not set");

  const rows: Array<[string, string]> = [
    ["Name", lead.name],
    ["Title", lead.title],
    ["Company", lead.company],
    ["Email", lead.email],
    ["I am", lead.interest],
  ];
  if (lead.message) rows.push(["Wants to discuss", lead.message]);
  rows.push(["Received", new Date().toISOString() + " UTC"]);
  if (meta.ip) rows.push(["IP", meta.ip]);

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const html = `
<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f5f5f4;font-family:Georgia,'Times New Roman',serif;color:#1c1917;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e7e5e4;border-radius:4px;padding:32px;">
            <tr>
              <td>
                <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;font-family:Arial,sans-serif;font-weight:600;">
                  ${esc(SITE_NAME)}
                </div>
                <h1 style="margin:12px 0 24px 0;font-size:22px;line-height:1.3;font-weight:normal;color:#1c1917;">
                  New 30-minute call request
                </h1>
                <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;font-size:14px;">
                  ${rows
                    .map(
                      ([k, v]) => `<tr>
                    <td style="padding:7px 16px 7px 0;color:#78716c;width:140px;vertical-align:top;white-space:nowrap;">${esc(
                      k
                    )}</td>
                    <td style="padding:7px 0;color:#1c1917;word-break:break-word;">${esc(
                      v
                    )}</td>
                  </tr>`
                    )
                    .join("")}
                </table>
                <div style="height:1px;background:#e7e5e4;margin:26px 0 18px 0;"></div>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#78716c;">
                  Reply to this email to reach ${esc(
                    lead.name.split(" ")[0]
                  )} directly.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();

  const { data, error } = await resend.emails.send({
    from: getFrom(),
    to,
    replyTo: lead.email,
    subject: `New 30-minute call request — ${lead.company} (${lead.interest})`,
    html,
    text,
  });

  if (error) throw new Error(error.message ?? "Resend notification failed");
  return data;
}

/** Acknowledgement sent to the person who submitted the form. Best-effort. */
export async function sendLeadConfirmation(lead: Lead) {
  const resend = getClient();
  const firstName = lead.name.split(" ")[0];
  const host = SITE_URL.replace(/^https?:\/\//, "");

  const text = `${firstName},

Thank you for reaching out to ${SITE_NAME}.

Your request for a 30-minute call has been received. You'll get a reply within
one business day with a calendar link.

If anything is time-sensitive in the meantime, reply to this email or write to
${CONTACT_EMAIL}.

${FOUNDER_NAME}
${SITE_NAME}
${host}`;

  const html = `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f5f5f4;font-family:Georgia,'Times New Roman',serif;color:#1c1917;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f4;padding:40px 16px;">
      <tr>
        <td align="center">
          <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e7e5e4;border-radius:4px;">
            <tr>
              <td style="padding:40px 44px 0 44px;">
                <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;font-family:Arial,sans-serif;font-weight:600;">
                  ${esc(SITE_NAME)}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 44px 0 44px;">
                <h1 style="margin:0;font-size:26px;line-height:1.3;font-weight:normal;color:#1c1917;">
                  Request received.
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 44px 0 44px;font-family:Arial,sans-serif;">
                <p style="margin:0 0 16px 0;font-size:15px;line-height:1.7;color:#44403c;">
                  ${esc(firstName)}, thank you for reaching out.
                </p>
                <p style="margin:0 0 16px 0;font-size:15px;line-height:1.7;color:#44403c;">
                  Your request for a 30-minute call has been received. You'll get
                  a reply within one business day with a calendar link.
                </p>
                <p style="margin:0 0 28px 0;font-size:15px;line-height:1.7;color:#44403c;">
                  If anything is time-sensitive in the meantime, simply reply to
                  this email.
                </p>
                <div style="height:1px;background:#e7e5e4;margin:0 0 20px 0;"></div>
                <p style="margin:0;font-size:14px;line-height:1.6;color:#1c1917;">
                  ${esc(FOUNDER_NAME)}<br />
                  <span style="color:#78716c;">${esc(FOUNDER_TITLE)} · ${esc(
                    SITE_NAME
                  )}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 44px 40px 44px;font-family:Arial,sans-serif;">
                <a href="${esc(SITE_URL)}" style="font-size:12px;letter-spacing:0.08em;color:#78716c;text-decoration:none;">
                  ${esc(host)}
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();

  const { data, error } = await resend.emails.send({
    from: getFrom(),
    to: lead.email,
    replyTo: CONTACT_EMAIL,
    subject: `Your call request — ${SITE_NAME}`,
    html,
    text,
  });

  if (error) throw new Error(error.message ?? "Resend confirmation failed");
  return data;
}
