import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import { SITE_EMAIL } from "@/lib/site";

const companyLinks = [
  { label: "About Sofnology", href: "/company" },
  { label: "How We Work", href: "/how-we-work" },
];

const serviceLinks = [
  { label: "Software Development", href: "/services/software-development" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile App Development", href: "/services/mobile-development" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "VoIP & Communication Systems", href: "/services/voip-communication" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
];

const industryLinks = [
  { label: "Healthcare", href: "/industries/healthtech" },
  { label: "Fintech", href: "/industries/fintech" },
  { label: "E-commerce", href: "/industries/ecommerce" },
  { label: "Education", href: "/industries/edtech" },
  { label: "Professional Services", href: "/industries/professional-services" },
  { label: "Telecom", href: "/industries/telecom" },
  { label: "Technology & SaaS", href: "/industries/technology-saas" },
];

const workLinks = [
  { label: "All work", href: "/work" },
  { label: "Featured Work", href: "/work/featured" },
  { label: "AI & Automation", href: "/work/ai" },
  { label: "Mobile", href: "/work/mobile" },
  { label: "VoIP", href: "/work/voip" },
  { label: "Digital Marketing", href: "/work/growth" },
];

const supportLinks = [
  { label: "Start a Project", href: "/#contact-form" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

const footerColumns = [
  {
    title: "Company",
    links: companyLinks,
  },
  {
    title: "Services",
    links: serviceLinks,
  },
  {
    title: "Industries",
    links: industryLinks,
  },
  {
    title: "Work",
    links: workLinks,
  },
  {
    title: "Engage",
    links: supportLinks,
  },
  {
    title: "Legal",
    links: legalLinks,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#202123] text-white">
      <div className="mx-auto max-w-[1440px] border-x border-white/10">
        <div className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-3 md:px-10 lg:px-8 xl:px-12">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-white/70">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center text-[14px] leading-snug tracking-[-0.02em] text-white/82 transition-colors duration-press ease-motion hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:col-span-3 md:grid-cols-2">
              <div>
                <h3 className="text-[12px] font-semibold tracking-[-0.01em] text-white/70">
                  Contact
                </h3>
                <div className="mt-5 space-y-3 text-[14px] leading-relaxed tracking-[-0.02em] text-white/82">
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="block min-h-11 py-1 break-all transition-colors hover:text-white"
                  >
                    {SITE_EMAIL}
                  </a>
                  <Link
                    href="/#contact-form"
                    className="flex min-h-11 items-center transition-colors hover:text-white"
                  >
                    Start a Project
                  </Link>
                  <p>Remote-first delivery</p>
                </div>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold tracking-[-0.01em] text-white/70">
                  Offices
                </h3>
                <div className="mt-5 space-y-3 text-[14px] leading-relaxed tracking-[-0.02em] text-white/82">
                  <p>Global delivery desk</p>
                  <p>Dhaka, Bangladesh</p>
                  <p>Serving clients worldwide</p>
                </div>
              </div>

            </div>
          </div>

          <div className="border-t border-white/10 px-6 py-12 md:px-10 lg:border-t-0 lg:border-l lg:px-8 xl:px-10">
            <h3 className="max-w-sm text-[18px] leading-[1.35] font-semibold tracking-[-0.04em] text-white">
              Software, voice, and digital marketing, under one company.
            </h3>
            <p className="mt-5 max-w-md text-[13px] leading-relaxed tracking-[-0.01em] text-white/75">
              Sofnology takes on the system you already run: the software, the
              calls, the repeat work, and the digital marketing that should match them.
            </p>
            <Link
              href="/#contact-form"
              className="tap-press mt-9 flex min-h-14 items-center justify-between bg-page px-5 text-[14px] font-semibold tracking-[-0.02em] text-navy transition-colors duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white"
            >
              <span>Start a Project</span>
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px]">
          <div className="flex min-h-40 items-end px-6 py-9 md:px-10 lg:px-8 xl:px-12">
            <Image
              src="/logo-new.png"
              alt="Sofnology Solutions"
              width={520}
              height={120}
              className="h-auto w-full max-w-[420px] brightness-0 invert"
            />
          </div>

          <div className="flex flex-col justify-end border-t border-white/10 px-6 py-9 text-[12px] leading-relaxed tracking-[-0.01em] text-white/75 md:px-10 lg:border-t-0 lg:border-l lg:px-8 xl:px-10">
            <p>&copy; 2026 Sofnology Solutions. All rights reserved.</p>
            <Link href="/privacy" className="mt-2 flex min-h-11 w-fit items-center transition-colors duration-press ease-motion hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="flex min-h-11 w-fit items-center transition-colors duration-press ease-motion hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
