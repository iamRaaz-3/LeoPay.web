import './Benefits.css';
import illoSettlement from '../shared/assets/benefit-settlement.png';
import illoRails from '../shared/assets/benefit-rails.png';
import illoCurrency from '../shared/assets/benefit-currency.png';
import illoCompliance from '../shared/assets/benefit-compliance.png';

const cards = [
  { illo: illoSettlement, title: 'Near Real-Time Settlement', desc: 'Accelerating global transactions with near real-time settlement.' },
  { illo: illoRails, title: 'Local Payout Rails', desc: 'Expand globally with localized payout infrastructure and coverage.' },
  { illo: illoCurrency, title: 'Multi-Currency Support', desc: 'Support global transactions with seamless multi-currency capabilities.' },
  { illo: illoCompliance, title: 'Built-In Compliance Checks', desc: 'Built-in KYC and AML checks for regulatory readiness.' },
];

const Benefits = () => (
  <section className="gp-benefits">
    <div className="gp-benefits__inner">
      <div className="gp-benefits__head">
        <span className="gp-benefits__badge">Key Benefits</span>
        <h2 className="gp-benefits__title">
          <span className="gp-benefits__title-light">Power Faster</span>
          <span className="gp-benefits__title-bold">Global Payout Delivery</span>
        </h2>
        <p className="gp-benefits__para">Accelerate international payouts with enhanced speed, visibility, and operational efficiency.</p>
      </div>
      <div className="gp-benefits__cards">
        {cards.map(card => (
          <div key={card.title} className="gp-benefits__card">
            <img src={card.illo} alt="" aria-hidden="true" className="gp-benefits__card-illo" loading="lazy" />
            <h3 className="gp-benefits__card-title">{card.title}</h3>
            <p className="gp-benefits__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
