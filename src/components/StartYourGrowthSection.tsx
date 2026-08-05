import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

const startingPoints = [
  {
    title: "Digital growth audit",
    description:
      "Start with a focused review of your website, marketing channels, analytics, workflows, and technical gaps so the next move is clear.",
  },
  {
    title: "Custom software build",
    description:
      "Build portals, dashboards, SaaS tools, internal systems, and customer-facing platforms around the way your business actually operates.",
  },
  {
    title: "Marketing and conversion sprint",
    description:
      "Improve SEO, paid campaigns, landing pages, tracking, content systems, and lead generation with a focused growth push.",
  },
  {
    title: "Automation and operations system",
    description:
      "Connect scattered tools, remove manual handoffs, improve CRM workflows, and create reporting systems that keep teams aligned.",
  },
];

export default function StartYourGrowthSection() {
  return (
    <section id="start-your-growth" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="text-fluid-display font-semibold tracking-[-0.045em] text-neutral-950">
            Start your growth, your way
          </h2>
          <p className="text-fluid-body mt-4 max-w-5xl leading-[1.65] tracking-tight text-neutral-700 sm:mt-6 sm:leading-[1.75]">
            Whether you need clarity first, a software platform, a stronger marketing
            engine, or operational automation, Sofnology gives you a practical starting
            point without forcing every business into the same engagement model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {startingPoints.map((point, index) => (
            <Link
              key={point.title}
              href="/#contact"
              className={`group relative flex min-h-0 flex-col overflow-hidden border-neutral-200 bg-[#f4f4f4] px-5 py-8 text-neutral-950 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:min-h-[240px] sm:px-6 sm:py-9 md:min-h-[280px] md:px-10 lg:px-12 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""}`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-[#061a3a] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-focus-visible:scale-x-100 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-x-100"
              />
              <span
                aria-hidden="true"
                className="cta-sheen absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/12 opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-focus-visible:left-[120%] group-focus-visible:opacity-100 [@media(hover:hover)_and_(pointer:fine)]:group-hover:left-[120%] [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100"
              />

              <div className="relative z-10 flex items-start justify-between gap-8">
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] underline decoration-neutral-950/60 underline-offset-4 transition-colors duration-500 group-focus-visible:text-white group-focus-visible:decoration-white/85 [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-white [@media(hover:hover)_and_(pointer:fine)]:group-hover:decoration-white/85 md:text-2xl">
                  {point.title}
                </h3>
                <span className="mt-1 flex h-9 w-9 items-center justify-center text-neutral-950 transition-all duration-500 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:bg-white/10 group-focus-visible:text-white [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1 [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-white/10 [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-white">
                  <ArrowUpRightIcon />
                </span>
              </div>

              <p className="relative z-10 mt-auto max-w-2xl pt-16 text-fluid-body leading-[1.7] tracking-tight text-neutral-700 transition-colors duration-500 group-focus-visible:text-white/82 [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-white/82">
                {point.description}
              </p>
            </Link>
          ))}

          <Link
            href="/#contact"
            className="tap-press group relative col-span-1 flex min-h-24 items-center justify-between overflow-hidden border-t border-neutral-200 bg-gradient-to-r from-[#0b2a5b] via-[#16457f] to-[#0b2a5b] px-6 py-7 text-xl font-semibold tracking-[-0.045em] text-white md:col-span-2 md:px-10 lg:px-12"
          >
            <span
              aria-hidden="true"
              className="cta-sheen pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Book a discovery call</span>
            <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1 [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-white/15">
              <ArrowUpRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
