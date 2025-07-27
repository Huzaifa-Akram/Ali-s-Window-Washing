"use client";

import React, { useState } from "react";
import styles from "./FAQs.module.css";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    id: 1,
    question: "How much does window cleaning cost in Winnipeg?",
    answer:
      "Window cleaning costs in Winnipeg vary based on the size of your property, number of windows, and services required. Residential window cleaning typically starts at $50, while commercial services start at $100. Use our online price estimator for an instant quote tailored to your specific needs.",
  },
  {
    id: 2,
    question: "Do you provide free estimates for window cleaning in Manitoba?",
    answer:
      "Yes! We offer free, no-obligation estimates for all our window cleaning services in Winnipeg, Manitoba and surrounding areas. You can get an instant quote using our online price estimator or contact us directly for a personalized assessment of your property.",
  },
  {
    id: 3,
    question: "What areas do you serve for window cleaning in Manitoba?",
    answer:
      "We proudly serve Winnipeg and the greater Manitoba region including Steinbach, Niverville, St. Anne, East Saint Paul, West Saint Paul, La Salle, Oak Bluff, Dugald, Grande Pointe, Deacons Corner, Howden, Navin, North Transcona, Assiniboia, Brandon, and Portage la Prairie. Contact us to confirm window cleaning service availability in your specific location.",
  },
  {
    id: 4,
    question: "Are you insured and bonded for window cleaning services?",
    answer:
      "Absolutely! Dominion Window Shine is fully insured and bonded for your peace of mind. We carry comprehensive liability insurance and worker's compensation coverage for all our window cleaning services in Manitoba.",
  },
  {
    id: 5,
    question: "What window cleaning services do you offer in Winnipeg?",
    answer:
      "We offer comprehensive window cleaning services including exterior and interior window cleaning, storefront cleaning, eavestrough cleaning, gutter cleaning, pressure washing, and post-construction cleanup for both residential and commercial properties in Winnipeg and Manitoba.",
  },
];

const FAQs: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section
      className={styles.faqsSection}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.subtitle}>Frequently Asked Questions</div>
          <h2 className={styles.title}>
            Window Cleaning Services FAQ - Winnipeg, Manitoba
          </h2>
          <p className={styles.description}>
            Everything you need to know about our professional window cleaning
            services in Winnipeg, Manitoba and across Canada
          </p>
        </div>

        <div className={styles.faqList}>
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`${styles.faqItem} ${
                openItems.has(faq.id) ? styles.open : ""
              }`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleItem(faq.id)}
                aria-expanded={openItems.has(faq.id)}
                aria-controls={`answer-${faq.id}`}
              >
                <span className={styles.questionText} itemProp="name">
                  {faq.question}
                </span>
                <span className={styles.icon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.iconSvg}
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                id={`answer-${faq.id}`}
                className={styles.faqAnswer}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className={styles.answerContent} itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
