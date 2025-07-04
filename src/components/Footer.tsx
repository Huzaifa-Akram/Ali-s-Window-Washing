import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    phone: "+1 (431) 293-4714",
    email: "info@truenorthwindowwashing.com",
    address: "123 Main Street, Your City, State 12345",
    hours: "Mon-Sat: 8AM-6PM",
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/truenorthwindowwashing",
      icon: Facebook,
      ariaLabel: "Follow us on Facebook",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/truenorthwindowwashing",
      icon: Instagram,
      ariaLabel: "Follow us on Instagram",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/truenorthwindow",
      icon: Twitter,
      ariaLabel: "Follow us on Twitter",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/truenorthwindowwashing",
      icon: Linkedin,
      ariaLabel: "Connect with us on LinkedIn",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact", href: "/#contact" },
    { name: "Book Service", href: "/#book-service" },
    { name: "Blog", href: "/blog" },
  ];
  const services = [
    { name: "Residential Window Cleaning", href: "/#services" },
    { name: "Commercial Window Cleaning", href: "/#services" },
    { name: "Maintenance Package Plans", href: "/#services" },
    { name: "Free Estimates", href: "/#contact" },
    { name: "Emergency Services", href: "/#contact" },
  ];

  return (
    <footer
      id="contact"
      className={styles.footer}
      role="contentinfo"
      aria-label="Footer with company information and navigation links"
    >
      {" "}
      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.footerGrid}>
            {/* Company Info Column */}
            <div className={styles.companyColumn}>
              <div className={styles.footerLogo}>
                {" "}
                <div className={styles.logoContainer}>
                  <Image
                    src="/logo.svg"
                    alt="Dominion Window Shine Professional Cleaning Services"
                    width={60}
                    height={60}
                    className={styles.logoImage}
                  />
                  <div className={styles.logoText}>
                    <span className={styles.companyName}>Dominion</span>
                    <span className={styles.serviceType}>Window Shine</span>
                  </div>
                </div>
              </div>

              <p className={styles.companyDescription}>
                Professional window cleaning services for residential and
                commercial properties. We deliver crystal clear results with
                eco-friendly solutions and expert care.
              </p>

              {/* Social Media Links */}
              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Follow Us</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={styles.socialLink}
                      aria-label={social.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon
                        className={styles.socialIcon}
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <nav aria-label="Footer navigation">
                <ul className={styles.linksList}>
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={styles.footerLink}
                        aria-label={`Navigate to ${link.name} section`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services Column */}
            <div className={styles.servicesColumn}>
              <h3 className={styles.columnTitle}>Our Services</h3>
              <nav aria-label="Services navigation">
                <ul className={styles.linksList}>
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className={styles.footerLink}
                        aria-label={`Learn more about ${service.name}`}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Info Column */}
            <div className={styles.contactColumn}>
              <h3 className={styles.columnTitle}>Get In Touch</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Phone className={styles.contactIcon} aria-hidden="true" />
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Call Us</span>
                    <a
                      href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                      className={styles.contactLink}
                      aria-label={`Call us at ${contactInfo.phone}`}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Mail className={styles.contactIcon} aria-hidden="true" />
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Email Us</span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className={styles.contactLink}
                      aria-label={`Send email to ${contactInfo.email}`}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <MapPin className={styles.contactIcon} aria-hidden="true" />
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Visit Us</span>
                    <address className={styles.contactAddress}>
                      {contactInfo.address}
                    </address>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Clock className={styles.contactIcon} aria-hidden="true" />
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Business Hours</span>
                    <span className={styles.contactText}>
                      {contactInfo.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className={styles.ctaSection}>
                <Link
                  href="/#book-service"
                  className={styles.ctaButton}
                  aria-label="Book your window cleaning service now"
                >
                  Book Service Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>© {currentYear} Dominion Window Shine. All rights reserved.</p>
            </div>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className={styles.legalLink}>
                Terms of Service
              </Link>
              <a href="/sitemap.xml" className={styles.legalLink}>
                Sitemap
              </a>
            </div>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
