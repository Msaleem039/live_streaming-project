import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sports API Provider | Live Scores, Fixtures & Streaming Data",
    template: "%s | Sports API Platform",
  },

  description:
    "Powerful Sports API provider offering real-time live scores, match fixtures, player stats, and streaming data for football, cricket, basketball, and more. Built for developers and SaaS platforms.",

  keywords: [
    "sports api",
    "live sports api",
    "cricket api",
    "football api",
    "live scores api",
    "sports data api",
    "streaming sports api",
    "sports fixtures api",
    "nba api",
    "soccer api",
  ],

  authors: [{ name: "Sports API Platform" }],
  creator: "Sports API Platform",

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "Sports API Provider | Live Scores & Streaming Data",
    description:
      "Get real-time sports data including live scores, fixtures, and player statistics via a fast and reliable API built for developers.",
    url: "https://your-domain.com",
    siteName: "Sports API Platform",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sports API Platform Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sports API Provider | Live Sports Data API",
    description:
      "Real-time sports API for live scores, fixtures, and streaming data.",
    images: ["/og-image.png"],
  },

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

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}