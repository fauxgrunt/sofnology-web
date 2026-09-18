import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

/** Body / page UI */
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
});

/** Navbar, mega-menu, and header CTA — self-hosted Satoshi (Fontshare). */
export const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
});
