import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const LIME = "#B8F25A";
export const DEEP = "#0B3D2E";
export const PRIMARY_CTA = "Talk about healthtech software";
export const MID_IMAGE = "/healthtech-mid.jpg";

export const hero = {
  title: "Healthcare & Healthtech",
  lede:
    "We build solutions for healthcare teams — including appointment communication, operational software, and systems that take privacy seriously. This is not a claim of decades as a clinical institution.",
  image: "/healthtech-hero.jpg",
  imageAlt: "Abstract healthtech visual with moss, glass panels, and clinical geometry",
  imageClass: "scale-[1.04] object-cover object-[42%_48%]",
  ctaLabel: "Get in touch",
  ctaHref: "#contact-form",
  ctaBackground: LIME,
  ctaText: "#0B3D2E",
} as const;

export const cta = {
  title: "Ready to shape the healthcare of tomorrow?",
  lede:
    "Tell us about the care setting, the users, and the compliance constraints — we’ll help shape a practical build path.",
  ctaLabel: PRIMARY_CTA,
  ctaHref: "#contact-form",
} as const;

export const helpServices = [
  {
    title: "Healthcare software development",
    description:
      "Tailored platforms guided by your market and audience — so clinicians get clearer workflows and organizations can pursue better care at sustainable cost.",
  },
  {
    title: "Mobile medical apps",
    description:
      "mHealth experiences that expand patient and clinician access — acquisition, loyalty, and day-to-day engagement without fracturing the care journey.",
  },
  {
    title: "Medical device software",
    description:
      "Software for devices that support chronic care, image recognition, and treatment planning — with reliability treated as a patient-safety concern.",
  },
  {
    title: "Telemedicine apps",
    description:
      "All-in-one telehealth products that personalize the consumer experience, reduce staff load, and improve how diagnostics and follow-up actually happen.",
  },
  {
    title: "EHR / EMR development",
    description:
      "Custom record systems that automate documentation and give staff a holistic view of each patient’s history — without burying them in clicks.",
  },
] as const;

export const telehealthScenarios = [
  {
    title: "Telehealth in nursing",
    description:
      "Secure apps for lab results, medication refills, and minor conditions managed remotely between patients and care teams.",
  },
  {
    title: "Telehealth in acute care",
    description:
      "Consultation and triage support for emergency and urgent pathways where speed and clarity matter most.",
  },
  {
    title: "Physical therapy",
    description:
      "Stay connected after in-person visits — track progress, schedule follow-ups, and keep adherence visible.",
  },
  {
    title: "Speech therapy",
    description:
      "Video and audio experiences designed so remote voice and speech therapy can match in-person effectiveness.",
  },
] as const;

export const beyondCare = [
  {
    title: "Digital therapeutics (DTx)",
    description:
      "Feature-rich therapeutic products designed for assessment and treatment decisions — clinically intentional, not generic wellness skins.",
  },
  {
    title: "HIPAA-aware app development",
    description:
      "Security and compliance patterns shaped for healthcare data demands — so regulatory requirements don’t become a late-stage rewrite.",
  },
  {
    title: "Internet of medical things",
    description:
      "Connected devices that help providers and patients share and monitor data, and help hospitals run resources and daily tasks more efficiently.",
  },
  {
    title: "Wearable health technologies",
    description:
      "Mobile apps synced with wearables to track conditions, activity, and lifestyle signals patients and providers can actually use.",
  },
  {
    title: "Data science and analytics",
    description:
      "Clinical and operational insight from live and retrospective data — care quality, population health, and business decisions on the same foundation.",
  },
] as const;

export const trustPoints = [
  {
    title: "Compliance-aware delivery",
    description:
      "Solutions designed with major healthcare and privacy expectations in mind — including HIPAA, GDPR, and HITECH-oriented practices.",
  },
  {
    title: "Security by design",
    description:
      "Access control, encryption, and operational discipline for products that hold clinical and personal health data.",
  },
  {
    title: "Seamless integrations",
    description:
      "Connect EHR, devices, payments, and partner systems so care doesn’t fracture across disconnected tools.",
  },
  {
    title: "Quality for patient safety",
    description:
      "Testing and release habits that treat reliability as a clinical requirement — issues caught before they reach production care paths.",
  },
] as const;

export const aiPoints = [
  {
    title: "AI discovery",
    description:
      "Identify high-impact, compliance-safe use cases before you invest — so adoption stays responsible and aligned with care goals.",
  },
  {
    title: "AI-powered product features",
    description:
      "Predictive analytics, clinical data processing, and decision support built with transparency and human oversight.",
  },
  {
    title: "Engineering with AI tools",
    description:
      "Vetted AI assistance in coding, testing, and documentation — so teams spend more time on interoperability, safety, and patient-facing quality.",
  },
] as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  accent: LIME,
  actionLabel: "View",
  titleSize: "md",
  links: [
    {
      title: "Cybersecurity",
      href: "/services/cybersecurity",
      description: "Deeper assessments when health data risk needs dedicated review.",
    },
    {
      title: "Mobile development",
      href: "/services/mobile-development",
      description: "Patient and clinician apps that connect to the broader care stack.",
    },
    {
      title: "Quality assurance",
      href: "/services/quality-assurance",
      description: "Release confidence for products where defects have clinical cost.",
    },
    {
      title: "Dedicated teams",
      href: "/engagement/dedicated-teams",
      description: "A lasting pod when healthtech roadmaps run for years, not sprints.",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: DEEP,
  items: [
    {
      question: "Do you build HIPAA-aware healthcare apps?",
      answer:
        "Yes. We design access, storage, auditability, and operational practices with healthcare privacy expectations in mind — and can connect deeper security reviews when the risk profile warrants it.",
    },
    {
      question: "Can you integrate with EHR systems and medical devices?",
      answer:
        "Yes. Integrations are a core part of healthtech delivery — records, devices, wearables, and partner systems — so clinicians and patients aren’t stuck in disconnected tools.",
    },
    {
      question: "Do you build telemedicine products from scratch?",
      answer:
        "Yes. From discovery through video, scheduling, messaging, and clinical workflows — shaped for the care setting you’re serving, not a generic video chat template.",
    },
    {
      question: "How do you approach AI in healthcare?",
      answer:
        "Carefully. We start with discovery for safe, useful use cases, keep humans in control of clinical decisions, and avoid hype metrics that don’t improve care or compliance.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: PRIMARY_CTA,
  backgroundColor: LIME,
  textColor: "#0B3D2E",
};

export const contact: InteriorContact = {
  accent: "clinic",
};
