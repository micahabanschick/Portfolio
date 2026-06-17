/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────
 *  Edit this file to update the entire site. Everything below marked
 *  `// TODO:` is a placeholder waiting for your real content.
 *
 *  Nothing here is hard to change — replace the strings, add/remove array
 *  items, and the site updates automatically.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
  // Used for SEO, browser tab title, and the social-share preview card.
  domain: "https://portfolio.banschick.com",
  title: "Micah Banschick — Software Engineer",
  description:
    "Software engineer building thoughtful, well-crafted web applications. Explore my portfolio, experience, and projects.",
};

export const hero = {
  name: "Micah Banschick",
  // Short, punchy role line under the name.
  title: "Software Engineer",
  // One or two sentences. This is the first thing recruiters read.
  tagline:
    "I build thoughtful, well-crafted web applications — from polished React frontends to powerful APIs.",
  // Optional rotating words for the animated headline (bold/creative accent).
  rotatingWords: ["clean", "fast", "scalable", "human"],
  location: "TODO: City, Country", // e.g. "New York, NY"
  availability: "Open to new opportunities", // or "" to hide the badge
  photo: "/profile.jpg",
};

export const about = {
  heading: "About",
  // 2–4 sentences. Professional bio in your own voice.
  body: [
    "I started my career in software engineering in early 2020 and have pursued it ever since as both a craft and a passion.",
    "TODO: Add a paragraph about your focus, strengths, and what kind of work you're looking for. What do you care about as an engineer? What are you great at?",
  ],
  // Quick-glance stats (optional — set to [] to hide).
  stats: [
    { label: "Years building", value: "TODO" },
    { label: "Projects shipped", value: "6+" },
    { label: "Core stack", value: "React · Node" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  start: string; // "Jan 2022"
  end: string; // "Present"
  location?: string;
  summary?: string;
  highlights: string[]; // achievement bullets
  tech?: string[];
};

// TODO: Replace with your real work history (most recent first).
export const experience: Experience[] = [
  {
    company: "TODO: Company Name",
    role: "TODO: Your Title",
    start: "Mon YYYY",
    end: "Present",
    location: "TODO: Location / Remote",
    summary: "TODO: One line on the company or your role.",
    highlights: [
      "TODO: A specific, measurable achievement (e.g. 'Cut page load time 40% by …').",
      "TODO: Another accomplishment, ideally with impact or numbers.",
      "TODO: A technical contribution you're proud of.",
    ],
    tech: ["React", "TypeScript", "Node.js"],
  },
  {
    company: "TODO: Earlier Company",
    role: "TODO: Your Title",
    start: "Mon YYYY",
    end: "Mon YYYY",
    location: "TODO: Location",
    highlights: [
      "TODO: Accomplishment.",
      "TODO: Accomplishment.",
    ],
    tech: ["JavaScript", "Ruby on Rails"],
  },
];

export type SkillGroup = { category: string; items: string[] };

// TODO: Tune these to match your real skill set.
export const skills: SkillGroup[] = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Ruby", "HTML", "CSS"] },
  { category: "Frameworks", items: ["React", "Next.js", "Redux", "Ruby on Rails", "Bootstrap"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "AWS", "Cloudflare", "Caddy", "Node.js"] },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string; // path under /public, e.g. "/projects/incontact.png"
  featured?: boolean;
};

// Carried over from your existing site — edit freely, add screenshots via `image`.
export const projects: Project[] = [
  {
    title: "InContact",
    description:
      "An easy-to-use portfolio generator that lets entrepreneurs market themselves fully. Built on a React–Redux frontend backed by a powerful Rails API.",
    tech: ["React", "Redux", "Ruby on Rails"],
    github: "https://github.com/micahabanschick/InContact",
    featured: true,
  },
  {
    title: "AweSum",
    description:
      "An educational application that runs a friendly mathematics quiz for young learners.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/micahabanschick/AweSum/",
    live: "https://micahabanschick.github.io/AweSum/",
  },
  {
    title: "Love Life",
    description:
      "A single-page app that tracks monthly expenses from user-selected bill options, powered by a Rails API with a smooth JavaScript frontend.",
    tech: ["JavaScript", "Ruby on Rails", "SPA"],
    github: "https://github.com/micahabanschick/Love_Life/",
  },
  {
    title: "Carb Container",
    description:
      "An open-source tool to store, record, and calculate daily diet-macro intake, with personal accounts and a daily reset flow.",
    tech: ["JavaScript", "Ruby on Rails"],
    github: "https://github.com/micahabanschick/Carb_Container/",
  },
  {
    title: "Acoustic Karma",
    description:
      "An open-source tool to store, market, and archive your music — with a Song tool for track data and a Post tool for writing about new releases.",
    tech: ["JavaScript", "Ruby on Rails"],
    github: "https://github.com/micahabanschick/Acoustic_Karma/",
  },
  {
    title: "Anilector",
    description:
      "A CLI application that recommends the most fitting anime to start your Otaku journey — list three genres and it sorts out the rest.",
    tech: ["Ruby", "CLI"],
    github: "https://github.com/micahabanschick/Anilector/",
  },
];

export const contact = {
  heading: "Let's work together",
  blurb:
    "I'm currently open to new opportunities. The fastest way to reach me is by email.",
  email: "micha.ban@gmail.com",
  // TODO: confirm / add your real profile URLs.
  socials: [
    { label: "GitHub", href: "https://github.com/micahabanschick" },
    { label: "LinkedIn", href: "TODO: https://www.linkedin.com/in/your-handle" },
  ],
  // Drop a PDF at /public/resume.pdf to enable the download button.
  resume: "/resume.pdf",
};
