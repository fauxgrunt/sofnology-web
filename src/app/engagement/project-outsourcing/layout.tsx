import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Project Outsourcing",
  description: "Scoped project delivery with clear milestones and handover.",
  path: "/engagement/project-outsourcing",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
