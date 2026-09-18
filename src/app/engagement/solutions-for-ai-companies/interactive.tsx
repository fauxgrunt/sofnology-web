"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { panelTransition } from "@/lib/motion";
import { CYAN, DEEP, SOFT, MID_IMAGE, costPoints, maturityStages, specSteps, governance, measures } from "@/content/engagement/solutions-for-ai-companies";
import { SelectableCard, tabControlProps } from "@/components/a11y/SelectableCard";


export function CostSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-5 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-[2.75rem]">
              The cost of getting it wrong
            </h2>
          </div>
          <div className="flex items-end px-5 pb-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[14px] leading-[1.65] tracking-tight text-neutral-700 sm:text-[15px] sm:leading-[1.7]">
              Poorly implemented AI doesn’t just underperform — it destroys value. Teams
              succeeding with AI run tighter systems, not more agents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {costPoints.map((point, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={point.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-0 cursor-pointer border-neutral-200 px-5 py-7 transition-colors duration-500 sm:min-h-[220px] sm:px-6 sm:py-10 md:min-h-[260px] md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >

                <motion.div
                  className="mb-5 h-1 origin-left sm:mb-6"
                  style={{ backgroundColor: CYAN }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.4 }}
                  transition={panelTransition}
                />
                <span
                  className="text-2xl font-light tracking-[-0.08em] sm:text-3xl"
                  style={{ color: isActive ? DEEP : "#A3A3A3" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 text-lg leading-tight font-semibold tracking-[-0.04em] text-neutral-950 sm:mt-5 sm:text-xl md:text-2xl">
                  {point.title}
                </span>
                <p className="mt-3 text-[14px] leading-[1.6] tracking-tight text-neutral-700 sm:mt-4 sm:text-[15px] sm:leading-[1.65]">
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

export function MaturitySection() {
  const [active, setActive] = useState(3);
  const current = maturityStages[active];

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="grid grid-cols-1 border-b border-white/14 lg:grid-cols-[0.52fr_0.48fr]">
          <div
            className="relative aspect-[16/11] overflow-hidden sm:aspect-auto sm:min-h-[280px] md:min-h-[360px] lg:min-h-[420px]"
            style={{ backgroundColor: "#0A0B0E" }}
          >
            <Image
              src={MID_IMAGE}
              alt="3D AI system module with cyan core and glass layers"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="scale-[1.06] object-cover object-[18%_50%]"
            />
          </div>

          <div className="flex flex-col justify-center px-5 py-9 sm:px-6 sm:py-12 md:px-10 lg:px-14 xl:px-16">
            <p
              className="text-[12px] font-semibold tracking-[0.08em] uppercase sm:text-[13px]"
              style={{ color: CYAN }}
            >
              Maturity model
            </p>
            <h2 className="mt-3 max-w-xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] sm:mt-4 sm:text-4xl sm:leading-[1.08] md:text-[2.75rem]">
              Where is your team, really?
            </h2>
            <p className="mt-4 max-w-lg text-[14px] leading-[1.65] tracking-tight text-white/72 sm:mt-6 sm:text-[15px] sm:leading-[1.7]">
              Five stages from ad-hoc exploration to governed, AI-native delivery. Most
              teams sit between Stage 1 and 2 — Stage 4 is where compounding returns
              begin.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          {/* Detail first on mobile so users see content before the long stage list */}
          <div className="order-2 border-t border-white/14 lg:order-1 lg:border-t-0">
            <div role="tablist" aria-label="AI maturity stages" className="flex gap-2 overflow-x-auto px-5 py-4 lg:block lg:overflow-visible lg:px-0 lg:py-0">
              {maturityStages.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    {...tabControlProps(index, active, maturityStages.length, setActive, "ai-maturity-panel")}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => {
                      if (window.matchMedia("(hover: hover)").matches) setActive(index);
                    }}
                    className={`flex shrink-0 items-center gap-3 border-white/14 px-4 py-3 text-left transition-colors duration-chrome ease-motion lg:min-h-[72px] lg:w-full lg:gap-4 lg:border-t-0 lg:px-10 lg:py-0 xl:px-12 ${
                      index > 0 ? "lg:border-t" : ""
                    } ${
                      isActive
                        ? "rounded-sm text-[#12141A] lg:rounded-none"
                        : "rounded-sm text-white/55 hover:text-white lg:rounded-none"
                    }`}
                    style={{ backgroundColor: isActive ? SOFT : "transparent" }}
                  >
                    <span
                      className="text-[11px] font-medium whitespace-nowrap sm:text-[12px]"
                      style={{ color: isActive ? DEEP : CYAN }}
                    >
                      {item.stage}
                    </span>
                    <span className="text-[14px] font-semibold tracking-[-0.03em] whitespace-nowrap lg:text-lg">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="ai-maturity-panel"
            role="tabpanel"
            aria-labelledby={`ai-maturity-panel-tab-${active}`}
            className="order-1 border-b border-white/14 px-5 py-8 sm:px-6 sm:py-10 md:px-10 lg:order-2 lg:border-b-0 lg:border-l lg:px-14 lg:py-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-5 h-1 w-12 sm:mb-6" style={{ backgroundColor: CYAN }} />
                <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-white/45 sm:text-[13px]">
                  AI adoption pattern
                </p>
                <h3 className="mt-2 text-2xl leading-tight font-semibold tracking-[-0.045em] sm:mt-3 sm:text-3xl">
                  {current.stage}: {current.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[14px] leading-[1.65] tracking-tight text-white/75 sm:mt-6 sm:text-[15px] sm:leading-[1.72]">
                  {current.pattern}
                </p>
                <p className="mt-6 text-[12px] font-semibold tracking-[0.06em] uppercase text-white/45 sm:mt-8 sm:text-[13px]">
                  Advancement criteria
                </p>
                <ul className="mt-3 max-w-lg border-t border-white/14">
                  {current.advance.map((item) => (
                    <li
                      key={item}
                      className="border-b border-white/14 py-3 text-[14px] leading-[1.45] tracking-tight text-white/85 sm:py-3.5 sm:text-[15px]"
                    >
                      {item}
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

export function SpecSection() {
  const [active, setActive] = useState(4);
  const current = specSteps[active];

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-5 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-[2.75rem]">
              Spec-driven delivery
            </h2>
          </div>
          <div className="flex items-end px-5 pb-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[14px] leading-[1.65] tracking-tight text-neutral-700 sm:text-[15px] sm:leading-[1.7]">
              Stage 4 is where pilots become scalable operations — a connected chain of
              artifacts AI drafts and senior engineers validate. Start with coding, then
              walk the full loop.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="order-2 border-t border-neutral-200 lg:order-1 lg:border-t-0">
            <div
              role="tablist"
              aria-label="Spec-driven delivery steps"
              className="flex gap-2 overflow-x-auto px-5 py-4 lg:block lg:overflow-visible lg:px-0 lg:py-0"
            >
              {specSteps.map((step, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={step.title}
                    type="button"
                    {...tabControlProps(index, active, specSteps.length, setActive, "ai-spec-panel")}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => {
                      if (window.matchMedia("(hover: hover)").matches) setActive(index);
                    }}
                    className={`flex shrink-0 items-center gap-3 border-neutral-200 px-4 py-3 text-left transition-colors duration-chrome ease-motion lg:min-h-[64px] lg:w-full lg:gap-4 lg:px-10 lg:py-0 xl:px-12 ${
                      index > 0 ? "lg:border-t" : ""
                    } ${
                      isActive
                        ? "rounded-sm text-white lg:rounded-none"
                        : "rounded-sm text-neutral-500 hover:bg-white/55 hover:text-neutral-950 lg:rounded-none"
                    }`}
                    style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                  >
                    <span
                      className="text-[11px] font-medium sm:text-[12px]"
                      style={{ color: isActive ? CYAN : undefined }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] font-semibold tracking-[-0.03em] whitespace-nowrap lg:text-[15px] xl:text-lg">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="ai-spec-panel"
            role="tabpanel"
            aria-labelledby={`ai-spec-panel-tab-${active}`}
            className="order-1 border-b border-neutral-200 bg-white px-5 py-8 sm:px-6 sm:py-10 md:px-10 lg:order-2 lg:border-b-0 lg:border-l lg:px-14 lg:py-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <span
                  className="text-4xl font-light tracking-[-0.08em] sm:text-5xl"
                  style={{ color: DEEP }}
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950 sm:mt-4 sm:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[14px] leading-[1.65] tracking-tight text-neutral-700 sm:mt-6 sm:text-[15px] sm:leading-[1.72]">
                  {current.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
                  {specSteps.map((step, index) => (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActive(index)}
                      className="h-2 transition-all duration-300"
                      style={{
                        backgroundColor: index === active ? CYAN : "#D4D4D4",
                        width: index === active ? 40 : 24,
                      }}
                      aria-label={`Go to ${step.title}`}
                    />
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

export function GovernanceSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-5 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-[2.75rem]">
              Responsible AI, built in
            </h2>
          </div>
          <div className="flex items-end px-5 pb-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[14px] leading-[1.65] tracking-tight text-neutral-700 sm:text-[15px] sm:leading-[1.7]">
              Governance from the start — not bolted on after something goes wrong.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {governance.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-0 cursor-pointer border-neutral-200 px-5 py-7 transition-colors duration-500 sm:min-h-[200px] sm:px-6 sm:py-10 md:min-h-[220px] md:px-10 lg:px-12 ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index % 2 === 1 ? "md:border-l" : ""} ${
                  index >= 2 ? "md:border-t" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >

                <motion.div
                  className="mb-5 h-1 origin-left sm:mb-6"
                  style={{ backgroundColor: CYAN }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.35 }}
                  transition={panelTransition}
                />
                <span className="text-xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950 sm:text-2xl">
                  {item.title}
                </span>
                <p className="mt-3 max-w-md text-[14px] leading-[1.6] tracking-tight text-neutral-700 sm:mt-4 sm:text-[15px] sm:leading-[1.65]">
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

export function MeasureSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-5 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-[2.75rem]">
              What gets measured gets managed
            </h2>
          </div>
          <div className="flex items-end px-5 pb-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[14px] leading-[1.65] tracking-tight text-neutral-700 sm:text-[15px] sm:leading-[1.7]">
              Licenses and vibes aren’t enough. Leadership needs a defensible view of
              where AI creates real delivery value.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {measures.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-0 cursor-pointer border-neutral-200 px-5 py-6 transition-colors duration-500 sm:min-h-[180px] sm:px-6 sm:py-8 md:px-7 ${
                  index > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
                } ${index >= 2 ? "sm:border-t lg:border-t-0" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >

                <motion.div
                  className="mb-4 h-1 origin-left sm:mb-5"
                  style={{ backgroundColor: CYAN }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.35 }}
                  transition={panelTransition}
                />
                <span className="text-base leading-tight font-semibold tracking-[-0.04em] text-neutral-950 sm:text-lg">
                  {item.title}
                </span>
                <p className="mt-2.5 text-[13px] leading-[1.55] tracking-tight text-neutral-700 sm:mt-3 sm:text-[14px]">
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
