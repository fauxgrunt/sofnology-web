"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { WINE, DEEP, SOFT, startupServices, domains, partnershipModels } from "@/content/engagement/solutions-for-startups";
import { tabControlProps } from "@/components/a11y/SelectableCard";


export function StartupServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Our services for startups"
          lede="From first technical decisions to MVP, product build, and scale — support matched to where you are now."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div role="tablist" aria-label="Startup services">
            {startupServices.map((service, index) => {
              const isActive = active === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  {...tabControlProps(index, active, startupServices.length, setActive, "startup-services-panel")}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                  className={`flex min-h-[72px] w-full items-center gap-4 border-neutral-200 px-6 text-left transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 hover:bg-white/55 hover:text-neutral-950"
                  }`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  <span
                    className="text-[13px] font-medium tracking-tight"
                    style={{ color: isActive ? SOFT : undefined }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold tracking-[-0.03em] md:text-xl">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="startup-services-panel"
            role="tabpanel"
            aria-labelledby={`startup-services-panel-tab-${active}`}
            className="border-t border-neutral-200 bg-white px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14 lg:py-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={startupServices[active].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: WINE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {startupServices[active].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {startupServices[active].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-neutral-200">
                  {startupServices[active].points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
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

export function DomainsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Solutions across domains"
          lede="Startup products live in real verticals — we bring the same delivery craft into the domains we know best."
          minHeight={160}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, index) => {
            const isActive = active === index;

            return (
              <Link
                key={domain.title}
                href={domain.href}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                className={`group flex min-h-0 flex-col justify-between sm:min-h-[220px] md:min-h-[260px] border-neutral-200 px-6 py-9 transition-colors duration-500 md:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >
                <div>
                  <motion.div
                    className="mb-6 h-1 origin-left"
                    style={{ backgroundColor: WINE }}
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                    transition={panelTransition}
                  />
                  <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                    {domain.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                    {domain.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#1A1216] transition-transform duration-300 group-hover:translate-x-1">
                  {domain.ctaLabel}
                  <ArrowUpRightIcon />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PartnershipModelsSection() {
  const [active, setActive] = useState(2);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <SectionIntro
          title="Our partnership models"
          lede="Capacity inside your team, a lasting team, or full project ownership — choose how you want to work."
          tone="dark"
          minHeight={160}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
          <div role="tablist" aria-label="Partnership models">
            {partnershipModels.map((model, index) => {
              const isActive = active === index;

              return (
                <button
                  key={model.title}
                  type="button"
                  {...tabControlProps(index, active, partnershipModels.length, setActive, "startup-models-panel")}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                  className={`flex min-h-[80px] w-full items-center gap-4 border-white/14 px-6 text-left transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-[#1A1216]" : "text-white/55 hover:text-white"}`}
                  style={{ backgroundColor: isActive ? SOFT : "transparent" }}
                >
                  <span
                    className="text-[13px] font-medium tracking-tight"
                    style={{ color: isActive ? WINE : undefined }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold tracking-[-0.03em] md:text-xl">
                    {model.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="startup-models-panel"
            role="tabpanel"
            aria-labelledby={`startup-models-panel-tab-${active}`}
            className="border-t border-white/14 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14 lg:py-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={partnershipModels[active].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: WINE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em]">
                  {partnershipModels[active].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/75">
                  {partnershipModels[active].description}
                </p>
                <p className="mt-8 text-[13px] font-semibold tracking-[0.06em] uppercase text-white/45">
                  Ideal for
                </p>
                <ul className="mt-3 max-w-lg border-t border-white/14">
                  {partnershipModels[active].idealFor.map((item) => (
                    <li
                      key={item}
                      className="border-b border-white/14 py-3.5 text-[15px] leading-[1.45] tracking-tight text-white/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={partnershipModels[active].href}
                  className="group relative mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-between overflow-hidden px-5 py-4 text-[15px] font-semibold tracking-[-0.03em] text-white md:text-base"
                  style={{ backgroundColor: WINE }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                  />
                  <span className="relative z-10">
                    {partnershipModels[active].href.startsWith("/")
                      ? "View project outsourcing"
                      : "Start a Project"}
                  </span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
