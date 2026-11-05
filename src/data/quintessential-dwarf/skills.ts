import type { SkillDefinition } from "@/engine/types";

// The Quintessential Dwarf (Mongoose Publishing, ©2002,
// Collectors' Series) — the one genuinely NEW skill the
// book prints, from "Old Skills, New Uses" (Tricks of the
// Race, printed p. 36), transcribed from Shaun's own
// scanned copy (image-only; read visually page by page,
// 2026-11-04). The rest of that sub-chapter is new checks
// for existing skills (Refining Metal, Haggling,
// Cave-ins, Darkvision Camouflage, and so on) — game
// rules, not selectable records, so they are documented
// as skips in the draft report, not built.
//
// The book presents Tunnel Tapping within a Knowledge
// skill discussion without naming a key ability or
// stating the skill header explicitly; it is filed as a
// Knowledge skill (Intelligence key ability, trained-only
// — the book states it may not be used untrained) on the
// pattern of the Heroes of High Favor: Dwarves Knowledge
// (Dwarves) record. 3.0-era terminology is as printed.

const QD = "The Quintessential Dwarf";
const QD_PATH = "/A POC PC related/5.Splat/Quintessential series/The Quintessential Dwarf.pdf";

export const QUINTESSENTIAL_DWARF_SKILLS: SkillDefinition[] = [
  {
    id: "knowledge-tunnel-tapping",
    name: "Knowledge (Tunnel Tapping)",
    keyAbility: "int",
    trainedOnly: true,
    ruleset: "core",
    source: `${QD}, p. 36`,
    sourceUrl: QD_PATH,
    description: "The character uses his knowledge of stone and rock to communicate by tapping out coded messages that travel through the subterranean walls. The character must first locate a suitable area for sending and receiving messages: this requires an initial Knowledge (tunnel tapping) check (DC 15) and takes 5 minutes; after this initial check, the range of communicated messages is one-quarter of a mile, plus an additional one-quarter mile for each point by which the initial check beat the DC. The sender taps out his message on the wall — sending a message requires a full-round action for every 30 words and a successful check (DC 10) to tap it accurately. The receiver hears the message — a check (DC 10) enables him to hear a full minute's worth of tapping; the check is made at the end of the minute. Retry: No. This skill may not be used untrained.",
  },
];
