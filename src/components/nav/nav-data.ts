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
  { id: "expertise", label: "Services", href: "#services", menu: "expertise" },
  { id: "industries", label: "Industries", href: "#industries", menu: "industries" },
  { id: "engagement", label: "Engagement models", href: "#approach", menu: "engagement" },
  { id: "portfolio", label: "Case Studies", href: "#case-studies" },
  { id: "company", label: "Company", href: "#company", menu: "company" },
  { id: "insights", label: "Insights", href: "#insights" },
];

export const megaMenus: Record<MenuId, MegaMenuConfig> = {
  expertise: {
    layout: "columns-banner",
    columns: [
      {
        heading: "Services",
        links: [
          { label: "Software development", href: "#services" },
          { label: "Web development", href: "#services" },
          { label: "Mobile development", href: "#services" },
          { label: "Quality assurance", href: "#services" },
          { label: "DevOps", href: "#tech-stack" },
          { label: "Cloud consulting", href: "#tech-stack" },
          { label: "Workflow automation", href: "#services" },
        ],
      },
      {
        heading: "Technologies",
        links: [
          { label: "AI & automation", href: "#tech-stack" },
          { label: "Backend", href: "#tech-stack" },
          { label: "Frontend", href: "#tech-stack" },
          { label: "Data engineering", href: "#tech-stack" },
          { label: "Blockchain", href: "#tech-stack" },
          { label: "Big data", href: "#tech-stack" },
          { label: "All technologies", href: "#tech-stack" },
        ],
      },
      {
        heading: "Platforms",
        links: [
          { label: "AWS", href: "#tech-stack" },
          { label: "Azure", href: "#tech-stack" },
          { label: "Google Cloud", href: "#tech-stack" },
          { label: "Salesforce", href: "#tech-stack" },
          { label: "SharePoint", href: "#tech-stack" },
        ],
      },
    ],
    banner: {
      text: "Want to start a project with us but need technical clarity first? Get a free tech assessment in 48 hours.",
      cta: "Get my free assessment",
      href: "#contact",
    },
  },
  industries: {
    layout: "list-promo",
    links: [
      { label: "Fintech", href: "#industries" },
      { label: "Proptech", href: "#industries" },
      { label: "Automotive", href: "#industries" },
      { label: "Foodtech", href: "#industries" },
      { label: "Ecommerce", href: "#industries" },
      { label: "Healthtech", href: "#industries" },
      { label: "Edtech", href: "#industries" },
      { label: "Game dev", href: "#industries" },
      { label: "Adtech", href: "#industries" },
      { label: "AI", href: "#industries" },
    ],
    promo: {
      title: "Project cost calculator",
      subtitle: "Assess your engineering costs in 60 seconds.",
      cta: "Get my free estimate",
      href: "#contact",
    },
  },
  engagement: {
    layout: "list-promo",
    links: [
      { label: "AI-enabled teams", href: "#approach" },
      { label: "Staff augmentation", href: "#approach" },
      { label: "Dedicated teams", href: "#approach" },
      { label: "Project outsourcing", href: "#approach" },
      { label: "Solutions for startups", href: "#approach" },
      { label: "Solutions for enterprises", href: "#approach" },
      { label: "Solutions for AI companies", href: "#approach" },
    ],
    promo: {
      title: "Kickoff in 14 days",
      subtitle: "Assemble a senior engineering pod inside two weeks.",
      cta: "Talk to engineering leads",
      href: "#contact",
    },
  },
  company: {
    layout: "columns",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "Who we are", href: "#company" },
          { label: "Our partnerships", href: "#company" },
          { label: "Testimonials", href: "#case-studies" },
          { label: "Locations", href: "#company" },
        ],
      },
      {
        heading: "Approach",
        links: [
          { label: "Why Sofnology", href: "#approach" },
          { label: "How we work", href: "#approach" },
          { label: "AI manifesto", href: "#approach" },
          { label: "Our promise", href: "#approach" },
        ],
      },
      {
        heading: "Initiatives & news",
        links: [
          { label: "Sofnology impact", href: "#insights" },
          { label: "Engineering blog", href: "#insights" },
          { label: "Incubator contest", href: "#insights" },
          { label: "Newsroom", href: "#insights" },
        ],
      },
    ],
  },
};
