import './FastestWay.css';
import fwBgGrid from './assets/fw-bg-grid.png';
import fwOthersFlow from './assets/Group 1000004860 (1).png';
import fwLeopayCenterLogo from './assets/Auto Layout Horizontal 1.png';


const OthersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17.592" height="17.592" viewBox="0 0 18 18" fill="none">
    <path d="M5.46205 1.98863C5.73693 1.29155 6.72207 1.29155 6.99695 1.98863L7.84869 4.14657C7.93225 4.35914 8.10084 4.52773 8.31341 4.61129L10.4713 5.46303C11.1684 5.7379 11.1684 6.72305 10.4713 6.99792L8.31341 7.84966C8.10084 7.93322 7.93225 8.10181 7.84869 8.31438L6.99695 10.4723C6.72207 11.1694 5.73693 11.1694 5.46205 10.4723L4.61031 8.31438C4.52675 8.10181 4.35816 7.93322 4.14559 7.84966L1.98765 6.99792C1.29057 6.72305 1.29057 5.7379 1.98765 5.46303L4.14559 4.61129C4.35816 4.52773 4.52675 4.35914 4.61031 4.14657L5.46205 1.98863Z" fill="white"/>
    <g opacity="0.5">
      <path d="M12.4058 9.81633C12.5568 9.43297 13.0984 9.43297 13.2494 9.81633L13.9099 11.4898C13.956 11.607 14.0484 11.6994 14.1657 11.7456L15.8391 12.4053C16.2217 12.5563 16.2217 13.0979 15.8391 13.2489L14.1657 13.9094C14.0484 13.9556 13.956 14.0479 13.9099 14.1652L13.2494 15.8386C13.0984 16.2212 12.5568 16.2212 12.4058 15.8386L11.7461 14.1652C11.6999 14.0479 11.6075 13.9556 11.4902 13.9094L9.81681 13.2489C9.43346 13.0979 9.43346 12.5563 9.81681 12.4053L11.4902 11.7456C11.6075 11.6994 11.6999 11.607 11.7461 11.4898L12.4058 9.81633Z" fill="white"/>
    </g>
  </svg>
);

const LeopayBtnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17.607" height="17.577" viewBox="0 0 18 18" fill="none">
    <path d="M0 2.19765C0 0.983099 0.983016 0 2.20205 0H6.60156C7.82059 0 8.80361 0.983099 8.80361 2.19765V6.51274C8.80361 6.53871 8.80361 6.56468 8.80361 6.59066C8.80361 7.80062 9.78662 8.78372 11.0011 8.78831H11.0057H15.4052C16.6242 8.78831 17.6072 9.7714 17.6072 10.986V15.379C17.6072 16.5935 16.6242 17.5766 15.4052 17.5766H11.0057C9.78662 17.5766 8.80361 16.5935 8.80361 15.379V10.986C8.80361 10.9783 8.80361 10.9714 8.80361 10.9653C8.79215 9.76453 7.81372 8.78831 6.60156 8.78831C6.59698 8.78831 6.59163 8.78831 6.58552 8.78831H2.20205C0.983016 8.78831 0 7.80521 0 6.59066V2.19765Z" fill="white"/>
  </svg>
);

const TimeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13.7776 12.4445C14.2685 12.4445 14.6664 12.0466 14.6664 11.5556C14.6664 11.0647 14.2685 10.6667 13.7776 10.6667C13.2866 10.6667 12.8887 11.0647 12.8887 11.5556C12.8887 12.0466 13.2866 12.4445 13.7776 12.4445Z" fill="#162755"/>
    <path d="M7.99978 0.888916C4.07889 0.888916 0.888672 4.07905 0.888672 8.00003C0.888672 11.921 4.07889 15.1111 7.99978 15.1111C9.74716 15.1111 11.347 14.4749 12.5864 13.4252C11.9684 13.03 11.5553 12.3418 11.5553 11.5556C11.5553 10.3303 12.5523 9.33336 13.7776 9.33336C14.1923 9.33336 14.5763 9.45487 14.9089 9.65345C15.0362 9.12181 15.1109 8.57007 15.1109 8.00003C15.1109 4.07905 11.9207 0.888916 7.99978 0.888916ZM10.5427 9.76047C10.4134 9.94749 10.2055 10.0478 9.99409 10.0478C9.86298 10.0478 9.73063 10.0095 9.61516 9.92927L7.62041 8.5482C7.44032 8.42367 7.33312 8.21878 7.33312 8.00003V4.22225C7.33312 3.85416 7.63169 3.55558 7.99978 3.55558C8.36787 3.55558 8.66645 3.85416 8.66645 4.22225V7.65061L10.3739 8.83292C10.6769 9.04252 10.7524 9.45789 10.5427 9.76047Z" fill="#162755"/>
  </svg>
);

const CostIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11.2004 3.19995H4.80039C3.47491 3.19995 2.40039 4.27447 2.40039 5.59995V10.4C2.40039 11.7254 3.47491 12.8 4.80039 12.8H11.2004C12.5259 12.8 13.6004 11.7254 13.6004 10.4V5.59995C13.6004 4.27447 12.5259 3.19995 11.2004 3.19995Z" stroke="#162755" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6C6.89544 6 6 6.89544 6 8C6 9.10456 6.89544 10 8 10C9.10456 10 10 9.10456 10 8C10 6.89544 9.10456 6 8 6Z" fill="#162755"/>
    <path d="M2.40039 5.59995V6.25299C2.65175 6.34235 2.91839 6.39995 3.20039 6.39995C4.52591 6.39995 5.60039 5.32547 5.60039 3.99995C5.60039 3.71795 5.54279 3.45131 5.45343 3.19995H4.80039C3.47487 3.19995 2.40039 4.27443 2.40039 5.59995Z" fill="#162755"/>
    <path d="M13.6004 5.59995V6.25299C13.349 6.34235 13.0824 6.39995 12.8004 6.39995C11.4749 6.39995 10.4004 5.32547 10.4004 3.99995C10.4004 3.71795 10.458 3.45131 10.5474 3.19995H11.2004C12.5259 3.19995 13.6004 4.27443 13.6004 5.59995Z" fill="#162755"/>
    <path d="M2.40039 10.4V9.74694C2.65175 9.65758 2.91839 9.59998 3.20039 9.59998C4.52591 9.59998 5.60039 10.6745 5.60039 12C5.60039 12.282 5.54279 12.5486 5.45343 12.8H4.80039C3.47487 12.8 2.40039 11.7255 2.40039 10.4Z" fill="#162755"/>
    <path d="M13.6004 10.4V9.74694C13.349 9.65758 13.0824 9.59998 12.8004 9.59998C11.4749 9.59998 10.4004 10.6745 10.4004 12C10.4004 12.282 10.458 12.5486 10.5474 12.8H11.2004C12.5259 12.8 13.6004 11.7255 13.6004 10.4Z" fill="#162755"/>
  </svg>
);

const AvailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2.19922 4.19998L3.79922 2.59998" stroke="#162755" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.7992 4.19998L12.1992 2.59998" stroke="#162755" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.19922 13.2L5.39922 11" stroke="#162755" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.7996 13.2L10.5996 11" stroke="#162755" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.99883 3.19995C5.13163 3.19995 2.79883 5.53275 2.79883 8.39995C2.79883 11.2672 5.13163 13.6 7.99883 13.6C10.866 13.6 13.1988 11.2672 13.1988 8.39995C13.1988 5.53275 10.866 3.19995 7.99883 3.19995ZM10.9594 6.89643L7.79299 10.8964C7.64651 11.0812 7.42659 11.1921 7.19107 11.1996C7.18251 11.2 7.17387 11.2 7.16571 11.2C6.93915 11.2 6.72315 11.1039 6.57115 10.9351L5.07115 9.26827C4.77547 8.93979 4.80203 8.43387 5.13051 8.13859C5.45899 7.84211 5.96531 7.87027 6.26019 8.19795L7.12659 9.16043L9.70475 5.90339C9.97859 5.55651 10.4825 5.49835 10.8286 5.77251C11.1751 6.04675 11.2335 6.54995 10.9594 6.89643Z" fill="#162755"/>
  </svg>
);

const othersStats = [
  { val: '3 Days',   icon: <TimeIcon />,  label: 'Settlement Time', desc: 'Transfers slowed by multiple intermediary banks' },
  { val: '5%',       icon: <CostIcon />,  label: 'Total Cost',      desc: 'Higher costs due to layered processing fees models' },
  { val: 'Limited',  icon: <AvailIcon />, label: 'Availability',    desc: 'Limited to standard business working hours' },
];

const leopayStats = [
  { val: '<60s',  icon: <TimeIcon />,  label: 'Settlement Time', desc: 'Direct transfers with minimal intermediaries involved' },
  { val: '0%',    icon: <CostIcon />,  label: 'Total Cost',      desc: 'Zero-Cost transfers through smart routing system' },
  { val: '24x7',  icon: <AvailIcon />, label: 'Availability',    desc: 'Always available with uninterrupted global access' },
];

const StatCol = ({ val, icon, label, desc, variant }) => (
  <div className="fw-stat-col">
    <span className={`fw-stat-val fw-stat-val--${variant}`}>{val}</span>
    <div className="fw-stat-label-row">
      <span className="fw-stat-icon">{icon}</span>
      <div className="fw-stat-label-wrap">
        <span className="fw-stat-label">{label}</span>
      </div>
    </div>
    <div className="fw-stat-desc-wrap">
      <div className="fw-stat-desc-inner">
        <p className="fw-stat-desc">{desc}</p>
      </div>
    </div>
  </div>
);

const FastestWay = () => (
  <section className="fw-section">
    <img src={fwBgGrid} alt="" aria-hidden="true" className="fw-bg-grid" />
    <div className="fw-inner">
      <div className="fw-title-area">
        <div className="fw-badge">
          <div className="fw-badge-inner">
            <span className="fw-badge-text">Why us?</span>
          </div>
        </div>
        <div className="fw-heading-group">
          <h2 className="fw-heading">
            <div className="fw-heading-line fw-heading-line--1">The Fastest Way to</div>
            <div className="fw-heading-line fw-heading-line--2"><strong>move your money</strong></div>
          </h2>
        </div>
        <div className="fw-para">
          <div className="fw-para-wrap">
            <p className="fw-para-text">
              No intermediaries, no waiting. Leopay delivers global transfers in seconds, not days.
            </p>
          </div>
        </div>
      </div>

      <div className="fw-cards-row">
        <div className="fw-card-wrap">
          <div className="fw-card-label fw-card-label--others">
            <div className="fw-card-label-icon">
              <OthersIcon />
            </div>
            <div className="fw-card-label-outer">
              <div className="fw-card-label-inner">
                <span className="fw-card-label-text">Others</span>
              </div>
            </div>
          </div>
          <div className="fw-card fw-card--others">
            <div className="fw-card-stats">
              {othersStats.map((s) => (
                <StatCol key={s.label} {...s} variant="others" />
              ))}
            </div>
            <img src={fwOthersFlow} alt="" aria-hidden="true" className="fw-others-flow" />
            <div aria-hidden="true" className="fw-others-globe" />
          </div>
        </div>

        <div className="fw-card-wrap">
          <div className="fw-card-label fw-card-label--leopay">
            <div className="fw-card-label-icon">
              <LeopayBtnIcon />
            </div>
            <div className="fw-card-label-outer">
              <div className="fw-card-label-inner">
                <span className="fw-card-label-text">Leopay</span>
              </div>
            </div>
          </div>
          <div className="fw-card fw-card--leopay">
            <div className="fw-card-stats">
              {leopayStats.map((s) => (
                <StatCol key={s.label} {...s} variant="leopay" />
              ))}
            </div>
            <div className="fw-leopay-avatar" aria-hidden="true">
              <div className="fw-leopay-avatar-img" />
              <svg className="fw-leopay-avatar-shadow" xmlns="http://www.w3.org/2000/svg" width="100" height="52" viewBox="0 0 100 52" fill="none" aria-hidden="true">
                <g filter="url(#lp-shadow)">
                  <ellipse cx="49.5481" cy="25.7426" rx="33.4895" ry="9.68372" fill="#638C81"/>
                </g>
                <defs>
                  <filter id="lp-shadow" x="-0.000249863" y="-5.72205e-06" width="99.0972" height="51.4851" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="8.02942" result="effect1_foregroundBlur_298_22937"/>
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="fw-leopay-badge fw-leopay-badge--left" aria-hidden="true">
              <div className="fw-leopay-badge-connector" />
              <div className="fw-leopay-badge-label">
                <div className="fw-leopay-badge-label-inner">
                  <span className="fw-leopay-badge-text">&gt;30 seconds</span>
                </div>
              </div>
              <div className="fw-leopay-badge-connector" />
            </div>
            <div className="fw-leopay-badge fw-leopay-badge--right" aria-hidden="true">
              <div className="fw-leopay-badge-connector" />
              <div className="fw-leopay-badge-label">
                <div className="fw-leopay-badge-label-inner">
                  <span className="fw-leopay-badge-text">&gt;30 seconds</span>
                </div>
              </div>
              <div className="fw-leopay-badge-connector" />
            </div>
            <img src={fwLeopayCenterLogo} alt="" aria-hidden="true" className="fw-leopay-center-logo" />
            <div className="fw-leopay-avatar fw-leopay-avatar--right" aria-hidden="true">
              <div className="fw-leopay-avatar-img" />
              <svg className="fw-leopay-avatar-shadow fw-leopay-avatar-shadow--right" xmlns="http://www.w3.org/2000/svg" width="100" height="52" viewBox="0 0 100 52" fill="none" aria-hidden="true">
                <g filter="url(#lp-shadow-r)">
                  <ellipse cx="33.4895" cy="9.68372" rx="33.4895" ry="9.68372" transform="matrix(-1 0 0 1 83.0371 16.0588)" fill="#638C81"/>
                </g>
                <defs>
                  <filter id="lp-shadow-r" x="-0.000249863" y="-5.72205e-06" width="99.0962" height="51.4851" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="8.02942" result="effect1_foregroundBlur_264_11340"/>
                  </filter>
                </defs>
              </svg>
            </div>
            <div aria-hidden="true" className="fw-leopay-globe" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FastestWay;
