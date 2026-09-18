import { ArrowUpRightIcon } from "@/components/icons";
import Image from "next/image";
import {
  fitSignals,
  services,
  choiceReasons,
  deliveryApproach,
  technologyStack,
  aiApproach,
  hero,
  cta,
} from "@/content/services/software-development";
import { IndustriesWeServeSection } from "./interactive";

export function SoftwareHero() {
  return (
    <section className="border-b border-neutral-200 bg-page">
          <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
            <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
              <div className="hidden min-h-[410px] lg:block" />

              <div className="grid min-h-0 grid-cols-1 px-5 py-10 sm:px-6 sm:py-12 md:min-h-[410px] md:px-10 lg:grid-cols-[0.56fr_0.44fr] lg:px-0 lg:py-0">
                <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
                  <h1 className="max-w-xl text-5xl leading-[1.05] font-semibold tracking-[-0.055em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                    {hero.title}
                  </h1>
                </div>

                <div className="mt-8 flex items-end sm:mt-12 lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
                  <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                    {hero.lede}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
              <a
                href={hero.ctaHref}
                className="tap-press group relative flex min-h-[72px] items-center justify-between overflow-hidden border-b border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] md:px-10 md:min-h-[88px] md:px-10 md:text-xl lg:min-h-[360px] lg:items-start lg:py-8 lg:border-b-0 lg:px-8 xl:px-12"
                style={{ backgroundColor: hero.ctaBackground, color: hero.ctaText }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/16 opacity-0 transition-all duration-sheen ease-motion group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">{hero.ctaLabel}</span>
                <span className="relative z-10 lg:mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRightIcon />
                </span>
              </a>

              <div className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:min-h-[360px]">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 64vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-white/15" />
                <div
                  aria-hidden="true"
                  className="absolute right-[8%] bottom-0 hidden h-[72%] w-[38%] bg-page lg:block"
                  style={{
                    clipPath: "polygon(34% 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
  );
}

export function SoftwareProjectCta() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-r lg:border-b-0">
            <Image
              src={cta.image}
              alt={cta.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/10" />
          </div>

          <div className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20" style={{ backgroundColor: cta.panelBackground }}>
            <div className="w-full max-w-3xl">
              <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.05em] md:text-5xl lg:text-[3.25rem]">
                {cta.title}
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                {cta.lede}
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-white transition-colors duration-chrome ease-motion hover:bg-navy-mid md:px-8"
                style={{ backgroundColor: cta.buttonBackground, color: cta.buttonText }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">{cta.ctaLabel}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRightIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhySofnologySection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-0 border-b border-neutral-200 sm:min-h-[200px] md:min-h-[250px] px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:items-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="max-w-2xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Why Sofnology is the right choice
            </h2>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/software-development.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover blur-[2px] scale-105"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/35 via-neutral-950/55 to-navy/78" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {choiceReasons.map((reason, index) => (
              <article
                key={reason.accent}
                className={`flex min-h-[245px] flex-col border-white/35 px-6 py-8 text-white md:px-8 lg:px-8 xl:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 0 ? "lg:border-l" : ""} ${
                  index > 3 ? "border-t" : index > 1 ? "border-t lg:border-t-0" : index > 0 ? "border-t md:border-t-0" : ""
                }`}
              >
                <div className="text-[2.35rem] sm:text-5xl leading-none font-light tracking-[-0.07em] text-navy-soft md:text-6xl">
                  {reason.accent}
                </div>
                <p className="mt-auto max-w-xs pt-10 text-[15px] leading-[1.55] tracking-tight text-white/86">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DeliveryApproachSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-0 border-b border-neutral-200 sm:min-h-[200px] md:min-h-[250px] px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:items-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Our approach
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {deliveryApproach.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[240px] border-neutral-200 px-6 py-9 md:px-10 lg:px-12 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""}`}
            >
              <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnologyStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="bg-navy text-white">
          <div className="min-h-0 border-b border-white/14 sm:min-h-[240px] md:min-h-[310px] px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:flex-col lg:justify-center lg:pl-[48%]">
            <div className="lg:px-16">
              <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Our technology stack
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/74">
                We choose proven tools that fit the product, the team, and the long-term
                maintenance plan, then combine them with practical automation where it
                creates clear operational value.
              </p>
            </div>
          </div>

          <div>
            {technologyStack.map((group, index) => (
              <article
                key={group.category}
                className={`grid min-h-[132px] grid-cols-1 border-white/14 px-6 py-7 md:px-10 lg:grid-cols-[0.48fr_0.52fr] lg:px-0 ${
                  index > 0 ? "border-t" : ""
                }`}
              >
                <div className="flex items-start lg:border-r lg:border-white/14 lg:px-8 xl:px-12">
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 text-[15px] leading-tight tracking-tight text-white/80 md:grid-cols-3 lg:mt-0 lg:px-8 xl:px-12">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AiApproachSection() {
  return (
    <>
      <div className="min-h-[250px] border-t border-white/14 border-b border-white/14 px-6 py-12 md:px-10 lg:flex lg:items-center lg:justify-center lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl lg:text-[3.35rem]">
            Our AI approach
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.75] tracking-tight text-white/72">
            We use AI to create measurable operational value, not noise. Every
            implementation needs a clear purpose, a reliable workflow, and a
            practical path to adoption.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {aiApproach.map((item, index) => (
          <article
            key={item.title}
            className={`min-h-[230px] border-white/14 px-6 py-8 md:px-10 lg:px-12 ${
              index % 2 === 1 ? "md:border-l" : ""
            } ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""}`}
          >
            <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] underline underline-offset-4 md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-8 text-[15px] leading-[1.72] tracking-tight text-white/76">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}

export function FitSignalsSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Built for the moments when off-the-shelf tools stop fitting
          </h2>
          <p className="mt-6 max-w-5xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
            Custom software becomes valuable when the business has outgrown generic
            tools, manual patches, and disconnected systems. The first job is to
            understand where those gaps are slowing the team down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {fitSignals.map((signal, index) => (
            <article
              key={signal.title}
              className={`flex min-h-[260px] flex-col border-neutral-200 px-6 py-9 md:px-10 lg:px-8 xl:px-10 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 0 ? "lg:border-l" : ""} ${
                index > 1 ? "border-t lg:border-t-0" : index > 0 ? "border-t md:border-t-0" : ""
              }`}
            >
              <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                {signal.title}
              </h3>
              <p className="mt-auto pt-12 text-[14px] leading-[1.7] tracking-tight text-neutral-700">
                {signal.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesProvidedSection() {
  return (
    <section id="services-provided" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="bg-navy text-white">
          <div className="grid min-h-[260px] grid-cols-1 border-b border-white/14 px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:grid-cols-[0.46fr_0.54fr] lg:px-0 lg:py-0">
            <div className="hidden lg:block" />
            <div className="flex items-center lg:px-14 xl:px-16">
              <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl lg:text-[3.35rem]">
                Services we provide
              </h2>
            </div>
          </div>

          <div>
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`grid min-h-[300px] grid-cols-1 border-white/14 md:grid-cols-[0.46fr_0.54fr] ${
                  index > 0 ? "border-t" : ""
                }`}
              >
                <div className="px-6 pt-9 md:px-10 lg:px-10 xl:px-12">
                  <h3 className="max-w-sm text-xl leading-tight font-semibold tracking-[-0.04em] text-white md:text-2xl">
                    {service.title}
                  </h3>
                </div>

                <div className="space-y-5 px-6 pt-9 pb-12 text-[15px] leading-[1.72] tracking-tight text-white/78 md:px-10 lg:border-l lg:border-white/14 lg:px-14 xl:px-16">
                  {service.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlatformCloudSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[430px] grid-cols-1 px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:grid-cols-[0.48fr_0.52fr] lg:px-0 lg:py-0">
          <div className="flex flex-col justify-start lg:px-16 lg:py-16">
            <p className="text-[16px] font-semibold tracking-[-0.02em] text-navy">
              Any platform, any workflow
            </p>
            <h2 className="mt-8 max-w-6xl text-3xl leading-[1.18] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl lg:text-[2.6rem]">
              We build software that fits the way your business operates across
              desktops, laptops, tablets, and mobile devices.
            </h2>
          </div>

          <div className="mt-12 flex items-end lg:mt-0 lg:px-16 lg:py-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              From internal dashboards and customer portals to workflow tools and
              reporting systems, Sofnology designs responsive, browser-compatible
              software that stays clear, usable, and reliable across modern devices,
              operating systems, and screen sizes.
            </p>
          </div>
        </div>

        <div className="grid min-h-[430px] grid-cols-1 border-t border-neutral-200 px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:grid-cols-[0.48fr_0.52fr] lg:px-0 lg:py-0">
          <div className="hidden lg:block" />

          <div className="flex flex-col justify-center lg:px-16 lg:py-16">
            <p className="text-[16px] font-semibold tracking-[-0.02em] text-navy">
              Cloud-ready delivery
            </p>
            <h2 className="mt-8 max-w-3xl text-3xl leading-[1.18] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl lg:text-[2.6rem]">
              We design software with deployment, scalability, access control, and
              long-term maintainability in mind from the start.
            </h2>
            <p className="mt-12 max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              Whether the first release runs on Vercel, AWS-ready infrastructure,
              Azure-ready architecture, or another modern cloud environment, our focus
              is practical: stable releases, clean integrations, secure access, and a
              handover your team can understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesBand() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="bg-navy text-white">
          <IndustriesWeServeSection />
          <AiApproachSection />
        </div>
      </div>
    </section>
  );
}
