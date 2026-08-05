function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`ml-1.5 h-2 w-2 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M2.5 4.5L6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 text-slate-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.5 13.5L17 17" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 text-slate-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="7.25" />
      <path d="M2.75 10h14.5M10 2.75c2.4 2.4 2.4 12.1 0 14.5M10 2.75c-2.4 2.4-2.4 12.1 0 14.5" />
    </svg>
  );
}

/** Animated hamburger ↔ close for mobile nav */
function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 block h-[1.5px] w-full origin-center bg-[#111111] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "top-[6px] rotate-45" : "top-0 rotate-0"
        }`}
      />
      <span
        className={`absolute top-[6px] left-0 block h-[1.5px] w-full bg-[#111111] transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-[1.5px] w-full origin-center bg-[#111111] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "top-[6px] -rotate-45" : "top-[12px] rotate-0"
        }`}
      />
    </span>
  );
}

export { Chevron, SearchIcon, GlobeIcon, MenuToggleIcon };
