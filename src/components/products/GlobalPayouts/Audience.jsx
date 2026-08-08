import './Audience.css';
import icoFintechs from '../shared/assets/aud-fintechs.png';
import icoPayroll from '../shared/assets/aud-payroll.png';
import icoMarketplaces from '../shared/assets/aud-marketplaces.png';
import icoExchanges from '../shared/assets/aud-exchanges.png';
import icoEnterprises from '../shared/assets/aud-enterprises.png';
import icoRemittance from '../shared/assets/aud-remittance.png';

const cards = [
  { icon: icoFintechs, title: 'Fintechs', desc: 'Build global payment products using stablecoin infrastructure, virtual accounts, and payment APIs.' },
  { icon: icoPayroll, title: 'Payroll Providers', desc: 'Enable global payroll payments through multi-currency payouts and local payment rails.' },
  { icon: icoMarketplaces, title: 'Marketplaces', desc: 'Manage global collections, merchant settlements, and cross-border payout operations efficiently.' },
  { icon: icoExchanges, title: 'Exchanges', desc: 'Facilitate stablecoin settlements, treasury operations, and global fund movement seamlessly.' },
  { icon: icoEnterprises, title: 'Global Enterprises', desc: 'Streamline international payments, treasury management, and global liquidity optimization strategies.' },
  { icon: icoRemittance, title: 'Remittance Companies', desc: 'Deliver cross-border money transfers with stablecoin-powered settlement and local payouts.' },
];

const Audience = () => (
  <section className="gp-audience">
    <div className="gp-audience__deco gp-audience__deco--top" aria-hidden="true" />
    <div className="gp-audience__deco gp-audience__deco--bottom" aria-hidden="true" />
    <div className="gp-audience__inner">
      <div className="gp-audience__head">
        <span className="gp-audience__badge">Ideal For</span>
        <h2 className="gp-audience__title">
          <span className="gp-audience__title-light">Supporting Diverse</span>
          <span className="gp-audience__title-bold">Global Payment Needs</span>
        </h2>
        <p className="gp-audience__para">Enabling businesses to send global payouts across markets efficiently and reliably.</p>
      </div>
      <div className="gp-audience__cards">
        {cards.map(card => (
          <div key={card.title} className="gp-audience__card">
            <img src={card.icon} alt="" aria-hidden="true" className="gp-audience__card-icon" loading="lazy" />
            <h3 className="gp-audience__card-title">{card.title}</h3>
            <p className="gp-audience__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Audience;
