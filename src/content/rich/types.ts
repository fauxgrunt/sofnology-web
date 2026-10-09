import type { ContactAccent } from "@/lib/contact-accents";

export type RichTone = {
  deep: string;
  soft: string;
  accent: string;
  ink: string;
  contact: ContactAccent;
};

export type RichCard = { title: string; description: string };
export type RichStage = { title: string; description: string };
export type RichEngagement = { title: string; pain: string; description: string };
export type RichStack = { category: string; items: string[] };
export type RichFaq = { question: string; answer: string };
export type RichStrip = { eyebrow: string; title: string; lede: string; href: string; label: string };

export type RichPage = {
  path: string;
  title: string;
  description: string;
  tone: RichTone;
  heroLayout: "cta-first" | "image-first";
  hero: {
    title: string;
    lede: string;
    image: string;
    imageAlt: string;
    ctaLabel: string;
  };
  services: { title: string; lede: string; items: RichCard[] };
  stages?: { title: string; lede: string; items: RichStage[] };
  engagements?: { title: string; lede: string; items: RichEngagement[] };
  stack?: { title: string; lede: string; items: RichStack[] };
  workSlugs?: string[];
  workHref?: string;
  strip?: RichStrip;
  cta: { title: string; lede: string; ctaLabel: string; image: string; imageAlt: string };
  faqs: RichFaq[];
};
