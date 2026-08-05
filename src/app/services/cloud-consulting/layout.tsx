import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Cloud Consulting",
  description: "Cloud architecture, migration, and platform reliability for growing products.",
  path: "/services/cloud-consulting",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
