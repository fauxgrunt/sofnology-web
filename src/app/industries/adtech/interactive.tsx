"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import { MAGENTA, DEEP, twinPillars, stackItems } from "@/content/industries/adtech";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function TwinPillarsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Reach your audience more effectively
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Whether you’re refining strategy or already scaling spend — we build the
            tools that help you find and keep valuable customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {twinPillars.map((pillar, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={pillar.id}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`relative min-h-[340px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-10 lg:min-h-[420px] lg:px-14 ${
                  index === 1 ? "border-t lg:border-t-0 lg:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/50"}`}
              >

                <motion.div
                  className="absolute inset-x-0 top-0 h-1 origin-left"
                  style={{ backgroundColor: MAGENTA }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={panelTransition}
                />

                <span
                  className="text-5xl font-light tracking-[-0.08em] md:text-6xl"
                  style={{ color: isActive ? MAGENTA : "#a3a3a3" }}
                >
                  {pillar.label}
                </span>

                <span className="mt-8 text-2xl font-semibold tracking-[-0.045em] text-neutral-950 md:text-3xl">
                  {pillar.title}
                </span>
                <p className="mt-5 max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {pillar.description}
                </p>

                <ul
                  className={`mt-8 space-y-3 overflow-hidden transition-all duration-500 ${
                    isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[14px] leading-[1.55] tracking-tight text-neutral-700"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0"
                        style={{ backgroundColor: MAGENTA }}
                      />
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

export function StackSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            The stack that runs acquisition
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/68">
            Domain products — inventory, bidding, data, email, CRM — not a generic
            “digital marketing” checklist.
          </p>
        </div>

        <div>
          {stackItems.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`grid cursor-pointer grid-cols-1 border-white/14 transition-[min-height,background-color] duration-expand ease-motion md:grid-cols-[0.32fr_0.68fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[160px] bg-white/8" : "min-h-[96px] hover:bg-white/4"}`}
              >

                <div className="flex items-start gap-5 px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className="text-3xl font-light tracking-[-0.06em]"
                    style={{ color: isActive ? MAGENTA : "rgba(255,255,255,0.35)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-lg font-semibold tracking-[-0.04em] md:text-xl">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center px-6 pb-7 md:px-10 md:py-7 lg:px-14">
                  <p
                    className={`max-w-2xl text-[15px] leading-[1.7] tracking-tight text-white/68 transition-opacity duration-chrome ease-motion ${
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
