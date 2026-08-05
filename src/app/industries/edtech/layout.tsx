import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Edtech Software",
  description: "Education platforms for learners and institutions.",
  path: "/industries/edtech",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
