import type { RichFaq, RichTone } from "./types";

export const measured: RichFaq = {
  question: "Will you publish numbers that were not measured?",
  answer: "No. Case studies describe what was delivered. Numbers appear only when a real record verifies them.",
};

export const owned: RichFaq = {
  question: "Who owns the result?",
  answer:
    "The client owns the agreed deliverables, source, and configured systems once the handover terms in the agreement are complete.",
};

export const partner: RichFaq = {
  question: "Is every specialist permanently in-house?",
  answer:
    "Core direction stays with Sofnology. Where a project needs a specialist, Sofnology keeps ownership and communication and can add a vetted delivery partner for that part of the work.",
};

export function tone(deep: string, soft: string, accent: string, contact: RichTone["contact"]): RichTone {
  return { deep, soft, accent, ink: "#102018", contact };
}
