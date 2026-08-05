"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const LIME = "#C7FF3D";
const INK = "#101413";
const VIOLET = "#6B5B95";
const PRIMARY_CTA = "Talk about your stack";

/** One appearance each. */
const HERO_IMAGE = "/technologies-hero.jpg";
const MID_IMAGE = "/technologies-mid.jpg";

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

const stacks = [
  {
    title: "Frontend",
    href: "/services/frontend-development",
    groups: [
      {
        label: "Frameworks & libraries",
        items: "React, Next.js, Vue, Angular, TypeScript, JavaScript",
      },
      {
        label: "Styling & UI",
        items: "CSS, Tailwind, Material UI, Ant Design, Styled Components",
      },
      {
        label: "APIs & data",
        items: "GraphQL, REST, WebSocket",
      },
    ],
  },
  {
    title: "Backend",
    href: "/services/backend-development",
    groups: [
      {
        label: "Languages",
        items: "Python, Node.js, Java, Go, C#, PHP, Ruby",
      },
      {
        label: "Frameworks",
        items: "Django, Express, Spring, .NET, Rails, NestJS",
      },
      {
        label: "Data & APIs",
        items: "PostgreSQL, MySQL, MongoDB, Redis, REST, GraphQL, microservices",
      },
    ],
  },
  {
    title: "Cloud",
    href: "/services/cloud-consulting",
    groups: [
      {
        label: "Platforms",
        items: "AWS, Azure, Google Cloud",
      },
      {
        label: "Serverless & containers",
        items: "Lambda, Cloud Functions, Kubernetes, Docker, ECS",
      },
      {
        label: "Delivery models",
        items: "IaaS, PaaS, SaaS foundations",
      },
    ],
  },
  {
    title: "Mobile",
    href: "/services/mobile-development",
    groups: [
      {
        label: "Native",
        items: "Swift, SwiftUI, Kotlin, Java",
      },
      {
        label: "Cross-platform",
        items: "React Native, Flutter",
      },
    ],
  },
  {
    title: "UI / UX design",
    href: "/services/frontend-development",
    groups: [
      {
        label: "Design",
        items: "Figma, Sketch, Adobe XD",
      },
      {
        label: "Research & insight",
        items: "Miro, analytics-informed flows, usability reviews",
      },
    ],
  },
  {
    title: "QA and testing",
    href: "/services/quality-assurance",
    groups: [
      {
        label: "Automation",
        items: "Playwright, Cypress, Selenium, Appium, Pytest",
      },
      {
        label: "CI & performance",
        items: "GitHub Actions, Jenkins, JMeter, API testing with Postman / REST tools",
      },
    ],
  },
  {
    title: "DevOps",
    href: "/services/devops",
    groups: [
      {
        label: "CI/CD & IaC",
        items: "GitHub Actions, GitLab CI, Jenkins, Terraform, CloudFormation",
      },
      {
        label: "Containers & ops",
        items: "Docker, Kubernetes, monitoring with Prometheus / cloud-native tooling",
      },
      {
        label: "Security practices",
        items: "SAST/DAST-minded pipelines, OWASP-aligned habits",
      },
    ],
  },
];

const emerging = [
  {
    title: "AI / ML",
    href: "/engagement/solutions-for-ai-companies",
    items: "Python, TensorFlow, PyTorch, scikit-learn, NLP tooling, computer vision libraries",
  },
  {
    title: "Data science",
    items: "Spark, Kafka, MLOps basics, cloud ML platforms, vector search where the product needs it",
  },
  {
    title: "Blockchain",
    items: "Ethereum and related tooling when the use case is real — not a buzzword bolt-on",
  },
  {
    title: "AR / VR",
    items: "Unity-led experiences and immersive scenarios when learning or product needs spatial practice",
  },
];

const capabilities = [
  { title: "Frontend", href: "/services/frontend-development" },
  { title: "Backend", href: "/services/backend-development" },
  { title: "Cloud", href: "/services/cloud-consulting" },
  { title: "Mobile", href: "/services/mobile-development" },
  { title: "QA", href: "/services/quality-assurance" },
  { title: "DevOps", href: "/services/devops" },
  { title: "AI & automation", href: "/engagement/solutions-for-ai-companies" },
  { title: "Cybersecurity", href: "/services/cybersecurity" },
];

const scenarios = [
  {
    title: "Consulting",
    description:
      "Unsure which stack fits — or stuck on performance, scale, or cloud spend? We help choose and course-correct before you overbuild.",
    href: "#contact-form",
    cta: "Start a tech conversation",
  },
  {
    title: "Staff augmentation",
    description:
      "Need specialized capacity fast? Engineers who plug into your tools and rituals — without inventing a fake “CVs in 48 hours” guarantee.",
    href: "/engagement/staff-augmentation",
    cta: "View staff augmentation",
  },
  {
    title: "Dedicated teams",
    description:
      "Multiple roles around one product — analysts, design, engineering, QA, DevOps — focused entirely on your roadmap.",
    href: "/engagement/dedicated-teams",
    cta: "View dedicated teams",
  },
  {
    title: "Project-based engagement",
    description:
      "Entrust delivery end-to-end — scope, build, quality, and communication — while you stay on the business.",
    href: "/engagement/project-outsourcing",
    cta: "View project outsourcing",
  },
];

const platformLanes = [
  {
    title: "Cloud platforms",
    description:
      "AWS, Azure, and Google Cloud — architecture, migration, and day-two operations when the product needs a real cloud footing.",
    href: "/services/cloud-consulting",
    chips: ["AWS", "Azure", "Google Cloud"],
  },
  {
    title: "Enterprise platforms",
    description:
      "CRM, collaboration, and enterprise system integrations — wired into your product without claiming partner badges we don’t hold.",
    href: "#contact-form",
    chips: ["CRM integrations", "Collaboration suites", "ERP-adjacent APIs", "Identity & SSO"],
  },
];

const relatedLinks = [
  {
    title: "Frontend development",
    href: "/services/frontend-development",
    description: "Interfaces and client apps shaped for real users and real release cadence.",
  },
  {
    title: "Backend development",
    href: "/services/backend-development",
    description: "APIs, data, and services that carry the product under load.",
  },
  {
    title: "Cloud consulting",
    href: "/services/cloud-consulting",
    description: "Platforms and operations that match how you actually ship.",
  },
  {
    title: "Solutions for AI companies",
    href: "/engagement/solutions-for-ai-companies",
    description: "When the stack includes ML, data pipelines, and productized AI features.",
  },
];

function TechnologiesHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="relative min-h-[320px] overflow-hidden border-b border-neutral-200 sm:min-h-[400px] md:min-h-[520px] lg:min-h-[620px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Abstract modular technology forms in violet and lime"
            className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[60%_45%]"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

          <div className="relative flex h-full min-h-[320px] items-end px-5 py-8 sm:min-h-[400px] sm:px-6 sm:py-10 md:min-h-[520px] md:px-10 md:py-12 lg:min-h-[620px] lg:items-center lg:px-16">
            <div className="max-w-xl text-white">
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.18em] sm:text-[13px]"
                style={{ color: LIME }}
              >
                Sofnology
              </p>
              <h1 className="mt-3 text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.055em] sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.4rem]">
                Our software development technologies
              </h1>
              <p className="mt-4 max-w-md text-[14px] leading-[1.65] tracking-tight text-white/80 sm:mt-6 sm:text-[15px] sm:leading-[1.72]">
                Battle-tested web and mobile stacks through AI, data, and cloud tooling —
                chosen for the product you need to ship, not for a kitchen-sink résumé.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#contact-form"
          className="tap-press group relative flex min-h-[72px] items-center justify-between overflow-hidden px-5 py-5 text-lg font-semibold tracking-[-0.04em] sm:min-h-[88px] sm:px-6 sm:py-6 sm:text-xl md:px-10 lg:px-16"
          style={{ backgroundColor: LIME, color: INK }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/45 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
          />
          <span className="relative z-10">Get in touch</span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRightIcon />
          </span>
        </a>
      </div>
    </section>
  );
}

function StackCatalogSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Proven technologies for software development
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Looking for a specific stack or an end-to-end path? We cover the major lanes —
            frontend through DevOps — and connect them to delivery, not logo walls.
          </p>
        </div>

        <div>
          {stacks.map((stack, index) => {
            const isActive = active === index;
            return (
              <article
                key={stack.title}
                className={`border-neutral-200 ${index > 0 ? "border-t" : ""} ${
                  isActive ? "bg-white" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                  className="flex min-h-[100px] w-full items-center justify-between gap-6 px-6 py-7 text-left md:px-10 lg:px-16"
                  aria-expanded={isActive}
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span
                      className="text-4xl font-light tracking-[-0.08em] md:text-5xl"
                      style={{ color: isActive ? INK : "#a3a3a3" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                      {stack.title}
                    </h3>
                  </div>
                  <span
                    className="text-3xl font-light"
                    style={{ color: INK }}
                    aria-hidden="true"
                  >
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={`${stack.title}-body`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: fadeEase }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-8 px-6 pb-10 md:grid-cols-[1fr_auto] md:px-10 lg:px-16 lg:pb-12">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {stack.groups.map((group) => (
                            <div key={group.label}>
                              <p
                                className="text-[12px] font-semibold uppercase tracking-[0.14em]"
                                style={{ color: INK }}
                              >
                                {group.label}
                              </p>
                              <p className="mt-3 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                                {group.items}
                              </p>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={stack.href}
                          className="inline-flex h-12 items-center gap-2 self-start text-[14px] font-semibold tracking-tight transition-transform hover:translate-x-1"
                          style={{ color: INK }}
                        >
                          Related service
                          <ArrowUpRightIcon />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EmergingSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: INK }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            We adopt useful tech before it’s noise
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/68">
            Emerging lanes when the product needs them — without claiming decades of hype
            or inventing project counts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {emerging.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] border-white/14 px-6 py-10 md:px-8 lg:px-12 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""}`}
            >
              <div className="mb-5 h-1 w-10" style={{ backgroundColor: LIME }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/68">
                {item.items}
              </p>
              {"href" in item && item.href && (
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight transition-transform hover:translate-x-1"
                  style={{ color: LIME }}
                >
                  Explore
                  <ArrowUpRightIcon />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Capabilities glance — lifestyle image once + labels, no fake headcount. */
function CapabilitiesSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Sofnology tech power at a glance
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
            Capability lanes we deliver in — not invented expert tallies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr]">
          <div className="relative min-h-[220px] overflow-hidden border-b sm:min-h-[280px] md:min-h-[360px] border-neutral-200 lg:min-h-full lg:border-b-0 lg:border-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MID_IMAGE}
              alt="Hands at a laptop — building with Sofnology technology stacks"
              className="absolute inset-0 h-full w-full object-cover object-[40%_50%]"
              decoding="async"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {capabilities.map((cap, index) => (
              <Link
                key={cap.title}
                href={cap.href}
                className={`group flex min-h-[120px] flex-col justify-center border-neutral-200 px-6 py-8 transition-colors hover:bg-white md:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : ""
                } ${index >= 2 ? "border-t" : ""}`}
              >
                <span
                  className="text-2xl font-semibold tracking-[-0.045em] text-neutral-950 transition-colors group-hover:opacity-90"
                  style={{ color: INK }}
                >
                  {cap.title}
                </span>
                <span
                  className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold tracking-tight opacity-70 transition-transform group-hover:translate-x-1 group-hover:opacity-100"
                  style={{ color: INK }}
                >
                  View
                  <ArrowUpRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformsSection() {
  return (
    <section id="platforms" className="scroll-mt-24 border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <p
            className="text-[12px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: "#737373" }}
          >
            Platforms
          </p>
          <h2 className="mt-4 max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Cloud and enterprise platforms we build around
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
            Navigation shortcuts into real work — not separate micro-sites for every vendor logo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {platformLanes.map((lane, index) => (
            <article
              key={lane.title}
              className={`flex min-h-0 flex-col sm:min-h-[220px] md:min-h-[280px] justify-between border-neutral-200 px-6 py-10 md:px-10 lg:px-12 ${
                index === 1 ? "border-t lg:border-t-0 lg:border-l" : ""
              }`}
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.045em] text-neutral-950">
                  {lane.title}
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-[1.7] tracking-tight text-neutral-700">
                  {lane.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {lane.chips.map((chip) => (
                    <li
                      key={chip}
                      className="border border-neutral-300 bg-white px-3 py-2 text-[13px] font-medium tracking-tight text-neutral-800"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={lane.href}
                className="mt-10 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight transition-transform hover:translate-x-1"
                style={{ color: INK }}
              >
                {lane.href.startsWith("#") ? "Talk platforms" : "View cloud consulting"}
                <ArrowUpRightIcon />
              </Link>
            </article>
          ))}
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
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Choose how we get involved
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From stack advice to a full delivery partnership — you stay focused on
            outcomes while we handle the engineering path.
          </p>
        </div>

        <div>
          {scenarios.map((item, index) => {
            const isActive = active === index;
            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-1 border-neutral-200 transition-[min-height,background-color] duration-600 md:grid-cols-[0.28fr_0.72fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[170px] bg-white" : "min-h-[100px] hover:bg-white/45"}`}
              >
                <div className="flex items-start gap-5 px-6 py-8 md:px-10 lg:px-12">
                  <span
                    className="text-4xl font-light tracking-[-0.08em]"
                    style={{ color: isActive ? INK : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pt-1 text-lg font-semibold tracking-[-0.04em] text-neutral-950 md:text-xl">
                    {item.title}
                  </h3>
                </div>
                <div className="flex flex-col justify-center px-6 pb-8 md:px-10 md:py-8 lg:px-14">
                  <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight transition-transform hover:translate-x-1"
                    style={{ color: INK }}
                  >
                    {item.cta}
                    <ArrowUpRightIcon />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Closing CTA — violet panel + lime action; no third image. */
function EdgeCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <Link
          href="/#case-studies"
          className="group relative flex min-h-14 items-center justify-between px-6 text-[15px] font-semibold tracking-[-0.03em] md:px-10 lg:px-16"
          style={{ backgroundColor: LIME, color: INK }}
        >
          <span>All cases</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRightIcon />
          </span>
        </Link>

        <div
          className="flex flex-col justify-between gap-10 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex-row lg:items-end lg:px-16 lg:py-16"
          style={{ backgroundColor: VIOLET }}
        >
          <div className="max-w-lg text-white">
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-[-0.045em] md:text-4xl">
              Get the edge now
            </h2>
            <p className="mt-5 text-[15px] leading-[1.72] tracking-tight text-white/80">
              Leverage Sofnology tech expertise to shape the stack — and the engagement
              model — that fits your product today.
            </p>
          </div>
          <a
            href="#contact-form"
            className="group relative inline-flex min-h-16 w-full max-w-md items-center justify-between overflow-hidden px-6 text-[15px] font-semibold tracking-[-0.03em] lg:shrink-0"
            style={{ backgroundColor: LIME, color: INK }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/40 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Choose your collaboration scenario</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRightIcon />
            </span>
          </a>
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
          <h2 className="text-[1.85rem] font-semibold tracking-[-0.045em] sm:text-4xl text-neutral-950 md:text-[2.75rem]">
            Related services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {relatedLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex min-h-[220px] flex-col justify-between border-neutral-200 px-6 py-9 transition-colors hover:bg-white md:px-8 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              } ${index >= 2 ? "md:border-t lg:border-t-0" : ""}`}
            >
              <div>
                <div
                  className="mb-6 h-1 w-10 transition-all group-hover:w-16"
                  style={{ backgroundColor: LIME }}
                />
                <h3 className="text-xl font-semibold tracking-[-0.045em] text-neutral-950">
                  {link.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] text-neutral-700">
                  {link.description}
                </p>
              </div>
              <span
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold transition-transform group-hover:translate-x-1"
                style={{ color: INK }}
              >
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


export default function TechnologiesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <TechnologiesHero />
        <div className="content-rail">
          <StackCatalogSection />
          <EmergingSection />
          <CapabilitiesSection />
          <PlatformsSection />
          <ScenariosSection />
          <EdgeCtaSection />
          <RelatedSection />
          <ContactSection showIntro={false} accent="lime" />
        </div>
      </main>
      <StickyCTA
        href="#contact-form"
        label={PRIMARY_CTA}
        backgroundColor={"#061a3a"}
        textColor={"#101413"}
      />
      <Footer />
    </>
  );
}
