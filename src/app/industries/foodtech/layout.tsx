import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Foodtech Software",
  description: "Food apps that keep orders, kitchens, and delivery moving.",
  path: "/industries/foodtech",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
