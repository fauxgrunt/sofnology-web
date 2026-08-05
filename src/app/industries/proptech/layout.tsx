import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Proptech Software",
  description: "Property and real-estate platforms for multi-tenant ops and scale.",
  path: "/industries/proptech",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
