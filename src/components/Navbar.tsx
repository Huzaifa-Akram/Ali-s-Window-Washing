"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Optimized animation variants with reduced complexity
  const menuVariants = useMemo(
    () => ({
      closed: {
        x: "100%",
        transition: {
          type: "tween",
          duration: 0.3,
          ease: "easeInOut",
        },
      },
      open: {
        x: "0%",
        transition: {
          type: "tween",
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      closed: {
        x: 30,
        opacity: 0,
      },
      open: {
        x: 0,
        opacity: 1,
      },
    }),
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
        </button>
      </div>{" "}
      {/* Mobile Slide Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={toggleMenu}
            />
            <motion.div
              className={styles.mobileMenu}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className={styles.mobileMenuHeader}>
                <div className={styles.mobileLogoText}>
                  <span className={styles.mobileCompanyName}>Ali&apos;s</span>
                  <span className={styles.mobileServiceType}>
                    Window Washing
                  </span>
                </div>
              </div>
              <div className={styles.mobileNavItems}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={styles.mobileNavLink}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{
                      delay: index * 0.05,
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  className={styles.mobileCta}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{
                    delay: navItems.length * 0.05,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  onClick={toggleMenu}
                >
                  Get Free Quote
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
