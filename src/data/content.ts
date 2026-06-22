/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────
 *  Edit this file to update the entire site. Drop assets (résumé PDF,
 *  project images, headshot) into /public.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
  domain: "https://portfolio.banschick.com",
  title: "Micah Banschick — Computational Physicist & Aerospace Researcher",
  description:
    "Physics & math researcher applying simulation, data, and code to plasma propulsion, astrophysics, and deep-tech R&D. Incoming Aerospace Engineering PhD student at UCF.",
};

export const hero = {
  name: "Micah Banschick",
  title: "Computational Physicist · Aerospace Researcher",
  tagline:
    "I turn hard problems into simulations, models, and insight — across plasma propulsion, astrophysics, and quantitative finance.",
  // Rotating words after "I turn hard problems into …"
  rotatingWords: ["simulations", "models", "insight", "results"],
  location: "Stamford, CT",
  // Shown as a status pill in the hero.
  availability: "Incoming Aerospace Engineering PhD · UCF Hyperspace Center",
  photo: "/profile.jpg",
};

export const about = {
  heading: "About",
  body: [
    "I'm a physics and mathematics researcher who turns hard problems into simulations, models, and insight. My work spans plasma-propulsion research at the Air Force Research Laboratory, stochastic modeling of binary supermassive black holes, and production software engineering.",
    "This fall I'm beginning my PhD in Aerospace Engineering at the University of Central Florida, joining the Hyperspace Center to advance plasma propulsion and deep-tech R&D. I hold an active DoD Secret clearance and am driven to apply simulation, data, and code toward fielding advanced physics.",
    "I bring the same statistical rigor to financial markets: I research reinforcement-learning trading strategies and run backtests with the Husky Quantitative Group, a student-run hedge fund. Quantitative finance and trading are a genuine focus alongside my physics work.",
  ],
  stats: [
    { label: "GPA — Physics & Math", value: "3.63" },
    { label: "DoD Clearance (active)", value: "Secret" },
    { label: "Manuscripts in prep", value: "3" },
  ],
};

export type Focus = {
  icon: "rocket" | "orbit" | "chart";
  title: string;
  blurb: string;
  tags: string[];
};

// Three research pillars — physics, astrophysics, and quantitative finance.
export const focusAreas: Focus[] = [
  {
    icon: "rocket",
    title: "Aerospace & Plasma Propulsion",
    blurb:
      "Modeling and simulating electrospray thruster plumes and ion-neutral collision physics at the Air Force Research Laboratory — design-space exploration for next-generation propulsion.",
    tags: ["LAMMPS", "Plasma Modeling", "Spectroscopy", "Propulsion"],
  },
  {
    icon: "orbit",
    title: "Computational Astrophysics",
    blurb:
      "Stochastic, MCMC-based inference on binary supermassive black hole light curves — extracting physical properties from 20+ GB of observational data.",
    tags: ["MCMC", "Python", "AstroPy", "Statistical Inference"],
  },
  {
    icon: "chart",
    title: "Quantitative Finance & Trading",
    blurb:
      "Reinforcement-learning trading strategies and systematic backtesting with the Husky Quantitative Group — bringing the rigor of physics to financial markets.",
    tags: ["Reinforcement Learning", "Backtesting", "QuantConnect", "PyTorch"],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details?: string[];
  status?: string; // e.g. "Incoming Fall 2026"
};

export const education: EducationItem[] = [
  {
    school: "University of Central Florida",
    degree: "Ph.D. in Aerospace Engineering",
    period: "2026 — Present",
    location: "Orlando, FL",
    status: "Incoming · Fall 2026",
    details: [
      "Joining the Hyperspace Center to advance plasma propulsion and deep-tech R&D.",
    ],
  },
  {
    school: "University of Connecticut",
    degree: "B.Sc. in Physics & Mathematics — University Scholar with Honors",
    period: "2022 — 2026",
    location: "Storrs, CT",
    status: "Expected Aug 2026 · GPA 3.63",
    details: [
      "Thesis: Stochastic Methods for Identifying Binary Supermassive Black Holes.",
      "Coursework: Graduate Numerical Analysis, PDEs, Stochastic Processes, Statistical & Thermal Physics, E&M I–II, Analysis I, Abstract Linear Algebra, Complex Variables, Data Structures & Object-Oriented Design.",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary?: string;
  highlights: string[];
  tech?: string[];
};

export const experience: Experience[] = [
  {
    company: "University of Connecticut",
    role: "Undergraduate Mathematical Physics Researcher — Stochastic Astrophysics",
    start: "Dec 2023",
    end: "Present",
    location: "Storrs, CT",
    summary:
      "Advisory committee: Jonathan Trump, Lea Ferreira dos Santos, Cara Battersby.",
    highlights: [
      "Construct MCMC variability models of 950 binary supermassive black hole light curves in Python for parameter inference, feeding the model over 20 GB of black-hole data.",
      "Programmed a publication-supported algorithm to calculate the spectral emission distributions of binary supermassive black holes by integrating radially through their mini-disks.",
    ],
    tech: ["Python", "NumPy", "SciPy", "AstroPy", "emcee", "Celerite2", "AstroML"],
  },
  {
    company: "Air Force Research Laboratory",
    role: "Space Chemistry Research Intern — Electrospray Propulsion",
    start: "Jun 2025",
    end: "Aug 2025",
    location: "Advisor: Benjamin Prince",
    highlights: [
      "Executed design-space sweeps informing next-gen emitter-array geometry for higher thrust-to-power efficiency.",
      "Simulated charged-particle trajectories in capillary electrospray plumes using LAMMPS.",
      "Processed beam-probe data in IgorPro and visualized plume evolution in VMD to cross-validate simulation predictions.",
    ],
    tech: ["LAMMPS", "IgorPro", "VMD", "Python"],
  },
  {
    company: "Air Force Research Laboratory",
    role: "Space Chemistry Research Intern — Optical Signatures",
    start: "May 2024",
    end: "Aug 2024",
    location: "Advisor: Benjamin Prince",
    highlights: [
      "Drove experiments gathering optical emissions of N₂⁺ + N₂ collisions at 16–600 eV/q with a 13.86 MHz RF ion source, aiding atmospheric radiative models.",
      "Generated vibrational & rotational basis functions with DIATOMIC and simulated spectra in IgorPro, extracting state-resolved cross-sections.",
      "Leveraged Monte-Carlo cascade simulations and statistical analysis to validate measurements and produce NIH-validated N₂⁺ spectra for upper-atmosphere radiative-transport models.",
    ],
    tech: ["IgorPro", "DIATOMIC", "Monte-Carlo", "Statistical Analysis"],
  },
  {
    company: "Synchrony Financial",
    role: "Java API Engineer",
    start: "May 2023",
    end: "Nov 2023",
    location: "Agile / bi-weekly sprints",
    highlights: [
      "Built a Spring Boot microservice for sending customer alerts on behalf of high-profile clients.",
      "Developed and debugged Java API services that enhanced operational workflows.",
      "Delivered consistently across bi-weekly Agile sprints, strengthening team efficiency and timelines.",
    ],
    tech: ["Java", "Spring Boot", "IntelliJ IDEA", "Agile"],
  },
];

export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string;
};

export const publications: Publication[] = [
  {
    authors: "Banschick, M.",
    title: "Stochastic Methods for Identifying Binary Supermassive Black Holes",
    venue: "In prep. — target IEEE Transactions on Plasma Science (Apr 2026)",
    year: "2025",
  },
  {
    authors: "Prince, B., Banschick, M.",
    title:
      "Capillary Electrospray Plume Dynamics at nL/s Flow Rates: Experiments and Simulations",
    venue: "In prep. — target JANNAF Exhaust Plume & Signatures (Jan 2026)",
    year: "2025",
  },
  {
    authors: "Hause, M., Prince, B., Banschick, M.",
    title: "Luminescence Measurements of Charge-Transfer Collisions of N₂⁺ + N₂",
    venue: "In prep. — planned submission Oct 2025",
    year: "2024",
  },
];

export type Talk = {
  title: string;
  venue: string;
  kind: string; // "Seminar" | "Poster"
  year: string;
};

export const talks: Talk[] = [
  {
    title: "Ion–Neutral Collision Imaging in Low-Pressure Ion Beams",
    venue: "Dept. of Physics, University of Connecticut",
    kind: "Seminar",
    year: "2025",
  },
  {
    title: "Modeling and Simulation of Capillary Electrospray Thruster Plumes",
    venue: "Air Force Research Laboratory",
    kind: "Poster",
    year: "2025",
  },
  {
    title: "Luminescence Measurements of Charge-Transfer Collisions of N₂⁺ + N₂",
    venue: "Air Force Research Laboratory",
    kind: "Poster",
    year: "2024",
  },
];

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Simulation & Analysis",
    items: [
      "Monte-Carlo & MCMC",
      "Plasma Plume Modeling",
      "Spectroscopic Fitting",
      "Statistical Inference",
    ],
  },
  {
    category: "Programming",
    items: [
      "Python (NumPy, SciPy, AstroPy, Matplotlib, emcee)",
      "MATLAB",
      "Mathematica",
      "Java",
      "Git",
    ],
  },
  {
    category: "Scientific & ML Software",
    items: [
      "LAMMPS",
      "IgorPro",
      "VMD",
      "DIATOMIC",
      "PyTorch",
      "stable-baselines3",
    ],
  },
  {
    category: "Quantitative Finance",
    items: [
      "Reinforcement Learning (PPO)",
      "Backtesting",
      "QuantConnect",
      "VectorBT",
      "Polars / DuckDB",
      "Time-Series Analysis",
      "Risk Modeling",
    ],
  },
];

export type Honor = { title: string; org: string; period: string };

export const honors: Honor[] = [
  { title: "Secret-Level Security Clearance (DoD, active)", org: "USRA", period: "2025 — Present" },
  { title: "University Scholar", org: "University of Connecticut", period: "2025 — Present" },
  { title: "Honors Scholar in Physics", org: "University of Connecticut", period: "2023 — Present" },
  { title: "Annual Physics & Mathematics Award", org: "University of Connecticut", period: "2023" },
];

export type LeadershipRole = {
  role: string;
  org: string;
  period: string;
  highlights: string[];
};

export const leadership: LeadershipRole[] = [
  {
    role: "Quantitative Researcher",
    org: "Husky Quantitative Group (student-run hedge fund)",
    period: "Apr 2025 — Present",
    highlights: [
      "Implement Policy-Gradient reinforcement-learning algorithms into the HQG trading model.",
      "Backtest experimental strategies in QuantConnect using PyTorch and stable-baselines3 (PPO).",
      "Present strategy memos to the UConn Dean of Business and external investors to secure funding.",
    ],
  },
  {
    role: "Co-Lead",
    org: "Science, Technology & Astronomy Recruits (STARs)",
    period: "2023 — 2025",
    highlights: [
      "Mentored ~40 STEM undergraduates per semester on majors, research, and graduate applications.",
      "Designed and delivered physics demos to ~60 high-school students per year; managed ~$2K in materials and safety kits.",
      "Led interactive lessons on optics, electrostatics, projectile motion, and gravity.",
    ],
  },
];

export const contact = {
  heading: "Let's build advanced physics",
  blurb:
    "I'm open to research collaborations and R&D opportunities in defense and deep-tech. The fastest way to reach me is by email.",
  email: "micha.ban@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/micah-banschick/" },
    { label: "GitHub", href: "https://github.com/micahabanschick" },
  ],
  // Drop a PDF at /public/resume.pdf to enable the download button.
  resume: "/resume.pdf",
};
