/**
 * Family hub registry. Add a member here and create src/app/<slug>/page.tsx
 * to give them a page. The landing page at "/" lists everyone below.
 */
export type FamilyMember = {
  slug: string;
  name: string;
  role: string;
  blurb: string;
  href: string;
  available: boolean;
  // Accent gradient (from → to) used on the member's hub card.
  accentFrom: string;
  accentTo: string;
};

export const family: FamilyMember[] = [
  {
    slug: "micah",
    name: "Micah Banschick",
    role: "Computational Physicist · Aerospace Researcher",
    blurb:
      "Plasma propulsion, computational astrophysics, and quantitative finance.",
    href: "/micah",
    available: true,
    accentFrom: "#7c3aed",
    accentTo: "#22d3ee",
  },
  {
    slug: "mark",
    name: "Mark Banschick",
    role: "Coming soon",
    blurb: "Professional portfolio — in progress.",
    href: "/mark",
    available: false,
    accentFrom: "#0ea5e9",
    accentTo: "#14b8a6",
  },
];
