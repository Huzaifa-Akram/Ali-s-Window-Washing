import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToHash from "@/components/ScrollToHash";

export const metadata: Metadata = {
  title: {
    default:
      "Window Cleaning Services Winnipeg, Manitoba | Dominion Window Shine",
    template: "%s | Dominion Window Shine - Window Cleaning Manitoba",
  },
  description:
    "Professional window cleaning services in Winnipeg, Manitoba & across Canada. Residential & commercial window washing, eavestrough cleaning. Free estimates, eco-friendly solutions. Serving Winnipeg, Brandon, Steinbach since 2020.",
  keywords: [
    "window cleaning winnipeg",
    "window cleaning manitoba",
    "window cleaning canada",
    "professional window washing winnipeg",
    "residential window cleaning manitoba",
    "commercial window cleaning winnipeg",
    "window cleaning service near me",
    "window washing company winnipeg",
    "eco-friendly window cleaning",
    "free window cleaning quote winnipeg",
    "eavestrough cleaning manitoba",
    "gutter cleaning winnipeg",
    "window cleaning brandon manitoba",
    "window cleaning steinbach",
    "window cleaning portage la prairie",
    "pressure washing winnipeg",
    "house washing manitoba",
    "storefront cleaning winnipeg",
    "office window cleaning manitoba",
  ].join(", "),
  authors: [
    { name: "Dominion Window Shine", url: "https://dominionwindowshine.ca" },
  ],
  creator: "Dominion Window Shine",
  publisher: "Dominion Window Shine",
  category: "Home Services",
  classification: "Business",
  alternates: {
    canonical: "https://dominionwindowshine.ca",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://dominionwindowshine.ca",
    title:
      "Window Cleaning Services Winnipeg, Manitoba | Dominion Window Shine",
    description:
      "Professional window cleaning services in Winnipeg, Manitoba & across Canada. Residential & commercial window washing with free estimates. Eco-friendly solutions, fully insured.",
    siteName: "Dominion Window Shine",
    images: [
      {
        url: "https://dominionwindowshine.ca/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dominion Window Shine - Professional Window Cleaning Services in Winnipeg Manitoba",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Window Cleaning Services Winnipeg, Manitoba | Dominion Window Shine",
    description:
      "Professional window cleaning services in Winnipeg, Manitoba & across Canada. Residential & commercial window washing with free estimates. Eco-friendly solutions, fully insured.",
    images: ["https://dominionwindowshine.ca/og-image.png"],
    creator: "@DominionWindowShine",
  },
  verification: {
    google: "FGMwPxH9z_snh03SzaHQ-kKdsF018HWFGjcc6zVsYhM",
    yandex: "verification_code_here",
    yahoo: "verification_code_here",
  },
  other: {
    "geo.region": "CA-MB",
    "geo.placename": "Winnipeg, Manitoba",
    "geo.position": "49.8997;-97.1374",
    ICBM: "49.8997, -97.1374",
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
    "@id": "https://dominionwindowshine.ca/#organization",
    name: "Dominion Window Shine",
    alternateName: ["Dominion Window Cleaning", "Window Cleaning Winnipeg"],
    description:
      "Professional window cleaning services for residential and commercial properties in Winnipeg, Manitoba and across Canada with instant online quotes and eco-friendly solutions.",
    url: "https://dominionwindowshine.ca",
    logo: "https://dominionwindowshine.ca/logo.svg",
    image: "https://dominionwindowshine.ca/og-image.png",
    serviceType: "Window Cleaning Service",
    foundingDate: "2020",
    slogan: "Crystal Clear Results, Every Time",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: ["Cash", "Credit Card", "Interac", "Online Payment"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Winnipeg",
      addressRegion: "MB",
      addressCountry: "CA",
      postalCode: "R3C 4R7",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "49.8997",
      longitude: "-97.1374",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Winnipeg",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Steinbach",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Niverville",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "St. Anne",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "East Saint Paul",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "West Saint Paul",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "La Salle",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Oak Bluff",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Dugald",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Grande Pointe",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Deacons Corner",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Howden",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Navin",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "North Transcona",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Assiniboia",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Brandon",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "City",
        name: "Portage la Prairie",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      {
        "@type": "State",
        name: "Manitoba",
        addressCountry: "CA",
      },
    ],
    sameAs: [
      "https://www.facebook.com/dominionwindowshine",
      "https://www.instagram.com/dominionwindowshine",
      "https://www.linkedin.com/company/dominionwindowshine",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "CAD",
            price: "Starting at $50",
          },
          itemOffered: {
            "@type": "Service",
            name: "Residential Window Cleaning",
            description:
              "Professional exterior and interior window cleaning for homes in Winnipeg and Manitoba with free estimates and eco-friendly solutions",
            serviceType: "Window Cleaning",
            provider: {
              "@type": "LocalBusiness",
              name: "Dominion Window Shine",
            },
          },
        },
        {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "CAD",
            price: "Starting at $100",
          },
          itemOffered: {
            "@type": "Service",
            name: "Commercial Window Cleaning",
            description:
              "Professional window cleaning for offices, storefronts, and commercial buildings in Winnipeg Manitoba",
            serviceType: "Commercial Window Cleaning",
            provider: {
              "@type": "LocalBusiness",
              name: "Dominion Window Shine",
            },
          },
        },
        {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "CAD",
            price: "Starting at $75",
          },
          itemOffered: {
            "@type": "Service",
            name: "Eavestrough Cleaning",
            description:
              "Professional eavestrough and gutter cleaning services in Winnipeg and Manitoba",
            serviceType: "Gutter Cleaning",
            provider: {
              "@type": "LocalBusiness",
              name: "Dominion Window Shine",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Window Cleaning",
            description:
              "Professional interior window cleaning services for homes and businesses",
            serviceType: "Interior Window Cleaning",
            provider: {
              "@type": "LocalBusiness",
              name: "Dominion Window Shine",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exterior Window Cleaning",
            description:
              "Professional exterior window cleaning services with ladder and water-fed pole systems",
            serviceType: "Exterior Window Cleaning",
            provider: {
              "@type": "LocalBusiness",
              name: "Dominion Window Shine",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pressure Washing",
            description:
              "Professional pressure washing services for driveways, decks, and building exteriors",
            serviceType: "Pressure Washing",
            provider: {
              "@type": "LocalBusiness",
              name: "Dominion Window Shine",
            },
          },
        },
      ],
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-204-414-0944",
        contactType: "customer service",
        email: "info@dominionwindowshine.ca",
        availableLanguage: ["English", "French"],
        areaServed: "CA-MB",
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-431-293-4714",
        contactType: "sales",
        email: "quotes@dominionwindowshine.ca",
        availableLanguage: "English",
        areaServed: "CA-MB",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Sarah M.",
        },
        reviewBody:
          "Excellent window cleaning service in Winnipeg! Very professional and the windows look crystal clear. Highly recommend for anyone looking for window cleaning in Manitoba.",
      },
    ],
    openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-15:00"],
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How often should I have my windows cleaned in Winnipeg?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For residential properties in Winnipeg and Manitoba, we recommend window cleaning 2-4 times per year depending on your location and environmental factors. Commercial properties typically benefit from monthly or bi-monthly cleaning to maintain a professional appearance.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide free estimates for window cleaning in Manitoba?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We offer free, no-obligation estimates for all our window cleaning services in Winnipeg, Manitoba and surrounding areas. You can get an instant quote using our online price estimator or contact us directly for a personalized assessment.",
          },
        },
        {
          "@type": "Question",
          name: "Are you insured and bonded for window cleaning services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Dominion Window Shine is fully insured and bonded for your peace of mind. We carry comprehensive liability insurance and worker's compensation coverage for all our window cleaning services in Manitoba.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you serve for window cleaning in Manitoba?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We proudly serve Winnipeg and the greater Manitoba region including Steinbach, Niverville, St. Anne, East Saint Paul, West Saint Paul, La Salle, Oak Bluff, Dugald, Grande Pointe, Deacons Corner, Howden, Navin, North Transcona, Assiniboia, Brandon, and Portage la Prairie. Contact us to confirm window cleaning service availability in your specific location.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if it rains after window cleaning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If it rains within 24 hours of our window cleaning service and affects the quality of our work, we'll return to re-clean your windows at no additional charge. We stand behind our window cleaning work in Winnipeg and Manitoba!",
          },
        },
      ],
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

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Additional Meta Tags for SEO */}
        <meta name="theme-color" content="#fbbf24" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Dominion Window Shine"
        />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Structured Data */}
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
