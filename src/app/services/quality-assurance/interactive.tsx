"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { DEEP, SOFT, spotlightCapabilities, processSteps, testingTypes } from "@/content/services/quality-assurance";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function SpotlightSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Take quality assurance further"
          lede="Seasoned engineers treat QA as part of delivery — best-in-class functionality, realistic deadlines, and coverage that matches how your product is actually used."
          scale="large"
          minHeight={200}
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {spotlightCapabilities.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-[240px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-expand ease-motion md:px-10 lg:px-16 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >

                <motion.div
                  className="mb-7 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.35 }}
                  transition={panelTransition}
                />
                <span className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {item.title}
                </span>
                <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
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

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="min-h-[320px] border-b border-white/14 px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]">
          <motion.div
            className="max-w-3xl lg:px-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={panelTransition}
          >
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
              Quality from the start
            </h2>
            <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-white/72">
              Earlier defects. Clearer release risk. QA engineers join early so testing
              shapes the build — not just the final week.
            </p>
          </motion.div>
        </div>

        <div>
          {processSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <SelectableCard
                key={step.title}
                selected={isActive}
                onSelect={() => setActiveStep(index)}
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-white/14 transition-[min-height,background-color,color] duration-expand ease-motion lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[260px] text-[#101413]" : "min-h-[72px] text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : DEEP }}
              >

                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className={`text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl ${
                      isActive ? "" : "text-white/55"
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
                      isActive ? "mt-6 max-h-44 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight opacity-85">
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

export function TestingTypesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Testing the limits
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Coverage shaped around risk — not a wall of test types for its own sake.
          </p>
        </div>

        <div>
          {testingTypes.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`grid cursor-pointer grid-cols-1 border-neutral-200 transition-[background-color,min-height] duration-expand ease-motion md:grid-cols-[0.34fr_0.66fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[170px] bg-white" : "min-h-[96px] hover:bg-white/50"}`}
              >

                <div className="flex items-center gap-5 px-6 py-6 md:px-10 lg:px-16">
                  <span
                    className="text-[13px] font-semibold tracking-[0.12em] tabular-nums"
                    style={{ color: isActive ? DEEP : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center px-6 pb-6 md:px-10 md:py-6 lg:px-16">
                  <p
                    className={`max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700 transition-opacity duration-chrome ease-motion ${
                      isActive ? "opacity-100" : "opacity-55 md:opacity-70"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
