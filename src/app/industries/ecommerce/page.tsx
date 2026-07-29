"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const MAGENTA = "#FF2D6A";
const DEEP = "#1A1216";
const SOFT = "#FFD6E3";

const HERO_IMAGE = "/ecommerce-hero.jpg";

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

const commercePaths = [
  {
    title: "Launch and grow a brand",
    description:
      "Build a cohesive storefront experience across web and mobile — clear catalog, checkout, and brand presence from the start.",
    points: ["Customer journey clarity", "Brand-consistent storefront", "Channel-ready foundations"],
  },
  {
    title: "Enterprise commerce transformation",
    description:
      "Modernize complex commerce operations with stronger UX, reliable integrations, and systems that connect CRM, ERP, and fulfillment.",
    points: ["Platform modernization", "CRM and ERP connections", "Operational continuity"],
  },
];

const buildTypes = [
  {
    title: "Online stores",
    description:
      "Custom storefronts with catalog, cart, checkout, and order flows shaped around your brand and operations.",
    outcomes: ["Catalog and product pages", "Cart and checkout", "Order confirmation flows"],
  },
  {
    title: "B2B and B2C marketplaces",
    description:
      "Multi-seller or multi-buyer platforms with roles, listings, and commerce flows that stay usable as volume grows.",
    outcomes: ["Seller and buyer roles", "Listing and discovery", "Multi-party order flows"],
  },
  {
    title: "Mobile commerce",
    description:
      "Mobile apps and mobile-first experiences that connect to your catalog, accounts, and order systems.",
    outcomes: ["Mobile storefront", "Account and orders", "Push-ready journeys"],
  },
  {
    title: "Custom commerce platforms",
    description:
      "Bespoke commerce products when off-the-shelf platforms can’t carry the complexity you actually need.",
    outcomes: ["Custom pricing rules", "Complex catalogs", "Owned architecture"],
  },
];

const capabilities = [
  {
    title: "Checkout and payments",
    description:
      "Carts, gateways, wallets, and payment paths designed for conversion and reliable order capture.",
  },
  {
    title: "Catalog and PIM",
    description:
      "Product information, categories, and enrichment that keep large catalogs consistent and sellable.",
  },
  {
    title: "Inventory and orders",
    description:
      "Stock visibility and order processing synced across channels so operations stay accurate in real time.",
  },
  {
    title: "ERP and CRM integration",
    description:
      "Connect planning, finance, customer data, and sales tooling into one workable commerce stack.",
  },
  {
    title: "Fulfillment visibility",
    description:
      "Status, shipping, and ops surfaces that help teams and customers see what happens after checkout.",
  },
  {
    title: "Sales and marketing systems",
    description:
      "CRM, analytics, and campaign hooks that support retention without fracturing the storefront experience.",
  },
];

const deliverySteps = [
  {
    title: "Discover",
    description:
      "Map catalog complexity, channels, integrations, and the conversion paths that matter most.",
  },
  {
    title: "Shape",
    description:
      "Define storefront architecture, checkout flow, and the systems the commerce product must connect to.",
  },
  {
    title: "Build",
    description:
      "Ship reviewable increments across storefront, catalog, payments, and operational tooling.",
  },
  {
    title: "Optimize",
    description:
      "Refine checkout, performance, and integrations as real traffic and order volume reveal what to improve.",
  },
];

const platforms = [
  {
    category: "Commerce platforms",
    items: ["Shopify", "Magento", "Custom storefronts", "Headless commerce"],
  },
  {
    category: "Integrations",
    items: ["Payment gateways", "ERP connectors", "CRM systems", "Shipping APIs"],
  },
];

const relatedServices = [
  {
    title: "Web development",
    description: "Storefronts, portals, and product UIs that carry the customer experience.",
    href: "/services/web-development",
  },
  {
    title: "Mobile development",
    description: "Commerce apps and mobile journeys connected to your catalog and orders.",
    href: "/services/mobile-development",
  },
  {
    title: "Backend development",
    description: "APIs, catalog services, and order systems behind the storefront.",
    href: "/services/backend-development",
  },
  {
    title: "Fintech",
    description: "Payments, wallets, and money movement when checkout needs deeper finance craft.",
    href: "/industries/fintech",
  },
];

const faqs = [
  {
    question: "Do you build on Shopify and Magento, or only custom platforms?",
    answer:
      "Both. We work with established commerce platforms when they fit, and build custom or headless storefronts when your catalog, pricing, or operations need more control.",
  },
  {
    question: "Can you connect ecommerce to our ERP and CRM?",
    answer:
      "Yes. Many engagements include payment, inventory, ERP, and CRM integrations so the storefront is not an island from the rest of the business.",
  },
  {
    question: "Do you help with mobile commerce as well as the website?",
    answer:
      "Yes. We build mobile-first storefronts and native or cross-platform commerce apps that share catalog, account, and order foundations with the web experience.",
  },
];

function EcommerceHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                Ecommerce software development
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology builds custom ecommerce solutions for brands, retailers, and
                platforms — streamlining catalog, order, and payment flows while keeping
                the shopping experience clear.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: image first, slim CTA under. Desktop: ink CTA + full-bleed bags (no wedge). */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="relative order-1 min-h-[280px] overflow-hidden md:min-h-[360px] lg:order-2 lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Yellow shopping bags on a white conveyor in a minimal 3D ecommerce scene"
              className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
              decoding="async"
            />
          </div>

          <a
            href="#contact"
            className="group relative order-2 flex min-h-[72px] items-center justify-between overflow-hidden border-t border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] text-white md:min-h-[88px] md:px-10 md:text-xl lg:order-1 lg:min-h-[360px] lg:items-start lg:border-t-0 lg:px-8 lg:py-8 xl:px-12"
            style={{ backgroundColor: DEEP }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/10 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:mt-1"
              style={{ color: MAGENTA }}
            >
              <ArrowUpRightIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function PathsSection() {
  const [activePath, setActivePath] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              The path to ecommerce success
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Whether you’re launching a brand or transforming an established commerce
              operation, the work starts from different constraints.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {commercePaths.map((path, index) => {
            const isActive = activePath === index;

            return (
              <article
                key={path.title}
                onMouseEnter={() => setActivePath(index)}
                onFocus={() => setActivePath(index)}
                tabIndex={0}
                className={`min-h-[300px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10 lg:px-14 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: MAGENTA }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {path.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {path.description}
                </p>
                <ul className="mt-8 border-t border-neutral-200">
                  {path.points.map((point) => (
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

function BuildTypesSection() {
  const [activeType, setActiveType] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              What we build
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Storefronts, marketplaces, mobile commerce, and custom platforms — paired with
              the backend operations commerce actually needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {buildTypes.map((type, index) => {
              const isActive = activeType === index;

              return (
                <button
                  key={type.title}
                  type="button"
                  onClick={() => setActiveType(index)}
                  onMouseEnter={() => setActiveType(index)}
                  className={`flex min-h-[72px] w-full items-center border-neutral-200 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-300 md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-white" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950"}`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  {type.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={buildTypes[activeType].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: fadeEase }}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: MAGENTA }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {buildTypes[activeType].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {buildTypes[activeType].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-neutral-200">
                  {buildTypes[activeType].outcomes.map((outcome) => (
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

function CapabilitiesSection() {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Custom ecommerce capabilities
            </h2>
          </div>
          <div className="flex items-end px-6 py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              The systems behind a store that converts — payments, catalog, inventory, and
              the integrations that keep operations moving.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const isActive = activeCapability === index;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActiveCapability(index)}
                onFocus={() => setActiveCapability(index)}
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
                  style={{ backgroundColor: MAGENTA }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {item.title}
                </h3>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={{ duration: 0.35, ease: fadeEase }}
                  className="mt-4 text-[15px] leading-[1.6] tracking-tight text-neutral-700"
                >
                  {item.description}
                </motion.p>
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
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-[2.75rem]">
              How we deliver commerce
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/72">
              A clear path from discovery to optimization — without staffing theater or
              interview process pages.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <article
                key={step.title}
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`min-h-[260px] cursor-pointer border-white/14 px-6 py-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-7 lg:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "text-[#1A1216]" : "text-white/70 hover:text-white"
                }`}
                style={{ backgroundColor: isActive ? SOFT : "transparent" }}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : MAGENTA }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em]">
                  {step.title}
                </h3>
                <p
                  className={`mt-4 text-[14px] leading-[1.6] tracking-tight ${
                    isActive ? "text-[#1A1216]/80" : "text-white/60"
                  }`}
                >
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

function PlatformsSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[180px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Platforms and integrations
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
              Established commerce platforms when they fit — custom and headless when they
              don’t. Integrations chosen for the business, not a logo wall.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {platforms.map((group, index) => (
            <div
              key={group.category}
              className={`px-6 py-12 md:px-10 lg:px-16 ${
                index > 0 ? "border-t border-neutral-200 md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: MAGENTA }} />
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-neutral-950">
                {group.category}
              </h3>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-neutral-200 py-3 text-[15px] tracking-tight text-neutral-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
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
                  style={{ backgroundColor: MAGENTA }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950 md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {service.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#1A1216] transition-transform duration-300 group-hover:translate-x-1">
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

function EcommerceCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div
          className="flex min-h-[340px] items-center px-6 py-14 text-white md:px-10 lg:min-h-[400px] lg:px-16 xl:px-20"
          style={{ backgroundColor: DEEP }}
        >
          <div className="w-full max-w-4xl">
            <div className="mb-8 h-1 w-14" style={{ backgroundColor: MAGENTA }} />
            <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-5xl">
              Ready to build commerce that converts?
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
              Tell us about the catalog, channels, and operational constraints. We’ll help
              shape a practical ecommerce path.
            </p>

            <a
              href="#contact-form"
              className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-white md:px-8"
              style={{ backgroundColor: MAGENTA }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10">Tell us about your project</span>
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

function EcommerceFaqSection() {
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
                  <span className="text-4xl leading-none font-light text-[#1A1216]" aria-hidden="true">
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
            className="pointer-events-auto mx-auto flex h-14 max-w-md items-center justify-between gap-4 px-5 text-[15px] font-semibold tracking-[-0.03em] text-white shadow-[0_12px_40px_rgba(26,18,22,0.22)] md:h-16 md:max-w-lg md:px-6 md:text-base"
            style={{ backgroundColor: MAGENTA }}
          >
            <span>Get in touch</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function EcommercePage() {
  return (
    <>
      <Navbar />
      <main>
        <EcommerceHero />
        <div className="content-rail">
          <PathsSection />
          <BuildTypesSection />
          <CapabilitiesSection />
          <DeliverySection />
          <PlatformsSection />
          <RelatedServicesSection />
          <EcommerceCtaSection />
          <EcommerceFaqSection />
          <ContactSection showIntro={false} accent="magenta" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
