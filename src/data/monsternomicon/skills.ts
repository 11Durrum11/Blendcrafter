import type { SkillDefinition } from "@/engine/types";

// Monsternomicon skill: Profession (Torturer) is given a full
// standalone skill write-up in the Paingiver class section of
// Monsternomicon vol. 2 (Privateer Press), so it is added as
// its own skill, following the precedent of Sorcery & Steam's
// Profession (Detective) and Profession (Profiler) records.
// Short mechanical summary in our own words, cited to
// book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/IK-Monsternomicon, vol. 2.pdf

const MN2 = "Iron Kingdoms Monsternomicon, vol. 2";
const MN2_PATH = "/A POC PC related/4.Core books/monster manuals/IK-Monsternomicon, vol. 2.pdf";

export const MONSTERNOMICON_SKILLS: SkillDefinition[] = [
  {
    id: "profession-torturer",
    name: "Profession (Torturer)",
    ruleset: "iron_kingdoms",
    keyAbility: "wis",
    trainedOnly: true,
    description:
      "Breaking a subject with pain and fear. Check: used against a helpless target who is at your mercy, the check functions similarly to Intimidate, except that you make a Profession (torturer) check and apply the result to the target: if this check result beats the target's Will save result, the subject talks; if the Will save result is higher, the victim remains silent. A victim reduced to –1 to –9 hit points automatically tells everything it knows. Retry: yes, though each attempt takes time and risks killing the subject. Untrained: a character without ranks in this skill cannot use it to torture.",
    source: `${MN2} — Profession (Torturer) skill write-up, Paingiver section (p. 225)`,
    sourceUrl: MN2_PATH,
  },
];
