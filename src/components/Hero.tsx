import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-neutral-200 bg-page text-neutral-900"
    >
      <div className="flex min-h-[calc(100svh-var(--nav-h)-env(safe-area-inset-top,0px))] flex-col lg:grid lg:grid-cols-2">
        <div className="flex shrink-0 flex-col justify-end border-b border-neutral-200 px-5 pt-8 pb-7 sm:px-6 sm:pt-10 sm:pb-8 md:px-12 lg:justify-center lg:border-r lg:border-b-0 lg:px-[clamp(2rem,5vw,6rem)] lg:py-14">
          <h1 className="text-fluid-hero max-w-[12ch] font-semibold tracking-[-0.05em] text-neutral-950">
            Clarity through technology
          </h1>
          <p className="mt-4 max-w-md text-[16px] leading-[1.55] text-neutral-700 sm:mt-5 sm:text-[17px] sm:leading-[1.6]">
            Software, voice and telephony, automation, and digital marketing for
            the work your team already runs.
          </p>
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="/#contact-form"
              className="tap-press inline-flex min-h-12 w-full items-center justify-center bg-navy px-5 text-[16px] font-semibold tracking-[-0.02em] text-white transition-opacity duration-chrome ease-motion sm:w-auto sm:min-h-[3.25rem] sm:justify-start sm:px-6 [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90"
            >
              Start a Project
            </Link>
            <Link
              href="/#expertise"
              className="tap-press inline-flex min-h-12 items-center text-[16px] font-semibold tracking-[-0.02em] text-navy underline decoration-navy/35 underline-offset-[5px]"
            >
              Explore services
            </Link>
          </div>
        </div>

        <div className="relative min-h-[42svh] flex-1 overflow-hidden bg-[#ececee] lg:min-h-0">
          <Image
            src="/hero-systems.jpg"
            alt="Connected software platforms and digital systems"
            fill
            priority
            quality={92}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
