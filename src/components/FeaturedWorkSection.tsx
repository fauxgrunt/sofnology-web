import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import WorkFilterSelect from "@/components/WorkFilterSelect";
import { featuredWork } from "@/content/work";

const featured = featuredWork();

export default function FeaturedWorkSection() {
  return (
    <section id="work" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="flex flex-col gap-6 px-5 py-10 sm:px-6 sm:py-12 md:flex-row md:items-end md:justify-between md:px-10 md:py-14 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-fluid-display font-semibold tracking-[-0.045em] text-neutral-950">
              Our work
            </h2>
            <p className="text-fluid-body mt-4 max-w-2xl leading-[1.55] text-neutral-700 sm:mt-6 sm:leading-[1.75]">
              Selected projects. Confidential work stays anonymous, and numbers appear only when a record verifies them.
            </p>
          </div>
          <Link
            href="/work"
            className="tap-press inline-flex min-h-12 shrink-0 items-center gap-2 text-[14px] font-semibold tracking-[-0.02em] text-navy underline decoration-navy/50 underline-offset-4"
          >
            View all work
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <WorkFilterSelect value="featured" />

        <div className="grid grid-cols-1 border-t border-neutral-200 lg:grid-cols-2">
          {featured.map((item, index) => {
            const banner = Boolean(item.image && item.imageWidth && item.imageHeight);
            const photo = item.cardImage ?? item.image;
            return (
            <article
              key={item.slug}
              className={`border-neutral-200 ${index > 0 ? "border-t" : ""} ${
                index % 2 === 1 ? "lg:border-l" : ""
              } ${index < 2 && index > 0 ? "lg:border-t-0" : ""}`}
            >
              <Link href={`/work/${item.slug}`} className="group relative block overflow-hidden">
                {banner ? (
                  <>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={item.imageWidth}
                      height={item.imageHeight}
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="h-auto w-full"
                    />
                    <h3 className="sr-only">{item.cardTitle}</h3>
                  </>
                ) : (
                <div className="relative min-h-[240px] bg-navy sm:min-h-[380px] lg:min-h-[480px]">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover object-center"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-[0.16em] text-white/70 uppercase">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.045em] sm:text-2xl">
                        {item.cardTitle}
                      </h3>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                )}
              </Link>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
