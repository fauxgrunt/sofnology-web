import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Staff Augmentation",
  description: "Senior engineers plugged into your team without rebuilding hiring.",
  path: "/engagement/staff-augmentation",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
