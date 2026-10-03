import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export type EnquiryDetails = {
  fullName: string;
  workEmail: string;
  phone?: string;
  companyWebsite?: string;
  projectType?: string;
  message: string;
  attachmentName?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function firstName(fullName: string) {
  const name = fullName.trim().split(/\s+/)[0];
  return name || "there";
}

function shell(body: string) {
  const siteLabel = escapeHtml(SITE_URL.replace(/^https?:\/\//, ""));
  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f4f4f4;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e5e5e5;font-family:Arial,Helvetica,sans-serif;">
            <tr>
              <td style="height:4px;background:#061a3a;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:28px 32px 0;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#061a3a;">
                ${escapeHtml(SITE_NAME)}
              </td>
            </tr>
            ${body}
            <tr>
              <td style="padding:8px 32px 28px;border-top:1px solid #ececec;font-size:13px;line-height:1.6;color:#737373;">
                <p style="margin:16px 0 0;color:#111111;">${escapeHtml(SITE_NAME)}</p>
                <p style="margin:2px 0 0;"><a href="mailto:${SITE_EMAIL}" style="color:#061a3a;">${SITE_EMAIL}</a></p>
                <p style="margin:2px 0 0;"><a href="${SITE_URL}" style="color:#737373;text-decoration:none;">${siteLabel}</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function field(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0 0;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#737373;">${escapeHtml(label)}</td>
  </tr>
  <tr>
    <td style="padding:2px 0 0;font-size:15px;line-height:1.5;color:#111111;">${escapeHtml(value)}</td>
  </tr>`;
}

export function enquiryNotification(input: EnquiryDetails) {
  const rows = [
    field("Name", input.fullName),
    field("Work email", input.workEmail),
    input.phone ? field("Phone", input.phone) : "",
    input.companyWebsite ? field("Company website", input.companyWebsite) : "",
    input.projectType ? field("Project type", input.projectType) : "",
    input.attachmentName ? field("Attachment", input.attachmentName) : "",
  ].join("");

  const text = [
    `New enquiry from ${input.fullName}`,
    "",
    `Name: ${input.fullName}`,
    `Work email: ${input.workEmail}`,
    input.phone ? `Phone: ${input.phone}` : null,
    input.companyWebsite ? `Company website: ${input.companyWebsite}` : null,
    input.projectType ? `Project type: ${input.projectType}` : null,
    input.attachmentName ? `Attachment: ${input.attachmentName}` : null,
    "",
    "Message:",
    input.message,
    "",
    `Reply to this email to write back to ${input.workEmail}.`,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const html = shell(`
            <tr>
              <td style="padding:18px 32px 0;font-size:22px;line-height:1.3;color:#111111;">
                New enquiry
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 0;font-size:15px;line-height:1.6;color:#333333;">
                ${escapeHtml(input.fullName)} sent a message through the website. Reply to this email to respond directly.
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 20px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 24px;">
                <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#737373;">Message</p>
                <p style="margin:0;font-size:15px;line-height:1.65;color:#111111;white-space:pre-wrap;">${escapeHtml(input.message)}</p>
              </td>
            </tr>`);

  return {
    subject: `New enquiry from ${input.fullName}`,
    text,
    html,
  };
}

export function enquiryAcknowledgement(input: { fullName: string }) {
  const name = firstName(input.fullName);

  const text = [
    `Hi ${name},`,
    "",
    "Thank you for contacting Sofnology Solutions. We have received your enquiry.",
    "",
    "A member of the team will review it and reply to you at this email address.",
    "",
    "If you would like to add anything, reply to this message.",
    "",
    SITE_NAME,
    SITE_EMAIL,
  ].join("\n");

  const html = shell(`
            <tr>
              <td style="padding:18px 32px 0;font-size:22px;line-height:1.3;color:#111111;">
                Hi ${escapeHtml(name)},
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 0;font-size:16px;line-height:1.65;color:#333333;">
                Thank you for contacting Sofnology Solutions. We have received your enquiry.
              </td>
            </tr>
            <tr>
              <td style="padding:12px 32px 0;font-size:16px;line-height:1.65;color:#333333;">
                A member of the team will review it and reply to you at this email address.
              </td>
            </tr>
            <tr>
              <td style="padding:12px 32px 28px;font-size:16px;line-height:1.65;color:#333333;">
                If you would like to add anything, reply to this message.
              </td>
            </tr>`);

  return {
    subject: "We received your enquiry",
    text,
    html,
  };
}
