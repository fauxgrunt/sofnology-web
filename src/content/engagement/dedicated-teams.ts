import type { InteriorContact, InteriorFaq, InteriorRelated, InteriorSticky } from "@/lib/interior";

export const STEEL = "#6FA8DC";
export const DEEP = "#243B55";

export const hero = {
  title: "Dedicated development teams",
  lede:
    "A Sofnology squad focused entirely on your product — composed for the work, integrated with your process, and built to stay with the roadmap without the drag of traditional hiring.",
  image: "/enterprise-services.jpg",
  imageAlt: "Engineering team collaborating in a modern workspace",
  imageClass: "scale-[1.06] object-cover object-[58%_35%]",
  titleClass:
    "max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.1rem]",
  ctaLabel: "Talk about a dedicated team",
  ctaHref: "#contact-form",
  ctaBackground: DEEP,
  ctaText: "#ffffff",
  ctaArrowColor: STEEL,
  ctaMaxWidth: "max-w-[15rem] leading-tight md:max-w-[17rem]",
} as const;

export const cta = {
  title: "Ready for a team that stays with the product?",
  lede:
    "We’ll help shape the pod, roles, and operating rhythm so you get focus and continuity — not another short-term hiring scramble.",
  ctaLabel: "Talk about a dedicated team",
  image: "/enterprise-cta.jpg",
  imageAlt: "Team collaboration for dedicated development engagement",
  imageClass: "scale-[1.05] object-cover object-[42%_40%]",
  panelBackground: DEEP,
  buttonBackground: STEEL,
  buttonText: "#243B55",
} as const;

export const comparisonModels = [
  {
    id: "dedicated",
    title: "Dedicated team",
    summary:
      "A cross-functional Sofnology squad assigned exclusively to your product — an extension of your team that stays with the roadmap.",
    bestFor: [
      "Long-term product work with evolving scope",
      "Expanding capacity without in-house hiring overhead",
      "Complex builds that need end-to-end ownership",
    ],
    pros: [
      "Undivided focus on one product",
      "Cross-functional delivery (eng, design, QA, PM as needed)",
      "Scales up or down as the roadmap changes",
    ],
    cons: [
      "Less ideal for very short, one-off scopes",
      "Needs real integration into your process to pay off",
    ],
  },
  {
    id: "staff",
    title: "Staff augmentation",
    summary:
      "Individual specialists join your existing team, backlog, and cadence — you keep day-to-day ownership.",
    bestFor: [
      "Short- to mid-term skill or capacity gaps",
      "Supporting an in-house team that already runs delivery",
    ],
    pros: [
      "Fast access to specific skills",
      "Flexible ramp without building a full pod",
      "Lower overhead than permanent hires",
    ],
    cons: [
      "You still carry management load",
      "Too much reliance on external seats can create continuity risk",
    ],
    href: "/engagement/staff-augmentation",
  },
  {
    id: "tm",
    title: "Time and materials",
    summary:
      "Flexible engagement billed on actual effort — useful when scope is still forming or priorities shift often.",
    bestFor: [
      "Unclear or evolving requirements",
      "Exploratory or innovative work",
      "Clients who want close, ongoing feature decisions",
    ],
    pros: [
      "Scope can flex as learning arrives",
      "Spend stays transparent against real work",
    ],
    cons: [
      "Needs active client oversight",
      "Budget can drift without clear priorities",
    ],
  },
];

export const fitScenarios = [
  {
    title: "Complex product builds",
    description:
      "Multiple technologies and domains in one roadmap — a stable squad beats rotating freelancers.",
  },
  {
    title: "Long-term initiatives",
    description:
      "Months or years of continuous delivery where context and ownership compound.",
  },
  {
    title: "Startups and new products",
    description:
      "Shifting markets and requirements — a dedicated pod can pivot without restarting hiring every quarter.",
  },
  {
    title: "Scale-up capacity",
    description:
      "Grow engineering output without the cost and delay of standing up a full in-house org overnight.",
  },
  {
    title: "Evolving requirements",
    description:
      "User feedback and market signals change the plan — iteration is the default, not a change-order crisis.",
  },
  {
    title: "Niche or specialized work",
    description:
      "Skills you cannot hire locally fast enough — assembled into one focused team on your product.",
  },
];

export const perks = [
  {
    title: "Focused commitment",
    description:
      "The squad works your product — not a rotating queue of unrelated clients — so context sticks.",
  },
  {
    title: "Long-horizon cost efficiency",
    description:
      "More predictable than stacking short contracts when the roadmap is continuous.",
  },
  {
    title: "Broader talent access",
    description:
      "Compose the mix you need — frontend, backend, mobile, QA, design — beyond local hiring limits.",
  },
  {
    title: "Lower admin burden",
    description:
      "Sofnology handles hiring, employment, and team continuity so you stay on product decisions.",
  },
  {
    title: "Faster path to velocity",
    description:
      "A ready, matched pod shortens the gap between decision and shipping capacity.",
  },
  {
    title: "Scalability without drama",
    description:
      "Adjust team shape as priorities shift — without permanent-hire lock-in or painful layoffs.",
  },
];

export const hireSteps = [
  {
    title: "Define goals and constraints",
    description:
      "Align on objectives, scope shape, timeline, skills, and how your team likes to work.",
  },
  {
    title: "Interview and select",
    description:
      "We screen for technical and collaboration fit, then present profiles. You interview until the match is right.",
  },
  {
    title: "Set collaboration rhythm",
    description:
      "Agree tools, ceremonies, and communication so remote and in-house work as one unit.",
  },
  {
    title: "Onboard into your world",
    description:
      "Context on product, codebase, processes, and culture — so the pod is useful from week one.",
  },
  {
    title: "Govern with clear reporting",
    description:
      "Shared metrics, regular updates, and visible milestones so oversight stays light but real.",
  },
  {
    title: "Improve and rescale",
    description:
      "Feedback loops and an agile operating model let us grow, shrink, or reshape the squad as needed.",
  },
];

export const mistakes = [
  {
    problem: "Fuzzy goals",
    solution:
      "Define outcomes and success criteria before staffing — so selection and delivery stay aligned.",
  },
  {
    problem: "Ignoring cultural fit",
    solution:
      "Evaluate communication style and working norms, not only stack checkboxes.",
  },
  {
    problem: "Light technical vetting",
    solution:
      "Use interviews, work samples, and past delivery evidence before locking the pod.",
  },
  {
    problem: "No project management spine",
    solution:
      "Keep check-ins, tracking, and reporting — autonomy without visibility creates drift.",
  },
  {
    problem: "Weak onboarding",
    solution:
      "Plan technical, process, and product orientation so the team does not start blind.",
  },
  {
    problem: "No scalability plan",
    solution:
      "Choose a partner who can reshape the squad as scope and growth change.",
  },
];

export const related: InteriorRelated = {
  heading: "Related Sofnology work",
  actionColor: DEEP,
  variant: "list",
  columns: 3,
  links: [
    {
      title: "Project outsourcing",
      href: "/engagement/project-outsourcing",
      description: "When you need a scoped outcome owned through release — not a standing product pod.",
    },
    {
      title: "Solutions for startups",
      href: "/engagement/solutions-for-startups",
      description: "Product partnership patterns for early teams building toward product-market fit.",
    },
    {
      title: "Solutions for enterprises",
      href: "/engagement/solutions-for-enterprises",
      description: "Longer-horizon delivery inside complex stakeholder and compliance environments.",
    },
  ],
};

export const faqs: InteriorFaq = {
  signColor: DEEP,
  variant: "roomy",
  items: [
    {
      question: "How is a dedicated team different from staff augmentation?",
      answer:
        "Staff augmentation adds people into your existing process. A dedicated team is a Sofnology-owned pod focused on your product — often cross-functional — that can own larger slices of delivery while still integrating with your stakeholders.",
    },
    {
      question: "How is this different from project outsourcing?",
      answer:
        "Project outsourcing is built around a defined outcome and release boundary. Dedicated teams stay with the product across features and releases as the roadmap continues.",
    },
    {
      question: "Can we interview every engineer?",
      answer:
        "Yes. We shortlist candidates against your requirements; you interview and approve before anyone joins the pod.",
    },
    {
      question: "How quickly can a team start?",
      answer:
        "Kickoff depends on role mix and seniority. We aim for a practical ramp — typically measured in weeks, not a long hiring season — once requirements and interviews are clear.",
    },
  ],
};

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Talk about a dedicated team",
  backgroundColor: DEEP,
  textColor: "#ffffff",
};

export const contact: InteriorContact = {
  accent: "steel",
};
