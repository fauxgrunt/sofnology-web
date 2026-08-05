"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const NAVY = "#061a3a";
const ACCENT = "#2F6BFF";
const DEEP_CTA = "#1A0A14";
const PRIMARY_CTA = "Talk through how we’d work";

/** Distinct from Who we are assets; each used once on this page. */
const HERO_IMAGE = "/Uplift.jpg";
const MID_IMAGE = "/solutions-startup-standalone.jpg";

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

const models = [
  {
    title: "Dedicated development teams",
    href: "/engagement/dedicated-teams",
    description:
      "A team focused on you — tailored skill mix, honest advice on remote fit, and engineers designed to blend with your in-house process.",
  },
  {
    title: "Project-based engagement",
    href: "/engagement/project-outsourcing",
    description:
      "We take ownership end-to-end — analysis, design, build, and QA — so you stay on growth while delivery stays on track.",
  },
  {
    title: "Staff augmentation",
    href: "/engagement/staff-augmentation",
    description:
      "Add specialized capacity beside your team — hard-to-source skills, shared tools, and timelines you can actually hold.",
  },
];

const principles = [
  {
    title: "Senior-led delivery",
    description:
      "Experienced engineers define architecture, technical risks, and delivery checkpoints before build work begins.",
  },
  {
    title: "Transparent milestones",
    description:
      "Scopes, weekly progress reviews, and decision logs keep everyone aligned on what is moving, blocked, or changing.",
  },
  {
    title: "Production-ready architecture",
    description:
      "Secure deployment, maintainable codebases, cloud readiness, and operational handover from day one.",
  },
  {
    title: "Automation-first thinking",
    description:
      "We spot repeatable bottlenecks and build systems that cut manual effort without inventing unnecessary complexity.",
  },
];

const processSteps = [
  {
    title: "Assess",
    description:
      "A conversation about goals and constraints — then we identify the engagement shape and skills that fit.",
  },
  {
    title: "Shape",
    description:
      "Architecture, scope, risks, and a milestone plan you can track — before the calendar fills with build noise.",
  },
  {
    title: "Select & kickoff",
    description:
      "You meet the people who will do the work. We align tools, rituals, and ownership — then start building.",
  },
  {
    title: "Deliver & care",
    description:
      "Iterative delivery with visible progress, then handover and refinement as feedback arrives.",
  },
];

const experiencePoints = [
  {
    title: "Outcomes over activity",
    description:
      "Impact, scalability, and product integrity frame the work — not busy status updates.",
  },
  {
    title: "Built to scale with you",
    description:
      "When the roadmap grows, we adjust skill mix and capacity without restarting the relationship from zero.",
  },
  {
    title: "Ready for the long haul",
    description:
      "Engagements extend when the partnership is working — continuity beats constant re-onboarding.",
  },
];

const relatedLinks = [
  {
    title: "Who we are",
    href: "/company",
    description: "The Sofnology story without borrowed history or a founder gallery.",
  },
  {
    title: "Solutions for startups",
    href: "/engagement/solutions-for-startups",
    description: "When speed and clarity matter more than a giant vendor deck.",
  },
  {
    title: "Solutions for enterprises",
    href: "/engagement/solutions-for-enterprises",
    description: "When delivery has to respect governance, risk, and existing teams.",
  },
];

function StackedHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="relative h-[280px] overflow-hidden border-b border-neutral-200 sm:h-[340px] md:h-[400px] lg:h-[460px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Teams collaborating to ship product work"
            className="absolute inset-0 h-full w-full object-cover object-[48%_40%]"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f4f4f4] to-transparent md:w-2/5" />
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex items-end border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16 lg:py-16">
            <h1 className="max-w-md text-4xl leading-[1.06] font-semibold tracking-[-0.055em] text-neutral-950 md:text-5xl lg:text-[3.35rem]">
              How we work
            </h1>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-14 lg:py-16">
            <div>
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: ACCENT }}
              >
                Sofnology
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                No matter where you are in your trajectory, we help bring the vision to
                life — beside your in-house talent or as a dedicated pod. Partnerships
                built to optimize resources and ambitions, not to invent a legacy story.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#contact-form"
          className="group relative flex min-h-[88px] items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.04em] text-white md:px-10 lg:px-16"
          style={{ backgroundColor: ACCENT }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
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

function AudienceMidSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative min-h-[360px] overflow-hidden border-b border-neutral-200 lg:min-h-[480px] lg:border-b-0 lg:border-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MID_IMAGE}
              alt="Product team working through delivery decisions"
              className="absolute inset-0 h-full w-full object-cover object-[55%_35%]"
              decoding="async"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
              Startups and established companies alike rely on clear engineering
              partnerships
            </h2>
            <p className="mt-7 max-w-lg text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              We identify the engagement shape that fits — then equip you with people
              ready to work hand-in-glove with your team, using shared tools and
              methods you can see.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModelsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Start from scratch, or grow your team? The choice is yours
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Three partnership models — each meant to fit your culture and requirements
            without forcing a one-size vendor playbook.
          </p>
        </div>

        <div>
          {models.map((item, index) => {
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
                className={`grid cursor-pointer grid-cols-1 border-neutral-200 transition-[min-height,background-color] duration-600 md:grid-cols-[0.28fr_0.72fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[180px] bg-white" : "min-h-[110px] hover:bg-white/45"}`}
              >
                <div className="flex items-start gap-5 px-6 py-8 md:px-10 lg:px-12">
                  <span
                    className="text-4xl font-light tracking-[-0.08em]"
                    style={{ color: isActive ? ACCENT : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 pb-8 md:px-10 md:py-8 lg:px-14">
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight transition-transform hover:translate-x-1"
                    style={{ color: ACCENT }}
                  >
                    View model
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

function PrinciplesSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
            Operating principles
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/68">
            Technical chops matter — so do ownership, clarity, and collaboration with
            your team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[260px] border-white/14 px-6 py-10 md:px-8 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index % 4 !== 0 ? "lg:border-l" : ""} ${
                index > 0 ? "border-t md:border-t-0" : ""
              } ${index >= 2 ? "md:border-t lg:border-t-0" : ""}`}
            >
              <span className="text-3xl font-light tracking-[-0.06em]" style={{ color: ACCENT }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.65] tracking-tight text-white/65">
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
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            A process that delivers
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From first conversation to kickoff and care — without fake “CVs in 48 hours”
            promises we can’t guarantee.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className={`min-h-[240px] border-neutral-200 px-6 py-9 md:px-8 ${
                index % 2 === 1 ? "sm:border-l" : ""
              } ${index % 4 !== 0 ? "lg:border-l" : ""} ${
                index > 0 ? "border-t sm:border-t-0" : ""
              } ${index >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <span
                className="text-3xl font-light tracking-[-0.06em]"
                style={{ color: ACCENT }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                {step.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.65] tracking-tight text-neutral-700">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            The Sofnology experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {experiencePoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: ACCENT }} />
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

/** Solid proof CTA — no image (avoids reusing assets). */
function ProofCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div
          className="flex flex-col items-stretch gap-8 px-6 py-16 md:px-10 lg:flex-row lg:items-end lg:justify-end lg:gap-16 lg:px-16 lg:py-20"
          style={{ backgroundColor: DEEP_CTA }}
        >
          <div className="max-w-md text-right lg:text-left">
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-white md:text-4xl lg:text-right">
              Want to see if we’re the fit?
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] tracking-tight text-white/70 lg:text-right">
              One discovery conversation is enough to start.
            </p>
          </div>
          <a
            href="#contact-form"
            className="group relative inline-flex min-h-16 w-full max-w-md items-center justify-between overflow-hidden px-6 text-[15px] font-semibold tracking-[-0.03em] text-neutral-950 lg:shrink-0"
            style={{ backgroundColor: ACCENT, color: "#fff" }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
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
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Related
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {relatedLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex min-h-[200px] flex-col justify-between border-neutral-200 px-6 py-9 transition-colors hover:bg-white md:px-8 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div>
                <div
                  className="mb-6 h-1 w-10 transition-all group-hover:w-16"
                  style={{ backgroundColor: ACCENT }}
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
                style={{ color: ACCENT }}
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

function StickyGetInTouch() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const contactTop = contact?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      setVisible(window.scrollY > 400 && contactTop > window.innerHeight * 0.65);
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
            className="pointer-events-auto mx-auto flex h-14 max-w-lg items-center justify-between gap-4 px-5 text-[14px] font-semibold text-white shadow-[0_12px_40px_rgba(47,107,255,0.28)] md:h-16 md:max-w-xl md:px-6 md:text-[15px]"
            style={{ backgroundColor: ACCENT }}
          >
            <span>{PRIMARY_CTA}</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function HowWeWorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <StackedHero />
        <div className="content-rail">
          <AudienceMidSection />
          <ModelsSection />
          <PrinciplesSection />
          <ProcessSection />
          <ExperienceSection />
          <ProofCtaSection />
          <RelatedSection />
          <ContactSection showIntro={false} accent="blue" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
