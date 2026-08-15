import './Cta.css';
import bgRect from './assets/rect22-mobile.png';
import bgImage from './assets/image34-mobile.png';


const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4.41669 12.3835L13.5834 3.2168" stroke="#00BA85" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.41669 3.2168H13.5834V12.3835" stroke="#00BA85" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53.472" height="53.379" viewBox="0 0 54 54" fill="none">
    <path d="M0 6.67415C0 2.98562 2.98537 0 6.68751 0H20.0486C23.7507 0 26.7361 2.98562 26.7361 6.67415V19.7789C26.7361 19.8577 26.7361 19.9366 26.7361 20.0155C26.7361 23.6901 29.7215 26.6757 33.4097 26.6897H33.4236H46.7847C50.4869 26.6897 53.4722 29.6753 53.4722 33.3638V46.7052C53.4722 50.3937 50.4869 53.3793 46.7847 53.3793H33.4236C29.7215 53.3793 26.7361 50.3937 26.7361 46.7052V33.3638C26.7361 33.3406 26.7361 33.3197 26.7361 33.3012C26.7013 29.6544 23.7299 26.6897 20.0486 26.6897C20.0347 26.6897 20.0185 26.6897 19.9999 26.6897H6.68751C2.98537 26.6897 0 23.704 0 20.0155V6.67415Z" fill="white"/>
  </svg>
);

const Cta = () => (
  <section className="abc-section">
    <div className="abc-frame">
      <img src={bgRect} alt="" className="abc-bg abc-bg--rect" aria-hidden="true" />
      <img src={bgImage} alt="" className="abc-bg abc-bg--image" aria-hidden="true" />
      <div className="abc-tint" aria-hidden="true" />
      <div className="abc-vignette" aria-hidden="true" />
      <div className="abc-inner">
        <div className="abc-logo">
          <div className="abc-logo-bg">
            <LogoIcon />
          </div>
        </div>
        <div className="abc-top">
          <div className="abc-text">
          <h2 className="abc-heading">
            <span className="abc-heading-strong">Building Borderless</span>
            <span className="abc-heading-light">Financial<br className="abc-heading-br" /> Infrastructure<span className="abc-heading-dot">.</span></span>
          </h2>
          <p className="abc-desc">
            The future of finance is connected, programmable, and always on. Leopay is building
            the infrastructure that enables businesses to move money without borders, unlocking
            faster growth in a truly global economy.
          </p>
          </div>
          <div className="abc-buttons">
            <a href="https://dash.leopay.tech/signin" target="_blank" rel="noopener noreferrer" className="abc-btn">
              Get Started Now
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Cta;
