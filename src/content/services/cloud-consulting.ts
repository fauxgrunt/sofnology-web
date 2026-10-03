import type { InteriorContact, InteriorRelated, InteriorFaq, InteriorSticky } from "@/lib/interior";

export const SKY = "#0EA5E9";
export const DEEP = "#0C4A6E";
export const SOFT = "#E0F2FE";
export const PRIMARY_CTA = "Start a conversation";

export const HERO_IMAGE = "/cloud-hero.jpg";
export const MID_IMAGE = "/cloud-mid.jpg";
export const CTA_IMAGE = "/cloud-cta.jpg";

export const benefits = [
  {
    title: "Navigate digital transformation",
    description:
      "Use cloud as a practical lever for products and operations — not a vague modernization slogan.",
  },
  {
    title: "Address migration risk",
    description:
      "Plan dependencies, data moves, and cutover paths so downtime and integrity issues stay contained.",
  },
  {
    title: "Security and compliance posture",
    description:
      "Build encryption, identity, governance, and evidence into the design — not as an afterthought.",
  },
  {
    title: "Choose the right vendor mix",
    description:
      "Compare AWS, Azure, GCP, or hybrid options against performance, cost, lock-in, and team capacity.",
  },
  {
    title: "Maximize performance and cost",
    description:
      "Tune configuration, resources, and architecture so spend tracks value instead of sprawl.",
  },
];

export const consultingServices = [
  {
    title: "Cloud strategy consulting",
    description:
      "Review infrastructure, apps, and workflows, then shape an actionable roadmap from first implementation through later optimization — including when serverless fits.",
  },
  {
    title: "Cloud app development consulting",
    description:
      "Advise on designing and refining cloud-based apps: model choice (IaaS, PaaS, SaaS), deployment approach, resource use, and scalable architecture decisions.",
  },
  {
    title: "Cloud migration consulting",
    description:
      "Plan moves to public, hybrid, or multi-cloud with clear dependency mapping, data strategy, and risk controls for a smoother cutover.",
  },
  {
    title: "Cloud security advisory",
    description:
      "Guide governance, access, and compliance practices suited to your domain so cloud surfaces stay defensible as they grow.",
  },
  {
    title: "Infrastructure assessment and optimization",
    description:
      "Find waste and bottlenecks, improve utilization, and strengthen continuity with disaster recovery and workload adaptability.",
  },
  {
    title: "Training and change management",
    description:
      "Equip your team to operate what you build — so the cloud estate stays maintainable as standards and demand change.",
  },
];

export const vendorFactors = [
  {
    title: "Technology roadmap",
    description: "Vendor direction should match your longer-term product and platform goals.",
  },
  {
    title: "Security and trust",
    description: "How data is protected, audited, and controlled in practice — not just on paper.",
  },
  {
    title: "Reliability and performance",
    description: "Operational quality that customers and internal teams actually feel.",
  },
  {
    title: "Scalability and flexibility",
    description: "Room to grow and reshape workloads without painful redesigns every quarter.",
  },
  {
    title: "Integration and lock-in",
    description: "How cleanly services connect today — and how hard exit or multi-cloud would be later.",
  },
  {
    title: "Cost, SLAs, and support",
    description: "Pricing model, contracts, and migration support that match how you buy and operate.",
  },
];

export const platforms = [
  {
    title: "AWS",
    description:
      "Strong breadth for product platforms, data workloads, and teams that want deep service coverage with clear growth paths.",
  },
  {
    title: "Azure",
    description:
      "A natural fit when Microsoft estates, identity, and enterprise tooling already sit at the center of operations.",
  },
  {
    title: "Google Cloud",
    description:
      "Compelling for data, analytics, and teams that want clean Kubernetes and modern app delivery patterns.",
  },
];

export const deliverables = [
  {
    title: "Cloud assessment and readiness",
    description: "A clear read on current setup, gaps, and what must change before adoption accelerates.",
  },
  {
    title: "Business-aligned cloud strategy",
    description: "Documentation that ties cloud work to product, cost, and operating goals.",
  },
  {
    title: "Model and vendor guidance",
    description: "Practical recommendations on IaaS / PaaS / SaaS and which providers fit best.",
  },
  {
    title: "Migration blueprint",
    description: "A phased roadmap for moving workloads with controlled risk and visible dependencies.",
  },
  {
    title: "Security framework",
    description: "A baseline strategy for protecting cloud environments as they expand.",
  },
  {
    title: "Optimization and efficiency plan",
    description: "Ongoing tactics for cost, performance, and continuous improvement after go-live.",
  },
];

export const advantages = [
  {
    title: "Cost efficiency",
    description:
      "Pay for what you use, reduce heavy upfront infrastructure spend, and align cost with real demand.",
  },
  {
    title: "Flexibility",
    description:
      "Adjust capacity quickly without waiting on hardware cycles or long procurement loops.",
  },
  {
    title: "Accessibility",
    description:
      "Give distributed teams reliable access to systems and data from the devices they already use.",
  },
  {
    title: "Stronger security baseline",
    description:
      "Modern identity, encryption, and monitoring patterns that are easier to standardize at scale.",
  },
  {
    title: "Faster time-to-market",
    description:
      "Test and ship without hardware constraints — then integrate and update with less friction.",
  },
  {
    title: "Operational resilience",
    description:
      "Backup, recovery, and continuity options that reduce the blast radius of outages and incidents.",
  },
];

export const techStack = [
  {
    category: "Cloud providers",
    items: ["AWS", "Azure", "Google Cloud Platform", "Hybrid and multi-cloud"],
  },
  {
    category: "Serverless",
    items: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"],
  },
  {
    category: "Containers and orchestration",
    items: ["Docker", "Kubernetes", "EKS / AKS / GKE", "ECS"],
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "CloudFormation", "Pulumi-ready setups"],
  },
  {
    category: "CI/CD and delivery",
    items: ["GitHub Actions", "GitLab CI", "Azure DevOps", "Jenkins"],
  },
  {
    category: "Data and platforms",
    items: ["Managed databases", "Object storage", "Messaging", "Observability baselines"],
  },
];

export const relatedLinks = [
  {
    title: "DevOps",
    href: "/services/devops",
    description: "Pipelines, environments, and delivery mechanics that make cloud changes repeatable.",
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Deeper assessments when cloud risk and compliance need dedicated review.",
  },
  {
    title: "Software development",
    href: "/services/software-development",
    description: "Build cloud-ready products with architecture that can actually scale.",
  },
];

export const faqs: InteriorFaq = {
  signColor: DEEP,
  variant: "roomy",
  items: [
  {
    question: "Do you recommend one cloud vendor only?",
    answer:
      "No. We help you choose AWS, Azure, GCP, or a mix based on workloads, team skills, cost, and lock-in — not a preferred reseller pitch.",
  },
  {
    question: "How is this different from DevOps?",
    answer:
      "Cloud consulting focuses on strategy, migration, platforms, and architecture choices. DevOps focuses on how you deliver and operate changes day to day. Many engagements use both.",
  },
  {
    question: "Can you help if we already run in the cloud?",
    answer:
      "Yes. Optimization, security posture, cost control, and modernization of existing estates are common starting points.",
  },
  {
    question: "Do you cover serverless?",
    answer:
      "Yes — as part of strategy and architecture decisions where event-driven or function-based patterns reduce cost and ops load without creating hidden complexity.",
  },
],
};

export const hero = {
  title: "Cloud consulting services",
  lede:
    "Cut through cloud complexity with clear advisory across migration, integration, modernization, and cloud-native apps — so performance and cost move in the right direction.",
  image: HERO_IMAGE,
  imageAlt: "Surreal cloud consulting visual with ladders reaching into the sky",
  imageClass: "scale-[1.04] object-cover object-[55%_40%]",
  ctaLabel: PRIMARY_CTA,
  ctaHref: "#contact-form",
  ctaBackground: DEEP,
  ctaText: "#ffffff",
  ctaArrowColor: SKY,
  ctaMaxWidth: "max-w-[15rem] leading-tight md:max-w-[17rem]",
  titleClass:
    "max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.1rem]",
} as const;

export const cta = {
  title: "Considering a move to the cloud?",
  lede:
    "Let Sofnology cloud consultants analyze your needs and design a practical integration strategy your team can own.",
  ctaLabel: PRIMARY_CTA,
  image: CTA_IMAGE,
  imageAlt: "Cloud consulting CTA visual with geometric stairs and sky",
  imageClass: "scale-[1.05] object-cover object-[40%_45%]",
  panelBackground: DEEP,
  buttonBackground: SKY,
  buttonText: "#0C4A6E",
} as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  variant: "list",
  columns: 3,
  links: relatedLinks,
};

export const sticky: InteriorSticky = {
  label: PRIMARY_CTA,
  backgroundColor: DEEP,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "sky",
};
