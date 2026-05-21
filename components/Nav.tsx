"use client";

import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./Wordmark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const linksRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav__inner">
        <Wordmark />

        <nav
          ref={linksRef}
          className={`nav__links ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <a href="#shift" onClick={closeMenu}>The shift</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#ecosystem" onClick={closeMenu}>Ecosystem</a>
          <a href="#model" onClick={closeMenu}>Operating model</a>
          <a href="#partners" onClick={closeMenu}>Partners</a>
          <a href="#vision" onClick={closeMenu}>Vision</a>
          <a
            className="nav__links-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Partner with us →
          </a>
        </nav>

        <div className="nav__cta">
          <a className="btn btn--primary" href="#contact">
            <span>Partner with us</span>
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
        </div>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
