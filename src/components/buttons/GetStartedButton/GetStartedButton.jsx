import './GetStartedButton.css';

const GetStartedButton = ({ href = 'https://dash.leopay.tech/signin', label = 'Get Started' }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="btn-get-started">
    {label}
  </a>
);

export default GetStartedButton;
