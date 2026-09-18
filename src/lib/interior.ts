import type { ContactAccent } from "@/lib/contact-accents";
import type { Faq, FaqVariant } from "@/components/sections/FaqSection";
import type { RelatedLink } from "@/components/sections/RelatedSection";

export type InteriorSticky = {
  href?: string;
  label: string;
  backgroundColor: string;
  textColor: string;
  pastHeroPx?: number;
};

export type InteriorContact = {
  accent?: ContactAccent;
  showIntro?: boolean;
};

export type InteriorRelated = {
  heading: string;
  links: readonly RelatedLink[];
  actionColor: string;
  accent?: string;
  actionLabel?: string;
  variant?: "cards" | "list";
  columns?: 3 | 4;
  titleSize?: "sm" | "md" | "mdTight" | "lg";
};

export type InteriorFaq = {
  items: readonly Faq[];
  signColor: string;
  variant?: FaqVariant;
  heading?: string;
  id?: string;
  lede?: string;
  collapsible?: boolean;
};

export type PageTheme = {
  accent: string;
  deep: string;
  soft?: string;
  ink?: string;
};
