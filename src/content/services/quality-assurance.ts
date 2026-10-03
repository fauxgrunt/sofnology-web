import type { InteriorContact, InteriorRelated, InteriorFaq, InteriorSticky } from "@/lib/interior";

export const LIME = "#C7FF3D";
export const DEEP = "#101413";
export const SOFT = "#E8FF9A";
export const PRIMARY_CTA = "Start a conversation";

export const HERO_IMAGE = "/qa-hero.jpg";
export const CTA_IMAGE = "/qa-cta.jpg";

export const spotlightCapabilities = [
  {
    title: "Mobile testing",
    description:
      "iOS, Android, and cross-platform apps checked for stress, load, performance, connectivity, conformance, and interruption paths — so launches hold up outside the lab.",
  },
  {
    title: "Test automation",
    description:
      "Automated coverage for web, mobile, and desktop flows that shortens feedback loops, protects regressions, and keeps release cadence realistic as the product grows.",
  },
];

export const processSteps = [
  {
    title: "Test strategy development",
    description:
      "Define scope, techniques, environments, and ownership with your team, then set a schedule that supports real release goals — not a generic checklist.",
  },
  {
    title: "Test case design",
    description:
      "Build cases that expose gaps early: critical journeys, edge conditions, integrations, and the risks most likely to block users or revenue.",
  },
  {
    title: "Test implementation",
    description:
      "Execute the plan, share clear findings, and recommend what to fix first so engineering can act while context is still fresh.",
  },
  {
    title: "Defect management",
    description:
      "Track defects end to end, confirm fixes, and run regression checks so resolved issues stay resolved after the next change lands.",
  },
  {
    title: "Result reporting",
    description:
      "Deliver a practical summary: what was covered, what remains open, residual risk, and recommended next steps for the release.",
  },
];

export const methodology = [
  {
    title: "Practical growth mindset",
    description:
      "QA as product leverage — not a late gate. Close to deadlines, release pressure, and the decisions your business needs to make.",
  },
  {
    title: "Domain-aware testing",
    description:
      "Plans that account for payments, operations, regulated workflows, and the failure modes that matter in your industry.",
  },
  {
    title: "Transparent, secure execution",
    description:
      "Clear progress and risk visibility. Sensitive tests run in controlled environments with access discipline built in.",
  },
];

export const testingTypes = [
  {
    title: "Manual testing",
    description:
      "Explore the product as a real user would — catching issues automation often misses in flow, clarity, and unexpected edge behavior.",
  },
  {
    title: "Security testing",
    description:
      "Probe for exposure points, weak access paths, and compliance-sensitive gaps so security issues surface before release, not after incidents.",
  },
  {
    title: "Functional testing",
    description:
      "Validate business logic under realistic conditions and confirm the product behaves the way stakeholders and users expect.",
  },
  {
    title: "Usability testing",
    description:
      "Review journeys for clarity, accessibility, and friction so the product is usable — not just technically correct.",
  },
  {
    title: "Compatibility testing",
    description:
      "Confirm behavior across browsers, devices, and OS combinations that matter to your audience, not an endless matrix.",
  },
];

export const techStack = [
  {
    category: "Continuous integration",
    items: ["GitHub Actions", "GitLab CI", "Jenkins", "Azure DevOps"],
  },
  {
    category: "Performance testing",
    items: ["Apache JMeter", "k6", "LoadRunner-ready setups"],
  },
  {
    category: "Tools and frameworks",
    items: ["Playwright", "Selenium", "Cypress", "Appium", "Cucumber", "JUnit", "NUnit", "SoapUI"],
  },
  {
    category: "Reporting",
    items: ["Allure", "ReportPortal-ready setups", "Custom dashboards"],
  },
];

export const relatedLinks = [
  {
    title: "Software development",
    href: "/services/software-development",
    description: "Build and ship product with quality designed into delivery.",
  },
  {
    title: "DevOps",
    href: "/services/devops",
    description: "Wire automated checks into CI/CD so feedback arrives early.",
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Go deeper on security assessments when risk warrants it.",
  },
];

export const faqs: InteriorFaq = {
  signColor: DEEP,
  variant: "roomy",
  items: [
  {
    question: "When should QA start on a project?",
    answer:
      "As early as practical. Strategy and case design during requirements or early builds catch expensive defects before they harden into architecture and release risk.",
  },
  {
    question: "Do you only do test automation?",
    answer:
      "No. Automation is a core capability, but we also cover manual exploration, usability, compatibility, and security-focused checks where they add the most value.",
  },
  {
    question: "Can you plug into our existing pipeline?",
    answer:
      "Yes. We prefer integrating with the tools and CI setup you already run, then improving coverage and reporting where gaps are slowing releases.",
  },
  {
    question: "How does Sofnology QA work with development teams?",
    answer:
      "As partners inside the delivery loop — sharing findings early, prioritizing by risk, and keeping regression coverage useful as features ship.",
  },
],
};

export const hero = {
  title: "QA & testing",
  lede:
    "Sofnology QA teams examine your product from the ground up — strengths, weak points, and release risk — so you can make clearer decisions and ship with confidence.",
  image: HERO_IMAGE,
  imageAlt: "Abstract quality assurance visual with lime glass geometry",
  imageClass: "scale-[1.06] object-cover object-[72%_42%]",
  ctaLabel: PRIMARY_CTA,
  ctaHref: "#contact-form",
  ctaBackground: LIME,
  ctaText: "#101413",
  ctaMaxWidth: "max-w-[14rem] leading-tight md:max-w-[16rem]",
} as const;

export const cta = {
  title: "Need clearer release confidence?",
  lede:
    "We’ll help you define the right QA approach, plug into your delivery rhythm, and make risk visible before it becomes a launch problem.",
  ctaLabel: PRIMARY_CTA,
  image: CTA_IMAGE,
  imageAlt: "Quality assurance abstract CTA visual with glass phone frame",
  panelBackground: LIME,
  buttonBackground: "#101413",
  buttonText: "#ffffff",
} as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  variant: "list",
  columns: 3,
  links: relatedLinks,
};

export const sticky: InteriorSticky = {
  label: PRIMARY_CTA,
  backgroundColor: LIME,
  textColor: "#101413",
};

export const contact: InteriorContact = {
  accent: "lime",
};
