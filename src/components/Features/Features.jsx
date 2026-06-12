import './Features.css';
import bgTop from '../../assets/features-bg-top.png';
import bgBottom from '../../assets/features-bg-bottom.png';
import avatarAkash from '../../assets/avatar-akash.png';
import avatarPuranjit from '../../assets/avatar-puranjit.png';
import avatarSayli from '../../assets/avatar-sayli.png';

const bars = [
  { height: 76.86  },
  { height: 110.83 },
  { height: 99.96  },
  { height: 70.30  },
  { height: 146.75, gradient: true },
  { height: 72.38,  gradFaded: true },
  { height: 56.15,  gradFaded2: true },
];

function NotifTag({ label, className = '', icon }) {
  return (
    <div className={`feat-notif${className ? ' ' + className : ''}`}>
      <div className="feat-notif__border" />
      <div className="feat-notif__content">
        <span className="feat-notif__dot">
          {icon || (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: 'rotate(0.469deg)' }}>
              <path d="M-5.59623e-10 2.00052C-2.50342e-10 0.894915 0.893285 0 2.00104 0L5.99896 0C7.10672 0 8 0.894915 8 2.00052L8 5.92855C8 5.95219 8 5.97584 8 5.99948C8 7.10091 8.89329 7.99583 9.99688 8H10.001H13.999C15.1067 8 16 8.89492 16 10.0005L16 13.9995C16 15.1051 15.1067 16 13.999 16H10.001C8.89329 16 8 15.1051 8 13.9995L8 10.0005C8 9.99357 8 9.98731 8 9.98175C7.98959 8.88866 7.10047 8 5.99896 8C5.9948 8 5.98994 8 5.98438 8H2.00104C0.893285 8 -1.98757e-09 7.10509 -1.67829e-09 5.99948L-5.59623e-10 2.00052Z" fill="white"/>
            </svg>
          )}
        </span>
        <span className="feat-notif__label">{label}</span>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features">
      <img src={bgTop} alt="" className="features__bg-top" />
      <img src={bgBottom} alt="" className="features__bg-bottom" />
      <div className="features__content">
        {/* Header */}
        <div className="features__header">
          <div className="features__badge">Features</div>
          <h2 className="features__heading">
            <div className="features__heading-inner">
              <span className="features__heading--light">Lowest Costs,</span>
              <span className="features__heading--bold">Highest Efficiency</span>
            </div>
          </h2>
          <div className="features__subtitle-wrap">
            <p className="features__subtitle">
              Reduce costs while improving operational speed, efficiency, and scalability across global payment operations.
            </p>
          </div>
        </div>
        {/* Cards */}
        <div className="features__cards-wrap">
        <div className="features__cards">

        {/* Card 1 — Bar Chart */}
        <div className="feat-card">
          <div className="feat-card__notif-overlay"><NotifTag label="Leopay rate" /></div>
          <div className="feat-card__visual">
            <div className="feat-bars">
              {bars.map((b, i) => (
                <div
                  key={i}
                  className="feat-bar-cell"
                  style={{ paddingTop: 205.042 - b.height }}
                >
                  <div className={`feat-bar-fill${b.gradient ? ' feat-bar-fill--grad' : b.gradFaded ? ' feat-bar-fill--faded-grad' : b.gradFaded2 ? ' feat-bar-fill--faded-grad-2' : ''}`}>
                    <div className="feat-bar-inner" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="feat-card__text">
            <div className="feat-card__text-body">
              <p className="feat-card__title">Optimized FX. Better Outcomes</p>
              <p className="feat-card__desc">Smarter FX routing and competitive rates for higher transaction value.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="feat-card">
          <div className="feat-card__visual--users">
            <div className="feat-users-frame">
              <div className="feat-users-inner">
                <div className="feat-user--3">
                  <div className="feat-user__row">
                    <img className="feat-user__avatar" src={avatarPuranjit} alt="Puranjit Patra" />
                    <div className="feat-user__info">
                      <div className="feat-user__info-text">
                        <div className="feat-user__name-block">
                          <span className="feat-user__name">Puranjit Patra</span>
                          <div className="feat-user__status-wrap">
                            <span className="feat-user__status">USDC transferred.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feat-user--2">
                  <div className="feat-user__row">
                    <img className="feat-user__avatar" src={avatarAkash} alt="Akash Gupta" />
                    <div className="feat-user__info">
                      <div className="feat-user__info-text">
                        <div className="feat-user__name-block">
                          <span className="feat-user__name">Akash Gupta</span>
                          <div className="feat-user__status-wrap">
                            <span className="feat-user__status">Onboarded on 14-03-2026</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feat-user">
                  <div className="feat-user__row">
                    <img className="feat-user__avatar" src={avatarSayli} alt="Sayli Saxena" />
                    <div className="feat-user__info">
                      <div className="feat-user__info-text">
                        <div className="feat-user__name-block">
                          <span className="feat-user__name">Sayli Saxena</span>
                          <div className="feat-user__status-wrap">
                            <span className="feat-user__status">KYC Verified on 17-04-2026</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feat-card__text">
            <div className="feat-card__text-body">
              <p className="feat-card__title">User Centric Platform</p>
              <p className="feat-card__desc">Designed for intuitive workflows and seamless user payment experiences.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="feat-card">
          <div className="feat-c3-badge">
            <div className="feat-c3-badge__icon">
              <svg width="8.938" height="8.938" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.74911 0.490359C4.00692 -0.163453 4.93092 -0.163453 5.18873 0.490359L5.98761 2.51436C6.06598 2.71373 6.22411 2.87186 6.42348 2.95023L8.44748 3.74911C9.1013 4.00692 9.1013 4.93092 8.44748 5.18873L6.42348 5.98761C6.22411 6.06598 6.06598 6.22411 5.98761 6.42348L5.18873 8.44748C4.93092 9.1013 4.00692 9.1013 3.74911 8.44748L2.95023 6.42348C2.87186 6.22411 2.71373 6.06598 2.51436 5.98761L0.490359 5.18873C-0.163453 4.93092 -0.163453 4.00692 0.490359 3.74911L2.51436 2.95023C2.71373 2.87186 2.87186 2.71373 2.95023 2.51436L3.74911 0.490359Z" fill="black"/>
              </svg>
              <svg width="6.187" height="6.187" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.5}}>
                <path d="M2.69792 0.269672C2.83955 -0.0898906 3.34761 -0.0898906 3.48923 0.269672L4.10867 1.83923C4.15198 1.94923 4.23861 2.03586 4.34861 2.07917L5.91817 2.69792C6.27705 2.83955 6.27705 3.34761 5.91817 3.48923L4.34861 4.10867C4.23861 4.15198 4.15198 4.23861 4.10867 4.34861L3.48923 5.91817C3.34761 6.27705 2.83955 6.27705 2.69792 5.91817L2.07917 4.34861C2.03586 4.23861 1.94923 4.15198 1.83923 4.10867L0.269672 3.48923C-0.0898906 3.34761 -0.0898906 2.83955 0.269672 2.69792L1.83923 2.07917C1.94923 2.03586 2.03586 1.94923 2.07917 1.83923L2.69792 0.269672Z" fill="black"/>
              </svg>
            </div>
            <div className="feat-c3-badge__text">
              <div className="feat-c3-badge__text-inner">
                <span className="feat-c3-badge__label">Transfer Now</span>
              </div>
            </div>
          </div>
          <div className="feat-card__visual--rails">
            <div className="feat-rails-inner">
              <div className="feat-rails-content">
                <div className="feat-rails-rows">
                  <div className="feat-rails-grid">
                    <div className="feat-rails-ring feat-rails-ring--4"><div className="feat-rails-ring__border" /></div>
                    <div className="feat-rails-ring feat-rails-ring--3"><div className="feat-rails-ring__border" /></div>
                    <div className="feat-rails-ring feat-rails-ring--2"><div className="feat-rails-ring__border" /></div>
                    <div className="feat-rails-ring feat-rails-ring--1"><div className="feat-rails-ring__border" /></div>
                    <div className="feat-rail-card feat-rail-card--1">
                      <div className="feat-rail-card__border" />
                      <div className="feat-rail-card__content">
                        <svg width="25.916" height="27.316" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
                          <rect width="25.9156" height="27.3158" rx="7.40491" transform="matrix(0.995536 -0.0943843 0.104689 0.994505 0 2.44604)" fill="#00BA85"/>
                          <path opacity="0.4" d="M14.3623 21.3875C17.5463 21.4033 20.1141 18.8401 20.0975 15.6626C20.0809 12.4851 17.4863 9.89648 14.3023 9.88076C11.1183 9.86504 8.55054 12.4282 8.56711 15.6057C8.58367 18.7832 11.1783 21.3718 14.3623 21.3875Z" fill="white"/>
                          <path d="M20.2858 11.965C20.1273 11.9642 19.9694 11.9032 19.8481 11.7822L18.1923 10.1303C17.9498 9.88825 17.9477 9.49817 18.1878 9.25863C18.4278 9.01908 18.8187 9.02093 19.0612 9.26294L20.717 10.9149C20.9596 11.1569 20.9616 11.547 20.7215 11.7865C20.6015 11.9064 20.4443 11.9657 20.2858 11.965Z" fill="white"/>
                          <path d="M16.5196 15.1445C16.41 14.9461 16.2018 14.8219 15.9759 14.8207L14.6142 14.814L15.1162 13.1474C15.2056 12.8533 15.0624 12.5371 14.7818 12.4061C14.5036 12.2775 14.1695 12.3702 14.0036 12.6282L12.1655 15.4958C12.0442 15.685 12.0366 15.9261 12.1463 16.1245C12.2559 16.3229 12.464 16.4471 12.69 16.4482L14.0517 16.4549L13.5497 18.1216C13.4603 18.4157 13.6035 18.7318 13.8841 18.8628C13.968 18.9018 14.0565 18.9206 14.1442 18.9211C14.3484 18.9221 14.5466 18.8216 14.6623 18.6407L16.5004 15.7732C16.6216 15.5839 16.6293 15.3428 16.5196 15.1445Z" fill="white"/>
                          <path d="M12.4464 9.0494L13.6818 9.0555L13.6863 9.91152C13.8892 9.89082 14.095 9.87943 14.3038 9.88046C14.5126 9.88149 14.7184 9.89492 14.9217 9.91762L14.9172 9.0616L16.1526 9.0677C16.4936 9.06938 16.7689 8.79467 16.7671 8.45431C16.7653 8.11396 16.4872 7.83651 16.1462 7.83483L12.44 7.81653C12.0989 7.81484 11.8237 8.08956 11.8255 8.42991C11.8273 8.77027 12.1053 9.04771 12.4464 9.0494Z" fill="white"/>
                        </svg>
                        <div className="feat-rail-card__text">
                          <div className="feat-rail-card__text-inner">
                            <span className="feat-rail-card__label">in 60 Secs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feat-rail-card feat-rail-card--2">
                      <div className="feat-rail-card__border" />
                      <div className="feat-rail-card__content">
                        <div className="feat-rail-card__icon feat-rail-card__icon--2">
                          <svg width="14.81" height="14.81" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform:'rotate(-2.139deg)',flexShrink:0}}>
                            <g clipPath="url(#clip0_176_19652)">
                              <path opacity="0.4" d="M12.924 5.94253C9.92201 5.68848 6.91862 5.43233 3.91876 5.17846C3.57918 5.14973 3.32718 4.85105 3.35591 4.51155C3.38466 4.17189 3.68325 3.91997 4.02283 3.94871L12.823 4.69344C12.8363 4.54115 12.8491 4.38907 12.862 4.2369L12.8752 4.08056C12.9422 3.28835 12.354 2.59146 11.5619 2.52442L4.59324 1.93469C3.34774 1.82929 2.2533 2.75287 2.14789 3.99845L1.88772 7.07284L6.39682 7.45443C7.52688 7.55006 8.36859 8.54741 8.27296 9.67747L8.20358 10.4973C8.20331 10.5005 8.20206 10.5036 8.20179 10.5068C8.66544 10.9232 8.94113 11.539 8.88466 12.2064L8.81528 13.0262C8.79058 13.3181 8.70379 13.5893 8.57217 13.8313L12.2302 14.1409C13.0223 14.2079 13.7193 13.6198 13.7863 12.8276L14.2373 7.49866C14.3043 6.70645 13.7161 6.00957 12.924 5.94253Z" fill="white"/>
                              <path d="M10.8521 10.9273C11.4182 10.9752 11.9158 10.5549 11.9637 9.98926C12.0115 9.42358 11.5916 8.92564 11.0256 8.87774C10.4596 8.82984 9.96195 9.25012 9.91407 9.81581C9.8662 10.3815 10.2861 10.8794 10.8521 10.9273Z" fill="white"/>
                              <path opacity="0.4" d="M6.29239 8.68415L1.37337 8.26787C0.920574 8.22955 0.522451 8.56577 0.484153 9.01832L0.414772 9.83816C0.376475 10.2907 0.712433 10.6891 1.16523 10.7274L6.08425 11.1437C6.53705 11.182 6.93517 10.8458 6.97347 10.3932L7.04285 9.57337C7.08115 9.12082 6.74519 8.72247 6.29239 8.68415Z" fill="white"/>
                              <path d="M6.90567 11.2134L1.98665 10.7972C1.53386 10.7588 1.13573 11.0951 1.09743 11.5476L1.02805 12.3675C0.989756 12.82 1.32571 13.2184 1.77851 13.2567L6.69753 13.673C7.15033 13.7113 7.54845 13.375 7.58675 12.9225L7.65613 12.1027C7.69443 11.6501 7.35847 11.2518 6.90567 11.2134Z" fill="white"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_176_19652">
                                <rect width="14.8098" height="14.8098" fill="white" transform="translate(1.24885) rotate(4.83724)"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="feat-rail-card__text">
                          <div className="feat-rail-card__text-inner">
                            <span className="feat-rail-card__label">Fiat Settlement</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feat-rail-card feat-rail-card--3">
                      <div className="feat-rail-card__border" />
                      <div className="feat-rail-card__content">
                        <div className="feat-rail-card__row--3">
                          <div className="feat-rail-card__icon feat-rail-card__icon--3">
                            <svg width="13.165" height="13.165" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform:'rotate(2.139deg)',flexShrink:0}}>
                              <g clipPath="url(#clip0_176_19666)">
                                <path opacity="0.4" d="M14.0442 6.07838C13.7059 6.11974 13.4673 6.42725 13.5114 6.76499L13.9652 10.2408C14.0387 10.8032 13.6404 11.3163 13.0772 11.3851L4.34454 12.4528L4.85585 11.794C5.06401 11.5257 5.01347 11.1387 4.74292 10.929C4.47236 10.7194 4.08464 10.7667 3.87656 11.035L2.45566 12.8659C2.2475 13.1341 2.29804 13.5212 2.56859 13.7308L4.41544 15.1623C4.55072 15.2671 4.71529 15.3077 4.87206 15.2885C5.02883 15.2693 5.1778 15.1904 5.28188 15.0563C5.49004 14.7881 5.43951 14.401 5.16895 14.1914L4.50436 13.6763L13.237 12.6086C14.476 12.4571 15.3522 11.3276 15.1907 10.0911L14.7369 6.61524C14.6928 6.2775 14.3825 6.03702 14.0442 6.07838Z" fill="white"/>
                                <path opacity="0.4" d="M2.57533 10.4095C2.91363 10.3681 3.15227 10.0606 3.10817 9.72285L2.6531 6.23749C2.57968 5.67514 2.97788 5.16202 3.54116 5.09315L12.2738 4.02546L11.7625 4.68433C11.5543 4.95256 11.6049 5.33964 11.8754 5.54927C12.0107 5.65412 12.1753 5.69465 12.332 5.67548C12.4888 5.65632 12.6378 5.57745 12.7419 5.44333L14.1628 3.61238C14.3709 3.34415 14.3204 2.95707 14.0498 2.74744L12.203 1.31602C11.9324 1.10632 11.5447 1.15372 11.3366 1.42195C11.1285 1.69017 11.179 2.07726 11.4495 2.28688L12.1141 2.80198L3.38142 3.86968C2.14245 4.02116 1.26624 5.15071 1.42769 6.38724L1.88276 9.87259C1.92685 10.2103 2.23704 10.4508 2.57533 10.4095Z" fill="white"/>
                                <path d="M8.54972 10.0741C9.56488 9.95 10.2806 9.02779 10.1482 8.0143C10.0159 7.00081 9.08568 6.27983 8.07053 6.40395C7.05537 6.52807 6.33969 7.45028 6.47202 8.46377C6.60435 9.47726 7.53457 10.1982 8.54972 10.0741Z" fill="white"/>
                                <path d="M3.5407 5.09392C2.97742 5.16279 2.57922 5.67591 2.65264 6.23827L2.90815 8.1952C4.40269 7.74831 5.43983 6.41214 5.50102 4.85424L3.5407 5.09392Z" fill="white"/>
                                <path d="M13.0775 11.385C13.6407 11.3161 14.0389 10.803 13.9655 10.2406L13.71 8.28369C12.2155 8.73058 11.1783 10.0667 11.1171 11.6246L13.0775 11.385Z" fill="white"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_176_19666">
                                  <rect width="14.8098" height="14.8098" fill="white" transform="matrix(0.992912 -0.121398 0.129427 0.991281 0 1.79788)"/>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="feat-rail-card__text">
                            <div className="feat-rail-card__text-inner">
                              <span className="feat-rail-card__label">USDC Rails</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feat-card__text">
            <div className="feat-card__text-body">
              <p className="feat-card__title">Multi-Rail, Real-Time Settlement</p>
              <p className="feat-card__desc">Real-time settlements powered by flexible multi-rail payment infrastructure.</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="feat-card">
          {/* Variant 2 — 290×205 visual frame */}
          <div className="feat-c4-visual">
            {/* Chart:mask-group — 360×200, overflows left */}
            <div className="feat-c4-chart"></div>
            {/* Notification Card 1 */}
            <div className="feat-c4-notif">
              <div className="feat-rail-card feat-rail-card--c4">
                <div className="feat-rail-card__border" />
                <div className="feat-rail-card__content">
                  <div className="feat-rail-card__icon feat-rail-card__icon--c4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
                      <g clipPath="url(#clip-c4-nc1)">
                        <path d="M12.2222 8.44434C9.64889 8.44434 7.55554 6.35101 7.55554 3.77768C7.55554 3.16256 7.68176 2.57679 7.89954 2.03901C7.38665 2.07723 6.88531 2.15101 6.41154 2.2879C6.19998 2.09323 5.96087 1.90745 5.67198 1.74923C4.56709 1.1439 3.50043 1.24168 2.96443 1.3519C2.75465 1.39545 2.57865 1.53679 2.49154 1.73234C2.40443 1.9279 2.41598 2.15279 2.52265 2.33856L3.48531 4.00523C3.00976 4.48256 2.61509 5.02568 2.32798 5.62123L1.02932 5.7839C0.695979 5.82568 0.445313 6.10923 0.445313 6.44523L0.445313 9.55633C0.445313 9.89233 0.695979 10.1759 1.02932 10.2177L2.32798 10.3803C2.7102 11.1732 3.28087 11.8746 3.98309 12.4461L4.22754 14.5226C4.26665 14.8586 4.55109 15.1119 4.88976 15.1119H6.44531C6.7982 15.1119 7.09065 14.8363 7.11109 14.4843L7.14665 13.8843C7.56709 13.959 8.00087 14.0008 8.4462 14.0008C8.89155 14.0008 9.32533 13.9599 9.74578 13.8843L9.78133 14.4843C9.80178 14.8363 10.0942 15.1119 10.4471 15.1119H12.0027C12.3404 15.1119 12.6249 14.8586 12.6649 14.5226L12.9093 12.4461C14.2596 11.3474 15.1147 9.76433 15.1147 8.00079C15.1147 7.81145 15.1022 7.62568 15.0836 7.44079C14.2916 8.06034 13.3076 8.44523 12.2258 8.44523L12.2222 8.44434ZM5.55554 7.11101C5.18754 7.11101 4.88887 6.81234 4.88887 6.44434C4.88887 6.07634 5.18754 5.77768 5.55554 5.77768C5.92354 5.77768 6.2222 6.07634 6.2222 6.44434C6.2222 6.81234 5.92354 7.11101 5.55554 7.11101Z" fill="white" fillOpacity="0.4"/>
                        <path d="M12.222 0.444336C10.3838 0.444336 8.88867 1.93945 8.88867 3.77767C8.88867 5.61589 10.3838 7.111 12.222 7.111C14.0602 7.111 15.5553 5.61589 15.5553 3.77767C15.5553 1.93945 14.0602 0.444336 12.222 0.444336ZM12.8887 4.44434C12.8887 4.81234 12.59 5.111 12.222 5.111C11.854 5.111 11.5553 4.81234 11.5553 4.44434L11.5553 3.111C11.5553 2.743 11.854 2.44434 12.222 2.44434C12.59 2.44434 12.8887 2.743 12.8887 3.111L12.8887 4.44434Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip-c4-nc1">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="feat-rail-card__text">
                    <div className="feat-rail-card__text-inner">
                      <span className="feat-rail-card__label">Lowest fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Metric */}
            <div className="feat-c4-stat">
              <div className="feat-c4-stat__label">
                <div className="feat-c4-stat__label-inner">
                  <div className="feat-c4-stat__text">
                    <span className="feat-c4-stat__value">0.01-0.3%</span>
                    <div className="feat-c4-stat__row">
                      <div className="feat-c4-stat__row-text">
                        <div className="feat-c4-stat__row-text-inner">
                          <span className="feat-c4-stat__desc">Lowest fees than others</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feat-card__text">
            <div className="feat-card__text-body">
              <p className="feat-card__title">Lowest Fees. Highest Efficiency</p>
              <p className="feat-card__desc">Smarter FX routing and competitive rates for higher transaction value.</p>
            </div>
          </div>
        </div>


        </div>{/* /features__cards */}
        </div>{/* /features__cards-wrap */}
      </div>{/* /features__content */}
    </section>
  );
}
