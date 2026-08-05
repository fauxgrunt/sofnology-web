export type ContactAccent =
  | "navy"
  | "lime"
  | "teal"
  | "amber"
  | "blue"
  | "emerald"
  | "coral"
  | "gold"
  | "magenta"
  | "orange"
  | "wine"
  | "slate"
  | "cyan"
  | "sky"
  | "steel"
  | "moss"
  | "clinic"
  | "hotpink"
  | "mint";

type AccentClasses = { desktop: string; mobile: string };

const ACCENTS: Record<ContactAccent, AccentClasses> = {
  navy: {
    desktop:
      "bg-gradient-to-br from-[#0b2a5b] via-[#16457f] to-[#061a3a] text-white hover:opacity-95",
    mobile: "bg-gradient-to-r from-[#0b2a5b] via-[#16457f] to-[#061a3a] text-white",
  },
  lime: {
    desktop: "bg-[#C7FF3D] text-[#101413] hover:opacity-95",
    mobile: "bg-[#C7FF3D] text-[#101413]",
  },
  teal: {
    desktop: "bg-[#5EEAD4] text-[#101413] hover:opacity-95",
    mobile: "bg-[#5EEAD4] text-[#101413]",
  },
  amber: {
    desktop: "bg-[#E8A317] text-[#101413] hover:opacity-95",
    mobile: "bg-[#E8A317] text-[#101413]",
  },
  blue: {
    desktop: "bg-[#2F6BFF] text-white hover:opacity-95",
    mobile: "bg-[#2F6BFF] text-white",
  },
  emerald: {
    desktop: "bg-[#10B981] text-[#111827] hover:opacity-95",
    mobile: "bg-[#10B981] text-[#111827]",
  },
  coral: {
    desktop: "bg-[#FF5A5F] text-white hover:opacity-95",
    mobile: "bg-[#FF5A5F] text-white",
  },
  gold: {
    desktop: "bg-[#C9A227] text-[#1A1C1F] hover:opacity-95",
    mobile: "bg-[#C9A227] text-[#1A1C1F]",
  },
  magenta: {
    desktop: "bg-[#FF2D6A] text-white hover:opacity-95",
    mobile: "bg-[#FF2D6A] text-white",
  },
  orange: {
    desktop: "bg-[#FF6A00] text-[#1A1512] hover:opacity-95",
    mobile: "bg-[#FF6A00] text-[#1A1512]",
  },
  wine: {
    desktop: "bg-[#8B1E3F] text-white hover:opacity-95",
    mobile: "bg-[#8B1E3F] text-white",
  },
  slate: {
    desktop: "bg-[#3D4F5F] text-white hover:opacity-95",
    mobile: "bg-[#3D4F5F] text-white",
  },
  cyan: {
    desktop: "bg-[#2EE6D6] text-[#12141A] hover:opacity-95",
    mobile: "bg-[#2EE6D6] text-[#12141A]",
  },
  sky: {
    desktop: "bg-[#0EA5E9] text-[#0C4A6E] hover:opacity-95",
    mobile: "bg-[#0EA5E9] text-[#0C4A6E]",
  },
  steel: {
    desktop: "bg-[#6FA8DC] text-[#243B55] hover:opacity-95",
    mobile: "bg-[#6FA8DC] text-[#243B55]",
  },
  moss: {
    desktop: "bg-[#74C69D] text-[#1B4332] hover:opacity-95",
    mobile: "bg-[#74C69D] text-[#1B4332]",
  },
  clinic: {
    desktop: "bg-[#B8F25A] text-[#0B3D2E] hover:opacity-95",
    mobile: "bg-[#B8F25A] text-[#0B3D2E]",
  },
  hotpink: {
    desktop: "bg-[#FF2D8A] text-white hover:opacity-95",
    mobile: "bg-[#FF2D8A] text-white",
  },
  mint: {
    desktop: "bg-[#7DDBA3] text-[#12241C] hover:opacity-95",
    mobile: "bg-[#7DDBA3] text-[#12241C]",
  },
};

export function contactAccentClasses(accent: ContactAccent = "navy"): AccentClasses {
  return ACCENTS[accent] ?? ACCENTS.navy;
}
