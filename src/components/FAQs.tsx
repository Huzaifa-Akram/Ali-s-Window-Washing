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
    question: "How often should I have my windows cleaned?",
    answer:
      "For residential properties, we recommend window cleaning 2-4 times per year depending on your location and environmental factors. Commercial properties typically benefit from monthly or bi-monthly cleaning to maintain a professional appearance.",
  },
  {
    id: 2,
    question: "Do you provide free estimates?",
    answer:
      "Yes! We offer free, no-obligation estimates for all our services. You can get an instant quote using our online price estimator or contact us directly for a personalized assessment.",
  },
  {
    id: 3,
    question: "Are you insured and bonded?",
    answer:
      "Absolutely! Dominion Window Shine is fully insured and bonded for your peace of mind. We carry comprehensive liability insurance and worker's compensation coverage.",
  },
  {
    id: 4,
    question: "What areas do you serve in Manitoba?",
    answer:
      "We proudly serve all of Manitoba including Winnipeg, Brandon, Steinbach, Portage la Prairie, and surrounding areas. Contact us to confirm service availability in your specific location.",
  },
  {
    id: 5,
    question: "What happens if it rains after you clean my windows?",
    answer:
      "If it rains within 24 hours of our service and affects the quality of our work, we'll return to re-clean your windows at no additional charge. We stand behind our work!",
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
          <div className={styles.subtitle}>Questions & Answers</div>
          <h2 className={styles.title}>Common Questions About Our Services</h2>
          <p className={styles.description}>
            Everything you need to know about our professional window cleaning
            services
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
