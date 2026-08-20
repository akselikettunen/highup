import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://highup.fi";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: "High-Up!",
  description:
    "An official Slush side event. 500+ high schoolers from every corner of Finland build for two days at Aalto University, 19–20 November 2026. Travel, accommodation and food covered.",
  openGraph: {
    title: "High-Up!",
    description:
      "500+ high schoolers. Two days at Aalto University during Slush week. Travel, accommodation and food covered.",
    url: site,
    siteName: "High-Up!",
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "High-Up!" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
