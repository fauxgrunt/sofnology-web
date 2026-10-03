import Link from "next/link";

const industries = [
  { label: "Healthcare & Healthtech", href: "/industries/healthtech" },
  { label: "Financial Services & Fintech", href: "/industries/fintech" },
  { label: "Retail & E-commerce", href: "/industries/ecommerce" },
  { label: "Education & Associations", href: "/industries/edtech" },
  { label: "Professional & Field Services", href: "/industries/professional-services" },
  { label: "Telecom & Communications", href: "/industries/telecom" },
  { label: "Technology & SaaS", href: "/industries/technology-saas" },
  { label: "Manufacturing & Operations", href: "/industries/manufacturing" },
];

export default function IndustriesHome() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 md:px-10 lg:px-16">
          <h2 className="text-fluid-display font-semibold tracking-[-0.045em] text-neutral-950">Industries</h2>
          <p className="mt-4 max-w-3xl text-[16px] leading-[1.7] text-neutral-700">
            We build solutions for these industries. The pages describe the work, not a claim of decades in each field.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <li key={industry.href} className={index > 0 ? "border-t border-neutral-200 sm:border-neutral-200 lg:border-t-0" : ""}>
              <Link
                href={industry.href}
                className={`flex min-h-16 items-center px-5 text-[15px] font-semibold tracking-[-0.02em] text-neutral-950 sm:px-6 md:px-8 ${
                  index % 2 === 1 ? "sm:border-l sm:border-neutral-200" : ""
                } ${index % 4 !== 0 ? "lg:border-l lg:border-neutral-200" : ""} ${index > 3 ? "lg:border-t lg:border-neutral-200" : ""}`}
              >
                {industry.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
