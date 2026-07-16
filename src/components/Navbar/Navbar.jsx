import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import iconPayouts from './assets/nav-icon-payouts.svg';
import iconRemittance from './assets/nav-icon-remittance.svg';
import iconPobo from './assets/nav-icon-pobo.svg';
import iconTreasury from './assets/nav-icon-treasury.svg';
import iconAccounts from './assets/nav-icon-accounts.svg';

const ChevronIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" d="M7 9.5L12 14.5L17 9.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PRODUCT_ITEMS = [
  { icon: iconPayouts,    title: 'Global Payouts',                  desc: 'Send Payments Across Borders in Seconds' },
  { icon: iconRemittance, title: 'Cross-Border Remittance',         desc: 'Faster International Transfers, Lower Costs' },
  { icon: iconPobo,       title: 'POBO / COBO',                     desc: 'Simplify Global Payment Operations' },
  { icon: iconTreasury,   title: 'Treasury & Liquidity Management', desc: 'Optimize Global Cash Flow' },
  { icon: iconAccounts,   title: 'Virtual Accounts',                desc: 'Streamline Collections and Reconciliation' },
];

const NAV_LINKS = [
  { label: 'Products',  dropdown: true },
  { label: 'Resources', dropdown: true },
  { label: 'Company',   dropdown: false },
  { label: 'API Docs',  dropdown: false, href: 'https://leopay.gitbook.io/leopay-docs' },
];

const canHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (min-width: 901px)').matches;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  const openProducts = () => {
    clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };

  const closeProductsDelayed = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), 200);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen && !productsOpen) return;
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('touchstart', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('touchstart', onClickOutside);
    };
  }, [menuOpen, productsOpen]);

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

  const closeAll = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <nav ref={navRef} className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">

        <a href="/" className="navbar-logo">
          <span className="navbar-logo-text">leopay</span>
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <li
            className={`nav-item-dropdown${productsOpen ? ' open' : ''}`}
            onMouseEnter={() => canHover() && openProducts()}
            onMouseLeave={() => canHover() && closeProductsDelayed()}
          >
            <a
              href="#"
              className="nav-link"
              aria-haspopup="true"
              aria-expanded={productsOpen}
              onClick={(e) => {
                e.preventDefault();
                setProductsOpen(v => !v);
              }}
            >
              <span className="nav-link-label" data-label="Products">Products</span>
              <ChevronIcon />
            </a>
            <div className="nav-dropdown">
              {PRODUCT_ITEMS.map(item => (
                <a key={item.title} href="#" className="nav-dropdown-item" onClick={closeAll}>
                  <span className="nav-dropdown-icon">
                    <img src={item.icon} alt="" aria-hidden="true" />
                  </span>
                  <span className="nav-dropdown-texts">
                    <span className="nav-dropdown-title">{item.title}</span>
                    <span className="nav-dropdown-desc">{item.desc}</span>
                  </span>
                </a>
              ))}
            </div>
          </li>
          {NAV_LINKS.filter(link => link.label !== 'Products').map(link => (
            <li key={link.label}>
              <a href={link.href || '#'} target={link.href ? "_blank" : undefined} rel={link.href ? "noopener noreferrer" : undefined} className="nav-link" onClick={() => setMenuOpen(false)}>
                <span className="nav-link-label" data-label={link.label}>{link.label}</span>
                {link.dropdown && <ChevronIcon />}
              </a>
            </li>
          ))}
          <li className="mobile-menu-getstarted">
            <a href="https://dash.leopay.tech/signin" target="_blank" rel="noopener noreferrer" onClick={closeAll}>
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
