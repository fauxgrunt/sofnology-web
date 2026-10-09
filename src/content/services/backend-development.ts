import type { InteriorContact, InteriorRelated, InteriorFaq, InteriorSticky } from "@/lib/interior";

export const EMERALD = "#10B981";
export const DEEP = "#111827";
export const SOFT = "#D1FAE5";

export const HERO_IMAGE = "/backend-hero.jpg";
export const CTA_IMAGE = "/backend-cta.jpg";

export const backendServices = [
  {
    title: "Backend audit and consulting",
    description:
      "Review architecture, performance, security gaps, and complexity so you know what to fix first and what can wait.",
  },
  {
    title: "Custom backend solutions",
    description:
      "APIs, services, data models, auth, and business logic for web, mobile, portals, and internal products.",
  },
  {
    title: "Upgrade and modernization",
    description:
      "Refactor legacy backends, improve structure, and move toward cleaner services without freezing delivery.",
  },
  {
    title: "API and system integration",
    description:
      "Connect payments, CRMs, CMS platforms, and third-party services through reliable, maintainable integrations.",
  },
  {
    title: "Cloud-ready backend delivery",
    description:
      "Structure and deploy backends for cloud environments with clear access, scaling paths, and operational ownership.",
  },
  {
    title: "Support and refinement",
    description:
      "Ongoing improvements, troubleshooting, monitoring baselines, and hardening after the first release is live.",
  },
];

export const shapeSteps = [
  {
    title: "Discover",
    description:
      "Map product goals, existing systems, constraints, and the risks that matter most.",
  },
  {
    title: "Model",
    description:
      "Define data, domains, and service boundaries so the architecture matches how the product actually works.",
  },
  {
    title: "API",
    description:
      "Build the service layer clients consume — clear contracts, auth, and integrations that stay maintainable.",
  },
  {
    title: "Harden",
    description:
      "Strengthen access control, data handling, failure modes, and the paths that carry real risk.",
  },
  {
    title: "Operate",
    description:
      "Ship with room to monitor, fix, and evolve — so the backend stays usable after launch.",
  },
];

export const principles = [
  {
    title: "Scalability",
    description:
      "Designed to grow with users, features, and traffic without forcing a full rewrite at every stage.",
  },
  {
    title: "Performance & reliability",
    description:
      "Fast responses under real load, efficient data access, and stable behavior teams can operate with confidence.",
  },
  {
    title: "Security",
    description:
      "Auth, access control, data handling, and secure APIs planned into the architecture from the start.",
  },
  {
    title: "Cost awareness",
    description:
      "Infrastructure and complexity kept proportional to the product stage so maintenance stays practical.",
  },
];

export const industries = [
  {
    title: "Fintech",
    description:
      "Secure APIs, account flows, and payment-related systems that need clear controls and auditability.",
    outcomes: ["Secure APIs", "Payment integrations", "Account services"],
  },
  {
    title: "Healthcare",
    description:
      "Backends that support patient-facing and operational workflows with careful data handling and access rules.",
    outcomes: ["Secure records flows", "Appointment systems", "Internal tooling APIs"],
  },
  {
    title: "Ecommerce",
    description:
      "Order processing, catalog services, and checkout-related backends that stay reliable as volume grows.",
    outcomes: ["Order services", "Catalog APIs", "Checkout support"],
  },
  {
    title: "SaaS products",
    description:
      "Multi-tenant or multi-role backends with permissions, billing hooks, and feature-ready service layers.",
    outcomes: ["Auth and roles", "Product APIs", "Admin services"],
  },
  {
    title: "Operations and logistics",
    description:
      "Systems that coordinate status, routing, inventory, or workflow data across teams and channels.",
    outcomes: ["Status services", "Workflow APIs", "Integration hubs"],
  },
];

export const engagementModels = [
  {
    title: "Staff augmentation",
    description:
      "Add experienced backend capacity to your team for delivery speed without a long hiring cycle.",
  },
  {
    title: "Dedicated backend team",
    description:
      "A focused team that owns implementation across architecture, APIs, data, and ongoing refinement.",
  },
  {
    title: "Project delivery",
    description:
      "A scoped engagement for a new backend, modernization effort, or integration-heavy release.",
  },
];

export const approachPoints = [
  {
    title: "Right-fit architecture",
    description: "Shape the backend around real product needs, not a default pattern.",
  },
  {
    title: "Reviewable delivery",
    description: "Ship in increments with clear ownership, decisions, and visible progress.",
  },
  {
    title: "Secure by design",
    description: "Build auth, access, and data handling into the foundation early.",
  },
  {
    title: "Operate and improve",
    description: "Leave room for monitoring, fixes, and evolution after launch.",
  },
];

export const techStack = [
  {
    category: "Languages and runtimes",
    items: ["Node.js", "TypeScript", "Python", "C# / .NET"],
  },
  {
    category: "APIs and services",
    items: ["REST", "GraphQL", "JWT / OAuth", "Webhooks"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    category: "Cloud and delivery",
    items: ["AWS", "Azure", "GCP", "Docker / CI-CD"],
  },
];

export const relatedServices = [
  {
    title: "Web development",
    description: "Product surfaces that consume your APIs — portals, SaaS apps, and ecommerce.",
    href: "/services/web-development",
  },
  {
    title: "DevOps",
    description: "Delivery pipelines, cloud operations, and the loop that keeps releases moving.",
    href: "/services/devops",
  },
  {
    title: "Cybersecurity",
    description: "Deeper audits and hardening beyond the auth and access built into the backend.",
    href: "/services/cybersecurity",
  },
];

export const faqs: InteriorFaq = {
  signColor: DEEP,
  items: [
  {
    question: "Can you work with our existing backend?",
    answer:
      "Yes. Many engagements start with an audit of what already exists, then improve, extend, or modernize the parts that create the most risk or friction.",
  },
  {
    question: "Do you build APIs for web and mobile together?",
    answer:
      "Yes. We often design one service layer that supports web, mobile, admin tools, and third-party integrations from a shared foundation. For the client side, see our web and mobile development work.",
  },
  {
    question: "How do you handle security in backend work?",
    answer:
      "We plan authentication, authorization, data handling, and secure integrations into the architecture. For deeper audits and packages, we connect that work to Sofnology cybersecurity.",
  },
],
};

export const hero = {
  title: "Backend development services",
  lede:
    "Sofnology builds the systems behind the product — APIs, data, auth, and integrations shaped for scalability, security, and reliable day-to-day performance.",
  image: HERO_IMAGE,
  imageAlt: "Backend systems visual with emerald accents",
  imageClass: "object-cover object-center",
  ctaLabel: "Start a Project",
  ctaHref: "#contact-form",
  ctaBackground: EMERALD,
  ctaText: "#111827",
} as const;

export const cta = {
  title: "Looking for a backend built to scale?",
  lede:
    "Tell us about the product, the systems involved, and the constraints. We’ll help shape a practical backend path.",
  ctaLabel: "Tell us about your project",
  image: CTA_IMAGE,
  imageAlt: "Backend architecture visual with emerald accents",
  panelBackground: DEEP,
  buttonBackground: EMERALD,
  buttonText: "#111827",
} as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  accent: EMERALD,
  actionLabel: "View service",
  columns: 3,
  titleSize: "lg",
  links: relatedServices,
};

export const sticky: InteriorSticky = {
  label: "Start a Project",
  backgroundColor: EMERALD,
  textColor: "#111827",
};

export const contact: InteriorContact = {
  accent: "emerald",
};
