import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToHash from "@/components/ScrollToHash";

export const metadata: Metadata = {
  title:
    "Dominion Window Shine - Professional Window Cleaning Services in Manitoba",
  description:
    "Expert window cleaning services for homes and businesses in Manitoba. Professional, reliable, and eco-friendly window washing with crystal clear results. Get instant quotes with our online estimator.",
  keywords:
    "window cleaning Manitoba, professional window washing, residential window cleaning, commercial window cleaning, window cleaning service, window washing company, eco-friendly window cleaning, free window cleaning quote, instant estimate, eavestrough cleaning",
  authors: [{ name: "Dominion Window Shine" }],
  creator: "Dominion Window Shine",
  publisher: "Dominion Window Shine",
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
      "Dominion Window Shine - Professional Window Cleaning Services in Manitoba",
    description:
      "Expert window cleaning services for homes and businesses in Manitoba. Professional, reliable, and eco-friendly window washing with crystal clear results. Get instant quotes online.",
    siteName: "Dominion Window Shine",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dominion Window Shine Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dominion Window Shine - Professional Window Cleaning Services in Manitoba",
    description:
      "Expert window cleaning services for homes and businesses in Manitoba. Professional, reliable, and eco-friendly window washing with crystal clear results. Get instant quotes online.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "AN2OPa2VqBJVyj3ZkQDx26KP93CvE7nPQGAfL4og_c0", // Add your actual verification code
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
    name: "Dominion Window Shine",
    description:
      "Professional window cleaning services for residential and commercial properties with instant online quotes",
    url: "https://dominionwindowshine.ca",
    serviceType: "Window Cleaning Service",
    areaServed: {
      "@type": "City",
      name: "Manitoba",
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
      email: "info@dominionwindowshine.ca",
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
        {/* Favicon Setup */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />

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
