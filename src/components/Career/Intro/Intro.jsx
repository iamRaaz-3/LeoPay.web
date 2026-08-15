import './Intro.css';
import introVisual from './assets/intro-visual.png';
import sectionDeco from './assets/section-deco.png';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25" stroke="#FFFFFF" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Intro = () => (
  <section className="career-intro">
    <div className="career-intro__frame">
      <img src={sectionDeco} alt="" className="career-intro__deco" aria-hidden="true" />
      <div className="career-intro__card">
        <div className="career-intro__visual">
          <img src={introVisual} alt="" />
        </div>
        <div className="career-intro__content">
          <h2 className="career-intro__title">Join the team building the global payments</h2>
          <p className="career-intro__desc">
            Cross-border payments have long been associated with slow settlement times, high
            transaction fees, and complex intermediary networks.{' '}
            <span className="career-intro__desc-sm">
              As businesses expand globally, the need for faster, more transparent, and
              cost-effective payment infrastructure has become increasingly important
            </span>
          </p>
          <a href="https://dash.leopay.tech/signin" target="_blank" rel="noopener noreferrer" className="career-intro__btn">
            Get started
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
