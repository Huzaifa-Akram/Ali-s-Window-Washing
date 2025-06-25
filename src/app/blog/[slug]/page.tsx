import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogdata";
import type { Metadata } from "next";
import styles from "./page.module.css";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Blog Post Not Found | True North Window Washing",
      description:
        "The requested blog post could not be found. Browse our other window cleaning tips and guides.",
    };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://truenorthwindowwashing.com";

  return {
    title: `${post.title} | True North Window Washing Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: "True North Window Washing",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.schema.dateModified,
      authors: [post.author],
      images: [
        {
          url: `${baseUrl}${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "True North Window Washing",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}${post.featuredImage}`],
      creator: "@truenorthwindowwashing",
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    category: post.category,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get other blog posts for "Related Posts" section
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2); // Social sharing data
  const shareUrl = encodeURIComponent(
    `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://truenorthwindowwashing.com"
    }/blog/${post.slug}`
  );
  const shareTitle = encodeURIComponent(post.title);
  const shareDescription = encodeURIComponent(post.excerpt);

  const socialLinks = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareTitle}`,
      icon: Facebook,
      className: "facebook",
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}&via=truenorthwindowwashing`,
      icon: Twitter,
      className: "twitter",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&title=${shareTitle}&summary=${shareDescription}`,
      icon: Linkedin,
      className: "linkedin",
    },
    {
      name: "Email",
      href: `mailto:?subject=${shareTitle}&body=I thought you might be interested in this article:%0A%0A${shareTitle}%0A${shareDescription}%0A%0ARead more: ${shareUrl}`,
      icon: Mail,
      className: "email",
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${shareTitle}%0A${shareUrl}`,
      icon: MessageCircle,
      className: "whatsapp",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      {" "}
      {/* Hero Section with Image and Title Overlay */}
      <header className={styles.heroSection}>
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            {/* Back Button */}
            <nav className={styles.navigation}>
              <Link href="/blog" className={styles.backButton}>
                <ArrowLeft className={styles.backIcon} />
                Back to Blog
              </Link>
            </nav>

            <nav aria-label="Article category">
              <span className={styles.category}>{post.category}</span>
            </nav>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.blogMeta} role="contentinfo">
              <div className={styles.metaItem}>
                <User className={styles.metaIcon} aria-hidden="true" />
                <span>By {post.author}</span>
              </div>
              <div className={styles.metaItem}>
                <Calendar className={styles.metaIcon} aria-hidden="true" />
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className={styles.metaItem}>
                <Clock className={styles.metaIcon} aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Content Section */}
      <section className={styles.contentSection}>
        {/* Blog Content */}
        <div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />{" "}
        {/* Tags and Social Sharing Section */}
        <div className={styles.tagsAndSharingSection}>
          {/* Tags Row */}
          <div className={styles.tagsRow}>
            <h3 className={styles.tagsTitle}>Tags:</h3>
            <div className={styles.tagsList}>
              {post.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Sharing Row */}
          <div className={styles.sharingRow}>
            <h3 className={styles.sharingTitle}>Share:</h3>
            <div className={styles.socialIcons}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${social.name}`}
                >
                  <social.icon className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Related Posts */}
        <div className={styles.relatedGrid}>
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.id}
              href={`/blog/${relatedPost.slug}`}
              className={styles.relatedCard}
            >
              <div className={styles.relatedImageContainer}>
                <Image
                  src={relatedPost.featuredImage}
                  alt={relatedPost.title}
                  width={120}
                  height={90}
                  className={styles.relatedImage}
                />
              </div>
              <div className={styles.relatedContent}>
                <h3 className={styles.relatedCardTitle}>{relatedPost.title}</h3>
                <div className={styles.relatedDate}>
                  <Calendar className={styles.calendarIcon} />
                  <time dateTime={relatedPost.publishedDate}>
                    {new Date(relatedPost.publishedDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>{" "}
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.schema.headline,
            datePublished: post.schema.datePublished,
            dateModified: post.schema.dateModified,
            author: {
              "@type": "Person",
              name: post.schema.author,
              url: `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://truenorthwindowwashing.com"
              }/about`,
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
                width: 60,
                height: 60,
              },
              url:
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://truenorthwindowwashing.com",
            },
            image: {
              "@type": "ImageObject",
              url: `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://truenorthwindowwashing.com"
              }${post.schema.image}`,
              width: 1200,
              height: 630,
            },
            url: `${
              process.env.NEXT_PUBLIC_SITE_URL ||
              "https://truenorthwindowwashing.com"
            }/blog/${post.slug}`,
            wordCount: post.schema.wordCount,
            keywords: post.keywords.join(", "),
            articleSection: post.category,
            description: post.metaDescription,
            inLanguage: "en-US",
            isPartOf: {
              "@type": "Blog",
              name: "True North Window Washing Blog",
              url: `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://truenorthwindowwashing.com"
              }/blog`,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://truenorthwindowwashing.com"
              }/blog/${post.slug}`,
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item:
                    process.env.NEXT_PUBLIC_SITE_URL ||
                    "https://truenorthwindowwashing.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${
                    process.env.NEXT_PUBLIC_SITE_URL ||
                    "https://truenorthwindowwashing.com"
                  }/blog`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: `${
                    process.env.NEXT_PUBLIC_SITE_URL ||
                    "https://truenorthwindowwashing.com"
                  }/blog/${post.slug}`,
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}
