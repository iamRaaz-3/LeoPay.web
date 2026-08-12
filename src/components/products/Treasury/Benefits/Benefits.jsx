import './Benefits.css';
import illoBalance from './assets/benefit-balance.png';
import illoLiquidity from './assets/benefit-liquidity.png';
import illoSettlement from './assets/benefit-settlement.png';
import illoCapital from './assets/benefit-capital.png';

const cards = [
  { illo: illoBalance, title: 'Real-Time Balance Visibility', desc: 'Gain complete visibility into global cash positions and liquidity.' },
  { illo: illoLiquidity, title: 'Liquidity Across Currencies', desc: 'Manage liquidity efficiently across multiple currencies and global markets.' },
  { illo: illoSettlement, title: 'Reduced Settlement Risk', desc: 'Minimize exposure to delays through faster settlement infrastructure.' },
  { illo: illoCapital, title: 'Improved Capital Efficiency', desc: 'Deploy capital where needed with greater speed and control.' },
];

const Benefits = () => (
  <section className="tr-benefits">
    <div className="tr-benefits__inner">
      <div className="tr-benefits__head">
        <span className="tr-benefits__badge">Key Benefits</span>
        <h2 className="tr-benefits__title">
          <span className="tr-benefits__title-light">Streamlining</span>
          <span className="tr-benefits__title-bold">Treasury &amp; Liquidity Operations</span>
        </h2>
        <p className="tr-benefits__para">Improve capital efficiency through real-time treasury and liquidity management.</p>
      </div>
      <div className="tr-benefits__cards">
        {cards.map(card => (
          <div key={card.title} className="tr-benefits__card">
            <img src={card.illo} alt="" aria-hidden="true" className="tr-benefits__card-illo" loading="lazy" />
            <h3 className="tr-benefits__card-title">{card.title}</h3>
            <p className="tr-benefits__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
