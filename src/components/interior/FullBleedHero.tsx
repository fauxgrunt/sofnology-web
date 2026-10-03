import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import CtaSheen from "@/components/interior/CtaSheen";

type Overlay = "card" | "copy" | "eyebrow";

type FullBleedHeroProps = {
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  imageClass: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaBackground: string;
  ctaText: string;
  sheen?: "soft" | "mid" | "strong" | "wash";
  /** `card` = frosted panel (healthtech). `copy` = left-aligned type on a gradient (adtech/edtech). `eyebrow` = lime Sofnology label (technologies). */
  overlay?: Overlay;
  eyebrow?: string;
  eyebrowColor?: string;
  gradientClass?: string;
  minHeightClass?: string;
  titleClass?: string;
};

/**
 * Full-bleed image hero with a CTA bar underneath. Used on healthtech, edtech,
 * adtech, and technologies.
 */
export default function FullBleedHero({
  title,
  lede,
  image,
  imageAlt,
  imageClass,
  ctaLabel,
  ctaHref = "#contact-form",
  ctaBackground,
  ctaText,
  sheen = "strong",
  overlay = "copy",
  eyebrow,
  eyebrowColor,
  gradientClass = "absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent",
  minHeightClass = "min-h-[320px] sm:min-h-[400px] md:min-h-[520px] lg:min-h-[640px]",
  titleClass,
}: FullBleedHeroProps) {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div
          className={`relative overflow-hidden border-b border-neutral-200 ${minHeightClass}`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            priority
            className={imageClass}
          />
          <div className={gradientClass} />

          <div
            className={`relative flex h-full ${minHeightClass} px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16 ${
              overlay === "card"
                ? "items-end justify-end md:items-center"
                : overlay === "eyebrow"
                  ? "items-end lg:items-center"
                  : "items-end lg:items-center"
            }`}
          >
            {overlay === "card" ? (
              <div className="w-full max-w-xl border border-white/10 bg-[#101413]/72 px-5 py-7 text-white backdrop-blur-md sm:px-8 sm:py-10 md:px-10 md:py-12">
                <h1 className="text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.055em] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                  {title}
                </h1>
                <p className="mt-4 text-[14px] leading-[1.65] tracking-tight text-white/78 sm:mt-6 sm:text-[15px] sm:leading-[1.72]">
                  {lede}
                </p>
              </div>
            ) : (
              <div className="max-w-xl text-white">
                {eyebrow && (
                  <p
                    className="text-[12px] font-semibold uppercase tracking-[0.18em] sm:text-[13px]"
                    style={{ color: eyebrowColor }}
                  >
                    {eyebrow}
                  </p>
                )}
                <h1
                  className={
                    titleClass ??
                    `text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.055em] sm:text-4xl md:text-5xl ${
                      eyebrow ? "mt-3 sm:mt-5 lg:text-[3.6rem]" : "lg:text-[3.5rem]"
                    }`
                  }
                >
                  {title}
                </h1>
                <p className="mt-4 max-w-md text-[14px] leading-[1.65] tracking-tight text-white/78 sm:mt-6 sm:text-[15px] sm:leading-[1.72]">
                  {lede}
                </p>
              </div>
            )}
          </div>
        </div>

        <a
          href={ctaHref}
          className="tap-press relative flex min-h-[72px] items-center justify-between px-5 py-5 text-lg font-semibold tracking-[-0.04em] transition-opacity duration-chrome ease-motion sm:min-h-[88px] sm:px-6 sm:py-6 sm:text-xl md:px-10 lg:px-16 [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90"
          style={{ backgroundColor: ctaBackground, color: ctaText }}
        >
          <CtaSheen tone={sheen} />
          <span className="relative z-10">{ctaLabel}</span>
          <span className="relative z-10">
            <ArrowUpRightIcon />
          </span>
        </a>
      </div>
    </section>
  );
}
