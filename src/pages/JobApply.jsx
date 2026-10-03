import { Navigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Career/Hero/Hero.jsx';
import Apply from '../components/Career/Apply/Apply.jsx';
import Cta from '../components/Cta/Cta.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { getJob } from '../components/Career/jobs.js';

const JobApply = () => {
  const { id } = useParams();
  const job = getJob(id);

  if (!job) return <Navigate to="/career" replace />;

  return (
    <>
      <Navbar />
      <main>
        <Hero title={job.title} desc={job.desc} />
        <Apply job={job} />
        <Cta />
        <Footer />
      </main>
    </>
  );
};

export default JobApply;
