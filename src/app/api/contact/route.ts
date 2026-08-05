import { NextResponse } from "next/server";

const MAX_MESSAGE = 2048;
const MAX_FILE_BYTES = 30 * 1024 * 1024;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
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

    if (message.length > MAX_MESSAGE) {
      return NextResponse.json(
        { ok: false, error: `Message must be ${MAX_MESSAGE} characters or fewer.` },
        { status: 400 },
      );
    }

    if (!consent) {
      return NextResponse.json(
        { ok: false, error: "Please confirm you agree to be contacted." },
        { status: 400 },
      );
    }

    if (attachmentSize > MAX_FILE_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Attachment must be 30MB or smaller." },
        { status: 400 },
      );
    }

    // Stub: accept and acknowledge. Wire to email/CRM when ready.
    console.info("[contact]", {
      fullName,
      workEmail,
      phone: phone || undefined,
      companyWebsite: companyWebsite || undefined,
      projectType: projectType || undefined,
      messageLength: message.length,
      attachmentName: attachmentName || undefined,
    });

    return NextResponse.json({
      ok: true,
      message:
        "Thanks — your message was received. A Sofnology teammate will follow up by email within one business day.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
