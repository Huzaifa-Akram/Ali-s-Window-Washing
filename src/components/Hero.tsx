import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textSection}>
          <p className={styles.subtitle}>INTRODUCING MOPPERS</p>
          <h1 className={styles.title}>
            Worried about
            <br />
            your <span className={styles.highlight}>home & office</span>
            <br />
            cleaning?
          </h1>
          <p className={styles.description}>
            Hire us! We are a professional cleaning company offering
            <br />
            all type of cleaning and maintenance services.
          </p>
          <button className={styles.ctaButton}>REQUEST A DEMO →</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
