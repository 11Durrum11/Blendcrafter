/**
 * Full SRD skill list. `keyAbility` is the ability whose modifier feeds the
 * skill total; `trainedOnly` skills cannot be used untrained; ACP skills take
 * the armor check penalty (tracked here as a flag for display).
 * Source: https://www.d20srd.org/srd/skills/skillsSummary.htm
 */
import type { SkillDefinition } from "@/engine/types";

const U = "https://www.d20srd.org/srd/skills/skillsSummary.htm";
const S = "d20SRD — Skills";

function skill(
  id: string,
  name: string,
  keyAbility: SkillDefinition["keyAbility"],
  opts: Partial<SkillDefinition> = {}
): SkillDefinition {
  return { id, name, keyAbility, ruleset: "core", source: S, sourceUrl: U, ...opts };
}

export const CORE_SKILLS: SkillDefinition[] = [
  skill("appraise", "Appraise", "int"),
  skill("balance", "Balance", "dex", { armorCheckPenalty: true }),
  skill("bluff", "Bluff", "cha"),
  skill("climb", "Climb", "str", { armorCheckPenalty: true }),
  skill("concentration", "Concentration", "con"),
  skill("craft", "Craft", "int"),
  skill("craft-alchemy", "Craft (alchemy)", "int"),
  skill("decipher-script", "Decipher Script", "int", { trainedOnly: true }),
  skill("diplomacy", "Diplomacy", "cha"),
  skill("disable-device", "Disable Device", "int", { trainedOnly: true }),
  skill("disguise", "Disguise", "cha"),
  skill("escape-artist", "Escape Artist", "dex", { armorCheckPenalty: true }),
  skill("forgery", "Forgery", "int"),
  skill("gather-information", "Gather Information", "cha"),
  skill("handle-animal", "Handle Animal", "cha", { trainedOnly: true }),
  skill("heal", "Heal", "wis"),
  skill("hide", "Hide", "dex", { armorCheckPenalty: true }),
  skill("intimidate", "Intimidate", "cha"),
  skill("jump", "Jump", "str", { armorCheckPenalty: true }),
  skill("knowledge-arcana", "Knowledge (arcana)", "int", { trainedOnly: true }),
  skill("knowledge-architecture", "Knowledge (architecture and engineering)", "int", { trainedOnly: true }),
  skill("knowledge-dungeoneering", "Knowledge (dungeoneering)", "int", { trainedOnly: true }),
  skill("knowledge-geography", "Knowledge (geography)", "int", { trainedOnly: true }),
  skill("knowledge-history", "Knowledge (history)", "int", { trainedOnly: true }),
  skill("knowledge-local", "Knowledge (local)", "int", { trainedOnly: true }),
  skill("knowledge-nature", "Knowledge (nature)", "int", { trainedOnly: true }),
  skill("knowledge-nobility", "Knowledge (nobility and royalty)", "int", { trainedOnly: true }),
  skill("knowledge-religion", "Knowledge (religion)", "int", { trainedOnly: true }),
  skill("knowledge-the-planes", "Knowledge (the planes)", "int", { trainedOnly: true }),
  skill("listen", "Listen", "wis"),
  skill("move-silently", "Move Silently", "dex", { armorCheckPenalty: true }),
  skill("open-lock", "Open Lock", "dex", { trainedOnly: true }),
  skill("perform", "Perform", "cha"),
  skill("profession", "Profession", "wis", { trainedOnly: true }),
  skill("ride", "Ride", "dex"),
  skill("search", "Search", "int"),
  skill("sense-motive", "Sense Motive", "wis"),
  skill("sleight-of-hand", "Sleight of Hand", "dex", { trainedOnly: true, armorCheckPenalty: true }),
  skill("speak-language", "Speak Language", "int", { description: "Always a cross-class purchase: 1 rank buys fluency in one additional language." }),
  skill("spellcraft", "Spellcraft", "int", { trainedOnly: true }),
  skill("spot", "Spot", "wis"),
  skill("survival", "Survival", "wis"),
  skill("swim", "Swim", "str", { armorCheckPenalty: true }),
  skill("tumble", "Tumble", "dex", { trainedOnly: true, armorCheckPenalty: true }),
  skill("use-magic-device", "Use Magic Device", "cha", { trainedOnly: true }),
  skill("use-rope", "Use Rope", "dex"),
];
