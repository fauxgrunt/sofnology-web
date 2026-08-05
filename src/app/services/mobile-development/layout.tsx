import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Mobile App Development",
  description: "iOS, Android, and cross-platform mobile products built for real use.",
  path: "/services/mobile-development",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
