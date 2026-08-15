import './WhyExists.css';
import whyVisual from './assets/why-visual.png';

const WhyExists = () => (
  <section className="about-why">
    <div className="about-why__frame">
      <div className="about-why__visual">
        <img src={whyVisual} alt="" />
      </div>
      <div className="about-why__content">
        <h2 className="about-why__title">Why<br />Leopay Exists</h2>
        <p className="about-why__body">
          Cross-border payments remain complex, expensive, and dependent on legacy financial
          infrastructure. Businesses often juggle multiple providers, unpredictable settlement
          times, and disconnected systems just to move money internationally.
          <br /><br />
          <span className="about-why__lead">Leopay was built to change that.</span>
          <br /><br />
          By bringing stablecoin settlement, local payment rails, treasury management, virtual
          accounts, and compliance together on one platform, we help businesses operate globally
          with greater speed, visibility, and confidence.
        </p>
      </div>
    </div>
  </section>
);

export default WhyExists;
