import './Positions.css';

const JOBS = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: 'Sales Development Representative (SDR)',
  desc: 'Engage potential customers, qualify leads, and support the sales pipeline.',
  location: 'USA',
  type: 'Full time',
  tag: 'Product Design',
}));

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25" stroke="#FFFFFF" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Positions = () => (
  <section className="career-positions">
    <div className="career-positions__frame">
      <div className="career-positions__head">
        <span className="career-positions__badge">Open Positions</span>
        <h2 className="career-positions__title">
          <span className="career-positions__title-light">Explore</span>
          <span className="career-positions__title-strong">Career Opportunities</span>
        </h2>
        <p className="career-positions__desc">
          Discover our latest openings and apply to join our talented team.
        </p>
      </div>
      <div className="career-positions__list">
        {JOBS.map(job => (
          <article key={job.id} className="job-card">
            <div className="job-card__row">
              <div className="job-card__info">
                <h3 className="job-card__title">{job.title}</h3>
                <p className="job-card__desc">{job.desc}</p>
              </div>
              <div className="job-card__meta">
                <span>{job.location}</span>
                <span className="job-card__divider" />
                <span>{job.type}</span>
              </div>
            </div>
            <div className="job-card__row job-card__row--foot">
              <span className="job-card__tag">{job.tag}</span>
              <a href="https://dash.leopay.tech/signin" target="_blank" rel="noopener noreferrer" className="job-card__apply">
                Apply Now
                <ArrowIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Positions;
