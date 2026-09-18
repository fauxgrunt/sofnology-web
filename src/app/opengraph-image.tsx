import { ImageResponse } from "next/og";
import { OG_IMAGE, OG_IMAGE_ALT, SITE_NAME, SITE_URL } from "@/lib/site";
import { brand } from "@/lib/theme";

export const alt = OG_IMAGE_ALT;
export const size = { width: OG_IMAGE.width, height: OG_IMAGE.height };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const host = new URL(SITE_URL).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: brand.navy,
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 56,
            height: 8,
            backgroundColor: brand.accent,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#ffffff",
              lineHeight: 1.05,
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.25,
              maxWidth: 920,
            }}
          >
            Custom software, automation, and digital systems
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            letterSpacing: "-0.02em",
            color: "#8eb4ff",
          }}
        >
          {host}
        </div>
      </div>
    ),
    { ...size },
  );
}
