import './Audience.css';
import icoMarketplaces from '../shared/assets/aud-marketplaces.png';
import icoFintechs from '../shared/assets/aud-fintechs.png';
import icoEnterprises from '../shared/assets/aud-enterprises.png';
import icoRemittance from '../shared/assets/aud-remittance.png';
import icoExchanges from '../shared/assets/aud-exchanges.png';
import icoPayroll from '../shared/assets/aud-payroll.png';

const cards = [
  { icon: icoMarketplaces, title: 'Marketplaces', desc: 'Simplify merchant collections, settlements, and reconciliation across global payment ecosystems.' },
  { icon: icoExchanges, title: 'SaaS Platforms', desc: 'Automate customer collections and streamline reconciliation workflows across multiple regions.' },
  { icon: icoFintechs, title: 'Fintechs', desc: 'Build scalable collection experiences using virtual accounts and modern payment APIs globally.' },
  { icon: icoEnterprises, title: 'Enterprises', desc: 'Improve payment visibility and operational efficiency across business units and subsidiaries.' },
  { icon: icoRemittance, title: 'Payment Providers', desc: 'Offer flexible and scalable collection infrastructure across multiple global payment corridors.' },
  { icon: icoPayroll, title: 'Financial Institutions', desc: 'Manage global customer payments, refunds, and reconciliation through virtual account systems.' },
];

const Audience = () => (
  <section className="va-audience">
    <div className="va-audience__deco va-audience__deco--top" aria-hidden="true" />
    <div className="va-audience__deco va-audience__deco--bottom" aria-hidden="true" />
    <div className="va-audience__inner">
      <div className="va-audience__head">
        <span className="va-audience__badge">Ideal For</span>
        <h2 className="va-audience__title">
          <span className="va-audience__title-light">Designed for</span>
          <span className="va-audience__title-bold">Global Virtual Account Needs</span>
        </h2>
        <p className="va-audience__para">Helping businesses simplify collections and reconciliation using virtual account systems.</p>
      </div>
      <div className="va-audience__cards">
        {cards.map(card => (
          <div key={card.title} className="va-audience__card">
            <img src={card.icon} alt="" aria-hidden="true" className="va-audience__card-icon" loading="lazy" />
            <h3 className="va-audience__card-title">{card.title}</h3>
            <p className="va-audience__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Audience;
