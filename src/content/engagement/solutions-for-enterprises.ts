import type { InteriorContact, InteriorSticky } from "@/lib/interior";

export const SLATE = "#3D4F5F";
export const DEEP = "#1A1F24";
export const ICE = "#D7E2EA";

export const SERVICES_IMAGE = "/enterprise-services.jpg";
export const OUTCOMES_IMAGE = "/digital-growth.jpg";
export const CTA_IMAGE = "/enterprise-cta.jpg";

export const hero = {
  title: "Enterprise systems that stay reliable at scale",
  lede:
    "Sofnology helps large organizations modernize and integrate without sacrificing uptime — delivery discipline for complex, multi-stakeholder systems.",
  image: "/conversation.jpg",
  imageAlt: "Enterprise stakeholders collaborating around documents and a laptop",
  imageClass: "scale-[1.12] object-cover object-[52%_28%]",
  imageMinClass:
    "relative order-1 min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:order-2 lg:min-h-[420px]",
  titleClass:
    "max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.1rem]",
  ctaLabel: "Get in touch",
  ctaHref: "#contact",
  ctaBackground: SLATE,
  ctaText: "#ffffff",
  ctaArrowColor: ICE,
} as const;

export const cta = {
  title: "Need a trusted enterprise software partner?",
  lede:
    "Tell us about the systems, constraints, and outcomes. We’ll help shape a practical path from discovery to durable delivery.",
  ctaLabel: "Reach out to Sofnology",
  ctaHref: "#contact",
  image: "/enterprise-cta.jpg",
  imageAlt: "Enterprise partners walking through a modern corporate atrium",
  imageClass: "scale-[1.06] object-cover object-[42%_28%]",
} as const;

export const distinctPoints = [
  {
    title: "Built for many users, many places",
    description:
      "Enterprise software has to hold up when hundreds of people use it at once — across locations, departments, and time zones.",
  },
  {
    title: "Customization without chaos",
    description:
      "Roles, workflows, and permissions differ by team. The product has to adapt without becoming impossible to maintain.",
  },
  {
    title: "Security and uptime as defaults",
    description:
      "Sensitive data, compliance expectations, and low tolerance for downtime shape architecture, testing, and support from day one.",
  },
];

export const enterpriseServices = [
  {
    shortTitle: "Consulting",
    title: "Enterprise software consulting",
    description:
      "Strategic advice that maps business goals to software choices — what to build, modernize, integrate, or leave alone.",
    points: ["Needs analysis", "Solution options", "Roadmap aligned to goals"],
  },
  {
    shortTitle: "Legacy modernization",
    title: "Legacy software modernization",
    description:
      "Overhaul outdated systems without freezing the business. Preserve essential data while making infrastructure faster and ready for what’s next.",
    points: ["Phased modernization", "Data continuity", "Lower operational risk"],
  },
  {
    shortTitle: "Custom software",
    title: "Custom enterprise software",
    description:
      "Software shaped to your organization — employee-level customization and workflows that fit how each stakeholder group actually works.",
    points: ["Role-aware features", "Stakeholder workflows", "Owned architecture"],
  },
  {
    shortTitle: "Integration",
    title: "Enterprise application integration",
    description:
      "Connect disparate systems so data flows cleanly across the organization — with real-time access to what teams need.",
    points: ["System interoperability", "Reliable data flow", "Fewer silos"],
  },
  {
    shortTitle: "Cloud migration",
    title: "Cloud migration",
    description:
      "Move on-premises software and data to the cloud platform that fits — with room to grow in agility, safety, and cost control.",
    points: ["Platform selection", "Migration planning", "Hybrid-ready paths"],
  },
  {
    shortTitle: "Support & QA",
    title: "Support, maintenance, and testing",
    description:
      "Ongoing support and enterprise QA so software stays stable after launch — reliability, security, and performance checked before production.",
    points: ["Issue response and updates", "Functional and performance QA", "Operational continuity"],
  },
  {
    shortTitle: "Cybersecurity",
    title: "Cybersecurity services",
    description:
      "Protect enterprise software and data from threats and unauthorized access — assessments, hardening, and audits when the stakes are high.",
    points: ["Risk assessment", "Hardening guidance", "Security reviews"],
    href: "/services/cybersecurity",
  },
];

export const outcomes = [
  {
    title: "Automate business processes",
    description:
      "Free teams for strategic work — from report generation to end-to-end procurement and multi-step operational workflows.",
  },
  {
    title: "Real-time business insight",
    description:
      "Analytics across sales, customers, logistics, and operations so leaders can anticipate change instead of reacting late.",
  },
  {
    title: "Integrate enterprise systems",
    description:
      "Eliminate silos so departments share current data — and critical information stays accessible when decisions can’t wait.",
  },
  {
    title: "Extend with AI, ML, and data",
    description:
      "Predict trends and surface strategic signals that would be hard to notice with manual reporting alone.",
  },
];

export const workModels = [
  {
    title: "Staff augmentation",
    description: "Experts integrate with your existing team. You pick the skills and scale as demand evolves.",
    points: [
      "Plug into your current squad",
      "Choose the skills you need",
      "Flexible capacity as priorities shift",
    ],
    href: "/engagement/staff-augmentation",
    ctaLabel: "View staff augmentation",
  },
  {
    title: "Dedicated teams",
    description: "A Sofnology pod dedicated to your initiative — you steer priorities with full support for ongoing needs.",
    points: [
      "Team focused on your work",
      "Direct control of priorities",
      "Support for continuous delivery",
    ],
    href: "/engagement/dedicated-teams",
    ctaLabel: "View dedicated teams",
  },
  {
    title: "Software development outsourcing",
    description: "We own management, development, and delivery — with analysts helping define precise requirements.",
    points: [
      "End-to-end project ownership",
      "Delivery accountability on us",
      "Requirements clarity from the start",
    ],
    href: "/engagement/project-outsourcing",
    ctaLabel: "View project outsourcing",
  },
];

export const sticky: InteriorSticky = {
  href: "#contact",
  label: "Get in touch",
  backgroundColor: SLATE,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "slate",
};
