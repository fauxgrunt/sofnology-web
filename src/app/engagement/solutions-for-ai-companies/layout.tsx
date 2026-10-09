import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AI & Automation",
  description: "Voice assistants, conversational AI, and automation connected to business systems.",
  path: "/services/ai-automation",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
