import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Research & Experience">
      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-0 top-2 bottom-2 hidden w-px bg-gradient-to-b from-[var(--color-violet)] via-[var(--color-fuchsia)] to-transparent sm:block" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.05}>
              <div className="relative sm:pl-10">
                <span className="absolute left-[-5px] top-2 hidden h-3 w-3 rounded-full bg-[var(--color-fuchsia)] ring-4 ring-[var(--color-bg)] sm:block" />

                <div className="card-gradient-border rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                      {job.role}{" "}
                      <span className="text-gradient">@ {job.company}</span>
                    </h3>
                    <span className="text-sm text-[var(--color-muted)]">
                      {job.start} — {job.end}
                    </span>
                  </div>

                  {job.location && (
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {job.location}
                    </p>
                  )}
                  {job.summary && (
                    <p className="mt-3 text-[var(--color-muted)]">{job.summary}</p>
                  )}

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[var(--color-muted)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-fuchsia)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {job.tech && job.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
