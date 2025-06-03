"use client";
import React, { useState } from "react";
import styles from "./BookService.module.css";

const BookService: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    zipCode: "",
    service: "Residential Cleaning",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  return (
    <div className={styles.bookServiceForm}>
      <div className={styles.formCard}>
        <h3 className={styles.formTitle}>Book a Service</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="zipCode" className={styles.label}>
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Enter your ZIP code"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="service" className={styles.label}>
              Choose a Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              <option value="Residential Cleaning">Residential Cleaning</option>
              <option value="Commercial Cleaning">Commercial Cleaning</option>
              <option value="Window Washing">Window Washing</option>
              <option value="Deep Cleaning">Deep Cleaning</option>
              <option value="Move-in/Move-out Cleaning">
                Move-in/Move-out Cleaning
              </option>
            </select>
          </div>

          <button type="submit" className={styles.submitButton}>
            SUBMIT DETAILS
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookService;
