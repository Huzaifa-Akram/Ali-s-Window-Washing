import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.css";
import { getFeaturedServices } from "../data/servicedata";
import { ArrowRight } from "lucide-react";

const ServiceData = getFeaturedServices();

function ServiceCard() {
  return (
    <div
      className={styles.serviceCardContainer}
      role="list"
      aria-label="Window cleaning services"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {ServiceData.map((service, index) => (
        <article
          key={service.id}
          className={styles.card}
          role="listitem"
          itemScope
          itemType="https://schema.org/Service"
          aria-labelledby={`service-title-${service.id}`}
        >
          {" "}
          <Image
            src={service.image}
            alt={`${service.title} - Professional window cleaning service starting at $${service.startingPrice}. ${service.description}`}
            className={styles.image}
            width={300}
            height={200}
            priority={index <= 2}
          />
          <h3
            className={styles.title}
            id={`service-title-${service.id}`}
            itemProp="name"
          >
            {service.title}
          </h3>
          <p
            className={styles.price}
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            Starting at{" "}
            <strong itemProp="price">${service.startingPrice}</strong>
            <span itemProp="priceCurrency" style={{ display: "none" }}>
              USD
            </span>
          </p>
          <Link
            href={`/services#service-${service.id}`}
            className={styles.learnMoreButton}
            aria-label={`Learn more about ${service.title} service`}
            title={`Get details about our ${service.title} service starting at $${service.startingPrice}`}
          >
            <ArrowRight className={styles.icon} aria-hidden="true" role="img" />
          </Link>
        </article>
      ))}
    </div>
  );
}

export default ServiceCard;
