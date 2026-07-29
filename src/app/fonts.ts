import { Plus_Jakarta_Sans } from "next/font/google";

/** Body / page UI */
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
});
