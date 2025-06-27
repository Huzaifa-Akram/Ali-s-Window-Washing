import React from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blogdata";
import styles from "./Blog.module.css";

const Blog: React.FC = () => {
  // Show 3 specific blog posts on the homepage
  const featuredPosts = blogPosts.filter(
    (post) => post.id === "1" || post.id === "2" || post.id === "4"
  );

  return (
    <section
      className={styles.blogSection}
      id="blog"
      aria-labelledby="blog-heading"
      itemScope
      itemType="https://schema.org/Blog"
    >
      <div className={styles.container}>
        <header className={styles.headerSection}>
          <p className={styles.subtitle} role="text">
            BLOG & INSIGHTS
          </p>
          <div className={styles.line}>
            <h2 className={styles.title} id="blog-heading" itemProp="name">
              Expert Window Cleaning Tips & Industry Insights
            </h2>
            <div className={styles.descriptionContainer}>
              <p className={styles.description} itemProp="description">
                Stay informed with our latest articles on window cleaning
                techniques, maintenance tips, cost-saving strategies, and
                industry best practices. Expert advice to help you make informed
                decisions about your window care needs.
              </p>
              <Link href="/blog" className={styles.viewAllButton}>
                <span>View All Articles</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </header>

        <div className={styles.blogGrid}>
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className={styles.callToAction}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Need Professional Window Cleaning Advice?
            </h3>
            <p className={styles.ctaDescription}>
              Get personalized recommendations and expert guidance for your
              specific window cleaning needs.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/book-service" className={styles.primaryCta}>
                Get Free Consultation
              </Link>
              <Link href="/blog" className={styles.secondaryCta}>
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Ali's Window Washing Blog",
            description:
              "Expert window cleaning tips, maintenance guides, and industry insights",
            url: `${
              process.env.NEXT_PUBLIC_SITE_URL ||
              "https://aliswindowwashing.com"
            }/blog`,
            publisher: {
              "@type": "Organization",
              name: "Ali's Window Washing",
              url:
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://aliswindowwashing.com",
            },
            blogPost: featuredPosts.map((post) => ({
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
              },
              image: `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://aliswindowwashing.com"
              }${post.schema.image}`,
              url: `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://aliswindowwashing.com"
              }/blog/${post.slug}`,
              wordCount: post.schema.wordCount,
              keywords: post.keywords.join(", "),
              articleSection: post.category,
            })),
          }),
        }}
      />
    </section>
  );
};

export default Blog;
