"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { SelectableCard } from "@/components/a11y/SelectableCard";
import type { RichCard, RichEngagement, RichStage, RichTone } from "@/content/rich/types";

function cardBorders(index: number, columns: 2 | 3) {
  if (columns === 2) {
    return `${index % 2 === 1 ? "md:border-l" : ""} ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""}`;
  }
  return `${index % 2 === 1 ? "md:border-l" : ""} ${index % 3 !== 0 ? "lg:border-l" : ""} ${
    index > 0 ? "border-t md:border-t-0" : ""
  } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""}`;
}

export function ServiceGrid({
  title,
  lede,
  items,
  tone,
}: {
  title: string;
  lede: string;
  items: RichCard[];
  tone: RichTone;
}) {
  const [active, setActive] = useState(0);
  const columns = items.length % 2 === 0 && items.length % 3 !== 0 ? 2 : 3;

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro title={title} lede={lede} scale="large" minHeight={200} padding="roomy" />
        <div className={`grid grid-cols-1 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {items.map((item, index) => {
            const isActive = active === index;
            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-[200px] cursor-pointer border-neutral-200 px-5 py-7 transition-colors duration-expand ease-motion sm:min-h-[230px] sm:px-6 md:px-8 lg:px-10 ${cardBorders(index, columns)} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >
                <motion.div
                  className="mb-5 h-1 origin-left sm:mb-6"
                  style={{ backgroundColor: tone.deep }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={panelTransition}
                />
                <span className="text-lg leading-tight font-semibold tracking-[-0.04em] text-neutral-950 sm:text-xl">
                  {item.title}
                </span>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={panelTransition}
                  className="mt-4 text-[15px] leading-[1.65] tracking-tight text-neutral-700"
                >
                  {item.description}
                </motion.p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StageList({
  title,
  lede,
  items,
  tone,
}: {
  title: string;
  lede: string;
  items: RichStage[];
  tone: RichTone;
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: tone.deep }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:flex lg:min-h-[300px] lg:flex-col lg:justify-center lg:pl-[42%]">
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] sm:text-4xl sm:leading-[1.08] md:text-5xl">
              {title}
            </h2>
            <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-white/72 sm:mt-7">{lede}</p>
          </div>
        </div>
        <div>
          {items.map((stage, index) => {
            const isActive = active === index;
            return (
              <SelectableCard
                key={stage.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`grid cursor-pointer grid-cols-[3.25rem_1fr] border-white/14 transition-[min-height,background-color,color] duration-expand ease-motion sm:grid-cols-[0.28fr_0.72fr] lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[180px] sm:min-h-[240px]" : "min-h-[72px] sm:min-h-[80px]"}`}
                style={{ backgroundColor: isActive ? tone.soft : tone.deep, color: isActive ? tone.ink : "#ffffff" }}
              >
                <div className="flex items-start px-3 py-6 sm:px-6 sm:py-7 md:px-10 lg:px-12">
                  <span className="text-2xl leading-none font-light tracking-[-0.06em] sm:text-5xl md:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center py-6 pr-5 sm:px-6 sm:py-7 md:px-10 lg:px-14">
                  <span className="text-lg leading-tight font-semibold tracking-[-0.04em] sm:text-xl md:text-2xl">
                    {stage.title}
                  </span>
                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? "mt-4 max-h-48 opacity-100 sm:mt-6" : "mt-0 max-h-0 opacity-0"}`}>
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight opacity-85">{stage.description}</p>
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

export function EngagementGrid({
  title,
  lede,
  items,
  tone,
}: {
  title: string;
  lede: string;
  items: RichEngagement[];
  tone: RichTone;
}) {
  const [active, setActive] = useState(Math.min(1, items.length - 1));

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro title={title} lede={lede} scale="large" minHeight={220} padding="roomy" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, index) => {
            const isActive = active === index;
            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-0 cursor-pointer border-neutral-200 px-5 py-8 transition-colors duration-expand ease-motion sm:min-h-[220px] sm:px-6 md:min-h-[280px] md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <motion.div
                  className="mb-6 h-1 origin-left sm:mb-7"
                  style={{ backgroundColor: tone.deep }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.35 }}
                  transition={panelTransition}
                />
                <p className="text-[12px] font-semibold tracking-[0.14em] text-neutral-500 uppercase">{item.pain}</p>
                <span className="mt-4 block text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {item.title}
                </span>
                <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-neutral-700 sm:mt-7">{item.description}</p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
