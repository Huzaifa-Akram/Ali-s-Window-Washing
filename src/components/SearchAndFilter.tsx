"use client";

import { useState, useMemo } from "react";
import { blogPosts, blogCategories } from "@/data/blogdata";
import BlogCard from "@/components/BlogCard";
import styles from "./SearchAndFilter.module.css";

interface SearchAndFilterProps {
  initialPosts: typeof blogPosts;
}

export default function SearchAndFilter({
  initialPosts,
}: SearchAndFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter posts based on search term and selected category
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchTerm, selectedCategory]);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
  };

  return (
    <>
      {/* Search and Filter Section */}
      <section className={styles.searchFilterSection}>
        <div className={styles.container}>
          <div className={styles.searchFilterGrid}>
            {/* Search Bar */}
            <div className={styles.searchContainer}>
              <svg
                className={styles.searchIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles, tips, and guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className={styles.clearSearch}
                  aria-label="Clear search"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Category Dropdown */}
            <div className={styles.categoryDropdownContainer}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.categoryDropdown}
              >
                <option value="All Categories">All Categories</option>
                {blogCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <svg
                className={styles.dropdownIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Results Info */}
          <div className={styles.resultsInfo}>
            <p className={styles.resultsText}>
              {filteredPosts.length === initialPosts.length
                ? `Showing all ${filteredPosts.length} articles`
                : `Found ${filteredPosts.length} of ${initialPosts.length} articles`}
            </p>
            {(searchTerm || selectedCategory !== "All Categories") && (
              <button onClick={handleReset} className={styles.resetButton}>
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={styles.blogGrid}>
        <div className={styles.container}>
          {filteredPosts.length > 0 ? (
            <div className={styles.postsGrid}>
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                  />
                </svg>
              </div>
              <h3 className={styles.noResultsTitle}>No articles found</h3>
              <p className={styles.noResultsText}>
                Try adjusting your search terms or browse all categories to find
                what you&apos;re looking for.
              </p>
              <button onClick={handleReset} className={styles.resetButton}>
                Show All Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
