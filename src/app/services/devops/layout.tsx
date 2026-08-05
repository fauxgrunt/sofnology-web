import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "DevOps",
  description: "CI/CD, infrastructure, and delivery pipelines that keep releases predictable.",
  path: "/services/devops",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
