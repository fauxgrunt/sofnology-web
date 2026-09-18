import { routeMetadata } from "@/lib/metadata";

export const metadata = routeMetadata("/industries/automotive");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
