"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SmoothScrollToHash() {
  const router = useRouter();

  useEffect(() => {
    // Function to handle smooth scrolling to hash
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash) as HTMLElement;
        if (element) {
          // Add a small delay to ensure the page has loaded
          setTimeout(() => {
            const navbarHeight = 80; // Height of fixed navbar
            const elementPosition = element.offsetTop - navbarHeight - 20; // Extra 20px padding

            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    // Handle initial page load with hash
    scrollToHash();

    // Handle hash changes (if user navigates with hash links)
    const handleHashChange = () => {
      scrollToHash();
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [router]);

  return null; // This component doesn't render anything
}
