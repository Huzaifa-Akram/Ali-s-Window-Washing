import { Metadata } from "next";
import Link from "next/link";
import styles from "../services/page.module.css";

export const metadata: Metadata = {
  title:
    "Window Cleaning Winnipeg | Professional Residential & Commercial Services",
  description:
    "Professional window cleaning services in Winnipeg, Manitoba. Residential homes, commercial buildings, storefronts. Free estimates, eco-friendly solutions, fully insured. Serving all Winnipeg neighborhoods.",
  keywords:
    "window cleaning winnipeg, winnipeg window cleaning, window washing winnipeg, residential window cleaning winnipeg, commercial window cleaning winnipeg, storefront cleaning winnipeg, window cleaning near me winnipeg, professional window cleaning winnipeg",
  alternates: {
    canonical: "https://dominionwindowshine.ca/winnipeg-window-cleaning",
  },
  openGraph: {
    title:
      "Window Cleaning Winnipeg | Professional Residential & Commercial Services",
    description:
      "Professional window cleaning services in Winnipeg, Manitoba. Free estimates, eco-friendly solutions, fully insured.",
    url: "https://dominionwindowshine.ca/winnipeg-window-cleaning",
    type: "website",
  },
};

export default function WinnipegWindowCleaning() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSeparator}>•</span>
              <span className={styles.breadcrumbCurrent}>
                Winnipeg Window Cleaning
              </span>
            </div>
            <h1 className={styles.heroTitle}>
              Professional{" "}
              <span className={styles.heroTitleBlue}>
                Window Cleaning in Winnipeg
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              Expert window cleaning services for Winnipeg homes and businesses.
              Crystal clear results with professional equipment, eco-friendly
              solutions, and fully insured service throughout all Winnipeg
              neighborhoods.
            </p>
            <div className={styles.heroButtons}>
              <a href="tel:+14312934714" className={styles.ctaButton}>
                Call (431) 293-4714
              </a>
              <Link
                href="/#price-estimator"
                className={styles.ctaButtonSecondary}
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <h2>Window Cleaning Services in Winnipeg, Manitoba</h2>
            <p>
              Dominion Window Shine is Winnipeg's premier window cleaning
              company, serving residential and commercial properties throughout
              the city. Our professional team provides crystal clear results
              using state-of-the-art equipment and eco-friendly cleaning
              solutions.
            </p>

            <h3>Why Choose Our Winnipeg Window Cleaning Services?</h3>
            <ul>
              <li>
                <strong>Local Winnipeg Business:</strong> We understand the
                unique challenges of window cleaning in Manitoba's climate
              </li>
              <li>
                <strong>Fully Insured & Bonded:</strong> Complete liability
                coverage for your peace of mind
              </li>
              <li>
                <strong>Eco-Friendly Solutions:</strong> Safe for your family,
                pets, and the Winnipeg environment
              </li>
              <li>
                <strong>Professional Equipment:</strong> Water-fed pole systems
                and traditional methods for best results
              </li>
              <li>
                <strong>Flexible Scheduling:</strong> We work around your busy
                Winnipeg lifestyle
              </li>
              <li>
                <strong>Satisfaction Guarantee:</strong> We stand behind our
                work with a quality guarantee
              </li>
            </ul>

            <h3>Winnipeg Neighborhoods We Serve</h3>
            <p>
              Our window cleaning services are available throughout Winnipeg,
              including:
            </p>
            <div className={styles.neighborhoodGrid}>
              <div className={styles.neighborhoodColumn}>
                <ul>
                  <li>Downtown Winnipeg</li>
                  <li>River Heights</li>
                  <li>Tuxedo</li>
                  <li>Fort Garry</li>
                  <li>St. Boniface</li>
                  <li>Charleswood</li>
                </ul>
              </div>
              <div className={styles.neighborhoodColumn}>
                <ul>
                  <li>Transcona</li>
                  <li>East Kildonan</li>
                  <li>West Kildonan</li>
                  <li>St. James</li>
                  <li>Windsor Park</li>
                  <li>Elmwood</li>
                </ul>
              </div>
              <div className={styles.neighborhoodColumn}>
                <ul>
                  <li>North End</li>
                  <li>South End</li>
                  <li>West End</li>
                  <li>Assiniboine Park</li>
                  <li>Garden City</li>
                  <li>And all surrounding areas</li>
                </ul>
              </div>
            </div>

            <h3>Residential Window Cleaning Winnipeg</h3>
            <p>
              Keep your Winnipeg home looking its best with our professional
              residential window cleaning services. We clean both interior and
              exterior windows, ensuring streak-free results that let the
              Manitoba sunshine through.
            </p>

            <h3>Commercial Window Cleaning Winnipeg</h3>
            <p>
              Maintain a professional appearance for your Winnipeg business with
              our commercial window cleaning services. From small storefronts to
              large office buildings, we provide reliable service that keeps
              your business looking its best.
            </p>

            <h3>Additional Services in Winnipeg</h3>
            <ul>
              <li>Eavestrough and Gutter Cleaning</li>
              <li>Pressure Washing</li>
              <li>Post-Construction Cleanup</li>
              <li>Solar Panel Cleaning</li>
              <li>Screen Cleaning and Repair</li>
            </ul>

            <h3>Get Your Free Winnipeg Window Cleaning Quote</h3>
            <p>
              Ready to experience the difference professional window cleaning
              makes? Contact Dominion Window Shine today for your free,
              no-obligation quote. We're proud to serve Winnipeg and surrounding
              Manitoba communities with reliable, professional window cleaning
              services.
            </p>

            <div className={styles.ctaSection}>
              <h4>Ready to Schedule Your Winnipeg Window Cleaning?</h4>
              <div className={styles.ctaButtons}>
                <a href="tel:+14312934714" className={styles.ctaButton}>
                  Call (431) 293-4714
                </a>
                <Link
                  href="/#price-estimator"
                  className={styles.ctaButtonSecondary}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Service Areas</h3>
              <p>Winnipeg & surrounding Manitoba communities</p>
              <ul>
                <li>Winnipeg</li>
                <li>Brandon</li>
                <li>Steinbach</li>
                <li>Portage la Prairie</li>
                <li>Selkirk</li>
                <li>Thompson</li>
              </ul>
            </div>

            <div className={styles.sidebarCard}>
              <h3>Quick Quote</h3>
              <p>
                Get an instant estimate for your Winnipeg window cleaning needs.
              </p>
              <Link href="/#price-estimator" className={styles.sidebarCta}>
                Price Estimator
              </Link>
            </div>

            <div className={styles.sidebarCard}>
              <h3>Contact Info</h3>
              <p>
                <strong>Phone:</strong> (431) 293-4714
              </p>
              <p>
                <strong>Email:</strong> info@dominionwindowshine.ca
              </p>
              <p>
                <strong>Service Area:</strong> Winnipeg, MB & surrounding areas
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
