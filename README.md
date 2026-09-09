# Sage Summit Capital — Marketing Site

Marketing site for **Sage Summit Capital**, the holding and operating platform behind **Vantage Rock Financial** — currently the only operating company referenced on the site.

There is one offer on the site: **Book a 30-minute call.** Every CTA (nav, hero, Vantage Rock section, footer) points to the booking form at `#book`, which posts to a Resend-backed API route — the same setup as vantagerockfinancial.com.

---

## Design system

**Aesthetic:** institutional, modern, AI-native. Blends A16Z editorial, Blackstone discipline, Palantir precision, Stripe craft, and McKinsey Digital polish — on a white canvas, not a dark one (Vantage Rock uses dark; Sage Summit is the parent and uses light to distinguish the ecosystem hierarchy).

**Brand palette** (from the Sage Summit Capital brand kit):

| Token            | Hex       | Usage                           |
| ---------------- | --------- | ------------------------------- |
| Summit White     | `#F7F8F6` | Primary background (60–70%)     |
| Charcoal         | `#1C1F22` | Text & dark surfaces (15–20%)   |
| Slate Gray       | `#2F3437` | Secondary text                  |
| **Alpine Blue**  | `#3A7DFF` | Primary accent (5–10%)          |
| **Sage Green**   | `#7A8F7C` | Secondary accent (5%)           |
| Mist Gray        | `#E6E9EC` | Borders, dividers               |

**Typography:**

- **Playfair Display** — headlines, marks, statement type
- **Inter** — body, UI, captions
- **JetBrains Mono** — eyebrows, KPI labels, technical metadata

All three are loaded via Google Fonts (preconnected) for fast first paint.

---

## Stack

- **Next.js 14** (App Router, static-generated)
- **React 18** + **TypeScript**
- **Tailwind CSS** (config in place; design system is mostly in `app/globals.css` for fine-grained control)
- **Resend** (booking-form email delivery via `app/api/lead/route.ts`)

Designed to deploy directly on **Vercel**.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

---

## Structure

```
app/
  layout.tsx        # Root layout, font loading, metadata
  page.tsx          # Single-page site composition
  globals.css       # Full design system (variables, sections, motion, responsive)

components/
  Nav.tsx           # Sticky nav with scroll state + mobile menu
  Wordmark.tsx      # Mountain icon + Playfair lockup (inverted variant for dark surfaces)
  Hero.tsx          # Headline + "platform view" card (Sage Summit → Vantage Rock) with 3D tilt + marquee
  Sections.tsx      # Shift / WhatWeDo / Ecosystem (Vantage Rock) / OperatingModel / TargetCompanies / Vision / CTA (book)
  Reveal.tsx        # Scroll-triggered fade-in (respects prefers-reduced-motion)
  BookingForm.tsx   # The booking form — posts to /api/lead
  Footer.tsx        # Dark institutional footer

app/api/lead/route.ts   # Resend email delivery, honeypot, per-IP rate limit
lib/site.ts             # Site constants: CTA label/anchor, contact email, Vantage Rock details

public/assets/
  sage-summit-logo.png, vantage-rock-logo.png, vr-icon.png, …
```

---

## Site sections

| #  | Section                | Anchor       |
| -- | ---------------------- | ------------ |
| 1  | Hero                   | `#top`       |
| 2  | The Shift              | `#shift`     |
| 3  | What We Do (3 pillars) | `#approach`  |
| 4  | Vantage Rock           | `#vantage-rock` |
| 5  | Operating Model        | `#model`     |
| 6  | Target Companies       | `#partners`  |
| 7  | Long-term Vision       | `#vision`    |
| 8  | Book a 30-minute call  | `#book`      |

---

## Motion

Subtle, executive-level — no neon, no cyberpunk, no startup chaos:

- Hero platform-view card tilts on cursor (desktop only, disabled with reduced-motion).
- Background glows breathe slowly.
- Reveal animations on scroll (IntersectionObserver, staggered).
- Live-pulse status dot.
- Floating accent cards drift.
- Marquee of brand-language scrolls horizontally.

All motion respects `prefers-reduced-motion`.

---

## Booking form (Resend)

The form in the `#book` section posts to `app/api/lead/route.ts`, which emails each request via [Resend](https://resend.com). Set these in `.env.local` (copy `env.example` to `.env.local`) and in Vercel → Settings → Environment Variables:

```
RESEND_API_KEY=re_xxxxxxxx
LEAD_TO_EMAIL=you@sagesummitcapital.com
# once the domain is verified in Resend:
LEAD_FROM_EMAIL=Sage Summit Capital <leads@sagesummitcapital.com>
```

Until the env vars are set, submissions are logged to the server console so nothing is lost in development. The route includes a honeypot field and a per-IP rate limit (5 per 10 minutes).

To change the fields or the "I am…" options, edit `components/BookingForm.tsx` and the `LeadPayload` type in the route.

---

## Vantage Rock

All copy, links and CTAs reference **Vantage Rock Financial** only. Its URL, tagline and pillars live in `lib/site.ts` (`VANTAGE_ROCK`), so a change there updates the hero card, the Vantage Rock section and the footer together.
