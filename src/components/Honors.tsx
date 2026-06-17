import { Award, Users, ShieldCheck } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { honors, leadership } from "@/data/content";

export default function Honors() {
  return (
    <Section id="honors" eyebrow="Recognition" title="Honors & Leadership">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Honors */}
        <div>
          <h3 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-muted)]">
            <Award size={18} className="text-[var(--color-fuchsia)]" />
            Awards & Honors
          </h3>
          <div className="space-y-3">
            {honors.map((h, i) => {
              const isClearance = h.title.toLowerCase().includes("clearance");
              return (
                <Reveal key={h.title} delay={i * 0.05}>
                  <div
                    className={`flex items-start gap-3 rounded-2xl border p-4 ${
                      isClearance
                        ? "card-gradient-border"
                        : "border-[var(--color-border)] bg-[var(--color-surface)]"
                    }`}
                  >
                    {isClearance && (
                      <ShieldCheck
                        size={20}
                        className="mt-0.5 shrink-0 text-[var(--color-cyan)]"
                      />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold leading-snug">{h.title}</p>
                      <p className="text-sm text-[var(--color-muted)]">{h.org}</p>
                    </div>
                    <span className="shrink-0 text-xs text-[var(--color-muted)]">
                      {h.period}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-muted)]">
            <Users size={18} className="text-[var(--color-cyan)]" />
            Leadership & Service
          </h3>
          <div className="space-y-4">
            {leadership.map((l, i) => (
              <Reveal key={l.role} delay={i * 0.05}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-[family-name:var(--font-display)] font-bold">
                      {l.role}
                    </h4>
                    <span className="text-xs text-[var(--color-muted)]">
                      {l.period}
                    </span>
                  </div>
                  <p className="text-gradient text-sm font-medium">{l.org}</p>
                  <ul className="mt-3 space-y-2">
                    {l.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm text-[var(--color-muted)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-fuchsia)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
