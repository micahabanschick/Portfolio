import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { family } from "@/data/family";

export default function FamilyHub() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#07070b] px-6 py-20 text-[#f4f4f8]">
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute rounded-full blur-[110px]"
        style={{ width: 520, height: 520, background: "#5b21b6", opacity: 0.35, top: -160, left: -120 }}
      />
      <div
        className="pointer-events-none absolute rounded-full blur-[110px]"
        style={{ width: 480, height: 480, background: "#0e7490", opacity: 0.3, bottom: -160, right: -120 }}
      />

      <div className="relative z-10 w-full max-w-3xl text-center">
        <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.3em] text-[#9a9ab0]">
          The Banschick Family
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight sm:text-6xl">
          Choose a{" "}
          <span
            style={{
              background: "linear-gradient(100deg,#7c3aed,#d946ef,#22d3ee)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            portfolio
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[#9a9ab0]">
          Individual professional pages for each member of the family.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {family.map((m) => {
            const card = (
              <div
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
                style={{ opacity: m.available ? 1 : 0.6 }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${m.accentFrom}, ${m.accentTo})`,
                  }}
                />
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    {m.name}
                  </h2>
                  {m.available && (
                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-[#9a9ab0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  )}
                </div>
                <p
                  className="mt-1 text-sm font-medium"
                  style={{
                    background: `linear-gradient(100deg, ${m.accentFrom}, ${m.accentTo})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#9a9ab0]">
                  {m.blurb}
                </p>
                {!m.available && (
                  <span className="mt-4 inline-block rounded-full border border-white/15 px-3 py-1 text-xs text-[#9a9ab0]">
                    Coming soon
                  </span>
                )}
              </div>
            );

            return m.available ? (
              <Link key={m.slug} href={m.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={m.slug}>{card}</div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
