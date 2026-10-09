import { routeMetadata } from "@/lib/metadata";

export const metadata = routeMetadata("/services/digital-marketing");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
