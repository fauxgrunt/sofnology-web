import type { InteriorContact, InteriorRelated, InteriorSticky } from "@/lib/interior";
import { SITE_EMAIL } from "@/lib/site";
import { brand } from "@/lib/theme";

export const NAVY = brand.navy;
export const ACCENT = brand.accent;
export const PRIMARY_CTA = "Start a Project";

export const hero = {
  title: "About Sofnology",
  lede:
    "Sofnology is a services company. Software, voice and telephony, automation, and digital marketing stay in one practice, so a client can understand the system, own it, and keep it.",
  image: "/about-sofnology.jpg",
  imageAlt: "Frosted glass panels in a white room, with one blue line of light passing through them",
  imageClass: "object-cover object-center",
  eyebrow: "Sofnology",
  eyebrowColor: ACCENT,
  ctaLabel: "Start a Project",
  ctaHref: "#contact-form",
  ctaBackground: NAVY,
  ctaText: "#ffffff",
} as const;

export const promiseCta = {
  title: "Pick the model that matches the job",
  lede:
    "A defined project, a team for a longer roadmap, a specialist added to your team, advice before a build, or a system we keep running.",
  ctaLabel: "How we work",
  href: "/how-we-work",
} as const;

export const cta = {
  title: "Start a Project",
  lede: "Tell us the software, the calls, the repeat work, or the marketing you want taken on.",
  email: SITE_EMAIL,
  ctaLabel: "Start a Project",
} as const;

export const whyPoints = [
  {
    title: "Clarity",
    description: "A system should be explainable to the people who run the business.",
  },
  {
    title: "One practice",
    description:
      "Software, voice and telephony, automation, and digital marketing are one company, judged by the same standard.",
  },
  {
    title: "Accountability",
    description:
      "You hire one company, and that company answers for the result. Sofnology stays responsible for the work you agreed to, so you always know who stands behind it.",
  },
  {
    title: "Restraint",
    description:
      "What we say in public is work a client can open and read.",
  },
  {
    title: "Continuity",
    description: "What is built is meant to remain in the client’s hands.",
  },
];

export const focusHeading = "Where clients start";
export const focusIntro =
  "Three kinds of work. Open the one that matches what you need done.";

export const focusAreas = [
  {
    title: "Software and products",
    description:
      "Your team is working around the tools. We build the software the business actually runs on.",
    href: "/services/software-development",
    action: "Software development",
  },
  {
    title: "Voice and automation",
    description:
      "Calls and repeat tasks are eating the day. We put that work into a system your people can trust.",
    href: "/services/ai-automation",
    action: "AI and automation",
  },
  {
    title: "Digital marketing",
    description:
      "The product is ready, and the right people are not finding it. Digital marketing stays with the same company that builds the product.",
    href: "/services/digital-marketing",
    action: "Digital marketing",
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
      description: "Six models for taking the work on.",
    },
    {
      title: "Our work",
      href: "/work",
      description: "Projects Sofnology has delivered.",
    },
    {
      title: "Software development",
      href: "/services/software-development",
      description: "Product engineering, from the first scope through release.",
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
