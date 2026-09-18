"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { ACCENT, models } from "@/content/company/how-we-work";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function ModelsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Start from scratch, or grow your team? The choice is yours
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Three partnership models — each meant to fit your culture and requirements
            without forcing a one-size vendor playbook.
          </p>
        </div>

        <div>
          {models.map((item, index) => {
            const isActive = active === index;
            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                label={item.title}
                className={`grid cursor-pointer grid-cols-1 border-neutral-200 transition-[min-height,background-color] duration-expand ease-motion md:grid-cols-[0.28fr_0.72fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[180px] bg-white" : "min-h-[110px] hover:bg-white/45"}`}
              >

                <div className="flex items-start gap-5 px-6 py-8 md:px-10 lg:px-12">
                  <span
                    className="text-4xl font-light tracking-[-0.08em]"
                    style={{ color: isActive ? ACCENT : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 pb-8 md:px-10 md:py-8 lg:px-14">
                  <span className="text-xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {item.title}
                  </span>
                  <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight transition-transform hover:translate-x-1"
                    style={{ color: ACCENT }}
                  >
                    View model
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
