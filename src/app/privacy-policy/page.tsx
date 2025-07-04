import { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy - Dominion Window Shine",
  description:
    "Privacy policy for Dominion Window Shine services. Learn how we protect and handle your personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <section className={styles.section} style={{ paddingTop: "2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
          <h1 style={{ marginBottom: "2rem", color: "#1e293b" }}>
            Privacy Policy
          </h1>

          <div style={{ marginBottom: "2rem" }}>
            <p>
              <strong>Last updated:</strong> June 18, 2025
            </p>
          </div>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, such as when you
            request a quote, book our services, or contact us. This may include
            your name, address, phone number, email address, and details about
            your window cleaning needs.
          </p>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Provide window cleaning services</li>
            <li>Communicate with you about our services</li>
            <li>Send you appointment confirmations and reminders</li>
            <li>Improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            Information Sharing
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information only in the following
            circumstances:
          </p>
          <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
          </ul>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <ul style={{ marginLeft: "2rem", listStyle: "none" }}>
            <li>
              <strong>Email:</strong> info@truenorthwindowwashing.com
            </li>
            <li>
              <strong>Phone:</strong> (555) 123-4567
            </li>
            <li>
              <strong>Address:</strong> 123 Main Street, Your City, State 12345
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
