import type { Metadata } from "next";
import { plusJakarta } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofnology Solutions | Enterprise Software & Automation Systems",
  description:
    "Sofnology builds technically flawless digital products, custom enterprise platforms, and automated workflows that eliminate operational friction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        {/* Closest free stand-in for Vention's Aeonik Pro (commercial) */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
