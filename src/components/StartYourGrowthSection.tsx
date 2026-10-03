import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

const startingPoints = [
  {
    title: "Project-based delivery",
    href: "/how-we-work#project-based",
    description: "Defined scope, milestones, delivery, testing, and handover.",
  },
  {
    title: "Dedicated development team",
    href: "/how-we-work#dedicated-team",
    description: "A team aligned around the client's ongoing roadmap.",
  },
  {
    title: "Staff augmentation",
    href: "/how-we-work#staff-augmentation",
    description: "Add specific engineering capability to an existing team.",
  },
  {
    title: "Technical consulting",
    href: "/how-we-work#technical-consulting",
    description: "Architecture, assessments, troubleshooting, planning, and technical direction.",
  },
  {
    title: "Managed services",
    href: "/how-we-work#managed-services",
    description: "Sofnology operates agreed technical systems or services continuously.",
  },
  {
    title: "Ongoing support and retainers",
    href: "/how-we-work#ongoing-support",
    description: "Monthly maintenance, optimization, technical support, and infrastructure support.",
  },
];

export default function StartYourGrowthSection() {
  return (
    <section id="start-your-growth" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="text-fluid-display font-semibold tracking-[-0.045em] text-neutral-950">
            Ways to work
          </h2>
          <p className="text-fluid-body mt-4 max-w-5xl leading-[1.65] tracking-tight text-neutral-700 sm:mt-6 sm:leading-[1.75]">
            Choose a delivery shape. Company types such as startups or enterprises are not separate models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {startingPoints.map((point, index) => (
            <Link
              key={point.title}
              href={point.href}
              className={`tap-press group relative flex min-h-0 flex-col border-neutral-200 bg-page px-5 py-8 text-neutral-950 transition-colors duration-chrome ease-motion sm:min-h-[240px] sm:px-6 sm:py-9 md:min-h-[280px] md:px-10 lg:px-12 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""}`}
            >
              <div className="flex items-start justify-between gap-8">
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] underline decoration-neutral-950/60 underline-offset-4 transition-colors duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-navy [@media(hover:hover)_and_(pointer:fine)]:group-hover:decoration-navy/45 md:text-2xl">
                  {point.title}
                </h3>
                <span className="mt-1 flex h-9 w-9 items-center justify-center text-neutral-950 transition-colors duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-navy">
                  <ArrowUpRightIcon />
                </span>
              </div>

              <p className="mt-auto max-w-2xl pt-5 text-fluid-body leading-[1.7] tracking-tight text-neutral-700 sm:pt-16">
                {point.description}
              </p>
            </Link>
          ))}

          <Link
            href="/#contact-form"
            className="tap-press group relative col-span-1 flex min-h-24 items-center justify-between border-t border-neutral-200 bg-gradient-to-r from-navy-mid via-[#16457f] to-navy-mid px-6 py-7 text-xl font-semibold tracking-[-0.045em] text-white transition-opacity duration-chrome ease-motion md:col-span-2 md:px-10 lg:px-12 [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90"
          >
            <span>Start a Project</span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
