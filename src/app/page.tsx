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

export default function Home() {
  return (
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
  );
}
