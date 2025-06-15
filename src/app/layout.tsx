import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "True North Window Washing - Professional Window Cleaning Services Near You",
  description:
    "Expert window cleaning services for homes and businesses. Professional, reliable, and eco-friendly window washing with crystal clear results. Free estimates available.",
  keywords:
    "window cleaning near me, professional window washing, residential window cleaning, commercial window cleaning, window cleaning service, window washing company, eco-friendly window cleaning",
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
      "Expert window cleaning services for homes and businesses. Professional, reliable, and eco-friendly window washing with crystal clear results.",
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
      "Expert window cleaning services for homes and businesses. Professional, reliable, and eco-friendly window washing with crystal clear results.",
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
      "Professional window cleaning services for residential and commercial properties",
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
            description: "Professional window cleaning for homes",
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
      ],
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
        <Navbar />
        <main style={{ paddingTop: "80px" }}>{children}</main>
      </body>
    </html>
  );
}
