"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

/** Punchy orange — distinct from Fintech gold / Ecommerce magenta / Amber DevOps. */
const ORANGE = "#FF6A00";
const DEEP = "#1A1512";
const SOFT = "#FFE8D6";

const HERO_IMAGE = "/project-outsourcing-hero.jpg";

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

const scenarios = [
  {
    title: "Tech isn’t your core business",
    description:
      "You need a team to own the build — without standing up an in-house engineering org.",
  },
  {
    title: "A scoped digital initiative",
    description:
      "You’re taking on a defined transformation and want clear ownership, milestones, and accountability through release.",
  },
  {
    title: "A low-risk first partnership",
    description:
      "You haven’t worked with an external software partner before and want a contained project to prove fit.",
  },
];

const valuePoints = [
  {
    title: "Visibility",
    description:
      "Status updates, demos, and milestone reporting — so you always know what’s shipping and what’s next.",
  },
  {
    title: "Cost clarity",
    description:
      "Time and materials with visible scope. You pay for progress, with transparency when priorities shift.",
  },
  {
    title: "Fast ramp",
    description:
      "When the roadmap accelerates, we add the right engineers quickly so delivery keeps pace.",
  },
];

const deliverySteps = [
  {
    title: "Discovery",
    description:
      "We align on goals and constraints, then estimate time, cost, and the team shape needed to deliver the project.",
  },
  {
    title: "Staffing",
    description:
      "We assemble engineers, designers, and a project lead matched to your technical and product needs.",
  },
  {
    title: "Engineering",
    description:
      "We build in reviewable increments toward a finished product — on time, within scope, and ready for real use.",
  },
  {
    title: "Release",
    description:
      "QA and hardening come before launch so go-live is calm, controlled, and supportable after day one.",
  },
];

const engagementModels = [
  {
    id: "project",
    title: "Project outsourcing",
    summary:
      "Sofnology owns delivery for a scoped outcome — discovery through release, with clear milestones.",
    bestFor:
      "When you need a finished product outcome and want one partner accountable for scope, timeline, and quality.",
    points: [
      "We own discovery through release",
      "Clear milestones and status visibility",
      "Best for MVPs, rebuilds, and contained initiatives",
    ],
    ctaLabel: "Start a project conversation",
    ctaHref: "#contact-form",
    current: true,
  },
  {
    id: "staff",
    title: "Staff augmentation",
    summary:
      "Extra capacity inside your operating rhythm — your process, your backlog, our engineers.",
    bestFor:
      "When you already run delivery and need senior engineers plugged into your standups, tools, and priorities.",
    points: [
      "You keep backlog and process ownership",
      "Engineers join your existing cadence",
      "Best for velocity gaps and specialist skills",
    ],
    ctaLabel: "Talk about staff augmentation",
    ctaHref: "/engagement/staff-augmentation",
    current: false,
  },
  {
    id: "dedicated",
    title: "Dedicated teams",
    summary:
      "A standing Sofnology pod that stays with your product over time, beyond a single project boundary.",
    bestFor:
      "When you need a lasting product team — not a one-off delivery — that grows with the roadmap.",
    points: [
      "Longer-horizon product partnership",
      "Stable pod across features and releases",
      "Best for continuous product development",
    ],
    ctaLabel: "Talk about dedicated teams",
    ctaHref: "/engagement/dedicated-teams",
    current: false,
  },
];

const relatedServices = [
  {
    title: "Software development",
    description: "Full-cycle builds when the project spans product, architecture, and delivery.",
    href: "/services/software-development",
  },
  {
    title: "Web development",
    description: "Customer-facing sites and apps that often sit at the center of a scoped engagement.",
    href: "/services/web-development",
  },
  {
    title: "Mobile development",
    description: "iOS, Android, and cross-platform apps delivered as a contained product outcome.",
    href: "/services/mobile-development",
  },
  {
    title: "Backend development",
    description: "APIs, services, and data foundations that carry the system behind the UI.",
    href: "/services/backend-development",
  },
];

const faqs = [
  {
    question: "How is project outsourcing different from staff augmentation?",
    answer:
      "With project outsourcing, Sofnology owns delivery for a scoped outcome — from discovery through release. Staff augmentation adds engineers into your existing process and backlog; you keep day-to-day ownership of priorities and operating rhythm.",
  },
  {
    question: "Do you work on a fixed scope or time and materials?",
    answer:
      "Most engagements start with discovery to clarify scope, then run on time and materials with visible milestones. That keeps cost transparent when priorities shift, while still holding a clear delivery path.",
  },
  {
    question: "What kinds of projects fit this model?",
    answer:
      "MVPs, custom product builds, platform upgrades, and contained digital initiatives where you want a partner to take the reins — not just fill seats — until a defined release is in market.",
  },
];

function ProjectOutsourcingHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-0 grid-cols-1 px-5 py-10 sm:px-6 sm:py-12 md:min-h-[410px] md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                Scoped builds we own until release
              </h1>
            </div>

            <div className="mt-8 flex items-end sm:mt-12 lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology project outsourcing — discovery through ship — so you stay
                focused on the business while we design, build, and deliver the product.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="relative order-1 min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:order-2 lg:min-h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Professional working on a laptop in a bright modern office"
              className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-[62%_28%]"
              decoding="async"
            />
          </div>

          <a
            href="#contact"
            className="tap-press group relative order-2 flex min-h-[72px] items-center justify-between overflow-hidden border-t border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] text-[#1A1512] md:min-h-[88px] md:px-10 md:text-xl lg:order-1 lg:min-h-[420px] lg:items-start lg:border-t-0 lg:px-8 lg:py-8 xl:px-12"
            style={{ backgroundColor: ORANGE }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:mt-1">
              <ArrowUpRightIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ScenariosSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              When this model fits
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Three common situations where owning delivery as a scoped project beats
              filling seats.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {scenarios.map((scenario, index) => {
            const isActive = active === index;

            return (
              <article
                key={scenario.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[280px] border-neutral-200 px-6 py-9 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: ORANGE }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? ORANGE : "#A3A3A3" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {scenario.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {scenario.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[140px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              What you get with us owning delivery
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              We take the reins so you can stay on the business — from MVP through
              architecture, build, and QA.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {valuePoints.map((point, index) => (
            <article
              key={point.title}
              className={`px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t border-neutral-200 md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-3xl font-light tracking-[-0.08em]"
                style={{ color: ORANGE }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                {point.title}
              </h3>
              <p className="mt-4 max-w-sm text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeDoItSection() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-[2.75rem]">
              How we run the engagement
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              Four stages from first conversation to a calm release — ownership stays with
              Sofnology the whole way.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <article
                key={step.title}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveStep(index); }}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-white/14 px-6 py-9 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-7 lg:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "text-[#1A1512]" : "text-white/70 hover:text-white"
                }`}
                style={{ backgroundColor: isActive ? SOFT : "transparent" }}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : ORANGE }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em]">
                  {step.title}
                </h3>
                <p
                  className={`mt-4 text-[14px] leading-[1.6] tracking-tight ${
                    isActive ? "text-[#1A1512]/80" : "text-white/65"
                  }`}
                >
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ModelContrastSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = engagementModels[activeIndex];

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Choose the right model
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Select a model to compare ownership, fit, and next step — project outsourcing
              is delivery ownership; the others put capacity inside your team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div role="tablist" aria-label="Engagement models">
            {engagementModels.map((model, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={model.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`model-tab-${model.id}`}
                  aria-controls="model-panel"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveIndex(index); }}
                  className={`flex min-h-[76px] w-full items-center justify-between gap-4 border-neutral-200 px-6 text-left transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 hover:bg-white/55 hover:text-neutral-950"
                  }`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  <span className="text-lg font-semibold tracking-[-0.03em] md:text-xl">
                    {model.title}
                  </span>
                  {model.current && isActive ? (
                    <span
                      className="shrink-0 text-[11px] font-semibold tracking-[0.08em] uppercase"
                      style={{ color: ORANGE }}
                    >
                      You&apos;re here
                    </span>
                  ) : (
                    <span
                      className={`shrink-0 transition-transform duration-300 ${
                        isActive ? "translate-x-0.5 -translate-y-0.5 text-white" : "text-neutral-400"
                      }`}
                      aria-hidden="true"
                    >
                      <ArrowUpRightIcon />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            id="model-panel"
            role="tabpanel"
            aria-labelledby={`model-tab-${active.id}`}
            className="border-t border-neutral-200 bg-white px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14 lg:py-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: ORANGE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {active.title}
                </h3>
                <p className="mt-5 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {active.summary}
                </p>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-800">
                  <span className="font-semibold text-neutral-950">Best for: </span>
                  {active.bestFor}
                </p>
                <ul className="mt-8 max-w-lg border-t border-neutral-200">
                  {active.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={active.ctaHref}
                  className="group relative mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-between overflow-hidden px-5 py-4 text-[15px] font-semibold tracking-[-0.03em] text-[#1A1512] md:text-base"
                  style={{ backgroundColor: ORANGE }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                  />
                  <span className="relative z-10">{active.ctaLabel}</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Capabilities we bring to the engagement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group flex min-h-[220px] flex-col justify-between border-neutral-200 px-6 py-9 transition-colors duration-300 hover:bg-white md:px-8 lg:px-9 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              } ${index >= 2 ? "md:border-t lg:border-t-0" : ""}`}
            >
              <div>
                <div
                  className="mb-6 h-1 w-10 origin-left transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: ORANGE }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950 md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {service.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#1A1512] transition-transform duration-300 group-hover:translate-x-1">
                View service
                <ArrowUpRightIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectOutsourcingCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div
          className="flex min-h-[340px] items-center px-5 py-9 text-white sm:px-6 sm:py-12 md:py-14 md:px-10 lg:min-h-[400px] lg:px-16 xl:px-20"
          style={{ backgroundColor: DEEP }}
        >
          <div className="w-full max-w-4xl">
            <div className="mb-8 h-1 w-14" style={{ backgroundColor: ORANGE }} />
            <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.05em] md:text-5xl">
              Have a scoped outcome in mind?
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
              Share the goal, timeline, and constraints. We’ll map a clear path from
              discovery to release — and tell you if another engagement model fits better.
            </p>

            <a
              href="#contact-form"
              className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#1A1512] md:px-8"
              style={{ backgroundColor: ORANGE }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10">Tell us about your project</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectOutsourcingFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
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
                  <span className="text-4xl leading-none font-light text-[#1A1512]" aria-hidden="true">
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


export default function ProjectOutsourcingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <ProjectOutsourcingHero />
        <div className="content-rail">
          <ScenariosSection />
          <ValueSection />
          <HowWeDoItSection />
          <ModelContrastSection />
          <ProjectOutsourcingCtaSection />
          <RelatedServicesSection />
          <ProjectOutsourcingFaqSection />
          <ContactSection showIntro={false} accent="orange" />
        </div>
      </main>
      <StickyCTA
        href="#contact-form"
        label="Get in touch"
        backgroundColor={ORANGE}
        textColor={"#1A1512"}
      />
      <Footer />
    </>
  );
}
