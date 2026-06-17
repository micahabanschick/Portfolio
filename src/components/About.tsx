import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title={about.heading}>
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-[var(--color-muted)]">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        {about.stats.length > 0 && (
          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                >
                  <div className="text-gradient font-[family-name:var(--font-display)] text-3xl font-bold">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-muted)]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
