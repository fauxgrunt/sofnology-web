export default function PrimaryCTA() {
  return (
    <a
      href="#contact"
      className="group relative flex h-full min-h-12 shrink-0 items-center overflow-hidden bg-[#061a3a] px-6 text-[12px] font-semibold tracking-tight text-white whitespace-nowrap transition-colors duration-300 hover:bg-[#0b2a5b] active:bg-[#05142d]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
      />
      <span className="pointer-events-none relative z-10">Contact us</span>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"
      />
    </a>
  );
}
