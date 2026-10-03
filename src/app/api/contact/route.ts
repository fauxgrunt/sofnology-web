import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  CONTACT_MAX_FILE_BYTES,
  CONTACT_MAX_FILE_LABEL,
  CONTACT_MAX_MESSAGE,
} from "@/lib/contact";
import {
  enquiryAcknowledgement,
  enquiryNotification,
} from "@/lib/contact-email";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    let fullName = "";
    let workEmail = "";
    let phone = "";
    let companyWebsite = "";
    let projectType = "";
    let message = "";
    let consent = false;
    let attachmentName = "";
    let attachmentSize = 0;

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      fullName = String(form.get("fullName") ?? "").trim();
      workEmail = String(form.get("workEmail") ?? "").trim();
      phone = String(form.get("phone") ?? "").trim();
      companyWebsite = String(form.get("companyWebsite") ?? "").trim();
      projectType = String(form.get("projectType") ?? "").trim();
      message = String(form.get("message") ?? "").trim();
      consent = String(form.get("consent") ?? "") === "true";
      const file = form.get("attachment");
      if (file instanceof File && file.size > 0) {
        attachmentName = file.name;
        attachmentSize = file.size;
      }
    } else {
      const body = (await request.json()) as Record<string, unknown>;
      fullName = String(body.fullName ?? "").trim();
      workEmail = String(body.workEmail ?? "").trim();
      phone = String(body.phone ?? "").trim();
      companyWebsite = String(body.companyWebsite ?? "").trim();
      projectType = String(body.projectType ?? "").trim();
      message = String(body.message ?? "").trim();
      consent = Boolean(body.consent);
    }

    if (!fullName || !workEmail || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in your name, work email, and message." },
        { status: 400 },
      );
    }

    if (!isValidEmail(workEmail)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid work email." },
        { status: 400 },
      );
    }

    if (message.length > CONTACT_MAX_MESSAGE) {
      return NextResponse.json(
        { ok: false, error: `Message must be ${CONTACT_MAX_MESSAGE} characters or fewer.` },
        { status: 400 },
      );
    }

    if (!consent) {
      return NextResponse.json(
        { ok: false, error: "Please confirm you agree to be contacted." },
        { status: 400 },
      );
    }

    if (attachmentSize > CONTACT_MAX_FILE_BYTES) {
      return NextResponse.json(
        { ok: false, error: `Attachment must be ${CONTACT_MAX_FILE_LABEL} or smaller.` },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          error: `The form is not connected yet. Email ${SITE_EMAIL} directly.`,
        },
        { status: 503 },
      );
    }

    const lines = [
      `Name: ${fullName}`,
      `Work email: ${workEmail}`,
      phone ? `Phone: ${phone}` : null,
      companyWebsite ? `Website: ${companyWebsite}` : null,
      projectType ? `Project type: ${projectType}` : null,
      attachmentName
        ? `Attachment named: ${attachmentName} (${formatBytes(attachmentSize)}) — file was not forwarded; ask them to share a link if needed.`
        : null,
      "",
      message,
    ].filter((line): line is string => line !== null);

    const resend = new Resend(apiKey);
    const from =
      process.env.CONTACT_FROM_EMAIL ?? `${SITE_NAME} <onboarding@resend.dev>`;
    const notification = enquiryNotification({
      fullName,
      body: lines.join("\n"),
    });

    const { error } = await resend.emails.send({
      from,
      to: SITE_EMAIL,
      replyTo: workEmail,
      subject: notification.subject,
      text: notification.text,
    });

    if (error) {
      console.error("[contact] resend", error);
      return NextResponse.json(
        {
          ok: false,
          error: `Could not send the message. Email ${SITE_EMAIL} instead.`,
        },
        { status: 502 },
      );
    }

    const acknowledgement = enquiryAcknowledgement({ fullName });
    const { error: acknowledgementError } = await resend.emails.send({
      from,
      to: workEmail,
      replyTo: SITE_EMAIL,
      subject: acknowledgement.subject,
      text: acknowledgement.text,
      html: acknowledgement.html,
    });

    if (acknowledgementError) {
      console.error("[contact] acknowledgement", acknowledgementError);
    }

    return NextResponse.json({
      ok: true,
      acknowledged: !acknowledgementError,
      message: acknowledgementError
        ? "Thanks — your message was received. A Sofnology teammate will be in touch soon."
        : "Thanks — we received your enquiry and emailed you a confirmation. A teammate will be in touch soon.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
