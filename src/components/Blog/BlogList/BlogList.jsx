import './BlogList.css';
import blog1 from './assets/blog-1.png';
import blog2 from './assets/blog-2.png';
import blog3 from './assets/blog-3.png';
import blog4 from './assets/blog-4.png';
import blog5 from './assets/blog-5.png';
import blog6 from './assets/blog-6.png';
import blog7 from './assets/blog-7.png';
import blog8 from './assets/blog-8.png';
import blog9 from './assets/blog-9.png';

const POSTS = [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9].map((image, i) => ({
  id: i + 1,
  image,
  tag: 'Blog Tag',
  readTime: '6 min',
  title: 'How Stablecoins are transforming Cross-Border Payments',
  desc: 'Explore stablecoin benefits for global payments.',
}));

const PAGES = [1, 2, 3, 4, 5];

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M12.5 5L7.5 10L12.5 15" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7.5 5L12.5 10L7.5 15" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BlogList = () => (
  <section className="blog-list">
    <div className="blog-list__frame">
      <div className="blog-list__grid">
        {POSTS.map(post => (
          <article key={post.id} className="blog-card">
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
          </article>
        ))}
      </div>

      <nav className="blog-pagination" aria-label="Blog pages">
        <button type="button" className="blog-pagination__step" disabled>
          <ChevronLeft />
          <span>Previous</span>
        </button>
        <div className="blog-pagination__pages">
          {PAGES.map(page => (
            <button
              key={page}
              type="button"
              className={page === 1 ? 'blog-pagination__page blog-pagination__page--active' : 'blog-pagination__page'}
              aria-current={page === 1 ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
        </div>
        <button type="button" className="blog-pagination__step blog-pagination__step--next">
          <span>Next</span>
          <ChevronRight />
        </button>
      </nav>
    </div>
  </section>
);

export default BlogList;
