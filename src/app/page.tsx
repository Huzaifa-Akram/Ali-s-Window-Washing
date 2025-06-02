import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Crystal Clear Windows,
            <br />
            <span className={styles.highlight}>Every Time</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Professional window cleaning services for residential and commercial
            properties. Making your view pristine with reliable, eco-friendly
            solutions.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>Get Free Quote</button>
            <button className={styles.secondaryButton}>View Services</button>
          </div>
        </div>
      </section>

      {/* Demo Sections for Navbar Links */}
      <section id="services" className={styles.section}>
        <h2>Our Services</h2>
        <p>Professional window cleaning services...</p>
      </section>

      <section id="about" className={styles.section}>
        <h2>About Ali&apos;s Window Washing</h2>
        <p>Learn more about our company...</p>
      </section>

      <section id="pricing" className={styles.section}>
        <h2>Pricing</h2>
        <p>Transparent and competitive pricing...</p>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact Us</h2>
        <p>Get in touch for your window cleaning needs...</p>
      </section>
    </div>
  );
}
