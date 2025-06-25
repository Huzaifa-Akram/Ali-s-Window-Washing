import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToHash from "@/components/ScrollToHash";

export const metadata: Metadata = {
  title:
    "True North Window Washing - Professional Window Cleaning Services Near You",
  description:
    "Expert window cleaning services for homes and businesses. Professional, reliable, and eco-friendly window washing with crystal clear results. Get instant quotes with our online estimator.",
  keywords:
    "window cleaning near me, professional window washing, residential window cleaning, commercial window cleaning, window cleaning service, window washing company, eco-friendly window cleaning, free window cleaning quote, instant estimate, eavestrough cleaning",
  authors: [{ name: "True North Window Washing" }],
  creator: "True North Window Washing",
  publisher: "True North Window Washing",
  category: "Home Services",
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
    type: "website",
    locale: "en_US",
    title:
      "True North Window Washing - Professional Window Cleaning Services Near You",
    description:
      "Expert window cleaning services for homes and businesses. Professional, reliable, and eco-friendly window washing with crystal clear results. Get instant quotes online.",
    siteName: "True North Window Washing",
    images: [
      {
        url: "/herobg.jpg",
        width: 1200,
        height: 630,
        alt: "Professional window cleaning service in action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "True North Window Washing - Professional Window Cleaning Services Near You",
    description:
      "Expert window cleaning services for homes and businesses. Professional, reliable, and eco-friendly window washing with crystal clear results. Get instant quotes online.",
    images: ["/herobg.jpg"],
  },
  verification: {
    google: "your-google-verification-code-here", // Add your actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "True North Window Washing",
    description:
      "Professional window cleaning services for residential and commercial properties with instant online quotes",
    url: "https://truenorthwindowwashing.com",
    serviceType: "Window Cleaning Service",
    areaServed: {
      "@type": "City",
      name: "Local Area",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Window Cleaning",
            description:
              "Professional window cleaning for homes with free estimates",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Window Cleaning",
            description:
              "Professional window cleaning for offices and businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Eavestrough Cleaning",
            description:
              "Professional eavestrough and gutter cleaning services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Window Cleaning",
            description: "Professional interior window cleaning services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exterior Window Cleaning",
            description: "Professional exterior window cleaning services",
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-204-414-0944",
      contactType: "customer service",
      email: "info@pictureperfectwc.ca",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        <ScrollToHash />
        <Navbar />
        <main style={{ paddingTop: "80px", flex: "1" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
