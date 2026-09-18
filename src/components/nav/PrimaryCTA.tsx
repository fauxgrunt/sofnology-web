import Link from "next/link";

type PrimaryCTAProps = {
  fullWidth?: boolean;
  onClick?: () => void;
};

export default function PrimaryCTA({ fullWidth = false, onClick }: PrimaryCTAProps) {
  return (
    <Link
      href="/#contact"
      onClick={onClick}
      className={`group relative flex items-center justify-center overflow-hidden bg-navy font-nav text-fluid-cta font-medium tracking-normal text-white whitespace-nowrap transition-colors duration-chrome ease-motion hover:bg-navy-mid tap-press ${
        fullWidth ? "min-h-12 w-full px-5" : "h-full min-h-12 shrink-0 px-7 xl:px-9"
      }`}
    >
      <span
        aria-hidden="true"
        className="cta-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-sheen ease-motion group-hover:left-[115%] group-hover:opacity-100"
      />
      <span className="pointer-events-none relative z-10">Book a discovery call</span>
    </Link>
  );
}
