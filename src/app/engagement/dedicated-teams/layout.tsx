import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Dedicated Teams",
  description: "A lasting Sofnology pod embedded in your product roadmap.",
  path: "/engagement/dedicated-teams",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
