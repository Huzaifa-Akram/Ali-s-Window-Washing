import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogdata";
import type { Metadata } from "next";
import styles from "./page.module.css";
import SearchAndFilter from "@/components/SearchAndFilter";

export const metadata: Metadata = {
  title: "Window Cleaning Blog | Expert Tips & Guides | Dominion Window Shine",
  description:
    "Expert window cleaning tips, maintenance guides, cost-saving strategies, and industry insights. Professional advice for residential and commercial window care.",
  keywords: [
    "window cleaning blog",
    "window care tips",
    "window maintenance guide",
    "professional window cleaning",
    "window cleaning cost",
    "DIY window cleaning",
    "seasonal window care",
    "window cleaning frequency",
  ],
  openGraph: {
    title: "Window Cleaning Blog | Expert Tips & Guides",
    description:
      "Expert window cleaning tips, maintenance guides, and industry insights from Dominion Window Shine professionals.",
    type: "website",
    images: ["/service1.jpg"],
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className={styles.blogContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Image
          src="/herobg.jpg"
          alt="Window Cleaning Expert Blog"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            {" "}
            {/* Navigation */}
            <nav className={styles.navigation}>
              <Link href="/" className={styles.backButton}>
                <svg
                  className={styles.backIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Home
              </Link>
            </nav>
            {/* Hero Content */}
            <div>
              <h1 className={styles.heroTitle}>Window Cleaning Expert Blog</h1>
              <p className={styles.heroSubtitle}>
                Professional tips, maintenance guides, and industry insights to
                help you make informed decisions about your window cleaning
                needs.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.featureItem}>
                  <svg
                    className={styles.featureIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Expert Tips</span>
                </div>
                <div className={styles.featureItem}>
                  <svg
                    className={styles.featureIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  <span>Professional Advice</span>
                </div>
                <div className={styles.featureItem}>
                  <svg
                    className={styles.featureIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V4.804z" />
                  </svg>
                  <span>Industry Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Client-side Search and Filter with Blog Grid */}
      <SearchAndFilter initialPosts={blogPosts} /> {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready for Professional Window Cleaning?
              </h2>
              <p className={styles.ctaDescription}>
                Get expert service from Dominion Window Shine team. Quality
                results guaranteed.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/book-service" className={styles.ctaPrimary}>
                  <svg
                    className={styles.ctaIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book Your Service
                </Link>
                <Link href="/contact" className={styles.ctaSecondary}>
                  <svg
                    className={styles.ctaIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Dominion Window Shine Blog",
            description:
              "Expert window cleaning tips, maintenance guides, and industry insights",
            url: `${
              process.env.NEXT_PUBLIC_SITE_URL ||
              "https://truenorthwindowwashing.com"
            }/blog`,
            publisher: {
              "@type": "Organization",
              name: "Dominion Window Shine",
              url:
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://truenorthwindowwashing.com",
              logo: {
                "@type": "ImageObject",
                url: `${
                  process.env.NEXT_PUBLIC_SITE_URL ||
                  "https://truenorthwindowwashing.com"
                }/logo.svg`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://truenorthwindowwashing.com"
              }/blog`,
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.schema.headline,
              datePublished: post.schema.datePublished,
              dateModified: post.schema.dateModified,
              author: {
                "@type": "Organization",
                name: post.schema.author,
              },
              publisher: {
                "@type": "Organization",
                name: post.schema.publisher,
                logo: {
                  "@type": "ImageObject",
                  url: `${
                    process.env.NEXT_PUBLIC_SITE_URL ||
                    "https://truenorthwindowwashing.com"
                  }/logo.svg`,
                },
              },
              image: `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://truenorthwindowwashing.com"
              }${post.schema.image}`,
              url: `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://truenorthwindowwashing.com"
              }/blog/${post.slug}`,
              wordCount: post.schema.wordCount,
              keywords: post.keywords.join(", "),
              articleSection: post.category,
              description: post.metaDescription,
            })),
          }),
        }}
      />
    </main>
  );
}
