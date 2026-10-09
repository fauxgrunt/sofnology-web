import type { InteriorContact, InteriorFaq, InteriorSticky } from "@/lib/interior";

export const LIME = "#C7FF3D";
export const SOFT_LIME = "#E8FF9A";

export const HERO_IMAGE = "/mobile-development-hero.png";
export const TYPES_IMAGE = "/mobile-types.png";
export const CTA_IMAGE = "/mobile-cta.png";

export const checklistItems = [
  "Want to go beyond generic app features and build something users remember?",
  "Need a scalable mobile product that can grow after the first release?",
  "Looking for seamless integrations with payments, CRMs, booking tools, or internal systems?",
  "Want an app experience that feels aligned with your brand and easy to use?",
];

export const audiences = [
  {
    title: "Startups",
    description:
      "For founders validating a product idea, Sofnology can help shape an MVP, prioritize the first release, and build a mobile experience that is focused enough to test with real users.",
  },
  {
    title: "Small and medium businesses",
    description:
      "For growing businesses, we create mobile apps that improve customer access, booking, ordering, communication, reporting, and day-to-day operational visibility.",
  },
  {
    title: "Scaling teams",
    description:
      "For teams modernizing customer-facing or internal mobile workflows, we plan integrations, backend readiness, security, QA, and handover from the start.",
  },
];

export const mobileTypes = [
  {
    title: "By platform",
    items: ["iOS apps", "Android apps"],
  },
  {
    title: "By development approach",
    items: ["Native development", "Cross-platform apps", "Progressive web apps"],
  },
  {
    title: "By autonomy",
    items: ["Standalone apps", "Device companion apps"],
  },
  {
    title: "By advanced capability",
    items: ["AI features", "Computer vision", "Cloud-connected workflows", "Analytics"],
  },
];

export const developmentServices = [
  {
    title: "Discovery: laying the foundation",
    description:
      "We clarify the audience, core use cases, feature priorities, integration needs, timeline, and business constraints before design or development begins.",
    points: ["Requirement analysis", "Feature prioritization", "Feasibility review", "MVP scope"],
  },
  {
    title: "Strategic planning",
    description:
      "The mobile product is shaped into a practical roadmap with architecture direction, platform decisions, release milestones, and ownership clarity.",
    points: ["Platform recommendation", "Architecture planning", "Delivery roadmap", "Cost visibility"],
  },
  {
    title: "Design and prototyping",
    description:
      "We map user journeys, design clear mobile screens, and validate the experience before too much build effort is committed.",
    points: ["UX flows", "UI direction", "Clickable prototypes", "User feedback"],
  },
  {
    title: "Development",
    description:
      "Frontend, backend, data flows, integrations, authentication, and admin tools are developed in reviewable increments.",
    points: ["Mobile frontend", "Secure backend", "API integrations", "Admin workflows"],
  },
  {
    title: "Testing",
    description:
      "Critical user paths are tested across devices, screen sizes, network conditions, and core workflows so the release is stable.",
    points: ["Functional testing", "Usability checks", "Performance review", "Compatibility checks"],
  },
  {
    title: "Launch and publishing",
    description:
      "We prepare the app for release, support store submission requirements, check environments, and plan post-launch improvements.",
    points: ["Release readiness", "App store guidance", "Deployment checks", "Post-launch roadmap"],
  },
];

export const relatedServices = [
  {
    title: "Mobile API development and integration",
    description:
      "Connect your app to CRMs, payment systems, booking tools, analytics, internal databases, and third-party services.",
  },
  {
    title: "App modernization and migration",
    description:
      "Improve older mobile apps through UX cleanup, performance work, architecture updates, or staged rebuilds.",
  },
  {
    title: "Cloud integration",
    description:
      "Use cloud-ready infrastructure for real-time data access, scalability, authentication, and reliable deployments.",
  },
  {
    title: "Cybersecurity",
    description:
      "Plan access control, data handling, authentication, and secure development practices around the app’s risk profile.",
  },
  {
    title: "Post-launch support and evolution",
    description:
      "Prioritize fixes, improvements, analytics insights, and feature iterations after users begin interacting with the app.",
  },
];

export const innovationItems = [
  {
    title: "Artificial intelligence and machine learning",
    description:
      "Add smart recommendations, internal assistants, document handling, prediction, or personalization where it improves the user journey.",
  },
  {
    title: "Augmented and virtual reality",
    description:
      "Explore immersive experiences for commerce, training, visualization, and product interaction when the use case justifies it.",
  },
  {
    title: "Internet of things",
    description:
      "Build mobile interfaces for connected devices, operational monitoring, remote controls, and real-time status updates.",
  },
  {
    title: "Voice recognition technology",
    description:
      "Support hands-free workflows, accessibility improvements, guided navigation, and voice-enabled product interactions.",
  },
];

export const industryInnovation = [
  {
    title: "Healthcare",
    items: ["Appointments", "Remote care", "Medication reminders", "Patient intake", "Fitness and wellness"],
  },
  {
    title: "Finance",
    items: ["Digital payments", "Budgeting", "Approval workflows", "Secure records", "Customer portals"],
  },
  {
    title: "Retail and ecommerce",
    items: ["Mobile checkout", "Loyalty", "Order tracking", "Marketplace flows", "Customer support"],
  },
  {
    title: "Education",
    items: ["Learning portals", "Progress tracking", "Resource libraries", "Live classes", "User management"],
  },
  {
    title: "Real estate",
    items: ["Listings", "Lead handling", "Document workflows", "Property updates", "Virtual tour support"],
  },
];

export const technologyStack = [
  {
    category: "Mobile platforms",
    items: ["iOS", "Android", "React Native", "Progressive web apps", "App Store", "Google Play"],
  },
  {
    category: "Frontend and UX",
    items: ["React Native", "Mobile UI systems", "Responsive screens", "Design handoff", "Accessibility", "Animations"],
  },
  {
    category: "Backend and APIs",
    items: ["Node.js", "REST APIs", "Authentication", "Databases", "Admin panels", "Notifications"],
  },
  {
    category: "Cloud and DevOps",
    items: ["Vercel", "AWS-ready architecture", "Azure-ready architecture", "CI/CD", "Monitoring", "Storage"],
  },
  {
    category: "QA and release",
    items: ["Device checks", "Regression testing", "Performance review", "Store readiness", "Bug tracking", "Launch support"],
  },
];

export const engagementShapes = [
  {
    sector: "Fitness and wellness",
    title: "Class booking mobile app",
    description:
      "Session booking, memberships, push reminders, and customer-facing engagement for studios and wellness brands.",
  },
  {
    sector: "Food and ordering",
    title: "Local ordering platform",
    description:
      "Mobile ordering, menu management, payments, delivery status, and account flows for restaurants and local brands.",
  },
  {
    sector: "Healthcare operations",
    title: "Appointment companion app",
    description:
      "Appointment intake, reminders, secure messages, and coordination dashboards for care and clinic teams.",
  },
  {
    sector: "Property services",
    title: "Tenant workflow app",
    description:
      "Requests, status updates, documents, notifications, and visibility for property and facilities teams.",
  },
];

export const faqs: InteriorFaq = {
  signColor: "#0B4F20",
  variant: "roomy",
  id: "faq",
  items: [
  {
    question: "How does cooperation with Sofnology work?",
    answer:
      "We start with a short discovery conversation, define the audience and app goal, shape the first release, then move through design, development, testing, and launch in visible milestones.",
  },
  {
    question: "How much does it cost to build a mobile app?",
    answer:
      "Cost depends on app complexity, platform choice, UX depth, backend needs, integrations, and launch requirements. We scope the work before giving an estimate.",
  },
  {
    question: "Can Sofnology build both iOS and Android apps?",
    answer:
      "Yes. Depending on the product goals and budget, we can recommend native, cross-platform, or progressive web app delivery.",
  },
  {
    question: "Do we need a full app build to start?",
    answer:
      "Not always. Many mobile projects should begin with discovery, UX flows, and an MVP scope so the first release stays focused.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "A focused MVP can often be planned and built faster than a full product, while complex apps with multiple integrations need a longer roadmap. We define the timeline after discovery.",
  },
  {
    question: "Can you connect the app to our existing systems?",
    answer:
      "Yes. Mobile apps often need payments, CRMs, analytics, booking systems, internal databases, or custom APIs. We plan those connections early.",
  },
  {
    question: "How will you ensure the app is secure?",
    answer:
      "We plan authentication, access control, data handling, secure APIs, and review cycles around the app’s actual risk profile.",
  },
],
};

export const hero = {
  title: "Custom mobile app development services",
  lede:
    "Sofnology designs and builds mobile products that help businesses launch customer-facing apps, internal tools, and connected workflows across iOS, Android, and modern cross-platform environments.",
  image: HERO_IMAGE,
  imageAlt: "Premium mobile app development product visual",
  imageClass: "object-cover object-center",
  ctaLabel: "Start a Project",
  ctaHref: "#contact-form",
  ctaBackground: LIME,
  ctaText: "#101413",
} as const;

export const cta = {
  title: "Let’s craft a mobile app that sets you apart",
  lede:
    "Your business deserves more than another app icon. We can help shape a mobile product that creates real value for customers, teams, and daily operations.",
  ctaLabel: "Contact us",
  image: CTA_IMAGE,
  imageAlt: "Mobile product visual with lime accents",
  panelBackground: "#0B4F20",
  buttonBackground: LIME,
  buttonText: "#101413",
} as const;

export const sticky: InteriorSticky = {
  label: "Start a Project",
  backgroundColor: LIME,
  textColor: "#101413",
};

export const contact: InteriorContact = {
  accent: "lime",
};
