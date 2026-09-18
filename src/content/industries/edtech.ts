import { brand } from "@/lib/theme";
import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const MINT = "#7DDBA3";
export const DEEP = "#12241C";
export const MAGENTA = "#FF2D8A";
export const PRIMARY_CTA = "Talk about education software";

export const hero = {
  title: "Education software development",
  lede:
    "Custom education apps for individual learners and institutions — seamless, flexible experiences that hold up in real classrooms and real ops.",
  image: "/edtech-hero.jpg",
  imageAlt: "Abstract mint tracks with magenta, black, and orange spheres — education software hero",
  imageClass: "scale-[1.02] object-cover object-[55%_50%]",
  eyebrow: "Sofnology",
  eyebrowColor: MINT,
  gradientClass: "absolute inset-0 bg-gradient-to-r from-[#12241C]/55 via-[#12241C]/15 to-transparent",
  titleClass:
    "mt-3 text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.055em] sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.5rem]",
  ctaLabel: "Get in touch",
  ctaHref: "#contact-form",
  ctaBackground: MINT,
  ctaText: DEEP,
} as const;

export const cta = {
  lede: "Tell us about the learners, the institution, or the product you’re building.",
  image: "/edtech-mid.jpg",
  imageAlt: "Magenta sphere elevated on a pedestal among black spheres — edtech mid visual",
  imageClass: "object-cover object-[35%_55%]",
} as const;

export const products = [
  {
    title: "eLearning apps",
    description:
      "Fully functional education apps across devices — gamification, blended learning, and engagement patterns that fit how people actually study.",
  },
  {
    title: "Management software",
    description:
      "Institutional ops without the spreadsheet maze — fees, payroll, billing, library, inventory, and day-to-day admin in one coherent product.",
  },
  {
    title: "LMS / LCMS",
    description:
      "Create, update, and deliver learning content safely — on-premises or in the cloud — with systems educators can run without a IT fire drill.",
  },
  {
    title: "Education portals",
    description:
      "Scheduling, attendance, grading, performance reports, and resource libraries — portals that put students and educators in the same flow.",
  },
  {
    title: "Virtual classrooms",
    description:
      "Collaboration for students, teachers, tutors, and trainers — anywhere, any device — without turning class into a generic video call.",
  },
  {
    title: "Learning experience platforms",
    description:
      "LXPs that pull content from internal and external sources, with smart search and recommendation patterns shaped by learner behavior.",
  },
] as const;

export const audiences = [
  {
    title: "Educational institutions",
    description:
      "Schools, colleges, and universities — platforms that personalize learning materials and tighten day-to-day academic operations.",
  },
  {
    title: "Educational software companies",
    description:
      "Edtech startups and digital enterprises — product engineering that stays future-ready as the market and pedagogy shift.",
  },
  {
    title: "Non-profits",
    description:
      "Improve an existing LMS or build corporate training from the ground up — scoped to niche needs, not a generic template.",
  },
] as const;

export const challenges = [
  {
    title: "Build from scratch",
    description:
      "Innovation-led education products from zero — architecture, delivery, and launch shaped to your learners and growth stage.",
  },
  {
    title: "Modernize legacy eLearning",
    description:
      "Migrate aging platforms to architectures that ship features faster, cut maintenance drag, and open room for new capabilities.",
  },
  {
    title: "Improve what you already run",
    description:
      "Make the current solution more agile through integrations, plugins, and targeted product work — without a full rewrite.",
  },
] as const;

export const capabilities = [
  {
    title: "MVP development",
    description:
      "Core learning flows and infrastructure first — so you can validate the product with real learners before overbuilding.",
  },
  {
    title: "UX for learning",
    description:
      "Responsive, high-clarity interfaces that keep students and instructors engaged with the study process — not fighting the UI.",
  },
  {
    title: "Build, QA, and release",
    description:
      "Engineering, testing, and delivery habits that treat reliability as part of the learning experience.",
  },
  {
    title: "AR / VR learning",
    description:
      "Immersive simulations and scenarios when spatial practice beats another slide deck — for skills that need to be lived.",
  },
  {
    title: "AI in eLearning",
    description:
      "Analytics, automation, and recommendation patterns that support teaching insight — with humans still steering pedagogy.",
  },
] as const;

export const trustPoints = [
  {
    title: "Security-minded delivery",
    description:
      "Practices aimed at protecting learner data, reducing leakage risk, and hardening platforms against common attack paths.",
  },
  {
    title: "Built to scale",
    description:
      "Architectures that grow with enrollment, content volume, and institutional complexity — without a rewrite every semester.",
  },
  {
    title: "Accessibility as a product requirement",
    description:
      "Interfaces designed with accessibility standards in mind so more learners can actually use what you ship.",
  },
] as const;

export const processSteps = [
  {
    title: "Discovery",
    description:
      "Requirements, constraints, learner types, content, and learning strategy — before architecture locks in.",
  },
  {
    title: "Design",
    description:
      "User, product, and business needs turned into UI/UX that stays usable under real classroom pressure.",
  },
  {
    title: "Development",
    description:
      "Foundational architecture chosen for scalability, maintainability, and performance.",
  },
  {
    title: "QA",
    description:
      "Human-centric validation — the product doesn’t just run; it teaches and administers without friction.",
  },
  {
    title: "Adoption & care",
    description:
      "End-user training, documentation, and ongoing refinement as feedback and goals evolve after launch.",
  },
] as const;

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  accent: MINT,
  actionLabel: "View",
  titleSize: "md",
  links: [
    {
      title: "Mobile development",
      href: "/services/mobile-development",
      description: "Learner apps that travel with students beyond the campus network.",
    },
    {
      title: "Solutions for AI companies",
      href: "/engagement/solutions-for-ai-companies",
      description: "When LXP recommendations and analytics need serious ML engineering.",
    },
    {
      title: "Quality assurance",
      href: "/services/quality-assurance",
      description: "Release confidence for products where bugs interrupt learning.",
    },
    {
      title: "Dedicated teams",
      href: "/engagement/dedicated-teams",
      description: "A lasting pod when the curriculum product ships every term.",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: MAGENTA,
  items: [
    {
      question: "Do you build custom LMS and LXP platforms?",
      answer:
        "Yes. From content management and delivery to personalized learning experience layers — shaped to your institution or product model, not a forced off-the-shelf fit.",
    },
    {
      question: "Can you modernize a legacy eLearning system?",
      answer:
        "Yes. We migrate and re-architect aging platforms so new features ship faster and maintenance cost stops dominating the roadmap.",
    },
    {
      question: "Do you work with schools and with edtech startups?",
      answer:
        "Both — plus non-profits. The product shape changes; the delivery discipline stays the same: clear learners, clear admin needs, honest scope.",
    },
    {
      question: "How do you approach AI and AR/VR in education?",
      answer:
        "Only where it improves learning or ops. Recommendations, analytics, and immersive practice when they earn their place — not as feature stickers.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: PRIMARY_CTA,
  backgroundColor: brand.navy,
  textColor: "#101413",
};

export const contact: InteriorContact = {
  accent: "mint",
};
