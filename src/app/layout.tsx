import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ali's Window Washing - Professional Window Cleaning Services",
  description:
    "Professional window cleaning services for residential and commercial properties. Crystal clear results guaranteed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: "80px" }}>{children}</main>
      </body>
    </html>
  );
}
