import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import CtaSheen from "@/components/interior/CtaSheen";

type StackedHeroProps = {
  image: string;
  imageAlt: string;
  imageClass: string;
  title: string;
  lede: ReactNode;
  eyebrow?: string;
  eyebrowColor?: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaBackground: string;
  ctaText?: string;
  sheen?: "soft" | "mid" | "strong" | "wash";
  /** Company uses 58/42; how-we-work uses 42/58. */
  split?: "58/42" | "42/58";
  titleMax?: string;
};

/**
 * Vention-style stacked hero: image band → headline/copy split → full-width CTA.
 * Used on /company and /company/how-we-work.
 */
export default function StackedHero({
  image,
  imageAlt,
  imageClass,
  title,
  lede,
  eyebrow = "Sofnology",
  eyebrowColor,
  ctaLabel,
  ctaHref = "#contact-form",
  ctaBackground,
  ctaText = "#ffffff",
  sheen = "mid",
  split = "58/42",
  titleMax = "max-w-xl",
}: StackedHeroProps) {
  const splitClass =
    split === "42/58" ? "lg:grid-cols-[0.42fr_0.58fr]" : "lg:grid-cols-[0.58fr_0.42fr]";

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="relative h-[280px] overflow-hidden border-b border-neutral-200 sm:h-[340px] md:h-[400px] lg:h-[460px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            priority
            className={imageClass}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-page to-transparent md:w-2/5" />
        </div>

        <div className={`grid grid-cols-1 border-b border-neutral-200 ${splitClass}`}>
          <div className="flex items-end border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16 lg:py-16">
            <h1
              className={`${titleMax} text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.055em] text-neutral-950 sm:text-4xl md:text-5xl lg:text-[3.35rem]`}
            >
              {title}
            </h1>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-14 lg:py-16">
            <div>
              {eyebrow && (
                <p
                  className="text-[12px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: eyebrowColor }}
                >
                  {eyebrow}
                </p>
              )}
              <div className="mt-5 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                {lede}
              </div>
            </div>
          </div>
        </div>

        <a
          href={ctaHref}
          className="tap-press group relative flex min-h-[88px] items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.04em] md:px-10 lg:px-16"
          style={{ backgroundColor: ctaBackground, color: ctaText }}
        >
          <CtaSheen tone={sheen} />
          <span className="relative z-10">{ctaLabel}</span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRightIcon />
          </span>
        </a>
      </div>
    </section>
  );
}
