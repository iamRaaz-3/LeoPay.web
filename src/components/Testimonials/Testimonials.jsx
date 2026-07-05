import React, { useState } from "react";
import "./Testimonials.css";
import navSvg from "./assets/testimonials-nav.svg";
import starsSvg from "./assets/testimonials-stars.svg";
import starsMobSvg from "./assets/testimonials-stars-mob.svg";
import avatar1 from "./assets/avatar-1.jpg";
import avatar2 from "./assets/avatar-2.jpg";
import avatar2b from "./assets/avatar-2b.jpg";
import avatar3 from "./assets/avatar-3.jpg";
import avatar4 from "./assets/avatar-4.jpg";
import avatar5 from "./assets/avatar-5.jpg";
import avatar6 from "./assets/avatar-6.jpg";
import avatar7 from "./assets/avatar-7.jpg";
import avatar8 from "./assets/avatar-8.jpg";
import avatar9 from "./assets/avatar-9.jpg";

const TESTIMONIALS_AVATARS = [
  [avatar1],
  [avatar2, avatar2b],
  [avatar3],
  [avatar4],
  [avatar5],
  [avatar6],
  [avatar7],
  [avatar8],
  [avatar9],
];

const TESTIMONIALS = [
  {
    name: "Nipun Srivastava",
    body: "One of the biggest improvements we've seen since working with Leopay is settlement speed. Payments that previously took days are now completed much faster, which has made a noticeable difference to both our operations and customer experience.",
    company: "TapTapSend",
  },
  {
    name: "Uday Narang",
    body: "What stood out to us was how easy the platform was to work with. The combination of fast settlements, transparent pricing, and responsive support made the transition seamless.",
    company: "Lulu Exchange & Digit9",
  },
  {
    name: "Rishabh Jain",
    body: "The technology is strong, but what really impressed us was the team behind it. They took the time to understand our requirements and worked closely with us to get everything up and running smoothly.",
    company: "WireNow",
  },
  {
    name: "Wei Zhou",
    body: "The integration process was straightforward and well-supported from start to finish. We were able to launch our cross-border payment capabilities much sooner than we initially expected.",
    company: "Coins.ph",
  },
  {
    name: "Kumar Milan",
    body: "When you're moving money globally, reliability matters just as much as speed. Leopay has consistently delivered on both, giving us confidence in our payment operations as we've continued to grow.",
    company: "Binance VIP",
  },
  {
    name: "Sneh Baxi",
    body: "Cross-border payments can quickly become complicated when you're operating in multiple markets. Leopay helped us streamline the process, giving us faster settlements, better visibility, and a much smoother operational workflow.",
    company: "Aspora",
  },
  {
    name: "Dr. Milan Agarwal",
    body: "We were looking for a more modern approach to international payments and treasury management. Leopay provided the infrastructure we needed while helping us simplify operations and improve liquidity across multiple markets.",
    company: "ScopeX",
  },
  {
    name: "Ranit Saha",
    body: "As our business expanded internationally, we needed payment infrastructure that could scale with us. Leopay helped us reduce complexity, improve visibility into our transactions, and operate more efficiently across regions.",
    company: "PandaMoney",
  },
  {
    name: "Abhay Agarwal",
    body: "When you're moving money globally, reliability matters just as much as speed. Leopay has consistently delivered on both, giving us confidence in our payment operations as we've continued to grow.",
    company: "CROBO",
  },
];

const TestimonialCard = ({ t, avatars, active, onClick }) => (
  <div
    className={`t-card ${active ? "t-card--active" : "t-card--side"}`}
    onClick={onClick}
    role={!active ? "button" : undefined}
    tabIndex={!active ? 0 : undefined}
    onKeyDown={
      !active && onClick ? (e) => e.key === "Enter" && onClick() : undefined
    }
  >
    <div className="t-card-paragraph">
      <div className="t-card-title-row">
        <h6 className="t-card-title">{t.name}</h6>
        <img
          src={starsMobSvg}
          alt="5 stars"
          className="t-stars-img t-stars-mob-inline"
        />
      </div>
      <p className="t-card-body">{t.body}</p>
    </div>
    <div className="t-card-author">
      <div className="t-author-left">
        <div className="t-avatars">
          {avatars.map((src, i) => (
            <div key={i} className="t-avatar-wrap">
              <img src={src} alt={t.name} className="t-avatar" />
            </div>
          ))}
        </div>
        <span className="t-author-name">{t.company}</span>
      </div>
      <img
        src={starsSvg}
        alt="5 stars"
        className="t-stars-img t-stars-desktop"
      />
      <img
        src={starsMobSvg}
        alt="5 stars"
        className="t-stars-img t-stars-mob"
      />
    </div>
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const leftIdx = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  return (
    <section id="testimonials" className="t-section">
      <div className="t-bg">
        <div className="t-ellipse t-ellipse--left" />
        <div className="t-ellipse t-ellipse--right" />

        <div className="t-content">
          <div className="t-header">
            <span className="t-badge">Testimonials</span>
            <div className="t-heading-block t-heading-block--desktop">
              <span className="t-heading-light">See what our</span>
              <span className="t-heading-bold">Customers are saying</span>
            </div>
            <div className="t-heading-block t-heading-block--mobile">
              <span className="t-heading-light">Lowest Costs,</span>
              <span className="t-heading-bold">Highest Efficiency</span>
            </div>
            <p className="t-subtitle t-subtitle--desktop">
              Discover how businesses simplify international payments through the Leopay platform.
            </p>
            <p className="t-subtitle t-subtitle--mobile">
              Reduce costs while improving operational speed, efficiency, and scalability across global payment operations.
            </p>
          </div>

          {/* Desktop carousel */}
          <div className="t-carousel">
            <TestimonialCard
              t={TESTIMONIALS[leftIdx]}
              avatars={TESTIMONIALS_AVATARS[leftIdx]}
              active={false}
              onClick={prev}
            />
            <TestimonialCard t={TESTIMONIALS[active]} avatars={TESTIMONIALS_AVATARS[active]} active={true} />
            <TestimonialCard
              t={TESTIMONIALS[rightIdx]}
              avatars={TESTIMONIALS_AVATARS[rightIdx]}
              active={false}
              onClick={next}
            />
          </div>

          {/* Mobile single card */}
          <div className="t-carousel-mobile">
            <TestimonialCard t={TESTIMONIALS[active]} avatars={TESTIMONIALS_AVATARS[active]} active={true} />
          </div>

          {/* Navigation */}
          <div className="t-nav">
            <div className="t-nav-arrows">
              <button
                className="t-nav-btn t-nav-prev"
                onClick={prev}
                aria-label="Previous"
              />
              <img
                src={navSvg}
                alt=""
                className="t-nav-svg"
                aria-hidden="true"
              />
              <button
                className="t-nav-btn t-nav-next"
                onClick={next}
                aria-label="Next"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
