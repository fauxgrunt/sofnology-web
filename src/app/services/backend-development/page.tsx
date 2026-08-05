"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const EMERALD = "#10B981";
const DEEP = "#111827";
const SOFT = "#D1FAE5";

const HERO_IMAGE = "/backend-hero.jpg";
const CTA_IMAGE = "/backend-cta.jpg";

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

const backendServices = [
  {
    title: "Backend audit and consulting",
    description:
      "Review architecture, performance, security gaps, and complexity so you know what to fix first and what can wait.",
  },
  {
    title: "Custom backend solutions",
    description:
      "APIs, services, data models, auth, and business logic for web, mobile, portals, and internal products.",
  },
  {
    title: "Upgrade and modernization",
    description:
      "Refactor legacy backends, improve structure, and move toward cleaner services without freezing delivery.",
  },
  {
    title: "API and system integration",
    description:
      "Connect payments, CRMs, CMS platforms, and third-party services through reliable, maintainable integrations.",
  },
  {
    title: "Cloud-ready backend delivery",
    description:
      "Structure and deploy backends for cloud environments with clear access, scaling paths, and operational ownership.",
  },
  {
    title: "Support and refinement",
    description:
      "Ongoing improvements, troubleshooting, monitoring baselines, and hardening after the first release is live.",
  },
];

const shapeSteps = [
  {
    title: "Discover",
    description:
      "Map product goals, existing systems, constraints, and the risks that matter most.",
  },
  {
    title: "Model",
    description:
      "Define data, domains, and service boundaries so the architecture matches how the product actually works.",
  },
  {
    title: "API",
    description:
      "Build the service layer clients consume — clear contracts, auth, and integrations that stay maintainable.",
  },
  {
    title: "Harden",
    description:
      "Strengthen access control, data handling, failure modes, and the paths that carry real risk.",
  },
  {
    title: "Operate",
    description:
      "Ship with room to monitor, fix, and evolve — so the backend stays usable after launch.",
  },
];

const principles = [
  {
    title: "Scalability",
    description:
      "Designed to grow with users, features, and traffic without forcing a full rewrite at every stage.",
  },
  {
    title: "Performance & reliability",
    description:
      "Fast responses under real load, efficient data access, and stable behavior teams can operate with confidence.",
  },
  {
    title: "Security",
    description:
      "Auth, access control, data handling, and secure APIs planned into the architecture from the start.",
  },
  {
    title: "Cost awareness",
    description:
      "Infrastructure and complexity kept proportional to the product stage so maintenance stays practical.",
  },
];

const industries = [
  {
    title: "Fintech",
    description:
      "Secure APIs, account flows, and payment-related systems that need clear controls and auditability.",
    outcomes: ["Secure APIs", "Payment integrations", "Account services"],
  },
  {
    title: "Healthcare",
    description:
      "Backends that support patient-facing and operational workflows with careful data handling and access rules.",
    outcomes: ["Secure records flows", "Appointment systems", "Internal tooling APIs"],
  },
  {
    title: "Ecommerce",
    description:
      "Order processing, catalog services, and checkout-related backends that stay reliable as volume grows.",
    outcomes: ["Order services", "Catalog APIs", "Checkout support"],
  },
  {
    title: "SaaS products",
    description:
      "Multi-tenant or multi-role backends with permissions, billing hooks, and feature-ready service layers.",
    outcomes: ["Auth and roles", "Product APIs", "Admin services"],
  },
  {
    title: "Operations and logistics",
    description:
      "Systems that coordinate status, routing, inventory, or workflow data across teams and channels.",
    outcomes: ["Status services", "Workflow APIs", "Integration hubs"],
  },
];

const engagementModels = [
  {
    title: "Staff augmentation",
    description:
      "Add experienced backend capacity to your team for delivery speed without a long hiring cycle.",
  },
  {
    title: "Dedicated backend team",
    description:
      "A focused team that owns implementation across architecture, APIs, data, and ongoing refinement.",
  },
  {
    title: "Project delivery",
    description:
      "A scoped engagement for a new backend, modernization effort, or integration-heavy release.",
  },
];

const approachPoints = [
  {
    title: "Right-fit architecture",
    description: "Shape the backend around real product needs, not a default pattern.",
  },
  {
    title: "Reviewable delivery",
    description: "Ship in increments with clear ownership, decisions, and visible progress.",
  },
  {
    title: "Secure by design",
    description: "Build auth, access, and data handling into the foundation early.",
  },
  {
    title: "Operate and improve",
    description: "Leave room for monitoring, fixes, and evolution after launch.",
  },
];

const techStack = [
  {
    category: "Languages and runtimes",
    items: ["Node.js", "TypeScript", "Python", "C# / .NET"],
  },
  {
    category: "APIs and services",
    items: ["REST", "GraphQL", "JWT / OAuth", "Webhooks"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    category: "Cloud and delivery",
    items: ["AWS", "Azure", "GCP", "Docker / CI-CD"],
  },
];

const relatedServices = [
  {
    title: "Web development",
    description: "Product surfaces that consume your APIs — portals, SaaS apps, and ecommerce.",
    href: "/services/web-development",
  },
  {
    title: "DevOps",
    description: "Delivery pipelines, cloud operations, and the loop that keeps releases moving.",
    href: "/services/devops",
  },
  {
    title: "Cybersecurity",
    description: "Deeper audits and hardening beyond the auth and access built into the backend.",
    href: "/services/cybersecurity",
  },
];

const faqs = [
  {
    question: "Can you work with our existing backend?",
    answer:
      "Yes. Many engagements start with an audit of what already exists, then improve, extend, or modernize the parts that create the most risk or friction.",
  },
  {
    question: "Do you build APIs for web and mobile together?",
    answer:
      "Yes. We often design one service layer that supports web, mobile, admin tools, and third-party integrations from a shared foundation. For the client side, see our web and mobile development work.",
  },
  {
    question: "How do you handle security in backend work?",
    answer:
      "We plan authentication, authorization, data handling, and secure integrations into the architecture. For deeper audits and packages, we connect that work to Sofnology cybersecurity.",
  },
];

function BackendHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                Backend development services
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology builds the systems behind the product — APIs, data, auth, and
                integrations shaped for scalability, security, and reliable day-to-day
                performance.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact"
            className="group relative flex min-h-[260px] items-start justify-between overflow-hidden border-b border-neutral-200 px-6 py-8 text-xl font-semibold tracking-[-0.04em] text-[#111827] md:px-10 lg:min-h-[360px] lg:border-b-0 lg:px-8 xl:px-12"
            style={{ backgroundColor: EMERALD }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/30 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
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
              alt="Backend systems visual with emerald accents"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="absolute right-[8%] bottom-0 hidden h-[72%] w-[38%] bg-[#f4f4f4] lg:block"
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

function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Our backend development services
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              From first architecture decisions to modernization and ongoing refinement,
              we help build backends that stay usable as the product grows.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {backendServices.map((service, index) => {
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
                  style={{ backgroundColor: EMERALD }}
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

function ShapeBackendSection() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[200px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-[2.75rem]">
              How we shape a backend
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              A clear path from discovery to operations — so architecture decisions stay
              tied to the product, not a default template.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5">
          {shapeSteps.map((step, index) => {
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
                className={`min-h-[240px] cursor-pointer border-white/14 px-6 py-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-5 lg:min-h-[280px] lg:px-7 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "text-[#111827]" : "text-white/70 hover:text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : "transparent" }}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : EMERALD }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em]">
                  {step.title}
                </h3>
                <p
                  className={`mt-4 text-[14px] leading-[1.6] tracking-tight ${
                    isActive ? "text-[#111827]/80" : "text-white/60"
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
              A durable backend is more than features. It has to scale, stay secure, and
              remain operable as the product and team evolve.
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
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: EMERALD }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {principles[activePrinciple].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {principles[activePrinciple].description}
                </p>
                {principles[activePrinciple].title === "Security" && (
                  <p className="mt-6 text-[14px] leading-[1.65] tracking-tight text-neutral-600">
                    Need a deeper assessment?{" "}
                    <Link
                      href="/services/cybersecurity"
                      className="font-semibold text-[#111827] underline decoration-[#10B981] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
                    >
                      Sofnology cybersecurity
                    </Link>
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[220px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Industries and domains
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              Backend design should match domain constraints — data sensitivity, volume,
              integrations, and how teams operate day to day.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {industries.map((industry, index) => {
              const isActive = activeIndustry === index;

              return (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActiveIndustry(index);
                  }}
                  className={`flex min-h-20 w-full items-center border-neutral-200 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "bg-[#111827] text-white" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950"}`}
                >
                  {industry.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:border-t-0 lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={industries[activeIndustry].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: EMERALD }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {industries[activeIndustry].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {industries[activeIndustry].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-neutral-200">
                  {industries[activeIndustry].outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
                    >
                      {outcome}
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
                  style={{ backgroundColor: EMERALD }}
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

function ApproachAndStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-2">
          <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Our approach
            </h2>
            <div className="mt-10 space-y-8">
              {approachPoints.map((point) => (
                <div key={point.title}>
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-12 md:px-10 lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Tech stack
            </h2>
            <div className="mt-10 space-y-8">
              {techStack.map((group) => (
                <div key={group.category}>
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                    {group.category}
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[15px] leading-tight tracking-tight text-neutral-700">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-[14px] leading-[1.65] tracking-tight text-neutral-600">
              Cloud delivery often pairs with{" "}
              <Link
                href="/services/devops"
                className="font-semibold text-[#111827] underline decoration-[#10B981] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
              >
                Sofnology DevOps
              </Link>
              .
            </p>
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
                <div className="mb-6 h-1 w-10 origin-left transition-all duration-300 group-hover:w-16" style={{ backgroundColor: EMERALD }} />
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {service.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {service.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#111827] transition-transform duration-300 group-hover:translate-x-1">
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

function BackendCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Backend architecture visual with emerald accents"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: DEEP }}
          >
            <div className="w-full max-w-3xl">
              <h2 className="max-w-2xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-5xl">
                Looking for a backend built to scale?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                Tell us about the product, the systems involved, and the constraints.
                We’ll help shape a practical backend path.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#111827] md:px-8"
                style={{ backgroundColor: EMERALD }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/30 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
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

function BackendFaqSection() {
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
                  <span className="text-4xl leading-none font-light text-[#111827]" aria-hidden="true">
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
            className="pointer-events-auto mx-auto flex h-14 max-w-md items-center justify-between gap-4 px-5 text-[15px] font-semibold tracking-[-0.03em] text-[#111827] shadow-[0_12px_40px_rgba(17,24,39,0.2)] md:h-16 md:max-w-lg md:px-6 md:text-base"
            style={{ backgroundColor: EMERALD }}
          >
            <span>Get in touch</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function BackendDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <BackendHero />
        <div className="content-rail">
          <ServicesSection />
          <ShapeBackendSection />
          <PrinciplesSection />
          <IndustriesSection />
          <EngagementSection />
          <ApproachAndStackSection />
          <RelatedServicesSection />
          <BackendCtaSection />
          <BackendFaqSection />
          <ContactSection showIntro={false} accent="emerald" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
