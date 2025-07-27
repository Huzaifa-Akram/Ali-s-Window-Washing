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
            <li><strong>Contact details:</strong> Name, address, phone, email</li>
            <li><strong>Service info:</strong> Property details, service preferences</li>
            <li><strong>Payment info:</strong> Billing details (processed securely)</li>
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
            We do not sell or share your personal information with third parties, 
            except when required by law or with your consent. We may share information 
            with service providers who help us operate our business.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Data Security</h2>
          <p>
            We protect your personal information using appropriate security measures 
            including secure storage, encrypted communications, and limited access controls. 
            However, no method of transmission is 100% secure.
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
          <p>To exercise these rights, contact us at info@dominionwindowshine.ca</p>
        </section>

        <section className={styles.section}>
          <h2>6. Data Retention</h2>
          <p>
            We retain customer information for 7 years after the last service, 
            or as required by law. You may request earlier deletion of your data.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Contact Us</h2>
          <p>Questions about this Privacy Policy? Contact us:</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactGrid}>
              <div>
                <h3>Dominion Window Shine</h3>
                <p><strong>Email:</strong> info@dominionwindowshine.ca</p>
                <p><strong>Phone:</strong> (431) 293-4714</p>
                <p><strong>Service Area:</strong> Winnipeg, Manitoba</p>
              </div>
              <div>
                <h3>Privacy Commissioner</h3>
                <p>If not satisfied with our response:</p>
                <p><strong>Office of the Privacy Commissioner of Canada</strong></p>
                <p>Website: priv.gc.ca | Phone: 1-800-282-1376</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

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
          Your privacy is important to us. This policy explains how Dominion
          Window Shine collects, uses, and protects your personal information.
        </p>
        <div className={styles.lastUpdated}>
          <strong>Last Updated:</strong> July 27, 2025
        </div>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>When you use our window cleaning services, we may collect:</p>
          <ul>
            <li>
              <strong>Contact Information:</strong> Name, address, phone number,
              email address
            </li>
            <li>
              <strong>Service Information:</strong> Property details, service
              preferences, scheduling information
            </li>
            <li>
              <strong>Payment Information:</strong> Billing address, payment
              method details (processed securely)
            </li>
            <li>
              <strong>Communication Records:</strong> Messages, calls, and
              service requests
            </li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>We may automatically collect:</p>
          <ul>
            <li>IP address and browser information</li>
            <li>Website usage data and analytics</li>
            <li>Device and location information (with permission)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. How We Use Your Information</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>
              <strong>Provide Services:</strong> Schedule, perform, and manage
              window cleaning services
            </li>
            <li>
              <strong>Communication:</strong> Contact you about appointments,
              updates, and service reminders
            </li>
            <li>
              <strong>Payment Processing:</strong> Process payments and maintain
              billing records
            </li>
            <li>
              <strong>Customer Support:</strong> Respond to inquiries and
              resolve service issues
            </li>
            <li>
              <strong>Business Operations:</strong> Improve our services,
              conduct quality assurance
            </li>
            <li>
              <strong>Marketing:</strong> Send promotional offers (with your
              consent)
            </li>
            <li>
              <strong>Legal Compliance:</strong> Meet regulatory requirements
              and protect our rights
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Information Sharing and Disclosure</h2>

          <h3>We Do Not Sell Your Information</h3>
          <p>
            Dominion Window Shine does not sell, rent, or trade your personal
            information to third parties for marketing purposes.
          </p>

          <h3>Limited Sharing</h3>
          <p>We may share your information only in these circumstances:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Trusted partners who help us
              operate our business (payment processors, scheduling software)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, court
              order, or government request
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              sale, or transfer of business assets
            </li>
            <li>
              <strong>Safety and Protection:</strong> To protect the rights,
              property, or safety of our customers and employees
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            information:
          </p>
          <ul>
            <li>Encrypted data transmission using SSL technology</li>
            <li>Secure payment processing through certified providers</li>
            <li>Regular security assessments and updates</li>
            <li>
              Limited access to personal information on a need-to-know basis
            </li>
            <li>Employee training on privacy and security practices</li>
          </ul>
          <p>
            While we strive to protect your information, no method of
            transmission over the internet or electronic storage is 100% secure.
            We cannot guarantee absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Your Privacy Rights</h2>

          <h3>Under Canadian Privacy Laws (PIPEDA)</h3>
          <p>You have the right to:</p>
          <ul>
            <li>
              <strong>Access:</strong> Request copies of your personal
              information
            </li>
            <li>
              <strong>Correction:</strong> Update or correct inaccurate
              information
            </li>
            <li>
              <strong>Withdrawal:</strong> Withdraw consent for marketing
              communications
            </li>
            <li>
              <strong>Complaint:</strong> File a complaint with the Privacy
              Commissioner of Canada
            </li>
          </ul>

          <h3>How to Exercise Your Rights</h3>
          <p>To exercise these rights, contact us at:</p>
          <div className={styles.contactInfo}>
            <p>
              <strong>Email:</strong> privacy@dominionwindowshine.ca
            </p>
            <p>
              <strong>Phone:</strong> (431) 293-4714
            </p>
            <p>
              <strong>Mail:</strong> Dominion Window Shine, Winnipeg, MB, Canada
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>6. Cookies and Tracking</h2>
          <p>Our website uses cookies to:</p>
          <ul>
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Provide personalized content and advertisements</li>
            <li>Improve website functionality and user experience</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling
            cookies may affect website functionality.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to:
          </p>
          <ul>
            <li>Provide ongoing window cleaning services</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Maintain business records for operational purposes</li>
          </ul>
          <p>
            Typically, we retain customer information for 7 years after the last
            service, unless a longer retention period is required by law.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 18 years of age.
            We do not knowingly collect personal information from children. If
            we become aware that we have collected information from a child, we
            will delete it promptly.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or applicable laws. We will notify you of
            significant changes by:
          </p>
          <ul>
            <li>Posting the updated policy on our website</li>
            <li>Sending email notifications to registered customers</li>
            <li>Including notices with service communications</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>10. Contact Information</h2>
          <p>
            If you have questions, concerns, or complaints about this Privacy
            Policy or our privacy practices, please contact us:
          </p>
          <div className={styles.contactInfo}>
            <h3>Dominion Window Shine</h3>
            <p>
              <strong>Privacy Officer</strong>
            </p>
            <p>
              <strong>Email:</strong> privacy@dominionwindowshine.ca
            </p>
            <p>
              <strong>Phone:</strong> (431) 293-4714
            </p>
            <p>
              <strong>Address:</strong> Winnipeg, Manitoba, Canada
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <Link href="https://dominionwindowshine.ca">
                dominionwindowshine.ca
              </Link>
            </p>
          </div>

          <div className={styles.regulatoryInfo}>
            <h3>Privacy Commissioner of Canada</h3>
            <p>
              If you are not satisfied with our response to your privacy
              concern, you may contact:
            </p>
            <p>
              <strong>Office of the Privacy Commissioner of Canada</strong>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://www.priv.gc.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.priv.gc.ca
              </a>
            </p>
            <p>Phone: 1-800-282-1376</p>
          </div>
        </section>
      </div>
    </div>
  );
}
