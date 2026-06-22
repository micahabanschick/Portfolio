/**
 * ─────────────────────────────────────────────────────────────────────────
 *  MARK BANSCHICK, MD — content (FIRST DRAFT)
 * ─────────────────────────────────────────────────────────────────────────
 *  Inferred from markbanschick.com pending Mark's direct input. Edit freely.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const markSite = {
  domain: "https://portfolio.banschick.com",
  title: "Mark Banschick, MD — Psychiatrist & Author",
  description:
    "Child, adolescent, and adult psychiatrist with 40+ years of practice in Stamford, CT and Katonah, NY. Author of The Intelligent Divorce and a longtime Psychology Today columnist.",
  external: "https://markbanschick.com",
};

export const markHero = {
  name: "Mark Banschick, MD",
  title: "Child, Adolescent & Adult Psychiatrist · Author",
  tagline:
    "Four decades helping families and individuals resolve conflict, find clarity, and cultivate what I call the “Adult Mind.”",
  location: "Stamford, CT · Katonah, NY",
  years: "40+ years in practice",
  monogram: "MB",
  photo: "/mark.jpg",
};

export const markAbout = {
  heading: "About",
  body: [
    "Mark Banschick, MD is a child, adolescent, and adult psychiatrist with more than forty years of clinical experience, practicing in Stamford, Connecticut and Katonah, New York.",
    "He helps families and individuals resolve difficult issues and develop deeper self-understanding — emphasizing each client’s priorities, collaborative treatment, and the cultivation of agency: what he calls the “Adult Mind.”",
    "He is a co-founder of the Katonah Study Group for Integrative Medicine, advocating for a thoughtful combination of Western and Eastern approaches to healing, including mindfulness and nutraceuticals.",
  ],
  stats: [
    { value: "40+", label: "Years in practice" },
    { value: "274+", label: "Articles published" },
    { value: "16.5M", label: "Psychology Today readers" },
  ],
};

export const markQuote = {
  text: "The real voyage of discovery consists not in seeing new sights, but in looking with new eyes.",
  author: "Marcel Proust",
};

export type MarkBook = {
  title: string;
  blurb: string;
  upcoming?: boolean;
};

export const markBooks: MarkBook[] = [
  {
    title: "The Intelligent Divorce: Taking Care of Your Children",
    blurb:
      "A guide for parents on protecting and steadying their children through the upheaval of divorce.",
  },
  {
    title: "The Intelligent Divorce: Taking Care of Yourself",
    blurb:
      "Navigating divorce with resilience, perspective, and emotional clarity.",
  },
  {
    title: "The Narcissism Book",
    blurb:
      "Forthcoming (2025): recognizing narcissism, gaslighting, and Machiavellian behavior — through science, art, and literature, in plain language.",
    upcoming: true,
  },
];

export const markServices = {
  heading: "Practice",
  intro:
    "Psychiatric care and therapy for children, adolescents, adults, and families.",
  items: [
    "Child & Adolescent Psychiatry",
    "Adult Psychiatry",
    "Individual Therapy",
    "Family, Marriage & Divorce Counseling",
    "Integrative Medicine",
    "Medication Management",
  ],
};

export const markMedia = {
  heading: "Writing & Media",
  intro:
    "A longtime contributor to Psychology Today and a frequent voice in national media.",
  outlets: [
    "Psychology Today",
    "CNN",
    "The New York Times",
    "The Huffington Post",
    "USA Today",
    "Politico",
    "CBS Early Show",
  ],
  highlights: [
    { value: "274+", label: "Published articles" },
    { value: "16.5M", label: "Psychology Today readership" },
  ],
  podcast: "Host, Divorce Source Radio",
  course: "“The Intelligent Divorce” — online course",
};

export const markContact = {
  heading: "Get in touch",
  blurb:
    "For appointments, speaking engagements, and media inquiries, visit the practice website.",
  website: "https://markbanschick.com",
  cta: "Visit markbanschick.com",
};
