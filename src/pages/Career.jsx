import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Career/Hero/Hero.jsx';
import Intro from '../components/Career/Intro/Intro.jsx';
import Positions from '../components/Career/Positions/Positions.jsx';
import Cta from '../components/Cta/Cta.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Career = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Intro />
      <Positions />
      <Cta />
      <Footer />
    </main>
  </>
);

export default Career;
