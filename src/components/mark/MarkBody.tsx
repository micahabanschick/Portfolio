import type { ReactNode } from "react";
import { BookOpen, Mic, GraduationCap, ExternalLink, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  markAbout,
  markQuote,
  markBooks,
  markServices,
  markMedia,
  markContact,
} from "@/data/mark";

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <p className="mark-eyebrow mb-3">{eyebrow}</p>
        <h2 className="mark-serif text-4xl font-semibold tracking-tight text-[var(--mk-ink)] sm:text-5xl">
          {title}
        </h2>
        <div className="mark-rule mt-5" />
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Who he is" title={markAbout.heading}>
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-[var(--mk-muted)]">
            {markAbout.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {markAbout.stats.map((s) => (
              <div key={s.label} className="mark-card p-5">
                <div className="mark-serif text-3xl font-semibold text-[var(--mk-accent)]">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-[var(--mk-muted)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function PullQuote() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-6">
      <Reveal>
        <figure className="relative overflow-hidden rounded-2xl border border-[var(--mk-line)] bg-[var(--mk-paper)] px-8 py-12 text-center sm:px-16">
          <Quote
            size={40}
            className="mx-auto mb-5 text-[var(--mk-accent)]"
            style={{ opacity: 0.5 }}
          />
          <blockquote className="mark-serif text-2xl font-medium leading-snug text-[var(--mk-ink)] sm:text-3xl">
            “{markQuote.text}”
          </blockquote>
          <figcaption className="mt-5 text-sm uppercase tracking-[0.2em] text-[var(--mk-muted)]">
            {markQuote.author}
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}

function Books() {
  return (
    <Section id="books" eyebrow="Published work" title="Books">
      <div className="grid gap-6 md:grid-cols-3">
        {markBooks.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08}>
            <article className="mark-card flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <BookOpen size={22} className="text-[var(--mk-accent)]" />
                {b.upcoming && (
                  <span className="rounded-full bg-[var(--mk-accent-2)]/10 px-3 py-1 text-xs font-medium text-[var(--mk-accent-2)]">
                    2025
                  </span>
                )}
              </div>
              <h3 className="mark-serif mt-4 text-xl font-semibold leading-snug text-[var(--mk-ink)]">
                {b.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--mk-muted)]">
                {b.blurb}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Practice() {
  return (
    <Section id="practice" eyebrow="Care" title={markServices.heading}>
      <Reveal>
        <p className="-mt-4 mb-8 max-w-2xl text-lg text-[var(--mk-muted)]">
          {markServices.intro}
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {markServices.items.map((s, i) => (
          <Reveal key={s} delay={(i % 3) * 0.06}>
            <div className="mark-card flex items-center gap-3 p-5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--mk-accent)]" />
              <span className="font-medium text-[var(--mk-ink)]">{s}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Writing() {
  return (
    <Section id="writing" eyebrow="In print & on air" title={markMedia.heading}>
      <Reveal>
        <p className="-mt-4 mb-8 max-w-2xl text-lg text-[var(--mk-muted)]">
          {markMedia.intro}
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            {markMedia.highlights.map((h) => (
              <div key={h.label} className="mark-card p-6 text-center">
                <div className="mark-serif text-4xl font-semibold text-[var(--mk-accent)]">
                  {h.value}
                </div>
                <div className="mt-1 text-sm text-[var(--mk-muted)]">
                  {h.label}
                </div>
              </div>
            ))}
            <div className="mark-card col-span-2 flex items-center gap-3 p-5">
              <Mic size={20} className="text-[var(--mk-accent-2)]" />
              <span className="font-medium text-[var(--mk-ink)]">
                {markMedia.podcast}
              </span>
            </div>
            <div className="mark-card col-span-2 flex items-center gap-3 p-5">
              <GraduationCap size={20} className="text-[var(--mk-accent-2)]" />
              <span className="font-medium text-[var(--mk-ink)]">
                {markMedia.course}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mark-card h-full p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--mk-muted)]">
              Featured in
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {markMedia.outlets.map((o) => (
                <span
                  key={o}
                  className="mark-serif rounded-lg border border-[var(--mk-line)] bg-[var(--mk-cream)] px-4 py-2 text-[var(--mk-ink)]"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-24 pt-10">
      <Reveal>
        <div className="rounded-3xl border border-[var(--mk-line)] bg-[var(--mk-paper)] px-8 py-16 text-center sm:px-16">
          <p className="mark-eyebrow mb-3">Contact</p>
          <h2 className="mark-serif text-4xl font-semibold tracking-tight text-[var(--mk-ink)] sm:text-5xl">
            {markContact.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--mk-muted)]">
            {markContact.blurb}
          </p>
          <a
            href={markContact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--mk-accent)] px-7 py-3 font-semibold text-white transition-colors hover:bg-[var(--mk-ink)]"
          >
            {markContact.cta} <ExternalLink size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--mk-line)] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-[var(--mk-muted)] sm:flex-row">
        <p>© Mark Banschick, MD.</p>
        <a href="/" className="transition-colors hover:text-[var(--mk-ink)]">
          ← The Banschick family
        </a>
      </div>
    </footer>
  );
}

export default function MarkBody() {
  return (
    <>
      <About />
      <PullQuote />
      <Books />
      <Practice />
      <Writing />
      <Contact />
      <Footer />
    </>
  );
}
