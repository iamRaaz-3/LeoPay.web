import React from "react";
import "./Partners.css";

/* ── Logo strip assets (Figma 22:356 bottom row, 22:419 top row) ── */
import logosTop from "./assets/partners-logos-top.png";
import logosBottom from "./assets/partners-logos-bottom.png";

/*
 * Figma 22:334 — Group 770777 — 1924×369
 *
 * Layout:
 *   TOP ROW    (22:407): [Card — 22:433 PARTNERS] | [Logo marquee — 22:411]
 *   BOTTOM ROW (22:344): [Logo marquee — 22:348]  | [Card — 22:370 PAYMENT METHODS]
 *
 * Full-width section. No scaling canvas.
 * Logo rows: horizontal marquee (scroll left, infinite).
 */
/* ── Badge icons ── */
const BadgeIconLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    style={{ flexShrink: 0, opacity: "var(--opacity-100, 1)" }}
  >
    <g clipPath="url(#clip0_5665_1572)">
      <path
        d="M5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6C4.73478 6 4.48043 5.89464 4.29289 5.70711C4.10536 5.51957 4 5.26522 4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4ZM3 2C3.26522 2 3.51957 2.10536 3.70711 2.29289C3.89464 2.48043 4 2.73478 4 3C4 3.26522 3.89464 3.51957 3.70711 3.70711C3.51957 3.89464 3.26522 4 3 4C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM1 0C1.26522 0 1.51957 0.105357 1.70711 0.292893C1.89464 0.48043 2 0.734784 2 1C2 1.26522 1.89464 1.51957 1.70711 1.70711C1.51957 1.89464 1.26522 2 1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM3 6C3.26522 6 3.51957 6.10536 3.70711 6.29289C3.89464 6.48043 4 6.73478 4 7C4 7.26522 3.89464 7.51957 3.70711 7.70711C3.51957 7.89464 3.26522 8 3 8C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6ZM1 8C1.26522 8 1.51957 8.10536 1.70711 8.29289C1.89464 8.48043 2 8.73478 2 9C2 9.26522 1.89464 9.51957 1.70711 9.70711C1.51957 9.89464 1.26522 10 1 10C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8Z"
        fill="#037E5B"
      />
    </g>
    <defs>
      <clipPath id="clip0_5665_1572">
        <rect width="6" height="10" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const BadgeIconRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    style={{ flexShrink: 0, opacity: "var(--opacity-100, 1)" }}
  >
    <g clipPath="url(#clip0_5665_1579)">
      <path
        d="M1 6C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4C1.26522 4 1.51957 4.10536 1.70711 4.29289C1.89464 4.48043 2 4.73478 2 5C2 5.26522 1.89464 5.51957 1.70711 5.70711C1.51957 5.89464 1.26522 6 1 6ZM3 8C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6C3.26522 6 3.51957 6.10536 3.70711 6.29289C3.89464 6.48043 4 6.73478 4 7C4 7.26522 3.89464 7.51957 3.70711 7.70711C3.51957 7.89464 3.26522 8 3 8ZM5 10C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8C5.26522 8 5.51957 8.10536 5.70711 8.29289C5.89464 8.48043 6 8.73478 6 9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10ZM3 4C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2C3.26522 2 3.51957 2.10536 3.70711 2.29289C3.89464 2.48043 4 2.73478 4 3C4 3.26522 3.89464 3.51957 3.70711 3.70711C3.51957 3.89464 3.26522 4 3 4ZM5 2C4.73478 2 4.48043 1.89464 4.29289 1.70711C4.10536 1.51957 4 1.26522 4 1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1C6 1.26522 5.89464 1.51957 5.70711 1.70711C5.51957 1.89464 5.26522 2 5 2Z"
        fill="#037E5B"
      />
    </g>
    <defs>
      <clipPath id="clip0_5665_1579">
        <rect width="6" height="10" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Partners = () => (
  <section className="partners-section">
    {/* ── TOP ROW ──────────────────────────────────────────── */}
    <div className="partners-row partners-row--top">
      {/* Left card — 22:433  492×185
          Badge: PARTNERS  Geist 12px/600  rgb(3,126,91)
          Stat:  10+ Trusted Partners  Britti Sans 29.8px/600  rgb(26,26,26)
          Sub:   Helping big names in the industry  Britti Sans 16px/400  rgb(82,88,112) */}
      <div className="partners-card">
        <span className="partners-badge">
          <BadgeIconLeft />
          PARTNERS
          <BadgeIconRight />
        </span>
        <div className="partners-stat">10+ Trusted Partners</div>
        <p className="partners-sub">Helping big names in the industry</p>
      </div>

      {/* Right logo marquee — 22:411  logos scroll left */}
      <div className="partners-marquee-wrap">
        {/* Fade overlay left */}
        <div className="partners-fade partners-fade--left" />
        <div className="partners-marquee">
          {/* 4 copies for seamless loop */}
          <img
            src={logosTop}
            alt=""
            className="partners-logos-strip"
            aria-hidden="true"
          />
          <img
            src={logosTop}
            alt=""
            className="partners-logos-strip"
            aria-hidden="true"
          />
          <img
            src={logosTop}
            alt=""
            className="partners-logos-strip"
            aria-hidden="true"
          />
          <img
            src={logosTop}
            alt=""
            className="partners-logos-strip"
            aria-hidden="true"
          />
        </div>
        {/* Fade overlay right */}
        <div className="partners-fade partners-fade--right" />
      </div>
    </div>

    {/* ── BOTTOM ROW ───────────────────────────────────────── */}
    <div className="partners-row partners-row--bottom">
      {/* Left logo marquee — 22:348  logos scroll left */}
      <div className="partners-marquee-wrap">
        <div className="partners-fade partners-fade--left" />
        <div className="partners-marquee partners-marquee--reverse">
          <img
            src={logosBottom}
            alt=""
            className="partners-logos-strip"
            aria-hidden="true"
          />
          <img
            src={logosBottom}
            alt=""
            className="partners-logos-strip"
            aria-hidden="true"
          />
          <img
            src={logosBottom}
            alt=""
            className="partners-logos-strip"
            aria-hidden="true"
          />
          <img
            src={logosBottom}
            alt=""
            className="partners-logos-strip"
            aria-hidden="true"
          />
        </div>
        <div className="partners-fade partners-fade--right" />
      </div>

      {/* Right card — 22:370  492×185
          Badge: PAYMENT METHODS
          Stat:  5+ Payment Methods  Britti Sans 29.8px/600  rgb(26,26,26)
          Sub:   Best way to transfer anytime  Britti Sans 16px/400  rgb(82,88,112) */}
      <div className="partners-card partners-card--right">
        <span className="partners-badge partners-badge--right">
          <BadgeIconLeft />
          PAYMENT METHODS
          <BadgeIconRight />
        </span>
        <div className="partners-stat">5+ Payment Methods</div>
        <p className="partners-sub">Best way to transfer anytime</p>
      </div>
    </div>
  </section>
);

export default Partners;
