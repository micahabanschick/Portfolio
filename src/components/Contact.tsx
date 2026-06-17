import { Mail, Download, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import { contact } from "@/data/content";

const iconFor = (label: string) => {
  if (label.toLowerCase().includes("github")) return Github;
  if (label.toLowerCase().includes("linkedin")) return Linkedin;
  return Mail;
};

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-16 text-center sm:px-16">
          <div
            className="glow"
            style={{ width: 400, height: 400, background: "var(--color-fuchsia)", top: -120, left: "30%", opacity: 0.3 }}
          />

          <div className="relative z-10">
            <p className="eyebrow mb-3">Contact</p>
            <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
              {contact.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-muted)]">
              {contact.blurb}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-fuchsia)] px-7 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105"
              >
                <Mail size={18} /> {contact.email}
              </a>
              {contact.resume && (
                <a
                  href={contact.resume}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-7 py-3 font-semibold transition-colors hover:border-[var(--color-fuchsia)]"
                >
                  <Download size={18} /> Download résumé
                </a>
              )}
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              {contact.socials.map((s) => {
                const Icon = iconFor(s.label);
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                  >
                    <Icon size={18} /> {s.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
