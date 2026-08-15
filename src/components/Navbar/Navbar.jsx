import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import iconPayouts from './assets/nav-icon-payouts.svg';
import iconRemittance from './assets/nav-icon-remittance.svg';
import iconPobo from './assets/nav-icon-pobo.svg';
import iconTreasury from './assets/nav-icon-treasury.svg';
import iconAccounts from './assets/nav-icon-accounts.svg';
import iconApiDocs from './assets/nav-icon-apidocs.svg';
import iconBlogs from './assets/nav-icon-blogs.svg';
import iconAbout from './assets/nav-icon-about.svg';
import iconPrivacy from './assets/nav-icon-privacy.svg';
import iconCareers from './assets/nav-icon-careers.svg';

const ChevronIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" d="M7 9.5L12 14.5L17 9.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const prefetchProductPage = () => import('../../pages/products/ProductPage.jsx');

const PRODUCT_ITEMS = [
  { icon: iconPayouts,    title: 'Global Payouts',                  desc: 'Send Payments Across Borders in Seconds', to: '/products/global-payouts' },
  { icon: iconRemittance, title: 'Cross-Border Remittance',         desc: 'Faster International Transfers, Lower Costs', to: '/products/cross-border-remittance' },
  { icon: iconPobo,       title: 'POBO / COBO',                     desc: 'Simplify Global Payment Operations', to: '/products/pobo-cobo' },
  { icon: iconTreasury,   title: 'Treasury & Liquidity Management', desc: 'Optimize Global Cash Flow', to: '/products/treasury-liquidity' },
  { icon: iconAccounts,   title: 'Virtual Accounts',                desc: 'Streamline Collections and Reconciliation', to: '/products/virtual-accounts' },
];

const RESOURCE_ITEMS = [
  { icon: iconApiDocs, title: 'API Docs', desc: 'Everything developers need to integrate', href: 'https://leopay.gitbook.io/leopay-docs' },
  { icon: iconBlogs,   title: 'Blogs',    desc: 'Insights, updates, and Industry perspectives', to: '/blog' },
];

const COMPANY_ITEMS = [
  { icon: iconAbout,   title: 'About Us',       desc: 'Learn about our mission, vision, and values',     to: '/about' },
  { icon: iconPrivacy, title: 'Privacy Policy', desc: 'Review our privacy, security, and legal policies', to: '/privacy' },
  { icon: iconCareers, title: 'Careers',        desc: 'Join our team shaping the future of finance',      to: '/career' },
];

const NAV_LINKS = [
  { label: 'Products',  dropdown: true },
  { label: 'Resources', dropdown: true },
  { label: 'Company',   dropdown: true },
];

const canHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (min-width: 901px)').matches;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [dropdownMounted, setDropdownMounted] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  const revealProducts = (next) => {
    if (!dropdownMounted) {
      setDropdownMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setProductsOpen(next)));
    } else {
      setProductsOpen(next);
    }
  };

  const openProducts = () => {
    clearTimeout(closeTimer.current);
    setResourcesOpen(false);
    setCompanyOpen(false);
    revealProducts(true);
  };

  const openResources = () => {
    clearTimeout(closeTimer.current);
    setProductsOpen(false);
    setCompanyOpen(false);
    setResourcesOpen(true);
  };

  const openCompany = () => {
    clearTimeout(closeTimer.current);
    setProductsOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(true);
  };

  const closeMenusDelayed = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setProductsOpen(false);
      setResourcesOpen(false);
      setCompanyOpen(false);
    }, 200);
  };

  const toggleProducts = () => {
    setResourcesOpen(false);
    setCompanyOpen(false);
    revealProducts(!productsOpen);
  };

  const toggleResources = () => {
    setProductsOpen(false);
    setCompanyOpen(false);
    setResourcesOpen(v => !v);
  };

  const toggleCompany = () => {
    setProductsOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(v => !v);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!productsOpen && !resourcesOpen && !companyOpen && !menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setProductsOpen(false);
        setResourcesOpen(false);
        setCompanyOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [productsOpen, resourcesOpen, companyOpen, menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen && !productsOpen && !resourcesOpen && !companyOpen) return;
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setProductsOpen(false);
        setResourcesOpen(false);
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('touchstart', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('touchstart', onClickOutside);
    };
  }, [menuOpen, productsOpen, resourcesOpen, companyOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const { overflow, paddingRight } = document.body.style;
    const gutter = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (gutter > 0) document.body.style.paddingRight = `${gutter}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(false);
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
            onMouseEnter={() => { if (canHover()) { openProducts(); prefetchProductPage(); } }}
            onMouseLeave={() => canHover() && closeMenusDelayed()}
          >
            <a
              href="#"
              className="nav-link"
              aria-haspopup="true"
              aria-expanded={productsOpen}
              onClick={(e) => {
                e.preventDefault();
                toggleProducts();
              }}
            >
              <span className="nav-link-label" data-label="Products">Products</span>
              <ChevronIcon />
            </a>
            {dropdownMounted && (
            <div className="nav-dropdown">
              {PRODUCT_ITEMS.map(item => {
                const inner = (
                  <>
                    <span className="nav-dropdown-icon">
                      <img src={item.icon} alt="" aria-hidden="true" />
                    </span>
                    <span className="nav-dropdown-texts">
                      <span className="nav-dropdown-title">{item.title}</span>
                      <span className="nav-dropdown-desc">{item.desc}</span>
                    </span>
                  </>
                );
                return item.to ? (
                  <Link key={item.title} to={item.to} className="nav-dropdown-item" onClick={closeAll} onMouseEnter={prefetchProductPage}>
                    {inner}
                  </Link>
                ) : (
                  <a key={item.title} href="#" className="nav-dropdown-item" onClick={closeAll}>
                    {inner}
                  </a>
                );
              })}
            </div>
            )}
          </li>
          <li
            className={`nav-item-dropdown${resourcesOpen ? ' open' : ''}`}
            onMouseEnter={() => canHover() && openResources()}
            onMouseLeave={() => canHover() && closeMenusDelayed()}
          >
            <a
              href="#"
              className="nav-link"
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
              onClick={(e) => {
                e.preventDefault();
                toggleResources();
              }}
            >
              <span className="nav-link-label" data-label="Resources">Resources</span>
              <ChevronIcon />
            </a>
            <div className="nav-dropdown nav-dropdown--resources">
              {RESOURCE_ITEMS.map(item => {
                const body = (
                  <>
                    <span className="nav-dropdown-icon">
                      <img src={item.icon} alt="" aria-hidden="true" />
                    </span>
                    <span className="nav-dropdown-texts">
                      <span className="nav-dropdown-title">{item.title}</span>
                      <span className="nav-dropdown-desc">{item.desc}</span>
                    </span>
                  </>
                );
                return item.to ? (
                  <Link key={item.title} to={item.to} className="nav-dropdown-item" onClick={closeAll}>
                    {body}
                  </Link>
                ) : (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-dropdown-item"
                    onClick={closeAll}
                  >
                    {body}
                  </a>
                );
              })}
            </div>
          </li>
          <li
            className={`nav-item-dropdown${companyOpen ? ' open' : ''}`}
            onMouseEnter={() => canHover() && openCompany()}
            onMouseLeave={() => canHover() && closeMenusDelayed()}
          >
            <a
              href="#"
              className="nav-link"
              aria-haspopup="true"
              aria-expanded={companyOpen}
              onClick={(e) => {
                e.preventDefault();
                toggleCompany();
              }}
            >
              <span className="nav-link-label" data-label="Company">Company</span>
              <ChevronIcon />
            </a>
            <div className="nav-dropdown nav-dropdown--company">
              {COMPANY_ITEMS.map(item => (
                <Link key={item.title} to={item.to} className="nav-dropdown-item" onClick={closeAll}>
                  <span className="nav-dropdown-icon">
                    <img src={item.icon} alt="" aria-hidden="true" />
                  </span>
                  <span className="nav-dropdown-texts">
                    <span className="nav-dropdown-title">{item.title}</span>
                    <span className="nav-dropdown-desc">{item.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </li>
          {NAV_LINKS.filter(link => link.label !== 'Products' && link.label !== 'Resources' && link.label !== 'Company').map(link => (
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
          <a href="https://dash.leopay.tech/signin" target="_blank" rel="noopener noreferrer" className="nav-signin">Sign in</a>
          <a href="https://dash.leopay.tech/signin" target="_blank" rel="noopener noreferrer" className="nav-getstarted">Get Started</a>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => {
              const next = !menuOpen;
              setMenuOpen(next);
              if (!next) {
                setProductsOpen(false);
                setResourcesOpen(false);
                setCompanyOpen(false);
              }
            }}
          >
            <span /><span /><span />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
