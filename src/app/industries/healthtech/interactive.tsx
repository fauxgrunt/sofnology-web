"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { LIME, DEEP, helpServices, telehealthScenarios, beyondCare } from "@/content/industries/healthtech";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function HelpSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="How we can help"
          lede="At the intersection of care and technology — solutions that make clinician work more effective and patient outcomes more reachable."
          scale="large"
          minHeight={220}
          split="42/58"
          padding="roomy"
        />

        <div>
          {helpServices.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
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
                    {item.title}
                  </span>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-5 max-h-36 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                      {item.description}
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

export function TelehealthSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Transform care with telehealth
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Expand clinical access and patient engagement — from primary visits to
            specialty follow-ups — while reducing unnecessary facility load.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {telehealthScenarios.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-[210px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 md:px-8 lg:px-12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""} ${
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
                <span className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
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

export function BeyondSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            Challenge conventional care
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            Beyond cookie-cutter portals — DTx, IoMT, wearables, and analytics applied
            where they improve care and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {beyondCare.map((item, index) => {
            const isActive = active === index;
            const isLast = index === beyondCare.length - 1;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-[240px] cursor-pointer border-white/14 px-6 py-9 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                } ${isActive ? "bg-white/8" : "hover:bg-white/4"}`}
              >

                <div
                  className="mb-6 h-1 w-10"
                  style={{ backgroundColor: isActive ? LIME : "rgba(255,255,255,0.25)" }}
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
