import { FileText, Presentation } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { publications, talks } from "@/data/content";

export default function Publications() {
  return (
    <Section id="publications" eyebrow="Research output" title="Publications & Talks">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Publications */}
        <div>
          <h3 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-muted)]">
            <FileText size={18} className="text-[var(--color-fuchsia)]" />
            Manuscripts in preparation
          </h3>
          <div className="space-y-4">
            {publications.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="card-gradient-border rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm text-[var(--color-muted)]">{p.authors}</p>
                    <span className="shrink-0 text-xs text-[var(--color-muted)]">
                      {p.year}
                    </span>
                  </div>
                  <h4 className="mt-1 font-semibold leading-snug">{p.title}</h4>
                  <p className="text-gradient mt-2 text-sm font-medium">
                    {p.venue}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Talks & posters */}
        <div>
          <h3 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-muted)]">
            <Presentation size={18} className="text-[var(--color-cyan)]" />
            Selected presentations
          </h3>
          <div className="space-y-4">
            {talks.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[var(--color-border)] px-3 py-0.5 text-xs text-[var(--color-muted)]">
                      {t.kind}
                    </span>
                    <span className="text-xs text-[var(--color-muted)]">{t.year}</span>
                  </div>
                  <h4 className="mt-3 font-semibold leading-snug">{t.title}</h4>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{t.venue}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
