const trustPoints = [
  {
    label: "Founder-led technical direction",
    detail: "Architecture, scope, and delivery decisions stay close to senior ownership.",
  },
  {
    label: "Software plus growth execution",
    detail: "Engineering, automation, cloud, and digital marketing stay connected.",
  },
  {
    label: "Clear handover and control",
    detail: "Documentation, access, and operational ownership are planned from day one.",
  },
];

export default function HeroTrustBridge() {
  return (
    <section className="border-b border-neutral-200 bg-[#061a3a] text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 border-x border-white/10 md:grid-cols-3">
        {trustPoints.map((point, index) => (
          <article
            key={point.label}
            className={`min-h-40 px-6 py-8 md:px-10 lg:px-12 ${
              index > 0 ? "border-t border-white/10 md:border-t-0 md:border-l" : ""
            }`}
          >
            <p className="text-[13px] font-semibold tracking-[-0.02em] text-white">
              {point.label}
            </p>
            <p className="mt-5 max-w-sm text-[13px] leading-[1.65] tracking-tight text-white/68">
              {point.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
