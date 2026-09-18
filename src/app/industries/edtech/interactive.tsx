"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import { MAGENTA, products, challenges, capabilities } from "@/content/industries/edtech";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function ProductsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Revolutionize education with eLearning that fits
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Adaptive, customizable platforms — six product types that cover learning,
            content, classrooms, and institutional ops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-[240px] cursor-pointer border-neutral-200 px-6 py-9 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >

                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: MAGENTA }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.45 }}
                  transition={panelTransition}
                />
                <span
                  className="text-3xl font-light tracking-[-0.06em]"
                  style={{ color: isActive ? MAGENTA : "#a3a3a3" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-5 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
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

export function ChallengesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Address the challenge you actually have
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From greenfield platforms to legacy modernization — scoped to growth stage,
            goals, and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {challenges.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-[240px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/50"}`}
              >

                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? MAGENTA : "#a3a3a3" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
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

export function CapabilitiesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            eLearning capabilities that stay specific
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            MVP through immersive and AI-assisted learning — the lanes that matter for
            education products, not a generic agency menu.
          </p>
        </div>

        <div>
          {capabilities.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`grid cursor-pointer grid-cols-1 border-neutral-200 transition-[min-height,background-color] duration-expand ease-motion md:grid-cols-[0.34fr_0.66fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[140px] bg-white" : "min-h-[92px] hover:bg-white/45"}`}
              >

                <div className="flex items-start gap-5 px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className="text-3xl font-light tracking-[-0.06em]"
                    style={{ color: isActive ? MAGENTA : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-lg font-semibold tracking-[-0.04em] text-neutral-950 md:text-xl">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center px-6 pb-7 md:px-10 md:py-7 lg:px-14">
                  <p
                    className={`max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700 transition-opacity duration-chrome ease-motion ${
                      isActive ? "opacity-100" : "opacity-60 md:opacity-75"
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
