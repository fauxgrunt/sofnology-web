import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Healthtech Software",
  description: "Healthcare software grounded in security, compliance, and clinical reality.",
  path: "/industries/healthtech",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
