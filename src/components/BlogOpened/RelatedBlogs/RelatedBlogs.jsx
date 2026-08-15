import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './RelatedBlogs.css';
import decoTop from './assets/deco-top.png';
import decoBottom from './assets/deco-bottom.png';
import decoTopMobile from './assets/deco-top-mobile.png';
import decoBottomMobile from './assets/deco-bottom-mobile.png';
import blog4 from './assets/blog-4.png';
import blog7 from './assets/blog-7.png';
import blog5 from './assets/blog-5.png';
import blog6 from './assets/blog-6.png';

const ARTICLE_PATH = '/blog/how-stablecoins-are-transforming-cross-border-payments';
const CARD_STEP = 428;

const POSTS = [blog4, blog7, blog5, blog6].map((image, i) => ({
  id: i + 1,
  image,
  tag: 'Blog Tag',
  readTime: '6 min',
  title: 'How Stablecoins are transforming Cross-Border Payments',
  desc: 'Explore stablecoin benefits for global payments.',
}));

const Arrow = ({ dir }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d={dir === 'left' ? 'M12 5L7 10L12 15' : 'M8 5L13 10L8 15'}
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RelatedBlogs = () => {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [sync]);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * CARD_STEP, behavior: 'smooth' });
  };

  return (
    <section className="related-blogs">
      <div className="related-blogs__frame">
        <img src={decoTop} alt="" className="related-blogs__deco related-blogs__deco--top" aria-hidden="true" />
        <img src={decoBottom} alt="" className="related-blogs__deco related-blogs__deco--bottom" aria-hidden="true" />
        <img src={decoTopMobile} alt="" className="related-blogs__deco related-blogs__deco--top-m" aria-hidden="true" />
        <img src={decoBottomMobile} alt="" className="related-blogs__deco related-blogs__deco--bottom-m" aria-hidden="true" />
        <div className="related-blogs__head">
          <span className="related-blogs__badge">Recommended</span>
          <h2 className="related-blogs__title">
            <span className="related-blogs__title-light">Read</span>
            <span className="related-blogs__title-strong">Other Blogs</span>
          </h2>
          <p className="related-blogs__desc">
            Our support specialists respond quickly and ensure you receive clear, helpful guidance.
          </p>
        </div>
        <div className="related-blogs__track" ref={trackRef} onScroll={sync}>
          {POSTS.map(post => (
            <Link key={post.id} to={ARTICLE_PATH} className="blog-card">
              <div className="blog-card__media">
                <div className="blog-card__media-inner">
                  <img src={post.image} alt="" />
                </div>
              </div>
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span className="blog-card__tag">{post.tag}</span>
                  <span className="blog-card__dot" />
                  <span className="blog-card__read">{post.readTime}</span>
                </div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__desc">
                  {post.desc} <span className="blog-card__more">Read more →</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="related-blogs__nav">
          <button
            type="button"
            className="related-blogs__arrow"
            aria-label="Previous blogs"
            disabled={atStart}
            onClick={() => scrollByCard(-1)}
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            className="related-blogs__arrow"
            aria-label="Next blogs"
            disabled={atEnd}
            onClick={() => scrollByCard(1)}
          >
            <Arrow dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;
