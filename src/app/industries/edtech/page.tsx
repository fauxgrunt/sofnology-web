"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

/** Mint chrome + magenta mid CTA — distinct from adtech all-magenta and clinic lime. */
const MINT = "#7DDBA3";
const DEEP = "#12241C";
const MAGENTA = "#FF2D8A";
const PRIMARY_CTA = "Talk about education software";

const HERO_IMAGE = "/edtech-hero.jpg";
const MID_IMAGE = "/edtech-mid.jpg";

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

const products = [
  {
    title: "eLearning apps",
    description:
      "Fully functional education apps across devices — gamification, blended learning, and engagement patterns that fit how people actually study.",
  },
  {
    title: "Management software",
    description:
      "Institutional ops without the spreadsheet maze — fees, payroll, billing, library, inventory, and day-to-day admin in one coherent product.",
  },
  {
    title: "LMS / LCMS",
    description:
      "Create, update, and deliver learning content safely — on-premises or in the cloud — with systems educators can run without a IT fire drill.",
  },
  {
    title: "Education portals",
    description:
      "Scheduling, attendance, grading, performance reports, and resource libraries — portals that put students and educators in the same flow.",
  },
  {
    title: "Virtual classrooms",
    description:
      "Collaboration for students, teachers, tutors, and trainers — anywhere, any device — without turning class into a generic video call.",
  },
  {
    title: "Learning experience platforms",
    description:
      "LXPs that pull content from internal and external sources, with smart search and recommendation patterns shaped by learner behavior.",
  },
];

const audiences = [
  {
    title: "Educational institutions",
    description:
      "Schools, colleges, and universities — platforms that personalize learning materials and tighten day-to-day academic operations.",
  },
  {
    title: "Educational software companies",
    description:
      "Edtech startups and digital enterprises — product engineering that stays future-ready as the market and pedagogy shift.",
  },
  {
    title: "Non-profits",
    description:
      "Improve an existing LMS or build corporate training from the ground up — scoped to niche needs, not a generic template.",
  },
];

const challenges = [
  {
    title: "Build from scratch",
    description:
      "Innovation-led education products from zero — architecture, delivery, and launch shaped to your learners and growth stage.",
  },
  {
    title: "Modernize legacy eLearning",
    description:
      "Migrate aging platforms to architectures that ship features faster, cut maintenance drag, and open room for new capabilities.",
  },
  {
    title: "Improve what you already run",
    description:
      "Make the current solution more agile through integrations, plugins, and targeted product work — without a full rewrite.",
  },
];

const capabilities = [
  {
    title: "MVP development",
    description:
      "Core learning flows and infrastructure first — so you can validate the product with real learners before overbuilding.",
  },
  {
    title: "UX for learning",
    description:
      "Responsive, high-clarity interfaces that keep students and instructors engaged with the study process — not fighting the UI.",
  },
  {
    title: "Build, QA, and release",
    description:
      "Engineering, testing, and delivery habits that treat reliability as part of the learning experience.",
  },
  {
    title: "AR / VR learning",
    description:
      "Immersive simulations and scenarios when spatial practice beats another slide deck — for skills that need to be lived.",
  },
  {
    title: "AI in eLearning",
    description:
      "Analytics, automation, and recommendation patterns that support teaching insight — with humans still steering pedagogy.",
  },
];

const trustPoints = [
  {
    title: "Security-minded delivery",
    description:
      "Practices aimed at protecting learner data, reducing leakage risk, and hardening platforms against common attack paths.",
  },
  {
    title: "Built to scale",
    description:
      "Architectures that grow with enrollment, content volume, and institutional complexity — without a rewrite every semester.",
  },
  {
    title: "Accessibility as a product requirement",
    description:
      "Interfaces designed with accessibility standards in mind so more learners can actually use what you ship.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "Requirements, constraints, learner types, content, and learning strategy — before architecture locks in.",
  },
  {
    title: "Design",
    description:
      "User, product, and business needs turned into UI/UX that stays usable under real classroom pressure.",
  },
  {
    title: "Development",
    description:
      "Foundational architecture chosen for scalability, maintainability, and performance.",
  },
  {
    title: "QA",
    description:
      "Human-centric validation — the product doesn’t just run; it teaches and administers without friction.",
  },
  {
    title: "Adoption & care",
    description:
      "End-user training, documentation, and ongoing refinement as feedback and goals evolve after launch.",
  },
];

const relatedLinks = [
  {
    title: "Mobile development",
    href: "/services/mobile-development",
    description: "Learner apps that travel with students beyond the campus network.",
  },
  {
    title: "Solutions for AI companies",
    href: "/engagement/solutions-for-ai-companies",
    description: "When LXP recommendations and analytics need serious ML engineering.",
  },
  {
    title: "Quality assurance",
    href: "/services/quality-assurance",
    description: "Release confidence for products where bugs interrupt learning.",
  },
  {
    title: "Dedicated teams",
    href: "/engagement/dedicated-teams",
    description: "A lasting pod when the curriculum product ships every term.",
  },
];

const faqs = [
  {
    question: "Do you build custom LMS and LXP platforms?",
    answer:
      "Yes. From content management and delivery to personalized learning experience layers — shaped to your institution or product model, not a forced off-the-shelf fit.",
  },
  {
    question: "Can you modernize a legacy eLearning system?",
    answer:
      "Yes. We migrate and re-architect aging platforms so new features ship faster and maintenance cost stops dominating the roadmap.",
  },
  {
    question: "Do you work with schools and with edtech startups?",
    answer:
      "Both — plus non-profits. The product shape changes; the delivery discipline stays the same: clear learners, clear admin needs, honest scope.",
  },
  {
    question: "How do you approach AI and AR/VR in education?",
    answer:
      "Only where it improves learning or ops. Recommendations, analytics, and immersive practice when they earn their place — not as feature stickers.",
  },
];

function EdtechHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="relative min-h-[320px] overflow-hidden border-b border-neutral-200 sm:min-h-[400px] md:min-h-[520px] lg:min-h-[640px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Abstract mint tracks with magenta, black, and orange spheres — education software hero"
            className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[55%_50%]"
            decoding="async"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#12241C]/55 via-[#12241C]/15 to-transparent" />

          <div className="relative flex h-full min-h-[320px] items-end px-5 py-8 sm:min-h-[400px] sm:px-6 sm:py-10 md:min-h-[520px] md:px-10 md:py-12 lg:min-h-[640px] lg:items-center lg:px-16">
            <div className="max-w-xl text-white">
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.18em] sm:text-[13px]"
                style={{ color: MINT }}
              >
                Sofnology
              </p>
              <h1 className="mt-3 text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.055em] sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Education software development
              </h1>
              <p className="mt-4 max-w-md text-[14px] leading-[1.65] tracking-tight text-white/80 sm:mt-6 sm:text-[15px] sm:leading-[1.72]">
                Custom education apps for individual learners and institutions —
                seamless, flexible experiences that hold up in real classrooms and
                real ops.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#contact-form"
          className="tap-press group relative flex min-h-[72px] items-center justify-between overflow-hidden px-5 py-5 text-lg font-semibold tracking-[-0.04em] sm:min-h-[88px] sm:px-6 sm:py-6 sm:text-xl md:px-10 lg:px-16"
          style={{ backgroundColor: MINT, color: DEEP }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/40 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
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

function ProductsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Revolutionize education with eLearning that fits
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Adaptive, customizable platforms — six product types that cover learning,
            content, classrooms, and institutional ops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[240px] cursor-pointer border-neutral-200 px-6 py-9 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >
                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: MAGENTA }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.45 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <span
                  className="text-3xl font-light tracking-[-0.06em]"
                  style={{ color: isActive ? MAGENTA : "#a3a3a3" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
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

function AudiencesSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            Education solutions for every kind of organization
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/68">
            Institutions, product companies, and non-profits — same engineering
            discipline, different constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {audiences.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[260px] border-white/14 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: MINT }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/68">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Address the challenge you actually have
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From greenfield platforms to legacy modernization — scoped to growth stage,
            goals, and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {challenges.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[240px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/50"}`}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? MAGENTA : "#a3a3a3" }}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            eLearning capabilities that stay specific
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            MVP through immersive and AI-assisted learning — the lanes that matter for
            education products, not a generic agency menu.
          </p>
        </div>

        <div>
          {capabilities.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-1 border-neutral-200 transition-[min-height,background-color] duration-600 md:grid-cols-[0.34fr_0.66fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[140px] bg-white" : "min-h-[92px] hover:bg-white/45"}`}
              >
                <div className="flex items-start gap-5 px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className="text-3xl font-light tracking-[-0.06em]"
                    style={{ color: isActive ? MAGENTA : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pt-1 text-lg font-semibold tracking-[-0.04em] text-neutral-950 md:text-xl">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center px-6 pb-7 md:px-10 md:py-7 lg:px-14">
                  <p
                    className={`max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700 transition-opacity duration-400 ${
                      isActive ? "opacity-100" : "opacity-60 md:opacity-75"
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

/** Signature EdTech mid CTA — magenta cell + pedestal-sphere mid image. */
function MagentaSplitCta() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact-form"
            className="group relative flex min-h-0 flex-col sm:min-h-[220px] md:min-h-[280px] justify-between px-6 py-8 text-neutral-950 transition-opacity hover:opacity-95 md:px-8 lg:min-h-[380px] lg:px-10"
            style={{ backgroundColor: MAGENTA }}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-2xl font-semibold tracking-[-0.045em] md:text-3xl">
                Get in touch
              </span>
              <span className="mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </div>
            <p className="max-w-[15rem] text-[14px] leading-[1.55] tracking-tight text-neutral-950/75">
              Tell us about the learners, the institution, or the product you’re building.
            </p>
          </a>

          <div className="relative min-h-[280px] overflow-hidden border-t border-neutral-200 lg:min-h-[380px] lg:border-t-0 lg:border-l">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MID_IMAGE}
              alt="Magenta sphere elevated on a pedestal among black spheres — edtech mid visual"
              className="absolute inset-0 h-full w-full object-cover object-[35%_55%]"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#f4f4f4]"
              style={{ clipPath: "polygon(72% 100%, 100% 38%, 100% 100%)" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-white"
              style={{ clipPath: "polygon(78% 100%, 100% 48%, 100% 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            What we refuse to compromise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {trustPoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: MINT }} />
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

function ProcessSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            How we build eLearning solutions
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/68">
            A continuous path from requirements to launch and refinement — not a
            one-shot handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className={`min-h-[220px] border-white/14 px-6 py-9 md:px-7 ${
                index % 2 === 1 ? "sm:border-l" : ""
              } ${index % 5 !== 0 ? "lg:border-l" : ""} ${
                index > 0 ? "border-t sm:border-t-0" : ""
              } ${index >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <span className="text-3xl font-light tracking-[-0.06em]" style={{ color: MINT }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.04em]">{step.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.65] tracking-tight text-white/65">
                {step.description}
              </p>
            </article>
          ))}
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
                  style={{ backgroundColor: MINT }}
                />
                <h3 className="text-xl font-semibold tracking-[-0.045em] text-neutral-950">
                  {link.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {link.description}
                </p>
              </div>
              <span
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: DEEP }}
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
                  <span
                    className="text-4xl leading-none font-light"
                    style={{ color: MAGENTA }}
                    aria-hidden="true"
                  >
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


export default function EdtechPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <EdtechHero />
        <div className="content-rail">
          <ProductsSection />
          <AudiencesSection />
          <ChallengesSection />
          <CapabilitiesSection />
          <MagentaSplitCta />
          <TrustSection />
          <ProcessSection />
          <RelatedSection />
          <FaqSection />
          <ContactSection showIntro={false} accent="mint" />
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
