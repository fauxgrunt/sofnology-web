import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const MOSS = "#74C69D";
export const DEEP = "#1B4332";
export const SOFT = "#D8F3DC";

export const hero = {
  title: "Software development staff augmentation",
  lede:
    "Plug Sofnology engineers into your team — developers, designers, QA, DevOps, and more — so you add the right skills without rebuilding hiring from scratch.",
  image: "/web-dev-hero.jpg",
  imageAlt: "Engineers collaborating — staff augmentation into your team",
  imageClass: "scale-[1.06] object-cover object-[48%_32%]",
  titleClass:
    "max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4rem]",
  ctaLabel: "Start a Project",
  ctaHref: "#contact-form",
  ctaBackground: DEEP,
  ctaText: "#ffffff",
  ctaArrowColor: MOSS,
  ctaMaxWidth: "max-w-[15rem] leading-tight md:max-w-[17rem]",
} as const;

export const cta = {
  title: "Ready to augment your staff?",
  lede:
    "Tell us the skills you need. We’ll shortlist engineers who fit your stack, culture, and operating rhythm — you interview and decide.",
  ctaLabel: "Start a Project",
  image: "/web-dev-cta.jpg",
  imageAlt: "Team collaboration for staff augmentation engagement",
  imageClass: "scale-[1.05] object-cover object-[45%_40%]",
  panelBackground: DEEP,
  buttonBackground: MOSS,
  buttonText: "#1B4332",
} as const;

export const wins = [
  {
    title: "Save on the hiring grind",
    description:
      "Recruiting senior engineers can take months. We match stack, culture, and timezone fit so you can plug in capacity without restarting a full search every time.",
  },
  {
    title: "Reduce delivery risk",
    description:
      "Get the expertise you need for the phase you’re in — so your product keeps moving while you stay focused on the business.",
  },
  {
    title: "Less admin, more flexibility",
    description:
      "Sofnology handles employment overhead. You add or remove specialists as demand shifts, without a permanent hire for a temporary gap.",
  },
];

export const roles = [
  "Developers",
  "Tech leads",
  "Solution / system architects",
  "UI/UX designers",
  "QA engineers",
  "DevOps",
  "Business analysts",
  "Project managers",
  "Data engineers",
];

export const capabilityAreas = [
  {
    title: "Core product engineering",
    items: ["Frontend & backend", "Mobile (native & cross-platform)", "Web platforms", "Cloud development"],
  },
  {
    title: "Delivery & quality",
    items: ["QA & test automation", "DevOps & CI/CD", "Cybersecurity support", "Modernization work"],
  },
  {
    title: "Specialist tracks",
    items: ["AI / ML", "Data & analytics", "Integrations", "Architecture advisory"],
  },
];

export const comparisonModels = [
  {
    id: "staff",
    title: "Staff augmentation",
    summary:
      "Individual Sofnology specialists join your existing team, backlog, and cadence. You keep day-to-day ownership of priorities and process.",
    bestFor: [
      "Skill or capacity gaps inside a team that already runs delivery",
      "Time-bound boosts with specialized expertise",
      "Keeping operations lean while you scale output",
    ],
    points: [
      "Natural fit with your in-house culture and tools",
      "Add a specialist as requirements change",
      "You manage the people day to day",
    ],
  },
  {
    id: "dedicated",
    title: "Dedicated teams",
    summary:
      "A cross-functional Sofnology team focused on your product, when one specialist is not enough.",
    bestFor: [
      "Large, long-term product work that may scale over time",
      "When local hiring is too slow or costly for a full team",
    ],
    points: [
      "Undivided focus on one product roadmap",
      "Cross-functional mix as needed",
      "More autonomous under your product ownership",
    ],
    href: "/engagement/dedicated-teams",
  },
  {
    id: "outsourcing",
    title: "Project outsourcing",
    summary:
      "Sofnology owns a scoped outcome from discovery through release — best when you want a partner accountable for delivery, not just capacity.",
    bestFor: [
      "An entire project handed off start to finish",
      "First partnership with an external vendor",
      "Non-technical teams that need end-to-end ownership",
    ],
    points: [
      "Defined scope, stages, and delivery dates",
      "Clear milestone accountability",
      "You stay focused on business priorities",
    ],
    href: "/engagement/project-outsourcing",
  },
];

export const fitScenarios = [
  {
    title: "Your team can’t keep pace",
    description:
      "Demand outgrew capacity — you need more hands in the same process, not a new operating model.",
  },
  {
    title: "Specialized skills, limited window",
    description:
      "You need niche expertise to ship a module, then don’t need that seat permanently.",
  },
  {
    title: "In-house team is stretched",
    description:
      "Core engineers are maxed out and you lack bandwidth to take on the next initiative alone.",
  },
  {
    title: "Local talent is scarce",
    description:
      "You need to expand quickly, but the right seniors are hard to hire where you are.",
  },
  {
    title: "Startup MVP momentum",
    description:
      "Funding is in place and you need product velocity without standing up a full hiring machine first.",
  },
  {
    title: "Hybrid on-site + remote",
    description:
      "You already have engineers on-site and want remote Sofnology talent covering other slices of the product.",
  },
];

export const workSteps = [
  {
    title: "Schedule a call",
    description:
      "We explore goals, constraints, stack, culture, and the roles that would actually move the needle.",
  },
  {
    title: "Review matched profiles",
    description:
      "You get CVs for engineers screened against your requirements — not a generic bench dump.",
  },
  {
    title: "Interview who you choose",
    description:
      "You pick who to meet. No one joins without your approval.",
  },
  {
    title: "Contract and onboard",
    description:
      "We handle employment formalities and support onboarding into your tools, repos, and rituals.",
  },
  {
    title: "You manage; we support",
    description:
      "Engineers work inside your cadence. We stay available for continuity, replacements, and remote-team best practices.",
  },
];

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  variant: "list",
  columns: 3,
  links: [
    {
      title: "Dedicated teams",
      href: "/engagement/dedicated-teams",
      description: "When you need a standing product team, not one specialist inside the team you already run.",
    },
    {
      title: "Project outsourcing",
      href: "/engagement/project-outsourcing",
      description: "When you want Sofnology to own a scoped outcome through release.",
    },
    {
      title: "Software development",
      href: "/services/software-development",
      description: "Full-cycle product engineering when the work spans architecture and delivery.",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: DEEP,
  variant: "roomy",
  items: [
    {
      question: "How is staff augmentation different from dedicated teams?",
      answer:
        "Staff augmentation adds people into your existing process and backlog — you keep day-to-day ownership. Dedicated teams are a Sofnology-owned team focused on your product, often cross-functional, for longer-horizon work.",
    },
    {
      question: "Who manages the engineers day to day?",
      answer:
        "You do. They join your standups, tools, and priorities. Sofnology handles employment, continuity, and support so you can focus on product decisions.",
    },
    {
      question: "Can we interview every candidate?",
      answer:
        "Yes. We shortlist against your requirements; you interview and approve before anyone starts.",
    },
    {
      question: "How quickly can someone start?",
      answer:
        "Ramp depends on role seniority and interview cycles. We aim for a practical start once fit is confirmed — not a months-long hiring season.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Start a Project",
  backgroundColor: DEEP,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "moss",
};
