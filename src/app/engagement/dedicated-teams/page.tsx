"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

/** Ink + steel — distinct from outsourcing orange, startups wine, enterprises slate, AI cyan. */
const STEEL = "#6FA8DC";
const DEEP = "#243B55";
const SOFT = "#E4EEF7";
const PRIMARY_CTA = "Talk about a dedicated team";

const HERO_IMAGE = "/enterprise-services.jpg";
const CTA_IMAGE = "/enterprise-cta.png";

const fadeEase = [0.16, 1, 0.3, 1] as const;

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 14L14 6M14 6H7M14 6V13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const comparisonModels = [
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

const fitScenarios = [
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

const perks = [
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

const hireSteps = [
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

const mistakes = [
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

const relatedLinks = [
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
];

const faqs = [
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
];

function DedicatedTeamsHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-0 grid-cols-1 px-5 py-10 sm:px-6 sm:py-12 md:min-h-[410px] md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.1rem]">
                Dedicated development teams
              </h1>
            </div>

            <div className="mt-8 flex items-end sm:mt-12 lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                A Sofnology squad focused entirely on your product — composed for the work,
                integrated with your process, and built to stay with the roadmap without
                the drag of traditional hiring.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact-form"
            className="tap-press group relative flex min-h-[72px] items-center justify-between gap-6 overflow-hidden border-b border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] text-white md:px-10 md:min-h-[88px] md:px-10 md:text-xl lg:min-h-[360px] lg:items-start lg:py-8 lg:border-b-0 lg:px-8 xl:px-12"
            style={{ backgroundColor: DEEP }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/14 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10 max-w-[15rem] leading-tight md:max-w-[17rem]">
              {PRIMARY_CTA}
            </span>
            <span
              className="relative z-10 lg:mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: STEEL }}
            >
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Engineering team collaborating in a modern workspace"
              className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-[58%_35%]"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="absolute right-[6%] bottom-0 hidden h-[68%] w-[34%] bg-[#f4f4f4] lg:block"
              style={{
                clipPath: "polygon(34% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ModelIntroSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[260px] grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex items-center border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:border-b-0 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              The right model to build the right product
            </h2>
          </div>
          <div className="flex items-center px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.78] tracking-tight text-neutral-700">
              In-house hiring is slow when you need to move. A dedicated development team
              is a remote extension of your staff — developers, designers, QA, and project
              leadership as needed — focused exclusively on your work, with the flexibility
              to scale as the product demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const [active, setActive] = useState(0);
  const model = comparisonModels[active];

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Dedicated team vs staff augmentation vs time &amp; materials
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Powerful support — but not always the best fit. Choose the engagement that
            matches how you want ownership and scope to work.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 md:grid-cols-3">
          {comparisonModels.map((item, index) => {
            const isActive = active === index;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`min-h-[88px] border-neutral-200 px-6 py-6 text-left text-lg font-semibold tracking-[-0.04em] transition-colors duration-300 md:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white text-neutral-950" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-800"}`}
              >
                <span
                  className="mb-3 block h-1 w-10 transition-opacity duration-300"
                  style={{
                    backgroundColor: isActive ? DEEP : "#d4d4d4",
                    opacity: isActive ? 1 : 0.7,
                  }}
                />
                {item.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: fadeEase }}
            className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]"
          >
            <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16">
              <p className="text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                {model.summary}
              </p>
              <p className="mt-10 text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                Best for
              </p>
              <ul className="mt-4 space-y-3">
                {model.bestFor.map((line) => (
                  <li
                    key={line}
                    className="text-[15px] leading-[1.55] tracking-tight text-neutral-800"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b border-neutral-200 px-6 py-12 md:border-b-0 md:border-r md:px-10 lg:px-12">
                <p className="text-[12px] font-semibold tracking-[0.14em] uppercase" style={{ color: DEEP }}>
                  Pros
                </p>
                <ul className="mt-5 space-y-4">
                  {model.pros.map((line) => (
                    <li
                      key={line}
                      className="text-[15px] leading-[1.55] tracking-tight text-neutral-700"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-12 md:px-10 lg:px-12">
                <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                  Watch-outs
                </p>
                <ul className="mt-5 space-y-4">
                  {model.cons.map((line) => (
                    <li
                      key={line}
                      className="text-[15px] leading-[1.55] tracking-tight text-neutral-700"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FitSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            When dedicated teams fill the bill
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Best for extended timelines, evolving scope, and work that needs a stable,
            specialized squad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {fitScenarios.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[210px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >
                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PerksSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            What you gain with a dedicated team
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            Focus, continuity, and the ability to reshape capacity without rebuilding
            your hiring machine every time the roadmap changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[220px] cursor-pointer border-white/14 px-6 py-8 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white/8" : "hover:bg-white/4"
                }`}
              >
                <div
                  className="mb-6 h-1 w-10"
                  style={{ backgroundColor: isActive ? STEEL : "rgba(255,255,255,0.25)" }}
                />
                <h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/70">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HireProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            How we assemble a dedicated team
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Sofnology handles selection and onboarding — you stay in control of fit and
            direction.
          </p>
        </div>

        <div>
          {hireSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <article
                key={step.title}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveStep(index); }}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-[0.22fr_0.78fr] border-neutral-200 transition-[min-height,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:grid-cols-[0.28fr_0.72fr] lg:grid-cols-[0.36fr_0.64fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[200px] bg-white" : "min-h-[100px] hover:bg-white/45"}`}
              >
                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className="text-[2.35rem] sm:text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl"
                    style={{ color: isActive ? DEEP : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {step.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-5 max-h-36 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MistakesSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Mistakes to avoid
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Dedicated teams fail less often from talent than from fuzzy goals, weak
            onboarding, or missing governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((item, index) => (
            <article
              key={item.problem}
              className={`min-h-[200px] border-neutral-200 px-6 py-8 md:px-8 lg:px-10 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                index > 0 ? "border-t md:border-t-0" : ""
              } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""}`}
            >
              <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                Problem
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                {item.problem}
              </h3>
              <p className="mt-5 text-[14px] leading-[1.68] tracking-tight text-neutral-700">
                <span className="font-semibold text-neutral-900">Fix: </span>
                {item.solution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DedicatedCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Team collaboration for dedicated development engagement"
              className="absolute inset-0 h-full w-full scale-[1.05] object-cover object-[42%_40%]"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: DEEP }}
          >
            <div className="w-full max-w-3xl">
              <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.05em] md:text-5xl lg:text-[3.1rem]">
                Ready for a team that stays with the product?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/75">
                We’ll help shape the pod, roles, and operating rhythm so you get focus and
                continuity — not another short-term hiring scramble.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#243B55] md:px-8"
                style={{ backgroundColor: STEEL }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10 max-w-[16rem] leading-tight">{PRIMARY_CTA}</span>
                <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRightIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16">
          <h2 className="max-w-5xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            FAQs
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`${index > 0 ? "border-t border-neutral-200" : ""} ${
                  isOpen ? "bg-white/45" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-24 w-full items-center justify-between gap-8 px-6 py-7 text-left transition-colors duration-300 hover:bg-white/35 md:px-10 lg:px-16"
                  aria-expanded={isOpen}
                >
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {faq.question}
                  </span>
                  <span className="text-4xl leading-none font-light text-[#243B55]" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`${faq.question}-answer`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: fadeEase }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-10 md:px-10 lg:px-16">
                        <p className="max-w-4xl text-[16px] leading-[1.75] tracking-tight text-neutral-700">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-3xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
            Related Sofnology work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {relatedLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`group flex min-h-[150px] flex-col justify-between border-neutral-200 px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.04em] text-neutral-950 md:text-xl">
                  {link.title}
                </h3>
                <p className="mt-4 max-w-sm text-[14px] leading-[1.65] tracking-tight text-neutral-700">
                  {link.description}
                </p>
              </div>
              <span
                className="mt-8 inline-flex transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: DEEP }}
              >
                <ArrowUpRightIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function DedicatedTeamsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <DedicatedTeamsHero />
        <div className="content-rail">
          <ModelIntroSection />
          <ComparisonSection />
          <FitSection />
          <PerksSection />
          <HireProcessSection />
          <MistakesSection />
          <DedicatedCtaSection />
          <FaqSection />
          <RelatedSection />
          <ContactSection showIntro={false} accent="steel" />
        </div>
      </main>
      <StickyCTA
        href="#contact-form"
        label={PRIMARY_CTA}
        backgroundColor={DEEP}
        textColor={"#ffffff"}
      />
      <Footer />
    </>
  );
}
