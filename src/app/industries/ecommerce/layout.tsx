import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Ecommerce Software",
  description: "Commerce systems built for conversion and operations.",
  path: "/industries/ecommerce",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
