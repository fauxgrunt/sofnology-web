import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import RelatedSection from "@/components/sections/RelatedSection";
import { InteriorPage, StackedHero } from "@/components/interior";
import { pageMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/site";
import { brand } from "@/lib/theme";

export const metadata = pageMetadata({
  title: "How We Work",
  description:
    "Six ways Sofnology takes on work: a defined project, a dedicated team, added engineering capacity, consulting, managed services, or a retainer.",
  path: "/how-we-work",
});

const models = [
  {
    href: "/how-we-work/project-based-delivery",
    mark: "A finish line",
    title: "Project-based delivery",
    description:
      "You have a piece of work with an end. Scope, build, testing, and handover stay in one agreement.",
  },
  {
    href: "/how-we-work/dedicated-development-team",
    mark: "A longer roadmap",
    title: "Dedicated development team",
    description: "The roadmap does not stop at one release. A team stays on it.",
  },
  {
    href: "/how-we-work/staff-augmentation",
    mark: "One skill added",
    title: "Staff augmentation",
    description: "Your team is already in place. You need one specific skill added to it.",
  },
  {
    href: "/how-we-work/technical-consulting",
    mark: "A decision first",
    title: "Technical consulting",
    description: "You need a decision before more building: architecture, a fault, or a plan.",
  },
  {
    href: "/how-we-work/managed-services",
    mark: "A system to run",
    title: "Managed services",
    description: "A system should keep running. Sofnology operates what you agree to hand over.",
  },
  {
    href: "/how-we-work/ongoing-support",
    mark: "A month at a time",
    title: "Ongoing support and retainers",
    description:
      "The work is already live. A monthly agreement covers maintenance, support, and improvement.",
  },
];

const related = [
  {
    title: "About Sofnology",
    href: "/company",
    description: "What the company stands for.",
  },
  {
    title: "Our work",
    href: "/work",
    description: "Projects Sofnology has delivered.",
  },
  {
    title: "Software development",
    href: "/services/software-development",
    description: "Product engineering, from the first scope through release.",
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
      contact={{ accent: "navy" }}
      hero={
        <StackedHero
          image="/how-we-work.jpg"
          imageAlt="A glass path in a white room, leading to a single opening edged in blue light"
          imageClass="object-cover object-center"
          title="How we work"
          lede="Pick how Sofnology takes the work on. A defined project, a team for a longer roadmap, a skill added to your own team, advice before a build, or a system we keep running."
          eyebrow="Sofnology"
          eyebrowColor={brand.accent}
          ctaLabel="Start a Project"
          ctaHref="#contact-form"
          ctaBackground={brand.navy}
          split="58/42"
          titleMax="max-w-xl"
        />
      }
    >
      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto grid max-w-[1440px] border-x border-neutral-200 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:border-r lg:border-b-0 lg:px-16 lg:py-16">
            <h2 className="max-w-[8ch] text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-5xl">
              Six ways in
            </h2>
            <p className="mt-7 max-w-sm text-[15px] leading-[1.72] tracking-tight text-neutral-700">
              Open the model that matches the job in front of you. Each one has its own page.
            </p>
          </div>
          <div>
            {models.map((model, index) => (
              <Link
                key={model.href}
                href={model.href}
                className="tap-press group relative flex gap-4 overflow-hidden border-b border-neutral-200 px-5 py-7 transition-colors duration-200 ease-out last:border-b-0 focus-visible:shadow-[inset_0_0_0_2px_#2F6BFF] active:bg-neutral-200/80 sm:gap-6 sm:px-6 sm:py-8 md:px-10 lg:px-12 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#ececee]"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 bottom-0 left-0 w-0 transition-[width] duration-300 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:w-1"
                  style={{ backgroundColor: brand.accent }}
                />
                <span
                  className="w-11 shrink-0 pt-1 text-[1.65rem] leading-none font-light tracking-[-0.06em] text-neutral-300 transition-colors duration-200 group-active:text-[#2F6BFF] sm:w-14 sm:text-4xl [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-[#2F6BFF]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-4">
                    <span>
                      <span
                        className="block text-[12px] font-semibold tracking-[0.14em] uppercase"
                        style={{ color: brand.accent }}
                      >
                        {model.mark}
                      </span>
                      <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-2xl">
                        {model.title}
                      </h2>
                    </span>
                    <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold tracking-[-0.02em] text-neutral-950">
                      Open
                      <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </span>
                  <span className="mt-3 block max-w-xl text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                    {model.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200" style={{ backgroundColor: brand.navy }}>
        <div className="mx-auto max-w-[1440px] border-x border-white/10 px-5 py-12 sm:px-6 md:px-10 lg:px-16">
          <h2 className="max-w-xl text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-white md:text-4xl">
            One company on the work
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            You still deal with Sofnology. When a project needs a skill the firm does not keep on staff, a vetted specialist can join it. Sofnology keeps the agreement, the communication, and the result.
          </p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-6 inline-block text-[15px] font-semibold tracking-tight text-white underline-offset-4 hover:underline"
          >
            {SITE_EMAIL}
          </a>
          <a
            href="#contact-form"
            className="group relative mt-10 flex min-h-16 w-full max-w-md items-center justify-between overflow-hidden px-6 text-[15px] font-semibold tracking-[-0.03em] text-white"
            style={{ backgroundColor: brand.accent }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Start a Project</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRightIcon />
            </span>
          </a>
        </div>
      </section>

      <RelatedSection
        heading="Keep exploring"
        links={related}
        accent={brand.accent}
        actionColor={brand.accent}
        actionLabel="View"
        columns={3}
        titleSize="md"
      />
    </InteriorPage>
  );
}
