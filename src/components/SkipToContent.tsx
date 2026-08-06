export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#061a3a] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:tracking-tight focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
    >
      Skip to main content
    </a>
  );
}
