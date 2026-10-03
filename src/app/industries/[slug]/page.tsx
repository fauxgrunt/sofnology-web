import { notFound } from "next/navigation";
import { InteriorPage, StackedHero } from "@/components/interior";
import { focusIndustries, getFocusIndustry } from "@/content/industries/focus";
import { pageMetadata } from "@/lib/metadata";
import { brand } from "@/lib/theme";

const taken = new Set([
  "fintech",
  "ecommerce",
  "foodtech",
  "healthtech",
  "proptech",
  "automotive",
  "edtech",
  "adtech",
]);

export function generateStaticParams() {
  return focusIndustries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getFocusIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: industry.title,
    description: industry.lede,
    path: `/industries/${industry.slug}`,
  });
}

export default async function FocusIndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (taken.has(slug)) notFound();
  const industry = getFocusIndustry(slug);
  if (!industry) notFound();

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
          imageAlt={industry.title}
          imageClass="object-cover object-center"
          title={industry.title}
          lede={industry.lede}
          eyebrow="Industries"
          eyebrowColor={brand.accent}
          ctaLabel="Start a Project"
          ctaHref="#contact-form"
          ctaBackground={brand.navy}
        />
      }
    >
      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200 px-5 py-10 sm:px-6 md:px-10 lg:px-16">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-neutral-950">What this can include</h2>
          <ul className="mt-6 max-w-2xl space-y-3">
            {industry.examples.map((example) => (
              <li key={example} className="border-b border-neutral-200 py-3 text-[16px] text-neutral-800">
                {example}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </InteriorPage>
  );
}
