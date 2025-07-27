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
          Please read these terms and conditions carefully before using our
          window cleaning services.
        </p>
        <div className={styles.lastUpdated}>
          <strong>Last Updated:</strong> July 27, 2025
        </div>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By booking, scheduling, or using any services provided by Dominion
            Window Shine ("we," "us," "our"), you ("customer," "you," "your")
            agree to be bound by these Terms of Service. If you do not agree
            with these terms, please do not use our services.
          </p>
          <p>
            These terms apply to all window cleaning, eavestrough cleaning,
            pressure washing, and related services provided in Winnipeg,
            Manitoba, and surrounding areas.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Services Provided</h2>

          <h3>Window Cleaning Services</h3>
          <ul>
            <li>
              Exterior and interior window cleaning for residential properties
            </li>
            <li>Commercial window cleaning for offices and storefronts</li>
            <li>Screen cleaning and maintenance</li>
            <li>Sill and frame cleaning</li>
          </ul>

          <h3>Additional Services</h3>
          <ul>
            <li>Eavestrough and gutter cleaning</li>
            <li>
              Pressure washing for driveways, decks, and building exteriors
            </li>
            <li>Post-construction cleanup</li>
            <li>Solar panel cleaning</li>
          </ul>

          <h3>Service Standards</h3>
          <p>
            We provide professional window cleaning services using
            industry-standard equipment and eco-friendly cleaning solutions. All
            services are performed by trained and insured technicians.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Booking and Scheduling</h2>

          <h3>Service Requests</h3>
          <ul>
            <li>
              Service requests can be made through our website, phone, or email
            </li>
            <li>All bookings are subject to availability and confirmation</li>
            <li>
              We will provide estimated arrival times and service duration
            </li>
            <li>Weather conditions may affect scheduling</li>
          </ul>

          <h3>Cancellation Policy</h3>
          <ul>
            <li>
              <strong>Customer Cancellations:</strong> Must provide at least 24
              hours notice
            </li>
            <li>
              <strong>Weather Cancellations:</strong> We may reschedule due to
              unsafe conditions
            </li>
            <li>
              <strong>No-Show Fee:</strong> $50 fee may apply for missed
              appointments without notice
            </li>
          </ul>

          <h3>Rescheduling</h3>
          <p>
            Services may be rescheduled due to weather conditions, equipment
            issues, or other unforeseen circumstances. We will contact you as
            soon as possible to arrange a new time.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Pricing and Payment</h2>

          <h3>Service Pricing</h3>
          <ul>
            <li>Residential window cleaning starts at $50</li>
            <li>Commercial services start at $100</li>
            <li>
              Final pricing depends on property size, window count, and services
              requested
            </li>
            <li>Free estimates available upon request</li>
          </ul>

          <h3>Payment Terms</h3>
          <ul>
            <li>Payment is due upon completion of services</li>
            <li>We accept cash, credit cards, Interac, and e-transfer</li>
            <li>Commercial accounts may qualify for net-30 payment terms</li>
            <li>Late payment fees may apply to overdue commercial accounts</li>
          </ul>

          <h3>Additional Charges</h3>
          <p>Additional charges may apply for:</p>
          <ul>
            <li>Extremely dirty or neglected windows</li>
            <li>Windows requiring special equipment or access</li>
            <li>Emergency or same-day service requests</li>
            <li>
              Travel fees for properties outside our standard service area
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Customer Responsibilities</h2>

          <h3>Property Access</h3>
          <ul>
            <li>Ensure safe and clear access to all windows and work areas</li>
            <li>Remove or secure personal items near windows</li>
            <li>Provide adequate parking for service vehicles</li>
            <li>Inform us of any security systems or access codes</li>
          </ul>

          <h3>Property Conditions</h3>
          <ul>
            <li>Notify us of any damaged or broken windows before service</li>
            <li>Ensure pets are secured during service</li>
            <li>Clear walkways and work areas of obstacles</li>
            <li>Provide accurate contact information for scheduling</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Service Guarantee and Liability</h2>

          <h3>Quality Guarantee</h3>
          <p>
            We guarantee streak-free, professional results. If you're not
            satisfied with our work, we'll return to re-clean the affected
            windows at no additional charge within 24 hours of the original
            service.
          </p>

          <h3>Weather Protection</h3>
          <p>
            If rain occurs within 24 hours of exterior window cleaning and
            affects the quality of our work, we'll return to re-clean at no
            charge.
          </p>

          <h3>Insurance and Liability</h3>
          <ul>
            <li>
              Dominion Window Shine is fully licensed, bonded, and insured
            </li>
            <li>
              We carry comprehensive liability insurance and worker's
              compensation
            </li>
            <li>
              Our liability is limited to the cost of the services provided
            </li>
            <li>
              Customer is responsible for pre-existing damage to windows or
              property
            </li>
          </ul>

          <h3>Limitation of Liability</h3>
          <p>
            Our total liability for any claim arising from our services shall
            not exceed the amount paid for the specific service in question. We
            are not liable for indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Safety and Environmental Policy</h2>

          <h3>Safety Standards</h3>
          <ul>
            <li>All technicians are trained in proper safety procedures</li>
            <li>We use professional-grade equipment and safety gear</li>
            <li>Work may be suspended if conditions become unsafe</li>
            <li>Customer safety is our top priority</li>
          </ul>

          <h3>Eco-Friendly Practices</h3>
          <ul>
            <li>
              We use biodegradable, environmentally safe cleaning solutions
            </li>
            <li>Water conservation practices are employed when possible</li>
            <li>Proper disposal of cleaning materials and wastewater</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Privacy and Data Protection</h2>
          <p>
            Customer information is collected and used in accordance with our
            Privacy Policy. We respect your privacy and protect your personal
            information. Please review our
            <Link href="/privacy-policy" className={styles.link}>
              {" "}
              Privacy Policy
            </Link>{" "}
            for detailed information about data handling practices.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Dispute Resolution</h2>

          <h3>Complaint Process</h3>
          <ol>
            <li>Contact us immediately with any service concerns</li>
            <li>We will investigate and respond within 24 hours</li>
            <li>
              If needed, we will return to address any issues at no charge
            </li>
            <li>Unresolved disputes may be subject to mediation</li>
          </ol>

          <h3>Governing Law</h3>
          <p>
            These terms are governed by the laws of Manitoba, Canada. Any
            disputes will be resolved in the courts of Manitoba.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Modifications and Updates</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time.
            Updated terms will be posted on our website and become effective
            immediately. Continued use of our services constitutes acceptance of
            the modified terms.
          </p>
          <p>
            For significant changes, we will notify customers via email or
            service communications.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contact Information</h2>
          <p>
            If you have questions about these Terms of Service or our window
            cleaning services, please contact us:
          </p>
          <div className={styles.contactInfo}>
            <h3>Dominion Window Shine</h3>
            <p>
              <strong>Phone:</strong> (431) 293-4714
            </p>
            <p>
              <strong>Email:</strong> info@dominionwindowshine.ca
            </p>
            <p>
              <strong>Service Area:</strong> Winnipeg, Manitoba & surrounding
              areas
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <Link href="https://dominionwindowshine.ca">
                dominionwindowshine.ca
              </Link>
            </p>
          </div>

          <div className={styles.businessInfo}>
            <h3>Business Hours</h3>
            <p>
              <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM
            </p>
            <p>
              <strong>Saturday:</strong> 9:00 AM - 3:00 PM
            </p>
            <p>
              <strong>Sunday:</strong> Closed
            </p>
            <p>
              <strong>Emergency Services:</strong> Available by appointment
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>12. Acknowledgment</h2>
          <p>
            By using our services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Service. These
            terms constitute the entire agreement between you and Dominion
            Window Shine regarding the use of our services.
          </p>
          <div className={styles.acknowledgment}>
            <p>
              <strong>
                Thank you for choosing Dominion Window Shine for your window
                cleaning needs in Winnipeg, Manitoba!
              </strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
