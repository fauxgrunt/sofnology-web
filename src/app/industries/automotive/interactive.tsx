"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { CORAL, DEEP, marketDrivers, coreServices, audiences, solutionBuckets } from "@/content/industries/automotive";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function MarketSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Why automotive software is accelerating"
          lede="Connected vehicles, ADAS, and EVs pull onboard systems, cloud services, and mobile UX into one product problem — and demand software that can keep up."
          scale="large"
          minHeight={220}
          split="42/58"
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {marketDrivers.map((item, index) => {
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

export function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Our automotive software services
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Discovery through custom build, integration, and modernization — shaped for
            how automotive products actually ship and operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {coreServices.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[280px] border-neutral-200 px-6 py-10 transition-colors duration-500 md:px-8 lg:px-12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >

                <motion.div
                  className="mb-7 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.35 }}
                  transition={panelTransition}
                />
                <span className="text-2xl font-semibold tracking-[-0.045em] text-neutral-950">
                  {item.title}
                </span>
                <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {item.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-[14px] leading-tight tracking-tight text-neutral-600"
                    >
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

export function AudiencesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            Built for every side of automotive
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            Custom offers for startups, enterprises, OEMs, aftermarket, and fleets — not
            one generic “auto app” template.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item, index) => {
            const isActive = active === index;
            const isLast = index === audiences.length - 1;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-white/14 px-6 py-9 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                } ${isActive ? "bg-white/8" : "hover:bg-white/4"}`}
              >

                <div
                  className="mb-6 h-1 w-10"
                  style={{ backgroundColor: isActive ? CORAL : "rgba(255,255,255,0.25)" }}
                />
                <span className="text-xl font-semibold tracking-[-0.04em]">{item.title}</span>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/70">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-[13px] tracking-tight text-white/55">
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

export function SolutionsSection() {
  const [bucketIndex, setBucketIndex] = useState(0);
  const bucket = solutionBuckets[bucketIndex];

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Key automotive solution areas
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From ADAS and digital cockpits to dealer, fleet, and aftermarket systems —
            compressed into the two maps that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 md:grid-cols-2">
          {solutionBuckets.map((item, index) => {
            const isActive = bucketIndex === index;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setBucketIndex(index)}
                className={`min-h-[88px] border-neutral-200 px-6 py-6 text-left text-xl font-semibold tracking-[-0.04em] transition-colors duration-chrome ease-motion md:px-10 lg:px-16 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white text-neutral-950" : "text-neutral-500 hover:bg-white/50"}`}
              >
                <span
                  className="mb-3 block h-1 w-10"
                  style={{ backgroundColor: isActive ? CORAL : "#d4d4d4" }}
                />
                {item.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={bucket.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={panelTransition}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {bucket.items.map((item, index) => (
              <article
                key={item.title}
                className={`min-h-[200px] border-neutral-200 px-6 py-9 md:px-8 lg:px-12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""}`}
              >
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {item.description}
                </p>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
