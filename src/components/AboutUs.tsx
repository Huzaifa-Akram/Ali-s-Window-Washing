import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.headerSection}>
              <p className={styles.subtitle}>ABOUT ALI'S WINDOW WASHING</p>
              <h2 className={styles.title}>
                Canada's Premier
                <br />
                <span className={styles.highlight}>Eco-Friendly</span> Window
                Cleaning Service
              </h2>
            </div>

            <div className={styles.description}>
              <p className={styles.intro}>
                Welcome to Ali's Window Washing, proudly serving communities
                across Canada with crystal-clear results and environmental
                responsibility at our core.
              </p>

              <p className={styles.story}>
                Founded with a passion for excellence and trained by
                industry-leading professionals, we've revolutionized traditional
                window cleaning with our innovative approach. Our commitment to
                quality and sustainability sets us apart in the Canadian market.
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>4-Stage Filtration System</h3>
                  <p>Pure water technology for streak-free, spotless results</p>
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
                  <p>
                    No harmful chemicals or soaps - safe for your family and
                    environment
                  </p>
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>Professional Excellence</h3>
                  <p>
                    Trained by top industry experts with cutting-edge techniques
                  </p>
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>Proudly Canadian</h3>
                  <p>Local expertise serving communities across Canada</p>
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
