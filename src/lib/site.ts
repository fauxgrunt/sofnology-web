export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sofnology.com";

export const SITE_NAME = "Sofnology Solutions";

export const DEFAULT_DESCRIPTION =
  "Sofnology builds technically flawless digital products, custom enterprise platforms, and automated workflows that eliminate operational friction.";

export const SITE_EMAIL = "sofnologysolutions@gmail.com";
export const SITE_LOCALITY = "Dhaka";
export const SITE_COUNTRY = "BD";

export const OG_IMAGE_ALT =
  "Sofnology Solutions — custom software, automation, and digital systems";
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
} as const;

/** Public routes for sitemap + internal linking */
export const SITE_ROUTES: Array<{ path: string; title: string; description: string }> = [
  {
    path: "/",
    title: "Enterprise Software & Automation Systems",
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: "/work",
    title: "All work",
    description:
      "Selected projects delivered by Sofnology and members of the delivery team. Confidential work stays anonymous.",
  },
  {
    path: "/company",
    title: "About Sofnology",
    description:
      "What Sofnology stands for: a services company for software, communication, and growth, held as one practice.",
  },
  {
    path: "/company/how-we-work",
    title: "How We Work",
    description:
      "Engagement models, delivery rhythm, and how Sofnology keeps software projects under control.",
  },
  {
    path: "/services/software-development",
    title: "Custom Software Development",
    description:
      "Custom software, SaaS platforms, and product engineering shaped around how your business operates.",
  },
  {
    path: "/services/web-development",
    title: "Web App Development",
    description:
      "Web products that help businesses present clearly, operate efficiently, and scale.",
  },
  {
    path: "/services/digital-marketing",
    title: "Digital Marketing",
    description:
      "Google Ads, SEO, tracking, and landing pages planned with the website they send people to.",
  },
  {
    path: "/services/mobile-development",
    title: "Mobile App Development",
    description: "iOS, Android, and cross-platform mobile products built for real use.",
  },
  {
    path: "/services/frontend-development",
    title: "Frontend Development",
    description: "Interfaces that stay clear, fast, and maintainable as products grow.",
  },
  {
    path: "/services/backend-development",
    title: "Backend Development",
    description: "APIs, services, and data systems that keep products reliable under load.",
  },
  {
    path: "/services/devops",
    title: "DevOps",
    description: "CI/CD, infrastructure, and delivery pipelines that keep releases predictable.",
  },
  {
    path: "/services/cloud-consulting",
    title: "Cloud Consulting",
    description: "Cloud architecture, migration, and platform reliability for growing products.",
  },
  {
    path: "/services/quality-assurance",
    title: "Quality Assurance",
    description: "QA strategy and automation that protect releases without slowing delivery.",
  },
  {
    path: "/services/cybersecurity",
    title: "Cybersecurity",
    description: "Security assessments and hardening for products that handle real business risk.",
  },
  {
    path: "/services/technologies",
    title: "Technologies",
    description: "The web, mobile, cloud, and AI stacks Sofnology uses to ship durable products.",
  },
  {
    path: "/industries/fintech",
    title: "Fintech Software",
    description: "Fintech platforms built for clarity, control, and operational rigor.",
  },
  {
    path: "/industries/ecommerce",
    title: "Ecommerce Software",
    description: "Commerce systems built for conversion and operations.",
  },
  {
    path: "/industries/foodtech",
    title: "Foodtech Software",
    description: "Food apps that keep orders, kitchens, and delivery moving.",
  },
  {
    path: "/industries/healthtech",
    title: "Healthtech Software",
    description: "Healthcare software grounded in security, compliance, and clinical reality.",
  },
  {
    path: "/industries/proptech",
    title: "Proptech Software",
    description: "Property and real-estate platforms for multi-tenant ops and scale.",
  },
  {
    path: "/industries/automotive",
    title: "Automotive Software",
    description: "Automotive software focused on clarity, control, and systems that hold up.",
  },
  {
    path: "/industries/edtech",
    title: "Edtech Software",
    description: "Education platforms for learners and institutions.",
  },
  {
    path: "/industries/adtech",
    title: "Adtech & Martech",
    description: "Marketing and adtech platforms that sharpen acquisition and brand presence.",
  },
  {
    path: "/how-we-work/project-based-delivery",
    title: "Project-Based Delivery",
    description: "A scoped outcome from discovery through release, with milestones, testing, and handover.",
  },
  {
    path: "/how-we-work/dedicated-development-team",
    title: "Dedicated Development Team",
    description: "A Sofnology team that stays on one product roadmap.",
  },
  {
    path: "/how-we-work/staff-augmentation",
    title: "Staff Augmentation",
    description: "Specialists added to a team that already runs delivery.",
  },
  {
    path: "/how-we-work/technical-consulting",
    title: "Technical Consulting",
    description: "Architecture, assessments, troubleshooting, planning, and technical direction.",
  },
  {
    path: "/how-we-work/managed-services",
    title: "Managed Services",
    description: "Sofnology operates agreed technical systems on a continuing basis.",
  },
  {
    path: "/how-we-work/ongoing-support",
    title: "Ongoing Support and Retainers",
    description: "Monthly maintenance, optimization, technical support, and infrastructure support.",
  },
];
