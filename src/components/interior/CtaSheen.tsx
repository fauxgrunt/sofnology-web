type CtaSheenProps = {
  tone?: "soft" | "mid" | "strong" | "wash";
  /** Hero cells use a wider, slower shine; in-panel buttons use the narrower one. */
  width?: "hero" | "button";
};

const TONE = {
  soft: "bg-white/12",
  mid: "bg-white/20",
  strong: "bg-white/30",
  wash: "bg-white/35",
} as const;

/** The diagonal shine that runs across every interior CTA on hover. */
export default function CtaSheen({ tone = "strong", width = "hero" }: CtaSheenProps) {
  const sweep =
    width === "button"
      ? "inset-y-0 -left-1/4 w-1/4 duration-sheen"
      : "inset-y-0 -left-1/3 w-1/3 duration-sheen";

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute ${sweep} skew-x-[-18deg] ${TONE[tone]} opacity-0 transition-all ease-motion group-hover:left-[115%] group-hover:opacity-100`}
    />
  );
}
