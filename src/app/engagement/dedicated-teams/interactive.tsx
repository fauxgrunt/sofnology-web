"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import { STEEL, DEEP, comparisonModels, fitScenarios, perks, hireSteps } from "@/content/engagement/dedicated-teams";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function ComparisonSection() {
  const [active, setActive] = useState(0);
  const model = comparisonModels[active];

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Dedicated team vs staff augmentation vs time &amp; materials
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Powerful support — but not always the best fit. Choose the engagement that
            matches how you want ownership and scope to work.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 md:grid-cols-3">
          {comparisonModels.map((item, index) => {
            const isActive = active === index;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`min-h-[88px] border-neutral-200 px-6 py-6 text-left text-lg font-semibold tracking-[-0.04em] transition-colors duration-chrome ease-motion md:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white text-neutral-950" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-800"}`}
              >
                <span
                  className="mb-3 block h-1 w-10 transition-opacity duration-300"
                  style={{
                    backgroundColor: isActive ? DEEP : "#d4d4d4",
                    opacity: isActive ? 1 : 0.7,
                  }}
                />
                {item.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={panelTransition}
            className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]"
          >
            <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16">
              <p className="text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                {model.summary}
              </p>
              <p className="mt-10 text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                Best for
              </p>
              <ul className="mt-4 space-y-3">
                {model.bestFor.map((line) => (
                  <li
                    key={line}
                    className="text-[15px] leading-[1.55] tracking-tight text-neutral-800"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b border-neutral-200 px-6 py-12 md:border-b-0 md:border-r md:px-10 lg:px-12">
                <p className="text-[12px] font-semibold tracking-[0.14em] uppercase" style={{ color: DEEP }}>
                  Pros
                </p>
                <ul className="mt-5 space-y-4">
                  {model.pros.map((line) => (
                    <li
                      key={line}
                      className="text-[15px] leading-[1.55] tracking-tight text-neutral-700"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-12 md:px-10 lg:px-12">
                <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                  Watch-outs
                </p>
                <ul className="mt-5 space-y-4">
                  {model.cons.map((line) => (
                    <li
                      key={line}
                      className="text-[15px] leading-[1.55] tracking-tight text-neutral-700"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function FitSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            When dedicated teams fill the bill
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Best for extended timelines, evolving scope, and work that needs a stable,
            specialized team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {fitScenarios.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-[210px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >

                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={panelTransition}
                />
                <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {item.title}
                </span>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {item.description}
                </p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PerksSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            What you gain with a dedicated team
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            Focus, continuity, and the ability to reshape capacity without rebuilding
            your hiring machine every time the roadmap changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-[220px] cursor-pointer border-white/14 px-6 py-8 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white/8" : "hover:bg-white/4"
                }`}
              >

                <div
                  className="mb-6 h-1 w-10"
                  style={{ backgroundColor: isActive ? STEEL : "rgba(255,255,255,0.25)" }}
                />
                <span className="text-xl font-semibold tracking-[-0.04em]">{item.title}</span>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/70">
                  {item.description}
                </p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HireProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            How we assemble a dedicated team
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Sofnology handles selection and onboarding — you stay in control of fit and
            direction.
          </p>
        </div>

        <div>
          {hireSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <SelectableCard
                key={step.title}
                selected={isActive}
                onSelect={() => setActiveStep(index)}
                className={`grid cursor-pointer grid-cols-[0.22fr_0.78fr] border-neutral-200 transition-[min-height,background-color] duration-expand ease-motion md:grid-cols-[0.28fr_0.72fr] lg:grid-cols-[0.36fr_0.64fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[200px] bg-white" : "min-h-[100px] hover:bg-white/45"}`}
              >

                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className="text-[2.35rem] sm:text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl"
                    style={{ color: isActive ? DEEP : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {step.title}
                  </span>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-5 max-h-36 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
