"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import { ORANGE, scenarios, solutions } from "@/content/industries/proptech";


export function ScenariosSection() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Engagement scenarios we support
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Scale capacity, build a custom product, or modernize what already runs —
            pick the path that matches ownership and urgency.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 md:grid-cols-3">
          {scenarios.map((item, index) => {
            const isActive = active === index;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`min-h-[100px] border-neutral-200 px-6 py-6 text-left text-lg font-semibold tracking-[-0.04em] transition-colors duration-chrome ease-motion md:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white text-neutral-950" : "text-neutral-500 hover:bg-white/50"}`}
              >
                <span
                  className="mb-3 block h-1 w-10"
                  style={{ backgroundColor: isActive ? ORANGE : "#d4d4d4" }}
                />
                {item.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={panelTransition}
            className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]"
          >
            <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16">
              <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                Your challenge
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                {scenario.challenge}
              </p>
            </div>
            <div className="px-6 py-12 md:px-10 lg:px-16">
              <p className="text-[12px] font-semibold tracking-[0.14em] uppercase" style={{ color: ORANGE }}>
                Sofnology’s role
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                {scenario.role}
              </p>
              <ul className="mt-8 space-y-3 border-t border-neutral-200 pt-8">
                {scenario.fit.map((line) => (
                  <li
                    key={line}
                    className="text-[15px] leading-[1.55] tracking-tight text-neutral-800"
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

export function SolutionsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Custom real estate solutions we develop
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From smart buildings and AI leasing to PMS, analytics, and marketplaces —
            shaped for how property businesses actually operate.
          </p>
        </div>

        <div>
          {solutions.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={item.title}
                className={index > 0 ? "border-t border-neutral-200" : ""}
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className={`flex w-full items-start justify-between gap-6 px-6 py-7 text-left transition-colors duration-chrome ease-motion md:px-10 lg:px-16 ${
                    isOpen ? "bg-white" : "hover:bg-white/45"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-5 md:gap-8">
                    <span
                      className="text-[13px] font-semibold tracking-[0.12em] tabular-nums"
                      style={{ color: isOpen ? ORANGE : "#a3a3a3" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-3xl leading-none font-light text-neutral-400" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`${item.title}-body`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={panelTransition}
                      className="overflow-hidden bg-white"
                    >
                      <div className="grid grid-cols-1 gap-8 px-6 pb-10 md:grid-cols-[0.55fr_0.45fr] md:px-10 lg:px-16 lg:pl-[calc(2rem+3.5rem)]">
                        <p className="max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                          {item.description}
                        </p>
                        <ul className="space-y-3">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="border-b border-neutral-200 pb-3 text-[14px] tracking-tight text-neutral-600 last:border-b-0"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
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
