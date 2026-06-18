import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { site } from "@/data/content";
import Starfield from "@/components/Starfield";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: site.title,
  description: site.description,
  keywords: [
    "Micah Banschick",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Micah Banschick" }],
  openGraph: {
    type: "website",
    url: site.domain,
    title: site.title,
    description: site.description,
    siteName: "Micah Banschick",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="grain">
        <div className="cosmos" aria-hidden="true" />
        <Starfield />
        {children}
      </body>
    </html>
  );
}
