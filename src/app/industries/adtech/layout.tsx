import { routeMetadata } from "@/lib/metadata";

export const metadata = routeMetadata("/industries/adtech");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
