import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Cybersecurity",
  description: "Security assessments and hardening for products that handle real business risk.",
  path: "/services/cybersecurity",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
