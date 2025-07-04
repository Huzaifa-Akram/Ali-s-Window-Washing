import { Metadata } from "next";
import Link from "next/link";
import { getAllServices } from "@/data/servicedata";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Services - Dominion Window Shine",
  description:
    "Discover our comprehensive window cleaning services including residential, commercial, and maintenance packages. Professional, reliable, and affordable window cleaning solutions.",
  keywords:
    "window cleaning services, residential window cleaning, commercial window cleaning, window maintenance, professional window washing",
};

export default function ServicesPage() {
  const services = getAllServices();

  const getServiceIcon = (category: string) => {
    switch (category) {
      case "residential":
        return "R";
      case "commercial":
        return "C";
      case "maintenance":
        return "M";
      default:
        return "S";
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSeparator}>•</span>
              <span className={styles.breadcrumbCurrent}>Services</span>
            </div>
            <h1 className={styles.heroTitle}>
              Our Professional{" "}
              <span className={styles.heroTitleBlue}>Services</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Comprehensive window cleaning solutions tailored to meet your
              specific needs. From residential homes to commercial buildings, we
              deliver exceptional results with every service.
            </p>
            <Link href="/#book-service" className={styles.heroButton}>
              Get Free Quote
            </Link>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5★</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Customer Support</span>
            </div>
          </div>
        </div>

        {/* Wave SVG at bottom of hero */}
        <div className={styles.waveContainer}>
          <svg
            className={styles.wave}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="currentColor"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="currentColor"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Choose Your Perfect Service</h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>
                  {getServiceIcon(service.category)}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <span className={styles.serviceCategory}>
                  {service.category}
                </span>
              </div>

              <p className={styles.serviceDescription}>
                {service.detailedDescription || service.description}
              </p>

              <div className={styles.serviceDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Duration</span>
                  <span className={styles.detailValue}>{service.duration}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Frequency</span>
                  <span className={styles.detailValue}>
                    {service.frequency}
                  </span>
                </div>
              </div>

              <div className={styles.servicePrice}>
                <span className={styles.priceLabel}>Starting from:</span>
                <span className={styles.priceAmount}>
                  ${service.startingPrice}
                </span>
              </div>

              <div className={styles.featuresGrid}>
                {service.features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <span className={styles.featureIcon}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className={styles.serviceActions}>
                <Link href="/#book-service" className={styles.primaryButton}>
                  Book This Service
                </Link>
                <Link href="/#contact" className={styles.secondaryButton}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaDescription}>
            Experience the difference professional window cleaning makes.
            Contact us today for a free estimate and see why hundreds of
            customers trust True North Window Washing.
          </p>
          <Link href="/#book-service" className={styles.ctaButton}>
            Get Your Free Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}
