import type { InteriorContact, InteriorSticky } from "@/lib/interior";

export const TEAL = "#0B4F4A";
export const CYAN = "#5EEAD4";

export const HERO_IMAGE = "/cybersecurity-hero.jpg";
export const CTA_IMAGE = "/cybersecurity-cta.jpg";

export const FEATURED_PACKAGE_INDEX = 1;


export const assessmentServices = [
  {
    title: "Cybersecurity consulting",
    description:
      "We help you clarify risks, priorities, and practical next steps. That includes posture reviews, threat identification, framework direction, and security decisions that match how your business actually operates.",
  },
  {
    title: "Application security testing",
    description:
      "We review web apps, APIs, and mobile surfaces for exposure points, weak auth flows, insecure data handling, and integration risks — then recommend what to fix first.",
  },
  {
    title: "Risk management and compliance",
    description:
      "We map security work to the controls and evidence your team needs, helping close gaps around access, data handling, logging, and process readiness before they become blockers.",
  },
  {
    title: "Security auditing",
    description:
      "We assess how well your current systems, policies, and response practices hold up under review — and document vulnerabilities, gaps, and a clear remediation path.",
  },
];

export const auditPackages = [
  {
    title: "Security audit",
    recommended: [
      "Assessing the effectiveness of your current security setup",
      "Reviewing compliance readiness for key controls",
      "Checking whether external security expectations are being met",
      "Post-incident system and process review",
    ],
    outcomes: [
      "A structured assessment of internal and external vulnerabilities",
      "Clear opportunities for improvement and prioritized gaps",
      "Practical next steps to harden systems and processes",
      "Typical delivery window: 3–6 weeks",
    ],
  },
  {
    title: "Security audit and post-audit assistance",
    recommended: [
      "Improving the core performance of your security environment",
      "Hardening systems when you do not have in-house security specialists",
      "Closing critical gaps quickly after an assessment",
      "Turning findings into remediation work with guidance",
    ],
    outcomes: [
      "A full security assessment within 3–6 weeks",
      "Direct support to operationalize priority fixes",
      "Removal or mitigation of key vulnerabilities",
      "Expert recommendations on process and software adjustments",
    ],
  },
  {
    title: "Security audit subscription",
    recommended: [
      "Live or actively developing systems that need recurring review",
      "Teams in regulated or higher-risk industries such as finance and healthcare",
      "Reducing one-off audit overhead with a repeatable review cadence",
      "Maintaining security standards as products and integrations change",
    ],
    outcomes: [
      "An initial audit in 3–6 weeks, then shorter follow-up reviews",
      "Routine assessments with iterative performance analysis",
      "An established review rhythm for ongoing security work",
      "Clear protocols for follow-up checks and incident-ready response planning",
    ],
  },
];

export const hero = {
  title: "Cybersecurity solutions",
  lede:
    "As digital systems grow more connected, security has to be designed into products and operations — not added after a scare. Sofnology helps teams assess risk, close gaps, and build practical security into web, mobile, and cloud-facing work.",
  image: HERO_IMAGE,
  imageAlt: "Cybersecurity product visual with shield and teal glass accents",
  imageClass: "object-cover object-center",
  ctaLabel: "Start a Project",
  ctaHref: "#contact-form",
  ctaBackground: TEAL,
  ctaText: "#ffffff",
  ctaArrowColor: CYAN,
} as const;

export const cta = {
  title: "Start seeing improvements in cybersecurity today",
  lede:
    "Still have questions? Good. Whether you need clarity on risk, a focused audit, or help turning findings into a remediation plan, we can help you move from uncertainty to a practical security path.",
  ctaLabel: "Contact us",
  image: CTA_IMAGE,
  imageAlt: "Layered teal cybersecurity visual",
  panelBackground: TEAL,
  buttonBackground: CYAN,
  buttonText: "#101413",
} as const;

export const sticky: InteriorSticky = {
  label: "Start a Project",
  backgroundColor: CYAN,
  textColor: "#101413",
};

export const contact: InteriorContact = {
  accent: "teal",
};
