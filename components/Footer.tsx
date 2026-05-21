"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="footer">
      <div className="container-x footer__inner">
        <div className="footer__brand">
          <Wordmark inverted />
          <p className="footer__statement">
            An AI-native investment and operating platform building the next
            generation of middle-market businesses.
          </p>
          <div className="footer__ecosystem-tag">
            The operating system for AI-native businesses
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
            <h4>Ecosystem</h4>
            <ul>
              <li>
                <a href="https://vantagerockfinancial.com" target="_blank" rel="noopener noreferrer">
                  Vantage Rock Financial ↗
                </a>
              </li>
              <li>
                <a href="https://aidoesmywork.com" target="_blank" rel="noopener noreferrer">
                  AI Does My Work ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#contact">Partner with us</a></li>
              <li><a href="mailto:partners@sagesummitcapital.com">partners@sagesummitcapital.com</a></li>
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
            <a href="#">Privacy</a>
            <span>·</span>
            <a href="#">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
