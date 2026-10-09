import type { InteriorContact, InteriorRelated, InteriorFaq, InteriorSticky } from "@/lib/interior";

export const CORAL = "#FF5A5F";
export const DEEP = "#1C1714";
export const SOFT = "#FFE0E1";

export const HERO_IMAGE = "/frontend-hero.jpg";
export const CTA_IMAGE = "/frontend-cta.jpg";

export const frontendServices = [
  {
    title: "Design systems",
    description:
      "Reusable components, tokens, and patterns that keep product UI consistent as features grow.",
  },
  {
    title: "Product UI",
    description:
      "Interaction-heavy interfaces for dashboards, accounts, and workflows — built for clarity under real use.",
  },
  {
    title: "Performance",
    description:
      "Faster loads, smoother interactions, and leaner delivery across browsers and screen sizes.",
  },
  {
    title: "Accessibility and QA",
    description:
      "Practical checks for usability, assistive contexts, visual regressions, and release confidence.",
  },
  {
    title: "Progressive web apps",
    description:
      "Installable, resilient web experiences that feel closer to native when the product needs that reach.",
  },
  {
    title: "Modernization",
    description:
      "Upgrade aging frontends, clean structure, and move to modern stacks without freezing delivery.",
  },
];

export const interfaceTypes = [
  {
    title: "Dashboards and admin",
    description:
      "Dense operational interfaces where hierarchy, scanability, and fast actions matter most.",
    points: ["Data-dense layouts", "Role-based views", "Action clarity"],
  },
  {
    title: "SaaS product UI",
    description:
      "Multi-view product experiences with accounts, settings, and feature modules that stay coherent.",
    points: ["Account flows", "Feature modules", "State and navigation"],
  },
  {
    title: "Marketing interfaces",
    description:
      "Campaign and brand surfaces where motion, storytelling, and conversion paths need precision.",
    points: ["Landing flows", "Responsive storytelling", "Lead capture UI"],
  },
  {
    title: "Design systems",
    description:
      "Shared UI foundations that help teams ship consistently across products and channels.",
    points: ["Component libraries", "Tokens and themes", "Usage guidance"],
  },
];

export const deliverySteps = [
  {
    title: "Planning",
    description:
      "Define what the interface needs to do for users, for the business, and for the systems behind it.",
  },
  {
    title: "Prototyping",
    description:
      "Shape flows and interaction early so design and engineering align before full build begins.",
  },
  {
    title: "Build",
    description:
      "Implement the UI with the stack that fits — clean components, responsive behavior, and reviewable progress.",
  },
  {
    title: "Polish",
    description:
      "Test, refine performance, accessibility, and edge cases so the release feels ready in real use.",
  },
];

export const principles = [
  {
    title: "Clarity",
    description:
      "Interfaces that communicate hierarchy, actions, and next steps without making users work for it.",
  },
  {
    title: "Speed",
    description:
      "Perceived and real performance treated as product quality — not a late optimization pass.",
  },
  {
    title: "Accessibility",
    description:
      "Usable across devices, input methods, and assistive contexts so more people can complete the job.",
  },
  {
    title: "Maintainability",
    description:
      "Component structure and patterns that stay easy to change as features and teams grow.",
  },
];

export const engagementModels = [
  {
    title: "Staff augmentation",
    description:
      "Embed frontend specialists for design-system work, product UI velocity, or a release that needs extra craft capacity.",
  },
  {
    title: "Dedicated frontend team",
    description:
      "A team that owns the interface end to end — design and build together, then keeps the system coherent as it grows.",
  },
  {
    title: "Project delivery",
    description:
      "A scoped redesign or new UI release with clear milestones from prototype through polished ship.",
  },
];

export const techStack = [
  {
    category: "What we ship with",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    lead: true,
  },
  {
    category: "Also in play",
    items: ["Vue", "Angular", "CSS Modules", "Component libraries"],
    lead: false,
  },
  {
    category: "Quality",
    items: ["Unit testing", "Visual checks", "Accessibility review", "Performance profiling"],
    lead: false,
  },
];

export const relatedServices = [
  {
    title: "Web development",
    description:
      "End-to-end web products — portals, ecommerce, and full delivery beyond the interface layer.",
    href: "/services/web-development",
  },
  {
    title: "Backend development",
    description: "APIs, auth, and data layers that power the interfaces your users see.",
    href: "/services/backend-development",
  },
  {
    title: "Mobile development",
    description: "Native and cross-platform apps when the experience needs to live beyond the browser.",
    href: "/services/mobile-development",
  },
];

export const faqs: InteriorFaq = {
  signColor: DEEP,
  items: [
  {
    question: "How is frontend different from your web development service?",
    answer:
      "Frontend focuses on interface craft — UI systems, interaction, performance, and accessibility. Web development covers broader product delivery including portals, ecommerce, and full-stack web scope.",
  },
  {
    question: "Do you design and build the frontend together?",
    answer:
      "Yes. Many engagements cover UX/UI and implementation as one path so design decisions stay grounded in what can ship cleanly.",
  },
  {
    question: "Can you work with our existing design system or codebase?",
    answer:
      "Yes. We often extend existing systems, clean up inconsistent patterns, or modernize parts of a frontend without a full rewrite.",
  },
],
};

export const hero = {
  title: "Frontend development services",
  lede:
    "Sofnology builds the interface layer — UI systems, interaction, and performance craft that make products feel clear and fast across devices.",
  image: HERO_IMAGE,
  imageAlt: "Designers collaborating on a colorful UI mockup on a tablet",
  imageClass: "object-cover object-[center_32%]",
  ctaLabel: "Start a Project",
  ctaHref: "#contact-form",
  ctaBackground: CORAL,
  ctaText: "#ffffff",
} as const;

export const cta = {
  title: "Looking for a frontend that feels clear and fast?",
  lede:
    "Tell us about the product, the audience, and the interface constraints. We’ll help shape a practical frontend path.",
  ctaLabel: "Tell us about your project",
  image: CTA_IMAGE,
  imageAlt: "Colleagues reviewing a vibrant frontend dashboard on a tablet",
  imageClass: "object-cover object-[center_28%]",
  panelBackground: DEEP,
  buttonBackground: CORAL,
  buttonText: "#ffffff",
} as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  accent: CORAL,
  actionLabel: "View service",
  columns: 3,
  titleSize: "lg",
  links: relatedServices,
};

export const sticky: InteriorSticky = {
  label: "Start a Project",
  backgroundColor: CORAL,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "coral",
};
