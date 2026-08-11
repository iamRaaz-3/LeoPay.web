import './Audience.css';
import icoEnterpriseGroups from './assets/aud-enterprise-groups.png';
import icoPaymentAggregators from './assets/aud-payment-aggregators.png';
import icoMarketplaces from './assets/aud-marketplaces.png';
import icoMultinational from './assets/aud-multinational.png';
import icoSaas from './assets/aud-saas.png';
import icoFranchise from './assets/aud-franchise.png';

const cards = [
  { icon: icoEnterpriseGroups, title: 'Enterprise Groups', desc: 'Centralize treasury operations and payments across subsidiaries and business units globally.' },
  { icon: icoPaymentAggregators, title: 'Payment Aggregators', desc: 'Manage collections and disbursements through unified infrastructure across multiple payment channels.' },
  { icon: icoMarketplaces, title: 'Marketplaces', desc: 'Simplify merchant payments settlements and collection operations across global marketplace ecosystems.' },
  { icon: icoMultinational, title: 'Multinational Organizations', desc: 'Improve cash visibility and payment control across international entities and markets worldwide efficiently.' },
  { icon: icoSaas, title: 'SaaS Platforms', desc: 'Centralize customer collections and vendor payments across multiple entities and markets.' },
  { icon: icoFranchise, title: 'Franchise Networks', desc: 'Manage payments and collections across locations through unified multi-entity financial infrastructure.' },
];

const Audience = () => (
  <section className="pobo-audience">
    <div className="pobo-audience__deco pobo-audience__deco--top" aria-hidden="true" />
    <div className="pobo-audience__deco pobo-audience__deco--bottom" aria-hidden="true" />
    <div className="pobo-audience__inner">
      <div className="pobo-audience__head">
        <span className="pobo-audience__badge">Ideal For</span>
        <h2 className="pobo-audience__title">
          <span className="pobo-audience__title-light">Designed for</span>
          <span className="pobo-audience__title-bold">Multi-Entity Payment Needs</span>
        </h2>
        <p className="pobo-audience__para">Enabling organizations to centralize payments and collections across global entities.</p>
      </div>
      <div className="pobo-audience__cards">
        {cards.map(card => (
          <div key={card.title} className="pobo-audience__card">
            <img src={card.icon} alt="" aria-hidden="true" className="pobo-audience__card-icon" loading="lazy" />
            <h3 className="pobo-audience__card-title">{card.title}</h3>
            <p className="pobo-audience__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Audience;
