import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How We Work",
  description:
    "Six ways Sofnology takes on work: a defined project, a dedicated team, added engineering capacity, consulting, managed services, or a retainer.",
  path: "/how-we-work",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
