"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  workSteps,
  engagementShapes,
  industries,
  cooperationModels,
} from "@/content/services/software-development";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-[280px] border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:flex-col lg:justify-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              How we work
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
              From the first conversation to launch, we test, review, and refine each
              phase so the final software is useful, understandable, and ready for real
              business use.
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
                className={`grid cursor-pointer grid-cols-[0.34fr_0.66fr] border-neutral-200 transition-[min-height,background-color,color] duration-expand ease-motion lg:grid-cols-[0.48fr_0.52fr] ${
                  index > 0 ? "border-t" : ""
                } ${
                  isActive
                    ? "min-h-[210px] bg-navy text-white"
                    : "min-h-[125px] bg-page text-neutral-950 hover:bg-white/55"
                }`}
              >

                <div
                  className={`flex items-start border-r px-6 py-6 transition-colors duration-500 md:px-10 lg:px-16 ${
                    isActive ? "border-white/18" : "border-neutral-200"
                  }`}
                >
                  <span
                    className={`text-6xl leading-none font-light tracking-[-0.08em] transition-colors duration-500 md:text-7xl ${
                      isActive ? "text-navy-soft" : "text-neutral-950"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-16">
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {step.title}
                  </span>
                  <p
                    className={`max-w-3xl overflow-hidden text-[15px] leading-[1.72] tracking-tight transition-all duration-500 ${
                      isActive
                        ? "mt-8 max-h-40 translate-y-0 opacity-85"
                        : "mt-0 max-h-0 translate-y-2 opacity-0"
                    }`}
                  >
                    {step.description}
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

export function EngagementShapesSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-0 border-b border-neutral-200 sm:min-h-[200px] md:min-h-[250px] px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:items-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Engagement shapes we deliver
            </h2>
          </div>
        </div>

        <div>
          {engagementShapes.map((project, index) => {
            const isActive = activeProject === index;

            return (
              <SelectableCard
                key={project.title}
                selected={isActive}
                onSelect={() => setActiveProject(index)}
                className={`group grid cursor-pointer grid-cols-1 border-neutral-200 transition-[min-height,background-color] duration-expand ease-motion lg:grid-cols-[0.48fr_0.52fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[260px] bg-white/55" : "min-h-[72px] bg-page hover:bg-white/45"}`}
              >

                <div className="flex items-start border-b border-neutral-200 px-6 py-7 md:px-10 lg:border-r lg:border-b-0 lg:px-8 xl:px-12">
                  <p className="text-[15px] leading-tight tracking-tight text-neutral-600">
                    {project.sector}
                  </p>
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-8 px-6 py-7 md:px-10 lg:px-8 xl:px-12">
                  <div>
                    <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 underline decoration-neutral-950/75 underline-offset-4 md:text-2xl">
                      {project.title}
                    </span>
                    <p
                      className={`max-w-3xl overflow-hidden text-[15px] leading-[1.72] tracking-tight text-neutral-700 transition-all duration-500 ${
                        isActive
                          ? "mt-8 max-h-40 translate-y-0 opacity-100"
                          : "mt-0 max-h-0 translate-y-2 opacity-0"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <span className="pt-1 text-neutral-950 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </div>
              </SelectableCard>
            );
          })}
        </div>

        <a
          href="#contact-form"
          className="group flex min-h-24 items-center justify-between bg-navy px-6 py-7 text-xl font-semibold tracking-[-0.04em] text-white transition-colors duration-chrome ease-motion hover:bg-navy-mid md:px-10 lg:px-8 xl:px-12"
        >
          <span>Discuss a project like these</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRightIcon />
          </span>
        </a>
      </div>
    </section>
  );
}

export function IndustriesWeServeSection() {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);

  return (
    <>
      <div className="min-h-[250px] border-b border-white/14 px-6 py-12 md:px-10 lg:flex lg:items-center lg:justify-center lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl lg:text-[3.35rem]">
            Industries we serve
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.75] tracking-tight text-white/72">
            We focus on industries where clearer software can improve daily
            operations, customer workflows, reporting, and digital delivery.
          </p>
        </div>
      </div>

      <div>
        {industries.map((industry, index) => {
          const isActive = activeIndustry === index;

          return (
            <SelectableCard
              key={industry.title}
              selected={isActive}
              onSelect={() => setActiveIndustry(index)}
              className={`group grid cursor-pointer grid-cols-[72px_1fr_58px] border-white/14 transition-[min-height,background-color,color] duration-expand ease-motion md:grid-cols-[0.12fr_0.42fr_0.38fr_0.08fr] ${
                index > 0 ? "border-t" : ""
              } ${
                isActive
                  ? "min-h-[230px] bg-navy-soft text-navy"
                  : "min-h-20 bg-navy text-white hover:bg-navy-mid"
              }`}
            >

              <div className="px-5 py-6 text-[18px] font-semibold tracking-[-0.03em] md:px-8">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex items-start px-4 py-6 md:px-8">
                <span className="text-xl leading-tight font-semibold tracking-[-0.04em] underline underline-offset-4 md:text-2xl">
                  {industry.title}
                </span>
              </div>

              <div
                className={`hidden px-4 py-6 transition-all delay-100 duration-500 md:block md:px-8 ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className="max-w-2xl text-xl leading-[1.32] font-semibold tracking-[-0.045em]">
                  {industry.description}
                </p>
              </div>

              <div className="flex justify-end px-5 py-5 md:px-8">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500 ${
                    isActive
                      ? "bg-navy text-navy-soft"
                      : "bg-white text-navy"
                  }`}
                >
                  <ArrowUpRightIcon />
                </span>
              </div>

              <div
                className={`col-span-3 px-5 pb-7 transition-opacity duration-500 md:hidden ${
                  isActive ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <p className="text-[15px] leading-[1.65] font-semibold tracking-[-0.03em]">
                  {industry.description}
                </p>
              </div>
            </SelectableCard>
          );
        })}
      </div>
    </>
  );
}

export function CooperationModelsSection() {
  const [activeModel, setActiveModel] = useState(0);
  const visibleModels = [
    cooperationModels[activeModel],
    cooperationModels[(activeModel + 1) % cooperationModels.length],
  ];
  const canGoBack = activeModel > 0;
  const canGoForward = activeModel < cooperationModels.length - 1;

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[300px] grid-cols-1 border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:grid-cols-[0.48fr_0.52fr] lg:px-0 lg:py-0">
          <div className="flex items-center lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Choose your cooperation model
            </h2>
          </div>

          <div className="mt-10 flex items-center lg:mt-0 lg:px-16">
            <p className="max-w-xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              We offer adaptable collaboration scenarios that match the decision you
              need to make now, whether you need clarity, a first release, a focused
              improvement cycle, or ongoing delivery support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[220px_1fr]">
          <div className="flex items-start gap-3 border-b border-neutral-200 px-6 py-8 md:px-10 lg:border-r lg:border-b-0">
            <button
              type="button"
              onClick={() => setActiveModel((current) => Math.max(0, current - 1))}
              disabled={!canGoBack}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl transition-colors duration-chrome ease-motion ${
                canGoBack
                  ? "bg-navy-soft text-navy hover:bg-[#bfeaff]"
                  : "bg-neutral-100 text-neutral-300"
              }`}
              aria-label="Previous cooperation model"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveModel((current) =>
                  Math.min(cooperationModels.length - 1, current + 1),
                )
              }
              disabled={!canGoForward}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl transition-colors duration-chrome ease-motion ${
                canGoForward
                  ? "bg-navy text-white hover:bg-navy-mid"
                  : "bg-neutral-100 text-neutral-300"
              }`}
              aria-label="Next cooperation model"
            >
              →
            </button>
          </div>

          <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2">
            {visibleModels.map((model, index) => (
              <a
                key={`${model.title}-${activeModel}-${index}`}
                href="#contact"
                className={`group flex min-h-[330px] flex-col border-neutral-200 px-6 py-8 transition-colors duration-chrome ease-motion hover:bg-white/55 md:px-10 lg:px-12 ${
                  index > 0 ? "md:border-l" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-8">
                  <h3 className="max-w-xl text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950 underline decoration-neutral-950/70 underline-offset-4">
                    {model.title}
                  </h3>
                  <span className="text-neutral-950 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </div>
                <p className="mt-8 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {model.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
