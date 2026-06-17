import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className="card-gradient-border h-full rounded-2xl p-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[var(--color-bg-soft)] px-3 py-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
