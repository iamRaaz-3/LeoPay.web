import './ContactInfo.css';

const channels = [
  { title: 'Business & Partnership', email: 'partnership@leopay.tech' },
  { title: 'Compliance Support', email: 'partnership@leopay.tech' },
];

const ContactInfo = () => (
  <section className="contact-info">
    <div className="contact-info__inner">
      <div className="contact-info__head">
        <span className="contact-info__badge">Contact Info</span>
        <h2 className="contact-info__title">
          <span className="contact-info__title-line">We are always</span>
          <span className="contact-info__title-line">happy to assist you</span>
        </h2>
      </div>
      <div className="contact-info__channels">
        {channels.map(channel => (
          <div key={channel.title} className="contact-info__channel">
            <h3 className="contact-info__channel-title">{channel.title}</h3>
            <a href={`mailto:${channel.email}`} className="contact-info__channel-email">{channel.email}</a>
            <p className="contact-info__channel-hours">
              <span>Assistance hours:</span>
              <span>Monday - Friday 6 am to 8 pm EST</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactInfo;
