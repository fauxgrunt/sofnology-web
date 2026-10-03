type CtaSheenProps = {
  tone?: "soft" | "mid" | "strong" | "wash";
  /** Kept for call-site compatibility; sheen is intentionally unused. */
  width?: "hero" | "button";
};

/** Interior CTAs now use a single opacity/color cue instead of a diagonal shine. */
export default function CtaSheen(_props: CtaSheenProps) {
  return null;
}
