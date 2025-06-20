"use client";

import React, { useState, useCallback } from "react";
import styles from "./Navbar.module.css";

interface NavbarClientProps {
  navItems: Array<{ name: string; href: string }>;
}

const NavbarClient: React.FC<NavbarClientProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <>
      {" "}
      {/* Mobile Menu Button */}
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        aria-haspopup="true"
      >
        <div className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {/* Mobile Slide Menu */}
      {isOpen && (
        <>
          <div
            className={`${styles.overlay} ${
              isOpen ? styles.overlayActive : ""
            }`}
            onClick={toggleMenu}
          />{" "}
          <div
            className={`${styles.mobileMenu} ${
              isOpen ? styles.mobileMenuActive : ""
            }`}
            id="mobile-navigation-menu"
            role="navigation"
            aria-label="Mobile navigation menu"
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
              ))}{" "}
              <a
                href="#price-estimator"
                className={`${styles.mobileCta} ${
                  isOpen ? styles.mobileCtaActive : ""
                }`}
                style={{ animationDelay: `${navItems.length * 50}ms` }}
                onClick={toggleMenu}
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarClient;
