import { Metadata } from "next";
import Link from "next/link";
import styles from "./terms-of-service.module.css";

export const metadata: Metadata = {
  title: "Terms of Service - Dominion Window Shine | Window Cleaning Winnipeg",
  description:
    "Terms of service for Dominion Window Shine window cleaning services in Winnipeg, Manitoba. Review our service terms, conditions, and policies.",
  keywords:
    "terms of service, window cleaning terms, service agreement, winnipeg window cleaning, dominion window shine",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://dominionwindowshine.ca/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSeparator}>•</span>
          <span className={styles.breadcrumbCurrent}>Terms of Service</span>
        </div>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.subtitle}>
          Terms and conditions for Dominion Window Shine services in Winnipeg,
          Manitoba.
        </p>
        <div className={styles.lastUpdated}>
          <strong>Last Updated:</strong> July 27, 2025
        </div>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Service Agreement</h2>
          <p>
            By booking our window cleaning services, you agree to these terms.
            Dominion Window Shine provides professional window cleaning,
            eavestrough cleaning, and pressure washing services in Winnipeg,
            Manitoba and surrounding areas.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Services & Pricing</h2>
          <ul>
            <li>
              <strong>Residential:</strong> Window cleaning starts at $50
            </li>
            <li>
              <strong>Commercial:</strong> Services start at $100
            </li>
            <li>
              <strong>Additional:</strong> Eavestrough cleaning, pressure
              washing available
            </li>
            <li>
              <strong>Payment:</strong> Due upon completion - cash, card,
              Interac, e-transfer
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Booking & Cancellation</h2>
          <ul>
            <li>Book via website, phone, or email</li>
            <li>24-hour cancellation notice required</li>
            <li>Weather may affect scheduling - we&apos;ll contact you</li>
            <li>$50 no-show fee may apply</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Customer Responsibilities</h2>
          <ul>
            <li>Provide safe access to windows and work areas</li>
            <li>Remove personal items from window areas</li>
            <li>Secure pets during service</li>
            <li>Notify us of any damaged windows before service</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Service Guarantee</h2>
          <p>
            We guarantee professional, streak-free results. If you&apos;re not
            satisfied, we&apos;ll return within 24 hours at no charge. If it
            rains within 24 hours of exterior cleaning, we&apos;ll re-clean
            affected windows free.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Insurance & Liability</h2>
          <p>
            Dominion Window Shine is fully licensed, bonded, and insured with
            comprehensive liability coverage. Our liability is limited to the
            cost of services provided. Customer is responsible for pre-existing
            damage.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Contact Information</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactGrid}>
              <div>
                <h3>Get in Touch</h3>
                <p>
                  <strong>Phone:</strong> (431) 293-4714
                </p>
                <p>
                  <strong>Email:</strong> info@dominionwindowshine.ca
                </p>
                <p>
                  <strong>Website:</strong> dominionwindowshine.ca
                </p>
              </div>
              <div>
                <h3>Service Hours</h3>
                <p>
                  <strong>Mon-Fri:</strong> 8:00 AM - 5:00 PM
                </p>
                <p>
                  <strong>Saturday:</strong> 9:00 AM - 3:00 PM
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
