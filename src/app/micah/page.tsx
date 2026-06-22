import type { Metadata } from "next";
import Starfield from "@/components/Starfield";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Honors from "@/components/Honors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: [
    "Micah Banschick",
    "Computational Physicist",
    "Aerospace Engineering",
    "Plasma Propulsion",
    "Quantitative Finance",
    "Astrophysics",
  ],
  authors: [{ name: "Micah Banschick" }],
  alternates: { canonical: "/micah" },
  openGraph: {
    type: "website",
    url: `${site.domain}/micah`,
    title: site.title,
    description: site.description,
    siteName: "Micah Banschick",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function MicahPage() {
  return (
    <div className="grain relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="cosmos" aria-hidden="true" />
      <Starfield />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <FocusAreas />
          <Education />
          <Experience />
          <Publications />
          <Skills />
          <Honors />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
