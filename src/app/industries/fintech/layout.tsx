import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Fintech Software",
  description: "Fintech platforms built for clarity, control, and operational rigor.",
  path: "/industries/fintech",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
