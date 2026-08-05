import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Frontend Development",
  description: "Interfaces that stay clear, fast, and maintainable as products grow.",
  path: "/services/frontend-development",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
