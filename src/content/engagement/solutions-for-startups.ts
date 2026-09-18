import type { InteriorContact, InteriorFaq, InteriorSticky } from "@/lib/interior";

export const WINE = "#8B1E3F";
export const DEEP = "#1A1216";
export const SOFT = "#F3D6DE";

export const hero = {
  title: "Build and scale at startup speed",
  lede:
    "Sofnology partners with founders who shift and scale fast — clear technical choices for each stage, plus engineering teams as ambitious as you are.",
  image: "/frontend-hero.jpg",
  imageAlt: "Engineers collaborating on a product interface in a modern loft office",
  imageClass: "scale-[1.12] object-cover object-[55%_22%]",
  imageMinClass:
    "relative order-1 min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:order-2 lg:min-h-[420px]",
  ctaLabel: "Get in touch",
  ctaHref: "#contact",
  ctaBackground: WINE,
  ctaText: "#ffffff",
  ctaArrowColor: SOFT,
} as const;

export const cta = {
  title: "Ready to move on your next stage?",
  lede:
    "Tell us where you are — idea, MVP, or scale — and we’ll match the right services and engagement model.",
  ctaLabel: "Tell us about your stage",
  image: "/solutions-startup-standalone.jpg",
  imageAlt: "Startup team collaborating around a laptop in a bright office",
  imageClass: "scale-[1.06] object-cover object-[48%_35%]",
  panelBackground: DEEP,
  buttonBackground: WINE,
  buttonText: "#ffffff",
} as const;

export const startupServices = [
  {
    title: "CTO as a Service",
    description:
      "Hiring full-time technical leadership is slow. Get stack guidance, architecture direction, and next-step planning before you’re ready for a permanent CTO.",
    points: ["Tech stack decisions", "Architecture direction", "Hiring and roadmap advice"],
  },
  {
    title: "Software development",
    description:
      "Full-cycle product builds and integrations — from first release to the features that help you outpace competitors.",
    points: ["End-to-end product builds", "Integrations and APIs", "Quality and release readiness"],
  },
  {
    title: "Technology advisory",
    description:
      "Strategic guidance to turn technical complexity into a clear investment plan — stack, implementation path, and launch priorities.",
    points: ["Requirements deep-dive", "Roadmap and spend clarity", "Launch and scale planning"],
  },
  {
    title: "Scaling mature startups",
    description:
      "Product is in market and the next stage needs more engineering depth and leadership — without losing speed.",
    points: ["Engineering team expansion", "Leadership support", "Reliability and growth systems"],
  },
  {
    title: "MVP development",
    description:
      "Fast iterations, solid testing, and a foundation that can grow — from concept to a market-ready first product.",
    points: ["Scoped MVP definition", "Swift build cycles", "Scalable foundations"],
  },
];

export const domains = [
  {
    title: "Fintech",
    description:
      "Secure transaction flows, wallets, and analytics-ready products for financial startups that need trust from day one.",
    href: "/industries/fintech",
    ctaLabel: "Explore",
  },
  {
    title: "Ecommerce",
    description:
      "Storefronts, marketplaces, and commerce systems shaped for conversion and operational clarity.",
    href: "/industries/ecommerce",
    ctaLabel: "Explore",
  },
  {
    title: "Foodtech",
    description:
      "Ordering, ops, and delivery products for restaurants, kitchens, and marketplaces.",
    href: "/industries/foodtech",
    ctaLabel: "Explore",
  },
  {
    title: "Healthtech",
    description:
      "Provider and patient experiences built with security and compliance sensitivity from the start.",
    href: "/industries/healthtech",
    ctaLabel: "Explore",
  },
];

export const partnershipModels = [
  {
    title: "Staff augmentation",
    description:
      "Seasoned engineers who plug into your tools, standups, and backlog — reinforcing delivery without building a new org.",
    idealFor: [
      "Velocity gaps without long hiring cycles",
      "Tight deadlines that need proven specialists",
      "Seamless fit with your existing process",
    ],
    href: "/engagement/staff-augmentation",
  },
  {
    title: "Dedicated teams",
    description:
      "A standing Sofnology pod that stays with your product — faster time-to-market and a wider skill mix than local hiring alone.",
    idealFor: [
      "Ongoing products with room to expand",
      "Need for multiple specializations quickly",
      "When local recruitment is too slow or costly",
    ],
    href: "/engagement/dedicated-teams",
  },
  {
    title: "Project-based delivery",
    description:
      "We own discovery through release — analysis, design, build, and QA — so your core team stays focused on growth.",
    idealFor: [
      "First collaboration with an external partner",
      "Scoped builds beyond your team’s capacity",
      "Full delivery ownership until launch",
    ],
    href: "/engagement/project-outsourcing",
  },
];

export const faqs: InteriorFaq = {
  signColor: DEEP,
  variant: "compact",
  items: [
    {
      question: "Do you work with early-stage startups or only later rounds?",
      answer:
        "Both. We partner from MVP and first product through scale-up — matching the engagement model to your stage, budget, and how much delivery ownership you want to keep.",
    },
    {
      question: "Can you help before we hire a full-time CTO?",
      answer:
        "Yes. CTO-as-a-service and tech advisory cover stack choices, architecture, roadmap, and hiring guidance until you’re ready for permanent leadership.",
    },
    {
      question: "Which engagement model is best for a first build?",
      answer:
        "Many first collaborations fit project-based delivery. If you already run a backlog and need capacity, staff augmentation or a dedicated pod may fit better — we’ll help you choose.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Get in touch",
  backgroundColor: WINE,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "wine",
};
