import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Ticker from './components/Ticker/Ticker.jsx'
import FastestWay from './components/FastestWay/FastestWay.jsx'
import Partners from './components/Partners/Partners.jsx'
import Features from './components/Features/Features.jsx'
import Comparison from './components/Comparison/Comparison.jsx'
import GlobalPresence from './components/GlobalPresence/GlobalPresence.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Faq from './components/Faq/Faq.jsx'
import Cta from './components/Cta/Cta.jsx'
import Footer from './components/Footer/Footer.jsx'
import Privacy from './pages/Privacy.jsx'

const Landing = () => (
  <>
    <Navbar />
    <Hero />
    <Ticker />
    <Partners />
    <FastestWay />
    <Comparison />
    <Features />
    <GlobalPresence />
    <Testimonials />
    <Faq />
    <Cta />
    <Footer />
  </>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}
