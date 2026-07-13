import Navbar from '../components/Navbar/Navbar.jsx';
import PrivacyHero from '../components/privacy/PrivacyHero/PrivacyHero.jsx';
import PrivacyContent from '../components/privacy/PrivacyContent/PrivacyContent.jsx';
import Cta from '../components/Cta/Cta.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Privacy = () => (
  <>
    <Navbar />
    <main>
      <PrivacyHero />
      <PrivacyContent />
      <Cta />
      <Footer />
    </main>
  </>
);

export default Privacy;
