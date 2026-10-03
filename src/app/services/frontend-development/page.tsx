import { notFound } from "next/navigation";
import CoreServiceView from "@/components/services/CoreServiceView";
import { getService } from "@/content/services/catalog";

export default function FrontendDevelopmentPage() {
  const service = getService("frontend-development");
  if (!service) notFound();
  return <CoreServiceView service={service} />;
}
