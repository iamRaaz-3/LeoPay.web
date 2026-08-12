import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Ticker from './components/Ticker/Ticker.jsx'
import FastestWay from './components/FastestWay/FastestWay.jsx'
import Features from './components/Features/Features.jsx'
import Comparison from './components/Comparison/Comparison.jsx'
import GlobalPresence from './components/GlobalPresence/GlobalPresence.jsx'
import Faq from './components/Faq/Faq.jsx'
import Cta from './components/Cta/Cta.jsx'
import Footer from './components/Footer/Footer.jsx'
import Privacy from './pages/Privacy.jsx'
import Contact from './pages/Contact.jsx'

const ProductPage = lazy(() => import('./pages/products/ProductPage.jsx'))

const Landing = () => (
  <>
    <Navbar />
    <Hero />
    <Ticker />
    <FastestWay />
    <Comparison />
    <Features />
    <GlobalPresence />
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
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/products/:slug"
        element={
          <Suspense fallback={<div style={{ minHeight: '100vh', background: '#ECF5FC' }} />}>
            <ProductPage />
          </Suspense>
        }
      />
    </Routes>
  );
}
