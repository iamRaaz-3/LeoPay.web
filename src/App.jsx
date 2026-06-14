import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Ticker from './components/Ticker/Ticker.jsx'
import FastestWay from './components/FastestWay/FastestWay.jsx'
import Features from './components/Features/Features.jsx'
import Partners from './components/Partners/Partners.jsx'
import Comparison from './components/Comparison/Comparison.jsx'
import Faq from './components/Faq/Faq.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Cta from './components/Cta/Cta.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <FastestWay />
      <Partners />
      <Features />
      <Comparison />
      <Faq />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
