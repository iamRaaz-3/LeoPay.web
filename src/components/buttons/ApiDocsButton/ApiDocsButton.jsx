import './ApiDocsButton.css';

const ApiDocsButton = ({ href = 'https://leopay.gitbook.io/leopay-docs', label = 'API Docs' }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="btn-api-docs">
    <div className="btn-api-docs__visual">
      <div className="btn-api-docs__border" />
      <span className="btn-api-docs__label">{label}</span>
      <span className="btn-api-docs__icon">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.91699 6.99996H11.0837M7.00033 11.0833L11.0837 6.99996L7.00033 2.91663" stroke="black" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  </a>
);

export default ApiDocsButton;
