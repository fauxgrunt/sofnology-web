import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Sofnology",
  description: "Who Sofnology is, how we work, and how we partner with growing companies on software and systems.",
  path: "/company",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
