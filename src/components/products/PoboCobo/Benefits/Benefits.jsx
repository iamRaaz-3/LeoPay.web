import './Benefits.css';
import illoCentralized from './assets/benefit-centralized.png';
import illoCollections from './assets/benefit-collections.png';
import illoVisibility from './assets/benefit-visibility.png';
import illoEfficiency from './assets/benefit-efficiency.png';

const cards = [
  { illo: illoCentralized, title: 'Centralized Payment Operations', desc: 'Execute payments across entities through a single treasury infrastructure.' },
  { illo: illoCollections, title: 'Simplified Collections Management', desc: 'Reduce operational complexity with streamlined collection workflows.' },
  { illo: illoVisibility, title: 'Better Cash Visibility', desc: 'Make informed treasury decisions with centralized financial oversight.' },
  { illo: illoEfficiency, title: 'Improved Operational Efficiency', desc: 'Streamline treasury processes and reduce administrative payment workloads.' },
];

const Benefits = () => (
  <section className="pobo-benefits">
    <div className="pobo-benefits__inner">
      <div className="pobo-benefits__head">
        <span className="pobo-benefits__badge">Key Benefits</span>
        <h2 className="pobo-benefits__title">
          <span className="pobo-benefits__title-light">Built to Simplify</span>
          <span className="pobo-benefits__title-bold">Centralized Payment Operations</span>
        </h2>
        <p className="pobo-benefits__para">Streamline multi-entity payments with centralized operational infrastructure.</p>
      </div>
      <div className="pobo-benefits__cards">
        {cards.map(card => (
          <div key={card.title} className="pobo-benefits__card">
            <img src={card.illo} alt="" aria-hidden="true" className="pobo-benefits__card-illo" loading="lazy" />
            <h3 className="pobo-benefits__card-title">{card.title}</h3>
            <p className="pobo-benefits__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
