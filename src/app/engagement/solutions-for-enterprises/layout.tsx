import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Solutions for Enterprises",
  description: "Enterprise software delivery with clear ownership and operational control.",
  path: "/engagement/solutions-for-enterprises",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
