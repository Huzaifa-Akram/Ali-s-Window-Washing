import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import BookService from "@/components/BookService";
import styles from "./page.module.css";
import Services from "@/components/Services";
import PriceEstimator from "@/components/PriceEstimator";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section id="home" className={styles.heroSection}>
        <Hero />
      </section>

      {/* Book Service Section - Positioned between Hero and About */}
      <section id="book-service" className={styles.bookServiceSection}>
        <BookService />
      </section>

      {/* About Us Section */}
      <section id="about" className={styles.aboutSection}>
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services" className={styles.servicesSection}>
        <Services />
      </section>

      {/* Price Estimator Section */}
      <section id="price-estimator" className={styles.priceEstimatorSection}>
        <PriceEstimator />
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact Us</h2>
        <p>Get in touch for your window cleaning needs...</p>
      </section>
    </div>
  );
}
