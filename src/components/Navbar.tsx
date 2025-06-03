"use client";

import React, { useState, useCallback, useMemo } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Pricing", href: "#pricing" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {" "}
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoContent}>
            <div className={styles.logoIcon}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className={styles.logoImage}
                priority
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.companyName}>Ali&apos;s</span>
              <span className={styles.serviceType}>Window Washing</span>
            </div>
          </div>
        </div>{" "}
        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={styles.navLink}>
              {item.name}
            </a>
          ))}
          <button className={styles.ctaButton}>Get Quote</button>
        </div>{" "}
        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>{" "}
      </div>{" "}
      {/* Mobile Slide Menu */}
      {isOpen && (
        <>
          <div
            className={`${styles.overlay} ${
              isOpen ? styles.overlayActive : ""
            }`}
            onClick={toggleMenu}
          />
          <div
            className={`${styles.mobileMenu} ${
              isOpen ? styles.mobileMenuActive : ""
            }`}
          >
            <div className={styles.mobileMenuHeader}>
              <div className={styles.mobileLogoText}>
                <span className={styles.mobileCompanyName}>Ali&apos;s</span>
                <span className={styles.mobileServiceType}>Window Washing</span>
              </div>
            </div>
            <div className={styles.mobileNavItems}>
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${
                    isOpen ? styles.mobileNavLinkActive : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
              <button
                className={`${styles.mobileCta} ${
                  isOpen ? styles.mobileCtaActive : ""
                }`}
                style={{ animationDelay: `${navItems.length * 50}ms` }}
                onClick={toggleMenu}
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
