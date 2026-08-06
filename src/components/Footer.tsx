import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

const companyLinks = [
  { label: "Who we are", href: "/company" },
  { label: "How we work", href: "/company/how-we-work" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "Software development", href: "/services/software-development" },
  { label: "Web development", href: "/services/web-development" },
  { label: "Mobile development", href: "/services/mobile-development" },
  { label: "Cloud consulting", href: "/services/cloud-consulting" },
  { label: "DevOps", href: "/services/devops" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "All technologies", href: "/services/technologies" },
];

const industryLinks = [
  { label: "Fintech", href: "/industries/fintech" },
  { label: "Ecommerce", href: "/industries/ecommerce" },
  { label: "Healthtech", href: "/industries/healthtech" },
  { label: "Foodtech", href: "/industries/foodtech" },
];

const supportLinks = [
  { label: "FAQ", href: "/#faq" },
  { label: "Example paths", href: "/#engagement-paths" },
  { label: "Startups", href: "/engagement/solutions-for-startups" },
  { label: "Enterprises", href: "/engagement/solutions-for-enterprises" },
  { label: "Book a discovery call", href: "/#contact" },
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
    title: "Engage",
    links: supportLinks,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#202123] text-white">
      <div className="mx-auto max-w-[1440px] border-x border-white/10">
        <div className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4 md:px-10 lg:px-8 xl:px-12">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-white/40">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-10 items-center text-[14px] leading-snug tracking-[-0.02em] text-white/82 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:col-span-4 md:grid-cols-3">
              <div>
                <h3 className="text-[12px] font-semibold tracking-[-0.01em] text-white/40">
                  Contact
                </h3>
                <div className="mt-5 space-y-3 text-[14px] leading-relaxed tracking-[-0.02em] text-white/82">
                  <a
                    href="mailto:hello@sofnology.com"
                    className="block transition-colors hover:text-white"
                  >
                    hello@sofnology.com
                  </a>
                  <Link
                    href="/#contact"
                    className="block transition-colors hover:text-white"
                  >
                    Book a discovery call
                  </Link>
                  <p>Remote-first delivery</p>
                </div>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold tracking-[-0.01em] text-white/40">
                  Offices
                </h3>
                <div className="mt-5 space-y-3 text-[14px] leading-relaxed tracking-[-0.02em] text-white/82">
                  <p>Global delivery desk</p>
                  <p>Dhaka, Bangladesh</p>
                  <p>Serving clients worldwide</p>
                </div>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold tracking-[-0.01em] text-white/40">
                  Connect
                </h3>
                <div className="mt-5 space-y-3 text-[14px] leading-relaxed tracking-[-0.02em] text-white/82">
                  <a
                    href="mailto:hello@sofnology.com"
                    className="block transition-colors hover:text-white"
                  >
                    Email the team
                  </a>
                  <Link
                    href="/#contact-form"
                    className="block transition-colors hover:text-white"
                  >
                    Send a project brief
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 px-6 py-12 md:px-10 lg:border-t-0 lg:border-l lg:px-8 xl:px-10">
            <h3 className="max-w-sm text-[18px] leading-[1.35] font-semibold tracking-[-0.04em] text-white">
              Build cleaner systems, sharper campaigns, and a digital operation that is
              easier to run.
            </h3>
            <p className="mt-5 max-w-md text-[13px] leading-relaxed tracking-[-0.01em] text-white/56">
              Sofnology connects software, automation, cloud, and digital marketing
              into one practical execution plan for growing businesses.
            </p>
            <Link
              href="/#contact"
              className="group mt-9 flex min-h-14 items-center justify-between bg-[#f4f4f4] px-5 text-[14px] font-semibold tracking-[-0.02em] text-[#061a3a] transition-colors duration-300 hover:bg-white tap-press"
            >
              <span>Book a discovery call</span>
              <span className="transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1 [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-1">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
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

          <div className="flex flex-col justify-end border-t border-white/10 px-6 py-9 text-[12px] leading-relaxed tracking-[-0.01em] text-white/58 md:px-10 lg:border-t-0 lg:border-l lg:px-8 xl:px-10">
            <p>&copy; {new Date().getFullYear()} Sofnology Solutions. All rights reserved.</p>
            <a
              href="mailto:hello@sofnology.com?subject=Privacy%20inquiry"
              className="mt-2 w-fit transition-colors duration-200 hover:text-white"
            >
              Privacy inquiries
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
