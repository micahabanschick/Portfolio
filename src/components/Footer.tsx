import { hero } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--color-muted)] sm:flex-row">
        <p>
          © {hero.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <a href="#top" className="transition-colors hover:text-[var(--color-text)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
