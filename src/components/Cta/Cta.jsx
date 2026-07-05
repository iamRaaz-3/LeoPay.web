import './Cta.css';

const CtaLogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53.472" height="53.379" viewBox="0 0 54 54" fill="none" className="cta-logo-icon cta-logo-icon--desktop">
    <path d="M0 6.67415C0 2.98562 2.98537 0 6.68751 0H20.0486C23.7507 0 26.7361 2.98562 26.7361 6.67415V19.7789C26.7361 19.8577 26.7361 19.9366 26.7361 20.0155C26.7361 23.6901 29.7215 26.6757 33.4097 26.6897H33.4236H46.7847C50.4869 26.6897 53.4722 29.6753 53.4722 33.3638V46.7052C53.4722 50.3937 50.4869 53.3793 46.7847 53.3793H33.4236C29.7215 53.3793 26.7361 50.3937 26.7361 46.7052V33.3638C26.7361 33.3406 26.7361 33.3197 26.7361 33.3012C26.7013 29.6544 23.7299 26.6897 20.0486 26.6897C20.0347 26.6897 20.0185 26.6897 19.9999 26.6897H6.68751C2.98537 26.6897 0 23.704 0 20.0155V6.67415Z" fill="white"/>
  </svg>
);

const CtaLogoIconMobile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="51" viewBox="0 0 52 51" fill="none" className="cta-logo-icon cta-logo-icon--mobile">
    <path d="M0 6.37009C0 2.8496 2.84936 0 6.38284 0H19.1352C22.6687 0 25.5181 2.8496 25.5181 6.37009V18.8778C25.5181 18.9531 25.5181 19.0283 25.5181 19.1036C25.5181 22.6108 28.3674 25.4604 31.8876 25.4737H31.9009H44.6533C48.1868 25.4737 51.0361 28.3233 51.0361 31.8438V44.5774C51.0361 48.0978 48.1868 50.9474 44.6533 50.9474H31.9009C28.3674 50.9474 25.5181 48.0978 25.5181 44.5774V31.8438C25.5181 31.8217 25.5181 31.8017 25.5181 31.784C25.4849 28.3034 22.6488 25.4737 19.1352 25.4737C19.122 25.4737 19.1065 25.4737 19.0887 25.4737H6.38284C2.84936 25.4737 0 22.6241 0 19.1036V6.37009Z" fill="white"/>
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
          <CtaLogoIconMobile />
        </div>
      </div>
      <div className="cta-top">
        <div className="cta-title">
          <h2 className="cta-heading">
            <span className="cta-heading--semibold">Built for the Next Generation of</span><br />
            <span className="cta-heading--regular">Global Finance<span className="cta-heading-period">.</span></span>
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
