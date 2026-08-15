import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/AboutUs/Hero/Hero.jsx';
import Band from '../components/AboutUs/Vision/Vision.jsx';
import WhyExists from '../components/AboutUs/WhyExists/WhyExists.jsx';
import Principles from '../components/AboutUs/Principles/Principles.jsx';
import Cta from '../components/AboutUs/Cta/Cta.jsx';
import Footer from '../components/Footer/Footer.jsx';

const AboutUs = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Band
        title="Our Vision"
        body="We envision a world where businesses can move money across borders as effortlessly as sending a message. By removing friction from global payments, we're helping create a more connected and accessible financial ecosystem."
      />
      <Band
        variant="tinted"
        title="Our Mission"
        body="Our mission is simple, to simplify global payments. We empower businesses with modern payment infrastructure that replaces slow, fragmented banking systems with faster, transparent, and scalable alternatives."
      />
      <WhyExists />
      <Principles />
      <Cta />
      <Footer />
    </main>
  </>
);

export default AboutUs;
