"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/** Hot magenta — distinct from ecommerce #FF2D6A. */
const MAGENTA = "#FF2D8A";
const DEEP = "#1A0A12";
const PRIMARY_CTA = "Talk about martech or adtech";

const HERO_IMAGE = "/adtech-hero.jpg";

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

const twinPillars = [
  {
    id: "martech",
    label: "01",
    title: "Marketing technology",
    description:
      "Martech that fits your brand — data-backed campaigns, programs, and experiences built to scale, not a one-size stack bolted on after the fact.",
    points: [
      "Campaign and journey tooling shaped to your funnel",
      "Experiences that stay on-brand as volume grows",
      "Instrumentation that makes spend and outcomes readable",
    ],
  },
  {
    id: "adtech",
    label: "02",
    title: "Adtech solutions",
    description:
      "Ad management, delivery, and targeting simplified into platforms your team can actually run — whether strategy is proven or still being refined.",
    points: [
      "Inventory, delivery, and targeting in one coherent product",
      "Secure exchange and partner connections where needed",
      "Retention and engagement treated as product problems",
    ],
  },
];

const stackItems = [
  {
    title: "Ad inventory product management",
    description:
      "Customize and manage advertising deals inside a single platform — rate cards, packages, and commitments without spreadsheet chaos.",
  },
  {
    title: "Real-time bidding",
    description:
      "Buy and sell display inventory across exchanges with platforms built for speed, security, and operational clarity.",
  },
  {
    title: "Data analysis",
    description:
      "Collect and unify marketing data so operators can adjust campaigns from insight — not from five disconnected exports.",
  },
  {
    title: "Email marketing",
    description:
      "Email products that reinforce brand and messaging while supporting lead gen and ongoing engagement workflows.",
  },
  {
    title: "CRM",
    description:
      "Custom CRM shaped to sales, service, and marketing ops — the fields and flows you need, without the clutter you don’t.",
  },
];

const audiences = [
  { title: "Brands", description: "Owned acquisition and retention platforms." },
  { title: "Publishers", description: "Inventory, yield, and audience products." },
  { title: "Agencies", description: "Campaign ops tooling clients can trust." },
  { title: "Data & research", description: "Insight products that feed the funnel." },
];

const engageModes = [
  {
    title: "Product engineering",
    description:
      "Full-stack delivery across martech and adtech ecosystems — architecture, build, and iteration with both technical depth and commercial awareness.",
  },
  {
    title: "Third-party integration",
    description:
      "Connect Analytics, CRM, ad platforms, and partner systems into the product you already run — without fragile glue that breaks every release.",
  },
  {
    title: "Consulting",
    description:
      "Start from the KPIs that matter. We help you see where custom software actually moves acquisition, retention, or yield — before you overbuild.",
  },
];

const relatedLinks = [
  {
    title: "Ecommerce",
    href: "/industries/ecommerce",
    description: "When acquisition platforms need to connect to commerce reality.",
  },
  {
    title: "Backend development",
    href: "/services/backend-development",
    description: "High-throughput systems behind bidding, delivery, and data.",
  },
  {
    title: "Solutions for AI companies",
    href: "/engagement/solutions-for-ai-companies",
    description: "When targeting and insight layers need serious ML engineering.",
  },
  {
    title: "Dedicated teams",
    href: "/engagement/dedicated-teams",
    description: "A lasting pod when the ad stack evolves every quarter.",
  },
];

const faqs = [
  {
    question: "Do you build custom DSP / SSP-adjacent platforms?",
    answer:
      "We build the product layers around inventory, bidding, delivery, and ops that your model actually needs — integrations to exchanges and partners included when the architecture calls for them.",
  },
  {
    question: "Can you integrate with Analytics, CRM, and ad platforms?",
    answer:
      "Yes. Third-party integration is a core part of martech and adtech delivery — so campaigns, CRM, and measurement stay connected instead of living in parallel tools.",
  },
  {
    question: "Is this only for large publishers?",
    answer:
      "No. We work with brands, agencies, publishers, and data teams — from a focused MVP to a platform that already carries real volume.",
  },
  {
    question: "How do you start a martech or adtech engagement?",
    answer:
      "With the funnel and the constraints. We clarify KPIs, inventory or journey scope, and integration surface — then shape a build path that doesn’t invent fake efficiency claims.",
  },
];

function AdtechHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="relative min-h-[520px] overflow-hidden border-b border-neutral-200 md:min-h-[580px] lg:min-h-[640px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Close-up of a laptop with warm peach and magenta light — martech and adtech hero"
            className="absolute inset-0 h-full w-full scale-[1.03] object-cover object-[58%_45%]"
            decoding="async"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

          <div className="relative flex h-full min-h-[520px] items-end px-6 py-14 md:min-h-[580px] md:px-10 lg:min-h-[640px] lg:items-center lg:px-16">
            <div className="max-w-xl text-white">
              <p
                className="text-[13px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: MAGENTA }}
              >
                Sofnology
              </p>
              <h1 className="mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.055em] md:text-5xl lg:text-[3.6rem]">
                Marketing and adtech
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-[1.72] tracking-tight text-white/78">
                Automated end-to-end platforms that sharpen customer acquisition —
                and give your team durable tools to grow brand presence.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#contact-form"
          className="group relative flex min-h-[88px] items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.04em] text-white md:px-10 lg:px-16"
          style={{ backgroundColor: MAGENTA }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/30 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
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

function TwinPillarsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Reach your audience more effectively
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Whether you’re refining strategy or already scaling spend — we build the
            tools that help you find and keep valuable customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {twinPillars.map((pillar, index) => {
            const isActive = active === index;

            return (
              <article
                key={pillar.id}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`relative min-h-[340px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-10 lg:min-h-[420px] lg:px-14 ${
                  index === 1 ? "border-t lg:border-t-0 lg:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/50"}`}
              >
                <motion.div
                  className="absolute inset-x-0 top-0 h-1 origin-left"
                  style={{ backgroundColor: MAGENTA }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: fadeEase }}
                />

                <span
                  className="text-5xl font-light tracking-[-0.08em] md:text-6xl"
                  style={{ color: isActive ? MAGENTA : "#a3a3a3" }}
                >
                  {pillar.label}
                </span>

                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.045em] text-neutral-950 md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-5 max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {pillar.description}
                </p>

                <ul
                  className={`mt-8 space-y-3 overflow-hidden transition-all duration-500 ${
                    isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[14px] leading-[1.55] tracking-tight text-neutral-700"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0"
                        style={{ backgroundColor: MAGENTA }}
                      />
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

function StackSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
            The stack that runs acquisition
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/68">
            Domain products — inventory, bidding, data, email, CRM — not a generic
            “digital marketing” checklist.
          </p>
        </div>

        <div>
          {stackItems.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-1 border-white/14 transition-[min-height,background-color] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] md:grid-cols-[0.32fr_0.68fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[160px] bg-white/8" : "min-h-[96px] hover:bg-white/4"}`}
              >
                <div className="flex items-start gap-5 px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className="text-3xl font-light tracking-[-0.06em]"
                    style={{ color: isActive ? MAGENTA : "rgba(255,255,255,0.35)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pt-1 text-lg font-semibold tracking-[-0.04em] md:text-xl">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center px-6 pb-7 md:px-10 md:py-7 lg:px-14">
                  <p
                    className={`max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/68 transition-opacity duration-400 ${
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

function AudienceSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-sm text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
              Built for the people who own the funnel
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {audiences.map((item, index) => (
              <article
                key={item.title}
                className={`min-h-[140px] border-neutral-200 px-6 py-8 md:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : ""
                } ${index > 0 ? "border-t sm:border-t-0" : ""} ${
                  index >= 2 ? "sm:border-t" : ""
                } ${index === 0 ? "border-t lg:border-t-0" : ""}`}
              >
                <div className="mb-4 h-1 w-8" style={{ backgroundColor: MAGENTA }} />
                <h3 className="text-lg font-semibold tracking-[-0.035em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] tracking-tight text-neutral-700">
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

function EngageSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Software shaped to the business, not the buzzword
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Brands, publishers, agencies, and research teams rely on focused martech
            and adtech engineering — you can too.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {engageModes.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[260px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-4xl font-light tracking-[-0.08em]"
                style={{ color: MAGENTA }}
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

/** Signature AdTech CTA — solid magenta cell + clipped hero reuse. */
function MagentaSplitCta() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact-form"
            className="group relative flex min-h-[280px] flex-col justify-between px-6 py-8 text-neutral-950 transition-opacity hover:opacity-95 md:px-8 lg:min-h-[360px] lg:px-10"
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
            <p className="max-w-[14rem] text-[14px] leading-[1.55] tracking-tight text-neutral-950/75">
              Tell us about the funnel, the inventory, or the product you’re building.
            </p>
          </a>

          <div className="relative min-h-[280px] overflow-hidden border-t border-neutral-200 lg:min-h-[360px] lg:border-t-0 lg:border-l">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-[72%_55%]"
              decoding="async"
            />
            {/* White geometric bite — Vention-style polygon cut */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#f4f4f4]"
              style={{
                clipPath: "polygon(72% 100%, 100% 38%, 100% 100%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-white"
              style={{
                clipPath: "polygon(78% 100%, 100% 48%, 100% 100%)",
              }}
            />
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
          <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
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
                  style={{ backgroundColor: MAGENTA }}
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
                style={{ color: MAGENTA }}
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
            className="pointer-events-auto mx-auto flex h-14 max-w-lg items-center justify-between gap-4 px-5 text-[14px] font-semibold tracking-[-0.03em] text-white shadow-[0_12px_40px_rgba(255,45,138,0.28)] md:h-16 md:max-w-xl md:px-6 md:text-[15px]"
            style={{ backgroundColor: MAGENTA }}
          >
            <span>{PRIMARY_CTA}</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function AdtechPage() {
  return (
    <>
      <Navbar />
      <main>
        <AdtechHero />
        <div className="content-rail">
          <TwinPillarsSection />
          <StackSection />
          <AudienceSection />
          <EngageSection />
          <MagentaSplitCta />
          <RelatedSection />
          <FaqSection />
          <ContactSection showIntro={false} accent="hotpink" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
