"use client";

import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";
import { markHero, markContact } from "@/data/mark";

export default function MarkHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-36 pb-20 sm:pt-44"
    >
      {/* Soft editorial backdrop */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #d7e9e6, transparent 65%)" }}
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mark-eyebrow"
          >
            Psychiatry · Therapy · Author
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mark-serif mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--mk-ink)] sm:text-6xl"
          >
            {markHero.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-xl text-[var(--mk-accent)]"
          >
            {markHero.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--mk-muted)]"
          >
            {markHero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[var(--mk-muted)]"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-[var(--mk-accent-2)]" />
              {markHero.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} className="text-[var(--mk-accent-2)]" />
              {markHero.years}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-[var(--mk-accent)] px-7 py-3 font-semibold text-white transition-colors hover:bg-[var(--mk-ink)]"
            >
              Get in touch
            </a>
            <a
              href={markContact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--mk-line)] bg-[var(--mk-paper)] px-7 py-3 font-semibold text-[var(--mk-ink)] transition-colors hover:border-[var(--mk-accent)]"
            >
              Practice website
            </a>
          </motion.div>
        </div>

        {/* Monogram seal (typographic — no photo needed for the draft) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto hidden md:block"
        >
          <div className="relative flex h-60 w-60 items-center justify-center rounded-full border border-[var(--mk-line)] bg-[var(--mk-paper)] shadow-[0_30px_60px_-30px_rgba(33,28,22,0.4)]">
            <div
              className="absolute inset-3 rounded-full border"
              style={{ borderColor: "var(--mk-accent)", opacity: 0.25 }}
            />
            <span className="mark-serif text-6xl font-semibold text-[var(--mk-ink)]">
              {markHero.monogram}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
