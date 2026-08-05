"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const CORAL = "#FF5A5F";
const DEEP = "#1C1714";
const SOFT = "#FFE0E1";

const HERO_IMAGE = "/frontend-hero.png";
const CTA_IMAGE = "/frontend-cta.png";

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

const frontendServices = [
  {
    title: "Design systems",
    description:
      "Reusable components, tokens, and patterns that keep product UI consistent as features grow.",
  },
  {
    title: "Product UI",
    description:
      "Interaction-heavy interfaces for dashboards, accounts, and workflows — built for clarity under real use.",
  },
  {
    title: "Performance",
    description:
      "Faster loads, smoother interactions, and leaner delivery across browsers and screen sizes.",
  },
  {
    title: "Accessibility and QA",
    description:
      "Practical checks for usability, assistive contexts, visual regressions, and release confidence.",
  },
  {
    title: "Progressive web apps",
    description:
      "Installable, resilient web experiences that feel closer to native when the product needs that reach.",
  },
  {
    title: "Modernization",
    description:
      "Upgrade aging frontends, clean structure, and move to modern stacks without freezing delivery.",
  },
];

const interfaceTypes = [
  {
    title: "Dashboards and admin",
    description:
      "Dense operational interfaces where hierarchy, scanability, and fast actions matter most.",
    points: ["Data-dense layouts", "Role-based views", "Action clarity"],
  },
  {
    title: "SaaS product UI",
    description:
      "Multi-view product experiences with accounts, settings, and feature modules that stay coherent.",
    points: ["Account flows", "Feature modules", "State and navigation"],
  },
  {
    title: "Marketing interfaces",
    description:
      "Campaign and brand surfaces where motion, storytelling, and conversion paths need precision.",
    points: ["Landing flows", "Responsive storytelling", "Lead capture UI"],
  },
  {
    title: "Design systems",
    description:
      "Shared UI foundations that help teams ship consistently across products and channels.",
    points: ["Component libraries", "Tokens and themes", "Usage guidance"],
  },
];

const deliverySteps = [
  {
    title: "Planning",
    description:
      "Define what the interface needs to do for users, for the business, and for the systems behind it.",
  },
  {
    title: "Prototyping",
    description:
      "Shape flows and interaction early so design and engineering align before full build begins.",
  },
  {
    title: "Build",
    description:
      "Implement the UI with the stack that fits — clean components, responsive behavior, and reviewable progress.",
  },
  {
    title: "Polish",
    description:
      "Test, refine performance, accessibility, and edge cases so the release feels ready in real use.",
  },
];

const principles = [
  {
    title: "Clarity",
    description:
      "Interfaces that communicate hierarchy, actions, and next steps without making users work for it.",
  },
  {
    title: "Speed",
    description:
      "Perceived and real performance treated as product quality — not a late optimization pass.",
  },
  {
    title: "Accessibility",
    description:
      "Usable across devices, input methods, and assistive contexts so more people can complete the job.",
  },
  {
    title: "Maintainability",
    description:
      "Component structure and patterns that stay easy to change as features and teams grow.",
  },
];

const engagementModels = [
  {
    title: "Staff augmentation",
    description:
      "Embed frontend specialists for design-system work, product UI velocity, or a release that needs extra craft capacity.",
  },
  {
    title: "Dedicated frontend team",
    description:
      "A team that owns the interface end to end — design and build together, then keeps the system coherent as it grows.",
  },
  {
    title: "Project delivery",
    description:
      "A scoped redesign or new UI release with clear milestones from prototype through polished ship.",
  },
];

const techStack = [
  {
    category: "What we ship with",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    lead: true,
  },
  {
    category: "Also in play",
    items: ["Vue", "Angular", "CSS Modules", "Component libraries"],
    lead: false,
  },
  {
    category: "Quality",
    items: ["Unit testing", "Visual checks", "Accessibility review", "Performance profiling"],
    lead: false,
  },
];

const relatedServices = [
  {
    title: "Web development",
    description:
      "End-to-end web products — portals, ecommerce, and full delivery beyond the interface layer.",
    href: "/services/web-development",
  },
  {
    title: "Backend development",
    description: "APIs, auth, and data layers that power the interfaces your users see.",
    href: "/services/backend-development",
  },
  {
    title: "Mobile development",
    description: "Native and cross-platform apps when the experience needs to live beyond the browser.",
    href: "/services/mobile-development",
  },
];

const faqs = [
  {
    question: "How is frontend different from your web development service?",
    answer:
      "Frontend focuses on interface craft — UI systems, interaction, performance, and accessibility. Web development covers broader product delivery including portals, ecommerce, and full-stack web scope.",
  },
  {
    question: "Do you design and build the frontend together?",
    answer:
      "Yes. Many engagements cover UX/UI and implementation as one path so design decisions stay grounded in what can ship cleanly.",
  },
  {
    question: "Can you work with our existing design system or codebase?",
    answer:
      "Yes. We often extend existing systems, clean up inconsistent patterns, or modernize parts of a frontend without a full rewrite.",
  },
];

function FrontendHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                Frontend development services
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology builds the interface layer — UI systems, interaction, and
                performance craft that make products feel clear and fast across devices.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact"
            className="group relative flex min-h-[260px] items-start justify-between overflow-hidden border-b border-neutral-200 px-6 py-8 text-xl font-semibold tracking-[-0.04em] text-white md:px-10 lg:min-h-[360px] lg:border-b-0 lg:px-8 xl:px-12"
            style={{ backgroundColor: CORAL }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span className="relative z-10 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[360px] overflow-hidden md:min-h-[430px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Designers collaborating on a colorful UI mockup on a tablet"
              className="absolute inset-0 h-full w-full object-cover object-[center_32%]"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Interface craft, end to end
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Not full web delivery — the systems, interaction, and quality work that make
              the product surface usable and maintainable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {frontendServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <article
                key={service.title}
                onClick={() => setActiveService(index)}

                onMouseEnter={() => {

                  if (window.matchMedia("(hover: hover)").matches) setActiveService(index);

                }}
                onFocus={() => setActiveService(index)}
                tabIndex={0}
                className={`min-h-[220px] cursor-pointer border-neutral-200 px-6 py-7 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >
                <motion.div
                  className="mb-5 h-1 origin-left"
                  style={{ backgroundColor: CORAL }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {service.title}
                </h3>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={{ duration: 0.35, ease: fadeEase }}
                  className="mt-4 text-[15px] leading-[1.6] tracking-tight text-neutral-700"
                >
                  {service.description}
                </motion.p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InterfaceTypesSection() {
  const [activeType, setActiveType] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-[2.75rem]">
              Interfaces we shape
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              Different surfaces need different craft — density, storytelling, system
              consistency, or product depth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {interfaceTypes.map((type, index) => {
              const isActive = activeType === index;

              return (
                <button
                  key={type.title}
                  type="button"
                  onClick={() => setActiveType(index)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActiveType(index);
                  }}
                  className={`flex min-h-[72px] w-full items-center border-white/14 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-[#1C1714]" : "text-white/55 hover:text-white"}`}
                  style={{ backgroundColor: isActive ? SOFT : "transparent" }}
                >
                  {type.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/14 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={interfaceTypes[activeType].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: CORAL }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em]">
                  {interfaceTypes[activeType].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                  {interfaceTypes[activeType].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-white/14">
                  {interfaceTypes[activeType].points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-white/14 py-3.5 text-[15px] leading-[1.45] tracking-tight text-white/85"
                    >
                      {point}
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

function DeliverySection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[200px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              How we deliver frontend
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              A clear path from planning to polish — so interface decisions stay tied to
              users, systems, and what can ship.
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

                onMouseEnter={() => {

                  if (window.matchMedia("(hover: hover)").matches) setActiveStep(index);

                }}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`min-h-[260px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-7 lg:min-h-[280px] lg:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: CORAL }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.6] tracking-tight text-neutral-700">
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

function PrinciplesSection() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[200px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              What we optimize for
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              A strong frontend is more than visual finish. It has to feel clear, fast,
              inclusive, and easy to evolve.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {principles.map((item, index) => {
              const isActive = activePrinciple === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActivePrinciple(index)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActivePrinciple(index);
                  }}
                  className={`flex min-h-[72px] w-full items-center border-neutral-200 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-white" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950"}`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={principles[activePrinciple].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: CORAL }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {principles[activePrinciple].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {principles[activePrinciple].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function EngagementSection() {
  const [activeModel, setActiveModel] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Partnership models
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {engagementModels.map((model, index) => {
            const isActive = activeModel === index;

            return (
              <article
                key={model.title}
                onClick={() => setActiveModel(index)}

                onMouseEnter={() => {

                  if (window.matchMedia("(hover: hover)").matches) setActiveModel(index);

                }}
                onFocus={() => setActiveModel(index)}
                tabIndex={0}
                className={`min-h-[260px] cursor-pointer border-neutral-200 px-6 py-9 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <motion.div
                  className="mb-7 h-1 origin-left"
                  style={{ backgroundColor: CORAL }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {model.title}
                </h3>
                <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {model.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              What we ship with
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              React, Next.js, TypeScript, and Tailwind lead most deliveries. Other tools
              come in when the product or team needs them.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.29fr_0.29fr]">
          {techStack.map((group, index) => (
            <div
              key={group.category}
              className={`border-neutral-200 px-6 py-10 md:px-8 lg:px-12 ${
                index > 0 ? "border-t lg:border-t-0 lg:border-l" : ""
              } ${group.lead ? "bg-white/55" : ""}`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: CORAL }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                {group.category}
              </h3>
              <ul
                className={`mt-6 space-y-3 tracking-tight text-neutral-700 ${
                  group.lead
                    ? "text-[17px] leading-tight font-medium text-neutral-900"
                    : "text-[15px] leading-tight"
                }`}
              >
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
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
          <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Related Sofnology work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {relatedServices.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group flex min-h-[200px] flex-col justify-between border-neutral-200 px-6 py-9 transition-colors duration-300 hover:bg-white md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div>
                <div
                  className="mb-6 h-1 w-10 origin-left transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: CORAL }}
                />
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {service.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {service.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#1C1714] transition-transform duration-300 group-hover:translate-x-1">
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

function FrontendCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Colleagues reviewing a vibrant frontend dashboard on a tablet"
              className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: DEEP }}
          >
            <div className="w-full max-w-3xl">
              <h2 className="max-w-2xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-5xl">
                Looking for a frontend that feels clear and fast?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                Tell us about the product, the audience, and the interface constraints.
                We’ll help shape a practical frontend path.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-white md:px-8"
                style={{ backgroundColor: CORAL }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Tell us about your project</span>
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

function FrontendFaqSection() {
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
                  <span className="text-4xl leading-none font-light text-[#1C1714]" aria-hidden="true">
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
            className="pointer-events-auto mx-auto flex h-14 max-w-md items-center justify-between gap-4 px-5 text-[15px] font-semibold tracking-[-0.03em] text-white shadow-[0_12px_40px_rgba(28,23,20,0.22)] md:h-16 md:max-w-lg md:px-6 md:text-base"
            style={{ backgroundColor: CORAL }}
          >
            <span>Get in touch</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function FrontendDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <FrontendHero />
        <div className="content-rail">
          <ServicesSection />
          <InterfaceTypesSection />
          <DeliverySection />
          <PrinciplesSection />
          <EngagementSection />
          <StackSection />
          <RelatedServicesSection />
          <FrontendCtaSection />
          <FrontendFaqSection />
          <ContactSection showIntro={false} accent="coral" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
