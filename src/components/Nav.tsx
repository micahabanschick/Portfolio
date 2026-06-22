"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#skills", label: "Skills" },
  { href: "#honors", label: "Honors" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/30" : ""
        }`}
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
      >
        <a href="#top" aria-label="Home" className="group flex items-center">
          <Image
            src="/emblem.png"
            alt="Micah Banschick emblem"
            width={44}
            height={39}
            priority
            className="h-9 w-auto drop-shadow-[0_0_10px_rgba(168,85,247,0.45)] transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(217,70,239,0.7)]"
          />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-fuchsia)] px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 lg:inline-block"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-[var(--color-text)]" />
            <span className="block h-0.5 w-6 bg-[var(--color-text)]" />
            <span className="block h-0.5 w-6 bg-[var(--color-text)]" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mt-2 rounded-2xl p-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-[var(--color-muted)] hover:text-[var(--color-text)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
