import Link from "next/link";
import { InteriorPage, StackedHero } from "@/components/interior";
import { pageMetadata } from "@/lib/metadata";
import { brand } from "@/lib/theme";

export const metadata = pageMetadata({
  title: "How We Work",
  description:
    "Project delivery, dedicated teams, staff augmentation, consulting, managed services, and retainers.",
  path: "/how-we-work",
});

const models = [
  {
    id: "project-based",
    title: "Project-based delivery",
    description: "Defined scope, milestones, delivery, testing, and handover.",
  },
  {
    id: "dedicated-team",
    title: "Dedicated development team",
    description: "A team aligned around the client's ongoing roadmap.",
  },
  {
    id: "staff-augmentation",
    title: "Staff augmentation",
    description: "Add specific engineering capability to an existing team.",
  },
  {
    id: "technical-consulting",
    title: "Technical consulting",
    description: "Architecture, assessments, troubleshooting, planning, and technical direction.",
  },
  {
    id: "managed-services",
    title: "Managed services",
    description: "Sofnology operates agreed technical systems or services continuously.",
  },
  {
    id: "ongoing-support",
    title: "Ongoing support and retainers",
    description:
      "Monthly maintenance, optimization, technical support, marketing support, and infrastructure support.",
  },
];

export default function HowWeWorkPage() {
  return (
    <InteriorPage
      sticky={{
        href: "#contact-form",
        label: "Start a Project",
        backgroundColor: brand.navy,
        textColor: "#ffffff",
        pastHeroPx: 280,
      }}
      contact={{ showIntro: true, accent: "navy" }}
      hero={
        <StackedHero
          image="/enterprise-services.jpg"
          imageAlt="Engineering collaboration"
          imageClass="object-cover object-center"
          title="How we work"
          lede="Delivery models, not company types. Scope, team shape, consulting, and support live here. Separate pages can come later, when a model has enough of its own to say."
          eyebrow="Sofnology"
          eyebrowColor={brand.accent}
          ctaLabel="Start a Project"
          ctaHref="#contact-form"
          ctaBackground={brand.navy}
          split="42/58"
        />
      }
    >
      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
          {models.map((model) => (
            <article id={model.id} key={model.id} className="scroll-mt-24 border-b border-neutral-200 px-5 py-10 last:border-b-0 sm:px-6 md:px-10 lg:px-16">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-3xl">{model.title}</h2>
              <p className="mt-4 max-w-3xl text-[16px] leading-[1.7] text-neutral-700">{model.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200 px-5 py-10 sm:px-6 md:px-10 lg:px-16">
          <h2 className="max-w-3xl text-2xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-3xl">
            Ownership stays with Sofnology
          </h2>
          <p className="mt-4 max-w-3xl text-[16px] leading-[1.7] text-neutral-700">
            Sofnology is a technology partner across software, AI, communication systems, infrastructure, and digital growth. Not every skill sits permanently in-house. When a project needs a specialist, Sofnology can add a vetted engineer or delivery partner and still keep project ownership, technical oversight, communication, and quality control.
          </p>
          <Link href="/#contact-form" className="mt-8 inline-flex min-h-12 items-center bg-navy px-5 text-[15px] font-semibold text-white">
            Start a Project
          </Link>
        </div>
      </section>
    </InteriorPage>
  );
}
