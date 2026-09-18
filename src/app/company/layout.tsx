import { routeMetadata } from "@/lib/metadata";

export const metadata = routeMetadata("/company");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
