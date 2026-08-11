import './BenefitVisuals.css';

const Chip = ({ className, label }) => (
  <div className={`pobo-bv__chip ${className}`}>
    <span className="pobo-bv__chip-icon" aria-hidden="true" />
    <span className="pobo-bv__chip-label">{label}</span>
  </div>
);

export const CentralizedVisual = () => (
  <div className="pobo-bv pobo-bv--centralized">
    <span className="pobo-bv__spoke pobo-bv__spoke--v" aria-hidden="true" />
    <span className="pobo-bv__spoke pobo-bv__spoke--h" aria-hidden="true" />
    <span className="pobo-bv__ring" aria-hidden="true" />
    <span className="pobo-bv__hub" aria-hidden="true" />
  </div>
);

export const CollectionsVisual = () => (
  <div className="pobo-bv pobo-bv--collections">
    <span className="pobo-bv__band pobo-bv__band--1" aria-hidden="true" />
    <span className="pobo-bv__band pobo-bv__band--2" aria-hidden="true" />
    <Chip className="pobo-bv__chip--c2a" label="Easy Workflow" />
    <Chip className="pobo-bv__chip--c2b" label="Simple Operations" />
  </div>
);

export const VisibilityVisual = () => (
  <div className="pobo-bv pobo-bv--visibility">
    <span className="pobo-bv__band pobo-bv__band--1" aria-hidden="true" />
    <span className="pobo-bv__band pobo-bv__band--2" aria-hidden="true" />
    <Chip className="pobo-bv__chip--c3a" label="Better Cashflow" />
    <Chip className="pobo-bv__chip--c3b" label="Cash Analytics" />
  </div>
);

export const EfficiencyVisual = () => (
  <div className="pobo-bv pobo-bv--efficiency">
    <p className="pobo-bv__eff-title">Better Payment Flow</p>
    <p className="pobo-bv__eff-sub">Higher Efficiency</p>
    <div className="pobo-bv__done">
      <span className="pobo-bv__done-label">Done</span>
    </div>
    <div className="pobo-bv__panel">
      <span className="pobo-bv__tile pobo-bv__tile--l" aria-hidden="true" />
      <span className="pobo-bv__dash" aria-hidden="true" />
      <span className="pobo-bv__panel-mark" aria-hidden="true" />
      <span className="pobo-bv__tile pobo-bv__tile--r" aria-hidden="true" />
    </div>
  </div>
);
