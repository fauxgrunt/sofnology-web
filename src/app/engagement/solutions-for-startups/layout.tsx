import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Solutions for Startups",
  description: "MVP and product engineering partnerships for early-stage teams.",
  path: "/engagement/solutions-for-startups",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
