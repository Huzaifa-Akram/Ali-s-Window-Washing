import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ali's Window Washing - Professional Window Cleaning Services",
  description:
    "Professional window cleaning services for residential and commercial properties. Crystal clear results guaranteed.",
  keywords:
    "window cleaning, window washing, residential cleaning, commercial cleaning, professional window service",
  authors: [{ name: "Ali's Window Washing" }],
  creator: "Ali's Window Washing",
  publisher: "Ali's Window Washing",
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
    title: "Ali's Window Washing - Professional Window Cleaning Services",
    description:
      "Professional window cleaning services for residential and commercial properties. Crystal clear results guaranteed.",
    siteName: "Ali's Window Washing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali's Window Washing - Professional Window Cleaning Services",
    description:
      "Professional window cleaning services for residential and commercial properties. Crystal clear results guaranteed.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Navbar />
        <main style={{ paddingTop: "80px" }}>{children}</main>
      </body>
    </html>
  );
}
