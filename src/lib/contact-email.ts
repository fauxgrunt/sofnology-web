import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function greetingName(fullName: string) {
  const first = fullName.trim().split(/\s+/)[0] ?? "";
  return first || "there";
}

export function enquiryNotification(input: {
  fullName: string;
  body: string;
}) {
  return {
    subject: `Sofnology enquiry from ${input.fullName}`,
    text: input.body,
  };
}

export function enquiryAcknowledgement(input: { fullName: string }) {
  const name = greetingName(input.fullName);
  const safeName = escapeHtml(name);

  const text = [
    `Hi ${name},`,
    "",
    "Thank you for writing to Sofnology. We have received your enquiry.",
    "A teammate will review it and reach out soon.",
    "",
    "If you need to add anything, reply to this email.",
    "",
    SITE_NAME,
    SITE_EMAIL,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f4f4f4;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border:1px solid #e5e5e5;">
            <tr>
              <td style="padding:28px 32px 8px;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#061a3a;">
                ${escapeHtml(SITE_NAME)}
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 0;font-size:22px;line-height:1.35;color:#111111;">
                Hi ${safeName},
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 8px;font-size:16px;line-height:1.65;color:#333333;">
                Thank you for writing to Sofnology. We have received your enquiry.
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 8px;font-size:16px;line-height:1.65;color:#333333;">
                A teammate will review it and reach out soon.
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 28px;font-size:16px;line-height:1.65;color:#333333;">
                If you need to add anything, reply to this email.
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 32px;font-size:14px;line-height:1.6;color:#555555;border-top:1px solid #ececec;">
                <p style="margin:20px 0 0;">${escapeHtml(SITE_NAME)}</p>
                <p style="margin:4px 0 0;">
                  <a href="mailto:${SITE_EMAIL}" style="color:#061a3a;">${SITE_EMAIL}</a>
                </p>
                <p style="margin:4px 0 0;">
                  <a href="${SITE_URL}" style="color:#737373;text-decoration:none;">${SITE_URL.replace(/^https?:\/\//, "")}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return {
    subject: "We received your enquiry",
    text,
    html,
  };
}
