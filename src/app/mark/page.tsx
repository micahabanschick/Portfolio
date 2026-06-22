import type { Metadata } from "next";
import MarkNav from "@/components/mark/MarkNav";
import MarkHero from "@/components/mark/MarkHero";
import MarkBody from "@/components/mark/MarkBody";
import { markSite } from "@/data/mark";

export const metadata: Metadata = {
  title: markSite.title,
  description: markSite.description,
  keywords: [
    "Mark Banschick",
    "Psychiatrist",
    "Child Psychiatry",
    "The Intelligent Divorce",
    "Psychology Today",
    "Katonah",
    "Stamford",
  ],
  authors: [{ name: "Mark Banschick, MD" }],
  alternates: { canonical: "/mark" },
  openGraph: {
    type: "profile",
    url: `${markSite.domain}/mark`,
    title: markSite.title,
    description: markSite.description,
    siteName: "Mark Banschick, MD",
  },
  twitter: {
    card: "summary_large_image",
    title: markSite.title,
    description: markSite.description,
  },
};

export default function MarkPage() {
  return (
    <div className="mark-theme min-h-screen">
      <MarkNav />
      <main>
        <MarkHero />
        <MarkBody />
      </main>
    </div>
  );
}
