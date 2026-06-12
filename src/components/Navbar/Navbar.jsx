import './Navbar.css';

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <span className="navbar__logo">leopay</span>
        <div className="navbar__links">
          <span className="navbar__link">Products <ChevronDown /></span>
          <span className="navbar__link">Resources <ChevronDown /></span>
          <span className="navbar__link">Company</span>
          <span className="navbar__link">API Docs</span>
        </div>
        <div className="navbar__actions">
          <button className="navbar__btn-signin">Sign in</button>
          <button className="navbar__btn-getstarted">Get Started</button>
        </div>
      </nav>
    </div>
  );
}
