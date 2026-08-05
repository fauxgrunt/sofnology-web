"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

/** Warmer than Mobile's #C7FF3D so Foodtech reads as its own industry. */
const LIME = "#D4F06A";
const DEEP = "#1B3A2A";
const SOFT = "#E8F7C8";

const HERO_IMAGE = "/foodtech-hero.jpg";
const CTA_IMAGE = "/foodtech-cta.jpg";

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
    title: "Consulting",
    description:
      "Clarify the model, audience, and must-have flows before you invest in a full build — from marketplace to single-brand delivery.",
    points: ["Business model fit", "Feature prioritization", "Stack and delivery plan"],
  },
  {
    title: "App development",
    description:
      "Design and build ordering, ops, and courier experiences with a scalable backend and clear product surfaces.",
    points: ["Customer and courier apps", "Ops consoles", "Payments and tracking"],
  },
  {
    title: "Upgrade and modernization",
    description:
      "Improve an existing food app — new features, cleaner architecture, better reliability, and integrations that keep pace with growth.",
    points: ["Feature and bug velocity", "Architecture cleanup", "Third-party integrations"],
  },
];

const audiences = [
  {
    title: "Restaurants and cafes",
    description:
      "Single locations and chains that need ordering, menu control, and customer engagement without losing brand clarity.",
    outcomes: ["Brand storefront", "Order management", "Customer retention loops"],
  },
  {
    title: "Cloud kitchens",
    description:
      "Virtual kitchens focused on delivery volume — streamlined menus, order intake, and kitchen-ready ops tooling.",
    outcomes: ["Multi-brand menus", "Kitchen order flow", "Delivery handoff"],
  },
  {
    title: "Aggregators and marketplaces",
    description:
      "Multi-restaurant platforms where discovery, ordering, and delivery tracking live in one product.",
    outcomes: ["Multi-vendor catalogs", "Unified checkout", "Courier network tools"],
  },
  {
    title: "Grocery delivery",
    description:
      "Browse, cart, schedule, and deliver grocery experiences with inventory-aware shopping journeys.",
    outcomes: ["Catalog and search", "Slot scheduling", "Fulfillment visibility"],
  },
  {
    title: "Meal and catering",
    description:
      "Subscription meals, catering, and event food ordering with bulk, scheduling, and account-friendly flows.",
    outcomes: ["Bulk and scheduled orders", "Account menus", "Delivery windows"],
  },
];

const productSurfaces = [
  {
    title: "Customer app",
    description:
      "Browse, order, pay, track, and reorder — the surface that has to feel fast and trustworthy every time.",
    points: ["Menus and search", "Checkout and payments", "Live order tracking"],
  },
  {
    title: "Ops console",
    description:
      "Menus, orders, inventory signals, and support tools so the business can run the day without chaos.",
    points: ["Order and status control", "Menu management", "Reporting basics"],
  },
  {
    title: "Courier app",
    description:
      "Assignments, routes, customer contact, and delivery confirmation for people on the move.",
    points: ["Order assignment", "Navigation-ready flow", "In-app communication"],
  },
];

const orderJourney = [
  {
    title: "Order",
    description: "Customer places and pays — menu, cart, and confirmation stay clear.",
  },
  {
    title: "Kitchen",
    description: "Ops receives the ticket, updates status, and prepares for handoff.",
  },
  {
    title: "Courier",
    description: "Assignment, route, and pickup connect the kitchen to the customer.",
  },
  {
    title: "Delivered",
    description: "Tracking closes, feedback opens, and the next reorder path is ready.",
  },
];

const deliverySteps = [
  {
    title: "Discover",
    description:
      "Map the business model, channels, and the order journey that has to work on day one.",
  },
  {
    title: "Shape",
    description:
      "Define customer, ops, and courier surfaces — plus the integrations payments and delivery need.",
  },
  {
    title: "Build",
    description:
      "Ship reviewable increments across apps and backend so you can validate real ordering early.",
  },
  {
    title: "Improve",
    description:
      "Harden reliability, refine UX, and extend features as volume and markets grow.",
  },
];

const relatedServices = [
  {
    title: "Mobile development",
    description: "Customer and courier apps built for real devices and real delivery days.",
    href: "/services/mobile-development",
  },
  {
    title: "Backend development",
    description: "Order, menu, and tracking services that keep the product reliable under load.",
    href: "/services/backend-development",
  },
  {
    title: "Ecommerce",
    description: "Catalog, cart, and checkout craft when grocery or marketplace scope expands.",
    href: "/industries/ecommerce",
  },
  {
    title: "Fintech",
    description: "Payments and money movement when checkout needs deeper finance handling.",
    href: "/industries/fintech",
  },
];

const faqs = [
  {
    question: "Do you only build marketplace apps, or single-restaurant apps too?",
    answer:
      "Both. We build for individual restaurants and chains, cloud kitchens, aggregators, grocery, and meal or catering models — shaped to the operating model you actually run.",
  },
  {
    question: "Can you upgrade an existing food delivery app?",
    answer:
      "Yes. Many engagements start with an audit of what exists, then improve reliability, add features, clean architecture, or reconnect payments, POS, and messaging tools.",
  },
  {
    question: "Do you build customer, ops, and courier apps together?",
    answer:
      "Usually yes. A durable food product needs all three surfaces sharing one order foundation — even if you launch one app first and expand next.",
  },
];

function FoodtechHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-0 grid-cols-1 px-5 py-10 sm:px-6 sm:py-12 md:min-h-[410px] md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                Food apps that keep orders moving
              </h1>
            </div>

            <div className="mt-8 flex items-end sm:mt-12 lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology food delivery app development for restaurants, kitchens,
                marketplaces, and grocery — menus, ops, tracking, and payments in one
                workable product.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="relative order-1 min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:order-2 lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Delivery courier checking a phone while holding a basket of fresh groceries"
              className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-[42%_28%]"
              decoding="async"
            />
          </div>

          <a
            href="#contact"
            className="tap-press group relative order-2 flex min-h-[72px] items-center justify-between overflow-hidden border-t border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] text-white md:min-h-[88px] md:px-10 md:text-xl lg:order-1 lg:min-h-[360px] lg:items-start lg:border-t-0 lg:px-8 lg:py-8 xl:px-12"
            style={{ backgroundColor: DEEP }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/12 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:mt-1"
              style={{ color: LIME }}
            >
              <ArrowUpRightIcon />
            </span>
          </a>
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
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Our foodtech services
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              From first strategy decisions to a new build or a modernization pass — shaped
              for restaurants, kitchens, and delivery platforms alike.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {helpModes.map((mode, index) => {
            const isActive = activeMode === index;

            return (
              <article
                key={mode.title}
                onClick={() => setActiveMode(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveMode(index); }}
                onFocus={() => setActiveMode(index)}
                tabIndex={0}
                className={`min-h-0 cursor-pointer sm:min-h-[240px] md:min-h-[300px] border-neutral-200 px-6 py-9 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
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

function AudiencesSection() {
  const [activeAudience, setActiveAudience] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              We build food apps for
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Different food businesses need different product shapes — one brand, many
              kitchens, or a full marketplace.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {audiences.map((audience, index) => {
              const isActive = activeAudience === index;

              return (
                <button
                  key={audience.title}
                  type="button"
                  onClick={() => setActiveAudience(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveAudience(index); }}
                  className={`flex min-h-[68px] w-full items-center border-neutral-200 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-white" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950"}`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  {audience.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={audiences[activeAudience].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: DEEP }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {audiences[activeAudience].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {audiences[activeAudience].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-neutral-200">
                  {audiences[activeAudience].outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
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

function ProductSurfacesSection() {
  const [activeSurface, setActiveSurface] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-[2.75rem]">
              Product surfaces that matter
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              Not a feature dump — the three sides of a food delivery product that have to
              work together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {productSurfaces.map((surface, index) => {
            const isActive = activeSurface === index;

            return (
              <article
                key={surface.title}
                onClick={() => setActiveSurface(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveSurface(index); }}
                onFocus={() => setActiveSurface(index)}
                tabIndex={0}
                className={`min-h-0 cursor-pointer sm:min-h-[240px] md:min-h-[300px] border-white/14 px-6 py-9 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "text-[#1B3A2A]" : "text-white/70 hover:text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : "transparent" }}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : LIME }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em]">
                  {surface.title}
                </h3>
                <p
                  className={`mt-5 text-[15px] leading-[1.72] tracking-tight ${
                    isActive ? "text-[#1B3A2A]/80" : "text-white/65"
                  }`}
                >
                  {surface.description}
                </p>
                <ul
                  className={`mt-8 border-t ${
                    isActive ? "border-[#1B3A2A]/15" : "border-white/14"
                  }`}
                >
                  {surface.points.map((point) => (
                    <li
                      key={point}
                      className={`border-b py-3.5 text-[15px] leading-[1.45] tracking-tight ${
                        isActive
                          ? "border-[#1B3A2A]/15 text-[#1B3A2A]"
                          : "border-white/14 text-white/80"
                      }`}
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

function OrderJourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              The order journey
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Order → Kitchen → Courier → Delivered — the path every food product has to
              keep coherent under real volume.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {orderJourney.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <article
                key={step.title}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveStep(index); }}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`min-h-[220px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-7 lg:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: DEEP }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.6] tracking-tight text-neutral-700">
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

function DeliverySection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              How we deliver
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              A practical path from discovery to improvement — without hiring-theater
              process pages.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <article
                key={step.title}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveStep(index); }}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`min-h-[240px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-7 lg:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: DEEP }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.6] tracking-tight text-neutral-700">
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

function RelatedServicesSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
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
                  style={{ backgroundColor: DEEP }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950 md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {service.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#1B3A2A] transition-transform duration-300 group-hover:translate-x-1">
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

function FoodtechCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Customer receiving a grocery delivery while using a phone"
              className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-[58%_40%]"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: DEEP }}
          >
            <div className="w-full max-w-3xl">
              <h2 className="max-w-2xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.05em] md:text-5xl">
                Is your food business ready to go digital?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                Tell us about the model, the markets, and the ops constraints. We’ll help
                shape a practical food delivery product path.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#1B3A2A] md:px-8"
                style={{ backgroundColor: LIME }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/40 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Reach out today</span>
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

function FoodtechFaqSection() {
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
                  <span className="text-4xl leading-none font-light text-[#1B3A2A]" aria-hidden="true">
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



export default function FoodtechPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <FoodtechHero />
        <div className="content-rail">
          <HelpSection />
          <AudiencesSection />
          <ProductSurfacesSection />
          <OrderJourneySection />
          <DeliverySection />
          <RelatedServicesSection />
          <FoodtechCtaSection />
          <FoodtechFaqSection />
          <ContactSection showIntro={false} accent="lime" />
        </div>
      </main>
      <StickyCTA
        href="#contact-form"
        label="Get in touch"
        backgroundColor={DEEP}
        textColor={"#ffffff"}
      />
      <Footer />
    </>
  );
}
