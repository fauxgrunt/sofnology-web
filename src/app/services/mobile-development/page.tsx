import { notFound } from "next/navigation";
import CoreServiceView from "@/components/services/CoreServiceView";
import { getService } from "@/content/services/catalog";

export default function MobileDevelopmentPage() {
  const service = getService("mobile-development");
  if (!service) notFound();
  return <CoreServiceView service={service} />;
}
