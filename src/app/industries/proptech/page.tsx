"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/** Proptech orange — distinct from outsourcing #FF6A00 and automotive coral. */
const ORANGE = "#F97316";
const DEEP = "#1C1917";
const SOFT = "#FFEDD5";
const PRIMARY_CTA = "Start with a free consultation";

const HERO_IMAGE = "/proptech-hero.jpg";
const MID_IMAGE = "/proptech-mid.jpg";

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
    id: "scale",
    title: "Scale your proptech engineering team",
    challenge:
      "Your platform is growing, but the team can’t keep pace with integrations, tenant load, compliance updates, mobile releases, and infrastructure across high-load property ops.",
    role: "Sofnology engineers who understand multi-tenant property models, proptech data shapes, and hardware-aware integrations — plugged into your process so delivery keeps moving.",
    fit: [
      "Multi-tenant architectures under real load",
      "Property data models and PMS-adjacent work",
      "Mobile, integrations, and ops tooling in parallel",
    ],
  },
  {
    id: "build",
    title: "Build your proptech product",
    challenge:
      "Off-the-shelf property software doesn’t match your asset types, multi-party flows, or legacy connections. You’re ready to build from a validated concept or MVP.",
    role: "End-to-end delivery — architecture, full-stack engineering, and integrations with your real estate ecosystem, external services, and hardware where needed.",
    fit: [
      "Custom platforms from scratch or MVP scale-up",
      "Marketplace, leasing, and resident products",
      "Integrations that make the product operable",
    ],
  },
  {
    id: "modernize",
    title: "Modernize your property platform",
    challenge:
      "The system is years old. Performance is unstable, features ship slowly, and the business wants modern UX and capabilities without freezing live buildings.",
    role: "Phased modernization that upgrades stacks and architecture while live operations continue — plus mobile, IoT, and AI capabilities when they earn their place.",
    fit: [
      "Legacy API and backend re-architecture",
      "Staged migration without big-bang cutovers",
      "New capabilities layered onto what already runs",
    ],
  },
];

const solutions = [
  {
    title: "Smart building IoT and hardware",
    description:
      "Connect property platforms to cameras, access control, sensors, keyless entry, and related devices through stable APIs — with dashboards and centralized device management across portfolios.",
    points: [
      "Hardware and building system integrations",
      "Real-time device status and alerts",
      "Portfolio-scale configuration and monitoring",
    ],
  },
  {
    title: "AI-powered real estate platforms",
    description:
      "Leasing assistants, automated communications, lead qualification, recommendations, and workflow automation that reduce manual load across the property lifecycle.",
    points: [
      "Conversational and leasing workflows",
      "Ops automation where it improves conversion",
      "Practical AI — not a feature sticker",
    ],
  },
  {
    title: "Data and analytics platforms",
    description:
      "A unified layer for property, financial, and building data — so operators and investors work from one source of truth with live analytics and portfolio insight.",
    points: [
      "Centralized property and ops data",
      "Investment and performance dashboards",
      "Pipelines that stay maintainable",
    ],
  },
  {
    title: "Property management and tenant platforms",
    description:
      "Software for rent, leases, maintenance, tenant communication, and amenity booking — the day-to-day operating system of a property business.",
    points: [
      "Lease and rent administration",
      "Maintenance and resident messaging",
      "Amenity and events workflows",
    ],
  },
  {
    title: "Real estate marketplaces",
    description:
      "Platforms that connect buyers, sellers, agents, and operators — search, transactions, compliance hooks, and mobile where the market expects it.",
    points: [
      "Marketplace architecture",
      "Search, filter, and transaction flows",
      "Mobile and compliance-ready paths",
    ],
  },
];

const iotItems = [
  {
    title: "Access and security",
    description: "Keyless entry, cameras, and access-control systems tied into resident and operator workflows.",
  },
  {
    title: "Building sensors",
    description: "IoT telemetry into analytics, alerts, and operational dashboards for smarter building management.",
  },
  {
    title: "Secure key and device ops",
    description: "Device management patterns that keep hardware, identity, and property software in sync.",
  },
];

const approachPoints = [
  {
    title: "Compliance-aware design",
    description:
      "Workflows and data handling shaped with real estate and privacy expectations in mind — Fair Housing awareness, GDPR/CCPA-ready patterns, and auditability where it matters.",
  },
  {
    title: "Security as default",
    description:
      "Access control, secure storage, and operational discipline for platforms that hold resident, payment, and building data.",
  },
  {
    title: "Multi-tenant by design",
    description:
      "Architectures that hold up when properties, tenants, and integrations multiply — not single-building demos.",
  },
  {
    title: "Live-ops modernization",
    description:
      "Phased upgrades so property managers and residents keep working while the platform improves underneath.",
  },
];

const techStack = [
  {
    category: "Product engineering",
    items: ["React", "TypeScript", "Node.js", "Python", ".NET", "Java"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Swift", "Kotlin"],
  },
  {
    category: "IoT and hardware",
    items: ["AWS IoT", "Access control APIs", "Sensors", "Video and streaming"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Elasticsearch", "ETL pipelines"],
  },
  {
    category: "Integrations",
    items: ["MLS / IDX", "PMS systems", "Stripe", "Salesforce", "GraphQL"],
  },
  {
    category: "Delivery",
    items: ["Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
];

const relatedLinks = [
  {
    title: "Dedicated teams",
    href: "/engagement/dedicated-teams",
    description: "A lasting pod when proptech roadmaps run for years, not one release.",
  },
  {
    title: "Staff augmentation",
    href: "/engagement/staff-augmentation",
    description: "Add proptech-ready engineers into your existing delivery cadence.",
  },
  {
    title: "Cloud consulting",
    href: "/services/cloud-consulting",
    description: "Platform and migration advice for high-load property backends.",
  },
  {
    title: "Ecommerce",
    href: "/industries/ecommerce",
    description: "Marketplace and transaction craft when listing and checkout matter.",
  },
];

const faqs = [
  {
    question: "Do you build proptech platforms from scratch?",
    answer:
      "Yes. We support discovery through architecture, build, integrations, launch, and ongoing scaling — whether you’re forming an MVP or replacing a constrained off-the-shelf stack.",
  },
  {
    question: "Can you integrate cameras, locks, and building sensors?",
    answer:
      "Yes. Hardware-aware integrations — access control, cameras, sensors, and related devices — are a core part of smart building and resident experience work.",
  },
  {
    question: "Can you modernize a legacy PMS without downtime?",
    answer:
      "We use phased migration: re-architect APIs, upgrade frontends and services in stages, and keep property managers and residents productive during the transition.",
  },
  {
    question: "Which engagement model fits proptech best?",
    answer:
      "Staff augmentation to fill skill gaps, dedicated teams for long platform evolution, or project outsourcing for a scoped outcome. We’ll help pick based on ownership and timeline.",
  },
];

function ProptechHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <div>
                <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                  Build, scale, and modernize without delivery risk
                </p>
                <h1 className="mt-5 max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[3.75rem]">
                  Real estate software for custom proptech
                </h1>
              </div>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology builds and modernizes proptech platforms — AI leasing flows,
                smart building ops, resident experiences, property management, and
                IoT-enabled infrastructure — with architecture that holds under real
                portfolio load.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact-form"
            className="group relative flex min-h-[260px] items-start justify-between gap-6 overflow-hidden border-b border-neutral-200 px-6 py-8 text-xl font-semibold tracking-[-0.04em] text-[#1C1917] md:px-10 lg:min-h-[360px] lg:border-b-0 lg:px-8 xl:px-12"
            style={{ backgroundColor: ORANGE }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/30 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10 max-w-[14rem] leading-tight md:max-w-[16rem]">
              {PRIMARY_CTA}
            </span>
            <span className="relative z-10 mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[360px] overflow-hidden md:min-h-[430px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Abstract proptech skyline of glass and lime geometric forms on green hills"
              className="absolute inset-0 h-full w-full scale-[1.05] object-cover object-[48%_42%]"
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

function ScenariosSection() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Engagement scenarios we support
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Scale capacity, build a custom product, or modernize what already runs —
            pick the path that matches ownership and urgency.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 md:grid-cols-3">
          {scenarios.map((item, index) => {
            const isActive = active === index;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`min-h-[100px] border-neutral-200 px-6 py-6 text-left text-lg font-semibold tracking-[-0.04em] transition-colors duration-300 md:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white text-neutral-950" : "text-neutral-500 hover:bg-white/50"}`}
              >
                <span
                  className="mb-3 block h-1 w-10"
                  style={{ backgroundColor: isActive ? ORANGE : "#d4d4d4" }}
                />
                {item.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: fadeEase }}
            className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]"
          >
            <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16">
              <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                Your challenge
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                {scenario.challenge}
              </p>
            </div>
            <div className="px-6 py-12 md:px-10 lg:px-16">
              <p className="text-[12px] font-semibold tracking-[0.14em] uppercase" style={{ color: ORANGE }}>
                Sofnology’s role
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                {scenario.role}
              </p>
              <ul className="mt-8 space-y-3 border-t border-neutral-200 pt-8">
                {scenario.fit.map((line) => (
                  <li
                    key={line}
                    className="text-[15px] leading-[1.55] tracking-tight text-neutral-800"
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

function SolutionsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Custom real estate solutions we develop
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From smart buildings and AI leasing to PMS, analytics, and marketplaces —
            shaped for how property businesses actually operate.
          </p>
        </div>

        <div>
          {solutions.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={item.title}
                className={index > 0 ? "border-t border-neutral-200" : ""}
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className={`flex w-full items-start justify-between gap-6 px-6 py-7 text-left transition-colors duration-300 md:px-10 lg:px-16 ${
                    isOpen ? "bg-white" : "hover:bg-white/45"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-5 md:gap-8">
                    <span
                      className="text-[13px] font-semibold tracking-[0.12em] tabular-nums"
                      style={{ color: isOpen ? ORANGE : "#a3a3a3" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-3xl leading-none font-light text-neutral-400" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`${item.title}-body`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: fadeEase }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="grid grid-cols-1 gap-8 px-6 pb-10 md:grid-cols-[0.55fr_0.45fr] md:px-10 lg:px-16 lg:pl-[calc(2rem+3.5rem)]">
                        <p className="max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                          {item.description}
                        </p>
                        <ul className="space-y-3">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="border-b border-neutral-200 pb-3 text-[14px] tracking-tight text-neutral-600 last:border-b-0"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
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

function AiSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[480px] lg:border-b-0 lg:border-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MID_IMAGE}
              alt="Abstract 3D data bars and glass chart on green hills"
              className="absolute inset-0 h-full w-full object-cover object-[45%_50%]"
              decoding="async"
            />
          </div>

          <div className="flex items-center px-6 py-14 md:px-10 lg:px-16">
            <div className="max-w-xl">
              <p
                className="text-[12px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: ORANGE }}
              >
                AI to power real estate solutions
              </p>
              <p className="mt-6 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                Custom proptech with AI-driven features helps automate operations, sharpen
                decisions, and make resident and leasing experiences more responsive across
                the property lifecycle.
              </p>
              <h2 className="mt-10 text-3xl leading-[1.12] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
                Leasing, ops, and workflows — automated where it earns trust
              </h2>
              <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                From conversational leasing assistants to internal automation that keeps
                engineering and ops context intact — AI is applied to reduce manual load,
                not to invent vanity features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IotSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
            IoT and hardware that connect to the building
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            Proptech isn’t only screens — Sofnology integrates digital property ops with
            the physical layer: locks, cameras, sensors, and access systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {iotItems.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t border-white/14 md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: ORANGE }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Why Sofnology for proptech
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Property platforms need multi-tenant discipline, hardware-aware integrations,
            and modernization that doesn’t interrupt live operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {approachPoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[200px] border-neutral-200 px-6 py-9 md:px-8 lg:px-12 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""}`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: ORANGE }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Tech stack for real estate products
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Product, mobile, IoT, data, and the integrations property businesses already
            run — chosen for maintainability under portfolio scale.
          </p>
        </div>

        <div>
          {techStack.map((group, index) => (
            <article
              key={group.category}
              className={`grid min-h-[110px] grid-cols-1 px-6 py-6 md:px-10 lg:grid-cols-[0.36fr_0.64fr] lg:px-0 ${
                index > 0 ? "border-t border-neutral-200" : ""
              }`}
            >
              <div className="flex items-start lg:px-8 xl:px-12">
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {group.category}
                </h3>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-[15px] leading-tight tracking-tight text-neutral-700 md:grid-cols-3 lg:mt-0 lg:px-8 xl:px-12">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProptechCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Proptech abstract landscape with glass architectural forms"
              className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-[62%_55%]"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: DEEP }}
          >
            <div className="w-full max-w-3xl">
              <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-5xl lg:text-[3rem]">
                Ready to build better proptech software?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/75">
                Tell us whether you need to scale the team, ship a new product, or
                modernize a live platform — we’ll help shape a practical path.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#1C1917] md:px-8"
                style={{ backgroundColor: ORANGE }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/30 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
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
                  <span className="text-4xl leading-none font-light text-[#1C1917]" aria-hidden="true">
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
          <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Related Sofnology work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {relatedLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex min-h-[220px] flex-col justify-between border-neutral-200 px-6 py-9 transition-colors duration-300 hover:bg-white md:px-8 lg:px-9 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              } ${index >= 2 ? "md:border-t lg:border-t-0" : ""}`}
            >
              <div>
                <div
                  className="mb-6 h-1 w-10 origin-left transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: ORANGE }}
                />
                <h3 className="text-xl font-semibold tracking-[-0.045em] text-neutral-950">
                  {link.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {link.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#1C1917] transition-transform duration-300 group-hover:translate-x-1">
                View
                <ArrowUpRightIcon />
              </span>
            </Link>
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
            className="pointer-events-auto mx-auto flex h-14 max-w-lg items-center justify-between gap-4 px-5 text-[14px] font-semibold tracking-[-0.03em] text-[#1C1917] shadow-[0_12px_40px_rgba(28,25,23,0.22)] md:h-16 md:max-w-xl md:px-6 md:text-[15px]"
            style={{ backgroundColor: ORANGE }}
          >
            <span>{PRIMARY_CTA}</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProptechPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProptechHero />
        <div className="content-rail">
          <ScenariosSection />
          <SolutionsSection />
          <AiSection />
          <IotSection />
          <ApproachSection />
          <TechStackSection />
          <ProptechCtaSection />
          <FaqSection />
          <RelatedSection />
          <ContactSection showIntro={false} accent="orange" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
