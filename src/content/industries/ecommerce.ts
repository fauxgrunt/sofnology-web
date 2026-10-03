import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const MAGENTA = "#FF2D6A";
export const DEEP = "#1A1216";
export const SOFT = "#FFD6E3";

export const hero = {
  title: "Commerce systems built for conversion and operations",
  lede:
    "Sofnology builds custom ecommerce solutions for brands, retailers, and platforms — streamlining catalog, order, and payment flows while keeping the shopping experience clear.",
  image: "/ecommerce-hero.jpg",
  imageAlt: "Yellow shopping bags on a white conveyor in a minimal 3D ecommerce scene",
  imageClass: "object-cover object-[center_45%]",
  ctaLabel: "Get in touch",
  ctaHref: "#contact-form",
  ctaBackground: DEEP,
  ctaText: "#ffffff",
  ctaArrowColor: MAGENTA,
} as const;

export const cta = {
  title: "Ready to build commerce that converts?",
  lede:
    "Tell us about the catalog, channels, and operational constraints. We’ll help shape a practical ecommerce path.",
  ctaLabel: "Tell us about your project",
  panelBackground: DEEP,
  buttonBackground: MAGENTA,
  buttonText: "#ffffff",
} as const;

export const commercePaths = [
  {
    title: "Launch and grow a brand",
    description:
      "Build a cohesive storefront experience across web and mobile — clear catalog, checkout, and brand presence from the start.",
    points: ["Customer journey clarity", "Brand-consistent storefront", "Channel-ready foundations"],
  },
  {
    title: "Enterprise commerce transformation",
    description:
      "Modernize complex commerce operations with stronger UX, reliable integrations, and systems that connect CRM, ERP, and fulfillment.",
    points: ["Platform modernization", "CRM and ERP connections", "Operational continuity"],
  },
] as const;

export const buildTypes = [
  {
    title: "Online stores",
    description:
      "Custom storefronts with catalog, cart, checkout, and order flows shaped around your brand and operations.",
    outcomes: ["Catalog and product pages", "Cart and checkout", "Order confirmation flows"],
  },
  {
    title: "B2B and B2C marketplaces",
    description:
      "Multi-seller or multi-buyer platforms with roles, listings, and commerce flows that stay usable as volume grows.",
    outcomes: ["Seller and buyer roles", "Listing and discovery", "Multi-party order flows"],
  },
  {
    title: "Mobile commerce",
    description:
      "Mobile apps and mobile-first experiences that connect to your catalog, accounts, and order systems.",
    outcomes: ["Mobile storefront", "Account and orders", "Push-ready journeys"],
  },
  {
    title: "Custom commerce platforms",
    description:
      "Bespoke commerce products when off-the-shelf platforms can’t carry the complexity you actually need.",
    outcomes: ["Custom pricing rules", "Complex catalogs", "Owned architecture"],
  },
] as const;

export const capabilities = [
  {
    title: "Checkout and payments",
    description:
      "Carts, gateways, wallets, and payment paths designed for conversion and reliable order capture.",
  },
  {
    title: "Catalog and PIM",
    description:
      "Product information, categories, and enrichment that keep large catalogs consistent and sellable.",
  },
  {
    title: "Inventory and orders",
    description:
      "Stock visibility and order processing synced across channels so operations stay accurate in real time.",
  },
  {
    title: "ERP and CRM integration",
    description:
      "Connect planning, finance, customer data, and sales tooling into one workable commerce stack.",
  },
  {
    title: "Fulfillment visibility",
    description:
      "Status, shipping, and ops surfaces that help teams and customers see what happens after checkout.",
  },
  {
    title: "Sales and marketing systems",
    description:
      "CRM, analytics, and campaign hooks that support retention without fracturing the storefront experience.",
  },
] as const;

export const deliverySteps = [
  {
    title: "Discover",
    description:
      "Map catalog complexity, channels, integrations, and the conversion paths that matter most.",
  },
  {
    title: "Shape",
    description:
      "Define storefront architecture, checkout flow, and the systems the commerce product must connect to.",
  },
  {
    title: "Build",
    description:
      "Ship reviewable increments across storefront, catalog, payments, and operational tooling.",
  },
  {
    title: "Optimize",
    description:
      "Refine checkout, performance, and integrations as real traffic and order volume reveal what to improve.",
  },
] as const;

export const platforms = [
  {
    category: "Commerce platforms",
    items: ["Shopify", "Magento", "Custom storefronts", "Headless commerce"],
  },
  {
    category: "Integrations",
    items: ["Payment gateways", "ERP connectors", "CRM systems", "Shipping APIs"],
  },
] as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  accent: MAGENTA,
  actionLabel: "View service",
  links: [
    {
      title: "Web development",
      description: "Storefronts, portals, and product UIs that carry the customer experience.",
      href: "/services/web-development",
    },
    {
      title: "Mobile development",
      description: "Commerce apps and mobile journeys connected to your catalog and orders.",
      href: "/services/mobile-development",
    },
    {
      title: "Backend development",
      description: "APIs, catalog services, and order systems behind the storefront.",
      href: "/services/backend-development",
    },
    {
      title: "Fintech",
      description: "Payments, wallets, and money movement when checkout needs deeper finance craft.",
      href: "/industries/fintech",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: DEEP,
  items: [
    {
      question: "Do you build on Shopify and Magento, or only custom platforms?",
      answer:
        "Both. We work with established commerce platforms when they fit, and build custom or headless storefronts when your catalog, pricing, or operations need more control.",
    },
    {
      question: "Can you connect ecommerce to our ERP and CRM?",
      answer:
        "Yes. Many engagements include payment, inventory, ERP, and CRM integrations so the storefront is not an island from the rest of the business.",
    },
    {
      question: "Do you help with mobile commerce as well as the website?",
      answer:
        "Yes. We build mobile-first storefronts and native or cross-platform commerce apps that share catalog, account, and order foundations with the web experience.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Get in touch",
  backgroundColor: MAGENTA,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "magenta",
};
