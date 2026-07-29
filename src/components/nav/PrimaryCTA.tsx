type PrimaryCTAProps = {
  fullWidth?: boolean;
  onClick?: () => void;
};

export default function PrimaryCTA({ fullWidth = false, onClick }: PrimaryCTAProps) {
  return (
    <a
      href="/#contact"
      onClick={onClick}
      className={`group relative flex items-center justify-center overflow-hidden bg-[#061a3a] font-nav text-[14px] font-medium tracking-normal text-white whitespace-nowrap transition-colors duration-300 hover:bg-[#0b2a5b] ${
        fullWidth ? "min-h-12 w-full px-5" : "h-full min-h-12 shrink-0 px-7 xl:px-9"
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
      />
      <span className="pointer-events-none relative z-10">Contact us</span>
    </a>
  );
}
