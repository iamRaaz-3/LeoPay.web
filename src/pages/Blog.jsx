import Navbar from '../components/Navbar/Navbar.jsx';
import BlogHero from '../components/Blog/BlogHero/BlogHero.jsx';
import BlogList from '../components/Blog/BlogList/BlogList.jsx';
import Cta from '../components/Cta/Cta.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Blog = () => (
  <>
    <Navbar />
    <main>
      <BlogHero />
      <BlogList />
      <Cta
        variant="newsletter"
        heading="Get notified of new blogs"
        desc="Stay informed with our latest articles, fintech insights, and product updates delivered to your inbox."
      />
      <Footer />
    </main>
  </>
);

export default Blog;
