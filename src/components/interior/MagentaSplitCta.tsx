import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

type MagentaSplitCtaProps = {
  lede: string;
  image: string;
  imageAlt: string;
  imageClass: string;
  href?: string;
  background?: string;
  panelMin?: string;
  imageMin?: string;
  ledeClass?: string;
};

/**
 * Magenta cell + clipped image. Shared by edtech and adtech — the two copies
 * differed only in copy, image, and a few min-heights.
 */
export default function MagentaSplitCta({
  lede,
  image,
  imageAlt,
  imageClass,
  href = "#contact-form",
  background = "#FF2D8A",
  panelMin = "lg:min-h-[380px]",
  imageMin = "lg:min-h-[380px]",
  ledeClass = "max-w-[15rem]",
}: MagentaSplitCtaProps) {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href={href}
            className={`tap-press relative flex min-h-0 flex-col justify-between px-6 py-8 text-neutral-950 transition-opacity duration-chrome ease-motion sm:min-h-[220px] md:min-h-[280px] md:px-8 lg:px-10 [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90 ${panelMin}`}
            style={{ backgroundColor: background }}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-2xl font-semibold tracking-[-0.045em] md:text-3xl">
                Start a Project
              </span>
              <span className="mt-1">
                <ArrowUpRightIcon />
              </span>
            </div>
            <p className={`${ledeClass} text-[14px] leading-[1.55] tracking-tight text-neutral-950/75`}>
              {lede}
            </p>
          </a>

          <div
            className={`relative min-h-[280px] overflow-hidden border-t border-neutral-200 lg:border-t-0 lg:border-l ${imageMin}`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className={imageClass}
              aria-hidden={imageAlt === "" ? true : undefined}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-page"
              style={{ clipPath: "polygon(72% 100%, 100% 38%, 100% 100%)" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-white"
              style={{ clipPath: "polygon(78% 100%, 100% 48%, 100% 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
