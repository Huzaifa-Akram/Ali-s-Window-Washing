import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subtitle}>ABOUT COMPANY</p>
          <h2 className={styles.title}>
            Most awarded cleaning
            <br />
            company since 1995.
          </h2>{" "}
          <p className={styles.description}>
            Morning greater Lesser day given fruitful. can&apos;t moveth night i
            fish be fish said good let saying saw forth fruitful day stars
            female whales. God seed. Fruitful. Waters. Shall under in yielding
            saying given dominion don&apos;t of to dry good void said. Creature
            dominion was good creepeth give bring the doesn&apos;t first shall
            two signs is gathered set.
          </p>
          <a href="#" className={styles.link}>
            Learn more about company
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
