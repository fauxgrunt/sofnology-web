"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { BLUE, DEEP, SOFT, webServices, solutionTypes, workSteps, industries } from "@/content/services/web-development";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Our web development services"
          lede="Interface, backend, integrations, and refinement — the work needed to launch and improve a real web product."
          minHeight={170}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {webServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <SelectableCard
                key={service.title}
                selected={isActive}
                onSelect={() => setActiveService(index)}
                className={`min-h-[210px] cursor-pointer border-neutral-200 px-6 py-7 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >

                <motion.div
                  className="mb-5 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={panelTransition}
                />
                <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {service.title}
                </span>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={panelTransition}
                  className="mt-4 text-[15px] leading-[1.6] tracking-tight text-neutral-700"
                >
                  {service.description}
                </motion.p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SolutionTypesSection() {
  const [activeType, setActiveType] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <SectionIntro
          title="A full stack of web solutions"
          lede="Portals, product apps, content sites, stores, and custom websites — shaped around the audience and the job the product needs to do."
          tone="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {solutionTypes.map((type, index) => {
              const isActive = activeType === index;

              return (
                <button
                  key={type.title}
                  type="button"
                  onClick={() => setActiveType(index)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActiveType(index);
                  }}
                  className={`flex min-h-[72px] w-full items-center border-white/14 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-[#0E1A3A]" : "text-white/55 hover:text-white"}`}
                  style={{ backgroundColor: isActive ? SOFT : "transparent" }}
                >
                  {type.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/14 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={solutionTypes[activeType].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: BLUE }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em]">
                  {solutionTypes[activeType].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                  {solutionTypes[activeType].description}
                </p>
                <ul className="mt-8 space-y-3">
                  {solutionTypes[activeType].points.map((point) => (
                    <li
                      key={point}
                      className="text-[15px] leading-[1.5] tracking-tight text-white/88"
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

export function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div
          className="min-h-[300px] border-b border-white/14 px-6 py-16 text-white md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]"
          style={{ backgroundColor: DEEP }}
        >
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
              How we work and what you get
            </h2>
            <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-white/72">
              This is the center of the engagement — a clear path from first requirements
              through design, build, testing, and continued improvement.
            </p>
          </div>
        </div>

        <div>
          {workSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <SelectableCard
                key={step.title}
                selected={isActive}
                onSelect={() => setActiveStep(index)}
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-neutral-200 transition-[min-height,background-color,color] duration-expand ease-motion lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[230px] bg-white text-[#0E1A3A]" : "min-h-[80px] bg-page text-neutral-950 hover:bg-white/60"}`}
              >

                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className={`text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl ${
                      isActive ? "text-[#0E1A3A]" : "text-neutral-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {step.title}
                  </span>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-6 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
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

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Built for real industry workflows"
          lede="The interface and architecture should match how your customers and teams actually work — not a generic template."
          scale="large"
          minHeight={220}
          padding="roomy"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {industries.map((industry, index) => {
              const isActive = activeIndustry === index;

              return (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActiveIndustry(index);
                  }}
                  className={`flex min-h-20 w-full items-center border-neutral-200 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "bg-[#0E1A3A] text-white" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950"}`}
                >
                  {industry.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:border-t-0 lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={industries[activeIndustry].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: DEEP }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {industries[activeIndustry].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {industries[activeIndustry].description}
                </p>
                <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
                  {industries[activeIndustry].outcomes.map((outcome) => (
                    <p
                      key={outcome}
                      className="border border-neutral-200 bg-white/60 px-4 py-4 text-[14px] leading-[1.45] tracking-tight text-neutral-800"
                    >
                      {outcome}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
