"use client";
import { useEffect } from "react";

export default function ScrollToService() {
  useEffect(() => {
    // Check if there's a hash in the URL for scrolling to a specific service
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const element = document.querySelector(hash);

      if (element) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, []);

  return null; // This component doesn't render anything
}
