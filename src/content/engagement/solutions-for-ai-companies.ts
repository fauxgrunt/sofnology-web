import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const CYAN = "#2EE6D6";
export const DEEP = "#12141A";
export const SOFT = "#C8F7F2";

export const MID_IMAGE = "/ai-startup-mid.jpg";
export const CTA_IMAGE = "/ai-startup-cta.jpg";

export const hero = {
  title: "AI tools aren’t a delivery system",
  lede:
    "Sofnology helps AI companies and AI-enabled teams build systems that make models reliable at scale — across planning, build, review, and release.",
  image: "/ai-startup-hero.jpg",
  imageAlt: "Exploded 3D precision module with cyan glowing core",
  imageClass: "scale-[1.04] object-cover object-[22%_50%]",
  imageMinClass:
    "relative aspect-[16/11] overflow-hidden sm:aspect-auto sm:min-h-[280px] md:min-h-[360px] lg:min-h-[440px]",
  ctaLabel: "Start a conversation",
  ctaHref: "#contact-form",
  ctaBackground: CYAN,
  ctaText: "#12141A",
} as const;

export const cta = {
  title: "You can’t pilot your way out of a pilot",
  lede:
    "We’ll locate where you sit on the five-stage model and name the highest-impact moves next — before you commit more tool spend.",
  ctaLabel: "Start a conversation",
  ctaHref: "#contact-form",
  image: "/ai-startup-cta.jpg",
  imageAlt: "3D stacked AI hardware module with cyan energy ring",
  imageClass: "object-cover object-[42%_50%] lg:object-[38%_50%]",
} as const;

export const costPoints = [
  {
    title: "Noise instead of context",
    description:
      "Bloated context windows drown models. Vague prompts produce drafts engineers rewrite from scratch — time spent twice.",
  },
  {
    title: "Unvalidated agent output",
    description:
      "Hallucinations and defects slip into production when review gates are missing. Fixes later cost far more than catching them early.",
  },
  {
    title: "Pilots that never compound",
    description:
      "Tool licenses without a delivery system plateau fast. Usage looks busy; throughput, quality, and unit economics stay flat.",
  },
];

export const maturityStages = [
  {
    stage: "Stage 1",
    title: "Individual exploration",
    pattern:
      "AI helps individuals on small, low-risk tasks. Usage is personal, ad hoc, and uneven — if someone leaves, the practice leaves with them.",
    advance: [
      "Shared review expectations start to appear",
      "Team sees uneven gains and wants consistency",
      "Leadership asks for a baseline, not anecdotes",
    ],
  },
  {
    stage: "Stage 2",
    title: "Team-wide adoption",
    pattern:
      "AI becomes a shared capability. Engineers use common tools, baselines, and review expectations. New members ramp in days, not weeks.",
    advance: [
      "Shared prompt library in active use",
      "AI flagging issues before merge, not after",
      "Adoption tracked beyond individual preference",
    ],
  },
  {
    stage: "Stage 3",
    title: "Integrated workflows",
    pattern:
      "AI sits inside repeatable workflows. Scoped work moves through draft, review, and refinement. Teams rely on shared setups, not personal hacks.",
    advance: [
      "Specs written so agents can execute against them",
      "Architecture context kept current and accessible",
      "Routine SDLC work measurably faster",
    ],
  },
  {
    stage: "Stage 4",
    title: "Orchestrated delivery",
    pattern:
      "AI supports the full artifact lifecycle through connected, traceable specifications. Pilots stop burning budget and start compounding returns.",
    advance: [
      "Multiple agent workflows run in parallel with gates",
      "Outputs pass structured review before merge",
      "Feature-level visibility into time saved and quality",
    ],
  },
  {
    stage: "Stage 5",
    title: "AI-driven development",
    pattern:
      "AI is the default execution layer. Governance, evidence, and lifecycle health are managed at org level. Engineers govern and validate more than they type.",
    advance: [
      "Quality and security enforced across outputs",
      "Releases accelerate without headcount theater",
      "Developers act as governors of the system",
    ],
  },
];

export const specSteps = [
  {
    title: "Business intent",
    description:
      "Turn goals into structured requirements AI can execute against — clear, consistent, and reviewable.",
  },
  {
    title: "UX specifications",
    description:
      "Formalize design intent into precise implementation targets so frontend work has a reliable source of truth.",
  },
  {
    title: "Architecture guidance",
    description:
      "ADRs and diagrams that guide downstream decisions and reduce architectural drift early.",
  },
  {
    title: "Work decomposition",
    description:
      "Break initiatives into scoped epics and stories so AI works inside structured, reviewable boundaries.",
  },
  {
    title: "AI-assisted coding",
    description:
      "Generation inside guardrails — engineers review, validate, and trace output back to requirements.",
  },
  {
    title: "Embedded validation",
    description:
      "Tests, review checkpoints, and stage gates catch issues before they compound downstream.",
  },
  {
    title: "Artifact maintenance",
    description:
      "Keep docs, decisions, and tests current so the next AI-assisted cycle starts from a clean foundation.",
  },
];

export const governance = [
  {
    title: "IP and data privacy",
    description:
      "Client IP stays with the client. Delivery is structured so commissioned work and AI-assisted artifacts remain yours.",
  },
  {
    title: "Model and prompt security",
    description:
      "Guardrails against prompt injection, hallucination propagation, and unvalidated agent output shipping to production.",
  },
  {
    title: "Judgment stays human",
    description:
      "Senior engineers stay in the validation and architecture loop — so speed never erodes the judgment that makes AI trustworthy.",
  },
  {
    title: "Audit-ready trails",
    description:
      "For regulated contexts, the artifact chain leaves a traceable record of decisions, approvals, and changes.",
  },
];

export const measures = [
  {
    title: "Adoption",
    description:
      "Where AI is actually used across teams — gaps, coaching needs, and workflow friction made visible.",
  },
  {
    title: "Productivity",
    description:
      "Cycle time and hours saved — always read alongside quality, never as a vanity speed metric.",
  },
  {
    title: "Knowledge",
    description:
      "Documentation coverage and whether AI-generated plans are used in real delivery — or ignored.",
  },
  {
    title: "Economics",
    description:
      "Cost per feature and net engineering gain — benchmarked before rollout and tracked after.",
  },
];

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  accent: CYAN,
  actionLabel: "Explore",
  columns: 3,
  links: [
    {
      title: "Project outsourcing",
      description: "Owned delivery for a scoped AI or product outcome.",
      href: "/engagement/project-outsourcing",
    },
    {
      title: "Solutions for enterprises",
      description: "Modernization and reliable systems at org scale.",
      href: "/engagement/solutions-for-enterprises",
    },
    {
      title: "Software development",
      description: "Full-cycle product engineering behind AI-enabled delivery.",
      href: "/services/software-development",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: DEEP,
  variant: "responsive",
  items: [
    {
      question: "How do you know AI is helping and not creating more rework?",
      answer:
        "We look past generated lines of code. If features aren’t shipping faster, bugs aren’t dropping, and the same headcount isn’t covering more ground, the AI system isn’t working — regardless of tool usage.",
    },
    {
      question: "Is this only for AI product companies?",
      answer:
        "No. It fits AI-native startups and enterprises embedding AI into delivery alike. The common need is a system — maturity, specs, validation, and governance — not another disconnected pilot.",
    },
    {
      question: "How is this different from buying Copilot licenses?",
      answer:
        "Licenses start exploration. Sofnology helps you move from ad-hoc use to orchestrated delivery: shared workflows, spec-driven work, review gates, and measurable outcomes across the SDLC.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Start a conversation",
  backgroundColor: CYAN,
  textColor: "#12141A",
};

export const contact: InteriorContact = {
  accent: "cyan",
};
