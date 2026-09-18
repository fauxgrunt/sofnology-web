import type { InteriorContact, InteriorRelated, InteriorSticky } from "@/lib/interior";
import { SITE_EMAIL } from "@/lib/site";
import { brand } from "@/lib/theme";

export const NAVY = brand.navy;
export const ACCENT = brand.accent;
export const PRIMARY_CTA = "Start a conversation";

export const PROMISE_IMAGE = "/enterprise-services.jpg";
export const JOURNEY_IMAGE = "/digital-growth.jpg";

export const hero = {
  title: "About us? No — what we do is about you",
  lede:
    "Every solution, every engagement, every team we assemble is built to put your product and your business first — with senior judgment and clear ownership, without a borrowed legacy story.",
  image: "/conversation.jpg",
  imageAlt: "Collaborative workspace conversation",
  imageClass: "object-cover object-[42%_35%]",
  eyebrow: "Sofnology",
  eyebrowColor: ACCENT,
  ctaLabel: "Get in touch",
  ctaHref: "#contact-form",
  ctaBackground: NAVY,
  ctaText: "#ffffff",
} as const;

export const promiseCta = {
  title: "See how we work",
  overlay: "Curious how we keep work under control?",
  lede:
    "Operating principles, delivery stages, and the promise we fold into every engagement — without a manifesto page or a leadership roster.",
  ctaLabel: "Learn how we work",
  href: "/company/how-we-work",
  image: "/enterprise-services.jpg",
  imageAlt: "Engineering collaboration in a modern workspace",
} as const;

export const cta = {
  title: "Ready to start a conversation?",
  lede:
    "Email us or use the form — we’ll take it from there, in person or online, as the engagement needs.",
  email: SITE_EMAIL,
  ctaLabel: "Start a conversation",
  image: "/digital-growth.jpg",
  imageAlt: "Digital growth delivery — starting a Sofnology engagement",
} as const;

export const whyPoints = [
  {
    title: "We exist to ship your product",
    description:
      "Sofnology connects business goals with engineering that can actually deliver — custom software, digital products, and teams that stay close to outcomes.",
  },
  {
    title: "Trust from how work runs",
    description:
      "Senior-led decisions, visible milestones, and production-minded architecture — not invented years, awards, or headcount.",
  },
  {
    title: "Your success stays; the build evolves",
    description:
      "We design for handover and maintainability so the business stays in control after go-live, not locked into tribal knowledge.",
  },
];

export const focusAreas = [
  {
    title: "Custom software",
    description:
      "Platforms shaped to how your business runs — not a forced off-the-shelf template.",
  },
  {
    title: "Digital products",
    description:
      "Web, mobile, and backend systems built to ship, scale, and stay maintainable.",
  },
  {
    title: "Engineering partnerships",
    description:
      "Dedicated teams, staff augmentation, and project delivery with clear ownership.",
  },
];

export const conversationSteps = [
  {
    title: "Start by email or form",
    description:
      "Share the problem, the product, or the constraint. Early contact stays simple — no need to meet a full cast on day one.",
  },
  {
    title: "Discovery conversation",
    description:
      "A focused call or in-person meeting to clarify goals, scope shape, and whether we’re the right fit.",
  },
  {
    title: "Then the right people join",
    description:
      "Once the engagement is scoped, the engineers and leads on your work are introduced — when it matters, not for a public roster.",
  },
];

export const related: InteriorRelated = {
  heading: "Keep exploring",
  actionColor: ACCENT,
  accent: ACCENT,
  actionLabel: "View",
  columns: 3,
  titleSize: "md",
  links: [
    {
      title: "How we work",
      href: "/company/how-we-work",
      description: "Operating principles, stages, and the habits behind every engagement.",
    },
    {
      title: "Dedicated teams",
      href: "/engagement/dedicated-teams",
      description: "A lasting pod when the roadmap runs longer than a single project.",
    },
    {
      title: "Software development",
      href: "/services/software-development",
      description: "End-to-end product engineering from discovery through release.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: PRIMARY_CTA,
  backgroundColor: NAVY,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "navy",
};
