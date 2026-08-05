"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

/** Deep wine — echoes Vention startups maroon; distinct from coral / magenta / orange. */
const WINE = "#8B1E3F";
const DEEP = "#1A1216";
const SOFT = "#F3D6DE";

/** Reused hero (same idea as Vention): strong office focus shot from another page. */
const HERO_IMAGE = "/frontend-hero.png";
/** New page-specific standalone for mid CTA. */
const CTA_IMAGE = "/solutions-startup-standalone.jpg";

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

const startupServices = [
  {
    title: "CTO as a Service",
    description:
      "Hiring full-time technical leadership is slow. Get stack guidance, architecture direction, and next-step planning before you’re ready for a permanent CTO.",
    points: ["Tech stack decisions", "Architecture direction", "Hiring and roadmap advice"],
  },
  {
    title: "Software development",
    description:
      "Full-cycle product builds and integrations — from first release to the features that help you outpace competitors.",
    points: ["End-to-end product builds", "Integrations and APIs", "Quality and release readiness"],
  },
  {
    title: "Technology advisory",
    description:
      "Strategic guidance to turn technical complexity into a clear investment plan — stack, implementation path, and launch priorities.",
    points: ["Requirements deep-dive", "Roadmap and spend clarity", "Launch and scale planning"],
  },
  {
    title: "Scaling mature startups",
    description:
      "Product is in market and the next stage needs more engineering depth and leadership — without losing speed.",
    points: ["Engineering team expansion", "Leadership support", "Reliability and growth systems"],
  },
  {
    title: "MVP development",
    description:
      "Fast iterations, solid testing, and a foundation that can grow — from concept to a market-ready first product.",
    points: ["Scoped MVP definition", "Swift build cycles", "Scalable foundations"],
  },
];

const domains = [
  {
    title: "Fintech",
    description:
      "Secure transaction flows, wallets, and analytics-ready products for financial startups that need trust from day one.",
    href: "/industries/fintech",
    ctaLabel: "Explore",
  },
  {
    title: "Ecommerce",
    description:
      "Storefronts, marketplaces, and commerce systems shaped for conversion and operational clarity.",
    href: "/industries/ecommerce",
    ctaLabel: "Explore",
  },
  {
    title: "Foodtech",
    description:
      "Ordering, ops, and delivery products for restaurants, kitchens, and marketplaces.",
    href: "/industries/foodtech",
    ctaLabel: "Explore",
  },
  {
    title: "Healthtech",
    description:
      "Provider and patient experiences built with security and compliance sensitivity from the start.",
    href: "/industries/healthtech",
    ctaLabel: "Explore",
  },
];

const partnershipModels = [
  {
    title: "Staff augmentation",
    description:
      "Seasoned engineers who plug into your tools, standups, and backlog — reinforcing delivery without building a new org.",
    idealFor: [
      "Velocity gaps without long hiring cycles",
      "Tight deadlines that need proven specialists",
      "Seamless fit with your existing process",
    ],
    href: "/engagement/staff-augmentation",
  },
  {
    title: "Dedicated teams",
    description:
      "A standing Sofnology pod that stays with your product — faster time-to-market and a wider skill mix than local hiring alone.",
    idealFor: [
      "Ongoing products with room to expand",
      "Need for multiple specializations quickly",
      "When local recruitment is too slow or costly",
    ],
    href: "/engagement/dedicated-teams",
  },
  {
    title: "Project-based delivery",
    description:
      "We own discovery through release — analysis, design, build, and QA — so your core team stays focused on growth.",
    idealFor: [
      "First collaboration with an external partner",
      "Scoped builds beyond your team’s capacity",
      "Full delivery ownership until launch",
    ],
    href: "/engagement/project-outsourcing",
  },
];

const faqs = [
  {
    question: "Do you work with early-stage startups or only later rounds?",
    answer:
      "Both. We partner from MVP and first product through scale-up — matching the engagement model to your stage, budget, and how much delivery ownership you want to keep.",
  },
  {
    question: "Can you help before we hire a full-time CTO?",
    answer:
      "Yes. CTO-as-a-service and tech advisory cover stack choices, architecture, roadmap, and hiring guidance until you’re ready for permanent leadership.",
  },
  {
    question: "Which engagement model is best for a first build?",
    answer:
      "Many first collaborations fit project-based delivery. If you already run a backlog and need capacity, staff augmentation or a dedicated pod may fit better — we’ll help you choose.",
  },
];

function StartupsHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-0 grid-cols-1 px-5 py-10 sm:px-6 sm:py-12 md:min-h-[410px] md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                Build and scale at startup speed
              </h1>
            </div>

            <div className="mt-8 flex items-end sm:mt-12 lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology partners with founders who shift and scale fast — clear
                technical choices for each stage, plus engineering teams as ambitious
                as you are.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="relative order-1 min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:order-2 lg:min-h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Engineers collaborating on a product interface in a modern loft office"
              className="absolute inset-0 h-full w-full scale-[1.12] object-cover object-[55%_22%]"
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
            style={{ backgroundColor: WINE }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/18 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:mt-1"
              style={{ color: SOFT }}
            >
              <ArrowUpRightIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function StartupServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Our services for startups
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              From first technical decisions to MVP, product build, and scale — support
              matched to where you are now.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div role="tablist" aria-label="Startup services">
            {startupServices.map((service, index) => {
              const isActive = active === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                  className={`flex min-h-[72px] w-full items-center gap-4 border-neutral-200 px-6 text-left transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 hover:bg-white/55 hover:text-neutral-950"
                  }`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  <span
                    className="text-[13px] font-medium tracking-tight"
                    style={{ color: isActive ? SOFT : undefined }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold tracking-[-0.03em] md:text-xl">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 bg-white px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14 lg:py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={startupServices[active].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: WINE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {startupServices[active].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {startupServices[active].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-neutral-200">
                  {startupServices[active].points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
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

function DomainsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Solutions across domains
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Startup products live in real verticals — we bring the same delivery craft
              into the domains we know best.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, index) => {
            const isActive = active === index;

            return (
              <Link
                key={domain.title}
                href={domain.href}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                className={`group flex min-h-0 flex-col justify-between sm:min-h-[220px] md:min-h-[260px] border-neutral-200 px-6 py-9 transition-colors duration-500 md:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >
                <div>
                  <motion.div
                    className="mb-6 h-1 origin-left"
                    style={{ backgroundColor: WINE }}
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                    transition={{ duration: 0.4, ease: fadeEase }}
                  />
                  <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                    {domain.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                    {domain.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#1A1216] transition-transform duration-300 group-hover:translate-x-1">
                  {domain.ctaLabel}
                  <ArrowUpRightIcon />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnershipModelsSection() {
  const [active, setActive] = useState(2);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-[2.75rem]">
              Our partnership models
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              Capacity inside your team, a lasting pod, or full project ownership —
              choose how you want to work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
          <div role="tablist" aria-label="Partnership models">
            {partnershipModels.map((model, index) => {
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
                  } ${isActive ? "text-[#1A1216]" : "text-white/55 hover:text-white"}`}
                  style={{ backgroundColor: isActive ? SOFT : "transparent" }}
                >
                  <span
                    className="text-[13px] font-medium tracking-tight"
                    style={{ color: isActive ? WINE : undefined }}
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
                key={partnershipModels[active].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: WINE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em]">
                  {partnershipModels[active].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/75">
                  {partnershipModels[active].description}
                </p>
                <p className="mt-8 text-[13px] font-semibold tracking-[0.06em] uppercase text-white/45">
                  Ideal for
                </p>
                <ul className="mt-3 max-w-lg border-t border-white/14">
                  {partnershipModels[active].idealFor.map((item) => (
                    <li
                      key={item}
                      className="border-b border-white/14 py-3.5 text-[15px] leading-[1.45] tracking-tight text-white/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={partnershipModels[active].href}
                  className="group relative mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-between overflow-hidden px-5 py-4 text-[15px] font-semibold tracking-[-0.03em] text-white md:text-base"
                  style={{ backgroundColor: WINE }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                  />
                  <span className="relative z-10">
                    {partnershipModels[active].href.startsWith("/")
                      ? "View project outsourcing"
                      : "Talk about this model"}
                  </span>
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

function SecuritySection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Built with security in mind
            </h2>
          </div>
          <div className="px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
              We move quickly without treating security as an afterthought. Products are
              shaped for resilience, sensible compliance, and long-term partnership —
              not throwaway prototypes that fall apart at scale.
            </p>
            <Link
              href="/services/cybersecurity"
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[#1A1216] transition-transform duration-300 hover:translate-x-1"
            >
              Explore cybersecurity
              <span style={{ color: WINE }}>
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StartupsCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Startup team collaborating around a laptop in a bright office"
              className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-[48%_35%]"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: DEEP }}
          >
            <div className="w-full max-w-3xl">
              <div className="mb-8 h-1 w-14" style={{ backgroundColor: WINE }} />
              <h2 className="max-w-2xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.05em] md:text-5xl">
                Ready to move on your next stage?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                Tell us where you are — idea, MVP, or scale — and we’ll match the right
                services and engagement model.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-white md:px-8"
                style={{ backgroundColor: WINE }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Tell us about your stage</span>
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

function StartupsFaqSection() {
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
                  <span className="text-4xl leading-none font-light text-[#1A1216]" aria-hidden="true">
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



export default function SolutionsForStartupsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <StartupsHero />
        <div className="content-rail">
          <StartupServicesSection />
          <DomainsSection />
          <PartnershipModelsSection />
          <SecuritySection />
          <StartupsCtaSection />
          <StartupsFaqSection />
          <ContactSection showIntro={false} accent="wine" />
        </div>
      </main>
      <StickyCTA
        href="#contact-form"
        label="Get in touch"
        backgroundColor={WINE}
        textColor={"#ffffff"}
      />
      <Footer />
    </>
  );
}
