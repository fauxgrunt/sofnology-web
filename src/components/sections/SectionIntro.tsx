/**
 * The two-column band that opens most interior sections: heading on the left,
 * supporting line on the right.
 *
 * Class names are looked up rather than interpolated so Tailwind can see every
 * one of them in the source.
 */

const MIN_HEIGHT = {
  140: "min-h-[140px]",
  160: "min-h-[160px]",
  170: "min-h-[170px]",
  180: "min-h-[180px]",
  200: "min-h-[200px]",
  220: "min-h-[220px]",
  240: "min-h-[240px]",
  260: "min-h-[260px]",
  280: "min-h-[280px]",
  320: "min-h-[320px]",
} as const;

const SPLIT = {
  "46/54": "lg:grid-cols-[0.46fr_0.54fr]",
  "42/58": "lg:grid-cols-[0.42fr_0.58fr]",
  "52/48": "lg:grid-cols-[0.52fr_0.48fr]",
} as const;

const PADDING = {
  regular: "px-6 py-10 md:px-10 lg:px-16",
  roomy: "px-6 py-12 md:px-10 lg:px-16",
  responsive: "px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16",
} as const;

type SectionIntroProps = {
  title: string;
  lede: string;
  /** `dark` is for sections sitting on the page's deep accent panel. */
  tone?: "light" | "dark";
  /** `large` bumps the heading and opens up the lede's leading to match. */
  scale?: "regular" | "large";
  minHeight?: keyof typeof MIN_HEIGHT;
  split?: keyof typeof SPLIT;
  padding?: keyof typeof PADDING;
  /** Widens the heading column and narrows the lede. */
  wide?: boolean;
};

export default function SectionIntro({
  title,
  lede,
  tone = "light",
  scale = "regular",
  minHeight = 180,
  split = "46/54",
  padding = "regular",
  wide = false,
}: SectionIntroProps) {
  const dark = tone === "dark";
  const large = scale === "large";

  return (
    <div
      className={`grid ${MIN_HEIGHT[minHeight]} grid-cols-1 border-b ${
        dark ? "border-white/14" : "border-neutral-200"
      } ${SPLIT[split]}`}
    >
      <div className={`flex items-center ${PADDING[padding]}`}>
        <h2
          className={`${
            wide ? "max-w-4xl" : "max-w-xl"
          } text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] ${
            dark ? "" : "text-neutral-950"
          } ${large ? "md:text-5xl" : "md:text-[2.75rem]"}`}
        >
          {title}
        </h2>
      </div>

      <div className={`flex items-end ${PADDING[padding]}`}>
        <p
          className={`${wide ? "max-w-xl" : "max-w-2xl"} text-[15px] ${
            large ? "leading-[1.75]" : "leading-[1.7]"
          } tracking-tight ${dark ? "text-white/72" : "text-neutral-700"}`}
        >
          {lede}
        </p>
      </div>
    </div>
  );
}
