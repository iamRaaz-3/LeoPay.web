import React, { useState } from "react";
import "./Faq.css";
import faqBgBottom from "./assets/faq-grid-bottom.png";

const FAQS = [
  {
    q: "How fast are settlements with LeoPay?",
    a: "LeoPay enables near real-time settlements across supported rails. Depending on the corridor and payment method, transactions can settle within seconds instead of traditional 1~3 Business Days.",
  },
  {
    q: "Which countries and currencies do you support?",
    a: "We currently support key corridors including South Asia, Africa, and expanding markets. Local currency settlements are available in PHP, VND, IDR, MYR, THB, INR, CNY, HKD and other major currencies, with new regions being added continuously.",
  },
  {
    q: "Do I need to hold or manage stablecoins?",
    a: "No. LeoPay abstracts the complexity of stablecoins. You can send payments in both fiat & stablecoins, while we handle the underlying rails, including stablecoin-based settlement where applicable.",
  },
  {
    q: "How does LeoPay ensure compliance and security?",
    a: "LeoPay follows strict AML/KYC procedures and works with regulated partners across jurisdictions. All transactions are monitored with enterprise-grade compliance frameworks.",
  },
  {
    q: "What are the fees for using LeoPay?",
    a: "Our pricing is transparent and optimized, typically ranging from 0.01% to 0.3%, depending on volume and corridor. There are no hidden charges.",
  },
];

const AddIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18M12 18V6"
      stroke="#162755"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18"
      stroke="#162755"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen((v) => !v)}>
        <span className="faq-question-text">{faq.q}</span>
        <span className="faq-icon">{open ? <MinusIcon /> : <AddIcon />}</span>
      </button>
      {open && (
        <div className="faq-answer">
          <p>{faq.a}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => (
  <section id="faqs" className="faq-section">
    <div className="faq-container">
      <div className="faq-title-block">
        <span className="faq-badge">FAQ</span>
        <div className="faq-heading">
          <span className="faq-heading-light">Frequently Asked</span>
          <span className="faq-heading-bold">Questions</span>
        </div>
        <p className="faq-subtitle faq-subtitle--desktop">
          From Settlements to Compliance, Here are Answers to the Most
          <br />
          Common Questions about LeoPay.
        </p>
        <p className="faq-subtitle faq-subtitle--mobile">
          Get answers to common questions about Leopay&rsquo;s global payment ecosystem.
        </p>
      </div>

      <div className="faq-list">
        {FAQS.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
    </div>
    <div className="faq-bg-bottom">
      <img src={faqBgBottom} alt="" aria-hidden="true" />
    </div>
  </section>

);

export default Faq;
