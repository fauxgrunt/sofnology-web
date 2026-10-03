import type { InteriorContact, InteriorSticky } from "@/lib/interior";
import { brand } from "@/lib/theme";

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Start a Project",
  backgroundColor: brand.navy,
  textColor: "#ffffff",
  pastHeroPx: 280,
};

export const contact: InteriorContact = {
  showIntro: true,
  accent: "navy",
};

export type WorkArea = "software" | "mobile" | "ai" | "voip" | "web" | "growth" | "cloud";

export type WorkItem = {
  slug: string;
  title: string;
  cardTitle: string;
  category: string;
  area: WorkArea;
  featured?: boolean;
  summary: string;
  industry: string;
  services: string[];
  platforms: string[];
  technologies: string[];
  challenge: string;
  built: string;
  capabilities: Array<{ title: string; description: string }>;
  approach: string;
  scope: string;
  value: string;
  image?: string;
  imageAlt: string;
  note?: string;
  relatedServices: Array<{ title: string; href: string }>;
};

export const areaFilters: Array<{ id: "all" | "featured" | WorkArea; label: string }> = [
  { id: "all", label: "All work" },
  { id: "featured", label: "Featured" },
  { id: "software", label: "Software & platforms" },
  { id: "mobile", label: "Mobile applications" },
  { id: "ai", label: "AI & automation" },
  { id: "voip", label: "VoIP & communications" },
  { id: "web", label: "Web & digital" },
  { id: "growth", label: "Digital growth" },
  { id: "cloud", label: "Cloud & infrastructure" },
];

export const workItems: WorkItem[] = [
  {
    slug: "ai-voice-business-automation",
    title: "AI voice assistant and business automation",
    cardTitle: "AI voice and business automation",
    category: "AI",
    area: "ai",
    featured: true,
    summary:
      "Multilingual voice-assistant audio restored across synthesis, SIP trunks, and local IP telephony.",
    industry: "Communications",
    services: ["AI & Automation", "VoIP & Communication Systems"],
    platforms: ["Voice assistant", "SIP", "IP telephony"],
    technologies: ["AI", "Automation", "APIs", "Voice"],
    challenge:
      "A multilingual voice assistant could place calls, but speech quality broke down across languages and hops. Synthesis, the SIP trunk, and the local IP path were not behaving as one system.",
    built:
      "A repaired media path from text-to-speech through the SIP trunk into the local PBX, with codec, packet, and routing settings tightened so the voice stayed intelligible on real handsets.",
    capabilities: [
      { title: "Voice path diagnosis", description: "Traced where speech degraded between synthesis and the handset." },
      { title: "SIP and PBX alignment", description: "Treated the trunk and the local phone system as one call path." },
      { title: "Language-aware audio", description: "Checked the failure across the languages the assistant actually spoke." },
    ],
    approach:
      "The work stayed on the live media path. No new product was invented around the assistant, and no quality score was published without a measured record.",
    scope:
      "Sofnology handled diagnosis and repair of the voice path: TTS, SIP trunking, and local IP telephony settings.",
    value:
      "The voice path was restored. The existing stack stayed in place.",
    image: "/Portfolio/1.jpg",
    imageAlt: "Studio still life of an IP phone, headset, glass signal panes, and a laptop",
    relatedServices: [
      { title: "AI & Automation", href: "/services/ai-automation" },
      { title: "VoIP & Communication Systems", href: "/services/voip-communication" },
    ],
  },
  {
    slug: "fix-fensterreinigung-mobile-app",
    title: "Fix-Fensterreinigung mobile app",
    cardTitle: "Fix-Fensterreinigung mobile app",
    category: "Mobile",
    area: "mobile",
    featured: true,
    summary: "iOS and Android field-service app from a shared Flutter codebase, backed by PHP and MySQL.",
    industry: "Professional & field services",
    services: ["Mobile App Development"],
    platforms: ["iOS", "Android"],
    technologies: ["Flutter", "iOS", "Android", "PHP", "MySQL"],
    challenge:
      "A field-service business needed a mobile tool its teams could use on both iPhone and Android without two separate codebases.",
    built:
      "A cross-platform application for day-to-day field work, connected to a PHP and MySQL backend.",
    capabilities: [
      { title: "Shared mobile codebase", description: "Flutter delivery for iOS and Android." },
      { title: "Business-system connection", description: "The app talks to the operational backend rather than sitting apart from it." },
      { title: "Store release support", description: "Publishing and release work for the Apple and Google stores." },
    ],
    approach:
      "One Flutter codebase, with native store requirements handled at release time. No usage or revenue figures are published here.",
    scope:
      "Mobile application delivery for Fix-Fensterreinigung: Flutter, iOS, Android, and the PHP/MySQL connection.",
    value:
      "The business has a mobile app its field teams can run on both major phone platforms.",
    imageAlt: "Fix-Fensterreinigung mobile app",
    relatedServices: [
      { title: "Mobile App Development", href: "/services/mobile-development" },
      { title: "Mobile & Cross-Platform", href: "/services/mobile-cross-platform" },
    ],
  },
  {
    slug: "custom-pbx-contact-center",
    title: "Custom PBX and contact center platform",
    cardTitle: "Custom PBX and contact center",
    category: "VoIP",
    area: "voip",
    featured: true,
    summary:
      "Contact-center platform stood up on Asterisk: campaigns, agent flow, training, and early live support.",
    industry: "Telecom & communications",
    services: ["VoIP & Communication Systems"],
    platforms: ["PBX", "Contact center", "SIP"],
    technologies: ["Asterisk", "SIP", "Call center", "API"],
    challenge:
      "The organisation needed a contact-center environment stood up properly, not a tweak on a dialer that was already drifting.",
    built:
      "A working contact-center platform with campaign setup, agent flow, bottleneck checks, operator training, and support through the first live period.",
    capabilities: [
      { title: "Platform implementation", description: "Install and configuration of the contact-center stack." },
      { title: "Campaign and agent flow", description: "Routing and campaign shape the operators could actually run." },
      { title: "Handover", description: "Training and early post-go-live support so the system did not stall." },
    ],
    approach:
      "Asterisk-based contact-center engineering, with SIP and the operational API surface treated as part of the same system. The client is not named.",
    scope:
      "Implementation, campaign setup, load checks, admin training, and early live support.",
    value:
      "The contact center was running, and the operators had a path to keep it that way.",
    image: "/Portfolio/7.jpg",
    imageAlt: "Studio still life of a dialer core with a lead hopper feeding in and agent stations fanning out",
    relatedServices: [
      { title: "VoIP & Communication Systems", href: "/services/voip-communication" },
      { title: "VoIP & Contact Center Platforms", href: "/services/platforms/voip" },
    ],
  },
  {
    slug: "yanming-digital-growth",
    title: "Yanming washer repair — selected delivery experience",
    cardTitle: "Yanming digital growth",
    category: "Digital growth",
    area: "growth",
    featured: true,
    summary:
      "Website and paid-search work delivered by members of the Sofnology team.",
    industry: "Professional & field services",
    services: ["Digital Marketing", "Web Development"],
    platforms: ["Google Ads", "Website"],
    technologies: ["Google Ads", "SEO", "GTM", "Website optimization"],
    challenge:
      "A local service business needed its website and paid search to work as one acquisition system, not as separate campaigns and pages.",
    built:
      "Website and landing-page improvements connected to Google Ads, SEO, and conversion tracking through Google Tag Manager.",
    capabilities: [
      { title: "Paid search", description: "Campaign structure around the services people actually search for." },
      { title: "Tracking", description: "Tag Manager and conversion events so enquiries can be seen." },
      { title: "Page improvements", description: "Website changes aimed at the same enquiries the ads were buying." },
    ],
    approach:
      "Selected delivery experience. This is work delivered by members of the Sofnology team. It is not published as a Sofnology client until the engagement is formally confirmed and permission to use the brand is received.",
    scope:
      "Website optimisation, paid search, SEO, and conversion tracking. No performance numbers are stated.",
    value:
      "The site and the paid-search setup were brought into one measurable acquisition path.",
    note:
      "Selected delivery experience. Not published as a Sofnology client until engagement and brand permission are confirmed.",
    imageAlt: "Yanming washer repair digital growth",
    relatedServices: [
      { title: "Digital Marketing", href: "/services/digital-marketing" },
      { title: "Web Development", href: "/services/web-development" },
    ],
  },
  {
    slug: "napc-membership-website",
    title: "NAPC membership website",
    cardTitle: "NAPC membership website",
    category: "Web",
    area: "web",
    summary: "Membership website with forms and a digital platform for a professional association.",
    industry: "Education & associations",
    services: ["Web Development"],
    platforms: ["Membership website"],
    technologies: ["Web", "Membership", "Forms", "Digital platform"],
    challenge:
      "An association needed a public site that could also carry membership activity and forms, instead of a brochure with a separate back office.",
    built:
      "A membership website with the forms and platform pieces members and staff use to take part.",
    capabilities: [
      { title: "Public site", description: "A credible web presence for the organisation." },
      { title: "Membership", description: "A place for members rather than a static page." },
      { title: "Forms", description: "Structured submissions instead of unstructured email." },
    ],
    approach:
      "Described as the delivered platform. The association’s product is not claimed as Sofnology’s.",
    scope: "Website, membership, and forms for NAPC.",
    value: "Members and staff have one digital platform for the association’s public and membership activity.",
    imageAlt: "NAPC membership website",
    relatedServices: [{ title: "Web Development", href: "/services/web-development" }],
  },
  {
    slug: "voice-broadcasting-platform",
    title: "Voice broadcasting platform",
    cardTitle: "Voice broadcasting platform",
    category: "VoIP",
    area: "voip",
    summary: "Outbound calling for notifications, reminders, and campaigns, with reporting.",
    industry: "Telecom & communications",
    services: ["VoIP & Communication Systems"],
    platforms: ["Voice broadcasting", "Telephony"],
    technologies: ["Telephony", "Automation", "Reporting"],
    challenge:
      "Outbound messages were being handled as one-off calls instead of a system that could send notifications, reminders, and campaigns and then show what happened.",
    built:
      "An outbound voice platform for notifications, reminders, and campaigns, with operational reporting.",
    capabilities: [
      { title: "Outbound campaigns", description: "Calling lists and message flows rather than manual dialling." },
      { title: "Notifications and reminders", description: "The same platform used for operational messages, not only sales campaigns." },
      { title: "Reporting", description: "A view of what was attempted and what connected." },
    ],
    approach: "The client is not named. No volume or answer-rate figures are published.",
    scope: "Voice broadcasting platform: telephony, automation, and reporting.",
    value: "Outbound voice could be run as a repeatable operation.",
    image: "/Portfolio/2.jpg",
    imageAlt: "Studio still life of IP phones feeding a single calling path through glass panes",
    relatedServices: [{ title: "VoIP & Communication Systems", href: "/services/voip-communication" }],
  },
  {
    slug: "flutter-sip-softphone",
    title: "Flutter SIP softphone",
    cardTitle: "Flutter SIP softphone",
    category: "Mobile",
    area: "mobile",
    summary: "A mobile softphone that places and receives SIP calls from a Flutter app.",
    industry: "Telecom & communications",
    services: ["Mobile App Development", "VoIP & Communication Systems"],
    platforms: ["Flutter", "SIP"],
    technologies: ["Flutter", "SIP", "Mobile", "VoIP"],
    challenge:
      "Calling needed to live in a mobile app, not only on a desk phone, and still register against the existing SIP platform.",
    built: "A Flutter softphone for SIP calling on mobile.",
    capabilities: [
      { title: "SIP registration", description: "The app joins the same voice platform as the desk phones." },
      { title: "Mobile calling", description: "Place and receive calls from the handset." },
      { title: "Shared codebase", description: "Flutter rather than two native diallers." },
    ],
    approach: "Anonymized. The client’s product is described as the delivered softphone, not claimed as Sofnology’s own product.",
    scope: "Flutter SIP softphone for mobile.",
    value: "Users can make SIP calls from the mobile app.",
    image: "/Portfolio/6.jpg",
    imageAlt: "Studio still life of an IP phone on a bidirectional SIP path",
    relatedServices: [
      { title: "Mobile App Development", href: "/services/mobile-development" },
      { title: "VoIP & Communication Systems", href: "/services/voip-communication" },
    ],
  },
  {
    slug: "linux-cloud-infrastructure",
    title: "Linux and cloud infrastructure delivery",
    cardTitle: "Linux and cloud infrastructure",
    category: "Cloud",
    area: "cloud",
    summary: "Production Linux and deployment work for a live environment.",
    industry: "Technology",
    services: ["Cloud & DevOps"],
    platforms: ["Linux", "Cloud"],
    technologies: ["Linux", "DevOps", "Deployment", "Server administration"],
    challenge:
      "Applications needed a production server path that someone could deploy, administer, and hand over, not a one-off machine.",
    built:
      "Linux server administration, deployment, and the surrounding operational setup for a production environment.",
    capabilities: [
      { title: "Linux administration", description: "Production host configuration and ongoing care." },
      { title: "Deployment", description: "A repeatable way to put the application on the server." },
      { title: "Handover", description: "The environment was left operable, not dependent on one session." },
    ],
    approach: "The client is anonymized. No uptime percentage is claimed.",
    scope: "Linux, deployment, and server administration.",
    value: "The workload had a production environment that could be operated after delivery.",
    imageAlt: "Linux and cloud infrastructure delivery",
    relatedServices: [
      { title: "Cloud & DevOps", href: "/services/cloud-devops" },
      { title: "Cloud & Linux Infrastructure", href: "/services/platforms/cloud-linux" },
    ],
  },
  {
    slug: "freepbx-diagnosis",
    title: "FreePBX diagnosis and repair",
    cardTitle: "FreePBX diagnosis and repair",
    category: "VoIP",
    area: "voip",
    summary: "Live FreePBX faults repaired without rebuilding the PBX.",
    industry: "Telecom & communications",
    services: ["VoIP & Communication Systems"],
    platforms: ["FreePBX"],
    technologies: ["FreePBX", "Asterisk"],
    challenge: "A production FreePBX system had a small set of live faults and no appetite for a greenfield rebuild.",
    built: "Repairs limited to the extensions, routes, and settings that had drifted.",
    capabilities: [
      { title: "Live diagnosis", description: "Faults reproduced on the running system." },
      { title: "Narrow repair", description: "Only the broken path was changed." },
    ],
    approach: "Hourly production support. The client is not named.",
    scope: "FreePBX diagnosis and repair.",
    value: "The PBX stayed in place and the faults did not.",
    image: "/Portfolio/3.jpg",
    imageAlt: "Studio still life of a PBX appliance with glass extension discs",
    relatedServices: [{ title: "VoIP & Communication Systems", href: "/services/voip-communication" }],
  },
  {
    slug: "sip-trunking-implementation",
    title: "SIP trunking implementation",
    cardTitle: "SIP trunking implementation",
    category: "VoIP",
    area: "voip",
    summary: "SIP trunks so local phones share one carrier path for inbound and outbound calling.",
    industry: "Telecom & communications",
    services: ["VoIP & Communication Systems"],
    platforms: ["SIP"],
    technologies: ["SIP", "IP telephony"],
    challenge: "Local phones needed one controlled carrier path instead of ad-hoc lines.",
    built: "The trunk, plus inbound and outbound routing, documented for the team that keeps it.",
    capabilities: [
      { title: "Trunk build", description: "Carrier interconnect for the local endpoints." },
      { title: "Routing", description: "Calls enter and leave through one path." },
    ],
    approach: "Implementation engagement. The client is not named.",
    scope: "SIP trunk design and stand-up.",
    value: "The trunk was live and the routing was documented.",
    image: "/Portfolio/5.jpg",
    imageAlt: "Studio still life of a desk phone and a calling path",
    relatedServices: [{ title: "VoIP & Communication Systems", href: "/services/voip-communication" }],
  },
];

export function getWork(slug: string) {
  return workItems.find((item) => item.slug === slug);
}

export function featuredWork() {
  return workItems.filter((item) => item.featured);
}

export function workBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getWork(slug))
    .filter((item): item is WorkItem => Boolean(item));
}

export function relatedWork(slug: string, limit = 3) {
  const current = getWork(slug);
  if (!current) return workItems.slice(0, limit);
  const ranked = workItems
    .filter((item) => item.slug !== slug)
    .sort((a, b) => Number(b.area === current.area) - Number(a.area === current.area));
  return ranked.slice(0, limit);
}
