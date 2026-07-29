"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/** Moss — distinct from dedicated steel, outsourcing orange, startups wine. */
const MOSS = "#74C69D";
const DEEP = "#1B4332";
const SOFT = "#D8F3DC";
const PRIMARY_CTA = "Talk about staff augmentation";

const HERO_IMAGE = "/web-dev-hero.jpg";
const CTA_IMAGE = "/web-dev-cta.jpg";

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

const wins = [
  {
    title: "Save on the hiring grind",
    description:
      "Recruiting senior engineers can take months. We match stack, culture, and timezone fit so you can plug in capacity without restarting a full search every time.",
  },
  {
    title: "Reduce delivery risk",
    description:
      "Get the expertise you need for the phase you’re in — so your product keeps moving while you stay focused on the business.",
  },
  {
    title: "Less admin, more flexibility",
    description:
      "Sofnology handles employment overhead. You scale seats up or down as demand shifts — without permanent-hire lock-in.",
  },
];

const roles = [
  "Developers",
  "Tech leads",
  "Solution / system architects",
  "UI/UX designers",
  "QA engineers",
  "DevOps",
  "Business analysts",
  "Project managers",
  "Data engineers",
];

const capabilityAreas = [
  {
    title: "Core product engineering",
    items: ["Frontend & backend", "Mobile (native & cross-platform)", "Web platforms", "Cloud development"],
  },
  {
    title: "Delivery & quality",
    items: ["QA & test automation", "DevOps & CI/CD", "Cybersecurity support", "Modernization work"],
  },
  {
    title: "Specialist tracks",
    items: ["AI / ML", "Data & analytics", "Integrations", "Architecture advisory"],
  },
];

const comparisonModels = [
  {
    id: "staff",
    title: "Staff augmentation",
    summary:
      "Individual Sofnology specialists join your existing team, backlog, and cadence. You keep day-to-day ownership of priorities and process.",
    bestFor: [
      "Skill or capacity gaps inside a team that already runs delivery",
      "Time-bound boosts with specialized expertise",
      "Keeping operations lean while you scale output",
    ],
    points: [
      "Natural fit with your in-house culture and tools",
      "Scale seats fast as requirements change",
      "You manage the people day to day",
    ],
  },
  {
    id: "dedicated",
    title: "Dedicated teams",
    summary:
      "A cross-functional Sofnology pod focused on your product — lasting partnership beyond filling a few seats.",
    bestFor: [
      "Large, long-term product work that may scale over time",
      "When local hiring is too slow or costly for a full squad",
    ],
    points: [
      "Undivided focus on one product roadmap",
      "Cross-functional mix as needed",
      "More autonomous under your product ownership",
    ],
    href: "/engagement/dedicated-teams",
  },
  {
    id: "outsourcing",
    title: "Project outsourcing",
    summary:
      "Sofnology owns a scoped outcome from discovery through release — best when you want a partner accountable for delivery, not just capacity.",
    bestFor: [
      "An entire project handed off start to finish",
      "First partnership with an external vendor",
      "Non-technical teams that need end-to-end ownership",
    ],
    points: [
      "Defined scope, stages, and delivery dates",
      "Clear milestone accountability",
      "You stay focused on business priorities",
    ],
    href: "/engagement/project-outsourcing",
  },
];

const fitScenarios = [
  {
    title: "Your team can’t keep pace",
    description:
      "Demand outgrew capacity — you need more hands in the same process, not a new operating model.",
  },
  {
    title: "Specialized skills, limited window",
    description:
      "You need niche expertise to ship a module, then don’t need that seat permanently.",
  },
  {
    title: "In-house team is stretched",
    description:
      "Core engineers are maxed out and you lack bandwidth to take on the next initiative alone.",
  },
  {
    title: "Local talent is scarce",
    description:
      "You need to expand quickly, but the right seniors are hard to hire where you are.",
  },
  {
    title: "Startup MVP momentum",
    description:
      "Funding is in place and you need product velocity without standing up a full hiring machine first.",
  },
  {
    title: "Hybrid on-site + remote",
    description:
      "You already have engineers on-site and want remote Sofnology talent covering other slices of the product.",
  },
];

const workSteps = [
  {
    title: "Schedule a call",
    description:
      "We explore goals, constraints, stack, culture, and the roles that would actually move the needle.",
  },
  {
    title: "Review matched profiles",
    description:
      "You get CVs for engineers screened against your requirements — not a generic bench dump.",
  },
  {
    title: "Interview who you choose",
    description:
      "You pick who to meet. No one joins without your approval.",
  },
  {
    title: "Contract and onboard",
    description:
      "We handle employment formalities and support onboarding into your tools, repos, and rituals.",
  },
  {
    title: "You manage; we support",
    description:
      "Engineers work inside your cadence. We stay available for continuity, replacements, and remote-team best practices.",
  },
];

const relatedLinks = [
  {
    title: "Dedicated teams",
    href: "/engagement/dedicated-teams",
    description: "When you need a standing product pod — not just individual seats in your process.",
  },
  {
    title: "Project outsourcing",
    href: "/engagement/project-outsourcing",
    description: "When you want Sofnology to own a scoped outcome through release.",
  },
  {
    title: "Software development",
    href: "/services/software-development",
    description: "Full-cycle product engineering when the work spans architecture and delivery.",
  },
];

const faqs = [
  {
    question: "How is staff augmentation different from dedicated teams?",
    answer:
      "Staff augmentation adds people into your existing process and backlog — you keep day-to-day ownership. Dedicated teams are a Sofnology-owned pod focused on your product, often cross-functional, for longer-horizon work.",
  },
  {
    question: "Who manages the engineers day to day?",
    answer:
      "You do. They join your standups, tools, and priorities. Sofnology handles employment, continuity, and support so you can focus on product decisions.",
  },
  {
    question: "Can we interview every candidate?",
    answer:
      "Yes. We shortlist against your requirements; you interview and approve before anyone starts.",
  },
  {
    question: "How quickly can someone start?",
    answer:
      "Ramp depends on role seniority and interview cycles. We aim for a practical start once fit is confirmed — not a months-long hiring season.",
  },
];

function StaffAugHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4rem]">
                Software development staff augmentation
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Plug Sofnology engineers into your team — developers, designers, QA,
                DevOps, and more — so you add the right skills without rebuilding hiring
                from scratch.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact-form"
            className="group relative flex min-h-[260px] items-start justify-between gap-6 overflow-hidden border-b border-neutral-200 px-6 py-8 text-xl font-semibold tracking-[-0.04em] text-white md:px-10 lg:min-h-[360px] lg:border-b-0 lg:px-8 xl:px-12"
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
              className="relative z-10 mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: MOSS }}
            >
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[360px] overflow-hidden md:min-h-[430px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Engineers collaborating — staff augmentation into your team"
              className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-[48%_32%]"
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

function WinsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[200px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Win with staff augmentation
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              Flexibility for startups and mature teams — add capacity that adapts with
              market demand and keeps time-to-market realistic.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {wins.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[260px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <motion.div
                  className="mb-7 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
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

function TalentSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Roles and expertise you can add
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From planning through maintenance — fill skill gaps at the phase you’re in,
            without standing up a full new department.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-neutral-200 px-6 py-10 md:px-10 lg:border-b-0 lg:border-r lg:px-16">
            <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
              Team roles
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="text-[15px] leading-tight tracking-tight text-neutral-700"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div>
            {capabilityAreas.map((group, index) => (
              <article
                key={group.title}
                className={`grid grid-cols-1 px-6 py-8 md:px-10 lg:grid-cols-[0.4fr_0.6fr] lg:px-12 ${
                  index > 0 ? "border-t border-neutral-200" : ""
                }`}
              >
                <h3 className="text-lg font-semibold tracking-[-0.035em] text-neutral-950">
                  {group.title}
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:mt-0">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[15px] leading-tight tracking-tight text-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
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
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Compare engagement models
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Staff augmentation, dedicated teams, and project outsourcing — pick the model
            that matches how you want ownership to work.
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
            className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]"
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
              {"href" in model && model.href && (
                <a
                  href={model.href}
                  className="group mt-10 inline-flex items-center gap-3 text-[15px] font-semibold tracking-[-0.03em] text-neutral-950"
                >
                  Explore {model.title.toLowerCase()}
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              )}
            </div>

            <div className="px-6 py-12 md:px-10 lg:px-16">
              <p className="text-[12px] font-semibold tracking-[0.14em] uppercase" style={{ color: DEEP }}>
                How it works in practice
              </p>
              <ul className="mt-5 space-y-4">
                {model.points.map((line) => (
                  <li
                    key={line}
                    className="border-b border-neutral-200 pb-4 text-[15px] leading-[1.55] tracking-tight text-neutral-700 last:border-b-0 last:pb-0"
                  >
                    {line}
                  </li>
                ))}
              </ul>
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
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            When staff augmentation makes sense
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Best when you already run delivery and need the right people inside that
            rhythm — not a full handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {fitScenarios.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[210px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 md:px-8 lg:px-10 ${
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

function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="min-h-[260px] border-b border-white/14 px-6 py-14 md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]">
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
              How we work
            </h2>
            <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-white/70">
              A clear path from conversation to engineers inside your process — with you
              in control of who joins.
            </p>
          </div>
        </div>

        <div>
          {workSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <article
                key={step.title}
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-white/14 transition-[min-height,background-color,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[220px] text-[#1B4332]" : "min-h-[110px] text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : DEEP }}
              >
                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className={`text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl ${
                      isActive ? "" : "text-white/50"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {step.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-6 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight opacity-85">
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

function StaffCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Team collaboration for staff augmentation engagement"
              className="absolute inset-0 h-full w-full scale-[1.05] object-cover object-[45%_40%]"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: DEEP }}
          >
            <div className="w-full max-w-3xl">
              <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-5xl lg:text-[3.1rem]">
                Ready to augment your staff?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/75">
                Tell us the skills you need. We’ll shortlist engineers who fit your stack,
                culture, and operating rhythm — you interview and decide.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#1B4332] md:px-8"
                style={{ backgroundColor: MOSS }}
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
        <div className="border-b border-neutral-200 px-6 py-16 md:px-10 lg:px-16">
          <h2 className="max-w-5xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
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
                  <span className="text-4xl leading-none font-light text-[#1B4332]" aria-hidden="true">
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

function StickyGetInTouch() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const contactTop = contact?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const pastHero = window.scrollY > 480;
      const beforeContact = contactTop > window.innerHeight * 0.65;
      setVisible(pastHero && beforeContact);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: fadeEase }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:px-6 md:pb-5"
        >
          <a
            href="#contact-form"
            className="pointer-events-auto mx-auto flex h-14 max-w-lg items-center justify-between gap-4 px-5 text-[14px] font-semibold tracking-[-0.03em] text-white shadow-[0_12px_40px_rgba(27,67,50,0.28)] md:h-16 md:max-w-xl md:px-6 md:text-[15px]"
            style={{ backgroundColor: DEEP }}
          >
            <span>{PRIMARY_CTA}</span>
            <span style={{ color: MOSS }}>
              <ArrowUpRightIcon />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function StaffAugmentationPage() {
  return (
    <>
      <Navbar />
      <main>
        <StaffAugHero />
        <div className="content-rail">
          <WinsSection />
          <TalentSection />
          <ComparisonSection />
          <FitSection />
          <HowWeWorkSection />
          <StaffCtaSection />
          <FaqSection />
          <RelatedSection />
          <ContactSection showIntro={false} accent="moss" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
