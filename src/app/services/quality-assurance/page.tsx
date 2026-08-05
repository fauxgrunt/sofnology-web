"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const LIME = "#C7FF3D";
const DEEP = "#101413";
const SOFT = "#E8FF9A";
const PRIMARY_CTA = "Book a free QA assessment";

const HERO_IMAGE = "/qa-hero.jpg";
const CTA_IMAGE = "/qa-cta.jpg";

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

const spotlightCapabilities = [
  {
    title: "Mobile testing",
    description:
      "iOS, Android, and cross-platform apps checked for stress, load, performance, connectivity, conformance, and interruption paths — so launches hold up outside the lab.",
  },
  {
    title: "Test automation",
    description:
      "Automated coverage for web, mobile, and desktop flows that shortens feedback loops, protects regressions, and keeps release cadence realistic as the product grows.",
  },
];

const processSteps = [
  {
    title: "Test strategy development",
    description:
      "Define scope, techniques, environments, and ownership with your team, then set a schedule that supports real release goals — not a generic checklist.",
  },
  {
    title: "Test case design",
    description:
      "Build cases that expose gaps early: critical journeys, edge conditions, integrations, and the risks most likely to block users or revenue.",
  },
  {
    title: "Test implementation",
    description:
      "Execute the plan, share clear findings, and recommend what to fix first so engineering can act while context is still fresh.",
  },
  {
    title: "Defect management",
    description:
      "Track defects end to end, confirm fixes, and run regression checks so resolved issues stay resolved after the next change lands.",
  },
  {
    title: "Result reporting",
    description:
      "Deliver a practical summary: what was covered, what remains open, residual risk, and recommended next steps for the release.",
  },
];

const methodology = [
  {
    title: "Practical growth mindset",
    description:
      "QA as product leverage — not a late gate. Close to deadlines, release pressure, and the decisions your business needs to make.",
  },
  {
    title: "Domain-aware testing",
    description:
      "Plans that account for payments, operations, regulated workflows, and the failure modes that matter in your industry.",
  },
  {
    title: "Transparent, secure execution",
    description:
      "Clear progress and risk visibility. Sensitive tests run in controlled environments with access discipline built in.",
  },
];

const testingTypes = [
  {
    title: "Manual testing",
    description:
      "Explore the product as a real user would — catching issues automation often misses in flow, clarity, and unexpected edge behavior.",
  },
  {
    title: "Security testing",
    description:
      "Probe for exposure points, weak access paths, and compliance-sensitive gaps so security issues surface before release, not after incidents.",
  },
  {
    title: "Functional testing",
    description:
      "Validate business logic under realistic conditions and confirm the product behaves the way stakeholders and users expect.",
  },
  {
    title: "Usability testing",
    description:
      "Review journeys for clarity, accessibility, and friction so the product is usable — not just technically correct.",
  },
  {
    title: "Compatibility testing",
    description:
      "Confirm behavior across browsers, devices, and OS combinations that matter to your audience, not an endless matrix.",
  },
];

const techStack = [
  {
    category: "Continuous integration",
    items: ["GitHub Actions", "GitLab CI", "Jenkins", "Azure DevOps"],
  },
  {
    category: "Performance testing",
    items: ["Apache JMeter", "k6", "LoadRunner-ready setups"],
  },
  {
    category: "Tools and frameworks",
    items: ["Playwright", "Selenium", "Cypress", "Appium", "Cucumber", "JUnit", "NUnit", "SoapUI"],
  },
  {
    category: "Reporting",
    items: ["Allure", "ReportPortal-ready setups", "Custom dashboards"],
  },
];

const relatedLinks = [
  {
    title: "Software development",
    href: "/services/software-development",
    description: "Build and ship product with quality designed into delivery.",
  },
  {
    title: "DevOps",
    href: "/services/devops",
    description: "Wire automated checks into CI/CD so feedback arrives early.",
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Go deeper on security assessments when risk warrants it.",
  },
];

const faqs = [
  {
    question: "When should QA start on a project?",
    answer:
      "As early as practical. Strategy and case design during requirements or early builds catch expensive defects before they harden into architecture and release risk.",
  },
  {
    question: "Do you only do test automation?",
    answer:
      "No. Automation is a core capability, but we also cover manual exploration, usability, compatibility, and security-focused checks where they add the most value.",
  },
  {
    question: "Can you plug into our existing pipeline?",
    answer:
      "Yes. We prefer integrating with the tools and CI setup you already run, then improving coverage and reporting where gaps are slowing releases.",
  },
  {
    question: "How does Sofnology QA work with development teams?",
    answer:
      "As partners inside the delivery loop — sharing findings early, prioritizing by risk, and keeping regression coverage useful as features ship.",
  },
];

function QaHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                QA &amp; testing
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology QA teams examine your product from the ground up — strengths,
                weak points, and release risk — so you can make clearer decisions and
                ship with confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact-form"
            className="group relative flex min-h-[260px] items-start justify-between gap-6 overflow-hidden border-b border-neutral-200 px-6 py-8 text-xl font-semibold tracking-[-0.04em] text-[#101413] md:px-10 lg:min-h-[360px] lg:border-b-0 lg:px-8 xl:px-12"
            style={{ backgroundColor: LIME }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/40 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
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
              alt="Abstract quality assurance visual with lime glass geometry"
              className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-[72%_42%]"
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

function SpotlightSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[200px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Take quality assurance further
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              Seasoned engineers treat QA as part of delivery — best-in-class
              functionality, realistic deadlines, and coverage that matches how your
              product is actually used.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {spotlightCapabilities.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}

                onMouseEnter={() => {

                  if (window.matchMedia("(hover: hover)").matches) setActive(index);

                }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[240px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10 lg:px-16 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <motion.div
                  className="mb-7 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
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

function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="min-h-[320px] border-b border-white/14 px-6 py-16 md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]">
          <motion.div
            className="max-w-3xl lg:px-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: fadeEase }}
          >
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
              Quality from the start
            </h2>
            <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-white/72">
              Earlier defects. Clearer release risk. QA engineers join early so testing
              shapes the build — not just the final week.
            </p>
          </motion.div>
        </div>

        <div>
          {processSteps.map((step, index) => {
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
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-white/14 transition-[min-height,background-color,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[260px] text-[#101413]" : "min-h-[110px] text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : DEEP }}
              >
                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className={`text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl ${
                      isActive ? "" : "text-white/55"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {step.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-6 max-h-44 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight opacity-85">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="border-t border-white/14">
          <div className="border-b border-white/14 px-6 py-10 md:px-10 lg:px-16">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
              How we work quality in
            </h3>
            <p className="mt-4 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/65">
              Clear ownership, useful reporting, and approaches that improve with every
              release — without another hover-card wall.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {methodology.map((item, index) => (
              <article
                key={item.title}
                className={`px-6 py-10 md:px-8 lg:px-10 ${
                  index > 0 ? "border-t border-white/14 md:border-t-0 md:border-l" : ""
                }`}
              >
                <div className="mb-6 h-1 w-10" style={{ backgroundColor: LIME }} />
                <h4 className="text-lg leading-tight font-semibold tracking-[-0.035em] text-white">
                  {item.title}
                </h4>
                <p className="mt-5 text-[14px] leading-[1.7] tracking-tight text-white/68">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestingTypesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Testing the limits
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Coverage shaped around risk — not a wall of test types for its own sake.
          </p>
        </div>

        <div>
          {testingTypes.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}

                onMouseEnter={() => {

                  if (window.matchMedia("(hover: hover)").matches) setActive(index);

                }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-1 border-neutral-200 transition-[background-color,min-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:grid-cols-[0.34fr_0.66fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[170px] bg-white" : "min-h-[96px] hover:bg-white/50"}`}
              >
                <div className="flex items-center gap-5 px-6 py-6 md:px-10 lg:px-16">
                  <span
                    className="text-[13px] font-semibold tracking-[0.12em] tabular-nums"
                    style={{ color: isActive ? DEEP : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center px-6 pb-6 md:px-10 md:py-6 lg:px-16">
                  <p
                    className={`max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700 transition-opacity duration-400 ${
                      isActive ? "opacity-100" : "opacity-55 md:opacity-70"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
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
            Optimize your stack
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            We help you choose and wire tools that fit your product stage — modern
            frameworks first, legacy tools only when they still earn their place.
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

function QaCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div
            className="flex min-h-[340px] items-start justify-between gap-6 border-b border-neutral-200 px-6 py-10 text-[#101413] md:px-10 lg:min-h-[430px] lg:border-b-0 lg:px-12 xl:px-16"
            style={{ backgroundColor: LIME }}
          >
            <div className="flex w-full max-w-md flex-col justify-between self-stretch">
              <div>
                <h2 className="text-3xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-4xl lg:text-[2.75rem]">
                  Need clearer release confidence?
                </h2>
                <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-[#101413]/opacity-80">
                  We’ll help you define the right QA approach, plug into your delivery
                  rhythm, and make risk visible before it becomes a launch problem.
                </p>
              </div>

              <a
                href="#contact-form"
                className="group relative mt-12 flex min-h-[72px] w-full items-center justify-between overflow-hidden bg-[#101413] px-5 py-5 text-lg font-semibold tracking-[-0.04em] text-white md:px-6"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10 max-w-[15rem] leading-tight">{PRIMARY_CTA}</span>
                <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRightIcon />
                </span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[430px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Quality assurance abstract CTA visual with glass phone frame"
              className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-[40%_55%]"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function QaFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-16 md:px-10 lg:px-16">
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
                  <span className="text-4xl leading-none font-light text-[#101413]" aria-hidden="true">
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
          <h2 className="max-w-4xl text-3xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
            Related Sofnology work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {relatedLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`group flex min-h-[150px] flex-col justify-between border-neutral-200 px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.04em] text-neutral-950 md:text-xl">
                  {link.title}
                </h3>
                <p className="mt-4 max-w-sm text-[14px] leading-[1.65] tracking-tight text-neutral-700">
                  {link.description}
                </p>
              </div>
              <span
                className="mt-8 inline-flex transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: DEEP }}
              >
                <ArrowUpRightIcon />
              </span>
            </a>
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
            className="pointer-events-auto mx-auto flex h-14 max-w-lg items-center justify-between gap-4 px-5 text-[14px] font-semibold tracking-[-0.03em] text-[#101413] shadow-[0_12px_40px_rgba(16,20,19,0.18)] md:h-16 md:max-w-xl md:px-6 md:text-[15px]"
            style={{ backgroundColor: LIME }}
          >
            <span>{PRIMARY_CTA}</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function QualityAssurancePage() {
  return (
    <>
      <Navbar />
      <main>
        <QaHero />
        <div className="content-rail">
          <SpotlightSection />
          <ProcessSection />
          <TestingTypesSection />
          <TechStackSection />
          <QaCtaSection />
          <QaFaqSection />
          <RelatedSection />
          <ContactSection showIntro={false} accent="lime" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
