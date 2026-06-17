import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Shared section shell: anchor, eyebrow label, big heading, content. */
export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-6 py-24 ${className}`}>
      <Reveal>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="mb-12 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
