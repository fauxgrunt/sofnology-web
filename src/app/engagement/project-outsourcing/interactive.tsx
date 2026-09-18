"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { ORANGE, DEEP, SOFT, scenarios, deliverySteps, engagementModels } from "@/content/engagement/project-outsourcing";
import { SelectableCard, tabControlProps } from "@/components/a11y/SelectableCard";


export function ScenariosSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="When this model fits"
          lede="Three common situations where owning delivery as a scoped project beats filling seats."
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {scenarios.map((scenario, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={scenario.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[280px] border-neutral-200 px-6 py-9 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >

                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: ORANGE }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={panelTransition}
                />
                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? ORANGE : "#A3A3A3" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {scenario.title}
                </span>
                <p className="mt-5 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {scenario.description}
                </p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowWeDoItSection() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <SectionIntro
          title="How we run the engagement"
          lede="Four stages from first conversation to a calm release — ownership stays with Sofnology the whole way."
          tone="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <SelectableCard
                key={step.title}
                selected={isActive}
                onSelect={() => setActiveStep(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-white/14 px-6 py-9 transition-colors duration-expand ease-motion md:px-7 lg:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "text-[#1A1512]" : "text-white/70 hover:text-white"
                }`}
                style={{ backgroundColor: isActive ? SOFT : "transparent" }}
              >

                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : ORANGE }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em]">
                  {step.title}
                </span>
                <p
                  className={`mt-4 text-[14px] leading-[1.6] tracking-tight ${
                    isActive ? "text-[#1A1512]/80" : "text-white/65"
                  }`}
                >
                  {step.description}
                </p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ModelContrastSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = engagementModels[activeIndex];

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Choose the right model"
          lede="Select a model to compare ownership, fit, and next step — project outsourcing is delivery ownership; the others put capacity inside your team."
          minHeight={160}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div role="tablist" aria-label="Engagement models">
            {engagementModels.map((model, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={model.id}
                  type="button"
                  {...tabControlProps(index, activeIndex, engagementModels.length, setActiveIndex, "model-panel")}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveIndex(index); }}
                  className={`flex min-h-[76px] w-full items-center justify-between gap-4 border-neutral-200 px-6 text-left transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 hover:bg-white/55 hover:text-neutral-950"
                  }`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  <span className="text-lg font-semibold tracking-[-0.03em] md:text-xl">
                    {model.title}
                  </span>
                  {model.current && isActive ? (
                    <span
                      className="shrink-0 text-[11px] font-semibold tracking-[0.08em] uppercase"
                      style={{ color: ORANGE }}
                    >
                      You&apos;re here
                    </span>
                  ) : (
                    <span
                      className={`shrink-0 transition-transform duration-300 ${
                        isActive ? "translate-x-0.5 -translate-y-0.5 text-white" : "text-neutral-400"
                      }`}
                      aria-hidden="true"
                    >
                      <ArrowUpRightIcon />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            id="model-panel"
            role="tabpanel"
            aria-labelledby={`model-panel-tab-${activeIndex}`}
            className="border-t border-neutral-200 bg-white px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14 lg:py-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: ORANGE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {active.title}
                </h3>
                <p className="mt-5 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {active.summary}
                </p>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-800">
                  <span className="font-semibold text-neutral-950">Best for: </span>
                  {active.bestFor}
                </p>
                <ul className="mt-8 max-w-lg border-t border-neutral-200">
                  {active.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={active.ctaHref}
                  className="group relative mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-between overflow-hidden px-5 py-4 text-[15px] font-semibold tracking-[-0.03em] text-[#1A1512] md:text-base"
                  style={{ backgroundColor: ORANGE }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                  />
                  <span className="relative z-10">{active.ctaLabel}</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
