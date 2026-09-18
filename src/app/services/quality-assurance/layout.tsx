import { routeMetadata } from "@/lib/metadata";

export const metadata = routeMetadata("/services/quality-assurance");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
