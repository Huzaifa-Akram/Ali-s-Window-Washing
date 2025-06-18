import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";

function Services() {
  return (
    <section
      className={styles.servicesSection}
      id="services"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className={styles.container}>
        <header className={styles.headerSection}>
          <p className={styles.subtitle} role="text">
            SERVICES
          </p>{" "}
          <div className={styles.line}>
            <h2 className={styles.title} id="services-heading" itemProp="name">
              Professional Window Cleaning Services in Your Area
            </h2>{" "}
            <div className={styles.descriptionContainer}>
              <p className={styles.description} itemProp="description">
                Specialized window cleaning services tailored to your needs.
                From residential homes to commercial buildings, premium deep
                cleaning to regular maintenance plans - we deliver spotless,
                streak-free windows every time.
              </p>
              <button
                className={styles.moreServicesButton}
                aria-label="View more window cleaning services"
                type="button"
              >
                More Services
              </button>
            </div>
          </div>
        </header>
        <ServiceCard />
      </div>
    </section>
  );
}

export default Services;
