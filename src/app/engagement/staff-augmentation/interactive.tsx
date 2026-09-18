"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { DEEP, SOFT, wins, comparisonModels, fitScenarios, workSteps } from "@/content/engagement/staff-augmentation";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function WinsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Win with staff augmentation"
          lede="Flexibility for startups and mature teams — add capacity that adapts with market demand and keeps time-to-market realistic."
          scale="large"
          minHeight={200}
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {wins.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-8 lg:px-10 ${
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

export function ComparisonSection() {
  const [active, setActive] = useState(0);
  const model = comparisonModels[active];

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Compare engagement models
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Staff augmentation, dedicated teams, and project outsourcing — pick the model
            that matches how you want ownership to work.
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
            className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]"
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
              {"href" in model && model.href && (
                <a
                  href={model.href}
                  className="group mt-10 inline-flex items-center gap-3 text-[15px] font-semibold tracking-[-0.03em] text-neutral-950"
                >
                  Explore {model.title.toLowerCase()}
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              )}
            </div>

            <div className="px-6 py-12 md:px-10 lg:px-16">
              <p className="text-[12px] font-semibold tracking-[0.14em] uppercase" style={{ color: DEEP }}>
                How it works in practice
              </p>
              <ul className="mt-5 space-y-4">
                {model.points.map((line) => (
                  <li
                    key={line}
                    className="border-b border-neutral-200 pb-4 text-[15px] leading-[1.55] tracking-tight text-neutral-700 last:border-b-0 last:pb-0"
                  >
                    {line}
                  </li>
                ))}
              </ul>
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
            When staff augmentation makes sense
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Best when you already run delivery and need the right people inside that
            rhythm — not a full handoff.
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
                className={`min-h-[210px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 md:px-8 lg:px-10 ${
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

export function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="min-h-[260px] border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]">
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
              How we work
            </h2>
            <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-white/70">
              A clear path from conversation to engineers inside your process — with you
              in control of who joins.
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
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-white/14 transition-[min-height,background-color,color] duration-expand ease-motion lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[220px] text-[#1B4332]" : "min-h-[72px] text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : DEEP }}
              >

                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className={`text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl ${
                      isActive ? "" : "text-white/50"
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
