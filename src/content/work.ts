import type { InteriorContact, InteriorSticky } from "@/lib/interior";
import { brand } from "@/lib/theme";

export const WORK_NAVY = brand.navy;

export const sticky: InteriorSticky = {
  href: "#contact-form",
  label: "Start a conversation",
  backgroundColor: brand.navy,
  textColor: "#ffffff",
  pastHeroPx: 280,
};

export const contact: InteriorContact = {
  showIntro: true,
  accent: "navy",
};

export type WorkSystem =
  | "asterisk"
  | "freepbx"
  | "sip"
  | "voice-ai"
  | "dialer"
  | "issabel";

export type WorkKind = "implementation" | "troubleshooting" | "integration";

export type WorkItem = {
  slug: string;
  title: string;
  cardTitle: string;
  category: string;
  summary: string;
  problem: string;
  work: string;
  outcome: string;
  image: string;
  imageAlt: string;
  systems: WorkSystem[];
  kind: WorkKind;
  stack: string[];
};

export const systemFilters: Array<{ id: "all" | WorkSystem; label: string }> = [
  { id: "all", label: "All systems" },
  { id: "asterisk", label: "Asterisk" },
  { id: "freepbx", label: "FreePBX" },
  { id: "sip", label: "SIP trunking" },
  { id: "voice-ai", label: "Voice AI" },
  { id: "dialer", label: "Dialer" },
  { id: "issabel", label: "Issabel" },
];

export const kindFilters: Array<{ id: "all" | WorkKind; label: string }> = [
  { id: "all", label: "All work" },
  { id: "implementation", label: "Implementation" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "integration", label: "Integration" },
];

export const workItems: WorkItem[] = [
  {
    slug: "multilingual-voice-assistant-audio",
    title: "Multilingual voice assistant audio quality",
    cardTitle: "Multilingual voice assistant audio quality",
    category: "Voice AI",
    summary:
      "Diagnosed and repaired poor audio on a multilingual voice assistant that mixed ElevenLabs synthesis with SIP trunks and local IP telephony.",
    problem:
      "The assistant could place calls, but speech quality broke down across languages and hops — synthesis, SIP trunking, and the local IP path were not behaving as one system.",
    work:
      "We traced the media path from TTS through the SIP trunk into the local PBX, isolated where the signal degraded, and tightened codec, packet, and routing settings so the voice stayed intelligible on real handsets.",
    outcome:
      "Delivered. The voice path was restored without renaming the stack or inventing a new product around it.",
    image: "/Portfolio/1.jpg",
    imageAlt:
      "Studio still life of an IP phone, headset, glass signal panes, and a laptop",
    systems: ["voice-ai", "sip"],
    kind: "troubleshooting",
    stack: ["ElevenLabs", "SIP trunking", "IP telephony"],
  },
  {
    slug: "sip-trunking-implementation",
    title: "SIP trunking implementation",
    cardTitle: "SIP trunking implementation",
    category: "SIP",
    summary:
      "Designed and stood up SIP trunks so local phones could share one carrier path for inbound and outbound calling.",
    problem:
      "The organisation needed a specialist to implement SIP trunking end to end — not a theory note, a working trunk with clear routing.",
    work:
      "We mapped the local endpoints, built the trunk, and set inbound and outbound routing so calls entered and left through one controlled path instead of ad-hoc lines.",
    outcome:
      "Delivered. The trunk was live and the routing was documented for the team that keeps it.",
    image: "/Portfolio/2.jpg",
    imageAlt:
      "Studio still life of three IP phones feeding into a single SIP trunk through glass panes",
    systems: ["sip"],
    kind: "implementation",
    stack: ["SIP", "IP telephony", "Carrier interconnect"],
  },
  {
    slug: "freepbx-troubleshooting",
    title: "FreePBX diagnosis and repair",
    cardTitle: "FreePBX diagnosis and repair",
    category: "FreePBX",
    summary:
      "Hourly FreePBX work to find and fix a small set of live issues without rebuilding the whole PBX.",
    problem:
      "A production FreePBX system needed an experienced operator — a few concrete faults, limited budget, no appetite for a greenfield rebuild.",
    work:
      "We logged into the live box, reproduced the faults, and repaired only what was broken: extensions, routes, and the settings that had drifted.",
    outcome:
      "Delivered. The PBX stayed in place; the faults did not.",
    image: "/Portfolio/3.jpg",
    imageAlt:
      "Studio still life of a PBX appliance with a grid of glass extension discs and one cloudy disc",
    systems: ["freepbx", "asterisk"],
    kind: "troubleshooting",
    stack: ["FreePBX", "Asterisk"],
  },
  {
    slug: "asterisk-voip-engineering",
    title: "Asterisk VoIP engineering",
    cardTitle: "Asterisk VoIP engineering",
    category: "Asterisk",
    summary:
      "Ongoing Asterisk work covering SIP tracing, Linux, networking, Python/Go, and the databases that sit under a live voice platform.",
    problem:
      "The client needed a VoIP engineer who could live in Asterisk — not only the GUI — and also trace SIP, work on Linux, and touch the surrounding code and data.",
    work:
      "We worked across the stack: dialplan and SIP behaviour, packet traces, host and network checks, and the application/database edges that make a voice platform operable over time.",
    outcome:
      "Delivered as a specialist engagement. The relationship was technical, not a branded case-study partnership.",
    image: "/Portfolio/4.jpg",
    imageAlt:
      "Studio still life of an exploded Asterisk stack: database, Linux plate, engine block, SIP glass, and a laptop",
    systems: ["asterisk", "sip"],
    kind: "implementation",
    stack: ["Asterisk", "SIP", "Linux", "Python", "Go", "SQL"],
  },
  {
    slug: "freepbx-extension-routing",
    title: "FreePBX 17 inbound and extension routing",
    cardTitle: "FreePBX 17 inbound and extension routing",
    category: "FreePBX",
    summary:
      "After a cloud FreePBX 17 upgrade, some Grandstream desk phones could only call out. We diagnosed the inbound and extension-to-extension failures.",
    problem:
      "All extensions registered and could make outbound calls. About four could not receive inbound or extension-to-extension calls. GS Wave softphones behaved; Grandstream GXV3370 desk phones did not.",
    work:
      "We compared working and failing devices after the v17 upgrade, traced inbound and internal routing, and corrected the extension and phone settings that blocked one direction on the desk phones.",
    outcome:
      "Delivered. The affected extensions could receive calls again. No invented root-cause story beyond what the live system showed.",
    image: "/Portfolio/5.jpg",
    imageAlt:
      "Studio still life of a video desk phone with a blocked inbound glass pane and a working softphone path",
    systems: ["freepbx", "asterisk"],
    kind: "troubleshooting",
    stack: ["FreePBX 17", "Asterisk", "Grandstream GXV3370", "GS Wave"],
  },
  {
    slug: "french-did-cpaas-sip",
    title: "French DID with Vonage / Twilio SIP",
    cardTitle: "French DID with Vonage / Twilio SIP",
    category: "SIP",
    summary:
      "Integrated a French OVH number with Vonage or Twilio so inbound and outbound calls used that number as Caller ID, with handover docs.",
    problem:
      "The number lived on OVH. The business needed inbound and outbound through Vonage or Twilio, with the French DID showing as Caller ID. OVH did not have to stay in the path if a cleaner route existed.",
    work:
      "We built the SIP trunk into the CPaaS platform, set inbound and outbound routing, verified Caller ID, and left a step-by-step record so the client could reproduce or adjust the setup later.",
    outcome:
      "Delivered. Calls used the French number both ways. Platforms are named because they were the tools — they are not published as clients.",
    image: "/Portfolio/6.jpg",
    imageAlt:
      "Studio still life of an IP phone, a navy Caller ID disc in a bidirectional SIP path, and a laptop",
    systems: ["sip"],
    kind: "integration",
    stack: ["SIP", "OVH", "Vonage", "Twilio"],
  },
  {
    slug: "vicidial-implementation",
    title: "ViciDial contact-center implementation",
    cardTitle: "ViciDial contact-center implementation",
    category: "Dialer",
    summary:
      "End-to-end ViciDial implementation: install, campaign setup, bottleneck checks, admin training, and early post-go-live support.",
    problem:
      "The organisation needed ViciDial stood up from scratch — not a tweak on an existing dialer — with best-practice configuration and a team that could actually run it.",
    work:
      "We implemented the platform, shaped campaigns and agent flow, looked for load bottlenecks, trained operators, and stayed through the first live period so the system did not stall at handover.",
    outcome:
      "Delivered. The dialer was running and the operators had a path to keep it that way.",
    image: "/Portfolio/7.jpg",
    imageAlt:
      "Studio still life of a dialer core with a lead hopper feeding in and agent stations fanning out",
    systems: ["dialer", "asterisk"],
    kind: "implementation",
    stack: ["ViciDial", "Asterisk", "SIP"],
  },
  {
    slug: "issabel-web-cisco-phone",
    title: "Issabel web console and Cisco phone setup",
    cardTitle: "Issabel web console and Cisco phone setup",
    category: "Issabel",
    summary:
      "Brought an Issabel web server back online and documented how to register and configure a Cisco IP phone against it.",
    problem:
      "The Issabel admin UI was down, which blocked day-to-day PBX work. The team also needed a clear path to configure Cisco desk phones on that system.",
    work:
      "We restored the web console, confirmed the PBX was reachable again, and wrote the Cisco phone configuration so someone else could repeat it without another emergency call.",
    outcome:
      "Delivered. The GUI responded; the phone had a documented register path.",
    image: "/Portfolio/8.jpg",
    imageAlt:
      "Studio still life of a Cisco-style desk phone, an Issabel appliance, a tall glass web pane, and a laptop",
    systems: ["issabel", "asterisk"],
    kind: "troubleshooting",
    stack: ["Issabel", "Asterisk", "Cisco IP phone"],
  },
];

export function getWork(slug: string) {
  return workItems.find((item) => item.slug === slug);
}

export function relatedWork(slug: string, limit = 3) {
  const current = getWork(slug);
  if (!current) return workItems.slice(0, limit);
  const ranked = workItems
    .filter((item) => item.slug !== slug)
    .sort((a, b) => {
      const aScore =
        a.systems.filter((system) => current.systems.includes(system)).length +
        (a.kind === current.kind ? 1 : 0);
      const bScore =
        b.systems.filter((system) => current.systems.includes(system)).length +
        (b.kind === current.kind ? 1 : 0);
      return bScore - aScore;
    });
  return ranked.slice(0, limit);
}
