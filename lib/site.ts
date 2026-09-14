// Single source of truth for site-wide constants.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://sagesummitcapital.com";

export const SITE_NAME = "Sage Summit Capital";
export const SITE_DESCRIPTION =
  "Sage Summit Capital is the holding and operating platform behind Vantage Rock Financial and Moonbag.ai — building AI-native finance and market intelligence for founder-led and sponsor-backed middle-market companies.";

/** Where booking requests are surfaced in the UI (the API route uses LEAD_TO_EMAIL). */
export const CONTACT_EMAIL = "partners@sagesummitcapital.com";

export const FOUNDER_NAME = "Stavros Christias";
export const FOUNDER_TITLE = "Founder";
export const FOUNDER_LINKEDIN =
  "https://www.linkedin.com/in/stavros-christias-4863b211a/";

/** Operating company 01 — AI-native finance inside the business. */
export const VANTAGE_ROCK = {
  name: "Vantage Rock Financial",
  shortName: "Vantage Rock",
  url: "https://www.vantagerockfinancial.com",
  display: "vantagerockfinancial.com",
  tagline: "AI-enabled finance. Fractional CFO. Without the full-time hire.",
  pillars: ["Fractional CFO", "FP&A", "AI Implementation"],
};

/** Operating company 02 — AI-native market intelligence outside the business. */
export const MOONBAG = {
  name: "Moonbag.ai",
  shortName: "Moonbag",
  url: "https://www.moonbag.ai",
  display: "moonbag.ai",
  social: "https://x.com/moonbagai",
  socialHandle: "@moonbagai",
  tagline:
    "AI market intelligence and an execution layer. Ranked opportunities, structured setups, faster decisions.",
  pillars: ["Market scanner", "Opportunity ratings", "Execution plans"],
};

/** The one offer. Every CTA on the site points here. */
export const CTA_LABEL = "Book a 30-minute call";
export const CTA_ANCHOR = "#book";
