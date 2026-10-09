import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    // Avoids SegmentViewNode devtools manifest errors on Windows dev server.
    devtoolSegmentExplorer: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/services/quality-assurance", destination: "/services/software-development", permanent: true },
      { source: "/services/cybersecurity", destination: "/services/cloud-devops", permanent: true },
      { source: "/services/cloud-consulting", destination: "/services/cloud-devops", permanent: true },
      { source: "/services/devops", destination: "/services/devops-infrastructure", permanent: true },
      { source: "/company/how-we-work", destination: "/how-we-work", permanent: false },
      { source: "/engagement/project-outsourcing", destination: "/how-we-work/project-based-delivery", permanent: true },
      { source: "/engagement/dedicated-teams", destination: "/how-we-work/dedicated-development-team", permanent: true },
      { source: "/engagement/staff-augmentation", destination: "/how-we-work/staff-augmentation", permanent: true },
      { source: "/engagement/solutions-for-startups", destination: "/how-we-work", permanent: false },
      { source: "/engagement/solutions-for-enterprises", destination: "/how-we-work", permanent: false },
      { source: "/engagement/solutions-for-ai-companies", destination: "/services/ai-automation", permanent: false },
      { source: "/work/multilingual-voice-assistant-audio", destination: "/work/ai-voice-business-automation", permanent: true },
      { source: "/work/asterisk-voip-engineering", destination: "/work/custom-pbx-contact-center", permanent: true },
      { source: "/work/vicidial-implementation", destination: "/work/custom-pbx-contact-center", permanent: true },
      { source: "/work/freepbx-troubleshooting", destination: "/work/freepbx-diagnosis", permanent: true },
      { source: "/work/yanming-digital-growth", destination: "/work/yanming-washer-repair", permanent: true },
      { source: "/work/fix-fensterreinigung-mobile-app", destination: "/work/fix-fensterreinigung", permanent: true },
    ];
  },
};

export default nextConfig;
