import './Vision.css';

const Vision = ({ title = 'Our Vision', body, variant = 'default' }) => (
  <section className={variant === 'tinted' ? 'about-band about-band--tinted' : 'about-band'}>
    <div className="about-band__frame">
      <h2 className="about-band__title">{title}</h2>
      <p className="about-band__body">{body}</p>
    </div>
  </section>
);

export default Vision;
