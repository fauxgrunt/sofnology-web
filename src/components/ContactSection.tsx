"use client";

import { useState } from "react";

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 14L14 6M14 6H7M14 6V13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M10 14V4M10 4L6.5 7.5M10 4l3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 14v1.5A1.5 1.5 0 005.5 17h9a1.5 1.5 0 001.5-1.5V14" strokeLinecap="round" />
    </svg>
  );
}

const inputClass =
  "w-full bg-transparent px-6 py-5 text-[14px] tracking-tight text-neutral-950 outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:bg-white/55 md:px-8";

type ContactSectionProps = {
  showIntro?: boolean;
  accent?:
    | "navy"
    | "lime"
    | "teal"
    | "amber"
    | "blue"
    | "emerald"
    | "coral"
    | "gold"
    | "magenta"
    | "orange"
    | "wine"
    | "slate"
    | "cyan"
    | "sky"
    | "steel"
    | "moss"
    | "clinic"
    | "hotpink"
    | "mint";
};

export default function ContactSection({
  showIntro = true,
  accent = "navy",
}: ContactSectionProps) {
  const [selectedFileName, setSelectedFileName] = useState("");

  const sendButtonClass =
    accent === "lime"
      ? "bg-[#C7FF3D] text-[#101413] hover:opacity-95"
      : accent === "teal"
        ? "bg-[#5EEAD4] text-[#101413] hover:opacity-95"
        : accent === "amber"
          ? "bg-[#E8A317] text-[#101413] hover:opacity-95"
          : accent === "blue"
            ? "bg-[#2F6BFF] text-white hover:opacity-95"
            : accent === "emerald"
              ? "bg-[#10B981] text-[#111827] hover:opacity-95"
              : accent === "coral"
                ? "bg-[#FF5A5F] text-white hover:opacity-95"
                : accent === "gold"
                  ? "bg-[#C9A227] text-[#1A1C1F] hover:opacity-95"
                  : accent === "magenta"
                    ? "bg-[#FF2D6A] text-white hover:opacity-95"
                    : accent === "orange"
                      ? "bg-[#FF6A00] text-[#1A1512] hover:opacity-95"
                      : accent === "wine"
                        ? "bg-[#8B1E3F] text-white hover:opacity-95"
                        : accent === "slate"
                          ? "bg-[#3D4F5F] text-white hover:opacity-95"
                          : accent === "cyan"
                            ? "bg-[#2EE6D6] text-[#12141A] hover:opacity-95"
                            : accent === "sky"
                              ? "bg-[#0EA5E9] text-[#0C4A6E] hover:opacity-95"
                              : accent === "steel"
                                ? "bg-[#6FA8DC] text-[#243B55] hover:opacity-95"
                                : accent === "moss"
                                  ? "bg-[#74C69D] text-[#1B4332] hover:opacity-95"
                                  : accent === "clinic"
                                    ? "bg-[#B8F25A] text-[#0B3D2E] hover:opacity-95"
                                    : accent === "hotpink"
                                      ? "bg-[#FF2D8A] text-white hover:opacity-95"
                                      : accent === "mint"
                                        ? "bg-[#7DDBA3] text-[#12241C] hover:opacity-95"
                                        : "bg-gradient-to-br from-[#0b2a5b] via-[#16457f] to-[#061a3a] text-white hover:opacity-95";

  const sendButtonMobileClass =
    accent === "lime"
      ? "bg-[#C7FF3D] text-[#101413]"
      : accent === "teal"
        ? "bg-[#5EEAD4] text-[#101413]"
        : accent === "amber"
          ? "bg-[#E8A317] text-[#101413]"
          : accent === "blue"
            ? "bg-[#2F6BFF] text-white"
            : accent === "emerald"
              ? "bg-[#10B981] text-[#111827]"
              : accent === "coral"
                ? "bg-[#FF5A5F] text-white"
                : accent === "gold"
                  ? "bg-[#C9A227] text-[#1A1C1F]"
                  : accent === "magenta"
                    ? "bg-[#FF2D6A] text-white"
                    : accent === "orange"
                      ? "bg-[#FF6A00] text-[#1A1512]"
                      : accent === "wine"
                        ? "bg-[#8B1E3F] text-white"
                        : accent === "slate"
                          ? "bg-[#3D4F5F] text-white"
                          : accent === "cyan"
                            ? "bg-[#2EE6D6] text-[#12141A]"
                            : accent === "sky"
                              ? "bg-[#0EA5E9] text-[#0C4A6E]"
                              : accent === "steel"
                                ? "bg-[#6FA8DC] text-[#243B55]"
                                : accent === "moss"
                                  ? "bg-[#74C69D] text-[#1B4332]"
                                  : accent === "clinic"
                                    ? "bg-[#B8F25A] text-[#0B3D2E]"
                                    : accent === "hotpink"
                                      ? "bg-[#FF2D8A] text-white"
                                      : accent === "mint"
                                        ? "bg-[#7DDBA3] text-[#12241C]"
                                        : "bg-gradient-to-r from-[#0b2a5b] via-[#16457f] to-[#061a3a] text-white";

  return (
    <section id="contact" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        {showIntro && (
          <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden border-b border-neutral-200 lg:border-r lg:border-b-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Conversation.jpg"
                alt="Sofnology team in a client conversation"
                className="absolute inset-0 h-full w-full object-cover"
                decoding="async"
              />
              <div className="absolute inset-0 bg-white/5" />
            </div>

            <div className="relative flex min-h-[420px] items-center overflow-hidden bg-[#101722] px-6 py-12 text-white md:px-10 lg:px-16">
              <div className="absolute inset-0 bg-gradient-to-r from-[#061a3a]/70 via-[#101722]/80 to-[#101722]" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
                  You already have enough to manage. Your digital systems should not add
                  to it.
                </h2>
                <p className="mt-6 max-w-xl text-[15px] leading-[1.7] tracking-tight text-white/75">
                  Get the right software, the right marketing systems, and the right
                  operational clarity in one coordinated partnership built to support
                  business growth.
                </p>

                <a
                  href="#contact-form"
                  className="group relative mt-12 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden bg-gradient-to-r from-[#0b2a5b] via-[#16457f] to-[#0b2a5b] px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-white md:px-8"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                  />
                  <span className="relative z-10">Start a conversation</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}

        <form
          id="contact-form"
          className="grid grid-cols-1 lg:grid-cols-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:col-span-3 lg:border-r lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Contact us
            </h2>
          </div>

          <div className="hidden border-b border-neutral-200 lg:block" />

          <div className="grid grid-cols-1 border-b border-neutral-200 lg:col-span-3 lg:grid-cols-2">
            <div className="border-b border-neutral-200 lg:border-r lg:border-b-0">
              <label className="sr-only" htmlFor="full-name">
                Full name
              </label>
              <input id="full-name" name="fullName" className={inputClass} placeholder="Full name *" />
            </div>
            <div>
              <label className="sr-only" htmlFor="work-email">
                Work email
              </label>
              <input
                id="work-email"
                name="workEmail"
                type="email"
                className={inputClass}
                placeholder="Work email *"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`group row-span-3 hidden items-center justify-center overflow-hidden text-xl font-semibold tracking-[-0.04em] transition-opacity duration-300 lg:flex ${sendButtonClass}`}
          >
            <span className="transition-transform duration-300 group-hover:scale-[1.03]">Send</span>
          </button>

          <div className="grid grid-cols-1 border-b border-neutral-200 lg:col-span-3 lg:grid-cols-2">
            <div className="border-b border-neutral-200 lg:border-r lg:border-b-0">
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input id="phone" name="phone" className={inputClass} placeholder="Phone (optional)" />
            </div>
            <label className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 transition-colors duration-200 hover:bg-white/45 focus-within:bg-white/55 md:px-8">
              <input
                type="file"
                name="attachment"
                className="sr-only"
                onChange={(event) => {
                  setSelectedFileName(event.target.files?.[0]?.name ?? "");
                }}
              />
              <span className="text-[14px] tracking-tight text-neutral-500">
                {selectedFileName || "Upload file (optional, max 30MB)"}
              </span>
              <UploadIcon />
            </label>
          </div>

          <div className="grid grid-cols-1 border-b border-neutral-200 lg:col-span-3 lg:grid-cols-2">
            <div className="border-b border-neutral-200 lg:border-r lg:border-b-0">
              <label className="sr-only" htmlFor="company-website">
                Company website
              </label>
              <input
                id="company-website"
                name="companyWebsite"
                className={inputClass}
                placeholder="Company website"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="project-type">
                Project type
              </label>
              <select
                id="project-type"
                name="projectType"
                className={`${inputClass} appearance-none text-neutral-500`}
                defaultValue=""
              >
                <option value="" disabled>
                  Project type
                </option>
                <option>Custom software</option>
                <option>Digital marketing</option>
                <option>Automation and workflows</option>
                <option>Cloud and infrastructure</option>
                <option>Mobile app development</option>
                <option>Web development</option>
                <option>Frontend development</option>
                <option>Backend development</option>
                <option>Fintech</option>
                <option>Ecommerce</option>
                <option>Foodtech</option>
                <option>Automotive</option>
                <option>Proptech</option>
                <option>Healthtech</option>
                <option>Adtech</option>
                <option>Edtech</option>
                <option>Cybersecurity</option>
                <option>DevOps</option>
                <option>Quality assurance</option>
                <option>Cloud consulting</option>
                <option>All technologies</option>
                <option>Dedicated teams</option>
                <option>Staff augmentation</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="border-b border-neutral-200 lg:col-span-3">
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="min-h-[190px] w-full resize-none bg-transparent px-6 py-6 text-[14px] tracking-tight text-neutral-950 outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:bg-white/55 md:px-8"
              placeholder="How can we help you? *"
            />
            <div className="px-6 pb-4 text-right text-[11px] text-neutral-500 md:px-8">0 / 2048</div>
          </div>

          <button
            type="submit"
            className={`flex min-h-24 items-center justify-center text-xl font-semibold tracking-[-0.04em] lg:hidden ${sendButtonMobileClass}`}
          >
            Send
          </button>

          <div className="lg:col-span-4 px-6 py-5 md:px-8 lg:px-16">
            <label className="flex items-start gap-3 text-[12px] leading-relaxed tracking-tight text-neutral-600">
              <input type="checkbox" className="mt-1 h-3.5 w-3.5 border-neutral-300" />
              <span>
                I agree to be contacted by Sofnology about this request and understand
                that project details will be reviewed before any formal proposal is
                prepared.
              </span>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
