import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogdata";
import type { Metadata } from "next";

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
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Ali's Window Washing Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [post.featuredImage],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Navigation */}
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Blog
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <span>By {post.author}</span>
            </div>
            <time dateTime={post.publishedDate}>
              {new Date(post.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>{post.readTime}</span>
          </div>

          <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Professional Window Cleaning?
            </h3>{" "}
            <p className="text-lg mb-6 opacity-90">
              Get expert advice and professional service from Ali&apos;s Window
              Washing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-service"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Service Now
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </footer>
      </article>

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
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://aliswindowwashing.com"
              }/blog/${post.slug}`,
            },
          }),
        }}
      />
    </main>
  );
}
