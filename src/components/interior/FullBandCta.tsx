import { ArrowUpRightIcon } from "@/components/icons";
import CtaSheen from "@/components/interior/CtaSheen";

type FullBandCtaProps = {
  title: string;
  lede: string;
  ctaLabel: string;
  ctaHref?: string;
  panelBackground: string;
  buttonBackground: string;
  buttonText: string;
  ruleColor?: string;
  sheen?: "soft" | "mid" | "strong" | "wash";
};

/** Full-width dark band with an in-panel button. Ecommerce and project-outsourcing. */
export default function FullBandCta({
  title,
  lede,
  ctaLabel,
  ctaHref = "#contact-form",
  panelBackground,
  buttonBackground,
  buttonText,
  ruleColor,
  sheen = "mid",
}: FullBandCtaProps) {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div
          className="flex min-h-[340px] items-center px-5 py-9 text-white sm:px-6 sm:py-12 md:px-10 md:py-14 lg:min-h-[400px] lg:px-16 xl:px-20"
          style={{ backgroundColor: panelBackground }}
        >
          <div className="w-full max-w-4xl">
            {ruleColor && (
              <div className="mb-8 h-1 w-14" style={{ backgroundColor: ruleColor }} />
            )}
            <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.05em] sm:text-4xl sm:leading-[1.08] md:text-5xl">
              {title}
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
              {lede}
            </p>
            <a
              href={ctaHref}
              className="tap-press relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between px-6 py-6 text-xl font-semibold tracking-[-0.045em] transition-opacity duration-chrome ease-motion md:px-8 [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90"
              style={{ backgroundColor: buttonBackground, color: buttonText }}
            >
              <CtaSheen tone={sheen} width="button" />
              <span className="relative z-10">{ctaLabel}</span>
              <span className="relative z-10">
                <ArrowUpRightIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
