import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "@/data/content";

export default function Education() {
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.08}>
            <div className="card-gradient-border h-full rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                  {e.school}
                </h3>
                <span className="text-sm text-[var(--color-muted)]">
                  {e.period}
                </span>
              </div>

              <p className="text-gradient mt-1 font-semibold">{e.degree}</p>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
                {e.location && <span>{e.location}</span>}
                {e.status && (
                  <span className="rounded-full border border-[var(--color-border)] px-3 py-0.5 text-xs">
                    {e.status}
                  </span>
                )}
              </div>

              {e.details && (
                <ul className="mt-4 space-y-2">
                  {e.details.map((d, j) => (
                    <li key={j} className="flex gap-3 text-[var(--color-muted)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-fuchsia)]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
