"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
    shortTitle: "Support",
    title: "Application support & maintenance",
    description:
      "Ongoing technical support, updates, and maintenance so enterprise software stays stable after launch — not abandoned on day one.",
    points: ["Issue response", "Updates and patches", "Operational continuity"],
  },
  {
    shortTitle: "Testing",
    title: "Enterprise software testing",
    description:
      "QA that verifies reliability, security, and functionality — catching vulnerabilities and performance bottlenecks before they hit production.",
    points: ["Functional coverage", "Performance checks", "Security-minded QA"],
  },
  {
    shortTitle: "Cybersecurity",
    title: "Cybersecurity services",
    description:
      "Protect enterprise software and data from threats and unauthorized access — assessments, hardening, and audits when the stakes are high.",
    points: ["Risk assessment", "Hardening guidance", "Security reviews"],
    href: "/services/cybersecurity",
  },
  {
    shortTitle: "Outsourcing",
    title: "Software development outsourcing",
    description:
      "Access specialized delivery capacity without standing up a new internal team — steady pace, clear ownership, and quality deliverables.",
    points: ["Scoped delivery ownership", "Specialist skills on tap", "Faster time to market"],
    href: "/engagement/project-outsourcing",
  },
];

const technologies = [
  {
    title: "Artificial intelligence",
    description:
      "Automate complex processes and strengthen decision-making with predictive analytics and ML where it creates real operational leverage.",
  },
  {
    title: "Cloud platforms",
    description:
      "AWS, Azure, Google Cloud, and related stacks for scalable hosting — public, private, or hybrid models that fit global operations.",
  },
  {
    title: "Big data",
    description:
      "Process and analyze large datasets so leadership gets usable insight — volume, velocity, and variety without drowning the organization.",
  },
  {
    title: "Security technologies",
    description:
      "Authentication, authorization, encryption, and compliance-minded patterns so enterprise apps protect sensitive information by design.",
  },
  {
    title: "DevOps tooling",
    description:
      "CI/CD, containers, and orchestration that tighten the loop between build, test, and release — faster cycles without sacrificing quality.",
  },
  {
    title: "Blockchain where it fits",
    description:
      "Tamper-resistant records and transparent tracking for supply chain, contracts, and integrity-critical workflows — not crypto theater.",
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

const industries = [
  {
    title: "Finance and banking",
    description:
      "Streamline financial processes, strengthen fraud defenses, and modernize legacy architectures with secure integrations.",
    href: "/industries/fintech",
    ctaLabel: "Explore Fintech",
  },
  {
    title: "Healthcare",
    description:
      "Centralized records, scheduling, and compliance-sensitive workflows that improve care and reduce operational friction.",
    href: "#contact-form",
    ctaLabel: "Talk to us",
  },
  {
    title: "Retail and ecommerce",
    description:
      "Commerce operations, CRM depth, and analytics that help large retailers pivot with market and channel shifts.",
    href: "/industries/ecommerce",
    ctaLabel: "Explore Ecommerce",
  },
  {
    title: "Manufacturing",
    description:
      "Supply chain visibility, inventory control, predictive maintenance, and IoT-ready data gathering across the plant.",
    href: "#contact-form",
    ctaLabel: "Talk to us",
  },
  {
    title: "Transportation and logistics",
    description:
      "Route planning, fleet and shipment tracking, and supply-chain visibility at the scale enterprise logistics demand.",
    href: "#contact-form",
    ctaLabel: "Talk to us",
  },
  {
    title: "Real estate and hospitality",
    description:
      "Transaction, property, booking, and CRM systems that keep staff and customers aligned across locations.",
    href: "#contact-form",
    ctaLabel: "Talk to us",
  },
];

const whyPoints = [
  {
    title: "Delivery you can plan around",
    description:
      "Clear milestones, visible progress, and scope discipline — so enterprise initiatives stay on time, on budget, and on point.",
  },
  {
    title: "Stack choices that control cost",
    description:
      "Guidance on architectures that reduce both build cost and ongoing maintenance — not just the flashiest option.",
  },
  {
    title: "Security-minded engineering",
    description:
      "Enterprise work assumes sensitive data and uptime expectations. We treat resilience and access control as product requirements.",
  },
  {
    title: "From contact to kickoff with intent",
    description:
      "A practical discovery path so the right people, scope, and delivery model are in place before coding starts in earnest.",
  },
];

const processSteps = [
  {
    title: "Planning and analysis",
    description:
      "Understand business requirements, goals, and the current system. Align stakeholders and craft a clear roadmap.",
  },
  {
    title: "Design",
    description:
      "Translate requirements into UI, data models, and system architecture — with room for capabilities you’ll need next.",
  },
  {
    title: "Development",
    description:
      "Build features, integrate data, and unit-test in parallel. Iterate with agile practices toward what works in production.",
  },
  {
    title: "Testing",
    description:
      "Functional and non-functional coverage — performance, security, and compatibility — before anything reaches users.",
  },
  {
    title: "Deployment",
    description:
      "Ship to production with staged rollouts when systems are complex, so live operations stay stable through cutover.",
  },
  {
    title: "Maintenance",
    description:
      "Support, updates, and new features after launch — monitoring so the solution keeps matching organizational needs.",
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
    href: "#contact-form",
  },
  {
    title: "Dedicated teams",
    description: "A Sofnology pod dedicated to your initiative — you steer priorities with full support for ongoing needs.",
    points: [
      "Team focused on your work",
      "Direct control of priorities",
      "Support for continuous delivery",
    ],
    href: "#contact-form",
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
  },
];

const faqs = [
  {
    question: "How is enterprise work different from a startup build?",
    answer:
      "Enterprise engagements usually involve more stakeholders, stricter security and uptime expectations, integration with existing systems, and phased rollouts that protect live operations. The craft is the same; the constraints are heavier.",
  },
  {
    question: "Can you modernize legacy systems without stopping the business?",
    answer:
      "Yes. Most modernization work is phased — preserve critical data and workflows, improve architecture in stages, and cut over carefully so operations keep running.",
  },
  {
    question: "Do you only build custom software, or also integrate and migrate?",
    answer:
      "Both. We build custom enterprise products, connect existing systems, migrate to cloud platforms, and support testing, security, and ongoing maintenance as needed.",
  },
];

function EnterpriseHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.1rem]">
                Enterprise systems that stay reliable at scale
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology helps large organizations modernize and integrate without
                sacrificing uptime — delivery discipline for complex, multi-stakeholder
                systems.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="relative order-1 min-h-[280px] overflow-hidden md:min-h-[360px] lg:order-2 lg:min-h-[420px]">
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
            className="group relative order-2 flex min-h-[72px] items-center justify-between overflow-hidden border-t border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] text-white md:min-h-[88px] md:px-10 md:text-xl lg:order-1 lg:min-h-[420px] lg:items-start lg:border-t-0 lg:px-8 lg:py-8 xl:px-12"
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
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
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
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[260px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-8 lg:px-10 ${
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
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
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
                  onMouseEnter={() => setActive(index)}
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
                    href="#contact-form"
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

function TechnologiesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-[2.75rem]">
              Technologies that drive results
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              Modern stacks for operational efficiency — and for products that open new
              markets — chosen for fit, not fashion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => {
            const isActive = active === index;

            return (
              <article
                key={tech.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[220px] cursor-pointer border-white/14 px-6 py-9 transition-colors duration-500 md:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  index >= 3 ? "lg:border-t" : ""
                } ${isActive ? "text-[#1A1F24]" : "text-white/70 hover:text-white"}`}
                style={{ backgroundColor: isActive ? ICE : "transparent" }}
              >
                <span
                  className="text-3xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : ICE }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl leading-tight font-semibold tracking-[-0.04em]">
                  {tech.title}
                </h3>
                <p
                  className={`mt-4 text-[14px] leading-[1.65] tracking-tight ${
                    isActive ? "text-[#1A1F24]/80" : "text-white/65"
                  }`}
                >
                  {tech.description}
                </p>
              </article>
            );
          })}
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
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              The gateway to stronger metrics
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
                  onMouseEnter={() => setActive(index)}
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

function IndustriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Enterprise solutions for every industry
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Speed is the demand across markets. Technology is how large organizations
              stay able to pivot without losing operational strength.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const isActive = active === index;

            return (
              <Link
                key={industry.title}
                href={industry.href}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={`group flex min-h-[260px] flex-col justify-between border-neutral-200 px-6 py-9 transition-colors duration-500 md:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  index >= 3 ? "lg:border-t" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <div>
                  <motion.div
                    className="mb-6 h-1 origin-left"
                    style={{ backgroundColor: SLATE }}
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.35 }}
                    transition={{ duration: 0.35, ease: fadeEase }}
                  />
                  <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                    {industry.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                    {industry.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#1A1F24] transition-transform duration-300 group-hover:translate-x-1">
                  {industry.ctaLabel}
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

function WhySection() {
  const [active, setActive] = useState(0);
  const current = whyPoints[active];

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[140px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Why partner with Sofnology
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Delivery, cost control, security, and kickoff clarity — without headcount
              theater.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div role="tablist" aria-label="Why Sofnology">
            {whyPoints.map((point, index) => {
              const isActive = active === index;

              return (
                <button
                  key={point.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className={`flex min-h-[72px] w-full items-center gap-4 border-neutral-200 px-6 text-left transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 hover:bg-white/55 hover:text-neutral-950"
                  }`}
                  style={{ backgroundColor: isActive ? SLATE : "transparent" }}
                >
                  <span
                    className="text-[12px] font-medium"
                    style={{ color: isActive ? ICE : undefined }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold tracking-[-0.03em]">
                    {point.title}
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const [active, setActive] = useState(2);
  const current = processSteps[active];

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[140px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Our development process
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              From first conversation through maintenance — protecting live operations
              while the product moves forward.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
          <div role="tablist" aria-label="Development process">
            {processSteps.map((step, index) => {
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
                    style={{ color: isActive ? ICE : undefined }}
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
                <span
                  className="text-5xl font-light tracking-[-0.08em]"
                  style={{ color: SLATE }}
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {current.title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {current.description}
                </p>
                <div className="mt-10 flex flex-wrap gap-2">
                  {processSteps.map((step, index) => (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActive(index)}
                      className="h-2 w-8 transition-all duration-300"
                      style={{
                        backgroundColor: index === active ? SLATE : "#D4D4D4",
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

function HowWeWorkSection() {
  const [active, setActive] = useState(2);
  const current = workModels[active];

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[160px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-[2.75rem]">
              How we work
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
                  onMouseEnter={() => setActive(index)}
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
                  <span className="relative z-10">
                    {current.href.startsWith("/")
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
              <h2 className="max-w-2xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] text-neutral-950 md:text-5xl">
                Need a trusted enterprise software partner?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Tell us about the systems, constraints, and outcomes. We’ll help shape a
                practical path from discovery to durable delivery.
              </p>

              <a
                href="#contact-form"
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

function EnterpriseFaqSection() {
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
                  <span className="text-4xl leading-none font-light text-[#1A1F24]" aria-hidden="true">
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
            className="pointer-events-auto mx-auto flex h-14 max-w-md items-center justify-between gap-4 px-5 text-[15px] font-semibold tracking-[-0.03em] text-white shadow-[0_12px_40px_rgba(26,31,36,0.22)] md:h-16 md:max-w-lg md:px-6 md:text-base"
            style={{ backgroundColor: SLATE }}
          >
            <span>Get in touch</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function SolutionsForEnterprisesPage() {
  return (
    <>
      <Navbar />
      <main>
        <EnterpriseHero />
        <div className="content-rail">
          <DistinctSection />
          <ServicesSection />
          <TechnologiesSection />
          <OutcomesSection />
          <IndustriesSection />
          <WhySection />
          <ProcessSection />
          <HowWeWorkSection />
          <EnterpriseCtaSection />
          <EnterpriseFaqSection />
          <ContactSection showIntro={false} accent="slate" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
