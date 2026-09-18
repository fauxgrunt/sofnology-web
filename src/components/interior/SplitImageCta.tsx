import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import CtaSheen from "@/components/interior/CtaSheen";

type SplitImageCtaProps = {
  title: string;
  lede: string;
  ctaLabel: string;
  ctaHref?: string;
  panelBackground: string;
  buttonBackground: string;
  buttonText: string;
  image: string;
  imageAlt: string;
  imageClass?: string;
  imageSizes?: string;
  /** `image-left` is the default band. `panel-left` is the QA inversion. */
  layout?: "image-left" | "panel-left";
  sheen?: "soft" | "mid" | "strong" | "wash";
  panelClass?: string;
  buttonClass?: string;
  ruleColor?: string;
  titleClass?: string;
};

/**
 * Image + dark (or accent) panel with an in-panel CTA button.
 * Used on most industry and engagement closers.
 */
export default function SplitImageCta({
  title,
  lede,
  ctaLabel,
  ctaHref = "#contact-form",
  panelBackground,
  buttonBackground,
  buttonText,
  image,
  imageAlt,
  imageClass = "object-cover object-center",
  imageSizes = "(max-width: 1024px) 100vw, 54vw",
  layout = "image-left",
  sheen = "strong",
  panelClass = "flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20",
  buttonClass = "group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] md:px-8",
  ruleColor,
  titleClass = "max-w-2xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.05em] sm:text-4xl sm:leading-[1.08] md:text-5xl",
}: SplitImageCtaProps) {
  const imageBox = (
    <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
      <Image src={image} alt={imageAlt} fill sizes={imageSizes} className={imageClass} />
    </div>
  );

  const panel = (
    <div className={panelClass} style={{ backgroundColor: panelBackground }}>
      <div className="w-full max-w-3xl">
        <h2 className={titleClass}>
          {title}
        </h2>
        <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
          {lede}
        </p>
        <a
          href={ctaHref}
          className={buttonClass}
          style={{ backgroundColor: buttonBackground, color: buttonText }}
        >
          <CtaSheen tone={sheen} width="button" />
          <span className="relative z-10">{ctaLabel}</span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRightIcon />
          </span>
        </a>
      </div>
    </div>
  );

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        {ruleColor && (
          <div
            className="h-1 w-full"
            style={{ backgroundColor: ruleColor }}
            aria-hidden="true"
          />
        )}
        <div
          className={`grid grid-cols-1 ${
            layout === "panel-left"
              ? "lg:grid-cols-[0.38fr_0.62fr]"
              : "lg:grid-cols-[0.46fr_0.54fr]"
          }`}
        >
          {layout === "panel-left" ? (
            <>
              {panel}
              {imageBox}
            </>
          ) : (
            <>
              {imageBox}
              {panel}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
