import Link from "next/link";
import { InteriorPage, StackedHero } from "@/components/interior";
import { brand } from "@/lib/theme";

const groups = [
  {
    title: "Languages",
    items: ["PHP", "Python", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Responsive interfaces", "Dashboards", "Admin panels"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "Authentication", "Webhooks"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "iOS", "Android"],
  },
  {
    title: "AI",
    items: ["Voice AI", "Speech-to-text", "Text-to-speech", "Tool calling"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MariaDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Linux", "Docker", "Nginx", "Apache", "CI/CD", "SSL/TLS"],
  },
  {
    title: "Communication / VoIP",
    items: ["Asterisk", "FreePBX", "VICIdial", "Issabel", "SIP", "PJSIP", "WebRTC"],
  },
  {
    title: "Marketing & Analytics",
    items: ["Google Ads", "Google Analytics", "Google Tag Manager", "Search Console"],
  },
];

export default function TechnologiesPage() {
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
          image="/technologies-hero.jpg"
          imageAlt="Engineering workspace"
          imageClass="object-cover object-center"
          title="All technologies"
          lede="A directory of technologies Sofnology delivers directly or with an established partner. It is not a catalogue filled in for appearance."
          eyebrow="Engineering capabilities"
          eyebrowColor={brand.accent}
          ctaLabel="Discuss your project"
          ctaHref="#contact-form"
          ctaBackground={brand.navy}
        />
      }
    >
      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
          {groups.map((group) => (
            <div key={group.title} className="grid grid-cols-1 border-b border-neutral-200 last:border-b-0 lg:grid-cols-[0.32fr_0.68fr]">
              <h2 className="border-b border-neutral-200 px-5 py-8 text-xl font-semibold tracking-[-0.04em] text-neutral-950 sm:px-6 md:px-10 lg:border-r lg:border-b-0 lg:px-16">
                {group.title}
              </h2>
              <ul className="flex flex-wrap gap-2 px-5 py-8 sm:px-6 md:px-10 lg:px-16">
                {group.items.map((item) => (
                  <li key={item} className="bg-white px-3 py-2 text-[14px] font-semibold text-neutral-800 ring-1 ring-neutral-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="px-5 py-8 sm:px-6 md:px-10 lg:px-16">
            <Link href="/services/software-development" className="text-[15px] font-semibold text-navy underline underline-offset-4">
              Back to software development
            </Link>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
