import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const LIME = "#D4F06A";
export const DEEP = "#1B3A2A";
export const SOFT = "#E8F7C8";

export const hero = {
  title: "Food apps that keep orders moving",
  lede:
    "Sofnology food delivery app development for restaurants, kitchens, marketplaces, and grocery — menus, ops, tracking, and payments in one workable product.",
  image: "/foodtech-hero.jpg",
  imageAlt: "Delivery courier checking a phone while holding a basket of fresh groceries",
  imageClass: "scale-[1.06] object-cover object-[42%_28%]",
  ctaLabel: "Start a Project",
  ctaHref: "#contact-form",
  ctaBackground: DEEP,
  ctaText: "#ffffff",
  ctaArrowColor: LIME,
} as const;

export const cta = {
  title: "Is your food business ready to go digital?",
  lede:
    "Tell us about the model, the markets, and the ops constraints. We’ll help shape a practical food delivery product path.",
  ctaLabel: "Reach out today",
  image: "/foodtech-cta.jpg",
  imageAlt: "Customer receiving a grocery delivery while using a phone",
  imageClass: "scale-[1.08] object-cover object-[58%_40%]",
  panelBackground: DEEP,
  buttonBackground: LIME,
  buttonText: "#1B3A2A",
} as const;

export const helpModes = [
  {
    title: "Consulting",
    description:
      "Clarify the model, audience, and must-have flows before you invest in a full build — from marketplace to single-brand delivery.",
    points: ["Business model fit", "Feature prioritization", "Stack and delivery plan"],
  },
  {
    title: "App development",
    description:
      "Design and build ordering, ops, and courier experiences with a scalable backend and clear product surfaces.",
    points: ["Customer and courier apps", "Ops consoles", "Payments and tracking"],
  },
  {
    title: "Upgrade and modernization",
    description:
      "Improve an existing food app — new features, cleaner architecture, better reliability, and integrations that keep pace with growth.",
    points: ["Feature and bug velocity", "Architecture cleanup", "Third-party integrations"],
  },
] as const;

export const audiences = [
  {
    title: "Restaurants and cafes",
    description:
      "Single locations and chains that need ordering, menu control, and customer engagement without losing brand clarity.",
    outcomes: ["Brand storefront", "Order management", "Customer retention loops"],
  },
  {
    title: "Cloud kitchens",
    description:
      "Virtual kitchens focused on delivery volume — streamlined menus, order intake, and kitchen-ready ops tooling.",
    outcomes: ["Multi-brand menus", "Kitchen order flow", "Delivery handoff"],
  },
  {
    title: "Aggregators and marketplaces",
    description:
      "Multi-restaurant platforms where discovery, ordering, and delivery tracking live in one product.",
    outcomes: ["Multi-vendor catalogs", "Unified checkout", "Courier network tools"],
  },
  {
    title: "Grocery delivery",
    description:
      "Browse, cart, schedule, and deliver grocery experiences with inventory-aware shopping journeys.",
    outcomes: ["Catalog and search", "Slot scheduling", "Fulfillment visibility"],
  },
  {
    title: "Meal and catering",
    description:
      "Subscription meals, catering, and event food ordering with bulk, scheduling, and account-friendly flows.",
    outcomes: ["Bulk and scheduled orders", "Account menus", "Delivery windows"],
  },
] as const;

export const productSurfaces = [
  {
    title: "Customer app",
    description:
      "Browse, order, pay, track, and reorder — the surface that has to feel fast and trustworthy every time.",
    points: ["Menus and search", "Checkout and payments", "Live order tracking"],
  },
  {
    title: "Ops console",
    description:
      "Menus, orders, inventory signals, and support tools so the business can run the day without chaos.",
    points: ["Order and status control", "Menu management", "Reporting basics"],
  },
  {
    title: "Courier app",
    description:
      "Assignments, routes, customer contact, and delivery confirmation for people on the move.",
    points: ["Order assignment", "Navigation-ready flow", "In-app communication"],
  },
] as const;

export const orderJourney = [
  {
    title: "Order",
    description: "Customer places and pays — menu, cart, and confirmation stay clear.",
  },
  {
    title: "Kitchen",
    description: "Ops receives the ticket, updates status, and prepares for handoff.",
  },
  {
    title: "Courier",
    description: "Assignment, route, and pickup connect the kitchen to the customer.",
  },
  {
    title: "Delivered",
    description: "Tracking closes, feedback opens, and the next reorder path is ready.",
  },
] as const;

export const deliverySteps = [
  {
    title: "Discover",
    description:
      "Map the business model, channels, and the order journey that has to work on day one.",
  },
  {
    title: "Shape",
    description:
      "Define customer, ops, and courier surfaces — plus the integrations payments and delivery need.",
  },
  {
    title: "Build",
    description:
      "Ship reviewable increments across apps and backend so you can validate real ordering early.",
  },
  {
    title: "Improve",
    description:
      "Harden reliability, refine UX, and extend features as volume and markets grow.",
  },
] as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  accent: DEEP,
  actionLabel: "View service",
  links: [
    {
      title: "Mobile development",
      description: "Customer and courier apps built for real devices and real delivery days.",
      href: "/services/mobile-development",
    },
    {
      title: "Backend development",
      description: "Order, menu, and tracking services that keep the product reliable under load.",
      href: "/services/backend-development",
    },
    {
      title: "Ecommerce",
      description: "Catalog, cart, and checkout craft when grocery or marketplace scope expands.",
      href: "/industries/ecommerce",
    },
    {
      title: "Fintech",
      description: "Payments and money movement when checkout needs deeper finance handling.",
      href: "/industries/fintech",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: DEEP,
  items: [
    {
      question: "Do you only build marketplace apps, or single-restaurant apps too?",
      answer:
        "Both. We build for individual restaurants and chains, cloud kitchens, aggregators, grocery, and meal or catering models — shaped to the operating model you actually run.",
    },
    {
      question: "Can you upgrade an existing food delivery app?",
      answer:
        "Yes. Many engagements start with an audit of what exists, then improve reliability, add features, clean architecture, or reconnect payments, POS, and messaging tools.",
    },
    {
      question: "Do you build customer, ops, and courier apps together?",
      answer:
        "Usually yes. A durable food product needs all three surfaces sharing one order foundation — even if you launch one app first and expand next.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Start a Project",
  backgroundColor: DEEP,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "lime",
};
