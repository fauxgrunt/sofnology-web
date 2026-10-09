import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_EMAIL } from "@/lib/site";

export function LegalEmail() {
  return (
    <a href={`mailto:${SITE_EMAIL}`} className="text-navy underline decoration-navy/40 underline-offset-2">
      {SITE_EMAIL}
    </a>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-[1.15rem] leading-snug font-semibold tracking-[-0.03em] text-neutral-950">
        {title}
      </h2>
      <div className="mt-3 space-y-4 text-[16px] leading-[1.75] text-neutral-800">{children}</div>
    </section>
  );
}

export default function LegalDocument({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-page">
        <article className="mx-auto max-w-[760px] px-5 py-14 sm:px-6 sm:py-16 md:py-20">
          <h1 className="text-[2rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-[14px] tracking-[-0.01em] text-neutral-600">Last updated {updated}</p>
          <p className="mt-8 text-[16px] leading-[1.75] text-neutral-800">{intro}</p>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
