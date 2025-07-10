import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            {" "}
            <div className={styles.headerSection}>
              <p className={styles.subtitle}>ABOUT DOMINION WINDOW SHINE</p>
              <h2 className={styles.title}>
                Manitoba&apos;s Most
                <br />
                <span className={styles.highlight}>Affordable</span> Window
                Cleaning Experts
              </h2>
            </div>
            <div className={styles.description}>
              <p className={styles.intro}>
                Manitoba&apos;s premier window cleaning service offering
                unbeatable rates without compromising quality. We use advanced
                reverse osmosis technology for crystal-clear, streak-free
                results—100% eco-friendly, no chemicals.
              </p>
              <p className={styles.story}>
                From residential homes to commercial buildings, we deliver
                spotless windows every time. Professional, reliable, and
                satisfaction guaranteed.
              </p>
            </div>
            <div className={styles.featuresGrid}>
              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>Most Affordable Rates</h3>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>Reverse Osmosis Technology</h3>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>100% Eco-Friendly</h3>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>Satisfaction Guaranteed</h3>
                </div>
              </div>
            </div>
            <div className={styles.ctaSection}>
              <a href="#price-estimator" className={styles.primaryButton}>
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
