import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Custom Software Development",
  description: "Custom software, SaaS platforms, and product engineering shaped around how your business operates.",
  path: "/services/software-development",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
