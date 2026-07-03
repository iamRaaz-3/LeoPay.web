import React from "react";
import "./Footer.css";
import watermarkImg from "./assets/footer-watermark.png";
import watermarkMobileImg from "./assets/footer-watermark-mobile.png";


const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style={{width:23,height:23,flexShrink:0,opacity:1}}>
    <path d="M9.08301 7.66634L12.9163 11.4997L9.08301 15.333" stroke="#162755" strokeWidth="1.91667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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

const MediumIconMobile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
    <path d="M3.92874 0C6.09854 0 7.85736 1.7711 7.85736 3.95571C7.85736 6.14032 6.0984 7.91128 3.92874 7.91128C1.75909 7.91128 0 6.14032 0 3.95571C0 1.7711 1.75895 0 3.92874 0ZM10.2027 0.231715C11.2876 0.231715 12.167 1.89884 12.167 3.95571H12.1672C12.1672 6.01205 11.2877 7.6797 10.2028 7.6797C9.11791 7.6797 8.23843 6.01205 8.23843 3.95571C8.23843 1.89937 9.11777 0.231715 10.2027 0.231715ZM13.2391 0.619598C13.6206 0.619598 13.93 2.1132 13.93 3.95571C13.93 5.79768 13.6207 7.29182 13.2391 7.29182C12.8575 7.29182 12.5484 5.79808 12.5484 3.95571C12.5484 2.11333 12.8576 0.619598 13.2391 0.619598Z" fill="#162755"/>
  </svg>
);

const XIconMobile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M2.63477 2.19531H5.26963L11.4177 11.8565H8.78279L2.63477 2.19531Z" stroke="#162755" strokeWidth="1.17105" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.25098 7.87891L2.63477 11.857" stroke="#162755" strokeWidth="1.17105" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.417 2.19531L7.80078 6.17338" stroke="#162755" strokeWidth="1.17105" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkedInIconMobile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5395 10.5395H8.37394V6.85109C8.37394 5.83983 7.98969 5.27471 7.18928 5.27471C6.31854 5.27471 5.86361 5.86281 5.86361 6.85109V10.5395H3.77664V3.51316H5.86361V4.4596C5.86361 4.4596 6.49111 3.29849 7.98214 3.29849C9.47249 3.29849 10.5395 4.20859 10.5395 6.09085V10.5395ZM1.2869 2.59312C0.576034 2.59312 0 2.01256 0 1.29656C0 0.580554 0.576034 0 1.2869 0C1.99777 0 2.57346 0.580554 2.57346 1.29656C2.57346 2.01256 1.99777 2.59312 1.2869 2.59312ZM0.20928 10.5395H2.38545V3.51316H0.20928V10.5395Z" fill="#162755"/>
  </svg>
);

const Footer = () => (
  <footer className="footer-desktop">
    <div className="footer-inner">
      {/* Lines layer — all lines/dots positioned absolutely using exact Figma coords */}
      <div className="footer-lines" aria-hidden="true">
        {/* Column separators — exact Figma x: 521, 747, 973 */}
        <div className="fl fl-sep-brand" />
        <div className="fl fl-sep-home" />
        <div className="fl fl-sep-help" />
        {/* Horizontal */}
        {/* Corner dots */}
        <div className="fl fl-dot fl-dot-tl" />
        <div className="fl fl-dot fl-dot-tr" />
        <div className="fl fl-dot fl-dot-bl" />
        <div className="fl fl-dot fl-dot-br" />
      </div>

      <div className="footer-top-row">
        <div className="footer-vborder footer-vborder--left" />
        <div className="footer-vborder footer-vborder--right" />
        <div className="footer-ext footer-ext--left" />
        <div className="footer-ext footer-ext--right" />
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
              Partnerships:&nbsp;
              <a href="mailto:partnership@leopay.tech" className="footer-company-email">
                partnership@leopay.tech<ArrowIcon />
              </a>
            </p>
            <p className="footer-company-text">
              Compliance &amp; Support:&nbsp;
              <a href="mailto:compliance@leopay.tech" className="footer-company-email">
                compliance@leopay.tech<ArrowIcon />
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

      <div className="footer-mobile">
        <div className="footer-mobile-dot footer-mobile-dot--tl" aria-hidden="true" />
        <div className="footer-mobile-dot footer-mobile-dot--tr" aria-hidden="true" />
        <div className="footer-mobile-dot footer-mobile-dot--bl" aria-hidden="true" />
        <div className="footer-mobile-dot footer-mobile-dot--br" aria-hidden="true" />

        <div className="footer-mobile-top">
          <a href="/" className="footer-logo-link">
            <span className="footer-logo-text">leopay</span>
          </a>
          <p className="footer-tagline">Modern Web3 Railing One-In-One Platform</p>
          <a href="/contact" className="footer-contact-btn">Contact Us</a>
          <div className="footer-mobile-quicklinks">
            <a href="mailto:support@leopay.tech" className="footer-mobile-link">
              support@leopay.tech<ArrowIcon />
            </a>
            <a href="/privacy" className="footer-mobile-link">
              Privacy Policy<ArrowIcon />
            </a>
            <a href="/terms" className="footer-mobile-link">
              Terms &amp; Conditions<ArrowIcon />
            </a>
          </div>
        </div>

        <div className="footer-mobile-columns">
          <div className="footer-mobile-col footer-mobile-col--home">
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

          <div className="footer-mobile-col footer-mobile-col--help">
            <span className="footer-col-heading">Help</span>
            <ul className="footer-link-list">
              <li><a href="/contact" className="footer-nav-link">Contact Us</a></li>
              <li><a href="mailto:partnership@leopay.tech" className="footer-nav-link">Mail Us</a></li>
            </ul>
            <span className="footer-col-heading">Socials</span>
            <div className="footer-social-icons">
              <a href="https://medium.com/@neha_79180" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Medium">
                <MediumIconMobile />
              </a>
              <a href="#" className="footer-social-icon" aria-label="X">
                <XIconMobile />
              </a>
              <a href="https://www.linkedin.com/company/leopayofficial" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <LinkedInIconMobile />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-mobile-watermark-section">
          <img src={watermarkMobileImg} alt="" aria-hidden="true" className="footer-mobile-watermark" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
