import React from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { blogPosts, blogCategories } from "@/data/blogdata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Cleaning Blog | Expert Tips & Guides | Ali's Window Washing",
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
      "Expert window cleaning tips, maintenance guides, and industry insights from Ali's Window Washing professionals.",
    type: "website",
    images: ["/service1.jpg"],
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <nav className="mb-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Home
            </Link>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Window Cleaning Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert tips, maintenance guides, and industry insights to help you
            make informed decisions about your window cleaning and care needs.
          </p>
        </header>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            {blogCategories.map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Professional Window Cleaning?
          </h2>{" "}
          <p className="text-xl mb-8 opacity-90">
            Get expert service from Ali&apos;s Window Washing team
          </p>
          <Link
            href="/book-service"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Your Service Today
          </Link>
        </section>
      </div>

      {/* Structured Data */}
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
              logo: {
                "@type": "ImageObject",
                url: `${
                  process.env.NEXT_PUBLIC_SITE_URL ||
                  "https://aliswindowwashing.com"
                }/logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://aliswindowwashing.com"
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
                    "https://aliswindowwashing.com"
                  }/logo.png`,
                },
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
              description: post.metaDescription,
            })),
          }),
        }}
      />
    </main>
  );
}
