import type { InteriorContact, InteriorFaq, InteriorSticky } from "@/lib/interior";

export const AMBER = "#E8A317";
export const DEEP = "#1C1710";
export const SOFT = "#F3E6C8";

export const HERO_IMAGE = "/devops-hero.jpg";
export const CTA_IMAGE = "/devops-cta.jpg";

export const devopsServices = [
  {
    title: "DevOps strategy advisory",
    description:
      "Assess delivery setup, goals, and constraints, then shape a practical roadmap for CI/CD, environments, tooling, and ownership.",
  },
  {
    title: "CI/CD implementation",
    description:
      "Set up continuous integration and deployment so changes are validated early and releases rely less on manual steps.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Define environments as code so infrastructure can be created, reviewed, versioned, and reproduced consistently.",
  },
  {
    title: "Cloud and migration support",
    description:
      "Plan and support AWS, Azure, or GCP delivery work with attention to reliability, cost, and operational readiness.",
  },
  {
    title: "Pipeline optimization",
    description:
      "Find bottlenecks in existing workflows and improve automation so builds, tests, and deployments become repeatable.",
  },
  {
    title: "DevSecOps integration",
    description:
      "Fold scanning, access control, and secrets handling into delivery without freezing release speed.",
  },
];

export const pipelineStages = [
  {
    title: "Planning",
    description:
      "Clarify goals, delivery bottlenecks, toolchain choices, and a phased roadmap your team can actually execute.",
  },
  {
    title: "Coding and version control",
    description:
      "Strengthen branching, reviews, standards, and collaboration so code changes stay visible and manageable.",
  },
  {
    title: "Continuous integration",
    description:
      "Automate build and validation so every meaningful change is checked early for quality and breakage.",
  },
  {
    title: "Continuous testing",
    description:
      "Wire automated checks into the pipeline so feedback arrives while changes are still cheap to fix.",
  },
  {
    title: "Continuous deployment",
    description:
      "Reduce manual release risk with consistent deployment paths, environment parity, and clearer rollback options.",
  },
  {
    title: "Monitoring and improvement",
    description:
      "Add visibility into health, failures, and delivery metrics so operations feed the next improvement cycle.",
  },
];

export const engagementModels = [
  {
    title: "DevOps from scratch",
    pain: "No reliable pipeline yet",
    description:
      "Build a first CI/CD foundation, environment structure, and operating rhythm for delivery.",
  },
  {
    title: "Revamp and optimization",
    pain: "Shipping, but noisy and fragile",
    description:
      "Clean up pipelines, reduce failures, improve visibility, and cut unnecessary cloud waste.",
  },
  {
    title: "Embedded DevOps support",
    pain: "Need capacity without hiring delay",
    description:
      "Add focused DevOps help for implementation, handover, and ongoing improvement inside your team.",
  },
];

export const techStack = [
  {
    category: "Cloud",
    items: ["AWS", "Azure", "Google Cloud", "Hybrid-ready setups"],
  },
  {
    category: "CI/CD",
    items: ["GitHub Actions", "GitLab CI", "Jenkins", "Azure DevOps"],
  },
  {
    category: "Containers",
    items: ["Docker", "Kubernetes", "Container registries"],
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "CloudFormation", "Ansible"],
  },
  {
    category: "Monitoring",
    items: ["CloudWatch", "Datadog-ready setups", "Prometheus", "Logging baselines"],
  },
  {
    category: "Security in delivery",
    items: ["SAST/DAST checks", "Secrets management", "Access controls", "Dependency scanning"],
  },
];

export const faqs: InteriorFaq = {
  signColor: DEEP,
  variant: "roomy",
  items: [
  {
    question: "Do you support cloud and hybrid setups?",
    answer:
      "Yes. We can help with cloud-first delivery, hybrid environments, and practical modernization paths based on what your team already runs.",
  },
  {
    question: "How long does a DevOps engagement usually take?",
    answer:
      "A focused CI/CD or environment improvement can take a few weeks. Broader operating-model work usually needs a longer phased roadmap.",
  },
  {
    question: "Will you work with our existing tools?",
    answer:
      "Wherever possible, yes. We prefer improving what you already use before introducing a new toolchain, unless the current stack is the bottleneck.",
  },
  {
    question: "How does this connect to cybersecurity?",
    answer:
      "DevOps work often includes secure delivery practices. For deeper audits and risk assessments, we can connect that work with Sofnology’s cybersecurity services.",
  },
],
};

export const hero = {
  title: "DevOps consulting services",
  lede:
    "Sofnology helps teams connect development and operations with clearer pipelines, more reliable releases, and practical cloud automation — so delivery gets faster without becoming fragile.",
  image: HERO_IMAGE,
  imageAlt: "DevOps pipeline visual with amber accents",
  imageClass: "object-cover object-center",
  ctaLabel: "Get in touch",
  ctaHref: "#contact",
  ctaBackground: DEEP,
  ctaText: "#ffffff",
  ctaArrowColor: AMBER,
} as const;

export const cta = {
  title: "Looking for the right DevOps path for your project?",
  lede:
    "We can help assess your current delivery setup, recommend high-impact improvements, and build a roadmap your team can own.",
  ctaLabel: "Speak with a DevOps specialist",
  image: CTA_IMAGE,
  imageAlt: "DevOps infrastructure stack visual",
  panelBackground: DEEP,
  buttonBackground: AMBER,
  buttonText: "#101413",
} as const;

export const sticky: InteriorSticky = {
  label: "Get in touch",
  backgroundColor: AMBER,
  textColor: "#101413",
};

export const contact: InteriorContact = {
  accent: "amber",
};
