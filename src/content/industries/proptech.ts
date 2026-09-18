import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const ORANGE = "#F97316";
export const DEEP = "#1C1917";

export const MID_IMAGE = "/proptech-mid.jpg";

export const hero = {
  title: "Real estate software for custom proptech",
  eyebrow: "Build, scale, and modernize without delivery risk",
  lede:
    "Sofnology builds and modernizes proptech platforms — AI leasing flows, smart building ops, resident experiences, property management, and IoT-enabled infrastructure — with architecture that holds under real portfolio load.",
  image: "/proptech-hero.jpg",
  imageAlt: "Abstract proptech skyline of glass and lime geometric forms on green hills",
  imageClass: "scale-[1.05] object-cover object-[48%_42%]",
  titleClass:
    "mt-5 max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[3.75rem]",
  ctaLabel: "Talk about proptech software",
  ctaHref: "#contact-form",
  ctaBackground: ORANGE,
  ctaText: "#1C1917",
  ctaMaxWidth: "max-w-[14rem] leading-tight md:max-w-[16rem]",
} as const;

export const cta = {
  title: "Ready to build better proptech software?",
  lede:
    "Tell us whether you need to scale the team, ship a new product, or modernize a live platform — we’ll help shape a practical path.",
  ctaLabel: "Talk about proptech software",
  image: "/proptech-hero.jpg",
  imageAlt: "Proptech abstract landscape with glass architectural forms",
  imageClass: "scale-[1.08] object-cover object-[62%_55%]",
  panelBackground: DEEP,
  buttonBackground: ORANGE,
  buttonText: "#1C1917",
} as const;

export const scenarios = [
  {
    id: "scale",
    title: "Scale your proptech engineering team",
    challenge:
      "Your platform is growing, but the team can’t keep pace with integrations, tenant load, compliance updates, mobile releases, and infrastructure across high-load property ops.",
    role: "Sofnology engineers who understand multi-tenant property models, proptech data shapes, and hardware-aware integrations — plugged into your process so delivery keeps moving.",
    fit: [
      "Multi-tenant architectures under real load",
      "Property data models and PMS-adjacent work",
      "Mobile, integrations, and ops tooling in parallel",
    ],
  },
  {
    id: "build",
    title: "Build your proptech product",
    challenge:
      "Off-the-shelf property software doesn’t match your asset types, multi-party flows, or legacy connections. You’re ready to build from a validated concept or MVP.",
    role: "End-to-end delivery — architecture, full-stack engineering, and integrations with your real estate ecosystem, external services, and hardware where needed.",
    fit: [
      "Custom platforms from scratch or MVP scale-up",
      "Marketplace, leasing, and resident products",
      "Integrations that make the product operable",
    ],
  },
  {
    id: "modernize",
    title: "Modernize your property platform",
    challenge:
      "The system is years old. Performance is unstable, features ship slowly, and the business wants modern UX and capabilities without freezing live buildings.",
    role: "Phased modernization that upgrades stacks and architecture while live operations continue — plus mobile, IoT, and AI capabilities when they earn their place.",
    fit: [
      "Legacy API and backend re-architecture",
      "Staged migration without big-bang cutovers",
      "New capabilities layered onto what already runs",
    ],
  },
];

export const solutions = [
  {
    title: "Smart building IoT and hardware",
    description:
      "Connect property platforms to cameras, access control, sensors, keyless entry, and related devices through stable APIs — with dashboards and centralized device management across portfolios.",
    points: [
      "Hardware and building system integrations",
      "Real-time device status and alerts",
      "Portfolio-scale configuration and monitoring",
    ],
  },
  {
    title: "AI-powered real estate platforms",
    description:
      "Leasing assistants, automated communications, lead qualification, recommendations, and workflow automation that reduce manual load across the property lifecycle.",
    points: [
      "Conversational and leasing workflows",
      "Ops automation where it improves conversion",
      "Practical AI — not a feature sticker",
    ],
  },
  {
    title: "Data and analytics platforms",
    description:
      "A unified layer for property, financial, and building data — so operators and investors work from one source of truth with live analytics and portfolio insight.",
    points: [
      "Centralized property and ops data",
      "Investment and performance dashboards",
      "Pipelines that stay maintainable",
    ],
  },
  {
    title: "Property management and tenant platforms",
    description:
      "Software for rent, leases, maintenance, tenant communication, and amenity booking — the day-to-day operating system of a property business.",
    points: [
      "Lease and rent administration",
      "Maintenance and resident messaging",
      "Amenity and events workflows",
    ],
  },
  {
    title: "Real estate marketplaces",
    description:
      "Platforms that connect buyers, sellers, agents, and operators — search, transactions, compliance hooks, and mobile where the market expects it.",
    points: [
      "Marketplace architecture",
      "Search, filter, and transaction flows",
      "Mobile and compliance-ready paths",
    ],
  },
];

export const iotItems = [
  {
    title: "Access and security",
    description: "Keyless entry, cameras, and access-control systems tied into resident and operator workflows.",
  },
  {
    title: "Building sensors",
    description: "IoT telemetry into analytics, alerts, and operational dashboards for smarter building management.",
  },
  {
    title: "Secure key and device ops",
    description: "Device management patterns that keep hardware, identity, and property software in sync.",
  },
];

export const approachPoints = [
  {
    title: "Compliance-aware design",
    description:
      "Workflows and data handling shaped with real estate and privacy expectations in mind — Fair Housing awareness, GDPR/CCPA-ready patterns, and auditability where it matters.",
  },
  {
    title: "Security as default",
    description:
      "Access control, secure storage, and operational discipline for platforms that hold resident, payment, and building data.",
  },
  {
    title: "Multi-tenant by design",
    description:
      "Architectures that hold up when properties, tenants, and integrations multiply — not single-building demos.",
  },
  {
    title: "Live-ops modernization",
    description:
      "Phased upgrades so property managers and residents keep working while the platform improves underneath.",
  },
];

export const techStack = [
  {
    category: "Product engineering",
    items: ["React", "TypeScript", "Node.js", "Python", ".NET", "Java"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Swift", "Kotlin"],
  },
  {
    category: "IoT and hardware",
    items: ["AWS IoT", "Access control APIs", "Sensors", "Video and streaming"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Elasticsearch", "ETL pipelines"],
  },
  {
    category: "Integrations",
    items: ["MLS / IDX", "PMS systems", "Stripe", "Salesforce", "GraphQL"],
  },
  {
    category: "Delivery",
    items: ["Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
];

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  accent: ORANGE,
  actionLabel: "View",
  titleSize: "md",
  links: [
    {
      title: "Dedicated teams",
      href: "/engagement/dedicated-teams",
      description: "A lasting pod when proptech roadmaps run for years, not one release.",
    },
    {
      title: "Staff augmentation",
      href: "/engagement/staff-augmentation",
      description: "Add proptech-ready engineers into your existing delivery cadence.",
    },
    {
      title: "Cloud consulting",
      href: "/services/cloud-consulting",
      description: "Platform and migration advice for high-load property backends.",
    },
    {
      title: "Ecommerce",
      href: "/industries/ecommerce",
      description: "Marketplace and transaction craft when listing and checkout matter.",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: DEEP,
  items: [
    {
      question: "Do you build proptech platforms from scratch?",
      answer:
        "Yes. We support discovery through architecture, build, integrations, launch, and ongoing scaling — whether you’re forming an MVP or replacing a constrained off-the-shelf stack.",
    },
    {
      question: "Can you integrate cameras, locks, and building sensors?",
      answer:
        "Yes. Hardware-aware integrations — access control, cameras, sensors, and related devices — are a core part of smart building and resident experience work.",
    },
    {
      question: "Can you modernize a legacy PMS without downtime?",
      answer:
        "We use phased migration: re-architect APIs, upgrade frontends and services in stages, and keep property managers and residents productive during the transition.",
    },
    {
      question: "Which engagement model fits proptech best?",
      answer:
        "Staff augmentation to fill skill gaps, dedicated teams for long platform evolution, or project outsourcing for a scoped outcome. We’ll help pick based on ownership and timeline.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Talk about proptech software",
  backgroundColor: ORANGE,
  textColor: "#1C1917",
};

export const contact: InteriorContact = {
  accent: "orange",
};
