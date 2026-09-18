import { routeMetadata } from "@/lib/metadata";

export const metadata = routeMetadata("/company/how-we-work");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
