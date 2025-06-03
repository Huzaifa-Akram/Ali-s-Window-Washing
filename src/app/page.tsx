import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import BookService from "@/components/BookService";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Book Service Section */}
      <section id="book-service">
        <BookService />
      </section>

      {/* Demo Sections for Navbar Links */}
      <section id="services" className={styles.section}>
        <h2>Our Services</h2>
        <p>Professional window cleaning services...</p>
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
