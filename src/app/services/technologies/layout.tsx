import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Technologies",
  description: "The web, mobile, cloud, and AI stacks Sofnology uses to ship durable products.",
  path: "/services/technologies",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
