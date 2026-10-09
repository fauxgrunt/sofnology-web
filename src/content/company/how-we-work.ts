import type { InteriorContact, InteriorRelated, InteriorSticky } from "@/lib/interior";
import { brand } from "@/lib/theme";

export const NAVY = brand.navy;
export const ACCENT = brand.accent;
export const DEEP_CTA = "#1A0A14";
export const PRIMARY_CTA = "Talk through how we’d work";

export const MID_IMAGE = "/solutions-startup-standalone.jpg";

export const hero = {
  title: "How we work",
  lede:
    "A defined project, a team on a longer roadmap, or a specialist added to the team you already have. Sofnology keeps the agreement either way.",
  image: "/uplift.jpg",
  imageAlt: "Teams collaborating to ship product work",
  imageClass: "object-cover object-[48%_40%]",
  eyebrow: "Sofnology",
  eyebrowColor: ACCENT,
  ctaLabel: "Start a Project",
  ctaHref: "#contact-form",
  ctaBackground: ACCENT,
  ctaText: "#ffffff",
} as const;

export const cta = {
  title: "Want to see if we’re the fit?",
  lede: "One discovery conversation is enough to start.",
  ctaLabel: "Start a Project",
  panelBackground: DEEP_CTA,
  buttonBackground: ACCENT,
  buttonText: "#fff",
} as const;

export const models = [
  {
    title: "Dedicated development teams",
    href: "/how-we-work/dedicated-development-team",
    description:
      "A team focused on you — tailored skill mix, honest advice on remote fit, and engineers designed to blend with your in-house process.",
  },
  {
    title: "Project-based engagement",
    href: "/how-we-work/project-based-delivery",
    description:
      "We take ownership end-to-end — analysis, design, build, and QA — so you stay on growth while delivery stays on track.",
  },
  {
    title: "Staff augmentation",
    href: "/how-we-work/staff-augmentation",
    description:
      "Add specialized capacity beside your team — hard-to-source skills, shared tools, and timelines you can actually hold.",
  },
];

export const principles = [
  {
    title: "Senior-led delivery",
    description:
      "Experienced engineers define architecture, technical risks, and delivery checkpoints before build work begins.",
  },
  {
    title: "Transparent milestones",
    description:
      "Scopes, weekly progress reviews, and decision logs keep everyone aligned on what is moving, blocked, or changing.",
  },
  {
    title: "Production-ready architecture",
    description:
      "Secure deployment, maintainable codebases, cloud readiness, and operational handover from day one.",
  },
  {
    title: "Automation-first thinking",
    description:
      "We spot repeatable bottlenecks and build systems that cut manual effort without inventing unnecessary complexity.",
  },
];

export const processSteps = [
  {
    title: "Assess",
    description:
      "A conversation about goals and constraints — then we identify the engagement shape and skills that fit.",
  },
  {
    title: "Shape",
    description:
      "Architecture, scope, risks, and a milestone plan you can track — before the calendar fills with build noise.",
  },
  {
    title: "Select & kickoff",
    description:
      "You meet the people who will do the work. We align tools, rituals, and ownership — then start building.",
  },
  {
    title: "Deliver & care",
    description:
      "Iterative delivery with visible progress, then handover and refinement as feedback arrives.",
  },
];

export const experiencePoints = [
  {
    title: "Outcomes over activity",
    description:
      "Impact, scalability, and product integrity frame the work — not busy status updates.",
  },
  {
    title: "Built to scale with you",
    description:
      "When the roadmap grows, we adjust skill mix and capacity without restarting the relationship from zero.",
  },
  {
    title: "Ready for the long haul",
    description:
      "Engagements extend when the partnership is working — continuity beats constant re-onboarding.",
  },
];

export const related: InteriorRelated = {
  heading: "Related",
  actionColor: ACCENT,
  accent: ACCENT,
  actionLabel: "View",
  columns: 3,
  titleSize: "md",
  links: [
    {
      title: "Who we are",
      href: "/company",
      description: "What Sofnology stands for. The brand, separate from how an engagement is run.",
    },
    {
      title: "Solutions for startups",
      href: "/engagement/solutions-for-startups",
      description: "When speed and clarity matter more than a giant vendor deck.",
    },
    {
      title: "Solutions for enterprises",
      href: "/engagement/solutions-for-enterprises",
      description: "When delivery has to respect governance, risk, and existing teams.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: PRIMARY_CTA,
  backgroundColor: ACCENT,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "blue",
};
