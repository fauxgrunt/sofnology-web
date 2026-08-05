import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Backend Development",
  description: "APIs, services, and data systems that keep products reliable under load.",
  path: "/services/backend-development",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
