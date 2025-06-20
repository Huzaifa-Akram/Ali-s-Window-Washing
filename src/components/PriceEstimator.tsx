"use client";

import { useState } from "react";
import styles from "./PriceEstimator.module.css";
import Image from "next/image";

interface FormData {
  houseType: string;
  cleaningType: string[];
  eavestrough: string;
  slidingWindows: boolean;
  patioDoors: boolean;
  skylights: boolean;
  railingGlass: boolean;
  frenchPaneWindows: boolean;
  sunroom: boolean;
  walkoutBasement: boolean;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  contactMethod: string;
}

const houseTypes = [
  { id: "bungalow", name: "Bungalow", image: "/bungalow.svg" },
  { id: "1.5-story", name: "1.5 Storey", image: "/1.5-story.svg" },
  { id: "2-story", name: "2 Storey", image: "/2-story.svg" },
  { id: "2.5-story", name: "2.5 Storey", image: "/2.5-story.svg" },
  { id: "3-story", name: "3 Storey", image: "/3-story.svg" },
];

export default function PriceEstimator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    houseType: "",
    cleaningType: [],
    eavestrough: "",
    slidingWindows: false,
    patioDoors: false,
    skylights: false,
    railingGlass: false,
    frenchPaneWindows: false,
    sunroom: false,
    walkoutBasement: false,
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    contactMethod: "email",
  });

  const scrollToEstimator = () => {
    const estimatorElement = document.getElementById("price-estimator");
    if (estimatorElement) {
      estimatorElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      // Smooth scroll to top of price estimator section
      setTimeout(() => scrollToEstimator(), 100);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      // Smooth scroll to top of price estimator section
      setTimeout(() => scrollToEstimator(), 100);
    }
  };

  const handleHouseTypeSelect = (houseType: string) => {
    setFormData({ ...formData, houseType });
  };

  const handleCleaningTypeChange = (type: string) => {
    const updatedTypes = formData.cleaningType.includes(type)
      ? formData.cleaningType.filter((t) => t !== type)
      : [...formData.cleaningType, type];
    setFormData({ ...formData, cleaningType: updatedTypes });
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ============= FORMSPREE INTEGRATION =============
      // To enable form submission via Formspree:
      // 1. Go to https://formspree.io/ and create an account
      // 2. Create a new form and get your form ID
      // 3. Replace 'YOUR_FORM_ID' below with your actual form ID
      // 4. Uncomment the fetch block below and comment out the simulation

      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      //
      // if (response.ok) {
      //   setIsSubmitting(false);
      //   setShowSuccess(true);
      //   // Reload page after showing success message for 3 seconds
      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 3000);
      // } else {
      //   throw new Error('Form submission failed');
      // }
      // ===============================================

      // Simulate API call for now (REMOVE THIS WHEN USING FORMSPREE)
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);

        // Reload page after showing success message for 3 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      // Handle error here
    }
  };

  const getProgressPercentage = () => {
    return ((currentStep + 1) / 5) * 100;
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return true; // Start step
      case 1:
        return formData.houseType !== "";
      case 2:
        return formData.cleaningType.length > 0 && formData.eavestrough !== "";
      case 3:
        return true; // Details step is optional
      case 4:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.address &&
          formData.email
        );
      default:
        return false;
    }
  };
  return (
    <section className={styles.estimator} id="price-estimator">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Residential Window Cleaning Quote</h2>
          <p className={styles.subtitle}>
            This is for Residential use only. If you require a commercial
            cleaning quote please contact us at{" "}
            <a href="tel:(204)414-0944" className={styles.phoneLink}>
              (000) 000-00000
            </a>{" "}
            or email{" "}
            <a
              href="mailto:info@pictureperfectwc.ca"
              className={styles.emailLink}
            >
              info@truenorthwindowwashing.ca
            </a>
          </p>{" "}
        </div>{" "}
        {/* Success Message */}
        {showSuccess && (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Thank You!</h3>
            <p className={styles.successText}>
              Your quote request has been submitted successfully. We will
              contact you within 24 hours with a detailed estimate.
            </p>
          </div>
        )}{" "}
        {/* Progress Bar */}
        {currentStep > 0 && !showSuccess && (
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
              <div className={styles.progressIndicator}>{currentStep}/4</div>
            </div>
          </div>
        )}
        {/* Form Steps - Hidden when success message is shown */}
        {!showSuccess && (
          <>
            {/* Step 0: Get Started */}
            {currentStep === 0 && (
              <div className={styles.step}>
                <div className={styles.startStep}>
                  <h3 className={styles.stepTitle}>Get Your Free Estimate</h3>
                  <p className={styles.stepDescription}>
                    Get an instant quote for professional window cleaning
                    services. Our process takes just a few minutes.
                  </p>
                  <button className={styles.getStartedBtn} onClick={handleNext}>
                    ✓ GET STARTED
                  </button>
                </div>
              </div>
            )}
            {/* Step 1: House Type Selection */}
            {currentStep === 1 && (
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>Select Your Type of House</h3>
                <p className={styles.stepSubtitle}>
                  What type of house do you have?
                </p>{" "}
                <div className={styles.houseGrid}>
                  {houseTypes.map((house, index) => (
                    <div
                      key={house.id}
                      className={`${styles.houseOption} ${
                        formData.houseType === house.id ? styles.selected : ""
                      }`}
                      style={{ "--index": index } as React.CSSProperties}
                      onClick={() => handleHouseTypeSelect(house.id)}
                    >
                      <div className={styles.houseImage}>
                        {" "}
                        <Image
                          src={house.image}
                          alt={house.name}
                          width={80}
                          height={60}
                          className={styles.houseSvg}
                        />
                      </div>
                      <span className={styles.houseName}>{house.name}</span>
                      <div className={styles.selectionIndicator}>
                        {formData.houseType === house.id ? "✓" : "✕"}
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.stepNavigation}>
                  <button
                    className={styles.nextBtn}
                    onClick={handleNext}
                    disabled={!canProceed()}
                  >
                    ✓ NEXT STEP
                  </button>
                </div>
              </div>
            )}
            {/* Step 2: Service Options */}
            {currentStep === 2 && (
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>
                  What type of cleaning services do you require?
                </h3>

                <div className={styles.serviceSection}>
                  <p className={styles.serviceQuestion}>
                    Do you require your window Interiors/Exteriors/or Both to be
                    cleaned?
                  </p>{" "}
                  <div className={styles.checkboxGroup}>
                    {["Exterior", "Interior", "Both"].map((type, index) => (
                      <label
                        key={type}
                        className={styles.checkboxLabel}
                        style={{ "--index": index } as React.CSSProperties}
                      >
                        <input
                          type="checkbox"
                          checked={formData.cleaningType.includes(type)}
                          onChange={() => handleCleaningTypeChange(type)}
                          className={styles.checkbox}
                        />
                        <span className={styles.checkboxText}>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={styles.serviceSection}>
                  <p className={styles.serviceQuestion}>
                    Do you need Eavestrough Cleaning?
                  </p>{" "}
                  <div className={styles.checkboxGroup}>
                    {["Yes, all 4 sides", "Yes, 2 sides", "No"].map(
                      (option, index) => (
                        <label
                          key={option}
                          className={styles.checkboxLabel}
                          style={{ "--index": index } as React.CSSProperties}
                        >
                          <input
                            type="radio"
                            name="eavestrough"
                            value={option}
                            checked={formData.eavestrough === option}
                            onChange={(e) =>
                              handleInputChange("eavestrough", e.target.value)
                            }
                            className={styles.checkbox}
                          />
                          <span className={styles.checkboxText}>{option}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                <div className={styles.stepNavigation}>
                  <button className={styles.backBtn} onClick={handleBack}>
                    ← Back
                  </button>
                  <button
                    className={styles.nextBtn}
                    onClick={handleNext}
                    disabled={!canProceed()}
                  >
                    ✓ NEXT STEP
                  </button>
                </div>
              </div>
            )}{" "}
            {/* Step 3: Window Details */}
            {currentStep === 3 && (
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>Window Cleaning Details</h3>

                <div className={styles.detailsGrid}>
                  {[
                    {
                      image: "/service1.jpg",
                      alt: "Sliding windows",
                      question:
                        "Do you have any sliding windows that need to be taken off track to be cleaned?",
                      field: "slidingWindows",
                    },
                    {
                      image: "/service2.jpg",
                      alt: "Patio doors",
                      question:
                        "Do you have any patio doors that need to be taken apart to be cleaned?",
                      field: "patioDoors",
                    },
                    {
                      image: "/service3.jpg",
                      alt: "Skylights",
                      question: "Do you require skylight cleaning?",
                      field: "skylights",
                    },
                    {
                      image: "/service4.jpg",
                      alt: "Railing glass",
                      question:
                        "Do you have railing glass that needs to be cleaned?",
                      field: "railingGlass",
                    },
                  ].map((detail, index) => (
                    <div
                      key={detail.field}
                      className={styles.detailCard}
                      style={{ "--index": index } as React.CSSProperties}
                    >
                      <div className={styles.detailImage}>
                        <Image
                          src={detail.image}
                          alt={detail.alt}
                          width={80}
                          height={60}
                        />
                      </div>
                      <p className={styles.detailQuestion}>{detail.question}</p>
                      <select
                        className={styles.select}
                        value={
                          formData[detail.field as keyof FormData]
                            ? "Yes"
                            : "No"
                        }
                        onChange={(e) =>
                          handleInputChange(
                            detail.field as keyof FormData,
                            e.target.value === "Yes"
                          )
                        }
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  ))}
                </div>

                <div className={styles.additionalInfo}>
                  <h4 className={styles.additionalTitle}>
                    Additional Information
                  </h4>

                  <div className={styles.additionalQuestion}>
                    <label className={styles.questionLabel}>
                      Do you have French pane windows?
                    </label>
                    <select
                      className={styles.select}
                      value={formData.frenchPaneWindows ? "Yes" : "No"}
                      onChange={(e) =>
                        handleInputChange(
                          "frenchPaneWindows",
                          e.target.value === "Yes"
                        )
                      }
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>

                  <div className={styles.additionalQuestion}>
                    <label className={styles.questionLabel}>
                      Do you have a sunroom that needs its windows cleaned?
                    </label>
                    <select
                      className={styles.select}
                      value={formData.sunroom ? "Yes" : "No"}
                      onChange={(e) =>
                        handleInputChange("sunroom", e.target.value === "Yes")
                      }
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>

                  <div className={styles.additionalQuestion}>
                    <label className={styles.questionLabel}>
                      Do you have a walk-out basement?
                    </label>
                    <select
                      className={styles.select}
                      value={formData.walkoutBasement ? "Yes" : "No"}
                      onChange={(e) =>
                        handleInputChange(
                          "walkoutBasement",
                          e.target.value === "Yes"
                        )
                      }
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                </div>

                <div className={styles.stepNavigation}>
                  <button className={styles.backBtn} onClick={handleBack}>
                    ← Back
                  </button>
                  <button className={styles.nextBtn} onClick={handleNext}>
                    ✓ NEXT STEP
                  </button>
                </div>
              </div>
            )}
            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>
                  Enter Your Contact Information
                </h3>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>First Name</label>
                      <input
                        type="text"
                        className={styles.formInput}
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Last Name</label>
                      <input
                        type="text"
                        className={styles.formInput}
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Address</label>
                      <input
                        type="text"
                        className={styles.formInput}
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Preferred Contact Method?
                      </label>
                      <select
                        className={styles.formSelect}
                        value={formData.contactMethod}
                        onChange={(e) =>
                          handleInputChange("contactMethod", e.target.value)
                        }
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Your phone number
                      </label>
                      <input
                        type="tel"
                        className={styles.formInput}
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Enter your email
                      </label>
                      <input
                        type="email"
                        className={styles.formInput}
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.stepNavigation}>
                    <button
                      type="button"
                      className={styles.backBtn}
                      onClick={handleBack}
                    >
                      ← Back{" "}
                    </button>{" "}
                    <button
                      type="submit"
                      className={`${styles.submitBtn} ${
                        isSubmitting ? styles.loading : ""
                      } ${showSuccess ? styles.success : ""}`}
                      disabled={!canProceed() || isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className={styles.loadingContent}>
                          <span className={styles.spinner}></span>
                          Processing...
                        </span>
                      ) : showSuccess ? (
                        "✓ Success!"
                      ) : (
                        "📧 Get Estimate"
                      )}
                    </button>
                  </div>
                </form>{" "}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
