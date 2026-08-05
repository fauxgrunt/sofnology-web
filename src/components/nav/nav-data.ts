export type MenuId = "expertise" | "industries" | "engagement" | "company";

export type MenuLayout = "columns-banner" | "list-promo" | "columns";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavColumn {
  heading: string;
  links: NavLink[];
}

export interface PromoCard {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
}

export interface BottomBanner {
  text: string;
  cta: string;
  href: string;
}

export interface MegaMenuConfig {
  layout: MenuLayout;
  columns?: NavColumn[];
  links?: NavLink[];
  promo?: PromoCard;
  banner?: BottomBanner;
}

export interface NavItemConfig {
  id: string;
  label: string;
  href: string;
  menu?: MenuId;
}

export const navItems: NavItemConfig[] = [
  { id: "expertise", label: "Services", href: "/#expertise", menu: "expertise" },
  { id: "industries", label: "Industries", href: "/industries/fintech", menu: "industries" },
  {
    id: "engagement",
    label: "Engagement models",
    href: "/#start-your-growth",
    menu: "engagement",
  },
  { id: "portfolio", label: "Case Studies", href: "/#case-studies" },
  { id: "company", label: "Company", href: "/company", menu: "company" },
];

/**
 * Nav backlog (planned full pages — not built yet):
 * - Company: partnerships, testimonials page, newsroom, blog (defer until real content)
 * - Game / AI industry pages (optional later; Other industries hub removed)
 *
 * Built:
 * - /services/technologies
 * - /company (Who we are)
 * - /company/how-we-work
 * - /industries/edtech
 * - /industries/adtech
 * - /industries/healthtech
 * - /industries/proptech
 * - /industries/automotive
 * - /engagement/staff-augmentation
 * - /engagement/dedicated-teams
 * - /services/cloud-consulting
 * - /services/quality-assurance
 * - /engagement/solutions-for-ai-companies (absorbs AI-enabled teams)
 *
 * Merged away (no separate route):
 * - Workflow automation → covered under Software / AI companies
 * - AI-enabled teams → Solutions for AI companies
 * - Thin tech/platform micro-pages → /services/technologies (All technologies hub)
 * - Why Sofnology / Our promise → folded into /company and /company/how-we-work
 * - Partnerships, Impact, Vibes, Incubator, AI manifesto, Newsroom → discarded for new company
 */
export const megaMenus: Record<MenuId, MegaMenuConfig> = {
  expertise: {
    layout: "columns-banner",
    columns: [
      {
        heading: "Services",
        links: [
          { label: "Software development", href: "/services/software-development" },
          { label: "Web development", href: "/services/web-development" },
          { label: "Mobile development", href: "/services/mobile-development" },
          { label: "Quality assurance", href: "/services/quality-assurance" },
          { label: "DevOps", href: "/services/devops" },
          { label: "Cloud consulting", href: "/services/cloud-consulting" },
          { label: "Cybersecurity", href: "/services/cybersecurity" },
        ],
      },
      {
        heading: "Technologies",
        links: [
          { label: "Backend", href: "/services/backend-development" },
          { label: "Frontend", href: "/services/frontend-development" },
          { label: "AI & automation", href: "/engagement/solutions-for-ai-companies" },
          { label: "All technologies", href: "/services/technologies" },
        ],
      },
      {
        heading: "Platforms",
        links: [
          { label: "Cloud platforms", href: "/services/cloud-consulting" },
          { label: "Enterprise platforms", href: "/services/technologies#platforms" },
        ],
      },
    ],
    banner: {
      text: "Want to start a project but need technical clarity first? Talk through scope with Sofnology.",
      cta: "Talk to us",
      href: "/#contact",
    },
  },
  industries: {
    layout: "list-promo",
    links: [
      { label: "Fintech", href: "/industries/fintech" },
      { label: "Proptech", href: "/industries/proptech" },
      { label: "Foodtech", href: "/industries/foodtech" },
      { label: "Ecommerce", href: "/industries/ecommerce" },
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Healthtech", href: "/industries/healthtech" },
      { label: "Adtech", href: "/industries/adtech" },
      { label: "Edtech", href: "/industries/edtech" },
    ],
    promo: {
      title: "Not sure where to start?",
      subtitle: "Tell us about the product — we’ll point you to the right engagement.",
      cta: "Start a conversation",
      href: "/#contact",
    },
  },
  engagement: {
    layout: "list-promo",
    links: [
      { label: "Staff augmentation", href: "/engagement/staff-augmentation" },
      { label: "Dedicated teams", href: "/engagement/dedicated-teams" },
      { label: "Project outsourcing", href: "/engagement/project-outsourcing" },
      { label: "Solutions for startups", href: "/engagement/solutions-for-startups" },
      { label: "Solutions for enterprises", href: "/engagement/solutions-for-enterprises" },
      { label: "Solutions for AI companies", href: "/engagement/solutions-for-ai-companies" },
    ],
    promo: {
      title: "Ready to partner?",
      subtitle: "Dedicated pods, staff aug, or full project delivery — pick the fit.",
      cta: "Talk to engineering",
      href: "/#contact",
    },
  },
  company: {
    layout: "columns",
    columns: [
      {
        heading: "Company",
        links: [{ label: "Who we are", href: "/company" }],
      },
      {
        heading: "Approach",
        links: [{ label: "How we work", href: "/company/how-we-work" }],
      },
    ],
  },
};
