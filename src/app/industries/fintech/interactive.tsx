"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { GOLD, DEEP, SOFT, helpModes, domains, solutions, workSteps } from "@/content/industries/fintech";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function HelpSection() {
  const [activeMode, setActiveMode] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Your fintech partner at every stage"
          lede="Whether you need clarity before build or a team to ship the product, we meet you where the work actually is."
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {helpModes.map((mode, index) => {
            const isActive = activeMode === index;

            return (
              <SelectableCard
                key={mode.title}
                selected={isActive}
                onSelect={() => setActiveMode(index)}
                className={`min-h-[320px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-expand ease-motion md:px-10 lg:px-14 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >

                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: GOLD }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {mode.title}
                </span>
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
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function DomainsSection() {
  const [activeDomain, setActiveDomain] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <SectionIntro
          title="Markets we serve"
          lede="Who the product is for — lenders, merchants, wealth platforms, insurers, and companies embedding finance into an existing business."
          tone="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {domains.map((domain, index) => {
              const isActive = activeDomain === index;

              return (
                <button
                  key={domain.title}
                  type="button"
                  onClick={() => setActiveDomain(index)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActiveDomain(index);
                  }}
                  className={`flex min-h-[68px] w-full items-center border-white/14 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-[#1A1C1F]" : "text-white/55 hover:text-white"}`}
                  style={{ backgroundColor: isActive ? SOFT : "transparent" }}
                >
                  {domain.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/14 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={domains[activeDomain].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: GOLD }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em]">
                  {domains[activeDomain].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                  {domains[activeDomain].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-white/14">
                  {domains[activeDomain].outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="border-b border-white/14 py-3.5 text-[15px] leading-[1.45] tracking-tight text-white/85"
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

export function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Products we build"
          lede="What ships — gateways, wallets, trading systems, ops consoles, and the account foundations underneath."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const isActive = activeSolution === index;

            return (
              <SelectableCard
                key={solution.title}
                selected={isActive}
                onSelect={() => setActiveSolution(index)}
                className={`min-h-[220px] cursor-pointer border-neutral-200 px-6 py-7 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >

                <motion.div
                  className="mb-5 h-1 origin-left"
                  style={{ backgroundColor: GOLD }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={panelTransition}
                />
                <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {solution.title}
                </span>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={panelTransition}
                  className="mt-4 text-[15px] leading-[1.6] tracking-tight text-neutral-700"
                >
                  {solution.description}
                </motion.p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WorkPathSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <SectionIntro
          title="How we work"
          lede="A short path from clarity to ship — without pretending every engagement starts at the same place."
          tone="dark"
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {workSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <SelectableCard
                key={step.title}
                selected={isActive}
                onSelect={() => setActiveStep(index)}
                className={`min-h-0 cursor-pointer border-white/14 px-6 py-9 transition-colors duration-expand ease-motion sm:min-h-[220px] md:min-h-[260px] md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "text-[#1A1C1F]" : "text-white/70 hover:text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : "transparent" }}
              >

                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : GOLD }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em]">
                  {step.title}
                </span>
                <p
                  className={`mt-5 text-[15px] leading-[1.65] tracking-tight ${
                    isActive ? "text-[#1A1C1F]/80" : "text-white/60"
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
