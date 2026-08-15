import './Article.css';
import articleHero from './assets/article-hero.png';
import articleHeroMobile from './assets/article-hero-mobile.png';
import articleFigure from './assets/article-figure.png';

const BLOCKS = [
  { type: 'h2', text: 'Introduction' },
  {
    type: 'p',
    text: 'Cross-border payments have long been associated with slow settlement times, high transaction fees, and complex intermediary networks. As businesses expand globally, the need for faster, more transparent, and cost-effective payment infrastructure has become increasingly important.',
  },
  {
    type: 'p',
    text: 'Stablecoins are emerging as a practical solution to many of these challenges. By combining the efficiency of blockchain technology with the price stability of fiat-pegged digital assets, stablecoins enable businesses to move funds across borders with greater speed and predictability. From international payroll to supplier payments and treasury management, organizations are increasingly exploring stablecoins as part of their global payment strategy.',
  },
  { type: 'h2', text: '1. Faster Settlement Times' },
  {
    type: 'p',
    text: 'Traditional international bank transfers can take several business days to settle due to multiple correspondent banks, varying banking hours, and regional regulations.',
  },
  {
    type: 'p',
    text: 'Stablecoin transactions settle on blockchain networks, often within minutes, enabling businesses to send and receive funds significantly faster. This improves cash flow, accelerates business operations, and reduces delays associated with international transfers.',
  },
  { type: 'h2', text: '2. Lower Transaction Costs' },
  {
    type: 'p',
    text: 'Cross-border payments typically involve multiple intermediaries, each charging processing or conversion fees. These costs can quickly add up, particularly for businesses making frequent international payments.',
  },
  {
    type: 'p',
    text: 'Stablecoins reduce reliance on intermediaries by enabling direct digital transfers over blockchain networks. As a result, businesses can lower transaction costs while maintaining secure and transparent payment processes.',
  },
  { type: 'h2', text: '3. Greater Transparency and Traceability' },
  {
    type: 'p',
    text: 'International payment tracking has traditionally been limited, making it difficult for businesses to monitor the status of transactions in real time.',
  },
  {
    type: 'p',
    text: 'Blockchain technology provides an immutable transaction record that allows payment activity to be verified from initiation to settlement. This enhanced transparency improves operational visibility and simplifies financial reconciliation.',
  },
  { type: 'h2', text: '4. Improved Access to Global Markets' },
  {
    type: 'p',
    text: 'Many businesses face challenges when sending payments to regions with limited banking infrastructure or lengthy settlement processes. Stablecoins provide a more accessible payment mechanism by enabling value transfer wherever blockchain networks are available. This expands opportunities for businesses to work with international suppliers, partners, and customers while reducing dependence on traditional banking systems.',
  },
  { type: 'h2', text: '5. Enhanced Treasury and Liquidity Management' },
  {
    type: 'p',
    text: 'Managing funds across multiple currencies and jurisdictions can be operationally complex and capital intensive.',
  },
  {
    type: 'p',
    text: 'Stablecoins allow businesses to transfer value quickly between regions, improving liquidity management and enabling more efficient treasury operations. Faster settlement also reduces idle capital, helping organizations deploy working capital more effectively.',
  },
  { type: 'figure', src: articleFigure },
  { type: 'h2', text: 'Key Considerations' },
  {
    type: 'p',
    text: 'While stablecoins offer significant advantages, businesses should also evaluate factors such as regulatory compliance, custody solutions, blockchain network selection, and the transparency of the stablecoin issuer. Choosing trusted infrastructure and maintaining robust compliance processes remain essential for enterprise adoption.',
  },
  { type: 'h2', text: 'Conclusion' },
  {
    type: 'p',
    text: 'Stablecoins are reshaping the future of cross-border payments by offering faster settlements, lower costs, improved transparency, broader financial access, and more efficient treasury operations. As blockchain adoption continues to grow, stablecoins are becoming an increasingly valuable component of modern payment infrastructure.',
  },
  {
    type: 'p',
    text: 'For businesses seeking to streamline international transactions and improve operational efficiency, stablecoins represent more than an emerging technology—they are a practical step toward a faster, more connected global financial ecosystem.',
  },
];

const Article = () => (
  <section className="blog-article">
    <div className="blog-article__frame">
      <figure className="blog-article__hero">
        <img src={articleHero} alt="" className="blog-article__hero-img" />
        <img src={articleHeroMobile} alt="" className="blog-article__hero-img--mobile" />
      </figure>
      <div className="blog-article__body">
        {BLOCKS.map((block, i) =>
          block.type === 'h2' ? (
            <h2 key={i} className="blog-article__heading">{block.text}</h2>
          ) : block.type === 'figure' ? (
            <figure key={i} className="blog-article__figure">
              <img src={block.src} alt="" />
            </figure>
          ) : (
            <p key={i} className="blog-article__para">{block.text}</p>
          )
        )}
      </div>
    </div>
  </section>
);

export default Article;
