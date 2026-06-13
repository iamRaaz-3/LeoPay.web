import React from "react";
import "./Footer.css";
import watermarkImg from "./assets/footer-watermark.png";


const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MediumIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => (
  <footer className="footer-desktop">
    <div className="footer-inner">
      {/* Lines layer — all lines/dots positioned absolutely using exact Figma coords */}
      <div className="footer-lines" aria-hidden="true">
        {/* Horizontal */}
        <div className="fl fl-top" />
        <div className="fl fl-divider" />
        <div className="fl fl-ext-left" />
        <div className="fl fl-ext-right" />
        {/* Vertical outer borders — full height (top 360 + logo 402 = 762px) */}
        <div className="fl fl-border-left" />
        <div className="fl fl-border-right" />
        {/* Column separators — top section only */}
        <div className="fl fl-sep-brand" />
        <div className="fl fl-sep-home" />
        <div className="fl fl-sep-help" />
        {/* Corner dots */}
        <div className="fl fl-dot fl-dot-tl" />
        <div className="fl fl-dot fl-dot-tr" />
        <div className="fl fl-dot fl-dot-bl" />
        <div className="fl fl-dot fl-dot-br" />
      </div>

      <div className="footer-top-row">
        <div className="footer-brand-outer">
          <div className="footer-brand-inner">
            <div className="footer-logo-tagline">
              <a href="/" className="footer-logo-link">
                <span className="footer-logo-text">leopay</span>
              </a>
              <p className="footer-tagline">
                Modern Web3 Railing One-In-One Platform
              </p>
            </div>
            <a href="/contact" className="footer-contact-btn">
              Contact Us
            </a>
          </div>
          <div className="footer-company-info">
            <p className="footer-company-text">
              LeoPay is operated by MAXI-PAY INC (Company No. BC1523499),
              incorporated in Canada. MAXI-PAY INC is a registered Money
              Services Business (MSB) regulated by FINTRAC (C100000747).
              LeoPay entities provide access to payment services across
              multiple jurisdictions.
            </p>
            <p className="footer-company-text">
              Partnerships:&nbsp;
              <a href="mailto:partnership@leopay.tech" className="footer-company-email">
                partnership@leopay.tech
              </a>
            </p>
            <p className="footer-company-text">
              Compliance &amp; Support:&nbsp;
              <a href="mailto:compliance@leopay.tech" className="footer-company-email">
                compliance@leopay.tech
              </a>
            </p>
          </div>
        </div>

        {/* Home / Links */}
        <div className="footer-col">
          <span className="footer-col-heading">Home</span>
          <ul className="footer-link-list">
            <li><a href="#" className="footer-nav-link">Company</a></li>
            <li>
              <a href="https://leopay.gitbook.io/leopay-docs" target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                API Docs
              </a>
            </li>
            <li>
              <a href="/#coverages" className="footer-nav-link">
                Coverages<span className="footer-new-badge">New</span>
              </a>
            </li>
            <li><a href="/#comparison" className="footer-nav-link">Comparison</a></li>
            <li><a href="/#testimonials" className="footer-nav-link">Testimonials</a></li>
            <li><a href="/#faqs" className="footer-nav-link">FAQs</a></li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-col">
          <span className="footer-col-heading">Help</span>
          <ul className="footer-link-list">
            <li><a href="/contact" className="footer-nav-link">Contact Us</a></li>
            <li><a href="mailto:partnership@leopay.tech" className="footer-nav-link">Mail Us</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-col">
          <span className="footer-col-heading">Socials</span>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/company/leopayofficial" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://medium.com/@neha_79180" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Medium">
              <MediumIcon />
            </a>
            <a href="#" className="footer-social-icon" aria-label="X">
              <XIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Figma: Leopay logo footer 1260×402 */}
      <div className="footer-logo-footer">
        <div className="footer-logo-footer-legal">
          <a href="/terms" className="footer-legal-link">Terms &amp; Conditions</a>
          <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
        </div>
        <img src={watermarkImg} alt="" aria-hidden="true" className="footer-watermark-img" />
      </div>
    </div>
  </footer>
);

export default Footer;
