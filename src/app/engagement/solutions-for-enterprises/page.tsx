"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

/** Slate steel — corporate; distinct from startups wine / outsourcing orange. */
const SLATE = "#3D4F5F";
const DEEP = "#1A1F24";
const ICE = "#D7E2EA";

const HERO_IMAGE = "/Conversation.jpg";
const SERVICES_IMAGE = "/enterprise-services.jpg";
const OUTCOMES_IMAGE = "/Digital growth.jpg";
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

const distinctPoints = [
  {
    title: "Built for many users, many places",
    description:
      "Enterprise software has to hold up when hundreds of people use it at once — across locations, departments, and time zones.",
  },
  {
    title: "Customization without chaos",
    description:
      "Roles, workflows, and permissions differ by team. The product has to adapt without becoming impossible to maintain.",
  },
  {
    title: "Security and uptime as defaults",
    description:
      "Sensitive data, compliance expectations, and low tolerance for downtime shape architecture, testing, and support from day one.",
  },
];

const enterpriseServices = [
  {
    shortTitle: "Consulting",
    title: "Enterprise software consulting",
    description:
      "Strategic advice that maps business goals to software choices — what to build, modernize, integrate, or leave alone.",
    points: ["Needs analysis", "Solution options", "Roadmap aligned to goals"],
  },
  {
    shortTitle: "Legacy modernization",
    title: "Legacy software modernization",
    description:
      "Overhaul outdated systems without freezing the business. Preserve essential data while making infrastructure faster and ready for what’s next.",
    points: ["Phased modernization", "Data continuity", "Lower operational risk"],
  },
  {
    shortTitle: "Custom software",
    title: "Custom enterprise software",
    description:
      "Software shaped to your organization — employee-level customization and workflows that fit how each stakeholder group actually works.",
    points: ["Role-aware features", "Stakeholder workflows", "Owned architecture"],
  },
  {
    shortTitle: "Integration",
    title: "Enterprise application integration",
    description:
      "Connect disparate systems so data flows cleanly across the organization — with real-time access to what teams need.",
    points: ["System interoperability", "Reliable data flow", "Fewer silos"],
  },
  {
    shortTitle: "Cloud migration",
    title: "Cloud migration",
    description:
      "Move on-premises software and data to the cloud platform that fits — with room to grow in agility, safety, and cost control.",
    points: ["Platform selection", "Migration planning", "Hybrid-ready paths"],
  },
  {
    shortTitle: "Support & QA",
    title: "Support, maintenance, and testing",
    description:
      "Ongoing support and enterprise QA so software stays stable after launch — reliability, security, and performance checked before production.",
    points: ["Issue response and updates", "Functional and performance QA", "Operational continuity"],
  },
  {
    shortTitle: "Cybersecurity",
    title: "Cybersecurity services",
    description:
      "Protect enterprise software and data from threats and unauthorized access — assessments, hardening, and audits when the stakes are high.",
    points: ["Risk assessment", "Hardening guidance", "Security reviews"],
    href: "/services/cybersecurity",
  },
];

const outcomes = [
  {
    title: "Automate business processes",
    description:
      "Free teams for strategic work — from report generation to end-to-end procurement and multi-step operational workflows.",
  },
  {
    title: "Real-time business insight",
    description:
      "Analytics across sales, customers, logistics, and operations so leaders can anticipate change instead of reacting late.",
  },
  {
    title: "Integrate enterprise systems",
    description:
      "Eliminate silos so departments share current data — and critical information stays accessible when decisions can’t wait.",
  },
  {
    title: "Extend with AI, ML, and data",
    description:
      "Predict trends and surface strategic signals that would be hard to notice with manual reporting alone.",
  },
];

const workModels = [
  {
    title: "Staff augmentation",
    description: "Experts integrate with your existing team. You pick the skills and scale as demand evolves.",
    points: [
      "Plug into your current squad",
      "Choose the skills you need",
      "Flexible capacity as priorities shift",
    ],
    href: "/engagement/staff-augmentation",
    ctaLabel: "View staff augmentation",
  },
  {
    title: "Dedicated teams",
    description: "A Sofnology pod dedicated to your initiative — you steer priorities with full support for ongoing needs.",
    points: [
      "Team focused on your work",
      "Direct control of priorities",
      "Support for continuous delivery",
    ],
    href: "/engagement/dedicated-teams",
    ctaLabel: "View dedicated teams",
  },
  {
    title: "Software development outsourcing",
    description: "We own management, development, and delivery — with analysts helping define precise requirements.",
    points: [
      "End-to-end project ownership",
      "Delivery accountability on us",
      "Requirements clarity from the start",
    ],
    href: "/engagement/project-outsourcing",
    ctaLabel: "View project outsourcing",
  },
];

function EnterpriseHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-0 grid-cols-1 px-5 py-10 sm:px-6 sm:py-12 md:min-h-[410px] md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.1rem]">
                Enterprise systems that stay reliable at scale
              </h1>
            </div>

            <div className="mt-8 flex items-end sm:mt-12 lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology helps large organizations modernize and integrate without
                sacrificing uptime — delivery discipline for complex, multi-stakeholder
                systems.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="relative order-1 min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:order-2 lg:min-h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Enterprise stakeholders collaborating around documents and a laptop"
              className="absolute inset-0 h-full w-full scale-[1.12] object-cover object-[52%_28%]"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-[18%] bg-[#f4f4f4] lg:block"
              style={{ clipPath: "polygon(34% 0, 100% 0, 100% 100%, 0 100%)" }}
            />
          </div>

          <a
            href="#contact"
            className="tap-press group relative order-2 flex min-h-[72px] items-center justify-between overflow-hidden border-t border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] text-white md:min-h-[88px] md:px-10 md:text-xl lg:order-1 lg:min-h-[420px] lg:items-start lg:border-t-0 lg:px-8 lg:py-8 xl:px-12"
            style={{ backgroundColor: SLATE }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/18 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:mt-1"
              style={{ color: ICE }}
            >
              <ArrowUpRightIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function DistinctSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Why enterprise software is distinct
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Built for large organizations — multi-user scale, deep customization, high
              security, and support that keeps downtime rare.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {distinctPoints.map((point, index) => {
            const isActive = active === index;

            return (
              <article
                key={point.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: SLATE }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <span
                  className="text-3xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? SLATE : "#A3A3A3" }}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [active, setActive] = useState(2);
  const current = enterpriseServices[active];

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Our enterprise software services
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Consulting through modernization, integration, cloud, QA, security, and
              ongoing support — one coordinated delivery surface.
            </p>
          </div>
        </div>

        <div className="relative min-h-[240px] overflow-hidden border-b border-neutral-200 md:min-h-[320px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SERVICES_IMAGE}
            alt="Enterprise team reviewing system architecture and analytics on a wall display"
            className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[48%_32%]"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F24]/55 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 max-w-md text-[13px] font-semibold tracking-[0.08em] uppercase text-white md:bottom-8 md:left-10 lg:left-16">
            Architecture · delivery · operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div role="tablist" aria-label="Enterprise services">
            {enterpriseServices.map((service, index) => {
              const isActive = active === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                  className={`flex min-h-[68px] w-full items-center justify-between gap-4 border-neutral-200 px-6 text-left transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 hover:bg-white/55 hover:text-neutral-950"
                  }`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: isActive ? ICE : undefined }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-semibold tracking-[-0.03em] md:text-lg">
                      {service.shortTitle}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 transition-transform duration-300 ${
                      isActive ? "translate-x-0.5 -translate-y-0.5 text-white" : "text-neutral-300"
                    }`}
                    aria-hidden="true"
                  >
                    <ArrowUpRightIcon />
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
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: SLATE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {current.title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {current.description}
                </p>
                <ul className="mt-8 max-w-md border-t border-neutral-200">
                  {current.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                {"href" in current && current.href ? (
                  <Link
                    href={current.href}
                    className="group relative mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-between overflow-hidden px-5 py-4 text-[15px] font-semibold tracking-[-0.03em] text-white"
                    style={{ backgroundColor: SLATE }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                    />
                    <span className="relative z-10">Learn more</span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRightIcon />
                    </span>
                  </Link>
                ) : (
                  <a
                    href="#contact"
                    className="group relative mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-between overflow-hidden px-5 py-4 text-[15px] font-semibold tracking-[-0.03em] text-white"
                    style={{ backgroundColor: SLATE }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                    />
                    <span className="relative z-10">Discuss this service</span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWorkSection() {
  const [active, setActive] = useState(2);
  const current = workModels[active];

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-[2.75rem]">
              How we work with enterprises
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              Capacity inside your team, a dedicated pod, or full outsourcing — pick the
              ownership model that fits the initiative.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
          <div role="tablist" aria-label="How we work">
            {workModels.map((model, index) => {
              const isActive = active === index;

              return (
                <button
                  key={model.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                  className={`flex min-h-[80px] w-full items-center gap-4 border-white/14 px-6 text-left transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-[#1A1F24]" : "text-white/55 hover:text-white"}`}
                  style={{ backgroundColor: isActive ? ICE : "transparent" }}
                >
                  <span
                    className="text-[13px] font-medium tracking-tight"
                    style={{ color: isActive ? SLATE : undefined }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold tracking-[-0.03em] md:text-xl">
                    {model.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/14 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14 lg:py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: SLATE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em]">
                  {current.title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/75">
                  {current.description}
                </p>
                <ul className="mt-8 max-w-lg border-t border-white/14">
                  {current.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-white/14 py-3.5 text-[15px] leading-[1.45] tracking-tight text-white/85"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={current.href}
                  className="group relative mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-between overflow-hidden px-5 py-4 text-[15px] font-semibold tracking-[-0.03em] text-white md:text-base"
                  style={{ backgroundColor: SLATE }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                  />
                  <span className="relative z-10">{current.ctaLabel}</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Outcomes that move the business
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Enterprise software earns its keep when processes, insight, integration, and
              analytics all move together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative min-h-[320px] overflow-hidden border-b border-neutral-200 lg:min-h-[480px] lg:border-b-0 lg:border-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={OUTCOMES_IMAGE}
              alt="Team reviewing business analytics dashboards on a laptop"
              className="absolute inset-0 h-full w-full scale-[1.1] object-cover object-[58%_48%]"
              decoding="async"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {outcomes.map((outcome, index) => {
              const isActive = active === index;

              return (
                <article
                  key={outcome.title}
                  onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                  onFocus={() => setActive(index)}
                  tabIndex={0}
                  className={`min-h-[200px] cursor-pointer px-6 py-9 transition-colors duration-500 md:px-8 ${
                    index > 0 ? "border-t border-neutral-200 md:border-t-0" : ""
                  } ${index % 2 === 1 ? "md:border-l border-neutral-200" : ""} ${
                    index >= 2 ? "md:border-t border-neutral-200" : ""
                  } ${isActive ? "bg-white" : "hover:bg-white/40"}`}
                >
                  <motion.div
                    className="mb-5 h-1 origin-left"
                    style={{ backgroundColor: SLATE }}
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0.28, opacity: isActive ? 1 : 0.35 }}
                    transition={{ duration: 0.35, ease: fadeEase }}
                  />
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                    {outcome.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                    {outcome.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EnterpriseCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Enterprise partners walking through a modern corporate atrium"
              className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-[42%_28%]"
              decoding="async"
            />
          </div>

          <div className="flex min-h-[340px] items-center bg-white px-6 py-12 md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20">
            <div className="w-full max-w-3xl">
              <div className="mb-8 h-1 w-14" style={{ backgroundColor: SLATE }} />
              <h2 className="max-w-2xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.05em] text-neutral-950 md:text-5xl">
                Need a trusted enterprise software partner?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Tell us about the systems, constraints, and outcomes. We’ll help shape a
                practical path from discovery to durable delivery.
              </p>

              <a
                href="#contact"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-white md:px-8"
                style={{ backgroundColor: SLATE }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Reach out to Sofnology</span>
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



export default function SolutionsForEnterprisesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <EnterpriseHero />
        <div className="content-rail">
          <DistinctSection />
          <ServicesSection />
          <HowWeWorkSection />
          <OutcomesSection />
          <EnterpriseCtaSection />
          <ContactSection showIntro={false} accent="slate" />
        </div>
      </main>
      <StickyCTA
        href="#contact"
        label="Get in touch"
        backgroundColor={SLATE}
        textColor={"#ffffff"}
      />
      <Footer />
    </>
  );
}
