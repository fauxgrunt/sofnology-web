"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const GOLD = "#C9A227";
const DEEP = "#1A1C1F";
const SOFT = "#F3E8C4";

const HERO_IMAGE = "/fintech-hero.jpg";
const CTA_IMAGE = "/fintech-cta.jpg";

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

const helpModes = [
  {
    title: "Fintech consulting",
    description:
      "Clarify the product path — scope an MVP, pressure-test the architecture, and define what must be secure, compliant, and shippable first.",
    points: ["Product and market clarity", "MVP and architecture scoping", "Risk and delivery planning"],
  },
  {
    title: "Fintech development",
    description:
      "Build the software — payments, accounts, APIs, dashboards, and integrations shaped for scale and day-to-day reliability.",
    points: ["Custom product build", "Integrations and APIs", "Ongoing refinement"],
  },
];

const domains = [
  {
    title: "Digital payments",
    description:
      "Merchants, processors, and platforms that move money — checkout, transfers, and settlement paths with clear operational control.",
    outcomes: ["Merchant and consumer flows", "Processor partnerships", "Ops visibility"],
  },
  {
    title: "Lending and credit",
    description:
      "Lenders and credit products where origination, decisions, and servicing need clear rules and auditability.",
    outcomes: ["Origination journeys", "Decision support", "Servicing workflows"],
  },
  {
    title: "Wealth and capital markets",
    description:
      "Wealth, brokerage, and market products that handle dense data without losing usability or trust.",
    outcomes: ["Portfolio experiences", "Advisor tooling", "Market ops surfaces"],
  },
  {
    title: "Insurance",
    description:
      "Carriers, brokers, and insurtech teams building policy, claims, and partner workflows with disciplined data handling.",
    outcomes: ["Policy journeys", "Claims process", "Partner portals"],
  },
  {
    title: "Personal finance",
    description:
      "Consumer money products — budgeting, accounts, and insights — where clarity and secure foundations matter equally.",
    outcomes: ["Account experiences", "Money movement UX", "Alerts and insights"],
  },
  {
    title: "Embedded finance",
    description:
      "Retail, marketplaces, and platforms that need financial capability inside an existing product — without becoming a bank overnight.",
    outcomes: ["In-product finance features", "Partner integrations", "Launch-ready scope"],
  },
];

const solutions = [
  {
    title: "Payment gateways and APIs",
    description:
      "Service layers that connect merchants, processors, and internal systems through maintainable contracts.",
  },
  {
    title: "Mobile wallets",
    description:
      "Wallet products with clear balance, transfer, and auth flows across mobile and supporting backends.",
  },
  {
    title: "Trading platforms",
    description:
      "Order, market-data, and operational systems built for usage pressure — not demo-day screenshots.",
  },
  {
    title: "Open banking connections",
    description:
      "Account-data and payment-initiation integrations with careful access, consent, and failure handling.",
  },
  {
    title: "Risk and ops consoles",
    description:
      "Internal tools for support, risk, finance ops, and compliance teams who need speed with clear controls.",
  },
  {
    title: "Account and ledger systems",
    description:
      "Core product foundations — accounts, permissions, ledgers, and audit trails treated as first-class.",
  },
];

const workSteps = [
  {
    title: "Advisory sprint",
    description:
      "Clarify domain, risks, MVP boundaries, and architecture options before heavy build spend.",
  },
  {
    title: "Build pod",
    description:
      "Ship the product surface and systems in reviewable increments with clear ownership.",
  },
  {
    title: "Harden and operate",
    description:
      "Strengthen access, failure modes, monitoring baselines, and the paths that carry real money risk.",
  },
];

const trustPoints = [
  {
    title: "Audit trails",
    description:
      "Sensitive actions logged so support, compliance, and engineering can reconstruct what happened.",
  },
  {
    title: "Role-based access",
    description:
      "Permissions shaped around real roles — customer, ops, risk, admin — not a single shared key.",
  },
  {
    title: "Payment failure modes",
    description:
      "Retries, reconciliation, and clear user/ops states planned for when processors and networks fail.",
  },
  {
    title: "PCI-aware handling",
    description:
      "Card and payment data paths designed to minimize exposure and keep sensitive handling intentional.",
  },
];

const relatedServices = [
  {
    title: "Backend development",
    description: "APIs, auth, and data layers that carry payments, accounts, and integrations.",
    href: "/services/backend-development",
  },
  {
    title: "Web & mobile",
    description: "Client surfaces for wallets, trading UIs, dashboards, and customer journeys.",
    href: "/services/web-development",
  },
  {
    title: "Cybersecurity",
    description: "Deeper assessments and hardening when trust and risk need dedicated attention.",
    href: "/services/cybersecurity",
  },
  {
    title: "Software development",
    description: "End-to-end product engineering when the fintech scope needs a full delivery team.",
    href: "/services/software-development",
  },
];

const faqs = [
  {
    question: "Do we need to be a bank or fintech company to work with Sofnology?",
    answer:
      "No. Fintech here includes embedded finance — payments inside retail, marketplaces, or platforms — as well as dedicated financial products.",
  },
  {
    question: "How do you approach compliance and security?",
    answer:
      "We treat audit trails, access control, payment failure handling, and sensitive data paths as design constraints from the start. For deeper audits, we connect that work to Sofnology cybersecurity.",
  },
  {
    question: "Can you help before development starts?",
    answer:
      "Yes. Many engagements begin with an advisory sprint — clarifying scope, MVP boundaries, architecture options, and delivery risk — then move into build when the path is clear.",
  },
];

function FintechHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                Financial software that earns trust
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology engineering and advisory for payments, lending, wealth, and
                embedded finance — secure, scalable products shaped for real operations.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact"
            className="group relative flex min-h-[72px] items-center justify-between overflow-hidden border-b border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] text-[#1A1C1F] md:min-h-[88px] md:px-10 md:text-xl lg:min-h-[360px] lg:items-start lg:border-b-0 lg:px-8 lg:py-8 xl:px-12"
            style={{ backgroundColor: GOLD }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/30 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:mt-1">
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[360px] overflow-hidden md:min-h-[430px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Modern glass skyscraper looking upward in a financial district"
              className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
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

function HelpSection() {
  const [activeMode, setActiveMode] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Your fintech partner at every stage
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Whether you need clarity before build or a team to ship the product, we meet
              you where the work actually is.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {helpModes.map((mode, index) => {
            const isActive = activeMode === index;

            return (
              <article
                key={mode.title}
                onMouseEnter={() => setActiveMode(index)}
                onFocus={() => setActiveMode(index)}
                tabIndex={0}
                className={`min-h-[320px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10 lg:px-14 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: GOLD }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {mode.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {mode.description}
                </p>
                <ul className="mt-8 border-t border-neutral-200">
                  {mode.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DomainsSection() {
  const [activeDomain, setActiveDomain] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-[2.75rem]">
              Markets we serve
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              Who the product is for — lenders, merchants, wealth platforms, insurers, and
              companies embedding finance into an existing business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {domains.map((domain, index) => {
              const isActive = activeDomain === index;

              return (
                <button
                  key={domain.title}
                  type="button"
                  onClick={() => setActiveDomain(index)}
                  onMouseEnter={() => setActiveDomain(index)}
                  className={`flex min-h-[68px] w-full items-center border-white/14 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-[#1A1C1F]" : "text-white/55 hover:text-white"}`}
                  style={{ backgroundColor: isActive ? SOFT : "transparent" }}
                >
                  {domain.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/14 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={domains[activeDomain].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: GOLD }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em]">
                  {domains[activeDomain].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                  {domains[activeDomain].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-white/14">
                  {domains[activeDomain].outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="border-b border-white/14 py-3.5 text-[15px] leading-[1.45] tracking-tight text-white/85"
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

function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Products we build
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              What ships — gateways, wallets, trading systems, ops consoles, and the account
              foundations underneath.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const isActive = activeSolution === index;

            return (
              <article
                key={solution.title}
                onMouseEnter={() => setActiveSolution(index)}
                onFocus={() => setActiveSolution(index)}
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
                  style={{ backgroundColor: GOLD }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {solution.title}
                </h3>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={{ duration: 0.35, ease: fadeEase }}
                  className="mt-4 text-[15px] leading-[1.6] tracking-tight text-neutral-700"
                >
                  {solution.description}
                </motion.p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkPathSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-[2.75rem]">
              How we work
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              A short path from clarity to ship — without pretending every engagement starts
              at the same place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {workSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <article
                key={step.title}
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`min-h-[260px] cursor-pointer border-white/14 px-6 py-9 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "text-[#1A1C1F]" : "text-white/70 hover:text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : "transparent" }}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : GOLD }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em]">
                  {step.title}
                </h3>
                <p
                  className={`mt-5 text-[15px] leading-[1.65] tracking-tight ${
                    isActive ? "text-[#1A1C1F]/80" : "text-white/60"
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

function TrustSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[200px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Trust signals we design for
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Concrete controls for products that move money — not generic “security and
              scale” language.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => (
            <article
              key={point.title}
              className={`min-h-[240px] border-neutral-200 px-6 py-9 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              } ${index >= 2 ? "md:border-t lg:border-t-0" : ""}`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: GOLD }} />
              <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                {point.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                {point.description}
              </p>
            </article>
          ))}
        </div>

        <div className="border-t border-neutral-200 px-6 py-8 md:px-10 lg:px-16">
          <p className="text-[14px] leading-[1.65] tracking-tight text-neutral-600">
            Need a deeper security assessment?{" "}
            <Link
              href="/services/cybersecurity"
              className="font-semibold text-[#1A1C1F] underline decoration-[#C9A227] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Sofnology cybersecurity
            </Link>
          </p>
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
                  style={{ backgroundColor: GOLD }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950 md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {service.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#1A1C1F] transition-transform duration-300 group-hover:translate-x-1">
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

function FintechCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Glass skyscraper facade with cool reflections"
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
                Building in fintech?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                Tell us about the product, the market, and the constraints around security
                and delivery. We’ll help shape a practical path.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#1A1C1F] md:px-8"
                style={{ backgroundColor: GOLD }}
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

function FintechFaqSection() {
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
                  <span className="text-4xl leading-none font-light text-[#1A1C1F]" aria-hidden="true">
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
            className="pointer-events-auto mx-auto flex h-14 max-w-md items-center justify-between gap-4 px-5 text-[15px] font-semibold tracking-[-0.03em] text-[#1A1C1F] shadow-[0_12px_40px_rgba(26,28,31,0.22)] md:h-16 md:max-w-lg md:px-6 md:text-base"
            style={{ backgroundColor: GOLD }}
          >
            <span>Get in touch</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function FintechPage() {
  return (
    <>
      <Navbar />
      <main>
        <FintechHero />
        <div className="content-rail">
          <HelpSection />
          <DomainsSection />
          <SolutionsSection />
          <WorkPathSection />
          <TrustSection />
          <RelatedServicesSection />
          <FintechCtaSection />
          <FintechFaqSection />
          <ContactSection showIntro={false} accent="gold" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
