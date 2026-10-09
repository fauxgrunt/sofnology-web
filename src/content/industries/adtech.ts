import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const MAGENTA = "#FF2D8A";
export const DEEP = "#1A0A12";
export const PRIMARY_CTA = "Start a Project";
export const HERO_IMAGE = "/adtech-hero.jpg";

export const hero = {
  title: "Marketing and adtech",
  lede:
    "Automated end-to-end platforms that sharpen customer acquisition — and give your team durable tools to grow brand presence.",
  image: HERO_IMAGE,
  imageAlt: "Close-up of a laptop with warm peach and magenta light — martech and adtech hero",
  imageClass: "scale-[1.03] object-cover object-[58%_45%]",
  eyebrow: "Sofnology",
  eyebrowColor: MAGENTA,
  ctaLabel: "Start a Project",
  ctaHref: "#contact-form",
  ctaBackground: MAGENTA,
  ctaText: "#ffffff",
} as const;

export const cta = {
  lede: "Tell us about the funnel, the inventory, or the product you’re building.",
  image: HERO_IMAGE,
  imageAlt: "",
  imageClass: "object-cover object-[72%_55%]",
} as const;

export const twinPillars = [
  {
    id: "martech",
    label: "01",
    title: "Marketing technology",
    description:
      "Martech that fits your brand — data-backed campaigns, programs, and experiences built to scale, not a one-size stack bolted on after the fact.",
    points: [
      "Campaign and journey tooling shaped to your funnel",
      "Experiences that stay on-brand as volume grows",
      "Instrumentation that makes spend and outcomes readable",
    ],
  },
  {
    id: "adtech",
    label: "02",
    title: "Adtech solutions",
    description:
      "Ad management, delivery, and targeting simplified into platforms your team can actually run — whether strategy is proven or still being refined.",
    points: [
      "Inventory, delivery, and targeting in one coherent product",
      "Secure exchange and partner connections where needed",
      "Retention and engagement treated as product problems",
    ],
  },
] as const;

export const stackItems = [
  {
    title: "Ad inventory product management",
    description:
      "Customize and manage advertising deals inside a single platform — rate cards, packages, and commitments without spreadsheet chaos.",
  },
  {
    title: "Real-time bidding",
    description:
      "Buy and sell display inventory across exchanges with platforms built for speed, security, and operational clarity.",
  },
  {
    title: "Data analysis",
    description:
      "Collect and unify marketing data so operators can adjust campaigns from insight — not from five disconnected exports.",
  },
  {
    title: "Email marketing",
    description:
      "Email products that reinforce brand and messaging while supporting lead gen and ongoing engagement workflows.",
  },
  {
    title: "CRM",
    description:
      "Custom CRM shaped to sales, service, and marketing ops — the fields and flows you need, without the clutter you don’t.",
  },
] as const;

export const audiences = [
  { title: "Brands", description: "Owned acquisition and retention platforms." },
  { title: "Publishers", description: "Inventory, yield, and audience products." },
  { title: "Agencies", description: "Campaign ops tooling clients can trust." },
  { title: "Data & research", description: "Insight products that feed the funnel." },
] as const;

export const engageModes = [
  {
    title: "Product engineering",
    description:
      "Full-stack delivery across martech and adtech ecosystems — architecture, build, and iteration with both technical depth and commercial awareness.",
  },
  {
    title: "Third-party integration",
    description:
      "Connect Analytics, CRM, ad platforms, and partner systems into the product you already run — without fragile glue that breaks every release.",
  },
  {
    title: "Consulting",
    description:
      "Start from the KPIs that matter. We help you see where custom software actually moves acquisition, retention, or yield — before you overbuild.",
  },
] as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: MAGENTA,
  accent: MAGENTA,
  actionLabel: "View",
  titleSize: "md",
  links: [
    {
      title: "Ecommerce",
      href: "/industries/ecommerce",
      description: "When acquisition platforms need to connect to commerce reality.",
    },
    {
      title: "Backend development",
      href: "/services/backend-development",
      description: "High-throughput systems behind bidding, delivery, and data.",
    },
    {
      title: "Solutions for AI companies",
      href: "/engagement/solutions-for-ai-companies",
      description: "When targeting and insight layers need serious ML engineering.",
    },
    {
      title: "Dedicated teams",
      href: "/how-we-work/dedicated-development-team",
      description: "A lasting team when the ad stack evolves every quarter.",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: MAGENTA,
  items: [
    {
      question: "Do you build custom DSP / SSP-adjacent platforms?",
      answer:
        "We build the product layers around inventory, bidding, delivery, and ops that your model actually needs — integrations to exchanges and partners included when the architecture calls for them.",
    },
    {
      question: "Can you integrate with Analytics, CRM, and ad platforms?",
      answer:
        "Yes. Third-party integration is a core part of martech and adtech delivery — so campaigns, CRM, and measurement stay connected instead of living in parallel tools.",
    },
    {
      question: "Is this only for large publishers?",
      answer:
        "No. We work with brands, agencies, publishers, and data teams — from a focused MVP to a platform that already carries real volume.",
    },
    {
      question: "How do you start a martech or adtech engagement?",
      answer:
        "With the funnel and the constraints. We clarify KPIs, inventory or journey scope, and integration surface — then shape a build path that doesn’t invent fake efficiency claims.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: PRIMARY_CTA,
  backgroundColor: MAGENTA,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "hotpink",
};
