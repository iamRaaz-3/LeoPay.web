import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/BlogOpened/Hero/Hero.jsx';
import Article from '../components/BlogOpened/Article/Article.jsx';
import RelatedBlogs from '../components/BlogOpened/RelatedBlogs/RelatedBlogs.jsx';
import Cta from '../components/Cta/Cta.jsx';
import Footer from '../components/Footer/Footer.jsx';

const BlogArticlePage = () => (
  <>
    <Navbar />
    <main>
      <Hero title={<>How Stablecoins are transforming<br />Cross-Border Payments</>} />
      <Article />
      <RelatedBlogs />
      <Cta
        variant="newsletter"
        heading="Get notified of new blogs"
        desc="Stay informed with our latest articles, fintech insights, and product updates delivered to your inbox."
      />
      <Footer />
    </main>
  </>
);

export default BlogArticlePage;
