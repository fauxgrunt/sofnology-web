import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Adtech & Martech",
  description: "Marketing and adtech platforms that sharpen acquisition and brand presence.",
  path: "/industries/adtech",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
