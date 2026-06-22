"use client";

import Image from "next/image";
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

        {/* Framed portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[260px]"
        >
          {/* offset accent frame */}
          <div
            className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl"
            style={{ border: "2px solid var(--mk-accent)", opacity: 0.4 }}
          />
          <div className="relative overflow-hidden rounded-2xl border border-[var(--mk-line)] bg-[var(--mk-paper)] shadow-[0_30px_60px_-30px_rgba(33,28,22,0.45)]">
            <Image
              src={markHero.photo}
              alt={markHero.name}
              width={242}
              height={300}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
