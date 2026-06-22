"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#books", label: "Books" },
  { href: "#practice", label: "Practice" },
  { href: "#writing", label: "Writing & Media" },
  { href: "#contact", label: "Contact" },
];

export default function MarkNav() {
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
        scrolled
          ? "border-b border-[var(--mk-line)] bg-[var(--mk-cream)]/90 backdrop-blur"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="/"
          aria-label="Family home"
          className="mark-serif text-lg font-semibold tracking-tight text-[var(--mk-ink)]"
        >
          Mark Banschick<span className="text-[var(--mk-accent)]">, MD</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[var(--mk-muted)] transition-colors hover:text-[var(--mk-ink)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-[var(--mk-accent)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--mk-ink)] md:inline-block"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-[var(--mk-ink)]" />
            <span className="block h-0.5 w-6 bg-[var(--mk-ink)]" />
            <span className="block h-0.5 w-6 bg-[var(--mk-ink)]" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--mk-line)] bg-[var(--mk-cream)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-[var(--mk-muted)] hover:text-[var(--mk-ink)]"
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
