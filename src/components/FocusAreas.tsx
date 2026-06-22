import { Rocket, Orbit, CandlestickChart, type LucideIcon } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { focusAreas } from "@/data/content";

const ICONS: Record<string, LucideIcon> = {
  rocket: Rocket,
  orbit: Orbit,
  chart: CandlestickChart,
};

export default function FocusAreas() {
  return (
    <Section id="focus" eyebrow="What I work on" title="Focus Areas">
      <div className="grid gap-6 md:grid-cols-3">
        {focusAreas.map((f, i) => {
          const Icon = ICONS[f.icon] ?? Rocket;
          return (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="card-gradient-border group h-full rounded-2xl p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-violet)]/20 to-[var(--color-fuchsia)]/20 ring-1 ring-white/10">
                  <Icon
                    size={24}
                    className="text-[var(--color-fuchsia)] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {f.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
