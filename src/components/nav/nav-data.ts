export type MenuId = "expertise" | "industries" | "work" | "engagement" | "company";

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
  { id: "industries", label: "Industries", href: "/industries/healthtech", menu: "industries" },
  { id: "portfolio", label: "Our Work", href: "/work", menu: "work" },
  { id: "engagement", label: "How We Work", href: "/how-we-work", menu: "engagement" },
  { id: "company", label: "Company", href: "/company", menu: "company" },
];

export const megaMenus: Record<MenuId, MegaMenuConfig> = {
  expertise: {
    layout: "columns-banner",
    columns: [
      {
        heading: "Core services",
        links: [
          { label: "Software Development", href: "/services/software-development" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "Mobile App Development", href: "/services/mobile-development" },
          { label: "AI & Automation", href: "/services/ai-automation" },
          { label: "VoIP & Communication Systems", href: "/services/voip-communication" },
          { label: "Digital Marketing", href: "/services/digital-marketing" },
          { label: "Cloud & DevOps", href: "/services/cloud-devops" },
        ],
      },
      {
        heading: "Engineering capabilities",
        links: [
          { label: "Backend Development", href: "/services/backend-development" },
          { label: "Frontend Development", href: "/services/frontend-development" },
          { label: "Mobile & Cross-Platform", href: "/services/mobile-cross-platform" },
          { label: "AI & Voice AI", href: "/services/ai-voice" },
          { label: "API & System Integration", href: "/services/api-integration" },
          { label: "Databases & Data", href: "/services/databases" },
          { label: "DevOps & Infrastructure", href: "/services/devops-infrastructure" },
          { label: "All Technologies", href: "/services/technologies" },
        ],
      },
      {
        heading: "Platforms & systems",
        links: [
          { label: "Cloud & Linux Infrastructure", href: "/services/platforms/cloud-linux" },
          { label: "VoIP & Contact Center Platforms", href: "/services/platforms/voip" },
          { label: "Web & SaaS Platforms", href: "/services/platforms/web-saas" },
          { label: "Business & Enterprise Systems", href: "/services/platforms/business" },
          { label: "Marketing & Analytics Platforms", href: "/services/platforms/marketing" },
        ],
      },
    ],
    banner: {
      text: "Want to start a project but need technical clarity first? Talk through scope with Sofnology.",
      cta: "Start a Project",
      href: "/#contact-form",
    },
  },
  industries: {
    layout: "list-promo",
    links: [
      { label: "Healthcare & Healthtech", href: "/industries/healthtech" },
      { label: "Financial Services & Fintech", href: "/industries/fintech" },
      { label: "Retail & E-commerce", href: "/industries/ecommerce" },
      { label: "Education & Associations", href: "/industries/edtech" },
      { label: "Professional & Field Services", href: "/industries/professional-services" },
      { label: "Telecom & Communications", href: "/industries/telecom" },
      { label: "Technology & SaaS", href: "/industries/technology-saas" },
      { label: "Manufacturing & Operations", href: "/industries/manufacturing" },
    ],
    promo: {
      title: "Not sure where to start?",
      subtitle: "Tell us the operation you need to improve. We will point you to a practical next step.",
      cta: "Start a Project",
      href: "/#contact-form",
    },
  },
  work: {
    layout: "list-promo",
    links: [
      { label: "Featured Work", href: "/work?area=featured" },
      { label: "Software & Platforms", href: "/work?area=software" },
      { label: "Mobile Applications", href: "/work?area=mobile" },
      { label: "AI & Automation", href: "/work?area=ai" },
      { label: "VoIP & Communications", href: "/work?area=voip" },
      { label: "Web & Digital", href: "/work?area=web" },
      { label: "Digital Growth", href: "/work?area=growth" },
      { label: "Cloud & Infrastructure", href: "/work?area=cloud" },
    ],
    promo: {
      title: "Selected delivered work",
      subtitle: "Real projects only. Confidential work stays anonymous.",
      cta: "View all work",
      href: "/work",
    },
  },
  engagement: {
    layout: "list-promo",
    links: [
      { label: "Project-Based Delivery", href: "/how-we-work#project-based" },
      { label: "Dedicated Development Team", href: "/how-we-work#dedicated-team" },
      { label: "Staff Augmentation", href: "/how-we-work#staff-augmentation" },
      { label: "Technical Consulting", href: "/how-we-work#technical-consulting" },
      { label: "Managed Services", href: "/how-we-work#managed-services" },
      { label: "Ongoing Support & Retainers", href: "/how-we-work#ongoing-support" },
    ],
    promo: {
      title: "One way of working",
      subtitle: "Scope, team shape, and support live on one page until a model needs its own.",
      cta: "See how we work",
      href: "/how-we-work",
    },
  },
  company: {
    layout: "list-promo",
    links: [
      { label: "About Sofnology", href: "/company" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Contact", href: "/#contact" },
    ],
    promo: {
      title: "Start a project",
      subtitle: "Tell us the outcome you need. We will outline a practical next step.",
      cta: "Start a Project",
      href: "/#contact-form",
    },
  },
};
