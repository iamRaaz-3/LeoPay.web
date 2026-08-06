import './Benefits.css';
import illoSettlement from '../shared/assets/benefit-settlement.png';
import illoRails from '../shared/assets/benefit-rails.png';
import illoCurrency from '../shared/assets/benefit-currency.png';
import illoCompliance from '../shared/assets/benefit-compliance.png';

const cards = [
  { illo: illoSettlement, title: 'Faster Collections', desc: 'Accelerate collection cycles with localized payment infrastructure.' },
  { illo: illoRails, title: 'Automated Reconciliation', desc: 'Match transactions automatically with built-in reconciliation workflows.' },
  { illo: illoCurrency, title: 'Global Currency Accounts', desc: 'Collect and manage funds across multiple currencies seamlessly.' },
  { illo: illoCompliance, title: 'Live Payment Tracking', desc: 'Monitor incoming payments with complete transaction visibility.' },
];

const Benefits = () => (
  <section className="va-benefits">
    <div className="va-benefits__inner">
      <div className="va-benefits__head">
        <span className="va-benefits__badge">Key Benefits</span>
        <h2 className="va-benefits__title">
          <span className="va-benefits__title-light">Built for Global</span>
          <span className="va-benefits__title-bold">Virtual Account Infrastructure</span>
        </h2>
        <p className="va-benefits__para">Improve global collections, reconciliation, and payment visibility across markets.</p>
      </div>
      <div className="va-benefits__cards">
        {cards.map(card => (
          <div key={card.title} className="va-benefits__card">
            <img src={card.illo} alt="" aria-hidden="true" className="va-benefits__card-illo" loading="lazy" />
            <h3 className="va-benefits__card-title">{card.title}</h3>
            <p className="va-benefits__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
