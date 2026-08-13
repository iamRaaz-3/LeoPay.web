import Navbar from '../components/Navbar/Navbar.jsx';
import ContactHero from '../components/ContactUs/ContactHero/ContactHero.jsx';
import ContactInfo from '../components/ContactUs/ContactInfo/ContactInfo.jsx';
import Cta from '../components/Cta/Cta.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Contact = () => (
  <>
    <Navbar />
    <main>
      <ContactHero />
      <ContactInfo />
      <Cta variant="newsletter" />
      <Footer />
    </main>
  </>
);

export default Contact;
