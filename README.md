# Sage Summit Capital — Marketing Site

Production-grade marketing site for **Sage Summit Capital**, an AI-native investment and operating platform building, acquiring, and transforming middle-market businesses.

The site is intentionally informational. The **only** CTA is the HubSpot form embedded in the contact section — for potential investors, partners, and acquisition targets.

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
- **HubSpot Forms** (embedded contact)

Designed to deploy directly on **Vercel**. No backend required.

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
  Hero.tsx          # Headline + portfolio command center mock with 3D tilt + marquee
  Sections.tsx      # Shift / WhatWeDo / Ecosystem / OperatingModel / TargetCompanies / Vision / CTA
  Reveal.tsx        # Scroll-triggered fade-in (respects prefers-reduced-motion)
  HubSpotForm.tsx   # The only CTA on the entire site
  Footer.tsx        # Dark institutional footer with ecosystem links

public/assets/
  sage-summit-logo.png
```

---

## Site sections

| #  | Section                | Anchor       |
| -- | ---------------------- | ------------ |
| 1  | Hero                   | `#top`       |
| 2  | The Shift              | `#shift`     |
| 3  | What We Do (3 pillars) | `#approach`  |
| 4  | The Ecosystem          | `#ecosystem` |
| 5  | Operating Model        | `#model`     |
| 6  | Target Companies       | `#partners`  |
| 7  | Long-term Vision       | `#vision`    |
| 8  | CTA (HubSpot)          | `#contact`   |

---

## Motion

Subtle, executive-level — no neon, no cyberpunk, no startup chaos:

- Hero dashboard tilts on cursor (desktop only, disabled with reduced-motion).
- Background glows breathe slowly.
- Reveal animations on scroll (IntersectionObserver, staggered).
- KPI live-pulse dot.
- Floating accent cards drift.
- Marquee of brand-language scrolls horizontally.

All motion respects `prefers-reduced-motion`.

---

## HubSpot form

The contact form is embedded once, in the CTA section.

- **Portal:** `244871017`
- **Form ID:** `245a30d4-7055-4d7a-9df2-a7d84173d3e5`
- **Region:** `na2`

To swap the form later, edit `components/HubSpotForm.tsx`.

---

## Ecosystem links

The footer + ecosystem section link to the sibling sites:

- Vantage Rock → `https://vantagerock.com`
- AI Does My Work → `https://aidoesmywork.com`

These can be updated in `components/Sections.tsx` (Ecosystem) and `components/Footer.tsx`.
