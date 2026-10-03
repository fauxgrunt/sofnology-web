import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const GOLD = "#C9A227";
export const DEEP = "#1A1C1F";
export const SOFT = "#F3E8C4";

export const hero = {
  title: "Financial software that earns trust",
  lede:
    "Sofnology engineering and advisory for payments, lending, wealth, and embedded finance — secure, scalable products shaped for real operations.",
  image: "/fintech-hero.jpg",
  imageAlt: "Modern glass skyscraper looking upward in a financial district",
  imageClass: "object-cover object-[center_40%]",
  ctaLabel: "Get in touch",
  ctaHref: "#contact-form",
  ctaBackground: GOLD,
  ctaText: "#1A1C1F",
} as const;

export const cta = {
  title: "Building in fintech?",
  lede:
    "Tell us about the product, the market, and the constraints around security and delivery. We’ll help shape a practical path.",
  ctaLabel: "Tell us about your project",
  image: "/fintech-cta.jpg",
  imageAlt: "Glass skyscraper facade with cool reflections",
  panelBackground: DEEP,
  buttonBackground: GOLD,
  buttonText: "#1A1C1F",
} as const;

export const helpModes = [
  {
    title: "Fintech consulting",
    description:
      "Clarify the product path — scope an MVP, pressure-test the architecture, and define what must be secure, compliant, and shippable first.",
    points: ["Product and market clarity", "MVP and architecture scoping", "Risk and delivery planning"],
  },
  {
    title: "Fintech development",
    description:
      "Build the software — payments, accounts, APIs, dashboards, and integrations shaped for scale and day-to-day reliability.",
    points: ["Custom product build", "Integrations and APIs", "Ongoing refinement"],
  },
] as const;

export const domains = [
  {
    title: "Digital payments",
    description:
      "Merchants, processors, and platforms that move money — checkout, transfers, and settlement paths with clear operational control.",
    outcomes: ["Merchant and consumer flows", "Processor partnerships", "Ops visibility"],
  },
  {
    title: "Lending and credit",
    description:
      "Lenders and credit products where origination, decisions, and servicing need clear rules and auditability.",
    outcomes: ["Origination journeys", "Decision support", "Servicing workflows"],
  },
  {
    title: "Wealth and capital markets",
    description:
      "Wealth, brokerage, and market products that handle dense data without losing usability or trust.",
    outcomes: ["Portfolio experiences", "Advisor tooling", "Market ops surfaces"],
  },
  {
    title: "Insurance",
    description:
      "Carriers, brokers, and insurtech teams building policy, claims, and partner workflows with disciplined data handling.",
    outcomes: ["Policy journeys", "Claims process", "Partner portals"],
  },
  {
    title: "Personal finance",
    description:
      "Consumer money products — budgeting, accounts, and insights — where clarity and secure foundations matter equally.",
    outcomes: ["Account experiences", "Money movement UX", "Alerts and insights"],
  },
  {
    title: "Embedded finance",
    description:
      "Retail, marketplaces, and platforms that need financial capability inside an existing product — without becoming a bank overnight.",
    outcomes: ["In-product finance features", "Partner integrations", "Launch-ready scope"],
  },
] as const;

export const solutions = [
  {
    title: "Payment gateways and APIs",
    description:
      "Service layers that connect merchants, processors, and internal systems through maintainable contracts.",
  },
  {
    title: "Mobile wallets",
    description:
      "Wallet products with clear balance, transfer, and auth flows across mobile and supporting backends.",
  },
  {
    title: "Trading platforms",
    description:
      "Order, market-data, and operational systems built for usage pressure — not demo-day screenshots.",
  },
  {
    title: "Open banking connections",
    description:
      "Account-data and payment-initiation integrations with careful access, consent, and failure handling.",
  },
  {
    title: "Risk and ops consoles",
    description:
      "Internal tools for support, risk, finance ops, and compliance teams who need speed with clear controls.",
  },
  {
    title: "Account and ledger systems",
    description:
      "Core product foundations — accounts, permissions, ledgers, and audit trails treated as first-class.",
  },
] as const;

export const workSteps = [
  {
    title: "Advisory sprint",
    description:
      "Clarify domain, risks, MVP boundaries, and architecture options before heavy build spend.",
  },
  {
    title: "Build pod",
    description:
      "Ship the product surface and systems in reviewable increments with clear ownership.",
  },
  {
    title: "Harden and operate",
    description:
      "Strengthen access, failure modes, monitoring baselines, and the paths that carry real money risk.",
  },
] as const;

export const trustPoints = [
  {
    title: "Audit trails",
    description:
      "Sensitive actions logged so support, compliance, and engineering can reconstruct what happened.",
  },
  {
    title: "Role-based access",
    description:
      "Permissions shaped around real roles — customer, ops, risk, admin — not a single shared key.",
  },
  {
    title: "Payment failure modes",
    description:
      "Retries, reconciliation, and clear user/ops states planned for when processors and networks fail.",
  },
  {
    title: "PCI-aware handling",
    description:
      "Card and payment data paths designed to minimize exposure and keep sensitive handling intentional.",
  },
] as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  accent: GOLD,
  actionLabel: "View service",
  links: [
    {
      title: "Backend development",
      description: "APIs, auth, and data layers that carry payments, accounts, and integrations.",
      href: "/services/backend-development",
    },
    {
      title: "Web & mobile",
      description: "Client surfaces for wallets, trading UIs, dashboards, and customer journeys.",
      href: "/services/web-development",
    },
    {
      title: "Cybersecurity",
      description: "Deeper assessments and hardening when trust and risk need dedicated attention.",
      href: "/services/cybersecurity",
    },
    {
      title: "Software development",
      description: "End-to-end product engineering when the fintech scope needs a full delivery team.",
      href: "/services/software-development",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: DEEP,
  items: [
    {
      question: "Do we need to be a bank or fintech company to work with Sofnology?",
      answer:
        "No. Fintech here includes embedded finance — payments inside retail, marketplaces, or platforms — as well as dedicated financial products.",
    },
    {
      question: "How do you approach compliance and security?",
      answer:
        "We treat audit trails, access control, payment failure handling, and sensitive data paths as design constraints from the start. For deeper audits, we connect that work to Sofnology cybersecurity.",
    },
    {
      question: "Can you help before development starts?",
      answer:
        "Yes. Many engagements begin with an advisory sprint — clarifying scope, MVP boundaries, architecture options, and delivery risk — then move into build when the path is clear.",
    },
  ],
};

export const sticky: InteriorSticky = {
  label: "Get in touch",
  backgroundColor: GOLD,
  textColor: "#1A1C1F",
};

export const contact: InteriorContact = {
  accent: "gold",
};
