import { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service - Dominion Window Shine",
  description:
    "Terms of service for Dominion Window Shine. Review our service terms and conditions.",
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <section className={styles.section} style={{ paddingTop: "2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
          <h1 style={{ marginBottom: "2rem", color: "#1e293b" }}>
            Terms of Service
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
            Service Agreement
          </h2>
          <p>
            By booking our window cleaning services, you agree to these terms of
            service. Dominion Window Shine provides professional window cleaning
            services for residential and commercial properties.
          </p>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            Service Scheduling
          </h2>
          <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Services are scheduled by appointment only</li>
            <li>We require 24-hour notice for cancellations</li>
            <li>Weather conditions may affect service scheduling</li>
            <li>We will notify you of any necessary rescheduling</li>
          </ul>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            Payment Terms
          </h2>
          <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Payment is due upon completion of services</li>
            <li>We accept cash, check, and major credit cards</li>
            <li>Invoices are payable within 30 days</li>
            <li>Late payments may incur additional fees</li>
          </ul>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            Insurance and Liability
          </h2>
          <p>
            Dominion Window Shine is fully licensed and insured. We carry
            comprehensive liability insurance to protect our customers and their
            property. Our insurance covers any damage that may occur during the
            normal course of our work.
          </p>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            Service Guarantee
          </h2>
          <p>
            We guarantee your satisfaction with our window cleaning services. If
            you are not completely satisfied, please contact us within 24 hours
            of service completion, and we will return to address any concerns at
            no additional charge.
          </p>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            Safety Requirements
          </h2>
          <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Customers must provide safe access to all windows</li>
            <li>Any dangerous conditions must be disclosed prior to service</li>
            <li>We reserve the right to refuse service in unsafe conditions</li>
            <li>All pets must be secured during service</li>
          </ul>

          <h2
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#334155",
            }}
          >
            Contact Information
          </h2>
          <p>For questions about these terms or our services, contact us at:</p>
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
