import type { InteriorContact, InteriorFaq, InteriorSticky } from "@/lib/interior";
import { brand } from "@/lib/theme";

export const BLUE = brand.accent;
export const DEEP = "#0E1A3A";
export const SOFT = "#DCE7FF";

export const hero = {
  title: "Web app development services",
  lede:
    "Sofnology designs and builds web products that help businesses present clearly, operate efficiently, and scale — from marketing sites to portals, SaaS apps, and ecommerce experiences.",
  image: "/web-dev-hero.jpg",
  imageAlt: "Web development product visual with electric blue accents",
  imageClass: "object-cover object-center",
  ctaLabel: "Get in touch",
  ctaHref: "#contact",
  ctaBackground: DEEP,
  ctaText: "#ffffff",
  ctaArrowColor: BLUE,
} as const;

export const cta = {
  title: "Let’s build the right web product",
  lede:
    "A new site, portal, ecommerce flow, or product web app — we’ll help shape a clear delivery path.",
  ctaLabel: "Contact us",
  image: "/web-dev-cta.jpg",
  imageAlt: "Web development stack visual with blue accents",
  panelBackground: DEEP,
  buttonBackground: BLUE,
  buttonText: "#ffffff",
} as const;

export const webServices = [
  {
    title: "UI/UX design",
    description:
      "Clear flows, clean interfaces, and brand-aligned screens that make the product easy to understand and use.",
  },
  {
    title: "Frontend development",
    description:
      "Fast, responsive interfaces built to feel polished across devices while staying maintainable for future changes.",
  },
  {
    title: "Backend development",
    description:
      "Secure APIs, data models, auth, and business logic that support the product as usage and features grow.",
  },
  {
    title: "Integration services",
    description:
      "Connect payments, CRMs, analytics, booking tools, and internal systems so the web product fits your real workflow.",
  },
  {
    title: "QA and testing",
    description:
      "Practical checks across critical paths, devices, and releases so the product stays stable as it ships.",
  },
  {
    title: "Modernization and refinement",
    description:
      "Improve older websites and apps through UX cleanup, performance work, architecture updates, or staged rebuilds.",
  },
] as const;

export const solutionTypes = [
  {
    title: "Web portals",
    description:
      "Client, partner, or internal portals connected to your existing systems and day-to-day operations.",
    points: ["Role-based access", "System integrations", "Operational dashboards"],
  },
  {
    title: "SaaS and product web apps",
    description:
      "Multi-user product experiences with accounts, dashboards, permissions, and scalable feature delivery.",
    points: ["Account systems", "Feature modules", "Admin controls"],
  },
  {
    title: "CMS-driven sites",
    description:
      "Content systems that make publishing, updates, and SEO work manageable for marketing and ops teams.",
    points: ["Editable content", "SEO structure", "Campaign pages"],
  },
  {
    title: "Ecommerce",
    description:
      "Stores, catalogs, checkout flows, and order journeys built around conversion and operational clarity.",
    points: ["Catalog and cart", "Checkout flows", "Order visibility"],
  },
  {
    title: "Custom websites",
    description:
      "Marketing sites and service websites that present the brand clearly and support lead generation.",
    points: ["Brand presentation", "Lead capture", "Service storytelling"],
  },
] as const;

export const workSteps = [
  {
    title: "Gathering requirements",
    description:
      "Clarify goals, users, constraints, timeline, and the right delivery shape before design or build begins.",
  },
  {
    title: "UI/UX",
    description:
      "Map journeys and design interfaces that reinforce the brand while staying practical for real users.",
  },
  {
    title: "Development",
    description:
      "Build frontend, backend, integrations, permissions, and core features in reviewable increments.",
  },
  {
    title: "Testing",
    description:
      "Validate critical flows, responsiveness, and release readiness so launch does not become guesswork.",
  },
  {
    title: "Support and maintenance",
    description:
      "Continue with improvements, fixes, and planned updates after the first release is live.",
  },
] as const;

export const industries = [
  {
    title: "Professional services",
    description:
      "Service businesses need clear positioning online and practical tools behind the scenes for intake, booking, and client access.",
    outcomes: ["Service website", "Client portal", "Booking and intake flows"],
  },
  {
    title: "Ecommerce and retail",
    description:
      "Retail teams need catalogs and checkout that convert, plus operational visibility when traffic and promotions spike.",
    outcomes: ["Storefront", "Checkout", "Order tracking"],
  },
  {
    title: "Healthcare operations",
    description:
      "Healthcare websites and tools should reduce friction for patients while keeping internal coordination simple and secure.",
    outcomes: ["Appointment flows", "Patient-facing pages", "Internal coordination"],
  },
  {
    title: "Education",
    description:
      "Education products need structured content, clear program journeys, and portals that support students and staff.",
    outcomes: ["Learning portals", "Resource hubs", "Program management"],
  },
  {
    title: "Finance and fintech",
    description:
      "Finance experiences need trusted interfaces, secure account flows, and dashboards that stay clear under real usage.",
    outcomes: ["Secure dashboards", "Account flows", "Customer web tools"],
  },
] as const;

export const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "Authentication", "Admin panels"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Structured content models"],
  },
  {
    category: "Delivery",
    items: ["Vercel", "CI/CD-ready workflows", "Hosting guidance", "Performance review"],
  },
] as const;

export const faqs: InteriorFaq = {
  signColor: DEEP,
  items: [
    {
      question: "Do you rebuild existing websites?",
      answer:
        "Yes. We can modernize an existing site through redesign, performance work, staged rebuilds, or a full replacement when the current foundation is holding the business back.",
    },
    {
      question: "Should we use a CMS or a fully custom build?",
      answer:
        "It depends on who needs to update content and how complex the product is. Marketing sites often benefit from a CMS; portals and SaaS products usually need a custom application layer.",
    },
    {
      question: "How long does a focused web MVP take?",
      answer:
        "A focused first release can often be shaped in a few weeks once scope is clear. Larger portals, ecommerce systems, or multi-role products need a longer phased roadmap.",
    },
  ],
};

export const sticky: InteriorSticky = {
  label: "Get in touch",
  backgroundColor: BLUE,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "blue",
};
