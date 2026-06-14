import './Cta.css';

const CtaLogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53.472" height="53.379" viewBox="0 0 54 54" fill="none">
    <path d="M0 6.67415C0 2.98562 2.98537 0 6.68751 0H20.0486C23.7507 0 26.7361 2.98562 26.7361 6.67415V19.7789C26.7361 19.8577 26.7361 19.9366 26.7361 20.0155C26.7361 23.6901 29.7215 26.6757 33.4097 26.6897H33.4236H46.7847C50.4869 26.6897 53.4722 29.6753 53.4722 33.3638V46.7052C53.4722 50.3937 50.4869 53.3793 46.7847 53.3793H33.4236C29.7215 53.3793 26.7361 50.3937 26.7361 46.7052V33.3638C26.7361 33.3406 26.7361 33.3197 26.7361 33.3012C26.7013 29.6544 23.7299 26.6897 20.0486 26.6897C20.0347 26.6897 20.0185 26.6897 19.9999 26.6897H6.68751C2.98537 26.6897 0 23.704 0 20.0155V6.67415Z" fill="white"/>
  </svg>
);

const Cta = () => (
  <section className="cta-section">
    <div className="cta-rect cta-rect--1" />
    <div className="cta-rect cta-rect--2" />
    <div className="cta-inner">
      <div className="cta-logo">
        <div className="cta-logo-bg">
          <CtaLogoIcon />
        </div>
      </div>
      <div className="cta-top">
        <div className="cta-title">
          <h2 className="cta-heading">
            <span className="cta-heading--semibold">Built for the Next Generation of</span><br />
            <span className="cta-heading--regular">Global Finance</span>
          </h2>
        </div>
        <div className="cta-desc-wrap">
          <p className="cta-desc">Modern infrastructure to collect, move, and manage money across borders.</p>
        </div>
        <div className="cta-buttons">
          <div className="cta-btn-wrap">
            <a href="#" className="cta-btn cta-btn--primary">Get Started</a>
          </div>
          <div className="cta-btn-wrap cta-btn-wrap--secondary">
            <div className="cta-btn-inner">
              <a href="#" className="cta-btn cta-btn--secondary">API Docs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Cta;
