"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/** Ink + electric cyan — AI systems signal; avoids purple bias and ecommerce magenta. */
const CYAN = "#2EE6D6";
const DEEP = "#12141A";
const SOFT = "#C8F7F2";

const HERO_IMAGE = "/AI-startup-hero.jpg";
const MID_IMAGE = "/AI-startup-mid.jpg";
const CTA_IMAGE = "/AI-startup-cta.jpg";

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

const costPoints = [
  {
    title: "Noise instead of context",
    description:
      "Bloated context windows drown models. Vague prompts produce drafts engineers rewrite from scratch — time spent twice.",
  },
  {
    title: "Unvalidated agent output",
    description:
      "Hallucinations and defects slip into production when review gates are missing. Fixes later cost far more than catching them early.",
  },
  {
    title: "Pilots that never compound",
    description:
      "Tool licenses without a delivery system plateau fast. Usage looks busy; throughput, quality, and unit economics stay flat.",
  },
];

const maturityStages = [
  {
    stage: "Stage 1",
    title: "Individual exploration",
    pattern:
      "AI helps individuals on small, low-risk tasks. Usage is personal, ad hoc, and uneven — if someone leaves, the practice leaves with them.",
    advance: [
      "Shared review expectations start to appear",
      "Team sees uneven gains and wants consistency",
      "Leadership asks for a baseline, not anecdotes",
    ],
  },
  {
    stage: "Stage 2",
    title: "Team-wide adoption",
    pattern:
      "AI becomes a shared capability. Engineers use common tools, baselines, and review expectations. New members ramp in days, not weeks.",
    advance: [
      "Shared prompt library in active use",
      "AI flagging issues before merge, not after",
      "Adoption tracked beyond individual preference",
    ],
  },
  {
    stage: "Stage 3",
    title: "Integrated workflows",
    pattern:
      "AI sits inside repeatable workflows. Scoped work moves through draft, review, and refinement. Teams rely on shared setups, not personal hacks.",
    advance: [
      "Specs written so agents can execute against them",
      "Architecture context kept current and accessible",
      "Routine SDLC work measurably faster",
    ],
  },
  {
    stage: "Stage 4",
    title: "Orchestrated delivery",
    pattern:
      "AI supports the full artifact lifecycle through connected, traceable specifications. Pilots stop burning budget and start compounding returns.",
    advance: [
      "Multiple agent workflows run in parallel with gates",
      "Outputs pass structured review before merge",
      "Feature-level visibility into time saved and quality",
    ],
  },
  {
    stage: "Stage 5",
    title: "AI-driven development",
    pattern:
      "AI is the default execution layer. Governance, evidence, and lifecycle health are managed at org level. Engineers govern and validate more than they type.",
    advance: [
      "Quality and security enforced across outputs",
      "Releases accelerate without headcount theater",
      "Developers act as governors of the system",
    ],
  },
];

const specSteps = [
  {
    title: "Business intent",
    description:
      "Turn goals into structured requirements AI can execute against — clear, consistent, and reviewable.",
  },
  {
    title: "UX specifications",
    description:
      "Formalize design intent into precise implementation targets so frontend work has a reliable source of truth.",
  },
  {
    title: "Architecture guidance",
    description:
      "ADRs and diagrams that guide downstream decisions and reduce architectural drift early.",
  },
  {
    title: "Work decomposition",
    description:
      "Break initiatives into scoped epics and stories so AI works inside structured, reviewable boundaries.",
  },
  {
    title: "AI-assisted coding",
    description:
      "Generation inside guardrails — engineers review, validate, and trace output back to requirements.",
  },
  {
    title: "Embedded validation",
    description:
      "Tests, review checkpoints, and stage gates catch issues before they compound downstream.",
  },
  {
    title: "Artifact maintenance",
    description:
      "Keep docs, decisions, and tests current so the next AI-assisted cycle starts from a clean foundation.",
  },
];

const governance = [
  {
    title: "IP and data privacy",
    description:
      "Client IP stays with the client. Delivery is structured so commissioned work and AI-assisted artifacts remain yours.",
  },
  {
    title: "Model and prompt security",
    description:
      "Guardrails against prompt injection, hallucination propagation, and unvalidated agent output shipping to production.",
  },
  {
    title: "Judgment stays human",
    description:
      "Senior engineers stay in the validation and architecture loop — so speed never erodes the judgment that makes AI trustworthy.",
  },
  {
    title: "Audit-ready trails",
    description:
      "For regulated contexts, the artifact chain leaves a traceable record of decisions, approvals, and changes.",
  },
];

const measures = [
  {
    title: "Adoption",
    description:
      "Where AI is actually used across teams — gaps, coaching needs, and workflow friction made visible.",
  },
  {
    title: "Productivity",
    description:
      "Cycle time and hours saved — always read alongside quality, never as a vanity speed metric.",
  },
  {
    title: "Knowledge",
    description:
      "Documentation coverage and whether AI-generated plans are used in real delivery — or ignored.",
  },
  {
    title: "Economics",
    description:
      "Cost per feature and net engineering gain — benchmarked before rollout and tracked after.",
  },
];

const faqs = [
  {
    question: "How do you know AI is helping and not creating more rework?",
    answer:
      "We look past generated lines of code. If features aren’t shipping faster, bugs aren’t dropping, and the same headcount isn’t covering more ground, the AI system isn’t working — regardless of tool usage.",
  },
  {
    question: "Is this only for AI product companies?",
    answer:
      "No. It fits AI-native startups and enterprises embedding AI into delivery alike. The common need is a system — maturity, specs, validation, and governance — not another disconnected pilot.",
  },
  {
    question: "How is this different from buying Copilot licenses?",
    answer:
      "Licenses start exploration. Sofnology helps you move from ad-hoc use to orchestrated delivery: shared workflows, spec-driven work, review gates, and measurable outcomes across the SDLC.",
  },
];

function AiHero() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10">
        <div className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-white md:text-6xl lg:text-[4.1rem]">
                AI tools aren’t a delivery system
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-white/72">
                Sofnology helps AI companies and AI-enabled teams build systems that make
                models reliable at scale — across planning, build, review, and release.
              </p>
            </div>
          </div>
        </div>

        {/* Image left (subject + open right space), cyan CTA right — matches render composition */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.66fr_0.34fr]">
          <div
            className="relative min-h-[280px] overflow-hidden md:min-h-[360px] lg:min-h-[440px]"
            style={{ backgroundColor: "#0A0B0E" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Exploded 3D precision module with cyan glowing core"
              className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[22%_50%]"
              decoding="async"
            />
          </div>

          <a
            href="#contact"
            className="group relative flex min-h-[72px] items-center justify-between overflow-hidden border-t border-white/10 px-6 py-5 text-lg font-semibold tracking-[-0.04em] text-[#12141A] md:min-h-[88px] md:px-10 md:text-xl lg:min-h-[440px] lg:items-start lg:border-t-0 lg:border-l lg:border-white/10 lg:px-8 lg:py-8 xl:px-12"
            style={{ backgroundColor: CYAN }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Book a free AI assessment</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:mt-1">
              <ArrowUpRightIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function CostSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              The cost of getting it wrong
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Poorly implemented AI doesn’t just underperform — it destroys value. Teams
              succeeding with AI run tighter systems, not more agents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {costPoints.map((point, index) => {
            const isActive = active === index;

            return (
              <article
                key={point.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[260px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: CYAN }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <span
                  className="text-3xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : "#A3A3A3" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MaturitySection() {
  const [active, setActive] = useState(3);
  const current = maturityStages[active];

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        {/* Mid image left + intro copy in dark right half — uses negative space in the render */}
        <div className="grid grid-cols-1 border-b border-white/14 lg:grid-cols-[0.52fr_0.48fr]">
          <div
            className="relative min-h-[280px] overflow-hidden md:min-h-[360px] lg:min-h-[420px]"
            style={{ backgroundColor: "#0A0B0E" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MID_IMAGE}
              alt="3D AI system module with cyan core and glass layers"
              className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-[18%_50%]"
              decoding="async"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-12 md:px-10 lg:px-14 xl:px-16">
            <p
              className="text-[13px] font-semibold tracking-[0.08em] uppercase"
              style={{ color: CYAN }}
            >
              Maturity model
            </p>
            <h2 className="mt-4 max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-[2.75rem]">
              Where is your team, really?
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.7] tracking-tight text-white/72">
              Five stages from ad-hoc exploration to governed, AI-native delivery. Most
              teams sit between Stage 1 and 2 — Stage 4 is where compounding returns
              begin.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div role="tablist" aria-label="AI maturity stages">
            {maturityStages.map((item, index) => {
              const isActive = active === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className={`flex min-h-[72px] w-full items-center gap-4 border-white/14 px-6 text-left transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-[#12141A]" : "text-white/55 hover:text-white"}`}
                  style={{ backgroundColor: isActive ? SOFT : "transparent" }}
                >
                  <span
                    className="text-[12px] font-medium"
                    style={{ color: isActive ? DEEP : CYAN }}
                  >
                    {item.stage}
                  </span>
                  <span className="text-lg font-semibold tracking-[-0.03em]">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/14 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14 lg:py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.32, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: CYAN }} />
                <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-white/45">
                  AI adoption pattern
                </p>
                <h3 className="mt-3 text-3xl leading-tight font-semibold tracking-[-0.045em]">
                  {current.stage}: {current.title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/75">
                  {current.pattern}
                </p>
                <p className="mt-8 text-[13px] font-semibold tracking-[0.06em] uppercase text-white/45">
                  Advancement criteria
                </p>
                <ul className="mt-3 max-w-lg border-t border-white/14">
                  {current.advance.map((item) => (
                    <li
                      key={item}
                      className="border-b border-white/14 py-3.5 text-[15px] leading-[1.45] tracking-tight text-white/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecSection() {
  const [active, setActive] = useState(4);
  const current = specSteps[active];

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Spec-driven delivery
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Stage 4 is where pilots become scalable operations — a connected chain of
              artifacts AI drafts and senior engineers validate. Start with coding, then
              walk the full loop.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
          <div role="tablist" aria-label="Spec-driven delivery steps">
            {specSteps.map((step, index) => {
              const isActive = active === index;

              return (
                <button
                  key={step.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className={`flex min-h-[64px] w-full items-center gap-4 border-neutral-200 px-6 text-left transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 hover:bg-white/55 hover:text-neutral-950"
                  }`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  <span
                    className="text-[12px] font-medium"
                    style={{ color: isActive ? CYAN : undefined }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-semibold tracking-[-0.03em] md:text-lg">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 bg-white px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14 lg:py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.32, ease: fadeEase }}
              >
                <span className="text-5xl font-light tracking-[-0.08em]" style={{ color: DEEP }}>
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {current.title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {current.description}
                </p>
                <div className="mt-10 flex flex-wrap gap-2">
                  {specSteps.map((step, index) => (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActive(index)}
                      className="h-2 transition-all duration-300"
                      style={{
                        backgroundColor: index === active ? CYAN : "#D4D4D4",
                        width: index === active ? 40 : 24,
                      }}
                      aria-label={`Go to ${step.title}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function GovernanceSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Responsible AI, built in
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Governance from the start — not bolted on after something goes wrong.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {governance.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[220px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-10 lg:px-12 ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index % 2 === 1 ? "md:border-l" : ""} ${
                  index >= 2 ? "md:border-t" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: CYAN }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.35, ease: fadeEase }}
                />
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-[1.65] tracking-tight text-neutral-700">
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

function MeasureSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[140px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              What gets measured gets managed
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Licenses and vibes aren’t enough. Leadership needs a defensible view of
              where AI creates real delivery value.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {measures.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[180px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 md:px-7 ${
                  index > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
                } ${index >= 2 ? "sm:border-t lg:border-t-0" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >
                <motion.div
                  className="mb-5 h-1 origin-left"
                  style={{ backgroundColor: CYAN }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.35, ease: fadeEase }}
                />
                <h3 className="text-lg leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.55] tracking-tight text-neutral-700">
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

function RelatedSection() {
  const links = [
    {
      title: "Project outsourcing",
      description: "Owned delivery for a scoped AI or product outcome.",
      href: "/engagement/project-outsourcing",
    },
    {
      title: "Solutions for enterprises",
      description: "Modernization and reliable systems at org scale.",
      href: "/engagement/solutions-for-enterprises",
    },
    {
      title: "Software development",
      description: "Full-cycle product engineering behind AI-enabled delivery.",
      href: "/services/software-development",
    },
  ];

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-10 md:px-10 lg:px-16">
          <h2 className="max-w-3xl text-3xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
            Related Sofnology work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {links.map((link, index) => (
            <Link
              key={link.title}
              href={link.href}
              className={`group flex min-h-[180px] flex-col justify-between border-neutral-200 px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div>
                <div
                  className="mb-5 h-1 w-10 origin-left transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: CYAN }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {link.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.6] tracking-tight text-neutral-700">
                  {link.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#12141A] transition-transform duration-300 group-hover:translate-x-1">
                Explore
                <ArrowUpRightIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        {/* CTA render already has a white diagonal — keep panel white so geometry aligns */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.52fr_0.48fr]">
          <div
            className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0"
            style={{ backgroundColor: "#050506" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="3D stacked AI hardware module with cyan energy ring"
              className="absolute inset-0 h-full w-full object-cover object-[42%_50%] lg:object-[38%_50%]"
              decoding="async"
            />
          </div>

          <div className="flex min-h-[340px] items-center bg-white px-6 py-12 md:px-10 lg:min-h-[430px] lg:px-14 xl:px-16">
            <div className="w-full max-w-3xl">
              <div className="mb-8 h-1 w-14" style={{ backgroundColor: CYAN }} />
              <h2 className="max-w-2xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] text-neutral-950 md:text-5xl">
                You can’t pilot your way out of a pilot
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                We’ll locate where you sit on the five-stage model and name the
                highest-impact moves next — before you commit more tool spend.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#12141A] md:px-8"
                style={{ backgroundColor: CYAN }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/40 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Book a free AI assessment</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
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

function AiFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
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
                  <span className="text-4xl leading-none font-light text-[#12141A]" aria-hidden="true">
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
                      transition={{ duration: 0.28, ease: fadeEase }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl px-6 pb-8 text-[15px] leading-[1.72] tracking-tight text-neutral-700 md:px-10 lg:px-16">
                        {faq.answer}
                      </p>
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
            className="pointer-events-auto mx-auto flex h-14 max-w-md items-center justify-between gap-4 px-5 text-[15px] font-semibold tracking-[-0.03em] text-[#12141A] shadow-[0_12px_40px_rgba(18,20,26,0.22)] md:h-16 md:max-w-lg md:px-6 md:text-base"
            style={{ backgroundColor: CYAN }}
          >
            <span>Book a free AI assessment</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function SolutionsForAiCompaniesPage() {
  return (
    <>
      <Navbar />
      <main>
        <AiHero />
        <div className="content-rail">
          <CostSection />
          <MaturitySection />
          <SpecSection />
          <GovernanceSection />
          <MeasureSection />
          <AiCtaSection />
          <AiFaqSection />
          <RelatedSection />
          <ContactSection showIntro={false} accent="cyan" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
