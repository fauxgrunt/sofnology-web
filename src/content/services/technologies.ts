import { brand } from "@/lib/theme";
import type { InteriorContact, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const LIME = "#C7FF3D";
export const INK = "#101413";
export const VIOLET = "#6B5B95";
export const PRIMARY_CTA = "Talk about your stack";

/** One appearance each. */
export const HERO_IMAGE = "/technologies-hero.jpg";
export const MID_IMAGE = "/technologies-mid.jpg";

export const stacks = [
  {
    title: "Frontend",
    href: "/services/frontend-development",
    groups: [
      {
        label: "Frameworks & libraries",
        items: "React, Next.js, Vue, Angular, TypeScript, JavaScript",
      },
      {
        label: "Styling & UI",
        items: "CSS, Tailwind, Material UI, Ant Design, Styled Components",
      },
      {
        label: "APIs & data",
        items: "GraphQL, REST, WebSocket",
      },
    ],
  },
  {
    title: "Backend",
    href: "/services/backend-development",
    groups: [
      {
        label: "Languages",
        items: "Python, Node.js, Java, Go, C#, PHP, Ruby",
      },
      {
        label: "Frameworks",
        items: "Django, Express, Spring, .NET, Rails, NestJS",
      },
      {
        label: "Data & APIs",
        items: "PostgreSQL, MySQL, MongoDB, Redis, REST, GraphQL, microservices",
      },
    ],
  },
  {
    title: "Cloud",
    href: "/services/cloud-consulting",
    groups: [
      {
        label: "Platforms",
        items: "AWS, Azure, Google Cloud",
      },
      {
        label: "Serverless & containers",
        items: "Lambda, Cloud Functions, Kubernetes, Docker, ECS",
      },
      {
        label: "Delivery models",
        items: "IaaS, PaaS, SaaS foundations",
      },
    ],
  },
  {
    title: "Mobile",
    href: "/services/mobile-development",
    groups: [
      {
        label: "Native",
        items: "Swift, SwiftUI, Kotlin, Java",
      },
      {
        label: "Cross-platform",
        items: "React Native, Flutter",
      },
    ],
  },
  {
    title: "UI / UX design",
    href: "/services/frontend-development",
    groups: [
      {
        label: "Design",
        items: "Figma, Sketch, Adobe XD",
      },
      {
        label: "Research & insight",
        items: "Miro, analytics-informed flows, usability reviews",
      },
    ],
  },
  {
    title: "QA and testing",
    href: "/services/quality-assurance",
    groups: [
      {
        label: "Automation",
        items: "Playwright, Cypress, Selenium, Appium, Pytest",
      },
      {
        label: "CI & performance",
        items: "GitHub Actions, Jenkins, JMeter, API testing with Postman / REST tools",
      },
    ],
  },
  {
    title: "DevOps",
    href: "/services/devops",
    groups: [
      {
        label: "CI/CD & IaC",
        items: "GitHub Actions, GitLab CI, Jenkins, Terraform, CloudFormation",
      },
      {
        label: "Containers & ops",
        items: "Docker, Kubernetes, monitoring with Prometheus / cloud-native tooling",
      },
      {
        label: "Security practices",
        items: "SAST/DAST-minded pipelines, OWASP-aligned habits",
      },
    ],
  },
];

export const emerging = [
  {
    title: "AI / ML",
    href: "/engagement/solutions-for-ai-companies",
    items: "Python, TensorFlow, PyTorch, scikit-learn, NLP tooling, computer vision libraries",
  },
  {
    title: "Data science",
    items: "Spark, Kafka, MLOps basics, cloud ML platforms, vector search where the product needs it",
  },
  {
    title: "Blockchain",
    items: "Ethereum and related tooling when the use case is real — not a buzzword bolt-on",
  },
  {
    title: "AR / VR",
    items: "Unity-led experiences and immersive scenarios when learning or product needs spatial practice",
  },
];

export const capabilities = [
  { title: "Frontend", href: "/services/frontend-development" },
  { title: "Backend", href: "/services/backend-development" },
  { title: "Cloud", href: "/services/cloud-consulting" },
  { title: "Mobile", href: "/services/mobile-development" },
  { title: "QA", href: "/services/quality-assurance" },
  { title: "DevOps", href: "/services/devops" },
  { title: "AI & automation", href: "/engagement/solutions-for-ai-companies" },
  { title: "Cybersecurity", href: "/services/cybersecurity" },
];

export const scenarios = [
  {
    title: "Consulting",
    description:
      "Unsure which stack fits — or stuck on performance, scale, or cloud spend? We help choose and course-correct before you overbuild.",
    href: "#contact-form",
    cta: "Start a tech conversation",
  },
  {
    title: "Staff augmentation",
    description:
      "Need specialized capacity fast? Engineers who plug into your tools and rituals — without inventing a fake “CVs in 48 hours” guarantee.",
    href: "/engagement/staff-augmentation",
    cta: "View staff augmentation",
  },
  {
    title: "Dedicated teams",
    description:
      "Multiple roles around one product — analysts, design, engineering, QA, DevOps — focused entirely on your roadmap.",
    href: "/engagement/dedicated-teams",
    cta: "View dedicated teams",
  },
  {
    title: "Project-based engagement",
    description:
      "Entrust delivery end-to-end — scope, build, quality, and communication — while you stay on the business.",
    href: "/engagement/project-outsourcing",
    cta: "View project outsourcing",
  },
];

export const platformLanes = [
  {
    title: "Cloud platforms",
    description:
      "AWS, Azure, and Google Cloud — architecture, migration, and day-two operations when the product needs a real cloud footing.",
    href: "/services/cloud-consulting",
    chips: ["AWS", "Azure", "Google Cloud"],
  },
  {
    title: "Enterprise platforms",
    description:
      "CRM, collaboration, and enterprise system integrations — wired into your product without claiming partner badges we don’t hold.",
    href: "#contact-form",
    chips: ["CRM integrations", "Collaboration suites", "ERP-adjacent APIs", "Identity & SSO"],
  },
];

export const relatedLinks = [
  {
    title: "Frontend development",
    href: "/services/frontend-development",
    description: "Interfaces and client apps shaped for real users and real release cadence.",
  },
  {
    title: "Backend development",
    href: "/services/backend-development",
    description: "APIs, data, and services that carry the product under load.",
  },
  {
    title: "Cloud consulting",
    href: "/services/cloud-consulting",
    description: "Platforms and operations that match how you actually ship.",
  },
  {
    title: "Solutions for AI companies",
    href: "/engagement/solutions-for-ai-companies",
    description: "When the stack includes ML, data pipelines, and productized AI features.",
  },
];

export const hero = {
  title: "Our software development technologies",
  lede:
    "Battle-tested web and mobile stacks through AI, data, and cloud tooling — chosen for the product you need to ship, not for a kitchen-sink résumé.",
  image: HERO_IMAGE,
  imageAlt: "Abstract modular technology forms in violet and lime",
  imageClass: "scale-[1.02] object-cover object-[60%_45%]",
  ctaLabel: "Get in touch",
  ctaHref: "#contact-form",
  ctaBackground: LIME,
  ctaText: INK,
  eyebrow: "Sofnology",
  eyebrowColor: LIME,
  minHeightClass: "min-h-[320px] sm:min-h-[400px] md:min-h-[520px] lg:min-h-[620px]",
  gradientClass: "absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent",
  titleClass:
    "mt-3 text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.055em] sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.4rem]",
} as const;

export const cta = {
  title: "Get the edge now",
  lede:
    "Leverage Sofnology tech expertise to shape the stack — and the engagement model — that fits your product today.",
  ctaLabel: "Choose your collaboration scenario",
  stripLabel: "All cases",
  stripHref: "/#engagement-paths",
  panelBackground: VIOLET,
  buttonBackground: LIME,
  buttonText: INK,
} as const;

export const related: InteriorRelated = {
  heading: "Related services",
  actionColor: INK,
  accent: LIME,
  actionLabel: "View",
  links: relatedLinks,
};

export const sticky: InteriorSticky = {
  label: PRIMARY_CTA,
  backgroundColor: brand.navy,
  textColor: "#101413",
};

export const contact: InteriorContact = {
  accent: "lime",
};
