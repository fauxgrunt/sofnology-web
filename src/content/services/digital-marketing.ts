import type { InteriorContact, InteriorFaq, InteriorSticky } from "@/lib/interior";

export const LIME = "#C6F135";
export const DEEP = "#10241C";
export const SOFT = "#E7F6C8";

export const HERO_IMAGE = "/digital-marketing-hero.jpg";
export const CTA_IMAGE = "/digital-marketing-cta.jpg";

export const marketingServices = [
  {
    title: "Google Ads management",
    description:
      "Ongoing search campaigns: search terms, negatives, budgets, and ad relevance reviewed against the enquiries the business actually wants.",
  },
  {
    title: "Google Ads account setup",
    description:
      "Account structure, ad groups, keyword planning, match types, geographic targeting, and ads aimed at people already looking for the service.",
  },
  {
    title: "SEO and local SEO",
    description:
      "Service pages, metadata, and local search work so organic visibility sits next to the same offers the ads are buying.",
  },
  {
    title: "Tag Manager and conversion tracking",
    description:
      "Google Tag Manager, Ads conversions, and website events for calls, forms, and other actions worth measuring.",
  },
  {
    title: "Analytics and reporting",
    description:
      "Analytics and campaign reporting shaped around traffic, cost, and enquiries — not a dashboard nobody can act on.",
  },
  {
    title: "Landing page optimization",
    description:
      "Pages that match the search: the service, the proof, and a clear way to call, message, or enquire.",
  },
  {
    title: "Conversion rate optimization",
    description:
      "Find the friction between the click and the enquiry, then change the page or the campaign that is causing it.",
  },
  {
    title: "Website maintenance",
    description:
      "Content, technical, and campaign-related updates so the site stays aligned with what the ads and search terms are doing.",
  },
  {
    title: "Search and content strategy",
    description:
      "Keyword and landing-page planning around the services the business sells, before more budget is spent on broad traffic.",
  },
];

export const acquisitionStages = [
  {
    title: "Search intent",
    description:
      "Start with the searches people make when they already need the service, and separate those from queries that only look related.",
  },
  {
    title: "Campaign structure",
    description:
      "Build ad groups, match types, geography, and negatives around that intent instead of one broad campaign.",
  },
  {
    title: "Landing pages",
    description:
      "Send each useful search to a page that explains the service and offers a direct way to get in touch.",
  },
  {
    title: "Measurement",
    description:
      "Track calls, forms, and other agreed actions so the account shows what happened after the click.",
  },
  {
    title: "Enquiry",
    description:
      "Treat the call, message, or form as the outcome. A click is not a customer until the business can see the action.",
  },
  {
    title: "Optimisation",
    description:
      "Review search terms, spend, and the pages together, then adjust the account and the site from that record.",
  },
];

export const engagementModels = [
  {
    title: "Account setup",
    pain: "No structured account yet",
    description:
      "Stand up the Ads account, the first campaigns, and the tracking so spend starts against a defined search.",
  },
  {
    title: "Ongoing management",
    pain: "Campaigns running, but noisy",
    description:
      "Keep search terms, keywords, budgets, and ads under review so irrelevant traffic does not quietly consume the budget.",
  },
  {
    title: "Website and ads together",
    pain: "The site and the ads are separate",
    description:
      "Change the landing pages and the campaigns as one journey, from the search through to the enquiry.",
  },
];

export const toolStack = [
  {
    category: "Paid search",
    items: ["Google Ads", "Search campaigns", "Negative keywords", "Geographic targeting"],
  },
  {
    category: "Measurement",
    items: ["Google Tag Manager", "Google Analytics", "Conversion events", "Call and form tracking"],
  },
  {
    category: "Search visibility",
    items: ["SEO", "Local SEO", "Search Console", "Metadata and page structure"],
  },
  {
    category: "Experience",
    items: ["Landing pages", "CMS updates", "Enquiry paths", "Mobile pages"],
  },
];

export const faqs: InteriorFaq = {
  signColor: DEEP,
  variant: "roomy",
  items: [
    {
      question: "Do you run Google Ads and SEO as one system?",
      answer:
        "Yes. Paid search, organic search, tracking, and the landing pages are planned together. The page someone reaches should match the search that brought them there.",
    },
    {
      question: "Will you publish performance numbers?",
      answer:
        "Only when they come from the Ads account or the business’s own enquiry records. Platform conversions are not described as confirmed customers unless the client has validated them.",
    },
    {
      question: "Do you build the landing pages as well?",
      answer:
        "Yes. Website and landing-page work sits with the campaigns. Larger product builds can continue into Sofnology web development, with the same acquisition path in mind.",
    },
    {
      question: "Do you deliver digital marketing in-house?",
      answer:
        "Core direction stays with Sofnology. Where a project needs a specialist, Sofnology keeps ownership and communication and can add a vetted delivery partner for that part of the work.",
    },
    {
      question: "Who owns the account and the site?",
      answer:
        "The client owns the agreed deliverables, the website, and the configured ad account once the handover terms in the agreement are complete.",
    },
  ],
};

export const hero = {
  title: "Digital marketing services",
  lede:
    "Sofnology plans and runs acquisition that stays tied to the website: Google Ads, SEO, conversion tracking, and the pages people actually land on.",
  image: HERO_IMAGE,
  imageAlt: "Marketer reviewing a campaign layout on a desktop in a quiet studio",
  imageClass: "object-cover object-[center_40%]",
  ctaLabel: "Start a Project",
  ctaHref: "#contact-form",
  ctaBackground: DEEP,
  ctaText: "#ffffff",
  ctaArrowColor: LIME,
} as const;

export const cta = {
  title: "Need a website that does more than look good?",
  lede:
    "Connect the site, the search campaigns, the tracking, and the ongoing optimisation into one measurable path. Tell us the service you sell and where enquiries should land.",
  ctaLabel: "Discuss your growth project",
  image: CTA_IMAGE,
  imageAlt: "Evening desk with a laptop, phone, and a hand-drawn acquisition funnel",
  panelBackground: DEEP,
  buttonBackground: LIME,
  buttonText: "#10241C",
} as const;

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Start a Project",
  backgroundColor: LIME,
  textColor: "#10241C",
};

export const contact: InteriorContact = {
  showIntro: true,
  accent: "lime",
};
