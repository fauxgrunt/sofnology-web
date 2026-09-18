import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import CtaSheen from "@/components/interior/CtaSheen";

const WEDGE = {
  default: "absolute right-[8%] bottom-0 hidden h-[72%] w-[38%] bg-page lg:block",
  compact: "absolute right-[6%] bottom-0 hidden h-[68%] w-[34%] bg-page lg:block",
} as const;

type SplitStackedHeroProps = {
  title: string;
  lede: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaBackground: string;
  ctaText?: string;
  ctaArrowColor?: string;
  image: string;
  imageAlt: string;
  imageClass: string;
  /** `cta-first` = CTA left in the DOM (fintech). `image-first` = image on mobile, CTA left on desktop (foodtech). `inverted` = image 66% left, dark shell (AI). */
  layout?: "cta-first" | "image-first" | "inverted";
  wedge?: false | keyof typeof WEDGE;
  sheen?: "soft" | "mid" | "strong" | "wash";
  /** Dark title row for the AI page. */
  tone?: "light" | "dark";
  shellColor?: string;
  titleClass?: string;
  ledeClass?: string;
  imageSizes?: string;
  imageMinClass?: string;
  ctaMaxWidth?: string;
  eyebrow?: string;
  eyebrowClass?: string;
};

/**
 * The 3-row interior hero used on most services, industries, and engagement
 * pages: spacer + title/lede, then a CTA cell beside the hero image.
 */
export default function SplitStackedHero({
  title,
  lede,
  ctaLabel,
  ctaHref = "#contact",
  ctaBackground,
  ctaText,
  ctaArrowColor,
  image,
  imageAlt,
  imageClass,
  layout = "cta-first",
  wedge = "default",
  sheen = "strong",
  tone = "light",
  shellColor = "#12141A",
  titleClass,
  ledeClass,
  imageSizes = "(max-width: 1024px) 100vw, 66vw",
  imageMinClass,
  ctaMaxWidth,
  eyebrow,
  eyebrowClass = "text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500",
}: SplitStackedHeroProps) {
  const dark = tone === "dark";
  const inverted = layout === "inverted";
  const imageFirst = layout === "image-first";

  const imageBox = (
    <div
      className={
        imageMinClass ??
        (inverted
          ? "relative aspect-[16/11] overflow-hidden sm:aspect-auto sm:min-h-[280px] md:min-h-[360px] lg:min-h-[440px]"
          : imageFirst
            ? "relative order-1 min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:order-2 lg:min-h-[360px]"
            : "relative min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:min-h-[360px]")
      }
      style={inverted ? { backgroundColor: "#0A0B0E" } : undefined}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes={imageSizes}
        priority
        className={imageClass}
      />
      {wedge && !inverted && (
        <div
          aria-hidden="true"
          className={WEDGE[wedge]}
          style={{ clipPath: "polygon(34% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
      )}
    </div>
  );

  const cta = (
    <a
      href={ctaHref}
      className={
        inverted
          ? "group relative flex min-h-[64px] items-center justify-between overflow-hidden border-t border-white/10 px-5 py-4 text-base font-semibold tracking-[-0.04em] sm:min-h-[72px] sm:px-6 sm:py-5 sm:text-lg md:min-h-[88px] md:px-10 md:text-xl lg:min-h-[440px] lg:items-start lg:border-t-0 lg:border-l lg:border-white/10 lg:px-8 lg:py-8 xl:px-12"
          : imageFirst
            ? "tap-press group relative order-2 flex min-h-[72px] items-center justify-between overflow-hidden border-t border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] md:min-h-[88px] md:px-10 md:text-xl lg:order-1 lg:min-h-[360px] lg:items-start lg:border-t-0 lg:px-8 lg:py-8 xl:px-12"
            : "tap-press group relative flex min-h-[72px] items-center justify-between overflow-hidden border-b border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] md:min-h-[88px] md:px-10 md:text-xl lg:min-h-[360px] lg:items-start lg:border-b-0 lg:px-8 lg:py-8 xl:px-12"
      }
      style={{ backgroundColor: ctaBackground, color: ctaText }}
    >
      <CtaSheen tone={sheen} />
      <span className={`relative z-10 ${ctaMaxWidth ?? ""}`}>{ctaLabel}</span>
      <span
        className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:mt-1"
        style={ctaArrowColor ? { color: ctaArrowColor } : undefined}
      >
        <ArrowUpRightIcon />
      </span>
    </a>
  );

  return (
    <section
      className={`border-b ${dark ? "border-neutral-200" : "border-neutral-200 bg-page"}`}
      style={dark ? { backgroundColor: shellColor } : undefined}
    >
      <div
        className={`mx-auto max-w-[1440px] border-x ${
          dark ? "border-white/10" : "border-neutral-200"
        }`}
      >
        <div
          className={`grid grid-cols-1 border-b lg:grid-cols-[0.36fr_0.64fr] ${
            dark ? "border-white/10" : "border-neutral-200"
          }`}
        >
          <div className="hidden min-h-[410px] lg:block" />

          <div
            className={`grid min-h-0 grid-cols-1 px-5 py-10 sm:px-6 sm:py-12 md:min-h-[410px] md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0 ${
              dark ? "px-5 py-9 sm:px-6 sm:py-12" : ""
            }`}
          >
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              {eyebrow ? (
                <div>
                  <p className={eyebrowClass}>{eyebrow}</p>
                  <h1
                    className={
                      titleClass ??
                      (dark
                        ? "mt-5 max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] text-white sm:text-5xl sm:leading-[1.04] md:text-6xl lg:text-[4.1rem] lg:tracking-[-0.06em]"
                        : "mt-5 max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] text-neutral-950 sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] md:text-6xl lg:text-[4.25rem]")
                    }
                  >
                    {title}
                  </h1>
                </div>
              ) : (
                <h1
                  className={
                    titleClass ??
                    (dark
                      ? "max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] text-white sm:text-5xl sm:leading-[1.04] md:text-6xl lg:text-[4.1rem] lg:tracking-[-0.06em]"
                      : "max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] text-neutral-950 sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] md:text-6xl lg:text-[4.25rem]")
                  }
                >
                  {title}
                </h1>
              )}
            </div>

            <div
              className={`flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12 ${
                dark ? "mt-6 sm:mt-10" : "mt-8 sm:mt-12"
              }`}
            >
              <p
                className={
                  ledeClass ??
                  (dark
                    ? "max-w-lg text-[14px] leading-[1.65] tracking-tight text-white/72 sm:text-[15px] sm:leading-[1.72]"
                    : "max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700")
                }
              >
                {lede}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 ${
            inverted ? "lg:grid-cols-[0.66fr_0.34fr]" : "lg:grid-cols-[0.34fr_0.66fr]"
          }`}
        >
          {inverted || imageFirst ? (
            <>
              {imageBox}
              {cta}
            </>
          ) : (
            <>
              {cta}
              {imageBox}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
