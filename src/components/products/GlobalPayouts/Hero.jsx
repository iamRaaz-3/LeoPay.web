import './Hero.css';
import heroGlobe from '../shared/assets/Dotted globe.png';
import coinUsdc from '../shared/assets/coin-usdc.svg';
import coinUsdt from '../shared/assets/coin-usdt.svg';
import coinUsdt30 from '../shared/assets/coin-usdt-30.svg';
import flagUs from '../shared/assets/flag-us.svg';
import flagPh from '../shared/assets/flag-ph.svg';
import iconBank from '../shared/assets/icon-bank.svg';
import dashArrow from '../shared/assets/dash-arrow.svg';
import GetStartedButton from '../../buttons/GetStartedButton/GetStartedButton.jsx';
import ApiDocsButton from '../../buttons/ApiDocsButton/ApiDocsButton.jsx';

const BadgeIconLeft = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6C4.73478 6 4.48043 5.89464 4.29289 5.70711C4.10536 5.51957 4 5.26522 4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4ZM3 2C3.26522 2 3.51957 2.10536 3.70711 2.29289C3.89464 2.48043 4 2.73478 4 3C4 3.26522 3.89464 3.51957 3.70711 3.70711C3.51957 3.89464 3.26522 4 3 4C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM1 0C1.26522 0 1.51957 0.105357 1.70711 0.292893C1.89464 0.48043 2 0.734784 2 1C2 1.26522 1.89464 1.51957 1.70711 1.70711C1.51957 1.89464 1.26522 2 1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM3 6C3.26522 6 3.51957 6.10536 3.70711 6.29289C3.89464 6.48043 4 6.73478 4 7C4 7.26522 3.89464 7.51957 3.70711 7.70711C3.51957 7.89464 3.26522 8 3 8C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6ZM1 8C1.26522 8 1.51957 8.10536 1.70711 8.29289C1.89464 8.48043 2 8.73478 2 9C2 9.26522 1.89464 9.51957 1.70711 9.70711C1.51957 9.89464 1.26522 10 1 10C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8Z" fill="white"/>
  </svg>
);

const BadgeIconRight = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4C1.26522 4 1.51957 4.10536 1.70711 4.29289C1.89464 4.48043 2 4.73478 2 5C2 5.26522 1.89464 5.51957 1.70711 5.70711C1.51957 5.89464 1.26522 6 1 6ZM3 8C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6C3.26522 6 3.51957 6.10536 3.70711 6.29289C3.89464 6.48043 4 6.73478 4 7C4 7.26522 3.89464 7.51957 3.70711 7.70711C3.51957 7.89464 3.26522 8 3 8ZM5 10C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8C5.26522 8 5.51957 8.10536 5.70711 8.29289C5.89464 8.48043 6 8.73478 6 9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10ZM3 4C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2C3.26522 2 3.51957 2.10536 3.70711 2.29289C3.89464 2.48043 4 2.73478 4 3C4 3.26522 3.89464 3.51957 3.70711 3.70711C3.51957 3.89464 3.26522 4 3 4ZM5 2C4.73478 2 4.48043 1.89464 4.29289 1.70711C4.10536 1.51957 4 1.26522 4 1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1C6 1.26522 5.89464 1.51957 5.70711 1.70711C5.51957 1.89464 5.26522 2 5 2Z" fill="white"/>
  </svg>
);

const ChipDashArrow = () => (
  <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="gp-hero__chip-dash">
    <path d="M0.614258 3.90573H0.00045985V5.13333H0.614258V4.51953V3.90573ZM20.6898 4.95355C20.9295 4.71385 20.9295 4.32521 20.6898 4.08551L16.7836 0.179324C16.5439 -0.0603786 16.1553 -0.0603786 15.9156 0.179324C15.6759 0.419027 15.6759 0.807663 15.9156 1.04737L19.3878 4.51953L15.9156 7.9917C15.6759 8.2314 15.6759 8.62004 15.9156 8.85974C16.1553 9.09944 16.5439 9.09944 16.7836 8.85974L20.6898 4.95355ZM0.614258 4.51953V5.13333H1.22806V4.51953V3.90573H0.614258V4.51953ZM2.45565 4.51953V5.13333H3.68325V4.51953V3.90573H2.45565V4.51953ZM4.91084 4.51953V5.13333H6.13844V4.51953V3.90573H4.91084V4.51953ZM7.36603 4.51953V5.13333H8.59363V4.51953V3.90573H7.36603V4.51953ZM9.82123 4.51953V5.13333H11.0488V4.51953V3.90573H9.82123V4.51953ZM12.2764 4.51953V5.13333H13.504V4.51953V3.90573H12.2764V4.51953ZM14.7316 4.51953V5.13333H15.9592V4.51953V3.90573H14.7316V4.51953ZM17.1868 4.51953V5.13333H18.4144V4.51953V3.90573H17.1868V4.51953ZM19.642 4.51953V5.13333H20.2558V4.51953V3.90573H19.642V4.51953Z" fill="#6D8599"/>
  </svg>
);

const cards = [
  { name: 'John Doe', time: 'Today at 11:11 am', amount: '$2,500', coin: coinUsdc, flag: flagUs, tint: 'blue' },
  { name: 'Albert Dino', time: '08/06/26 at 10:23 pm', amount: '₱3,460', coin: coinUsdt30, flag: flagPh, tint: 'green' },
];

const chips = [{ coin: coinUsdt }, { coin: coinUsdc }];

const Hero = () => (
  <section className="gp-hero">
    <div className="gp-hero__inner">
      <div className="gp-hero__glow" aria-hidden="true" />

      <div className="gp-hero__stage">
      <div className="gp-hero__content">
        <div className="gp-hero__badge-wrap">
          <span className="gp-hero__badge">
            <BadgeIconLeft />
            SOLUTIONS
            <BadgeIconRight />
          </span>
        </div>
        <h1 className="gp-hero__title">
          <span className="gp-hero__title-line">Global Payouts</span>
          <span className="gp-hero__title-line">in Seconds</span>
        </h1>
        <p className="gp-hero__desc">Power global payouts with faster settlements, lower costs, seamless scalability, and 99.99% uptime.</p>
        <div className="gp-hero__buttons">
          <GetStartedButton />
          <ApiDocsButton />
        </div>
      </div>

      <div className="gp-hero__visual" aria-hidden="true">
        <img src={heroGlobe} alt="" className="gp-hero__globe" />
        {cards.map((card, i) => (
          <div key={card.name} className={`gp-hero__txn gp-hero__txn--${i + 1}`}>
            <div className="gp-hero__txn-content">
              <div className="gp-hero__txn-card">
                <div className="gp-hero__txn-head">
                  <span className="gp-hero__txn-name">{card.name}</span>
                  <span className="gp-hero__txn-time">{card.time}</span>
                </div>
                <div className="gp-hero__txn-divider" />
                <span className="gp-hero__txn-amount">{card.amount}</span>
                <div className={`gp-hero__txn-pill gp-hero__txn-pill--${card.tint}`}>
                  <img src={card.coin} alt="" className="gp-hero__txn-coin" />
                  <img src={dashArrow} alt="" className="gp-hero__txn-dash" />
                  <img src={card.flag} alt="" className="gp-hero__txn-flag" />
                </div>
              </div>
            </div>
          </div>
        ))}
        {chips.map((chip, i) => (
          <div key={i} className={`gp-hero__chip gp-hero__chip--${i + 1}`}>
            <img src={chip.coin} alt="" className="gp-hero__chip-coin" />
            <ChipDashArrow />
            <img src={iconBank} alt="" className="gp-hero__chip-bank" />
          </div>
        ))}
      </div>
      </div>
    </div>
  </section>
);

export default Hero;
