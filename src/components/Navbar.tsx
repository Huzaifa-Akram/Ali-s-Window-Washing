import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import NavbarClient from "./NavbarClient";

const Navbar = () => {
  // Static navigation items - better for SEO as they're server-side rendered
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/#about" },
    { name: "FAQs", href: "/#faqs" },
    { name: "Contact", href: "/#contact" },
  ];
  return (
    <header role="banner">
      <nav
        className={styles.navbar}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.container}>
          {/* Logo - Server-side rendered for better SEO */}{" "}
          <div className={styles.logo}>
            <Link
              href="/"
              className={styles.logoContent}
              aria-label="Dominion Window Shine - Go to homepage"
              title="Dominion Window Shine - Professional Window Cleaning Services"
            >
              <div className={styles.logoIcon}>
                <Image
                  src="/logo.svg"
                  alt="Dominion Window Shine Professional Cleaning Services"
                  width={50}
                  height={50}
                  className={styles.logoImage}
                  priority
                />
              </div>
              <div className={styles.logoText}>
                <span className={styles.companyName}>Dominion</span>
                <span className={styles.serviceType}>Window Shine</span>
              </div>
            </Link>
          </div>{" "}
          {/* Desktop Navigation - Server-side rendered for better SEO */}
          <div className={styles.desktopNav}>
            <ul
              role="list"
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
                gap: "2rem",
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={styles.navLink}
                    title={`Navigate to ${item.name} section`}
                    aria-label={`Go to ${item.name} section`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}{" "}
              <li>
                <Link
                  href="/#price-estimator"
                  className={styles.ctaButton}
                  title="Get a free quote for window cleaning services"
                  aria-label="Request a free quote for professional window cleaning"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
          {/* Client-side interactive components */}
          <NavbarClient navItems={navItems} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
