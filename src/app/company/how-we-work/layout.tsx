import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How We Work",
  description: "Engagement models, delivery rhythm, and how Sofnology keeps software projects under control.",
  path: "/company/how-we-work",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
