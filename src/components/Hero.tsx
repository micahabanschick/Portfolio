"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { hero, contact } from "@/data/content";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = hero.rotatingWords;

  useEffect(() => {
    if (!words?.length) return;
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % words.length),
      2200
    );
    return () => clearInterval(id);
  }, [words]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Background nebula glows (dialed up) */}
      <div
        className="glow-strong"
        style={{ width: 620, height: 620, background: "var(--color-violet)", top: -160, left: -120 }}
      />
      <div
        className="glow-strong"
        style={{ width: 540, height: 540, background: "var(--color-fuchsia)", bottom: -180, right: -80 }}
      />
      <div
        className="glow-strong"
        style={{ width: 460, height: 460, background: "var(--color-cyan)", top: "35%", right: "28%", opacity: 0.3 }}
      />
      <div
        className="glow-strong"
        style={{ width: 420, height: 420, background: "#2563eb", top: "55%", left: "8%", opacity: 0.28 }}
      />

      {/* Aero horizon grid at the base of the hero */}
      <div className="aero-grid pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[45%]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        {/* Left: text */}
        <div>
          {hero.availability && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-xs text-[var(--color-muted)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              {hero.availability}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {hero.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl"
          >
            <span className="text-gradient-animated">{hero.title}</span>
          </motion.p>

          {words?.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex items-center gap-2 text-lg text-[var(--color-muted)]"
            >
              <span>I turn hard problems into</span>
              <span className="relative inline-block min-w-[7.5rem] font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)]">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block"
                >
                  {words[wordIndex]}.
                </motion.span>
              </span>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#experience"
              className="rounded-full bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-fuchsia)] px-7 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105"
            >
              View my research
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-7 py-3 font-semibold transition-colors hover:border-[var(--color-fuchsia)]"
            >
              Contact me
            </a>

            <div className="flex items-center gap-3 pl-1">
              <a
                aria-label="GitHub"
                href={contact.socials.find((s) => s.label === "GitHub")?.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                <Github size={22} />
              </a>
              <a
                aria-label="LinkedIn"
                href={contact.socials.find((s) => s.label === "LinkedIn")?.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                <Linkedin size={22} />
              </a>
              <a
                aria-label="Email"
                href={`mailto:${contact.email}`}
                className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xs"
        >
          {/* Orbital rings */}
          <div className="orbit orbit-spin hidden sm:block" style={{ width: 360, height: 360, border: "1px dashed rgba(168,85,247,0.30)" }}>
            <span className="orbit-node" />
          </div>
          <div className="orbit orbit-spin-rev hidden sm:block" style={{ width: 450, height: 450, border: "1px dashed rgba(34,211,238,0.22)" }}>
            <span className="orbit-node" style={{ background: "var(--color-fuchsia)", boxShadow: "0 0 12px 2px var(--color-fuchsia)" }} />
          </div>
          <div className="orbit hidden sm:block" style={{ width: 540, height: 540, border: "1px solid rgba(255,255,255,0.05)" }} />

          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--color-violet)] via-[var(--color-fuchsia)] to-[var(--color-cyan)] opacity-70 blur-xl" />
          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-fuchsia-500/20">
            <Image
              src={hero.photo}
              alt={hero.name}
              width={480}
              height={560}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-muted)]"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="block"
        >
          <ArrowDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
