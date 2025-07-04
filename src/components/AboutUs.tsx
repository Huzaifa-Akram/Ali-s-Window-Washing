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
                At Dominion Window Shine, we believe every window deserves to
                shine like new—without breaking the bank. Founded right here in
                Manitoba, we&apos;re proud to offer the most competitive window
                cleaning rates in town.
              </p>
              <p className={styles.story}>
                Low prices don&apos;t mean cutting corners. We use advanced
                reverse osmosis and deionized water technology, ensuring
                crystal-clear, streak-free results—with no soaps, no chemicals,
                and no residue left behind.
              </p>
              <p className={styles.story}>
                Every home or business we clean gets our full attention and
                care, because we treat your property like it&apos;s our own.
                Whether it&apos;s a bungalow, storefront, or multi-story home,
                we take pride in delivering spotless results every single time.
              </p>
            </div>
            <div className={styles.closingStatement}>
              <p className={styles.closingText}>
                Let Dominion Window Shine bring natural light back into your
                space—with eco-friendly methods, honest service, and unbeatable
                value.
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m-3-6h6"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>Most Affordable Rates</h3>
                  <p>Best prices in town, guaranteed</p>
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
                  <p>Pure water for spotless windows</p>
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
                  <p>No chemicals, just pure water</p>
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>Satisfaction Guaranteed</h3>
                  <p>Not happy? We'll make it right</p>
                </div>
              </div>
            </div>
            <div className={styles.ctaSection}>
              <a href="#contact" className={styles.primaryButton}>
                Get Free Quote
              </a>
              <a href="#services" className={styles.secondaryButton}>
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
