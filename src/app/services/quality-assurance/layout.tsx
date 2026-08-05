import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Quality Assurance",
  description: "QA strategy and automation that protect releases without slowing delivery.",
  path: "/services/quality-assurance",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
