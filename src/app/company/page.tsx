"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const NAVY = "#061a3a";
const ACCENT = "#2F6BFF";
const PRIMARY_CTA = "Start a conversation";
/** One appearance per asset — no triple-cropping the same file. */
const HERO_IMAGE = "/Conversation.jpg";
const PROMISE_IMAGE = "/enterprise-services.jpg";
const JOURNEY_IMAGE = "/Digital growth.jpg";

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

const whyPoints = [
  {
    title: "We exist to ship your product",
    description:
      "Sofnology connects business goals with engineering that can actually deliver — custom software, digital products, and teams that stay close to outcomes.",
  },
  {
    title: "Trust from how work runs",
    description:
      "Senior-led decisions, visible milestones, and production-minded architecture — not invented years, awards, or headcount.",
  },
  {
    title: "Your success stays; the build evolves",
    description:
      "We design for handover and maintainability so the business stays in control after go-live, not locked into tribal knowledge.",
  },
];

const focusAreas = [
  {
    title: "Custom software",
    description:
      "Platforms shaped to how your business runs — not a forced off-the-shelf template.",
  },
  {
    title: "Digital products",
    description:
      "Web, mobile, and backend systems built to ship, scale, and stay maintainable.",
  },
  {
    title: "Engineering partnerships",
    description:
      "Dedicated teams, staff augmentation, and project delivery with clear ownership.",
  },
];

const conversationSteps = [
  {
    title: "Start by email or form",
    description:
      "Share the problem, the product, or the constraint. Early contact stays simple — no need to meet a full cast on day one.",
  },
  {
    title: "Discovery conversation",
    description:
      "A focused call or in-person meeting to clarify goals, scope shape, and whether we’re the right fit.",
  },
  {
    title: "Then the right people join",
    description:
      "Once the engagement is scoped, the engineers and leads on your work are introduced — when it matters, not for a public roster.",
  },
];

const relatedLinks = [
  {
    title: "How we work",
    href: "/company/how-we-work",
    description: "Operating principles, stages, and the habits behind every engagement.",
  },
  {
    title: "Dedicated teams",
    href: "/engagement/dedicated-teams",
    description: "A lasting pod when the roadmap runs longer than a single project.",
  },
  {
    title: "Software development",
    href: "/services/software-development",
    description: "End-to-end product engineering from discovery through release.",
  },
];

/** Vention-style stacked hero: image alone → headline/copy split → CTA bar. */
function StackedHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="relative h-[280px] overflow-hidden border-b border-neutral-200 sm:h-[340px] md:h-[400px] lg:h-[460px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Collaborative workspace conversation"
            className="absolute inset-0 h-full w-full object-cover object-[42%_35%]"
            decoding="async"
          />
          {/* Soft fade into the text band below — Vention reuse language */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f4f4f4] to-transparent md:w-2/5" />
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="flex items-end border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16 lg:py-16">
            <h1 className="max-w-xl text-4xl leading-[1.06] font-semibold tracking-[-0.055em] text-neutral-950 md:text-5xl lg:text-[3.35rem]">
              About us? No — what we do is about you
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
              <p className="mt-5 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                Every solution, every engagement, every team we assemble is built to put
                your product and your business first — with senior judgment and clear
                ownership, without a borrowed legacy story.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#contact-form"
          className="group relative flex min-h-[88px] items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.04em] text-white md:px-10 lg:px-16"
          style={{ backgroundColor: NAVY }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
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

function WhySection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Why Sofnology — without the fake scoreboard
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            We help companies innovate and ship with engineering they can trust. No
            invented years-in-business, IPO tallies, or unicorn math.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {whyPoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[260px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-4xl font-light tracking-[-0.08em]"
                style={{ color: ACCENT }}
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

function FocusSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
            What we focus on
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {focusAreas.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] border-white/14 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: ACCENT }} />
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

function EarlyConversationsSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            How early conversations work
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            We don’t publish a founder gallery. Contact stays practical — email,
            discovery, then the people on your project when the work is real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {conversationSteps.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[240px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-4xl font-light tracking-[-0.08em]"
                style={{ color: ACCENT }}
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

/** Promise CTA — distinct image from hero, links to How we work. */
function PromiseCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[320px] overflow-hidden border-b border-neutral-200 lg:min-h-[400px] lg:border-b-0 lg:border-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROMISE_IMAGE}
              alt="Engineering collaboration in a modern workspace"
              className="absolute inset-0 h-full w-full object-cover object-[48%_40%]"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[#061a3a]/55" />
            <div className="relative flex h-full min-h-[320px] items-end px-6 py-10 md:px-10 lg:min-h-[400px] lg:px-12">
              <p className="max-w-sm text-2xl font-semibold tracking-[-0.045em] text-white md:text-3xl">
                Curious how we keep work under control?
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between px-6 py-12 md:px-10 lg:min-h-[400px] lg:px-16">
            <div>
              <h2 className="max-w-md text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
                See how we work
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Operating principles, delivery stages, and the promise we fold into every
                engagement — without a manifesto page or a leadership roster.
              </p>
            </div>
            <Link
              href="/company/how-we-work"
              className="group relative mt-10 inline-flex min-h-16 w-full max-w-md items-center justify-between overflow-hidden px-6 text-[15px] font-semibold tracking-[-0.03em] text-white md:mt-12"
              style={{ backgroundColor: ACCENT }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10">Learn how we work</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Closing CTA — third distinct image, used once. */
function JourneyCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="relative min-h-[300px] overflow-hidden border-b border-neutral-200 lg:min-h-[380px] lg:border-b-0 lg:border-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={JOURNEY_IMAGE}
              alt="Digital growth delivery — starting a Sofnology engagement"
              className="absolute inset-0 h-full w-full object-cover object-[40%_45%]"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a3a]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#061a3a]/40" />
          </div>

          <div
            className="flex min-h-[300px] flex-col justify-between px-6 py-12 md:px-10 lg:min-h-[380px] lg:px-14"
            style={{ backgroundColor: NAVY }}
          >
            <div>
              <h2 className="max-w-sm text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-white md:text-4xl">
                Ready to start a conversation?
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-[1.72] tracking-tight text-white/70">
                Email us or use the form — we’ll take it from there, in person or online,
                as the engagement needs.
              </p>
              <a
                href="mailto:hello@sofnology.com"
                className="mt-6 inline-block text-[15px] font-semibold tracking-tight text-white underline-offset-4 hover:underline"
              >
                hello@sofnology.com
              </a>
            </div>
            <a
              href="#contact-form"
              className="group relative mt-10 flex min-h-16 w-full items-center justify-between overflow-hidden px-6 text-[15px] font-semibold tracking-[-0.03em] text-white"
              style={{ backgroundColor: ACCENT }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10">{PRIMARY_CTA}</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </a>
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
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Keep exploring
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {relatedLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex min-h-[220px] flex-col justify-between border-neutral-200 px-6 py-9 transition-colors hover:bg-white md:px-8 ${
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
      setVisible(window.scrollY > 480 && contactTop > window.innerHeight * 0.65);
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
            className="pointer-events-auto mx-auto flex h-14 max-w-lg items-center justify-between gap-4 px-5 text-[14px] font-semibold text-white shadow-[0_12px_40px_rgba(6,26,58,0.28)] md:h-16 md:max-w-xl md:px-6 md:text-[15px]"
            style={{ backgroundColor: NAVY }}
          >
            <span>{PRIMARY_CTA}</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <main>
        <StackedHero />
        <div className="content-rail">
          <WhySection />
          <FocusSection />
          <EarlyConversationsSection />
          <PromiseCtaSection />
          <JourneyCtaSection />
          <RelatedSection />
          <ContactSection showIntro={false} accent="navy" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
