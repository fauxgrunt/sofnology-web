import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import FaqSection from "@/components/sections/FaqSection";
import { InteriorPage, SplitImageCta, SplitStackedHero } from "@/components/interior";
import { workBySlugs } from "@/content/work";
import { LIME, toolStack, faqs, hero, cta, sticky, contact } from "@/content/services/digital-marketing";
import { AcquisitionSection, EngagementSection, ServicesSection } from "./interactive";

function ToolStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-5xl">
            Platforms we run the work on
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            The stack stays with the channels Sofnology actually manages. A specialist can join a project under Sofnology’s ownership when the account needs one.
          </p>
        </div>

        <div>
          {toolStack.map((group, index) => (
            <article
              key={group.category}
              className={`grid min-h-[110px] grid-cols-1 px-6 py-6 md:px-10 lg:grid-cols-[0.36fr_0.64fr] lg:px-0 ${
                index > 0 ? "border-t border-neutral-200" : ""
              }`}
            >
              <div className="flex items-start lg:px-8 xl:px-12">
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {group.category}
                </h3>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-[15px] leading-tight tracking-tight text-neutral-700 md:grid-cols-2 lg:mt-0 lg:px-8 xl:px-12">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebStrip() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[280px] grid-cols-1 lg:grid-cols-[0.54fr_0.46fr]">
          <div className="flex items-center border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:border-b-0 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-[12px] font-semibold tracking-[0.16em] text-[#10241C] uppercase">
                Website
              </p>
              <h2 className="mt-5 text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-5xl">
                The page is part of the campaign
              </h2>
              <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Ads and SEO only work when the destination can take the enquiry. For a new site, a portal, or a larger web product, continue into Sofnology web development.
              </p>
            </div>
          </div>
          <div className="flex items-end px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <Link
              href="/services/web-development"
              className="group relative flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#10241C] md:px-8"
              style={{ backgroundColor: LIME }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10">Explore web development</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectedWorkSection() {
  const related = workBySlugs(["yanming-washer-repair"]);
  if (related.length === 0) return null;

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="flex items-end justify-between gap-6 border-b border-neutral-200 px-5 py-9 sm:px-6 md:px-10 lg:px-16">
          <h2 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl">
            Selected work
          </h2>
          <Link href="/work/growth" className="text-[14px] font-semibold text-navy underline underline-offset-4">
            View growth work
          </Link>
        </div>
        {related.map((item) => {
          const photo = item.cardImage ?? item.image;
          return (
            <Link key={item.slug} href={`/work/${item.slug}`} className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
              <div className="relative min-h-[240px] overflow-hidden border-b border-neutral-200 bg-navy lg:min-h-[360px] lg:border-r lg:border-b-0">
                {photo ? (
                  <Image src={photo} alt={item.imageAlt} fill sizes="(max-width: 1024px) 100vw, 640px" className="object-cover object-center" />
                ) : null}
              </div>
              <div className="flex flex-col justify-center px-5 py-10 sm:px-6 md:px-10 lg:px-16">
                <p className="text-[12px] font-semibold tracking-[0.16em] text-[#10241C] uppercase">{item.category}</p>
                <h3 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">{item.title}</h3>
                <p className="mt-5 max-w-xl text-[15px] leading-[1.72] text-neutral-700">{item.summary}</p>
                <p className="mt-6 text-[14px] font-semibold text-neutral-950">View case study →</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default function DigitalMarketingPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <SplitStackedHero
          layout="cta-first"
          title={hero.title}
          lede={hero.lede}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          ctaBackground={hero.ctaBackground}
          ctaText={hero.ctaText}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          wedge="default"
          sheen="soft"
          ctaArrowColor={hero.ctaArrowColor}
        />
      }
    >
      <ServicesSection />
      <AcquisitionSection />
      <EngagementSection />
      <ToolStackSection />
      <SelectedWorkSection />
      <WebStrip />
      <SplitImageCta
        title={cta.title}
        lede={cta.lede}
        ctaLabel={cta.ctaLabel}
        panelBackground={cta.panelBackground}
        buttonBackground={cta.buttonBackground}
        buttonText={cta.buttonText}
        image={cta.image}
        imageAlt={cta.imageAlt}
        sheen="wash"
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} variant={faqs.variant} />
    </InteriorPage>
  );
}
