import './BenefitVisuals.css';
import coinUsdc from '../../shared/assets/coin-usdc.svg';
import flagUs from '../../shared/assets/flag-us.svg';
import settlementNotes from './assets/settlement-notes.svg';

const ClockIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width="100%" height="100%">
    <g clipPath="url(#cbr-bvisual-clock-clip)">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.83434 8.93217C1.31099 5.53587 3.64006 2.35826 7.03636 1.83491C10.4327 1.31157 13.6103 3.64064 14.1336 7.03694C14.657 10.4332 12.3279 13.6108 8.9316 14.1342C5.5353 14.6575 2.35768 12.3285 1.83434 8.93217Z" fill="white" fillOpacity="0.4" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.39098 4.14096C7.70939 4.0919 8.00729 4.31024 8.05635 4.62865L8.51323 7.59357L11.0032 8.80455C11.2929 8.94539 11.4135 9.29447 11.2726 9.58422C11.1318 9.87396 10.7827 9.99457 10.4929 9.85365L7.72812 8.50907C7.55598 8.42536 7.43587 8.26251 7.40671 8.07332L6.90329 4.80633C6.85423 4.48792 7.07258 4.19002 7.39098 4.14096Z" fill="white" />
    </g>
    <defs>
      <clipPath id="cbr-bvisual-clock-clip">
        <rect width="14" height="14" fill="white" transform="translate(0 2.13214) rotate(-8.76)" />
      </clipPath>
    </defs>
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width="100%" height="100%">
    <path d="M8 14.5S13 10 13 6.5C13 3.74 10.76 1.5 8 1.5S3 3.74 3 6.5C3 10 8 14.5 8 14.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="8" cy="6.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const SettlementVisual = () => (
  <div className="cbr-bvisual">
    <span className="cbr-bvisual__settle-stripe cbr-bvisual__settle-stripe--1" />
    <span className="cbr-bvisual__settle-stripe cbr-bvisual__settle-stripe--2" />
    <div className="cbr-bvisual__settle-notes">
      <img src={settlementNotes} alt="" />
    </div>
    <div className="cbr-bvisual__notif cbr-bvisual__notif--1">
      <span className="cbr-bvisual__notif-icon"><ClockIcon /></span>
      <span className="cbr-bvisual__notif-label">Settled in secs</span>
    </div>
    <div className="cbr-bvisual__notif cbr-bvisual__notif--2">
      <span className="cbr-bvisual__notif-icon"><PinIcon /></span>
      <span className="cbr-bvisual__notif-label">Cross-Border</span>
    </div>
  </div>
);

export const TransferCostVisual = () => (
  <div className="cbr-bvisual">
    <div className="cbr-bvisual__transfer-card">
      <div className="cbr-bvisual__transfer-head">
        <span className="cbr-bvisual__transfer-title">Sending Money</span>
        <span className="cbr-bvisual__transfer-sub">from USA</span>
      </div>
      <div className="cbr-bvisual__transfer-row">
        <span className="cbr-bvisual__transfer-row-label">
          <img src={coinUsdc} alt="" className="cbr-bvisual__transfer-coin" />
          USDC to USD
        </span>
        <span className="cbr-bvisual__transfer-amount">$1,000.00</span>
      </div>
      <div className="cbr-bvisual__transfer-row">
        <span className="cbr-bvisual__transfer-row-label">
          <img src={flagUs} alt="" className="cbr-bvisual__transfer-coin" />
          Transfer Fee
        </span>
        <span className="cbr-bvisual__transfer-amount">$0.00</span>
      </div>
    </div>
  </div>
);

export const LiquidityVisual = () => (
  <div className="cbr-bvisual">
    <div className="cbr-bvisual__liquidity-card">
      <span className="cbr-bvisual__spinner" />
      <div className="cbr-bvisual__liquidity-copy">
        <span className="cbr-bvisual__liquidity-label">Liquidity Movement</span>
        <span className="cbr-bvisual__liquidity-sub">Fastest way</span>
      </div>
      <span className="cbr-bvisual__liquidity-done">Done</span>
    </div>
  </div>
);

export const TransactionHistoryVisual = () => (
  <div className="cbr-bvisual">
    <div className="cbr-bvisual__history-card">
      <div className="cbr-bvisual__history-head">
        <span className="cbr-bvisual__history-time">Today, 11:11 A.M</span>
        <span className="cbr-bvisual__history-status">Completed</span>
      </div>
      <span className="cbr-bvisual__history-name">Send to Albert Dino</span>
      <div className="cbr-bvisual__history-stats">
        <div>
          <span className="cbr-bvisual__history-stat-label">Amount</span>
          <span className="cbr-bvisual__history-stat-value">₱878.23</span>
        </div>
        <div>
          <span className="cbr-bvisual__history-stat-label">Time</span>
          <span className="cbr-bvisual__history-stat-value">&gt;30s</span>
        </div>
        <div>
          <span className="cbr-bvisual__history-stat-label">Bank A/c</span>
          <span className="cbr-bvisual__history-stat-value">XX 7890</span>
        </div>
        <div>
          <span className="cbr-bvisual__history-stat-label">Fee</span>
          <span className="cbr-bvisual__history-stat-value">0%</span>
        </div>
      </div>
    </div>
  </div>
);
