"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { SLATE, DEEP, ICE, SERVICES_IMAGE, OUTCOMES_IMAGE, distinctPoints, enterpriseServices, outcomes, workModels } from "@/content/engagement/solutions-for-enterprises";
import { SelectableCard, tabControlProps } from "@/components/a11y/SelectableCard";


export function DistinctSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Why enterprise software is distinct"
          lede="Built for large organizations — multi-user scale, deep customization, high security, and support that keeps downtime rare."
          minHeight={160}
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {distinctPoints.map((point, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={point.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >

                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: SLATE }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.35 }}
                  transition={panelTransition}
                />
                <span
                  className="text-3xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? SLATE : "#A3A3A3" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-5 text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                  {point.title}
                </span>
                <p className="mt-4 max-w-sm text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {point.description}
                </p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const [active, setActive] = useState(2);
  const current = enterpriseServices[active];

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Our enterprise software services"
          lede="Consulting through modernization, integration, cloud, QA, security, and ongoing support — one coordinated delivery surface."
          minHeight={160}
        />

        <div className="relative min-h-[240px] overflow-hidden border-b border-neutral-200 md:min-h-[320px]">
          <Image
            src={SERVICES_IMAGE}
            alt="Enterprise team reviewing system architecture and analytics on a wall display"
            fill
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="scale-[1.04] object-cover object-[48%_32%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F24]/55 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 max-w-md text-[13px] font-semibold tracking-[0.08em] uppercase text-white md:bottom-8 md:left-10 lg:left-16">
            Architecture · delivery · operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div role="tablist" aria-label="Enterprise services">
            {enterpriseServices.map((service, index) => {
              const isActive = active === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  {...tabControlProps(index, active, enterpriseServices.length, setActive, "enterprise-services-panel")}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                  className={`flex min-h-[68px] w-full items-center justify-between gap-4 border-neutral-200 px-6 text-left transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 hover:bg-white/55 hover:text-neutral-950"
                  }`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: isActive ? ICE : undefined }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-semibold tracking-[-0.03em] md:text-lg">
                      {service.shortTitle}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 transition-transform duration-300 ${
                      isActive ? "translate-x-0.5 -translate-y-0.5 text-white" : "text-neutral-300"
                    }`}
                    aria-hidden="true"
                  >
                    <ArrowUpRightIcon />
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="enterprise-services-panel"
            role="tabpanel"
            aria-labelledby={`enterprise-services-panel-tab-${active}`}
            className="border-t border-neutral-200 bg-white px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14 lg:py-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: SLATE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {current.title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {current.description}
                </p>
                <ul className="mt-8 max-w-md border-t border-neutral-200">
                  {current.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                {"href" in current && current.href ? (
                  <Link
                    href={current.href}
                    className="group relative mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-between overflow-hidden px-5 py-4 text-[15px] font-semibold tracking-[-0.03em] text-white"
                    style={{ backgroundColor: SLATE }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                    />
                    <span className="relative z-10">Learn more</span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRightIcon />
                    </span>
                  </Link>
                ) : (
                  <a
                    href="#contact"
                    className="group relative mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-between overflow-hidden px-5 py-4 text-[15px] font-semibold tracking-[-0.03em] text-white"
                    style={{ backgroundColor: SLATE }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                    />
                    <span className="relative z-10">Discuss this service</span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowWeWorkSection() {
  const [active, setActive] = useState(2);
  const current = workModels[active];

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <SectionIntro
          title="How we work with enterprises"
          lede="Capacity inside your team, a dedicated pod, or full outsourcing — pick the ownership model that fits the initiative."
          tone="dark"
          minHeight={160}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
          <div role="tablist" aria-label="How we work">
            {workModels.map((model, index) => {
              const isActive = active === index;

              return (
                <button
                  key={model.title}
                  type="button"
                  {...tabControlProps(index, active, workModels.length, setActive, "enterprise-work-panel")}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                  className={`flex min-h-[80px] w-full items-center gap-4 border-white/14 px-6 text-left transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-[#1A1F24]" : "text-white/55 hover:text-white"}`}
                  style={{ backgroundColor: isActive ? ICE : "transparent" }}
                >
                  <span
                    className="text-[13px] font-medium tracking-tight"
                    style={{ color: isActive ? SLATE : undefined }}
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
            id="enterprise-work-panel"
            role="tabpanel"
            aria-labelledby={`enterprise-work-panel-tab-${active}`}
            className="border-t border-white/14 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14 lg:py-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: SLATE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em]">
                  {current.title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/75">
                  {current.description}
                </p>
                <ul className="mt-8 max-w-lg border-t border-white/14">
                  {current.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-white/14 py-3.5 text-[15px] leading-[1.45] tracking-tight text-white/85"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={current.href}
                  className="group relative mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-between overflow-hidden px-5 py-4 text-[15px] font-semibold tracking-[-0.03em] text-white md:text-base"
                  style={{ backgroundColor: SLATE }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                  />
                  <span className="relative z-10">{current.ctaLabel}</span>
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

export function OutcomesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Outcomes that move the business"
          lede="Enterprise software earns its keep when processes, insight, integration, and analytics all move together."
          minHeight={160}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative min-h-[320px] overflow-hidden border-b border-neutral-200 lg:min-h-[480px] lg:border-b-0 lg:border-r">
            <Image
              src={OUTCOMES_IMAGE}
              alt="Team reviewing business analytics dashboards on a laptop"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="scale-[1.1] object-cover object-[58%_48%]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {outcomes.map((outcome, index) => {
              const isActive = active === index;

              return (
                <SelectableCard
                  key={outcome.title}
                  selected={isActive}
                  onSelect={() => setActive(index)}
                  className={`min-h-[200px] cursor-pointer px-6 py-9 transition-colors duration-500 md:px-8 ${
                    index > 0 ? "border-t border-neutral-200 md:border-t-0" : ""
                  } ${index % 2 === 1 ? "md:border-l border-neutral-200" : ""} ${
                    index >= 2 ? "md:border-t border-neutral-200" : ""
                  } ${isActive ? "bg-white" : "hover:bg-white/40"}`}
                >

                  <motion.div
                    className="mb-5 h-1 origin-left"
                    style={{ backgroundColor: SLATE }}
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0.28, opacity: isActive ? 1 : 0.35 }}
                    transition={panelTransition}
                  />
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                    {outcome.title}
                  </span>
                  <p className="mt-4 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                    {outcome.description}
                  </p>
                </SelectableCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
