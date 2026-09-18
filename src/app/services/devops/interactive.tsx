"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { DEEP, SOFT, devopsServices, pipelineStages, engagementModels } from "@/content/services/devops";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Our DevOps consulting services"
          lede="Strategy, setup, and delivery mechanics that keep environments consistent and releases under control."
          scale="large"
          minHeight={200}
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {devopsServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <SelectableCard
                key={service.title}
                selected={isActive}
                onSelect={() => setActiveService(index)}
                className={`min-h-[230px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
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
                  {service.title}
                </span>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={panelTransition}
                  className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700"
                >
                  {service.description}
                </motion.p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PipelineSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="min-h-[300px] border-b border-white/14 px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]">
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
              Continuous delivery across the DevOps pipeline
            </h2>
            <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-white/72">
              This is the center of the work — the full loop from planning and automation
              through deployment and monitoring, so improvements compound instead of
              staying isolated.
            </p>
          </div>
        </div>

        <div>
          {pipelineStages.map((stage, index) => {
            const isActive = activeStage === index;

            return (
              <SelectableCard
                key={stage.title}
                selected={isActive}
                onSelect={() => setActiveStage(index)}
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-white/14 transition-[min-height,background-color,color] duration-expand ease-motion lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[240px] text-[#101413]" : "min-h-[80px] text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : DEEP }}
              >

                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span className="text-[2.35rem] sm:text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {stage.title}
                  </span>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-6 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight opacity-85">
                      {stage.description}
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

export function EngagementSection() {
  const [activeModel, setActiveModel] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Built for the stage you’re in"
          lede="Slow releases, fragile deploys, drifting environments, or late security checks — the engagement model should match the problem, not a generic package label."
          scale="large"
          minHeight={220}
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {engagementModels.map((model, index) => {
            const isActive = activeModel === index;

            return (
              <SelectableCard
                key={model.title}
                selected={isActive}
                onSelect={() => setActiveModel(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[280px] border-neutral-200 px-6 py-10 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
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
                <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                  {model.pain}
                </p>
                <span className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {model.title}
                </span>
                <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {model.description}
                </p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
