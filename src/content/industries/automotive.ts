import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const CORAL = "#FF6B4A";
export const DEEP = "#1A1512";
export const PRIMARY_CTA = "Talk about automotive software";

export const hero = {
  title: "Automotive software development",
  lede:
    "Automotive, meet automation. Sofnology helps OEMs, suppliers, dealers, and fleets digitize processes, integrate systems, scale securely, and meet regulatory demands — with architecture and UX built for real use.",
  image: "/automotive-hero.jpg",
  imageAlt: "Modern vehicle cabin with digital cockpit and infotainment screen",
  imageClass: "scale-[1.05] object-cover object-[55%_40%]",
  titleClass:
    "max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[3.9rem]",
  ctaLabel: PRIMARY_CTA,
  ctaHref: "#contact-form",
  ctaBackground: CORAL,
  ctaText: "#1A1512",
  ctaMaxWidth: "max-w-[14rem] leading-tight md:max-w-[16rem]",
} as const;

export const cta = {
  title: "Looking for first-class automotive software?",
  lede:
    "Our solutions focus on clarity, control, and systems that hold up in production — from cabin experiences to the platforms that keep fleets and dealers running.",
  ctaLabel: "Reach out now",
  image: "/automotive-cta.jpg",
  imageAlt: "Vehicle dashboard navigation screen in a modern cabin",
  imageClass: "scale-[1.04] object-cover object-[48%_45%]",
  panelBackground: DEEP,
  buttonBackground: CORAL,
  buttonText: "#1A1512",
} as const;

export const marketDrivers = [
  {
    title: "AI in the vehicle",
    description:
      "ADAS, navigation, and predictive systems need reliable data pipelines and models that hold up on the road — not just in demos.",
  },
  {
    title: "Safety under scrutiny",
    description:
      "Consumers and regulators expect adaptive cruise, collision avoidance, and related features to be trustworthy and testable.",
  },
  {
    title: "Connectivity and 5G",
    description:
      "Infotainment, phone pairing, and fleet telemetry move more data in real time — and expect the UX to keep up.",
  },
  {
    title: "Electric vehicles",
    description:
      "Battery, charging, and energy experiences are still being invented — software is part of how EVs feel modern.",
  },
] as const;

export const coreServices = [
  {
    title: "Automotive project discovery",
    description:
      "Align stakeholders, clarify the product, and pressure-test technical scope so budget and timeline stay honest before build starts.",
    points: ["Vision and audience fit", "Technical assessment", "Transparent scope and estimates"],
  },
  {
    title: "Custom automotive software",
    description:
      "Build new products or extend existing systems — with prototyping early enough to validate assumptions before they harden.",
    points: ["Rapid prototyping", "Documented delivery", "Outcomes tied to user and business goals"],
  },
  {
    title: "Integration services",
    description:
      "APIs and connectors between in-vehicle platforms, embedded systems, and third-party services for real-time exchange and diagnostics.",
    points: ["In-vehicle and cloud links", "Diagnostics and connected features", "Maintainable contracts"],
  },
  {
    title: "Modernization and support",
    description:
      "Upgrade stacks, refactor legacy code, and move monoliths toward services that stay operable — with ongoing fixes when issues appear.",
    points: ["Legacy refactor paths", "Microservices transitions", "Bug fixing and upkeep"],
  },
] as const;

export const audiences = [
  {
    title: "Startups",
    description:
      "Scalable foundations and collaborative delivery that keep startup speed without painting into a corner.",
    points: ["Strategic consulting", "Scalable product builds", "Market-ready launches"],
  },
  {
    title: "Enterprises",
    description:
      "R&D and production software that upgrades product lines with modern architecture and workflow APIs.",
    points: ["Advanced product tooling", "Workflow APIs", "Pragmatic use of current platforms"],
  },
  {
    title: "OEMs and suppliers",
    description:
      "Supply-chain and vehicle-integrated apps that fit how parts, inventory, and onboard systems actually operate.",
    points: ["Cross-device vehicle apps", "Management systems", "Data-led efficiency"],
  },
  {
    title: "Aftermarket businesses",
    description:
      "Diagnostics, maintenance, sales, and CRM experiences that keep owners engaged after the sale.",
    points: ["Diagnostics tools", "Payments and sales flows", "Automotive CRM"],
  },
  {
    title: "Fleet operators",
    description:
      "Inspection, tracking, and fleet management software that keeps logistics visible and maintainable.",
    points: ["Fleet management", "Inspection and tracking", "Ongoing system maintenance"],
  },
] as const;

export const solutionBuckets = [
  {
    id: "tech",
    title: "Technology and innovation",
    items: [
      {
        title: "Autonomous driving and ADAS",
        description:
          "Sensor pipelines, driver assistance, and digital cockpits that combine controls, media, and vehicle status in one usable surface.",
      },
      {
        title: "Safety and security",
        description:
          "Vehicle cybersecurity and incident-aware tooling that protect onboard systems and coordinate response when something goes wrong.",
      },
      {
        title: "Connectivity and telematics",
        description:
          "V2X, telematics insights, and IVI systems that connect the car to phones, cloud, and infrastructure.",
      },
      {
        title: "Electric vehicle software",
        description:
          "Battery and charging management, energy optimization, and emissions-related monitoring where compliance matters.",
      },
    ],
  },
  {
    id: "ops",
    title: "Operations and customer service",
    items: [
      {
        title: "Marketing and sales",
        description:
          "CRM, dealer management, and automotive ecommerce for leads, inventory, and after-sales relationships.",
      },
      {
        title: "Logistics and transportation",
        description:
          "Fleet coordination, routing, and supply-chain systems for inventory, shipping, and supplier visibility.",
      },
      {
        title: "Vehicle inspection",
        description:
          "OBD interfaces, maintenance scheduling, and QA-style simulation tooling for health and performance.",
      },
      {
        title: "Aftermarket services",
        description:
          "Parts inventory, rental and booking apps, and experiences that extend value beyond the first sale.",
      },
    ],
  },
] as const;

export const advancedTech = [
  {
    title: "Artificial intelligence",
    description:
      "Predictive maintenance, vision-assisted inspection, navigation intelligence, and service experiences powered by real vehicle data.",
  },
  {
    title: "Internet of things",
    description:
      "Sensors, gateways, and ADAS-adjacent connectivity for remote diagnostics, behavior insights, and charging coordination.",
  },
  {
    title: "Cloud development",
    description:
      "Scalable backends for telematics, big data handling, collaborative delivery, and secure update paths.",
  },
] as const;

export const approachPoints = [
  {
    title: "Regulatory awareness",
    description:
      "Build with automotive and regional expectations in mind — so compliance is designed in, not bolted on late.",
  },
  {
    title: "Security",
    description:
      "Protect data and onboard surfaces with practices suited to the territories and threat models you operate in.",
  },
  {
    title: "User experience",
    description:
      "Interfaces that prioritize clarity and safety for drivers, operators, and service teams — not novelty chrome.",
  },
  {
    title: "Quality",
    description:
      "Manual and automated testing, continuous integration, and validation habits that catch issues before they reach the road.",
  },
] as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  accent: CORAL,
  actionLabel: "View",
  titleSize: "md",
  links: [
    {
      title: "Cybersecurity",
      href: "/services/cybersecurity",
      description: "Deeper assessments when vehicle and fleet data risk needs dedicated review.",
    },
    {
      title: "Mobile development",
      href: "/services/mobile-development",
      description: "Companion apps and mobile journeys that connect to the vehicle experience.",
    },
    {
      title: "Cloud consulting",
      href: "/services/cloud-consulting",
      description: "Platform and migration advice for telematics and connected-vehicle backends.",
    },
    {
      title: "Dedicated teams",
      href: "/engagement/dedicated-teams",
      description: "A lasting engineering pod when automotive roadmaps run for years, not sprints.",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: DEEP,
  items: [
    {
      question: "Do you only build in-vehicle software?",
      answer:
        "No. We also build dealer, fleet, aftermarket, and cloud systems that sit around the vehicle — integrations, CRM, diagnostics, and management platforms included.",
    },
    {
      question: "Can you modernize legacy automotive systems?",
      answer:
        "Yes. Discovery, refactor paths, API layers, and staged migration are common when monoliths or aging stacks are blocking new features.",
    },
    {
      question: "How do you handle security and compliance?",
      answer:
        "We design with security and regulatory constraints early, and can connect deeper reviews to Sofnology cybersecurity when the risk profile warrants it.",
    },
    {
      question: "Which engagement model fits automotive work?",
      answer:
        "Staff augmentation for skill gaps, dedicated teams for long product roadmaps, or project outsourcing for scoped outcomes. We’ll help pick the fit.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: PRIMARY_CTA,
  backgroundColor: CORAL,
  textColor: "#1A1512",
};

export const contact: InteriorContact = {
  accent: "coral",
};
