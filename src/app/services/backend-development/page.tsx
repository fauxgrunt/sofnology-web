import { notFound } from "next/navigation";
import CoreServiceView from "@/components/services/CoreServiceView";
import { getService } from "@/content/services/catalog";

export default function BackendDevelopmentPage() {
  const service = getService("backend-development");
  if (!service) notFound();
  return <CoreServiceView service={service} />;
}
