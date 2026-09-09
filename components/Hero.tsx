"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CTA_ANCHOR, CTA_LABEL, VANTAGE_ROCK } from "@/lib/site";

export function Hero() {
  const dashWrapRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = dashWrapRef.current;
    const dash = dashRef.current;
    if (!wrap || !dash) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
            <span>Holding &amp; operating platform</span>
          </div>

          <h1 className="hero__title">
            <span className="gradient-headline">The platform behind </span>
            <span className="gradient-accent gradient-accent-line">AI-native</span>
            <span className="gradient-headline"> finance.</span>
          </h1>

          <p className="hero__lede">
            Sage Summit Capital builds and operates companies that modernize how
            middle-market businesses run. Today that work happens through{" "}
            <a
              className="hero__lede-link"
              href={VANTAGE_ROCK.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {VANTAGE_ROCK.name}
            </a>
            , our fractional CFO and AI-enabled finance firm.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary btn--lg" href={CTA_ANCHOR}>
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
            <a className="btn btn--ghost btn--lg" href="#vantage-rock">
              <span>Meet Vantage Rock</span>
            </a>
          </div>

          <ul className="hero__proof">
            <li>
              <span className="hero__proof-k">Acquire · Build · Transform</span>
              <span className="hero__proof-v">Operating thesis</span>
            </li>
            <li>
              <span className="hero__proof-k">Vantage Rock</span>
              <span className="hero__proof-v">Active operating company</span>
            </li>
            <li>
              <span className="hero__proof-k">Founder-led</span>
              <span className="hero__proof-v">Scottsdale, AZ</span>
            </li>
          </ul>
        </div>

        {/* Platform view — real structure, no invented metrics */}
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
                  <span>Platform view</span>
                </div>
                <div className="dash__meta">
                  <span className="dash__pill"><span className="dash__pulse" />Active</span>
                  <span className="dash__sep" />
                  <span>2026</span>
                </div>
              </div>
            </div>

            {/* Structure */}
            <div className="pv">
              <div className="pv__parent">
                <span className="pv__parent-k">Holding platform</span>
                <span className="pv__parent-v">Sage Summit Capital</span>
              </div>
              <div className="pv__trunk" aria-hidden="true" />
              <a
                className="pv__company"
                href={VANTAGE_ROCK.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="pv__company-top">
                  <Image
                    src="/assets/vr-icon.png"
                    width={40}
                    height={40}
                    alt=""
                    className="pv__company-icon"
                  />
                  <div className="pv__company-id">
                    <span className="pv__company-name">{VANTAGE_ROCK.name}</span>
                    <span className="pv__company-sub">Operating company · Active</span>
                  </div>
                  <span className="pv__status"><span className="dash__pulse" />Live</span>
                </div>
                <p className="pv__company-tag">{VANTAGE_ROCK.tagline}</p>
                <div className="pv__chips">
                  {VANTAGE_ROCK.pillars.map((p) => (
                    <span key={p} className="pv__chip">{p}</span>
                  ))}
                </div>
              </a>
            </div>

            {/* Thesis rail */}
            <div className="pv__thesis">
              {[
                { k: "Acquire", v: "Sourcing operators ready to modernize", s: "Pipeline" },
                { k: "Build", v: "Vantage Rock Financial", s: "Active" },
                { k: "Transform", v: "AI-native finance systems, deployed by Vantage Rock", s: "Delivering" },
              ].map((t) => (
                <div key={t.k} className={`pv__mode ${t.s === "Active" ? "pv__mode--active" : ""}`}>
                  <div className="pv__mode-head">
                    <span className="pv__mode-k">{t.k}</span>
                    <span className="pv__mode-s">{t.s}</span>
                  </div>
                  <span className="pv__mode-v">{t.v}</span>
                </div>
              ))}
            </div>

            {/* Capability strip */}
            <div className="pv__caps">
              {[
                "Fractional CFO leadership",
                "FP&A & cash forecasting",
                "Month-end close acceleration",
                "AI implementation in finance",
                "Board & lender reporting",
                "Multi-entity consolidation",
              ].map((c) => (
                <span key={c} className="pv__cap">
                  <span className="pv__cap-dot" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="dash__float dash__float--a">
            <div className="dash__float-k">Operating model</div>
            <div className="dash__float-v">Systems do the mechanical work</div>
          </div>
          <div className="dash__float dash__float--b">
            <div className="dash__float-k">Long-term</div>
            <div className="dash__float-v">A platform, not a portfolio</div>
          </div>
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="marquee">
          <div className="marquee__track">
            {[
              "AI-enabled finance", "Fractional CFO", "FP&A", "Close acceleration",
              "Cash visibility", "AI implementation", "Operational leverage", "Middle market",
              "AI-enabled finance", "Fractional CFO", "FP&A", "Close acceleration",
              "Cash visibility", "AI implementation", "Operational leverage", "Middle market",
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
