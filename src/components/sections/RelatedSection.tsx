import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export type RelatedLink = {
  title: string;
  description: string;
  href: string;
};

/**
 * The "related work" grid that closes most interior pages.
 *
 * Two treatments are in use: `cards`, which leads each entry with an accent
 * rule, and `list`, a quieter three-up with no rule and an arrow-only action.
 */
export type RelatedVariant = "cards" | "list";

/** Title scale. The three card sizes are historical; `mdTight` is the default. */
export type RelatedTitleSize = "sm" | "md" | "mdTight" | "lg";

const TITLE: Record<RelatedTitleSize, string> = {
  sm: "text-lg font-semibold tracking-[-0.04em] text-neutral-950 md:text-xl",
  md: "text-xl font-semibold tracking-[-0.045em] text-neutral-950",
  mdTight:
    "text-xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950 md:text-2xl",
  lg: "text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950",
};

type RelatedSectionProps = {
  heading: string;
  links: readonly RelatedLink[];
  /** Colour of the trailing arrow, and of its label when there is one. */
  actionColor: string;
  variant?: RelatedVariant;
  columns?: 3 | 4;
  /** Colour of the rule above each title. Required by the `cards` variant. */
  accent?: string;
  /** Text beside the arrow. Omit to show the arrow alone. */
  actionLabel?: string;
  titleSize?: RelatedTitleSize;
};

export default function RelatedSection({
  heading,
  links,
  actionColor,
  variant = "cards",
  columns = 4,
  accent,
  actionLabel,
  titleSize = variant === "list" ? "sm" : "mdTight",
}: RelatedSectionProps) {
  const isCards = variant === "cards";

  const grid = columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";
  const card = isCards
    ? columns === 4
      ? "min-h-[220px] px-6 py-9 md:px-8 lg:px-9"
      : "min-h-[200px] px-6 py-9 md:px-8 lg:px-10"
    : "min-h-[150px] px-6 py-8 md:px-8 lg:px-10";

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2
            className={
              isCards
                ? "max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]"
                : "max-w-4xl text-3xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl"
            }
          >
            {heading}
          </h2>
        </div>

        <div className={`grid grid-cols-1 ${grid}`}>
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex flex-col justify-between border-neutral-200 transition-colors duration-chrome ease-motion hover:bg-white ${card} ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              } ${
                columns === 4 && index >= 2 ? "md:border-t lg:border-t-0" : ""
              }`}
            >
              <div>
                {accent && (
                  <div
                    className="mb-6 h-1 w-10 origin-left transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: accent }}
                  />
                )}
                <h3 className={TITLE[titleSize]}>{link.title}</h3>
                <p
                  className={
                    isCards
                      ? "mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700"
                      : "mt-4 max-w-sm text-[14px] leading-[1.65] tracking-tight text-neutral-700"
                  }
                >
                  {link.description}
                </p>
              </div>

              <span
                className={
                  actionLabel
                    ? "mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight"
                    : "mt-8 inline-flex"
                }
                style={{ color: actionColor }}
              >
                {actionLabel}
                <ArrowUpRightIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
