import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { BookingForm } from "./BookingForm";
import { CTA_ANCHOR, CTA_LABEL, CONTACT_EMAIL, MOONBAG, VANTAGE_ROCK } from "@/lib/site";

const ArrowGlyph = () => (
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
);

/* ===================================================================
   SECTION 2 — THE SHIFT
   =================================================================== */

export function Shift() {
  return (
    <section className="section" id="shift">
      <div className="container-x">
        <Reveal className="section__head">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            <span>01 — The shift</span>
          </div>
          <h2 className="section__title">
            The future belongs to{" "}
            <span className="gradient-accent gradient-accent-line">AI-native</span>{" "}
            companies.
          </h2>
          <p className="section__lede">
            Most middle-market businesses still run on labor-heavy operations,
            fragmented systems, and a finance function that reports what happened
            weeks after it happened. Sage Summit Capital exists to change how those
            decisions get made — inside the business through Vantage Rock, and in
            the markets through Moonbag.
          </p>
        </Reveal>

        <Reveal className="compare" delay={1}>
          <div className="compare__col compare__col--old">
            <div className="compare__head">
              <span className="compare__tag">Legacy operating model</span>
              <span className="compare__year">Yesterday</span>
            </div>
            <ul className="compare__list">
              {[
                "Labor-heavy operations",
                "Fragmented systems & data silos",
                "Manual reporting & late insight",
                "Reactive decision cycles",
                "Linear scaling with headcount",
                "Outdated middle-office infrastructure",
              ].map((t, i) => (
                <li key={i}>
                  <span className="ic ic--x">
                    <svg viewBox="0 0 16 16">
                      <path
                        d="M4 4l8 8M12 4l-8 8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="compare__arrow" aria-hidden="true">
            <svg viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="30" className="compare__arrow-ring" />
              <path
                d="M28 40 L48 40 M40 32 L52 40 L40 48"
                stroke="#3A7DFF"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="compare__col compare__col--new">
            <div className="compare__head">
              <span className="compare__tag compare__tag--accent">AI-native operating model</span>
              <span className="compare__year">Now</span>
            </div>
            <ul className="compare__list">
              {[
                "Autonomous operational workflows",
                "Integrated intelligent systems",
                "Real-time enterprise intelligence",
                "Continuous decision support",
                "Operational leverage without headcount",
                "Modern AI-native infrastructure",
              ].map((t, i) => (
                <li key={i}>
                  <span className="ic ic--check">
                    <svg viewBox="0 0 16 16">
                      <path
                        d="M3 8l3.5 3.5L13 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================================================================
   SECTION 3 — WHAT WE DO
   =================================================================== */

const PILLARS: Array<{ num: string; title: string; desc: string; icon: ReactNode }> = [
  {
    num: "01",
    title: "Acquire",
    desc: "We look for durable, founder-led operators with strong fundamentals and modernize them with AI-native infrastructure — turning cash-flow businesses into intelligent enterprises. This is the thesis we are building toward.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M5 24 L5 10 L16 4 L27 10 L27 24 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M11 24 L11 16 L21 16 L21 24" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16" cy="13" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Build",
    desc: "We build operating companies from the ground up. Vantage Rock Financial — a fractional CFO and AI-enabled finance firm — came first. Moonbag.ai, an AI market intelligence and execution layer, is the second.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
        <rect x="17" y="6" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
        <rect x="6" y="17" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
        <rect x="17" y="17" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M15 10 L17 10 M15 21 L17 21 M10 15 L10 17 M21 15 L21 17" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Transform",
    desc: "Through Vantage Rock, we deploy AI-native finance systems inside client companies — faster closes, real cash visibility, and reporting leadership can run the business on. Moonbag applies the same discipline to market data.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M5 22 L11 14 L17 18 L27 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="14" r="2" fill="currentColor" />
        <circle cx="17" cy="18" r="2" fill="currentColor" />
        <circle cx="27" cy="6"  r="2" fill="currentColor" />
        <path d="M21 6 L27 6 L27 12" stroke="currentColor" strokeWidth="1.4" fill="none" />
      </svg>
    ),
  },
];

export function WhatWeDo() {
  return (
    <section className="section" id="approach">
      <div className="container-x">
        <Reveal className="section__head section__head--center">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            <span>02 — What we do</span>
          </div>
          <h2 className="section__title">
            Three modes of{" "}
            <span className="gradient-accent gradient-accent-line">value creation</span>.
          </h2>
          <p className="section__lede">
            Sage Summit Capital operates across the lifecycle of AI-native business
            building. Today the emphasis is on building and transforming — two
            operating companies live; acquisition is where the platform is headed.
          </p>
        </Reveal>

        <div className="pillars">
          {PILLARS.map((p, i) => (
            <Reveal key={p.num} className="pillar" delay={(i + 1) as 1 | 2 | 3}>
              <div className="pillar__num">{p.num} / {String(PILLARS.length).padStart(2, "0")}</div>
              <div className="pillar__ic">{p.icon}</div>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__desc">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================================================================
   SECTION 4 — OPERATING COMPANIES (Vantage Rock · Moonbag.ai)
   =================================================================== */

const VR_OFFERS: Array<{ title: string; desc: string }> = [
  {
    title: "Fractional CFO",
    desc: "Senior finance leadership — capital planning, unit economics, pricing, lender and investor relationships, board reporting — without the full-time hire.",
  },
  {
    title: "FP&A",
    desc: "Operating models, budgets, rolling forecasts, cash flow planning, and KPI reporting built to be read rather than filed.",
  },
  {
    title: "AI implementation",
    desc: "Automation built into the finance function: faster closes, forecasts that update continuously, dashboards wired to the source.",
  },
];

const MB_OFFERS: Array<{ title: string; desc: string }> = [
  {
    title: "Market scanner",
    desc: "Continuous coverage across crypto, equities, gold, and ETFs — so opportunities surface without the manual sweep through a hundred charts.",
  },
  {
    title: "Opportunity ratings",
    desc: "Every asset scored on trend, momentum, setup quality, volatility, and risk/reward, with plain-English reasoning behind the score.",
  },
  {
    title: "Execution plans",
    desc: "Entries, invalidation levels, and profit targets in one place — plus alerts when a setup improves, triggers, weakens, or breaks.",
  },
];

export function Ecosystem() {
  return (
    <section className="section" id="companies">
      <div className="container-x">
        <Reveal className="section__head section__head--center">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            <span>03 — The operating companies</span>
          </div>
          <h2 className="section__title">
            Two companies.{" "}
            <span className="gradient-accent gradient-accent-line">One operating model</span>.
          </h2>
          <p className="section__lede">
            Vantage Rock Financial and Moonbag.ai are the two Sage Summit companies
            building today. Different markets, same thesis: put an intelligence layer
            where the decisions are made, and let the systems do the mechanical work.
          </p>
        </Reveal>

        <Reveal className="eco" delay={1}>
          {/* Parent block */}
          <div className="eco__parent">
            <div className="eco__parent-inner">
              <div>
                <div className="eyebrow eyebrow--inv">
                  <span className="eyebrow__dot" />
                  <span>How it fits</span>
                </div>
                <h3 className="eco__parent-title">
                  Sage Summit is the platform. The companies are where the work happens.
                </h3>
                <p className="eco__parent-lede">
                  Sage Summit Capital sets the operating discipline, the modern
                  stack, and the AI-native posture. Vantage Rock applies it inside
                  founder-led and sponsor-backed companies; Moonbag applies it to
                  live markets. Both are how we learn what the next company should be.
                </p>
                <span className="eco__parent-tag">A platform, not a portfolio</span>
              </div>

              <div className="eco__map" aria-hidden="true">
                <div className="eco__map-parent">
                  <Image
                    src="/assets/sage-mountain-sm-white.png"
                    width={231}
                    height={64}
                    alt=""
                    className="eco__map-parent-mark"
                  />
                  Sage Summit Capital
                </div>
                <div className="eco__map-trunk" />
                <div className="eco__map-branches">
                  <div className="eco__map-row">
                    <div className="eco__map-child">
                      <span className="eco__map-child-name">Vantage Rock Financial</span>
                      <span className="eco__map-child-sub">Fractional CFO · FP&amp;A · AI</span>
                    </div>
                    <div className="eco__map-child">
                      <span className="eco__map-child-name">Moonbag.ai</span>
                      <span className="eco__map-child-sub">Market intel · Execution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operating company 01 — Vantage Rock */}
          <article className="eco__child eco__child--feature" id="vantage-rock">
            <div className="eco__feature-grid">
              <div>
                <div className="eco__child-tag">
                  <span className="eco__child-tag-dot" />
                  <span>Operating company 01 · Live</span>
                </div>
                <div className="eco__child-logo">
                  <Image
                    src="/assets/vantage-rock-logo.png"
                    width={1183}
                    height={522}
                    alt="Vantage Rock Financial"
                    className="eco__child-logo-img"
                  />
                </div>
                <p className="eco__child-desc">
                  {VANTAGE_ROCK.tagline} Built for founder-led and sponsor-backed
                  companies from $1M in revenue — strongest in healthcare, retail,
                  professional services, technology and SaaS, and multi-entity groups.
                </p>
                <div className="eco__child-actions">
                  <a className="btn btn--primary" href={CTA_ANCHOR}>
                    <span>{CTA_LABEL}</span>
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
                  </a>
                  <a
                    className="eco__child-link"
                    href={VANTAGE_ROCK.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {VANTAGE_ROCK.display}
                    <svg viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <ul className="eco__offers">
                {VR_OFFERS.map((o, i) => (
                  <li key={o.title} className="eco__offer">
                    <span className="eco__offer-num">0{i + 1}</span>
                    <div>
                      <h4 className="eco__offer-title">{o.title}</h4>
                      <p className="eco__offer-desc">{o.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Operating company 02 — Moonbag.ai */}
          <article
            className="eco__child eco__child--feature eco__child--alt"
            id="moonbag"
          >
            <div className="eco__feature-grid">
              <div>
                <div className="eco__child-tag">
                  <span className="eco__child-tag-dot eco__child-tag-dot--alt" />
                  <span>Operating company 02 · Early access</span>
                </div>
                <div className="eco__child-logo">
                  <Image
                    src="/assets/moonbag-logo.png"
                    width={1964}
                    height={560}
                    alt="Moonbag.ai"
                    className="eco__child-logo-img"
                  />
                </div>
                <p className="eco__child-desc">
                  {MOONBAG.tagline} Moonbag scans crypto, equities, gold, and ETFs
                  continuously, rates what it finds, and hands the trader a
                  structured plan instead of another chart. The system does the
                  scanning; the human still makes the call.
                </p>
                <div className="eco__child-actions">
                  <a
                    className="btn btn--primary"
                    href={MOONBAG.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Get early access</span>
                    <ArrowGlyph />
                  </a>
                  <a
                    className="eco__child-link"
                    href={MOONBAG.social}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {MOONBAG.socialHandle}
                    <ArrowGlyph />
                  </a>
                </div>
              </div>

              <ul className="eco__offers">
                {MB_OFFERS.map((o, i) => (
                  <li key={o.title} className="eco__offer">
                    <span className="eco__offer-num">0{i + 1}</span>
                    <div>
                      <h4 className="eco__offer-title">{o.title}</h4>
                      <p className="eco__offer-desc">{o.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================================================================
   SECTION 5 — OPERATING MODEL
   =================================================================== */

const MODEL_CELLS: Array<{ name: string; desc: string; icon: ReactNode }> = [
  {
    name: "Capital allocation",
    desc: "Disciplined deployment across acquire, build, and transform.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 8c0-2 4-3 8-3s8 1 8 3-4 3-8 3-8-1-8-3z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 8v8c0 2 4 3 8 3s8-1 8-3V8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 12c0 2 4 3 8 3s8-1 8-3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: "Operational intelligence",
    desc: "Real-time visibility across every company and function.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 14V10M11 14V8M15 14V11M19 14V7" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: "AI workflows",
    desc: "Autonomous and supervised systems built into core ops.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="18" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 7 L12 16 M16 7 L12 16 M6 9 L6 18 L12 18 M18 9 L18 18 L12 18" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: "Finance modernization",
    desc: "AI-native close, FP&A, treasury, and reporting infrastructure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 10h18M8 14h3M8 17h6" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: "Portfolio transformation",
    desc: "Repeatable playbooks across every portfolio company.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: "Intelligent reporting",
    desc: "Investor-grade, standardized, continuously refreshed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 4 A8 8 0 0 1 20 12 L12 12 Z" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
];

export function OperatingModel() {
  const oversightChips = [
    "AI oversight",
    "Anomaly detection",
    "Workflow intelligence",
    "Decision support",
    "Continuous optimization",
  ];
  const foundationChips = [
    "ERP / GL",
    "CRM / billing",
    "Banking & treasury",
    "HRIS / payroll",
    "Operational source systems",
  ];

  return (
    <section className="section" id="model">
      <div className="container-x">
        <Reveal className="section__head section__head--center">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            <span>04 — Operating model</span>
          </div>
          <h2 className="section__title">
            The AI-native{" "}
            <span className="gradient-accent gradient-accent-line">operating model</span>.
          </h2>
          <p className="section__lede">
            We believe every decision-heavy function will become AI-native, and
            finance goes first. This is the model Vantage Rock runs inside client
            companies, the one Moonbag runs against live markets, and the one every
            future Sage Summit company will inherit.
          </p>
        </Reveal>

        <Reveal className="opmodel" delay={1}>
          {/* Top — AI oversight */}
          <div className="opmodel__layer opmodel__layer--top">
            <div className="opmodel__layer-label">
              <span className="opmodel__layer-num">L1</span>
              <span className="opmodel__layer-name">AI intelligence layer</span>
            </div>
            <div className="opmodel__chips">
              {oversightChips.map((c, i) => (
                <span key={i} className="opmodel__chip">
                  <span className="opmodel__chip-dot" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="opmodel__connector" aria-hidden="true" />

          {/* Middle — capabilities grid */}
          <div className="opmodel__layer">
            <div className="opmodel__layer-label">
              <span className="opmodel__layer-num">L2</span>
              <span className="opmodel__layer-name">Operating capabilities</span>
            </div>
            <div className="opmodel__grid">
              {MODEL_CELLS.map((c) => (
                <div key={c.name} className="opmodel__cell">
                  <div className="opmodel__cell-ic">{c.icon}</div>
                  <div className="opmodel__cell-name">{c.name}</div>
                  <div className="opmodel__cell-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="opmodel__connector" aria-hidden="true" />

          {/* Bottom — foundation */}
          <div className="opmodel__layer">
            <div className="opmodel__layer-label">
              <span className="opmodel__layer-num">L3</span>
              <span className="opmodel__layer-name">System foundation</span>
            </div>
            <div className="opmodel__chips">
              {foundationChips.map((c, i) => (
                <span key={i} className="opmodel__chip">
                  <span className="opmodel__chip-dot" style={{ background: "#7A8F7C" }} />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================================================================
   SECTION 6 — TARGET COMPANIES
   =================================================================== */

const TARGETS: Array<{ title: string; desc: string; icon: ReactNode }> = [
  {
    title: "Healthcare",
    desc: "Service-led healthcare operators with operational complexity and labor density.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M16 5 L19 5 L19 13 L27 13 L27 19 L19 19 L19 27 L13 27 L13 19 L5 19 L5 13 L13 13 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Financial operations",
    desc: "Finance, back-office, and accounting-led businesses ready for modernization.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <rect x="5" y="8" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 13h22M9 18h4M9 22h7" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Business services",
    desc: "Professional services and outsourced operations with repeatable workflows.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <rect x="5" y="10" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 10 L11 7 C 11 6, 12 5, 13 5 L 19 5 C 20 5, 21 6, 21 7 L 21 10" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 16h22" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Operationally complex",
    desc: "Multi-site, multi-system businesses requiring infrastructure consolidation.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="6" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="26" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="6" cy="24" r="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="26" cy="24" r="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 9 L14 14 M24 9 L18 14 M8 23 L14 18 M24 23 L18 18" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Labor-heavy services",
    desc: "Service businesses where AI-native systems unlock operational leverage.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="22" cy="13" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 26c1-4 4-6 8-6s7 2 8 6M18 26c1-3 3-4 6-4s5 1 6 4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export function TargetCompanies() {
  return (
    <section className="section" id="partners">
      <div className="container-x">
        <Reveal className="section__head">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            <span>05 — Who we partner with</span>
          </div>
          <h2 className="section__title">
            We partner with companies ready for{" "}
            <span className="gradient-accent gradient-accent-line">modernization</span>.
          </h2>
          <p className="section__lede">
            Founder-led middle-market operators, portfolio companies of private
            equity sponsors, and family offices looking for a long-term partner in
            operational transformation — whether that starts with a Vantage Rock
            engagement or a bigger conversation.
          </p>
        </Reveal>

        <div className="targets">
          {TARGETS.map((c, i) => (
            <Reveal key={c.title} className="target" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="target__ic">{c.icon}</div>
              <h3 className="target__title">{c.title}</h3>
              <p className="target__desc">{c.desc}</p>
            </Reveal>
          ))}

          <Reveal className="target target--ideal" delay={4}>
            <div className="target__ideal-tag">Ideal revenue band</div>
            <div className="target__ideal-v">$1M–$100M</div>
            <div className="target__ideal-l">Founder-led · sponsor-backed</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ===================================================================
   SECTION 7 — LONG-TERM VISION
   =================================================================== */

export function Vision() {
  return (
    <section className="section" id="vision">
      <div className="container-x">
        <Reveal className="vision">
          <div className="vision__inner">
            <div>
              <div className="eyebrow eyebrow--inv">
                <span className="eyebrow__dot" />
                <span>06 — Long-term vision</span>
              </div>
              <h2 className="vision__title">
                The <em>operating system</em><br />
                for AI-native businesses.
              </h2>
              <p className="vision__copy">
                Our long-term vision is to become the benchmark platform for
                AI-native company building — finance through Vantage Rock, markets
                through Moonbag, and onward one operating company at a time.
                We don&apos;t chase trends. We build what lasts.
              </p>
              <div className="vision__signature">
                Sage Summit Capital — a platform, not a portfolio.
              </div>
            </div>

            {/* Decorative mountain + orbit composition */}
            <div className="vision__art" aria-hidden="true">
              <svg viewBox="0 0 400 400" fill="none">
                <defs>
                  <radialGradient id="vision-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3A7DFF" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#3A7DFF" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="vision-line" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3A7DFF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3A7DFF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Outer orbit */}
                <circle cx="200" cy="200" r="180" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="2 6" />
                <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="2 6" />
                <circle cx="200" cy="200" r="100" stroke="rgba(58, 125, 255, 0.30)" strokeWidth="1" />

                {/* Center glow */}
                <circle cx="200" cy="200" r="90" fill="url(#vision-glow)" />

                {/* The actual Sage Summit mountain mark, centered */}
                <image
                  href="/assets/sage-mountain-md-white.png"
                  x="125"
                  y="172"
                  width="150"
                  height="42"
                  preserveAspectRatio="xMidYMid meet"
                  opacity="0.95"
                />

                {/* Vantage Rock icon — sitting on the middle orbit, right side */}
                <g>
                  <circle cx="340" cy="200" r="22" fill="#F7F8F6" stroke="rgba(58, 125, 255, 0.4)" strokeWidth="1" />
                  <image
                    href="/assets/vr-icon.png"
                    x="324"
                    y="184"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>

                {/* Moonbag icon — mirrored on the middle orbit, left side */}
                <g>
                  <circle cx="60" cy="200" r="22" fill="#FFFFFF" stroke="rgba(122, 143, 124, 0.45)" strokeWidth="1" />
                  <image
                    href="/assets/moonbag-icon.png"
                    x="45"
                    y="185"
                    width="30"
                    height="30"
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>

                {/* Secondary orbital nodes */}
                <circle cx="200" cy="20"  r="4" fill="#7A8F7C" />
                <circle cx="290" cy="345" r="3" fill="rgba(255,255,255,0.5)" />
                <circle cx="110" cy="345" r="3" fill="rgba(58, 125, 255, 0.6)" />

                {/* Connecting tick marks */}
                <g stroke="rgba(255,255,255,0.20)" strokeWidth="1">
                  <line x1="200" y1="20"  x2="200" y2="40"  />
                </g>
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================================================================
   SECTION 8 — BOOK A CALL
   =================================================================== */

export function CTA() {
  return (
    <section className="section section--cta" id="book">
      <div className="container-x">
        <Reveal className="cta">
          <div className="cta__bg" aria-hidden="true" />
          <div className="cta__inner">
            <div>
              <div className="eyebrow">
                <span className="eyebrow__dot" />
                <span>07 — Next step</span>
              </div>
              <h2 className="cta__title">
                Book a 30-minute{" "}
                <span className="gradient-accent gradient-accent-line">call</span>.
              </h2>
              <p className="cta__lede">
                A fit-check, not a sales call. You talk directly with the founder
                about your situation — whether that&apos;s a Vantage Rock engagement,
                a partnership, or an acquisition conversation — and we both leave
                knowing whether there&apos;s work here worth doing.
              </p>

              <ul className="cta__points">
                {[
                  "You talk to the founder, not a salesperson",
                  "Thirty minutes, on your calendar, within a business day",
                  "Confidential — nothing shared, nothing sold",
                ].map((t, i) => (
                  <li key={i}>
                    <span className="ic ic--check">
                      <svg viewBox="0 0 16 16">
                        <path
                          d="M3 8l3.5 3.5L13 5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="cta__direct">
                <div className="cta__direct-label">Or reach out directly</div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="cta__direct-link">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="cta__form">
              <BookingForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
