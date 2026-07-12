import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const ChevronIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" d="M7 9.5L12 14.5L17 9.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NAV_LINKS = [
  { label: 'Products',  dropdown: true },
  { label: 'Partners',  dropdown: false },
  { label: 'API Docs',  dropdown: true, href: 'https://leopay.gitbook.io/leopay-docs' },
  { label: 'Resources', dropdown: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('touchstart', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('touchstart', onClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = parseInt(document.body.style.top || '0', 10);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, -scrollY);
    }
    return () => {
      const scrollY = parseInt(document.body.style.top || '0', 10);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) window.scrollTo(0, -scrollY);
    };
  }, [menuOpen]);

  return (
    <nav ref={navRef} className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">

        <a href="/" className="navbar-logo">
          <span className="navbar-logo-text">leopay</span>
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a href={link.href || '#'} target={link.href ? "_blank" : undefined} rel={link.href ? "noopener noreferrer" : undefined} className="nav-link" onClick={() => setMenuOpen(false)}>
                <span className="nav-link-label">{link.label}</span>
                {link.dropdown && <ChevronIcon />}
              </a>
            </li>
          ))}
          <li className="mobile-menu-getstarted">
            <a href="https://dash.leopay.tech/signin" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </li>
        </ul>

        <div className="navbar-cta">
          <a href="https://dash.leopay.tech/signin" target="_blank" rel="noopener noreferrer" className="nav-getstarted">  Sign in</a>

          <button className={`hamburger${menuOpen ? ' open' : ''}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(v => !v)}>
            <span /><span /><span />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;