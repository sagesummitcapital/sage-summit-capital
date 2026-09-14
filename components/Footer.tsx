"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import {
  CONTACT_EMAIL,
  CTA_ANCHOR,
  CTA_LABEL,
  FOUNDER_LINKEDIN,
  MOONBAG,
  VANTAGE_ROCK,
} from "@/lib/site";

export function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="footer">
      <div className="container-x footer__inner">
        <div className="footer__brand">
          <Wordmark inverted />
          <p className="footer__statement">
            The holding and operating platform behind Vantage Rock Financial and
            Moonbag.ai — building AI-native finance and market intelligence.
          </p>
          <div className="footer__ecosystem-tag">
            A platform, not a portfolio
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Platform</h4>
            <ul>
              <li><a href="#shift">The shift</a></li>
              <li><a href="#approach">What we do</a></li>
              <li><a href="#model">Operating model</a></li>
              <li><a href="#partners">Who we partner with</a></li>
              <li><a href="#vision">Long-term vision</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Operating companies</h4>
            <ul>
              <li><a href="#companies">Both companies</a></li>
              <li>
                <a href={VANTAGE_ROCK.url} target="_blank" rel="noopener noreferrer">
                  {VANTAGE_ROCK.name} ↗
                </a>
              </li>
              <li>
                <a href={MOONBAG.url} target="_blank" rel="noopener noreferrer">
                  {MOONBAG.name} ↗
                </a>
              </li>
              <li>
                <a href={MOONBAG.social} target="_blank" rel="noopener noreferrer">
                  {MOONBAG.socialHandle} ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href={CTA_ANCHOR}>{CTA_LABEL}</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              <li>
                <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container-x footer__bottom-inner">
          <span>© {year} Sage Summit Capital. All rights reserved.</span>
          <span className="footer__bottom-tag">
            We don&apos;t chase trends — we build what lasts.
          </span>
          <span className="footer__bottom-links">
            <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
