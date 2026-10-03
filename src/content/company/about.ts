import type { InteriorContact, InteriorRelated, InteriorSticky } from "@/lib/interior";
import { SITE_EMAIL } from "@/lib/site";
import { brand } from "@/lib/theme";

export const NAVY = brand.navy;
export const ACCENT = brand.accent;
export const PRIMARY_CTA = "Start a Project";

export const PROMISE_IMAGE = "/enterprise-services.jpg";
export const JOURNEY_IMAGE = "/digital-growth.jpg";

export const hero = {
  title: "About Sofnology",
  lede:
    "Sofnology combines senior technical direction with flexible delivery teams. Core architecture and project ownership stay close to Sofnology, while specialized engineers and delivery partners can be added when a project requires specific expertise.",
  image: "/conversation.jpg",
  imageAlt: "Collaborative workspace conversation",
  imageClass: "object-cover object-[42%_35%]",
  eyebrow: "Sofnology",
  eyebrowColor: ACCENT,
  ctaLabel: "Start a Project",
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
  href: "/how-we-work",
  image: "/enterprise-services.jpg",
  imageAlt: "Engineering collaboration in a modern workspace",
} as const;

export const cta = {
  title: "Start a Project",
  lede:
    "Tell us what you want to build, improve, automate, or scale.",
  email: SITE_EMAIL,
  ctaLabel: "Start a Project",
  image: "/digital-growth.jpg",
  imageAlt: "Digital growth delivery — starting a Sofnology engagement",
} as const;

export const whyPoints = [
  {
    title: "Clarity",
    description: "The next step, the scope, and the trade-off should be understandable before the work grows.",
  },
  {
    title: "Ownership",
    description: "Sofnology keeps project ownership and communication, including when a specialist partner joins.",
  },
  {
    title: "Transparency",
    description: "Progress, blockers, and decisions stay visible. Confidential clients stay unnamed in public.",
  },
  {
    title: "Maintainability",
    description: "Handover, access, and documentation are part of the delivery, not an afterthought.",
  },
  {
    title: "Business outcomes",
    description: "The point of the system is the operation it improves, not a stack chosen for appearance.",
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
      href: "/how-we-work",
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
