import { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import BookService from "@/components/BookService";
import styles from "./page.module.css";
import Services from "@/components/Services";
import PriceEstimator from "@/components/PriceEstimator";
import FAQs from "@/components/FAQs";

export const metadata: Metadata = {
  title:
    "Dominion Window Shine | Winnipeg Window Cleaning Experts – Free Estimates",
  description:
    "Professional window cleaning services in Winnipeg, Manitoba & across Canada. Residential & commercial window washing, eavestrough cleaning, pressure washing. Free estimates, eco-friendly solutions, fully insured. Serving Winnipeg since 2020.",
  keywords:
    "window cleaning winnipeg, window cleaning manitoba, professional window cleaning winnipeg, residential window cleaning manitoba, commercial window cleaning winnipeg, window washing service winnipeg, eavestrough cleaning manitoba, gutter cleaning winnipeg, pressure washing winnipeg, eco-friendly window cleaning, free window cleaning estimates winnipeg, window cleaning near me, window cleaning company winnipeg, house window cleaning manitoba, storefront window cleaning winnipeg",
  alternates: {
    canonical: "https://dominionwindowshine.ca",
  },
  openGraph: {
    title: "Window Cleaning Services Winnipeg, Manitoba | Free Estimates",
    description:
      "Professional window cleaning services in Winnipeg, Manitoba. Residential & commercial window washing with free estimates. Eco-friendly solutions, fully insured.",
    url: "https://dominionwindowshine.ca",
    type: "website",
    images: [
      {
        url: "https://dominionwindowshine.ca/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dominion Window Shine - Window Cleaning Services Winnipeg Manitoba",
      },
    ],
  },
};

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
      {/* FAQs Section */}
      <section id="faqs" className={styles.faqsSection}>
        <FAQs />
      </section>
    </div>
  );
}
