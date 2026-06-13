import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Ticker from './components/Ticker/Ticker.jsx'
import Features from './components/Features/Features.jsx'
import Partners from './components/Partners/Partners.jsx'
import Comparison from './components/Comparison/Comparison.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Partners />
      <Features />
      <Comparison />
    </>
  );
}
