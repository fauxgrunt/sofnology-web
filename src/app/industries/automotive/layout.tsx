import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Automotive Software",
  description: "Automotive software focused on clarity, control, and systems that hold up.",
  path: "/industries/automotive",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
