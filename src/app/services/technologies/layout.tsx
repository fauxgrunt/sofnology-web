import { routeMetadata } from "@/lib/metadata";

export const metadata = routeMetadata("/services/technologies");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
