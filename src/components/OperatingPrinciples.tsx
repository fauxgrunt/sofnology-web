const principles = [
  {
    eyebrow: "01",
    title: "Senior-led delivery",
    description:
      "Experienced engineers define architecture, technical risks, and delivery checkpoints before build work begins.",
  },
  {
    eyebrow: "02",
    title: "Transparent milestones",
    description:
      "Scopes, weekly progress reviews, and decision logs keep teams aligned on what is moving, blocked, or changing.",
  },
  {
    eyebrow: "03",
    title: "Production-ready architecture",
    description:
      "We design for secure deployment, maintainable codebases, cloud readiness, and operational handover from day one.",
  },
  {
    eyebrow: "04",
    title: "Automation-first thinking",
    description:
      "We identify repeatable bottlenecks and build systems that reduce manual effort without adding unnecessary complexity.",
  },
];

export default function OperatingPrinciples() {
  return (
    <section id="operating-principles" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-2">
          <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:border-r lg:border-b-0 lg:px-16">
            <p className="text-[15px] font-semibold tracking-[-0.02em] text-[#061a3a]">
              How we keep work under control
            </p>
            <h2 className="mt-6 max-w-xl text-4xl leading-[1.05] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Operating principles
            </h2>
          </div>

          <div className="flex items-end px-6 py-14 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              For a growing agency, trust should come from how the work is run. We
              use clear ownership, visible progress, and production-minded decisions
              to keep every engagement grounded.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className={`flex min-h-[300px] flex-col border-neutral-200 px-6 py-10 md:px-10 lg:px-8 xl:px-10 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 0 ? "lg:border-l" : ""} ${
                index > 1 ? "border-t lg:border-t-0" : index > 0 ? "md:border-t-0" : ""
              }`}
            >
              <span className="text-[11px] font-bold tracking-wider text-[#061a3a] uppercase">
                {principle.eyebrow}
              </span>
              <div className="mt-auto">
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {principle.title}
                </h3>
                <p className="mt-5 text-[14px] leading-[1.7] tracking-tight text-neutral-700">
                  {principle.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 border-t border-neutral-200 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-neutral-200 bg-[#061a3a] px-6 py-10 text-white md:px-10 lg:border-r lg:border-b-0 lg:px-12">
            <p className="text-[12px] font-semibold tracking-[0.18em] text-white/55 uppercase">
              Senior-led execution
            </p>
            <h3 className="mt-8 max-w-md text-3xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-4xl">
              The people defining the work stay close to the work.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-b border-neutral-200 px-6 py-10 md:border-r md:border-b-0 md:px-10 lg:px-12">
              <p className="text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                Sofnology is built around senior technical judgment early in the
                engagement, so architecture, scope, risk, and maintainability are not
                treated as afterthoughts once production pressure starts.
              </p>
            </div>

            <div className="px-6 py-10 md:px-10 lg:px-12">
              <p className="text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                That creates a cleaner client experience: fewer vague promises, clearer
                trade-offs, and practical handover decisions that help the business stay
                in control after delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
