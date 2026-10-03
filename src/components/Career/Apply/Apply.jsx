import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Apply.css';

const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="currentColor" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MESSAGE_MIN = 50;
const RESUME_MAX_BYTES = 10 * 1024 * 1024;
const FORM_ENDPOINT = import.meta.env.VITE_APPLY_FORM_URL;

const Apply = ({ job }) => {
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [searchParams] = useSearchParams();
  const messageLength = message.trim().length;
  const submitted = searchParams.get('applied') === '1';
  const returnUrl = `${window.location.origin}/career/${job.id}?applied=1`;

  // Re-enable the button if the user comes back with the browser's Back button.
  useEffect(() => {
    const reset = () => setStatus('idle');
    window.addEventListener('pageshow', reset);
    return () => window.removeEventListener('pageshow', reset);
  }, []);

  // FormSubmit only accepts file uploads from a regular (non-AJAX) form post,
  // so the browser submits natively and FormSubmit redirects back via _next.
  const handleSubmit = e => {
    if (!FORM_ENDPOINT) {
      e.preventDefault();
      setStatus('error');
      return;
    }
    setStatus('sending');
  };

  return (
    <section className="job-apply">
      <div className="job-apply__inner">
        <Link to="/career" className="job-apply__back">
          <BackIcon />
          All open positions
        </Link>

        <div className="job-apply__grid">
          <div className="job-apply__details">
            <div className="job-apply__meta">
              <span className="job-apply__tag">{job.tag}</span>
              <span>{job.location}</span>
              <span className="job-apply__divider" />
              <span>{job.type}</span>
            </div>

            <h2 className="job-apply__heading">About the role</h2>
            <p className="job-apply__text">{job.about}</p>

            <h2 className="job-apply__heading">What you'll do</h2>
            <ul className="job-apply__list">
              {job.responsibilities.map(item => <li key={item}>{item}</li>)}
            </ul>

            <h2 className="job-apply__heading">What we're looking for</h2>
            <ul className="job-apply__list">
              {job.requirements.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="job-apply__card">
            {submitted ? (
              <div className="job-apply__success">
                <h2 className="job-apply__card-title">Application sent</h2>
                <p className="job-apply__text">
                  Thanks for applying to {job.title}. Our team will review your application and get back to you soon.
                </p>
                <Link to="/career" className="job-apply__submit">Back to careers</Link>
              </div>
            ) : (
              <form
                className="job-apply__form"
                action={FORM_ENDPOINT}
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <h2 className="job-apply__card-title">Apply for this role</h2>
                <input type="hidden" name="position" value={job.title} />
                <input type="hidden" name="_subject" value={`New application: ${job.title}`} />
                <input type="hidden" name="_next" value={returnUrl} />
                <input type="hidden" name="_template" value="table" />
                {/* FormSubmit's captcha step drops file uploads, so it's off; the honeypot catches bots instead. */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

                <div className="job-apply__row">
                  <label className="job-apply__field">
                    <span>First name</span>
                    <input type="text" name="firstName" required autoComplete="given-name" />
                  </label>
                  <label className="job-apply__field">
                    <span>Last name</span>
                    <input type="text" name="lastName" required autoComplete="family-name" />
                  </label>
                </div>

                <label className="job-apply__field">
                  <span>Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>

                <label className="job-apply__field">
                  <span>Phone</span>
                  <input type="tel" name="phone" required autoComplete="tel" />
                </label>

                <label className="job-apply__field">
                  <span>LinkedIn profile</span>
                  <input
                    type="url"
                    name="linkedin"
                    required
                    placeholder="https://linkedin.com/in/"
                    pattern="https?://(www\.)?linkedin\.com/.+"
                    title="Please enter your LinkedIn profile link, e.g. https://linkedin.com/in/yourname"
                  />
                </label>

                <label className="job-apply__field">
                  <span>Resume / CV</span>
                  <span className="job-apply__file">
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={e => {
                        const file = e.target.files[0] || null;
                        e.target.setCustomValidity(file && file.size > RESUME_MAX_BYTES ? 'Resume must be 10MB or smaller.' : '');
                        setResume(file);
                      }}
                    />
                    <span className="job-apply__file-label">
                      {resume ? resume.name : 'Upload PDF, DOC or DOCX'}
                    </span>
                  </span>
                </label>

                <label className="job-apply__field">
                  <span>Why do you want to join Leopay?</span>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={message}
                    onChange={e => {
                      const tooShort = e.target.value.trim().length < MESSAGE_MIN;
                      e.target.setCustomValidity(tooShort ? `Please write at least ${MESSAGE_MIN} characters.` : '');
                      setMessage(e.target.value);
                    }}
                  />
                  <span className={`job-apply__hint${messageLength >= MESSAGE_MIN ? ' job-apply__hint--ok' : ''}`}>
                    {messageLength}/{MESSAGE_MIN} characters minimum
                  </span>
                </label>

                {status === 'error' && (
                  <p className="job-apply__error">
                    Applications can't be sent right now. Please try again later.
                  </p>
                )}

                <button type="submit" className="job-apply__submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
