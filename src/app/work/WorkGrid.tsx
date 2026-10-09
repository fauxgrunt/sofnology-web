"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { areaFilters, workCategoryPath, workItems, type WorkArea } from "@/content/work";

type AreaFilter = "all" | "featured" | WorkArea;

export default function WorkGrid({
  initialArea = "all",
  title = "Our work",
  lede = "Selected projects delivered by Sofnology and members of the delivery team. Confidential work stays anonymous.",
}: {
  initialArea?: string;
  title?: string;
  lede?: string;
}) {
  const router = useRouter();
  const valid = areaFilters.some((filter) => filter.id === initialArea);
  const [area, setArea] = useState<AreaFilter>(valid ? (initialArea as AreaFilter) : "all");

  const items = useMemo(
    () =>
      workItems.filter((item) => {
        if (area === "all") return true;
        if (area === "featured") return Boolean(item.featured);
        return item.area === area;
      }),
    [area],
  );

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="flex flex-col lg:min-h-[calc(100svh-var(--nav-h)-env(safe-area-inset-top,0px))]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-1">
            <div className="flex items-end px-5 pt-8 pb-3 sm:px-6 sm:pt-10 md:px-10 lg:items-center lg:border-r lg:border-neutral-200 lg:px-16 lg:pt-0 lg:pb-0">
              <h1 className={`text-fluid-hero font-semibold tracking-[-0.055em] text-neutral-950 ${title === "Our work" || title === "All work" ? "max-w-[9ch]" : "max-w-[14ch] sm:max-w-md"}`}>
                {title}
              </h1>
            </div>
            <div className="flex items-end px-5 pt-1 pb-6 sm:px-6 sm:pb-8 md:px-10 lg:px-16 lg:pt-0 lg:pb-16">
              <p className="max-w-md text-[16px] leading-[1.55] text-neutral-700 lg:ml-auto lg:text-[15px] lg:leading-[1.75]">
                {lede}
              </p>
            </div>
          </div>

          <div className="flex min-h-12 border-t border-neutral-200 bg-[#ececee] sm:min-h-14">
            <label className="flex min-h-12 flex-1 items-center gap-3 px-5 sm:min-h-14 sm:px-6 md:px-10 lg:px-16">
              <span className="text-[13px] font-semibold tracking-[-0.02em] text-neutral-800">Work</span>
              <select
                value={area}
                onChange={(event) => {
                  const next = event.target.value as AreaFilter;
                  setArea(next);
                  router.push(workCategoryPath(next));
                }}
                className="min-h-11 flex-1 cursor-pointer bg-transparent text-[16px] tracking-tight text-neutral-700 outline-none sm:text-[15px]"
                aria-label="Filter work"
              >
                {areaFilters.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {items.length === 0 ? (
          <p className="border-t border-neutral-200 px-5 py-16 text-[16px] tracking-tight text-neutral-700 sm:px-6 md:px-10 lg:px-16">
            No delivered work in this filter yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 border-t border-neutral-200 lg:grid-cols-2">
            {items.map((item, index) => {
              const banner = Boolean(item.image && item.imageWidth && item.imageHeight);
              const photo = item.cardImage ?? item.image;
              return (
              <article
                key={item.slug}
                className={`border-neutral-200 ${index > 0 ? "border-t" : ""} ${
                  index % 2 === 1 ? "lg:border-l" : ""
                } ${index === 1 ? "lg:border-t-0" : ""}`}
              >
                <Link href={`/work/${item.slug}`} className="group relative block overflow-hidden">
                  {banner ? (
                    <>
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        width={item.imageWidth}
                        height={item.imageHeight}
                        sizes="(max-width: 1024px) 100vw, 720px"
                        className="h-auto w-full"
                        priority={index < 2}
                      />
                      <h2 className="sr-only">{item.cardTitle}</h2>
                    </>
                  ) : (
                  <div className="relative min-h-[240px] bg-navy sm:min-h-[380px] lg:min-h-[min(52vh,560px)]">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 720px"
                        className="object-cover object-center"
                        priority={index < 2}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 sm:p-8 lg:p-10">
                      <div>
                        <h2 className="min-w-0 text-[1.35rem] leading-[1.15] font-semibold tracking-[-0.045em] text-white sm:text-3xl lg:text-[2.35rem]">
                          {item.cardTitle}
                        </h2>
                        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/80">{item.summary}</p>
                      </div>
                      <p className="shrink-0 pb-0.5 text-[12px] font-semibold tracking-[0.14em] text-white/70 uppercase">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  )}
                </Link>
              </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
