"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const dashWrapRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = dashWrapRef.current;
    const dash = dashRef.current;
    if (!wrap || !dash) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let rect = wrap.getBoundingClientRect();
    const update = () => { rect = wrap.getBoundingClientRect(); };
    window.addEventListener("resize", update);

    const onMove = (e: MouseEvent) => {
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      const ry = -5 + cx * 7;
      const rx = 2 - cy * 5;
      dash.style.transform = `rotateY(${ry}deg) rotateX(${rx}deg)`;
    };
    const onLeave = () => { dash.style.transform = ""; };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("resize", update);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            <span>Capital for the AI-native era</span>
          </div>

          <h1 className="hero__title">
            <span className="gradient-headline">Building the next<br />generation of </span>
            <span className="gradient-accent gradient-accent-line">AI-native</span>
            <span className="gradient-headline"> businesses.</span>
          </h1>

          <p className="hero__lede">
            Sage Summit Capital is an AI-native investment and operating platform
            focused on acquiring, building, and transforming middle-market companies
            through intelligent systems and operational modernization.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary btn--lg" href="#approach">
              <span>Explore the platform</span>
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
            <a className="btn btn--ghost btn--lg" href="#contact">
              <span>Partner with us</span>
            </a>
          </div>

          <ul className="hero__proof">
            <li>
              <span className="hero__proof-k">$5M–$100M</span>
              <span className="hero__proof-v">Revenue band</span>
            </li>
            <li>
              <span className="hero__proof-k">AI-native</span>
              <span className="hero__proof-v">Operating model</span>
            </li>
            <li>
              <span className="hero__proof-k">Acquire · Build · Transform</span>
              <span className="hero__proof-v">Operating modes</span>
            </li>
          </ul>
        </div>

        <div className="hero__dash" ref={dashWrapRef}>
          <div className="dash" ref={dashRef}>
            <div className="dash__chrome">
              <div className="dash__rail">
                <span className="dash__rail-dot" />
                <span className="dash__rail-dot" />
                <span className="dash__rail-dot dash__rail-dot--active" />
                <span className="dash__rail-dot" />
                <span className="dash__rail-dot" />
              </div>
              <div className="dash__title">
                <div className="dash__brand">
                  <Image
                    src="/assets/sage-mountain-sm.png"
                    width={231}
                    height={64}
                    alt=""
                    className="dash__brand-mark"
                  />
                  <span>Portfolio Command</span>
                </div>
                <div className="dash__meta">
                  <span className="dash__pill"><span className="dash__pulse" />Live</span>
                  <span className="dash__sep" />
                  <span>Ecosystem View</span>
                </div>
              </div>
            </div>

            <div className="dash__kpis">
              <Kpi
                label="Portfolio EBITDA"
                value="$42.1M"
                delta="▲ 18.6%"
                spark="M0 24 L15 22 L30 18 L45 20 L60 14 L75 12 L90 8 L105 10 L120 4"
              />
              <Kpi
                label="AI Coverage"
                value="78%"
                delta="▲ 22 pts"
                spark="M0 26 L15 20 L30 22 L45 16 L60 18 L75 12 L90 10 L105 8 L120 4"
              />
              <Kpi
                label="Op. Leverage"
                value="3.4x"
                delta="▲ 0.8x"
                spark="M0 20 L15 22 L30 14 L45 18 L60 12 L75 14 L90 10 L105 12 L120 6"
              />
              <Kpi
                label="Close cycle"
                valueNode={<><span>4.2</span><span className="kpi__unit">days</span></>}
                delta="▼ 5.3 days"
                spark="M0 6 L15 8 L30 10 L45 14 L60 12 L75 16 L90 18 L105 22 L120 22"
              />
            </div>

            <div className="dash__charts">
              <div className="chart">
                <div className="chart__head">
                  <span className="chart__label">Portfolio Performance</span>
                  <span className="chart__legend"><span className="chart__dot" />EBITDA</span>
                </div>
                <svg className="chart__svg" viewBox="0 0 320 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="perf-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3A7DFF" stopOpacity="0.30" />
                      <stop offset="100%" stopColor="#3A7DFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g className="chart__grid">
                    <line x1="0" y1="20"  x2="320" y2="20"  />
                    <line x1="0" y1="50"  x2="320" y2="50"  />
                    <line x1="0" y1="80"  x2="320" y2="80"  />
                    <line x1="0" y1="110" x2="320" y2="110" />
                  </g>
                  <path d="M0 92 L40 80 L80 70 L120 78 L160 56 L200 48 L240 38 L280 30 L320 18 L320 120 L0 120 Z" fill="url(#perf-fill)" />
                  <path className="chart__line" d="M0 92 L40 80 L80 70 L120 78 L160 56 L200 48 L240 38 L280 30 L320 18" fill="none" stroke="#3A7DFF" strokeWidth="2" />
                  <g className="chart__pts" fill="#3A7DFF">
                    <circle cx="40" cy="80" r="2.5" />
                    <circle cx="120" cy="78" r="2.5" />
                    <circle cx="200" cy="48" r="2.5" />
                    <circle cx="280" cy="30" r="2.5" />
                  </g>
                  <g className="chart__axis">
                    <text x="0" y="118">Q1</text>
                    <text x="64" y="118">Q2</text>
                    <text x="128" y="118">Q3</text>
                    <text x="192" y="118">Q4</text>
                    <text x="256" y="118">Q5</text>
                    <text x="304" y="118">Q6</text>
                  </g>
                </svg>
              </div>

              <div className="chart">
                <div className="chart__head">
                  <span className="chart__label">AI Adoption</span>
                  <span className="chart__legend"><span className="chart__dot" />By function</span>
                </div>
                <svg className="chart__svg" viewBox="0 0 320 120" preserveAspectRatio="none">
                  <g className="chart__grid">
                    <line x1="0" y1="20"  x2="320" y2="20"  />
                    <line x1="0" y1="50"  x2="320" y2="50"  />
                    <line x1="0" y1="80"  x2="320" y2="80"  />
                    <line x1="0" y1="110" x2="320" y2="110" />
                  </g>
                  <g className="chart__bars">
                    <rect x="14" y="78" width="28" height="32" rx="2" />
                    <rect x="60" y="60" width="28" height="50" rx="2" />
                    <rect x="106" y="68" width="28" height="42" rx="2" />
                    <rect x="152" y="44" width="28" height="66" rx="2" />
                    <rect x="198" y="52" width="28" height="58" rx="2" />
                    <rect x="244" y="30" width="28" height="80" rx="2" />
                    <rect x="290" y="22" width="22" height="88" rx="2" />
                  </g>
                  <g className="chart__axis">
                    <text x="14" y="118">Fin</text>
                    <text x="60" y="118">Ops</text>
                    <text x="106" y="118">CRM</text>
                    <text x="152" y="118">Mkt</text>
                    <text x="198" y="118">HR</text>
                    <text x="244" y="118">Acct</text>
                    <text x="290" y="118">Lgl</text>
                  </g>
                </svg>
              </div>
            </div>

            <div className="dash__charts">
              <div className="chart chart--donut">
                <div className="chart__head">
                  <span className="chart__label">Capital Allocation</span>
                </div>
                <div className="donut">
                  <svg viewBox="0 0 120 120" className="donut__svg">
                    <circle cx="60" cy="60" r="44" className="donut__track" />
                    <circle cx="60" cy="60" r="44" className="donut__seg donut__seg--1" pathLength="100" strokeDasharray="42 100" strokeDashoffset="0" />
                    <circle cx="60" cy="60" r="44" className="donut__seg donut__seg--2" pathLength="100" strokeDasharray="28 100" strokeDashoffset="-42" />
                    <circle cx="60" cy="60" r="44" className="donut__seg donut__seg--3" pathLength="100" strokeDasharray="20 100" strokeDashoffset="-70" />
                    <circle cx="60" cy="60" r="44" className="donut__seg donut__seg--4" pathLength="100" strokeDasharray="10 100" strokeDashoffset="-90" />
                  </svg>
                  <div className="donut__center">
                    <div className="donut__center-v">$84M</div>
                    <div className="donut__center-l">Deployable</div>
                  </div>
                </div>
                <ul className="donut__legend">
                  <li><span className="lk lk--1" />Acquire<span className="lv">42%</span></li>
                  <li><span className="lk lk--2" />Build<span className="lv">28%</span></li>
                  <li><span className="lk lk--3" />Transform<span className="lv">20%</span></li>
                  <li><span className="lk lk--4" />Reserve<span className="lv">10%</span></li>
                </ul>
              </div>

              <div className="chart">
                <div className="chart__head">
                  <span className="chart__label">Value Trajectory</span>
                  <span className="chart__legend chart__legend--forecast">FORECAST</span>
                </div>
                <svg className="chart__svg" viewBox="0 0 320 120" preserveAspectRatio="none">
                  <g className="chart__grid">
                    <line x1="0" y1="20"  x2="320" y2="20"  />
                    <line x1="0" y1="50"  x2="320" y2="50"  />
                    <line x1="0" y1="80"  x2="320" y2="80"  />
                    <line x1="0" y1="110" x2="320" y2="110" />
                  </g>
                  <line x1="180" y1="0" x2="180" y2="120" className="chart__divider" />
                  <path d="M0 96 L36 90 L72 80 L108 70 L144 60 L180 50" className="chart__line" fill="none" stroke="#3A7DFF" strokeWidth="2" />
                  <path d="M180 50 L216 40 L252 30 L288 20 L320 12" className="chart__line" fill="none" stroke="#3A7DFF" strokeWidth="2" strokeDasharray="4 4" />
                  <g className="chart__pts" fill="#3A7DFF">
                    <circle cx="36" cy="90" r="2.2" />
                    <circle cx="108" cy="70" r="2.2" />
                    <circle cx="180" cy="50" r="2.6" />
                    <circle cx="252" cy="30" r="2.2" opacity="0.6" />
                  </g>
                  <g className="chart__axis">
                    <text x="0" y="118">Yr 1</text>
                    <text x="64" y="118">Yr 2</text>
                    <text x="128" y="118">Yr 3</text>
                    <text x="192" y="118">Yr 4</text>
                    <text x="256" y="118">Yr 5</text>
                    <text x="294" y="118">Yr 6</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="dash__float dash__float--a">
            <div className="dash__float-k">AI signal</div>
            <div className="dash__float-v">EBITDA expansion · +180 bps</div>
          </div>
          <div className="dash__float dash__float--b">
            <div className="dash__float-k">Portfolio coverage</div>
            <div className="dash__float-v">Standardized infrastructure</div>
          </div>
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="marquee">
          <div className="marquee__track">
            {[
              "AI-native operations", "Operational leverage", "EBITDA optimization",
              "Portfolio modernization", "Intelligent systems", "Enterprise intelligence",
              "Autonomous workflows", "Operational infrastructure",
              "AI-native operations", "Operational leverage", "EBITDA optimization",
              "Portfolio modernization", "Intelligent systems", "Enterprise intelligence",
              "Autonomous workflows", "Operational infrastructure",
            ].map((label, i) => (
              <span key={i} style={{ display: "inline-flex", gap: 24 }}>
                <span>{label}</span>
                <span>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Kpi({
  label, value, valueNode, delta, spark,
}: {
  label: string;
  value?: string;
  valueNode?: React.ReactNode;
  delta: string;
  spark: string;
}) {
  return (
    <div className="kpi">
      <div className="kpi__label">{label}</div>
      <div className="kpi__value">{valueNode ?? value}</div>
      <div className="kpi__delta kpi__delta--up">{delta}</div>
      <svg className="kpi__spark" viewBox="0 0 120 32" preserveAspectRatio="none">
        <path d={spark} fill="none" stroke="#3A7DFF" strokeWidth="1.6" />
      </svg>
    </div>
  );
}
