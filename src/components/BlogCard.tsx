import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blogdata";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article
      className={styles.blogCard}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
        <div className={styles.imageContainer}>
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            className={styles.featuredImage}
            itemProp="image"
            priority={false}
          />
          <div className={styles.categoryBadge}>
            <span itemProp="articleSection">{post.category}</span>
          </div>
        </div>

        <div className={styles.cardContent}>
          <div className={styles.metaInfo}>
            <time
              dateTime={post.publishedDate}
              className={styles.publishDate}
              itemProp="datePublished"
            >
              {new Date(post.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>{" "}
          <h3 className={styles.title} itemProp="headline">
            {post.title}
          </h3>
          <div className={styles.cardFooter}>
            <div className={styles.authorInfo}>
              <div className={styles.profileIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span className={styles.author} itemProp="author">
                By {post.author}
              </span>
            </div>

            <div className={styles.tags}>
              {post.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className={styles.tag} itemProp="keywords">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
