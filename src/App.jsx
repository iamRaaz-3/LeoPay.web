import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import Blog from './pages/Blog.jsx'
import BlogArticle from './pages/BlogArticle.jsx'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route
          path="/products/:slug"
          element={
            <Suspense fallback={<div style={{ minHeight: '100vh', background: '#ECF5FC' }} />}>
              <ProductPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
