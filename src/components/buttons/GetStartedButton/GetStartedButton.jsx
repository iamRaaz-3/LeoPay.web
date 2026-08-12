import './GetStartedButton.css';

const GetStartedButton = ({
  href = 'https://dash.leopay.tech/signin',
  label = 'Get Started',
  className = 'btn-get-started',
  type,
}) =>
  type ? (
    <button type={type} className={className}>
      {label}
    </button>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  );

export default GetStartedButton;
