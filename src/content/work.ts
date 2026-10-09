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
  /** Listing and homepage crop when the case-study image carries its own headline. */
  cardImage?: string;
  /** Intrinsic size. When set, the case-study hero shows the full graphic instead of cropping it. */
  imageWidth?: number;
  imageHeight?: number;
  imageAlt: string;
  note?: string;
  /** Ordered path shown on the case study. No production screens. */
  stepsHeading?: string;
  steps?: Array<{ title: string; description: string }>;
  /** Illustrated path. An example, not a transcript or a production screen. */
  example?: Array<{ title: string; description: string }>;
  /** Replaces the default four snapshot labels when the case study needs its own. */
  snapshot?: Array<[string, string]>;
  outcomes?: Array<{ title: string; description: string }>;
  ctaLabel?: string;
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
  { id: "growth", label: "Digital Marketing" },
  { id: "cloud", label: "Cloud & infrastructure" },
];

export const workCategories: Array<{
  slug: "featured" | WorkArea;
  title: string;
  description: string;
}> = [
  {
    slug: "featured",
    title: "Featured Work",
    description: "Selected projects. Confidential work stays anonymous, and numbers appear only when a record verifies them.",
  },
  {
    slug: "software",
    title: "Software & Platforms",
    description: "Custom software and platform work. Confidential projects stay anonymous.",
  },
  {
    slug: "mobile",
    title: "Mobile Applications",
    description: "iOS, Android, and cross-platform applications delivered for clients.",
  },
  {
    slug: "ai",
    title: "AI & Automation",
    description: "Voice assistants and automation connected to the systems a business already runs.",
  },
  {
    slug: "voip",
    title: "VoIP & Communications",
    description: "PBX, contact-center, SIP, and voice-platform work.",
  },
  {
    slug: "web",
    title: "Web & Digital",
    description: "Websites and digital platforms delivered for clients.",
  },
  {
    slug: "growth",
    title: "Digital Marketing",
    description: "Websites, search, and advertising where a client can be named.",
  },
  {
    slug: "cloud",
    title: "Cloud & Infrastructure",
    description: "Linux, cloud, and infrastructure work for live environments.",
  },
];

export function getWorkCategory(slug: string) {
  return workCategories.find((category) => category.slug === slug);
}

export function workCategoryPath(area: string) {
  if (!area || area === "all") return "/work";
  return `/work/${area}`;
}

export const workItems: WorkItem[] = [
  {
    slug: "ai-appointment-assistant-healthcare",
    title: "AI appointment assistant for healthcare",
    cardTitle: "AI appointment assistant",
    category: "Healthcare",
    area: "ai",
    featured: true,
    summary:
      "A voice assistant that takes an appointment call, looks up a doctor and an open time, and confirms the booking through the hospital system.",
    industry: "Healthcare",
    services: ["AI & Automation", "AI & Voice AI"],
    platforms: ["Voice assistant", "Hospital management system"],
    technologies: ["Voice AI", "Speech", "APIs"],
    challenge:
      "Appointment requests were still a phone conversation that a person had to finish: which doctor, which time, and whether the hospital system had the slot. The organisation needed that conversation connected to the system of record without publishing the organisation, the software, or any patient record.",
    built:
      "A voice assistant on the phone call. It looks up the doctor and availability, sends the booking through the hospital system’s API, and speaks the confirmation back on the same call.",
    capabilities: [
      {
        title: "Doctor search",
        description: "The caller can ask for a doctor or a specialty, and the assistant looks that up.",
      },
      {
        title: "Availability",
        description: "Open times come from the hospital system, not from a script read off a page.",
      },
      {
        title: "Hospital-system API",
        description: "The booking is written through the system’s API. The product name stays private.",
      },
      {
        title: "Spoken confirmation",
        description: "The caller hears the reserved time on the call, instead of waiting for a separate message.",
      },
    ],
    steps: [
      { title: "Patient", description: "Someone needs an appointment." },
      { title: "Phone call", description: "They call, the way they already reach the organisation." },
      { title: "AI voice assistant", description: "The assistant holds the conversation on the call." },
      { title: "Doctor / availability lookup", description: "It finds the doctor and an open time." },
      { title: "HMS API", description: "The booking is written through the hospital system’s API." },
      { title: "Appointment workflow", description: "The booking is written into that workflow." },
      { title: "Voice confirmation", description: "The caller hears the confirmed time on the same call." },
    ],
    stepsHeading: "How the booking moves",
    approach:
      "The published view is the call path, not a screenshot of the live product. No patient data, no internal hospital-system screen, and no organisation or software name is included.",
    scope:
      "Voice assistant, doctor and availability lookup, the API connection into the hospital management system, the appointment workflow, and the spoken confirmation.",
    value:
      "A caller can ask for a doctor, hear what is open, and receive a spoken confirmation while the booking lands in the hospital system. No volume or success rate is published.",
    image: "/Portfolio/ai-appointment-assistant-healthcare.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A woman on a phone in a clinic corridor, for the AI appointment assistant",
    note: "Confidential healthcare project. The organisation, its hospital system, and patient records are not shown.",
    relatedServices: [
      { title: "AI & Automation", href: "/services/ai-automation" },
      { title: "AI & Voice AI", href: "/services/ai-voice" },
      { title: "Healthcare", href: "/industries/healthtech" },
    ],
  },
  {
    slug: "ai-voice-hr-self-service",
    title: "AI voice assistant for HR self-service",
    cardTitle: "AI voice assistant for HR",
    category: "Enterprise",
    area: "ai",
    featured: true,
    summary:
      "A voice assistant on the company phone line. A verified employee can start a supported HR workflow, and the HR system stays the record.",
    industry: "Enterprise / HR technology",
    services: ["AI & Automation", "VoIP & Communication Systems", "API & System Integration"],
    platforms: ["Voice assistant", "Enterprise HR platform", "PBX"],
    technologies: ["Voice AI", "Speech-to-text", "Text-to-speech", "Asterisk", "SIP", "REST API"],
    snapshot: [
      ["Industry", "Enterprise / HR technology"],
      ["Solution", "AI voice assistant"],
      ["Integrations", "HR platform APIs and telephony"],
      ["Delivery", "Voice AI, API integration, and workflow automation"],
    ],
    challenge:
      "The HR platform already held the workflows, but everyday requests still meant a login, a menu, and a form. The aim was to let an employee do a supported HR action on a phone call, with a check on who is calling before anything employee-specific runs.",
    built:
      "A voice assistant on the existing telephone path. It hears the request, verifies the caller, calls the HR platform’s API, and speaks the result back. The HR platform stays the system of record.",
    capabilities: [
      { title: "AI voice assistant", description: "The employee talks. The assistant is not a fixed phone menu." },
      { title: "Employee verification", description: "Protected actions wait until the caller is checked, including against a registered number." },
      { title: "HR platform integration", description: "The assistant calls the HR system the company already uses." },
      { title: "Leave workflow", description: "A supported leave request can be collected on the call and submitted through the API." },
      { title: "Movement request", description: "The assistant gathers what that workflow needs and sends it to the HR platform." },
      { title: "Other employee requests", description: "Meal requests and other approved actions, where the API for that action exists." },
      { title: "Telephony", description: "Inbound calls through the organisation’s PBX and SIP path, not a separate app the employee must install." },
      { title: "Voice confirmation", description: "The employee hears what the HR system returned, on the same call." },
    ],
    stepsHeading: "How it works",
    steps: [
      { title: "Employee", description: "Someone needs a supported HR action." },
      { title: "Phone call", description: "They call the number already used for the organisation." },
      { title: "AI voice assistant", description: "The assistant takes the request in ordinary speech." },
      { title: "Verification", description: "The caller is checked before an employee-specific action runs." },
      { title: "HRM API", description: "The request is submitted through the HR platform’s API." },
      { title: "HR action", description: "The supported workflow is submitted. The HR system keeps the record." },
      { title: "Voice confirmation", description: "The employee hears the result on the call." },
    ],
    example: [
      { title: "Employee", description: "“I need to apply for leave tomorrow.” An example, not a stored call." },
      { title: "AI assistant", description: "It recognises the request and asks for what that workflow requires." },
      { title: "Verification", description: "It confirms who is calling before the request is sent." },
      { title: "HR platform API", description: "It submits the supported request and reads the response." },
      { title: "Confirmation", description: "The employee hears the result by voice." },
    ],
    approach:
      "The assistant is a conversational layer on the phone system and the HR APIs. It can run a defined function, not only answer a question. Nothing on this page is a production screen, an employee record, or a named product.",
    scope:
      "Voice assistant, caller verification, API connection to the existing HR platform, supported leave, movement, and other approved requests, telephony on the existing PBX, and a spoken confirmation.",
    value:
      "Common HR actions can start on a phone call. The organisation keeps its HR platform. No usage, time-saved, or adoption figures are published.",
    outcomes: [
      { title: "Easier employee access", description: "A supported HR action can start as a phone conversation." },
      { title: "Less portal navigation", description: "The employee does not have to find the module and the form first." },
      { title: "The HR system stays", description: "The assistant does not replace the platform that holds the record." },
      { title: "Room for more workflows", description: "Another approved action can be added when its API exists." },
    ],
    image: "/Portfolio/ai-voice-hr-self-service.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A man on an office phone, for the HR voice assistant",
    note: "Client confidentiality. This describes work delivered by the technical leadership behind Sofnology. The organisation, the HR product, and employee information are withheld.",
    ctaLabel: "Discuss an AI automation project",
    relatedServices: [
      { title: "AI & Automation", href: "/services/ai-automation" },
      { title: "VoIP & Communication Systems", href: "/services/voip-communication" },
      { title: "API & System Integration", href: "/services/api-integration" },
      { title: "Software Development", href: "/services/software-development" },
      { title: "Business & Enterprise Systems", href: "/services/platforms/business" },
    ],
  },
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
    image: "/Portfolio/ai-voice-business-automation.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A woman in a headset with a notebook, for the voice and automation work",
    relatedServices: [
      { title: "AI & Automation", href: "/services/ai-automation" },
      { title: "VoIP & Communication Systems", href: "/services/voip-communication" },
    ],
  },
  {
    slug: "fix-fensterreinigung",
    title: "Fix-Fensterreinigung",
    cardTitle: "Fix-Fensterreinigung",
    category: "Mobile",
    area: "mobile",
    featured: true,
    summary:
      "Cross-platform app delivery, backend integration, store publishing, and performance-focused digital support for a German cleaning-services business.",
    industry: "Professional & field services",
    services: ["Mobile App Development", "Web Development"],
    platforms: ["iOS", "Android", "Website"],
    technologies: ["Flutter", "iOS", "Android", "PHP", "MySQL", "WordPress"],
    challenge:
      "Fix-Fensterreinigung needed the field work and the public site to sit together. The team needed one app on iPhone and Android, a backend that app could use, and a website for the cleaning business. Two mobile codebases would have split the same job.",
    built:
      "A Flutter app for day-to-day field work, connected to a PHP and MySQL backend, with the website on WordPress. Releases went out through the App Store and Google Play.",
    capabilities: [
      { title: "Shared mobile codebase", description: "One Flutter app for iOS and Android, in the language the customer already uses." },
      { title: "Backend integration", description: "The app uses the PHP and MySQL side of the business rather than a separate copy of the work." },
      { title: "Website", description: "The public site stays on WordPress, next to the app." },
      { title: "Store publishing", description: "Release work for the App Store and Google Play." },
    ],
    approach:
      "One Flutter codebase, with each store’s release requirements handled when the build goes out. The website remains WordPress. Install totals and performance percentages are left off this page.",
    scope:
      "Flutter app for iOS and Android, the PHP and MySQL connection, the WordPress website, and store publishing for Fix-Fensterreinigung.",
    value:
      "Field teams can run the same app on both major phone platforms, and the business has a website beside it. No usage or performance figures are published.",
    image: "/Portfolio/fix-fensterreinigung.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A window cleaner on a phone, squeegee against wet glass",
    relatedServices: [
      { title: "Mobile App Development", href: "/services/mobile-development" },
      { title: "Mobile & Cross-Platform", href: "/services/mobile-cross-platform" },
      { title: "Web Development", href: "/services/web-development" },
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
      "Asterisk-based contact-center engineering, with SIP and the operational API treated as one system.",
    scope:
      "Implementation, campaign setup, load checks, admin training, and early live support.",
    value:
      "The contact center was running, and the operators had a path to keep it that way.",
    image: "/Portfolio/custom-pbx-contact-center.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A man in a headset at a laptop, for the contact-center platform",
    relatedServices: [
      { title: "VoIP & Communication Systems", href: "/services/voip-communication" },
      { title: "VoIP & Contact Center Platforms", href: "/services/platforms/voip" },
    ],
  },
  {
    slug: "yanming-washer-repair",
    title: "Yanming Washer Repair",
    cardTitle: "Yanming Washer Repair",
    category: "Digital marketing",
    area: "growth",
    featured: true,
    summary:
      "Website, Google Ads, SEO, and conversion tracking for a washer-repair business in Singapore.",
    industry: "Home services",
    services: ["Digital Marketing", "Web Development"],
    platforms: ["Google Ads", "Google Tag Manager", "Website"],
    technologies: ["Google Ads", "SEO", "GTM", "Analytics", "Search Console"],
    challenge:
      "Yanming Washer Repair needed more than a brochure site. People searching for a repair already have a problem, so the website, paid search, and enquiry path had to work as one system. Broad campaigns would spend the budget on searches that were not useful.",
    built:
      "A business website for washing-machine repair and electrical services, structured Google Ads around those services, and tracking through Google Tag Manager so calls and enquiries can be reviewed with the campaigns.",
    capabilities: [
      {
        title: "Search-focused acquisition",
        description: "Campaigns, ad groups, and phrase and exact-match keywords aimed at people already looking for a repair.",
      },
      {
        title: "Website and advertising together",
        description: "Service pages, contact actions, and landing pages aligned with the searches the ads were buying.",
      },
      {
        title: "Conversion measurement",
        description: "Google Tag Manager, Ads conversion tracking, and analytics so website actions are visible.",
      },
      {
        title: "Ongoing optimisation",
        description: "Search terms, negative keywords, budget, tracking, and the site reviewed as the campaigns run.",
      },
    ],
    approach:
      "The customer path runs from a search, through Google Ads or organic results, to a relevant page, then a call, WhatsApp, or enquiry. Those actions feed tracking and the next round of campaign and page changes. Performance figures are left out until they come from the Ads account or the business’s own records.",
    scope:
      "Website setup and maintenance, Google Ads account and search campaigns, keyword and search-term management, SEO, Google Tag Manager, and ongoing campaign management for Yanming Washer Repair in Singapore.",
    value:
      "The website, advertising, and measurement sit in one acquisition system, so relevance, wasted search traffic, and enquiry paths can be adjusted from what actually happens.",
    image: "/Portfolio/yanming-washer-repair.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A technician kneeling at an open washing machine, for Yanming Washer Repair",
    relatedServices: [
      { title: "Digital Marketing", href: "/services/digital-marketing" },
      { title: "Web Development", href: "/services/web-development" },
      { title: "Marketing & Analytics Platforms", href: "/services/platforms/marketing" },
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
    image: "/Portfolio/napc-membership-website.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A woman with a notebook in a meeting room, for the NAPC membership website",
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
    approach: "Outbound calling, message flows, and a report of what connected. No volume or answer-rate figures are published.",
    scope: "Voice broadcasting platform: telephony, automation, and reporting.",
    value: "Outbound voice could be run as a repeatable operation.",
    image: "/Portfolio/voice-broadcasting-platform.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A man beside a microphone, for the voice broadcasting platform",
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
    image: "/Portfolio/flutter-sip-softphone.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A woman looking at a phone by a window, for the Flutter SIP softphone",
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
    image: "/Portfolio/linux-cloud-infrastructure.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A woman standing beside server racks, for the Linux and cloud work",
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
    approach: "Hourly production support on the FreePBX system that was already live.",
    scope: "FreePBX diagnosis and repair.",
    value: "The PBX stayed in place and the faults did not.",
    image: "/Portfolio/freepbx-diagnosis.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A man at a desk phone, for the FreePBX repair",
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
    approach: "The trunk and the inbound and outbound routing, documented for the team that keeps it.",
    scope: "SIP trunk design and stand-up.",
    value: "The trunk was live and the routing was documented.",
    image: "/Portfolio/sip-trunking-implementation.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: "A man on a desk phone, for the SIP trunking work",
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
