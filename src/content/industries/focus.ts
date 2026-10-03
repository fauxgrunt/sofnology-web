export type FocusIndustry = {
  slug: string;
  title: string;
  lede: string;
  examples: string[];
};

export const focusIndustries: FocusIndustry[] = [
  {
    slug: "professional-services",
    title: "Professional & Field Services",
    lede: "We build solutions for service businesses — mobile tools for field teams, websites that take enquiries, and the operations behind them. Fix-Fensterreinigung is one mobile example. Yanming-type service work is described as selected delivery experience until a client engagement and brand permission are confirmed.",
    examples: ["Field-service mobile apps", "Enquiry websites", "Job and scheduling workflows"],
  },
  {
    slug: "telecom",
    title: "Telecom & Communications",
    lede: "We build solutions for voice and communications: PBX, contact centers, SIP, WebRTC, broadcasting, and communication APIs. This is delivered work, not a claim of decades as a carrier.",
    examples: ["PBX and contact centers", "SIP trunking", "Voice broadcasting", "Softphones"],
  },
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    lede: "We build solutions for software companies and internal product teams: multi-user web platforms, APIs, and the infrastructure under them.",
    examples: ["SaaS applications", "APIs", "Member and customer portals"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Operations",
    lede: "We build solutions for operational teams that need clearer workflows, reporting, and systems that connect the work already happening on the floor and in the office.",
    examples: ["Operational dashboards", "Workflow systems", "Reporting"],
  },
];

export function getFocusIndustry(slug: string) {
  return focusIndustries.find((item) => item.slug === slug);
}
