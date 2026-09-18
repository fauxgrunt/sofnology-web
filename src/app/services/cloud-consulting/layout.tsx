import { routeMetadata } from "@/lib/metadata";

export const metadata = routeMetadata("/services/cloud-consulting");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
