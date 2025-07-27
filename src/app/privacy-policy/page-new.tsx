import { Metadata } from "next";
import Link from "next/link";
import styles from "./privacy-policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy - Dominion Window Shine | Window Cleaning Winnipeg",
  description:
    "Privacy policy for Dominion Window Shine window cleaning services. Learn how we protect and handle your personal information in compliance with Canadian privacy laws.",
  keywords:
    "privacy policy, data protection, personal information, window cleaning winnipeg, dominion window shine",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://dominionwindowshine.ca/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSeparator}>•</span>
          <span className={styles.breadcrumbCurrent}>Privacy Policy</span>
        </div>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>
          How we collect, use, and protect your personal information.
        </p>
        <div className={styles.lastUpdated}>
          <strong>Last Updated:</strong> July 27, 2025
        </div>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Information We Collect</h2>
          <p>When you book our window cleaning services, we collect:</p>
          <ul>
            <li>
              <strong>Contact details:</strong> Name, address, phone, email
            </li>
            <li>
              <strong>Service info:</strong> Property details, service
              preferences
            </li>
            <li>
              <strong>Payment info:</strong> Billing details (processed
              securely)
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Provide and schedule window cleaning services</li>
            <li>Communicate about appointments and services</li>
            <li>Process payments and send invoices</li>
            <li>Improve our services</li>
            <li>Comply with legal requirements</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Information Sharing</h2>
          <p>
            We do not sell or share your personal information with third
            parties, except when required by law or with your consent. We may
            share information with service providers who help us operate our
            business.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Data Security</h2>
          <p>
            We protect your personal information using appropriate security
            measures including secure storage, encrypted communications, and
            limited access controls. However, no method of transmission is 100%
            secure.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request corrections to your data</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent for communications</li>
          </ul>
          <p>
            To exercise these rights, contact us at info@dominionwindowshine.ca
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Data Retention</h2>
          <p>
            We retain customer information for 7 years after the last service,
            or as required by law. You may request earlier deletion of your
            data.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Contact Us</h2>
          <p>Questions about this Privacy Policy? Contact us:</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactGrid}>
              <div>
                <h3>Dominion Window Shine</h3>
                <p>
                  <strong>Email:</strong> info@dominionwindowshine.ca
                </p>
                <p>
                  <strong>Phone:</strong> (431) 293-4714
                </p>
                <p>
                  <strong>Service Area:</strong> Winnipeg, Manitoba
                </p>
              </div>
              <div>
                <h3>Privacy Commissioner</h3>
                <p>If not satisfied with our response:</p>
                <p>
                  <strong>Office of the Privacy Commissioner of Canada</strong>
                </p>
                <p>Website: priv.gc.ca | Phone: 1-800-282-1376</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
