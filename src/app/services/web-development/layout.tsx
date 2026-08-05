import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Web App Development",
  description: "Web products that help businesses present clearly, operate efficiently, and scale.",
  path: "/services/web-development",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
