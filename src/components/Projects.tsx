import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <article
              className={`card-gradient-border group flex h-full flex-col overflow-hidden rounded-2xl ${
                p.featured ? "sm:col-span-2" : ""
              }`}
            >
              {p.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[var(--color-border)]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {p.github && (
                      <a
                        aria-label={`${p.title} on GitHub`}
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {p.live && (
                      <a
                        aria-label={`Visit ${p.title}`}
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 flex-1 leading-relaxed text-[var(--color-muted)]">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
