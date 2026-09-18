import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const ORANGE = "#FF6A00";
export const DEEP = "#1A1512";
export const SOFT = "#FFE8D6";

export const hero = {
  title: "Scoped builds we own until release",
  lede:
    "Sofnology project outsourcing — discovery through ship — so you stay focused on the business while we design, build, and deliver the product.",
  image: "/project-outsourcing-hero.jpg",
  imageAlt: "Professional working on a laptop in a bright modern office",
  imageClass: "scale-[1.08] object-cover object-[62%_28%]",
  imageMinClass:
    "relative order-1 min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:order-2 lg:min-h-[420px]",
  ctaLabel: "Get in touch",
  ctaHref: "#contact",
  ctaBackground: ORANGE,
  ctaText: "#1A1512",
} as const;

export const cta = {
  title: "Have a scoped outcome in mind?",
  lede:
    "Share the goal, timeline, and constraints. We’ll map a clear path from discovery to release — and tell you if another engagement model fits better.",
  ctaLabel: "Tell us about your project",
  panelBackground: DEEP,
  buttonBackground: ORANGE,
  buttonText: "#1A1512",
  ruleColor: ORANGE,
} as const;

export const scenarios = [
  {
    title: "Tech isn’t your core business",
    description:
      "You need a team to own the build — without standing up an in-house engineering org.",
  },
  {
    title: "A scoped digital initiative",
    description:
      "You’re taking on a defined transformation and want clear ownership, milestones, and accountability through release.",
  },
  {
    title: "A low-risk first partnership",
    description:
      "You haven’t worked with an external software partner before and want a contained project to prove fit.",
  },
];

export const valuePoints = [
  {
    title: "Visibility",
    description:
      "Status updates, demos, and milestone reporting — so you always know what’s shipping and what’s next.",
  },
  {
    title: "Cost clarity",
    description:
      "Time and materials with visible scope. You pay for progress, with transparency when priorities shift.",
  },
  {
    title: "Fast ramp",
    description:
      "When the roadmap accelerates, we add the right engineers quickly so delivery keeps pace.",
  },
];

export const deliverySteps = [
  {
    title: "Discovery",
    description:
      "We align on goals and constraints, then estimate time, cost, and the team shape needed to deliver the project.",
  },
  {
    title: "Staffing",
    description:
      "We assemble engineers, designers, and a project lead matched to your technical and product needs.",
  },
  {
    title: "Engineering",
    description:
      "We build in reviewable increments toward a finished product — on time, within scope, and ready for real use.",
  },
  {
    title: "Release",
    description:
      "QA and hardening come before launch so go-live is calm, controlled, and supportable after day one.",
  },
];

export const engagementModels = [
  {
    id: "project",
    title: "Project outsourcing",
    summary:
      "Sofnology owns delivery for a scoped outcome — discovery through release, with clear milestones.",
    bestFor:
      "When you need a finished product outcome and want one partner accountable for scope, timeline, and quality.",
    points: [
      "We own discovery through release",
      "Clear milestones and status visibility",
      "Best for MVPs, rebuilds, and contained initiatives",
    ],
    ctaLabel: "Start a project conversation",
    ctaHref: "#contact-form",
    current: true,
  },
  {
    id: "staff",
    title: "Staff augmentation",
    summary:
      "Extra capacity inside your operating rhythm — your process, your backlog, our engineers.",
    bestFor:
      "When you already run delivery and need senior engineers plugged into your standups, tools, and priorities.",
    points: [
      "You keep backlog and process ownership",
      "Engineers join your existing cadence",
      "Best for velocity gaps and specialist skills",
    ],
    ctaLabel: "Talk about staff augmentation",
    ctaHref: "/engagement/staff-augmentation",
    current: false,
  },
  {
    id: "dedicated",
    title: "Dedicated teams",
    summary:
      "A standing Sofnology pod that stays with your product over time, beyond a single project boundary.",
    bestFor:
      "When you need a lasting product team — not a one-off delivery — that grows with the roadmap.",
    points: [
      "Longer-horizon product partnership",
      "Stable pod across features and releases",
      "Best for continuous product development",
    ],
    ctaLabel: "Talk about dedicated teams",
    ctaHref: "/engagement/dedicated-teams",
    current: false,
  },
];

export const related: InteriorRelated = {
  heading: "Capabilities we bring to the engagement",
  actionColor: DEEP,
  accent: ORANGE,
  actionLabel: "View service",
  links: [
    {
      title: "Software development",
      description: "Full-cycle builds when the project spans product, architecture, and delivery.",
      href: "/services/software-development",
    },
    {
      title: "Web development",
      description: "Customer-facing sites and apps that often sit at the center of a scoped engagement.",
      href: "/services/web-development",
    },
    {
      title: "Mobile development",
      description: "iOS, Android, and cross-platform apps delivered as a contained product outcome.",
      href: "/services/mobile-development",
    },
    {
      title: "Backend development",
      description: "APIs, services, and data foundations that carry the system behind the UI.",
      href: "/services/backend-development",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: DEEP,
  variant: "compact",
  items: [
    {
      question: "How is project outsourcing different from staff augmentation?",
      answer:
        "With project outsourcing, Sofnology owns delivery for a scoped outcome — from discovery through release. Staff augmentation adds engineers into your existing process and backlog; you keep day-to-day ownership of priorities and operating rhythm.",
    },
    {
      question: "Do you work on a fixed scope or time and materials?",
      answer:
        "Most engagements start with discovery to clarify scope, then run on time and materials with visible milestones. That keeps cost transparent when priorities shift, while still holding a clear delivery path.",
    },
    {
      question: "What kinds of projects fit this model?",
      answer:
        "MVPs, custom product builds, platform upgrades, and contained digital initiatives where you want a partner to take the reins — not just fill seats — until a defined release is in market.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Get in touch",
  backgroundColor: ORANGE,
  textColor: "#1A1512",
};

export const contact: InteriorContact = {
  accent: "orange",
};
