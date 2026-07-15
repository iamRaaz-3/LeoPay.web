import { useEffect, useRef, useState } from 'react';
import './Hero.css';
import globeSrc from '../../assets/globe.png';
import flagUsaSrc from '../../assets/flag-usa.svg';
import flagPhSrc  from '../../assets/flag-ph.svg';
import flagJpSrc  from '../../assets/flag-jp.svg';
import flagIdSrc  from '../../assets/flag-id.svg';
import flagVnSrc  from '../../assets/flag-vn.svg';
import leopayLogoSrc from '../../assets/leopay-logo-green.png';
import coinUsdcSrc from '../../assets/coin-usdc.svg';
import coinUsdtSrc from '../../assets/coin-usdt.svg';
import connectorDashesSrc from '../../assets/connector-dashes.svg';
import heroBgMobileSrc from './assets/Container (11).png';
import globeMobileSrc from './assets/Group (7).png';

export default function Hero() {
  const globeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= 480
  );
  const [isTabletDown, setIsTabletDown] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= 900
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 480px)');
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const onChange = () => setIsTabletDown(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Toronto',
      hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false,
    }).formatToParts(now);
    const h = parseInt(parts.find(p => p.type === 'hour').value);
    const m = parseInt(parts.find(p => p.type === 'minute').value);
    const s = parseInt(parts.find(p => p.type === 'second').value);
    const secondsInDay = h * 3600 + m * 60 + s;
    const delay = -((secondsInDay / 86400) * 60);
    if (globeRef.current) globeRef.current.style.animationDelay = `${delay}s`;
  }, []);

  return (
    <section className="hero">

      {isMobile ? (
        <>
          <div className="hero__bg-mobile-wrap">
            <img src={heroBgMobileSrc} alt="" aria-hidden="true" className="hero__bg-mobile" />
          </div>
          <div className="hero__fade" />
        </>
      ) : (
        <>
          <div className="hero__rays">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="hero__ray" />
            ))}
          </div>

          <div className="hero__fade" />
        </>
      )}

      <div className="hero__content">

        <div className="hero__badge">
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#badge-dots-a)">
              <path d="M5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6C4.73478 6 4.48043 5.89464 4.29289 5.70711C4.10536 5.51957 4 5.26522 4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4ZM3 2C3.26522 2 3.51957 2.10536 3.70711 2.29289C3.89464 2.48043 4 2.73478 4 3C4 3.26522 3.89464 3.51957 3.70711 3.70711C3.51957 3.89464 3.26522 4 3 4C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM1 0C1.26522 0 1.51957 0.105357 1.70711 0.292893C1.89464 0.48043 2 0.734784 2 1C2 1.26522 1.89464 1.51957 1.70711 1.70711C1.51957 1.89464 1.26522 2 1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM3 6C3.26522 6 3.51957 6.10536 3.70711 6.29289C3.89464 6.48043 4 6.73478 4 7C4 7.26522 3.89464 7.51957 3.70711 7.70711C3.51957 7.89464 3.26522 8 3 8C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6ZM1 8C1.26522 8 1.51957 8.10536 1.70711 8.29289C1.89464 8.48043 2 8.73478 2 9C2 9.26522 1.89464 9.51957 1.70711 9.70711C1.51957 9.89464 1.26522 10 1 10C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="badge-dots-a"><rect width="6" height="10" fill="white"/></clipPath>
            </defs>
          </svg>
          <span className="hero__badge-text">FASTEST PAYMENT</span>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#badge-dots-b)">
              <path d="M1 6C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4C1.26522 4 1.51957 4.10536 1.70711 4.29289C1.89464 4.48043 2 4.73478 2 5C2 5.26522 1.89464 5.51957 1.70711 5.70711C1.51957 5.89464 1.26522 6 1 6ZM3 8C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6C3.26522 6 3.51957 6.10536 3.70711 6.29289C3.89464 6.48043 4 6.73478 4 7C4 7.26522 3.89464 7.51957 3.70711 7.70711C3.51957 7.89464 3.26522 8 3 8ZM5 10C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8C5.26522 8 5.51957 8.10536 5.70711 8.29289C5.89464 8.48043 6 8.73478 6 9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10ZM3 4C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2C3.26522 2 3.51957 2.10536 3.70711 2.29289C3.89464 2.48043 4 2.73478 4 3C4 3.26522 3.89464 3.51957 3.70711 3.70711C3.51957 3.89464 3.26522 4 3 4ZM5 2C4.73478 2 4.48043 1.89464 4.29289 1.70711C4.10536 1.51957 4 1.26522 4 1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1C6 1.26522 5.89464 1.51957 5.70711 1.70711C5.51957 1.89464 5.26522 2 5 2Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="badge-dots-b"><rect width="6" height="10" fill="white"/></clipPath>
            </defs>
          </svg>
        </div>

        <div className="hero__heading-wrap">
          <h1 className="hero__heading">
            <span className="hero__heading--bold">Stablecoin API </span><br />
            <span className="hero__heading--light">for Global Payments</span>
          </h1>
        </div>

        <div className="hero__desc-wrap">
          <p className="hero__desc">
            A modern infrastructure for global finance, orchestrating stablecoins, local payment rails, virtual accounts, and integrated compliance.
          </p>
        </div>

        <div className="hero__buttons">
          <div className="hero__btn-wrap">
            <a href="#" className="hero__btn hero__btn--primary">
              <div className="hero__btn-overlay" />
              Get Started
            </a>
          </div>
          <div className="hero__btn-wrap">
            <a href="#" className="hero__btn hero__btn--secondary">
              <div className="hero__btn-secondary__visual">
                <div className="hero__btn-secondary__border" />
                <span className="hero__btn-secondary__label">API Docs</span>
                <span className="hero__btn-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.91699 6.99996H11.0837M7.00033 11.0833L11.0837 6.99996L7.00033 2.91663" stroke="black" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>

      </div>

      <div className="hero__visual">
        <div className="hero__ring-group">
          <img ref={globeRef} className="hero__globe" src={isMobile ? globeMobileSrc : globeSrc} alt="" />
        </div>
        <div className="hero__ring-glow" />

        <div className="hero__txn-card hero__txn-card--api">
          <div className="hero__txn-pill">
            <img className="hero__txn-logo" src={leopayLogoSrc} alt="LeoPay" />
            <img className="hero__txn-dashes" src={connectorDashesSrc} alt="" />
            <img className="hero__txn-coin" src={coinUsdcSrc} alt="USDC" />
          </div>
          <div className="hero__txn-label">
            <span className="hero__txn-bold">Stablecoin</span>
            <span className="hero__txn-light">API</span>
          </div>
        </div>

        <div className="hero__txn-card hero__txn-card--backed">
          <div className="hero__txn-label hero__txn-label--left">
            <span className="hero__txn-bold">Stablecoin</span>
            <span className="hero__txn-light">Backed</span>
          </div>
          <div className="hero__txn-coins">
            <div className="hero__txn-coin-tile">
              <img className="hero__txn-coin" src={coinUsdcSrc} alt="USDC" />
              <span className="hero__txn-ticker">USDC</span>
            </div>
            <div className="hero__txn-coin-tile">
              <img className="hero__txn-coin" src={coinUsdtSrc} alt="USDT" />
              <span className="hero__txn-ticker">USDT</span>
            </div>
          </div>
        </div>

        <div className="hero__flag hero__flag--sm hero__flag--usa">
          <img className="hero__flag-icon" src={flagUsaSrc} alt="USA" />
        </div>
        <div className="hero__flag hero__flag--sm hero__flag--ph">
          <img className="hero__flag-icon" src={flagPhSrc} alt="Philippines" />
        </div>
        <div className="hero__flag hero__flag--sm hero__flag--jp">
          {isTabletDown ? (
            <img className="hero__flag-icon" src={flagIdSrc} alt="Indonesia" />
          ) : (
            <img className="hero__flag-icon" src={flagJpSrc} alt="Japan" />
          )}
        </div>
        <div className="hero__flag hero__flag--sm hero__flag--vn">
          <img className="hero__flag-icon" src={flagVnSrc} alt="Vietnam" />
        </div>
      </div>

    </section>
  );
}
