import type { Metadata, Viewport } from "next";
import { plusJakarta, satoshi } from "./fonts";
import "./globals.css";
import SkipToContent from "@/components/SkipToContent";
import NavigationProgress from "@/components/NavigationProgress";
import MotionProvider from "@/components/motion/MotionProvider";
import JsonLd from "@/components/JsonLd";
import { siteJsonLd } from "@/lib/json-ld";
import { DEFAULT_DESCRIPTION, OG_IMAGE, SITE_NAME, SITE_ROUTES, SITE_URL } from "@/lib/site";
import { brand } from "@/lib/theme";

const home = SITE_ROUTES.find((route) => route.path === "/")!;
const defaultTitle = `${home.title} | ${SITE_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: brand.page,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${satoshi.variable}`}>
      <head>
        <JsonLd data={siteJsonLd()} />
      </head>
      <body className="font-sans">
        <SkipToContent />
        <NavigationProgress />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
