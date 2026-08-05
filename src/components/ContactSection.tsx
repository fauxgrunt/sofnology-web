"use client";

import Image from "next/image";
import { FormEvent, useId, useRef, useState } from "react";
import { ArrowUpRightIcon, UploadIcon } from "@/components/icons";
import {
  contactAccentClasses,
  type ContactAccent,
} from "@/lib/contact-accents";

const MAX_MESSAGE = 2048;
const MAX_FILE_BYTES = 30 * 1024 * 1024;

const inputClass =
  "w-full bg-transparent px-5 py-4 text-[16px] tracking-tight text-neutral-950 outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:bg-white/55 sm:px-6 sm:py-5 sm:text-[14px] md:px-8";

type ContactSectionProps = {
  showIntro?: boolean;
  accent?: ContactAccent;
};

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldKey = "fullName" | "workEmail" | "message" | "consent" | "attachment";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactSection({
  showIntro = true,
  accent = "navy",
}: ContactSectionProps) {
  const formId = useId();
  const statusId = `${formId}-status`;
  const fullNameRef = useRef<HTMLInputElement>(null);
  const workEmailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const { desktop: sendButtonClass, mobile: sendButtonMobileClass } =
    contactAccentClasses(accent);

  function validate(): Partial<Record<FieldKey, string>> {
    const errors: Partial<Record<FieldKey, string>> = {};
    if (!fullName.trim()) errors.fullName = "Please enter your full name.";
    if (!workEmail.trim()) errors.workEmail = "Please enter your work email.";
    else if (!isValidEmail(workEmail.trim())) {
      errors.workEmail = "Please enter a valid work email.";
    }
    if (!message.trim()) errors.message = "Please tell us how we can help.";
    else if (message.length > MAX_MESSAGE) {
      errors.message = `Message must be ${MAX_MESSAGE} characters or fewer.`;
    }
    if (selectedFile && selectedFile.size > MAX_FILE_BYTES) {
      errors.attachment = "Attachment must be 30MB or smaller.";
    }
    if (!consent) errors.consent = "Please confirm you agree to be contacted.";
    return errors;
  }

  function focusFirstError(errors: Partial<Record<FieldKey, string>>) {
    if (errors.fullName) fullNameRef.current?.focus();
    else if (errors.workEmail) workEmailRef.current?.focus();
    else if (errors.message) messageRef.current?.focus();
    else if (errors.consent) consentRef.current?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setStatusMessage(Object.values(errors)[0] ?? "Please fix the highlighted fields.");
      focusFirstError(errors);
      return;
    }

    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.set("fullName", fullName.trim());
      formData.set("workEmail", workEmail.trim());
      formData.set("phone", phone.trim());
      formData.set("companyWebsite", companyWebsite.trim());
      formData.set("projectType", projectType);
      formData.set("message", message.trim());
      formData.set("consent", "true");
      if (selectedFile) formData.set("attachment", selectedFile);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setStatusMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage(
        data.message ??
          "Thanks — your message was received. A Sofnology teammate will follow up by email within one business day.",
      );
      setFieldErrors({});
      setFullName("");
      setWorkEmail("");
      setPhone("");
      setCompanyWebsite("");
      setProjectType("");
      setMessage("");
      setConsent(false);
      setSelectedFile(null);
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  }

  const isSubmitting = status === "submitting";
  const charCount = message.length;

  return (
    <section id="contact" className="border-b border-neutral-200 bg-[#f4f4f4]" aria-labelledby={`${formId}-heading`}>
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        {showIntro && (
          <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-2">
            <div className="relative aspect-[16/11] min-h-0 overflow-hidden border-b border-neutral-200 sm:aspect-auto sm:min-h-[360px] lg:min-h-[420px] lg:border-r lg:border-b-0">
              <Image
                src="/Conversation.jpg"
                alt="Sofnology team in a client conversation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-white/5" />
            </div>

            <div className="relative flex min-h-0 items-center overflow-hidden bg-[#101722] px-5 py-10 text-white sm:min-h-[360px] sm:px-6 sm:py-12 md:px-10 lg:min-h-[420px] lg:px-16">
              <div className="absolute inset-0 bg-gradient-to-r from-[#061a3a]/70 via-[#101722]/80 to-[#101722]" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-fluid-display font-semibold tracking-[-0.045em]">
                  You already have enough to manage. Your digital systems should not add
                  to it.
                </h2>
                <p className="mt-5 max-w-xl text-fluid-body leading-[1.65] tracking-tight text-white/75 sm:mt-6 sm:leading-[1.7]">
                  Book a short discovery call. We will clarify the outcome, review the
                  current setup, and outline a practical next step — without a hard pitch.
                </p>

                <a
                  href="#contact-form"
                  className="tap-press group relative mt-8 flex min-h-14 w-full max-w-xl items-center justify-between overflow-hidden bg-gradient-to-r from-[#0b2a5b] via-[#16457f] to-[#0b2a5b] px-5 py-4 text-base font-semibold tracking-[-0.04em] text-white sm:mt-12 sm:min-h-20 sm:px-6 sm:py-6 sm:text-xl sm:tracking-[-0.045em] md:px-8"
                >
                  <span
                    aria-hidden="true"
                    className="cta-sheen pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                  />
                  <span className="relative z-10">Book a discovery call</span>
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
          onSubmit={handleSubmit}
          noValidate
          aria-describedby={statusMessage ? statusId : undefined}
        >
          <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:col-span-3 lg:border-r lg:px-16">
            <h2
              id={`${formId}-heading`}
              className="text-fluid-display font-semibold tracking-[-0.045em] text-neutral-950"
            >
              Contact us
            </h2>
            {statusMessage && (
              <p
                id={statusId}
                role="status"
                aria-live="polite"
                className={`mt-4 text-[14px] tracking-tight ${
                  status === "success" ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>

          <div className="hidden border-b border-neutral-200 lg:block" />

          <div className="grid grid-cols-1 border-b border-neutral-200 lg:col-span-3 lg:grid-cols-2">
            <div className="border-b border-neutral-200 lg:border-r lg:border-b-0">
              <label className="sr-only" htmlFor="full-name">
                Full name
              </label>
              <input
                ref={fullNameRef}
                id="full-name"
                name="fullName"
                className={inputClass}
                placeholder="Full name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="name"
                required
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.fullName)}
                aria-describedby={fieldErrors.fullName ? `${formId}-fullName-error` : undefined}
              />
              {fieldErrors.fullName && (
                <p id={`${formId}-fullName-error`} className="px-5 pb-3 text-[12px] text-red-700 sm:px-6 md:px-8">
                  {fieldErrors.fullName}
                </p>
              )}
            </div>
            <div>
              <label className="sr-only" htmlFor="work-email">
                Work email
              </label>
              <input
                ref={workEmailRef}
                id="work-email"
                name="workEmail"
                type="email"
                className={inputClass}
                placeholder="Work email *"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                autoComplete="email"
                required
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.workEmail)}
                aria-describedby={fieldErrors.workEmail ? `${formId}-workEmail-error` : undefined}
              />
              {fieldErrors.workEmail && (
                <p id={`${formId}-workEmail-error`} className="px-5 pb-3 text-[12px] text-red-700 sm:px-6 md:px-8">
                  {fieldErrors.workEmail}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`group row-span-3 hidden items-center justify-center overflow-hidden text-xl font-semibold tracking-[-0.04em] transition-opacity duration-300 lg:flex disabled:cursor-wait disabled:opacity-70 ${sendButtonClass}`}
          >
            <span className="transition-transform duration-300 group-hover:scale-[1.03]">
              {isSubmitting ? "Sending…" : "Send"}
            </span>
          </button>

          <div className="grid grid-cols-1 border-b border-neutral-200 lg:col-span-3 lg:grid-cols-2">
            <div className="border-b border-neutral-200 lg:border-r lg:border-b-0">
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                className={inputClass}
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                disabled={isSubmitting}
              />
            </div>
            <label className="flex min-h-12 cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-white/45 focus-within:bg-white/55 sm:px-6 sm:py-5 md:px-8">
              <input
                type="file"
                name="attachment"
                className="sr-only"
                disabled={isSubmitting}
                onChange={(event) => {
                  const file = event.target.files?.[0] ?? null;
                  setSelectedFile(file);
                  if (file && file.size > MAX_FILE_BYTES) {
                    setFieldErrors((prev) => ({
                      ...prev,
                      attachment: "Attachment must be 30MB or smaller.",
                    }));
                    setStatus("error");
                  } else {
                    setFieldErrors((prev) => {
                      const next = { ...prev };
                      delete next.attachment;
                      return next;
                    });
                  }
                }}
              />
              <span className="text-[14px] tracking-tight text-neutral-500">
                {selectedFile?.name || "Upload file (optional, max 30MB)"}
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
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                autoComplete="url"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="project-type">
                Project type
              </label>
              <select
                id="project-type"
                name="projectType"
                className={`${inputClass} appearance-none ${
                  projectType ? "text-neutral-950" : "text-neutral-500"
                }`}
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                disabled={isSubmitting}
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
              ref={messageRef}
              id="message"
              name="message"
              className="min-h-[160px] w-full resize-none bg-transparent px-5 py-5 text-[16px] tracking-tight text-neutral-950 outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:bg-white/55 sm:min-h-[190px] sm:px-6 sm:py-6 sm:text-[14px] md:px-8"
              placeholder="How can we help you? *"
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE))}
              maxLength={MAX_MESSAGE}
              required
              disabled={isSubmitting}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={`${formId}-message-count${fieldErrors.message ? ` ${formId}-message-error` : ""}`}
            />
            {fieldErrors.message && (
              <p id={`${formId}-message-error`} className="px-5 text-[12px] text-red-700 sm:px-6 md:px-8">
                {fieldErrors.message}
              </p>
            )}
            <div
              id={`${formId}-message-count`}
              className={`px-5 pb-4 text-right text-[11px] sm:px-6 md:px-8 ${
                charCount >= MAX_MESSAGE ? "text-red-600" : "text-neutral-500"
              }`}
            >
              {charCount} / {MAX_MESSAGE}
            </div>
          </div>

          {/* Consent before Send on mobile — desktop send stays in side column */}
          <div className="border-b border-neutral-200 px-5 py-5 sm:px-6 md:px-8 lg:col-span-4 lg:px-16">
            <label className="flex items-start gap-3 text-[12px] leading-relaxed tracking-tight text-neutral-600">
              <input
                ref={consentRef}
                type="checkbox"
                name="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 border-neutral-300"
                required
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.consent)}
                aria-describedby={fieldErrors.consent ? `${formId}-consent-error` : undefined}
              />
              <span>
                I agree to be contacted by Sofnology about this request and understand
                that project details will be reviewed before any formal proposal is
                prepared.
              </span>
            </label>
            {fieldErrors.consent && (
              <p id={`${formId}-consent-error`} className="mt-2 pl-8 text-[12px] text-red-700">
                {fieldErrors.consent}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`tap-press flex min-h-[3.5rem] items-center justify-center text-lg font-semibold tracking-[-0.04em] sm:min-h-24 sm:text-xl lg:hidden disabled:cursor-wait disabled:opacity-70 ${sendButtonMobileClass}`}
          >
            {isSubmitting ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
