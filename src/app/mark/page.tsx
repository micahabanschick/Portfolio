import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mark Banschick",
  description: "Professional portfolio of Mark Banschick — coming soon.",
  alternates: { canonical: "/mark" },
};

export default function MarkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf7f2] px-6 py-20 text-[#1c1a17]">
      <div className="w-full max-w-xl text-center">
        <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.3em] text-[#a8754f]">
          The Banschick Family
        </p>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight sm:text-6xl">
          Mark Banschick
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-[#6b6256]">
          A professional portfolio is on the way — designed around Mark&apos;s
          career and experience.
        </p>
        <span className="mt-7 inline-block rounded-full border border-[#1c1a17]/15 px-4 py-1.5 text-sm text-[#6b6256]">
          Coming soon
        </span>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#a8754f] transition-colors hover:text-[#1c1a17]"
          >
            <ArrowLeft size={16} /> Back to the family
          </Link>
        </div>
      </div>
    </main>
  );
}
