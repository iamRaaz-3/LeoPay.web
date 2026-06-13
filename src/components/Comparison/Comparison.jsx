import React from "react";
import "./Comparison.css";

const OTHER_ITEMS = [
  "Fragmented Payment Stack (separate vendors for FX, payouts & wallets)",
  "Hidden FX Markups & Unpredictable Transaction Fees",
  "Limited Global Coverage, especially in emerging markets",
  "Manual Compliance Processes & Slower Business Onboarding",
  "Limited Flexibility for High-Volume Cross-Border Operations",
];

const LEOPAY_ITEMS = [
  "Unified Global Payments Platform (FX + Payouts in One Place)",
  "Faster Payment Processing with optimized settlement flows",
  "Clear, Transparent Pricing with intelligent FX routing",
  "Built-in Compliance Support (AML/KYC & regulatory readiness)",
  "Efficient Payment Rails for faster, lower-cost cross-border transactions",
];

const XIcon = () => (
  <span className="cmp-icon-wrap x-icon">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5"
        stroke="#D80027"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

const CheckIcon = () => (
  <span className="cmp-icon-wrap check-icon">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M1.5 5L4 7.5L8.5 2.5"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const Comparison = () => (
  <section className="comparison-section">
    <div className="comparison-container">
      <div className="comparison-title-block">
        <div className="comparison-badge-wrap">
          <div className="comparison-badge">
            <span>Comparison</span>
            <div className="comparison-badge-border" />
          </div>
        </div>

        <div className="comparison-heading">
          <span className="cmp-heading-light">Built for smarter</span>
          <span className="cmp-heading-bold">Global Payments</span>
        </div>

        <p className="comparison-subtitle">
          Replace fragmented tools with a streamlined infrastructure for faster,
          compliant, and scalable international transactions.
        </p>
      </div>

      <div className="comparison-card-wrap">
        <div className="comparison-desktop">
          <div className="cmp-col cmp-others">
            <h3 className="cmp-col-title">Other Tools</h3>
            <ul className="cmp-list">
              {OTHER_ITEMS.map((item, i) => (
                <li key={i} className="cmp-point">
                  <XIcon />
                  <span className="cmp-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cmp-col cmp-leopay">
            <div className="cmp-leopay-logo">
              <span className="cmp-leopay-text">leopay</span>
            </div>
            <ul className="cmp-list">
              {LEOPAY_ITEMS.map((item, i) => (
                <li key={i} className="cmp-point">
                  <CheckIcon />
                  <span className="cmp-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Comparison;
