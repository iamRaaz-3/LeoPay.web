import './Principles.css';
import iconSpeed from './assets/icon-speed.svg';
import iconTransparency from './assets/icon-transparency.svg';
import iconScale from './assets/icon-scale.svg';
import iconCompliance from './assets/icon-compliance.svg';
import decoTop from './assets/deco-top.png';
import decoBottom from './assets/deco-bottom.png';
import decoTopMobile from './assets/deco-top-mobile.png';
import decoBottomMobile from './assets/deco-bottom-mobile.png';

const CARDS = [
  { icon: iconSpeed, title: 'Speed Without Compromise', desc: 'Payments should move in seconds, not days. We build for speed at every layer of our infrastructure.',
    titleM: 'Fintechs', descM: 'Payments should move in seconds, not days. We build infrastructure that prioritizes speed without sacrificing reliability or security.' },
  { icon: iconTransparency, title: 'Transparency by Design', desc: 'Businesses deserve clear pricing, predictable settlement, and full visibility into every transaction.',
    titleM: 'Payroll Providers', descM: 'Businesses deserve clear pricing, predictable settlements, and complete visibility into every transaction.' },
  { icon: iconScale, title: 'Built to Scale', desc: 'From growing startups to global enterprises, our infrastructure scales with your business.',
    titleM: 'Marketplaces', descM: 'From growing startups to global enterprises, our infrastructure is designed to scale alongside your business.' },
  { icon: iconCompliance, title: 'Compliance at the Core', desc: "Global payments require trust. That's why compliance is built into everything we do.",
    titleM: 'Exchanges', descM: "Global payments require trust. That's why compliance, security, and regulatory readiness are built into everything we do." },
];

const Principles = () => (
  <section className="about-principles">
    <div className="about-principles__frame">
      <img src={decoTop} alt="" className="about-principles__deco about-principles__deco--d-top" aria-hidden="true" />
      <img src={decoBottom} alt="" className="about-principles__deco about-principles__deco--d-bottom" aria-hidden="true" />
      <img src={decoTopMobile} alt="" className="about-principles__deco about-principles__deco--top" aria-hidden="true" />
      <img src={decoBottomMobile} alt="" className="about-principles__deco about-principles__deco--bottom" aria-hidden="true" />
      <div className="about-principles__head">
        <span className="about-principles__badge">
          <span className="ap-d">Principles</span>
          <span className="ap-m">Comparison</span>
        </span>
        <h2 className="about-principles__title">
          <span className="about-principles__title-light">Built On</span>
          <span className="about-principles__title-strong">What We Believe</span>
        </h2>
        <p className="about-principles__desc">
          <span className="ap-d">Empowering businesses with fast, transparent, secure global payments.</span>
          <span className="ap-m">Empowering businesses with fast, transparent, secure, and scalable global payment infrastructure.</span>
        </p>
      </div>
      <div className="about-principles__grid">
        {CARDS.map(card => (
          <article key={card.title} className="principle-card">
            <span className="principle-card__icon">
              <img src={card.icon} alt="" aria-hidden="true" />
            </span>
            <h3 className="principle-card__title">
              <span className="ap-d">{card.title}</span>
              <span className="ap-m">{card.titleM}</span>
            </h3>
            <p className="principle-card__desc">
              <span className="ap-d">{card.desc}</span>
              <span className="ap-m">{card.descM}</span>
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Principles;
