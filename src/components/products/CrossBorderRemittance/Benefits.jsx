import './Benefits.css';
import { SettlementVisual, TransferCostVisual, LiquidityVisual, TransactionHistoryVisual } from './BenefitVisuals.jsx';

const cards = [
  { visual: <SettlementVisual />, title: 'Instant Settlement', desc: 'Deliver faster remittance through real-time settlement.' },
  { visual: <TransferCostVisual />, title: 'Reduced Transfer Costs', desc: 'Reduce remittance costs with optimized payment settlements.' },
  { visual: <LiquidityVisual />, title: 'Better Liquidity Management', desc: 'Access liquidity faster with streamlined settlement and fund movement.' },
  { visual: <TransactionHistoryVisual />, title: 'Transparent Transactions', desc: 'Monitor transactions with real-time settlement visibility.' },
];

const Benefits = () => (
  <section className="cbr-benefits">
    <div className="cbr-benefits__inner">
      <div className="cbr-benefits__head">
        <span className="cbr-benefits__badge">Key Benefits</span>
        <h2 className="cbr-benefits__title">
          <span className="cbr-benefits__title-light">Built for Seamless</span>
          <span className="cbr-benefits__title-bold">Global Money Movement</span>
        </h2>
        <p className="cbr-benefits__para">Enable faster settlements and efficient international payment operations worldwide.</p>
      </div>
      <div className="cbr-benefits__cards">
        {cards.map(card => (
          <div key={card.title} className="cbr-benefits__card">
            <div className="cbr-benefits__card-visual" aria-hidden="true">{card.visual}</div>
            <h3 className="cbr-benefits__card-title">{card.title}</h3>
            <p className="cbr-benefits__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
