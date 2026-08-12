import './Audience.css';
import icoFintechs from './assets/aud-fintechs.png';
import icoPaymentProviders from './assets/aud-payment-providers.png';
import icoExchanges from './assets/aud-exchanges.png';
import icoGlobalBusinesses from './assets/aud-global-businesses.png';
import icoTreasuryTeams from './assets/aud-treasury-teams.png';
import icoFinancial from './assets/aud-financial.png';

const cards = [
  { icon: icoFintechs, title: 'Fintechs', desc: 'Manage global liquidity and stablecoin settlement across multiple markets and currencies.' },
  { icon: icoPaymentProviders, title: 'Payment Providers', desc: 'Improve cash visibility and payment control across international entities and markets worldwide efficiently.' },
  { icon: icoExchanges, title: 'Exchanges', desc: 'Manage global liquidity and stablecoin settlement across multiple markets and currencies.' },
  { icon: icoGlobalBusinesses, title: 'Global Businesses', desc: 'Streamline capital management across currencies regions and international payment corridors worldwide.' },
  { icon: icoTreasuryTeams, title: 'Treasury Teams', desc: 'Gain visibility and control over international cash management across global operations and entities.' },
  { icon: icoFinancial, title: 'Financial Institutions', desc: 'Improve liquidity visibility and capital movement across international payment networks globally.' },
];

const Audience = () => (
  <section className="tr-audience">
    <div className="tr-audience__deco tr-audience__deco--top" aria-hidden="true" />
    <div className="tr-audience__deco tr-audience__deco--bottom" aria-hidden="true" />
    <div className="tr-audience__inner">
      <div className="tr-audience__head">
        <span className="tr-audience__badge">Ideal For</span>
        <h2 className="tr-audience__title">
          <span className="tr-audience__title-light">Powering Globally</span>
          <span className="tr-audience__title-bold">Treasury and Liquidity Needs</span>
        </h2>
        <p className="tr-audience__para">Enabling organizations to optimize treasury and liquidity across multiple markets.</p>
      </div>
      <div className="tr-audience__cards">
        {cards.map(card => (
          <div key={card.title} className="tr-audience__card">
            <img src={card.icon} alt="" aria-hidden="true" className="tr-audience__card-icon" loading="lazy" />
            <h3 className="tr-audience__card-title">{card.title}</h3>
            <p className="tr-audience__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Audience;
