import { InteriorPage } from "@/components/interior";
import { sticky, contact } from "@/content/services/software-development";
import {
  HowWeWorkSection,
  EngagementShapesSection,
  CooperationModelsSection,
} from "./interactive";
import {
  SoftwareHero,
  FitSignalsSection,
  ServicesProvidedSection,
  PlatformCloudSection,
  IndustriesBand,
  SoftwareProjectCta,
  WhySofnologySection,
  DeliveryApproachSection,
  TechnologyStackSection,
} from "./sections";

export default function SoftwareDevelopmentPage() {
  return (
    <InteriorPage sticky={sticky} contact={contact} hero={<SoftwareHero />}>
      <FitSignalsSection />
      <ServicesProvidedSection />
      <PlatformCloudSection />
      <IndustriesBand />
      <CooperationModelsSection />
      <SoftwareProjectCta />
      <WhySofnologySection />
      <DeliveryApproachSection />
      <HowWeWorkSection />
      <TechnologyStackSection />
      <EngagementShapesSection />
    </InteriorPage>
  );
}
