import "./GlobalPresence.css";
import mapBase from "./assets/mapbase.png";

import flagVN from "./assets/flags/flag-vn.svg";
import flagPH from "./assets/flags/flag-ph.svg";
import flagMY from "./assets/flags/flag-my.svg";
import flagID from "./assets/flags/flag-id.svg";
import flagUS from "./assets/flags/flag-us.svg";
import flagEU from "./assets/flags/flag-eu.svg";
import flagGB from "./assets/flags/flag-gb.svg";
import flagHK from "./assets/flags/flag-hk.svg";
import flagCN from "./assets/flags/flag-cn.svg";
import flagAU from "./assets/flags/flag-au.svg";
import flagBR from "./assets/flags/flag-br.svg";
import flagLK from "./assets/flags/flag-lk.svg";
import flagNP from "./assets/flags/flag-np.svg";
import flagCA from "./assets/flags/flag-ca.svg";
import flagAE from "./assets/flags/flag-ae.svg";

const activeChips = [
  { flag: flagUS, code: "USA",         name: "United States" },
  { flag: flagID, code: "Indonesia",   name: "Indonesia" },
  { flag: flagMY, code: "Malaysia",    name: "Malaysia" },
  { flag: flagPH, code: "Philippines", name: "Philippines" },
  { flag: flagVN, code: "Vietnam",     name: "Vietnam" },
];

const betaChips = [
  { flag: flagAE, code: "UAE", name: "United Arab Emirates" },
  { flag: flagEU, code: "European Union", name: "European Union" },
  { flag: flagGB, code: "U.K.",           name: "United Kingdom" },
  { flag: flagHK, code: "Hong Kong",      name: "Hong Kong" },
  { flag: flagCN, code: "China", name: "China" },
];

const soonChips = [
  { flag: flagAU, code: "Australia", name: "Australia" },
  { flag: flagBR, code: "Brazil", name: "Brazil" },
  { flag: flagLK, code: "Sri Lanka", name: "Sri Lanka" },
  { flag: flagNP, code: "Nepal", name: "Nepal" },
  { flag: flagCA, code: "Canada", name: "Canada" },
];

const Chip = ({ flag, emoji, code, variant }) => (
  <div className={`cov-chip cov-chip--${variant}`}>
    {flag ? (
      <img src={flag} alt={code} className="cov-chip__flag" />
    ) : (
      <span className="cov-chip__flag-emoji">{emoji}</span>
    )}
    <span className="cov-chip__code">{code}</span>
    <span className={`cov-chip__status cov-chip__status--${variant}`}>
      {variant === "active" ? "Active" : variant === "beta" ? "Beta" : "Soon"}
    </span>
  </div>
);

const Coverage = () => (
  <section id="coverages" className="cov-section">
    <div className="cov-inner">
      <div className="cov-features">
        <div className="cov-title">
          <div className="cov-badge">
            <span className="cov-badge__text">Coverage</span>
          </div>
          <div className="cov-heading">
            <span className="cov-heading__line1">Our wide</span>
            <span className="cov-heading__line2">Global Presence</span>
          </div>
          <div className="cov-paragraph-wrap">
            <div className="cov-paragraph">
              <p className="cov-paragraph-text">Expanding reliable payment access across global markets and regional corridors.</p>
            </div>
          </div>
        </div>

        <div className="cov-chips">
          <div className="cov-chips-row cov-chips-row--active">
            {activeChips.map((c) => (
              <Chip key={c.code} {...c} variant="active" />
            ))}
          </div>

          <div className="cov-chips-row cov-chips-row--beta">
            {betaChips.map((c) => (
              <Chip key={c.code} {...c} variant="beta" />
            ))}
          </div>

          <div className="cov-chips-row cov-chips-row--soon">
            {soonChips.map((c) => (
              <Chip key={c.code} {...c} variant="soon" />
            ))}
          </div>
        </div>
      </div>
      <div className="cov-map-wrap">
        <img src={mapBase} alt="" className="cov-map" />
        <div className="cov-markers">
          {[
            { id: 'usa',         flag: '🇺🇸', code: 'USA', dotXPct: 11.783, dotYPct: 81.343, stemH: 28, enter: '0s',    float: '0s'    },
            { id: 'china',       flag: '🇨🇳', code: 'CN',  dotXPct: 73.805, dotYPct: 66.791, stemH: 40, enter: '0.15s', float: '0.6s'  },
            { id: 'vietnam',     flag: '🇻🇳', code: 'VN',  dotXPct: 71.735, dotYPct: 50,     stemH: 24, enter: '0.3s',  float: '1.2s'  },
            { id: 'philippines', flag: '🇵🇭', code: 'PH',  dotXPct: 76.751, dotYPct: 39.179, stemH: 30, enter: '0.45s', float: '1.8s'  },
            { id: 'japan',       flag: '🇯🇵', code: 'JP',  dotXPct: 79.936, dotYPct: 56.343, stemH: 36, enter: '0.6s',  float: '2.4s'  },
          ].map((m) => (
            <div
              key={m.id}
              className="cov-marker"
              style={{ left: `${m.dotXPct}%`, bottom: `${m.dotYPct}%`, animationDelay: m.enter }}
            >
              <div className="cov-marker__badge" style={{ animationDelay: m.float }}>
                <span className="cov-marker__flag">{m.flag}</span>
                <span className="cov-marker__code">{m.code}</span>
              </div>
              <div className="cov-marker__stem" style={{ height: m.stemH }} />
              <div className="cov-marker__dot">
                <div className="cov-marker__pulse" style={{ animationDelay: m.float }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Coverage;
