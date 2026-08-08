import './Audience.css';
import icoRemittance from '../../shared/assets/aud-remittance.png';
import icoEnterprises from '../../shared/assets/aud-enterprises.png';
import icoPayroll from '../../shared/assets/aud-payroll.png';
import icoMarketplaces from '../../shared/assets/aud-marketplaces.png';
import icoFintechs from '../../shared/assets/aud-fintechs.png';
import icoExchanges from '../../shared/assets/aud-exchanges.png';

const cards = [
  { icon: icoRemittance, title: 'Remittance Companies', desc: 'Deliver cross-border money transfers with stablecoin-powered settlement and local payouts.' },
  { icon: icoEnterprises, title: 'International Businesses', desc: 'Move funds globally with reduced costs and improved settlement efficiency across markets.' },
  { icon: icoPayroll, title: 'Payroll Providers', desc: 'Expand global payment services through faster settlements and efficient fund movement.' },
  { icon: icoMarketplaces, title: 'B2B Payment Platforms', desc: 'Simplify cross-border business payments through scalable and efficient settlement infrastructure.' },
  { icon: icoFintechs, title: 'Fintech Platforms', desc: 'Launch remittance products with scalable infrastructure and developer-friendly payment APIs.' },
  { icon: icoExchanges, title: 'Financial Institutions', desc: 'Modernize international payment operations with scalable and transparent settlement infrastructure globally.' },
];

const Audience = () => (
  <section className="cbr-audience">
    <div className="cbr-audience__deco cbr-audience__deco--top" aria-hidden="true" />
    <div className="cbr-audience__deco cbr-audience__deco--bottom" aria-hidden="true" />
    <div className="cbr-audience__inner">
      <div className="cbr-audience__head">
        <span className="cbr-audience__badge">Ideal For</span>
        <h2 className="cbr-audience__title">
          <span className="cbr-audience__title-light">Powering Firms with</span>
          <span className="cbr-audience__title-bold">Faster Payment Needs</span>
        </h2>
        <p className="cbr-audience__para">Helping companies scale cross-border payments with faster settlement capabilities.</p>
      </div>
      <div className="cbr-audience__cards">
        {cards.map(card => (
          <div key={card.title} className="cbr-audience__card">
            <img src={card.icon} alt="" aria-hidden="true" className="cbr-audience__card-icon" loading="lazy" />
            <h3 className="cbr-audience__card-title">{card.title}</h3>
            <p className="cbr-audience__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Audience;
