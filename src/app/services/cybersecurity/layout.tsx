import { routeMetadata } from "@/lib/metadata";

export const metadata = routeMetadata("/services/cybersecurity");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
