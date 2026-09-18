"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import { panelTransition } from "@/lib/motion";
import { INK, stacks, scenarios } from "@/content/services/technologies";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function StackCatalogSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Proven technologies for software development
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Looking for a specific stack or an end-to-end path? We cover the major lanes —
            frontend through DevOps — and connect them to delivery, not logo walls.
          </p>
        </div>

        <div>
          {stacks.map((stack, index) => {
            const isActive = active === index;
            return (
              <article
                key={stack.title}
                className={`border-neutral-200 ${index > 0 ? "border-t" : ""} ${
                  isActive ? "bg-white" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                  className="flex min-h-[100px] w-full items-center justify-between gap-6 px-6 py-7 text-left md:px-10 lg:px-16"
                  aria-expanded={isActive}
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span
                      className="text-4xl font-light tracking-[-0.08em] md:text-5xl"
                      style={{ color: isActive ? INK : "#a3a3a3" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                      {stack.title}
                    </h3>
                  </div>
                  <span
                    className="text-3xl font-light"
                    style={{ color: INK }}
                    aria-hidden="true"
                  >
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={`${stack.title}-body`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={panelTransition}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-8 px-6 pb-10 md:grid-cols-[1fr_auto] md:px-10 lg:px-16 lg:pb-12">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {stack.groups.map((group) => (
                            <div key={group.label}>
                              <p
                                className="text-[12px] font-semibold uppercase tracking-[0.14em]"
                                style={{ color: INK }}
                              >
                                {group.label}
                              </p>
                              <p className="mt-3 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                                {group.items}
                              </p>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={stack.href}
                          className="inline-flex h-12 items-center gap-2 self-start text-[14px] font-semibold tracking-tight transition-transform hover:translate-x-1"
                          style={{ color: INK }}
                        >
                          Related service
                          <ArrowUpRightIcon />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ScenariosSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Choose how we get involved
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From stack advice to a full delivery partnership — you stay focused on
            outcomes while we handle the engineering path.
          </p>
        </div>

        <div>
          {scenarios.map((item, index) => {
            const isActive = active === index;
            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                label={item.title}
                className={`grid cursor-pointer grid-cols-1 border-neutral-200 transition-[min-height,background-color] duration-expand ease-motion md:grid-cols-[0.28fr_0.72fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[170px] bg-white" : "min-h-[100px] hover:bg-white/45"}`}
              >

                <div className="flex items-start gap-5 px-6 py-8 md:px-10 lg:px-12">
                  <span
                    className="text-4xl font-light tracking-[-0.08em]"
                    style={{ color: isActive ? INK : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-lg font-semibold tracking-[-0.04em] text-neutral-950 md:text-xl">
                    {item.title}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 pb-8 md:px-10 md:py-8 lg:px-14">
                  <p className="max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight transition-transform hover:translate-x-1"
                    style={{ color: INK }}
                  >
                    {item.cta}
                    <ArrowUpRightIcon />
                  </Link>
                </div>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
