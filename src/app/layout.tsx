import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdsOnline - Digital Marketing & Google Ads Management",
  description:
    "Professional Google Ads management, digital marketing services, and lead generation solutions. Boost your online presence with AdsOnline's expert team.",
  keywords:
    "Google Ads, digital marketing, PPC management, lead generation, online advertising, search marketing",
  authors: [{ name: "AdsOnline" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "AdsOnline - Digital Marketing & Google Ads Management",
    description:
      "Professional Google Ads management and digital marketing services to grow your business online.",
    url: "https://www.adsonline.ca",
    siteName: "AdsOnline",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AdsOnline Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdsOnline - Digital Marketing & Google Ads Management",
    description:
      "Professional Google Ads management and digital marketing services to grow your business online.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
