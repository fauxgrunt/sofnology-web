"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

/** Coral — matches Vention auto refs; distinct from outsourcing orange #FF6A00. */
const CORAL = "#FF6B4A";
const DEEP = "#1A1512";
const SOFT = "#FFE4DC";
const PRIMARY_CTA = "Talk about automotive software";

const HERO_IMAGE = "/automotive-hero.jpg";
const CTA_IMAGE = "/automotive-cta.jpg";

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

const marketDrivers = [
  {
    title: "AI in the vehicle",
    description:
      "ADAS, navigation, and predictive systems need reliable data pipelines and models that hold up on the road — not just in demos.",
  },
  {
    title: "Safety under scrutiny",
    description:
      "Consumers and regulators expect adaptive cruise, collision avoidance, and related features to be trustworthy and testable.",
  },
  {
    title: "Connectivity and 5G",
    description:
      "Infotainment, phone pairing, and fleet telemetry move more data in real time — and expect the UX to keep up.",
  },
  {
    title: "Electric vehicles",
    description:
      "Battery, charging, and energy experiences are still being invented — software is part of how EVs feel modern.",
  },
];

const coreServices = [
  {
    title: "Automotive project discovery",
    description:
      "Align stakeholders, clarify the product, and pressure-test technical scope so budget and timeline stay honest before build starts.",
    points: ["Vision and audience fit", "Technical assessment", "Transparent scope and estimates"],
  },
  {
    title: "Custom automotive software",
    description:
      "Build new products or extend existing systems — with prototyping early enough to validate assumptions before they harden.",
    points: ["Rapid prototyping", "Documented delivery", "Outcomes tied to user and business goals"],
  },
  {
    title: "Integration services",
    description:
      "APIs and connectors between in-vehicle platforms, embedded systems, and third-party services for real-time exchange and diagnostics.",
    points: ["In-vehicle and cloud links", "Diagnostics and connected features", "Maintainable contracts"],
  },
  {
    title: "Modernization and support",
    description:
      "Upgrade stacks, refactor legacy code, and move monoliths toward services that stay operable — with ongoing fixes when issues appear.",
    points: ["Legacy refactor paths", "Microservices transitions", "Bug fixing and upkeep"],
  },
];

const audiences = [
  {
    title: "Startups",
    description:
      "Scalable foundations and collaborative delivery that keep startup speed without painting into a corner.",
    points: ["Strategic consulting", "Scalable product builds", "Market-ready launches"],
  },
  {
    title: "Enterprises",
    description:
      "R&D and production software that upgrades product lines with modern architecture and workflow APIs.",
    points: ["Advanced product tooling", "Workflow APIs", "Pragmatic use of current platforms"],
  },
  {
    title: "OEMs and suppliers",
    description:
      "Supply-chain and vehicle-integrated apps that fit how parts, inventory, and onboard systems actually operate.",
    points: ["Cross-device vehicle apps", "Management systems", "Data-led efficiency"],
  },
  {
    title: "Aftermarket businesses",
    description:
      "Diagnostics, maintenance, sales, and CRM experiences that keep owners engaged after the sale.",
    points: ["Diagnostics tools", "Payments and sales flows", "Automotive CRM"],
  },
  {
    title: "Fleet operators",
    description:
      "Inspection, tracking, and fleet management software that keeps logistics visible and maintainable.",
    points: ["Fleet management", "Inspection and tracking", "Ongoing system maintenance"],
  },
];

const solutionBuckets = [
  {
    id: "tech",
    title: "Technology and innovation",
    items: [
      {
        title: "Autonomous driving and ADAS",
        description:
          "Sensor pipelines, driver assistance, and digital cockpits that combine controls, media, and vehicle status in one usable surface.",
      },
      {
        title: "Safety and security",
        description:
          "Vehicle cybersecurity and incident-aware tooling that protect onboard systems and coordinate response when something goes wrong.",
      },
      {
        title: "Connectivity and telematics",
        description:
          "V2X, telematics insights, and IVI systems that connect the car to phones, cloud, and infrastructure.",
      },
      {
        title: "Electric vehicle software",
        description:
          "Battery and charging management, energy optimization, and emissions-related monitoring where compliance matters.",
      },
    ],
  },
  {
    id: "ops",
    title: "Operations and customer service",
    items: [
      {
        title: "Marketing and sales",
        description:
          "CRM, dealer management, and automotive ecommerce for leads, inventory, and after-sales relationships.",
      },
      {
        title: "Logistics and transportation",
        description:
          "Fleet coordination, routing, and supply-chain systems for inventory, shipping, and supplier visibility.",
      },
      {
        title: "Vehicle inspection",
        description:
          "OBD interfaces, maintenance scheduling, and QA-style simulation tooling for health and performance.",
      },
      {
        title: "Aftermarket services",
        description:
          "Parts inventory, rental and booking apps, and experiences that extend value beyond the first sale.",
      },
    ],
  },
];

const advancedTech = [
  {
    title: "Artificial intelligence",
    description:
      "Predictive maintenance, vision-assisted inspection, navigation intelligence, and service experiences powered by real vehicle data.",
  },
  {
    title: "Internet of things",
    description:
      "Sensors, gateways, and ADAS-adjacent connectivity for remote diagnostics, behavior insights, and charging coordination.",
  },
  {
    title: "Cloud development",
    description:
      "Scalable backends for telematics, big data handling, collaborative delivery, and secure update paths.",
  },
];

const approachPoints = [
  {
    title: "Regulatory awareness",
    description:
      "Build with automotive and regional expectations in mind — so compliance is designed in, not bolted on late.",
  },
  {
    title: "Security",
    description:
      "Protect data and onboard surfaces with practices suited to the territories and threat models you operate in.",
  },
  {
    title: "User experience",
    description:
      "Interfaces that prioritize clarity and safety for drivers, operators, and service teams — not novelty chrome.",
  },
  {
    title: "Quality",
    description:
      "Manual and automated testing, continuous integration, and validation habits that catch issues before they reach the road.",
  },
];

const relatedLinks = [
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Deeper assessments when vehicle and fleet data risk needs dedicated review.",
  },
  {
    title: "Mobile development",
    href: "/services/mobile-development",
    description: "Companion apps and mobile journeys that connect to the vehicle experience.",
  },
  {
    title: "Cloud consulting",
    href: "/services/cloud-consulting",
    description: "Platform and migration advice for telematics and connected-vehicle backends.",
  },
  {
    title: "Dedicated teams",
    href: "/engagement/dedicated-teams",
    description: "A lasting engineering pod when automotive roadmaps run for years, not sprints.",
  },
];

const faqs = [
  {
    question: "Do you only build in-vehicle software?",
    answer:
      "No. We also build dealer, fleet, aftermarket, and cloud systems that sit around the vehicle — integrations, CRM, diagnostics, and management platforms included.",
  },
  {
    question: "Can you modernize legacy automotive systems?",
    answer:
      "Yes. Discovery, refactor paths, API layers, and staged migration are common when monoliths or aging stacks are blocking new features.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "We design with security and regulatory constraints early, and can connect deeper reviews to Sofnology cybersecurity when the risk profile warrants it.",
  },
  {
    question: "Which engagement model fits automotive work?",
    answer:
      "Staff augmentation for skill gaps, dedicated teams for long product roadmaps, or project outsourcing for scoped outcomes. We’ll help pick the fit.",
  },
];

function AutomotiveHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-0 grid-cols-1 px-5 py-10 sm:px-6 sm:py-12 md:min-h-[410px] md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[3.9rem]">
                Automotive software development
              </h1>
            </div>

            <div className="mt-8 flex items-end sm:mt-12 lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Automotive, meet automation. Sofnology helps OEMs, suppliers, dealers, and
                fleets digitize processes, integrate systems, scale securely, and meet
                regulatory demands — with architecture and UX built for real use.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact-form"
            className="tap-press group relative flex min-h-[72px] items-center justify-between gap-6 overflow-hidden border-b border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] text-[#1A1512] md:min-h-[88px] md:px-10 md:text-xl lg:min-h-[360px] lg:items-start lg:border-b-0 lg:px-8 lg:py-8 xl:px-12"
            style={{ backgroundColor: CORAL }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/30 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10 max-w-[14rem] leading-tight md:max-w-[16rem]">
              {PRIMARY_CTA}
            </span>
            <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:mt-1">
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Modern vehicle cabin with digital cockpit and infotainment screen"
              className="absolute inset-0 h-full w-full scale-[1.05] object-cover object-[55%_40%]"
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

function MarketSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[220px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Why automotive software is accelerating
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              Connected vehicles, ADAS, and EVs pull onboard systems, cloud services, and
              mobile UX into one product problem — and demand software that can keep up.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {marketDrivers.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[210px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 md:px-8 lg:px-12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >
                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
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

function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Our automotive software services
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Discovery through custom build, integration, and modernization — shaped for
            how automotive products actually ship and operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {coreServices.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[280px] border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-8 lg:px-12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >
                <motion.div
                  className="mb-7 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-2xl font-semibold tracking-[-0.045em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {item.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-[14px] leading-tight tracking-tight text-neutral-600"
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

function AudiencesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            Built for every side of automotive
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            Custom offers for startups, enterprises, OEMs, aftermarket, and fleets — not
            one generic “auto app” template.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item, index) => {
            const isActive = active === index;
            const isLast = index === audiences.length - 1;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-white/14 px-6 py-9 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                } ${isActive ? "bg-white/8" : "hover:bg-white/4"}`}
              >
                <div
                  className="mb-6 h-1 w-10"
                  style={{ backgroundColor: isActive ? CORAL : "rgba(255,255,255,0.25)" }}
                />
                <h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/70">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-[13px] tracking-tight text-white/55">
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

function SolutionsSection() {
  const [bucketIndex, setBucketIndex] = useState(0);
  const bucket = solutionBuckets[bucketIndex];

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Key automotive solution areas
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From ADAS and digital cockpits to dealer, fleet, and aftermarket systems —
            compressed into the two maps that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 md:grid-cols-2">
          {solutionBuckets.map((item, index) => {
            const isActive = bucketIndex === index;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setBucketIndex(index)}
                className={`min-h-[88px] border-neutral-200 px-6 py-6 text-left text-xl font-semibold tracking-[-0.04em] transition-colors duration-300 md:px-10 lg:px-16 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white text-neutral-950" : "text-neutral-500 hover:bg-white/50"}`}
              >
                <span
                  className="mb-3 block h-1 w-10"
                  style={{ backgroundColor: isActive ? CORAL : "#d4d4d4" }}
                />
                {item.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={bucket.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: fadeEase }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {bucket.items.map((item, index) => (
              <article
                key={item.title}
                className={`min-h-[200px] border-neutral-200 px-6 py-9 md:px-8 lg:px-12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""}`}
              >
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {item.description}
                </p>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function AdvancedTechSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[200px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Advanced tech, applied carefully
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              AI, IoT, and cloud when they improve the product — not as a checklist of
              buzzwords.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {advancedTech.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] border-neutral-200 px-6 py-9 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-4xl font-light tracking-[-0.08em]"
                style={{ color: CORAL }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
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

function ApproachSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Our approach
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Compliance awareness, security, UX, and quality — the non-negotiables for
            software that touches vehicles and operations.
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
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: CORAL }} />
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

function AutomotiveCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div
          className="h-1 w-full"
          style={{ backgroundColor: CORAL }}
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Vehicle dashboard navigation screen in a modern cabin"
              className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[48%_45%]"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: DEEP }}
          >
            <div className="w-full max-w-3xl">
              <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.05em] md:text-5xl lg:text-[3rem]">
                Looking for first-class automotive software?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/75">
                Our solutions focus on clarity, control, and systems that hold up in
                production — from cabin experiences to the platforms that keep fleets
                and dealers running.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#1A1512] md:px-8"
                style={{ backgroundColor: CORAL }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/30 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Reach out now</span>
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

function RelatedSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
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
                  style={{ backgroundColor: CORAL }}
                />
                <h3 className="text-xl font-semibold tracking-[-0.045em] text-neutral-950">
                  {link.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {link.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#1A1512] transition-transform duration-300 group-hover:translate-x-1">
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

function FaqSection() {
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
                  <span className="text-4xl leading-none font-light text-[#1A1512]" aria-hidden="true">
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


export default function AutomotivePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <AutomotiveHero />
        <div className="content-rail">
          <MarketSection />
          <ServicesSection />
          <AudiencesSection />
          <SolutionsSection />
          <AdvancedTechSection />
          <ApproachSection />
          <AutomotiveCtaSection />
          <RelatedSection />
          <FaqSection />
          <ContactSection showIntro={false} accent="coral" />
        </div>
      </main>
      <StickyCTA
        href="#contact-form"
        label={PRIMARY_CTA}
        backgroundColor={CORAL}
        textColor={"#1A1512"}
      />
      <Footer />
    </>
  );
}
