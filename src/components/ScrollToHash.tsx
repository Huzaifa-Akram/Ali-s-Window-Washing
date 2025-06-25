"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ScrollToHash = () => {
  const router = useRouter();

  useEffect(() => {
    // Handle hash scrolling when component mounts
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Check for hash on initial load
    handleHashScroll();

    // Handle browser back/forward navigation
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [router]);

  return null;
};

export default ScrollToHash;
