import Link from "next/link";

type PrimaryCTAProps = {
  fullWidth?: boolean;
  onClick?: () => void;
};

export default function PrimaryCTA({ fullWidth = false, onClick }: PrimaryCTAProps) {
  return (
    <Link
      href="/#contact-form"
      onClick={onClick}
      className={`tap-press relative flex items-center justify-center bg-navy font-nav text-[16px] font-semibold tracking-[-0.02em] text-white whitespace-nowrap transition-colors duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:hover:bg-navy-mid lg:text-fluid-cta lg:font-medium lg:tracking-normal ${
        fullWidth ? "min-h-12 w-full px-5" : "h-full min-h-12 shrink-0 px-7 xl:px-9"
      }`}
    >
      <span>Start a conversation</span>
    </Link>
  );
}
