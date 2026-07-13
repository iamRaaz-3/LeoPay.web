import './Ticker.css';

const ITEMS = [
  'Fastest Settlement',
  '20+ Countries',
  '10+ Currencies',
  'Low Fees',
  'Stablecoin Powered',
  '24/7 Support',
  'Best Rates',
];

function TickerGroup() {
  return (
    <div className="ticker__group">
      {ITEMS.map((label, i) => (
        <div key={i} className="ticker__item-wrap">
          <div className="ticker__item">
            <div className="ticker__text">
              <span className="ticker__line">{label}</span>
            </div>
          </div>
          <svg className="ticker__dot" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#7FD3A1"/>
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__glow-wrap">
        <div className="ticker__glow-line ticker__glow-line--top" />
        <div className="ticker__glow-line ticker__glow-line--bottom" />
      </div>
      <div className="ticker__track">
        <TickerGroup />
        <TickerGroup />
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
