import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Solutions for AI Companies",
  description: "Product and platform engineering for AI-native companies.",
  path: "/engagement/solutions-for-ai-companies",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
