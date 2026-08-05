"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const BLUE = "#2F6BFF";
const DEEP = "#0E1A3A";
const SOFT = "#DCE7FF";

const HERO_IMAGE = "/web-dev-hero.jpg";
const CTA_IMAGE = "/web-dev-cta.jpg";

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

const webServices = [
  {
    title: "UI/UX design",
    description:
      "Clear flows, clean interfaces, and brand-aligned screens that make the product easy to understand and use.",
  },
  {
    title: "Frontend development",
    description:
      "Fast, responsive interfaces built to feel polished across devices while staying maintainable for future changes.",
  },
  {
    title: "Backend development",
    description:
      "Secure APIs, data models, auth, and business logic that support the product as usage and features grow.",
  },
  {
    title: "Integration services",
    description:
      "Connect payments, CRMs, analytics, booking tools, and internal systems so the web product fits your real workflow.",
  },
  {
    title: "QA and testing",
    description:
      "Practical checks across critical paths, devices, and releases so the product stays stable as it ships.",
  },
  {
    title: "Modernization and refinement",
    description:
      "Improve older websites and apps through UX cleanup, performance work, architecture updates, or staged rebuilds.",
  },
];

const solutionTypes = [
  {
    title: "Web portals",
    description:
      "Client, partner, or internal portals connected to your existing systems and day-to-day operations.",
    points: ["Role-based access", "System integrations", "Operational dashboards"],
  },
  {
    title: "SaaS and product web apps",
    description:
      "Multi-user product experiences with accounts, dashboards, permissions, and scalable feature delivery.",
    points: ["Account systems", "Feature modules", "Admin controls"],
  },
  {
    title: "CMS-driven sites",
    description:
      "Content systems that make publishing, updates, and SEO work manageable for marketing and ops teams.",
    points: ["Editable content", "SEO structure", "Campaign pages"],
  },
  {
    title: "Ecommerce",
    description:
      "Stores, catalogs, checkout flows, and order journeys built around conversion and operational clarity.",
    points: ["Catalog and cart", "Checkout flows", "Order visibility"],
  },
  {
    title: "Custom websites",
    description:
      "Marketing sites and service websites that present the brand clearly and support lead generation.",
    points: ["Brand presentation", "Lead capture", "Service storytelling"],
  },
];

const workSteps = [
  {
    title: "Gathering requirements",
    description:
      "Clarify goals, users, constraints, timeline, and the right delivery shape before design or build begins.",
  },
  {
    title: "UI/UX",
    description:
      "Map journeys and design interfaces that reinforce the brand while staying practical for real users.",
  },
  {
    title: "Development",
    description:
      "Build frontend, backend, integrations, permissions, and core features in reviewable increments.",
  },
  {
    title: "Testing",
    description:
      "Validate critical flows, responsiveness, and release readiness so launch does not become guesswork.",
  },
  {
    title: "Support and maintenance",
    description:
      "Continue with improvements, fixes, and planned updates after the first release is live.",
  },
];

const industries = [
  {
    title: "Professional services",
    description:
      "Service businesses need clear positioning online and practical tools behind the scenes for intake, booking, and client access.",
    outcomes: ["Service website", "Client portal", "Booking and intake flows"],
  },
  {
    title: "Ecommerce and retail",
    description:
      "Retail teams need catalogs and checkout that convert, plus operational visibility when traffic and promotions spike.",
    outcomes: ["Storefront", "Checkout", "Order tracking"],
  },
  {
    title: "Healthcare operations",
    description:
      "Healthcare websites and tools should reduce friction for patients while keeping internal coordination simple and secure.",
    outcomes: ["Appointment flows", "Patient-facing pages", "Internal coordination"],
  },
  {
    title: "Education",
    description:
      "Education products need structured content, clear program journeys, and portals that support students and staff.",
    outcomes: ["Learning portals", "Resource hubs", "Program management"],
  },
  {
    title: "Finance and fintech",
    description:
      "Finance experiences need trusted interfaces, secure account flows, and dashboards that stay clear under real usage.",
    outcomes: ["Secure dashboards", "Account flows", "Customer web tools"],
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "Authentication", "Admin panels"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Structured content models"],
  },
  {
    category: "Delivery",
    items: ["Vercel", "CI/CD-ready workflows", "Hosting guidance", "Performance review"],
  },
];

const faqs = [
  {
    question: "Do you rebuild existing websites?",
    answer:
      "Yes. We can modernize an existing site through redesign, performance work, staged rebuilds, or a full replacement when the current foundation is holding the business back.",
  },
  {
    question: "Should we use a CMS or a fully custom build?",
    answer:
      "It depends on who needs to update content and how complex the product is. Marketing sites often benefit from a CMS; portals and SaaS products usually need a custom application layer.",
  },
  {
    question: "How long does a focused web MVP take?",
    answer:
      "A focused first release can often be shaped in a few weeks once scope is clear. Larger portals, ecommerce systems, or multi-role products need a longer phased roadmap.",
  },
];

function WebHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                Web app development services
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology designs and builds web products that help businesses present
                clearly, operate efficiently, and scale — from marketing sites to portals,
                SaaS apps, and ecommerce experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact"
            className="group relative flex min-h-[260px] items-start justify-between overflow-hidden border-b border-neutral-200 px-6 py-8 text-xl font-semibold tracking-[-0.04em] text-white md:px-10 lg:min-h-[360px] lg:border-b-0 lg:px-8 xl:px-12"
            style={{ backgroundColor: DEEP }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/14 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span
              className="relative z-10 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: BLUE }}
            >
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[360px] overflow-hidden md:min-h-[430px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Web development product visual with electric blue accents"
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
        <div className="grid min-h-[170px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Our web development services
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Interface, backend, integrations, and refinement — the work needed to launch
              and improve a real web product.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {webServices.map((service, index) => {
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
                className={`min-h-[210px] cursor-pointer border-neutral-200 px-6 py-7 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >
                <motion.div
                  className="mb-5 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
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

function SolutionTypesSection() {
  const [activeType, setActiveType] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-[2.75rem]">
              A full stack of web solutions
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              Portals, product apps, content sites, stores, and custom websites — shaped
              around the audience and the job the product needs to do.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {solutionTypes.map((type, index) => {
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
                  } ${isActive ? "text-[#0E1A3A]" : "text-white/55 hover:text-white"}`}
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
                key={solutionTypes[activeType].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: BLUE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em]">
                  {solutionTypes[activeType].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                  {solutionTypes[activeType].description}
                </p>
                <ul className="mt-8 space-y-3">
                  {solutionTypes[activeType].points.map((point) => (
                    <li
                      key={point}
                      className="text-[15px] leading-[1.5] tracking-tight text-white/88"
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

function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div
          className="min-h-[300px] border-b border-white/14 px-6 py-16 text-white md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]"
          style={{ backgroundColor: DEEP }}
        >
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
              How we work and what you get
            </h2>
            <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-white/72">
              This is the center of the engagement — a clear path from first requirements
              through design, build, testing, and continued improvement.
            </p>
          </div>
        </div>

        <div>
          {workSteps.map((step, index) => {
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
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-neutral-200 transition-[min-height,background-color,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[230px] bg-white text-[#0E1A3A]" : "min-h-[118px] bg-[#f4f4f4] text-neutral-950 hover:bg-white/60"}`}
              >
                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className={`text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl ${
                      isActive ? "text-[#0E1A3A]" : "text-neutral-400"
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
                      isActive ? "mt-6 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
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
              Built for real industry workflows
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              The interface and architecture should match how your customers and teams
              actually work — not a generic template.
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
                  } ${isActive ? "bg-[#0E1A3A] text-white" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950"}`}
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
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: DEEP }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {industries[activeIndustry].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {industries[activeIndustry].description}
                </p>
                <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
                  {industries[activeIndustry].outcomes.map((outcome) => (
                    <p
                      key={outcome}
                      className="border border-neutral-200 bg-white/60 px-4 py-4 text-[14px] leading-[1.45] tracking-tight text-neutral-800"
                    >
                      {outcome}
                    </p>
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

function TechStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Web technologies we work with
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            We choose stacks for maintainability, speed, and fit — not for trendiness.
          </p>
        </div>

        <div>
          {techStack.map((group, index) => (
            <article
              key={group.category}
              className={`grid min-h-[100px] grid-cols-1 px-6 py-6 md:px-10 lg:grid-cols-[0.36fr_0.64fr] lg:px-0 ${
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

function WebCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Web development stack visual with blue accents"
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
                Let’s build the right web product
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                A new site, portal, ecommerce flow, or product web app — we’ll help shape
                a clear delivery path.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-white md:px-8"
                style={{ backgroundColor: BLUE }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Contact us</span>
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

function WebFaqSection() {
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
                  <span className="text-4xl leading-none font-light text-[#0E1A3A]" aria-hidden="true">
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
            className="pointer-events-auto mx-auto flex h-14 max-w-md items-center justify-between gap-4 px-5 text-[15px] font-semibold tracking-[-0.03em] text-white shadow-[0_12px_40px_rgba(14,26,58,0.22)] md:h-16 md:max-w-lg md:px-6 md:text-base"
            style={{ backgroundColor: BLUE }}
          >
            <span>Get in touch</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <WebHero />
        <div className="content-rail">
          <ServicesSection />
          <SolutionTypesSection />
          <HowWeWorkSection />
          <IndustriesSection />
          <TechStackSection />
          <WebCtaSection />
          <WebFaqSection />
          <ContactSection showIntro={false} accent="blue" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
