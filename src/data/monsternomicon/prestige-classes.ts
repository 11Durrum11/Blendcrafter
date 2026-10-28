import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Monsternomicon prestige class: the Extoller, from the
// "Skorne Character Classes" section of Monsternomicon
// vol. 2 (Privateer Press, pp. 232–234). Short mechanical
// summaries in our own words, cited to book + page;
// the progression table is the book's printed table.
// Source PDF: /A POC PC related/4.Core books/monster manuals/IK-Monsternomicon, vol. 2.pdf

const MN2 = "Iron Kingdoms Monsternomicon, vol. 2";
const MN2_PATH = "/A POC PC related/4.Core books/monster manuals/IK-Monsternomicon, vol. 2.pdf";
const SKORNE = `${MN2} — Skorne Character Classes`;

type F = FeatureDefinition & { levelsNeeded?: number };

function f(name: string, description: string, levelsNeeded: number | undefined, source: string): F {
  return {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl: MN2_PATH,
    ...(levelsNeeded ? { levelsNeeded } : {}),
  };
}

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

export const MONSTERNOMICON_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "extoller",
    name: "Extoller",
    ruleset: "iron_kingdoms",
    source: `${SKORNE} — Extoller (pp. 232–234)`,
    sourceUrl: MN2_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: [
      "Concentration", "Craft", "Decipher Script", "Diplomacy", "Heal",
      "Knowledge (all)", "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Religion: Follower of Voskune, Ishoul, Kaleed, or a closely related descendant school",
      "Skills: Diplomacy 5 ranks, Knowledge (skorne ancestors) 10 ranks, Knowledge (arcana) 10 ranks",
      "Spells: Able to cast 4th-level mortitheurge spells",
      "Feats: Great Fortitude",
      "Special: Ritual of the Oculus (see the class features)",
    ],
    features: [
      f("Spellcasting", "When a character gains a new extoller level, he gains new spells per day as if he had also gained a level in any one arcane spellcasting class he belonged to previously; he does not gain any other benefits of that class. Extollers have access to spells from the Extoller Spell List in addition to the spells on the Mortitheurge Spell List, and spells from the Extoller Spell List gain the benefits of the mortitheurge armored caster ability. Extollers gain no new weapon or armor proficiencies.", 1, `${SKORNE} — Extoller (p. 233)`),
      f("Ritual of the Oculus (Sp)", "No character may join this class without undertaking this ritual, which requires the hopeful to sacrificially excise one of his eyes while remaining conscious, succeeding at a Fortitude save (DC 12) or dying. If he lives, other extollers replace the eye with a specially prepared smooth crystal orb (costing ~1,000 gp); with the oculus in place, the extoller can permanently see souls and gains the benefit of a deathwatch effect in a 120-foot cone.", 1, `${SKORNE} — Extoller (p. 233)`),
      f("Prepare Sacral Stone", "The extoller can prepare sacral stones — obsidian vessels that preserve the souls of the exalted. Every 300 gold pieces spent preparing a stone adds 1 Hit Die to the limit of the soul it can contain (for example, preserving a 20 HD skorne requires a stone costing at least 6,000 gp).", 1, `${SKORNE} — Extoller (p. 234)`),
      f("Audience with the Dead (Su) and Exalted Dialog", "At 2nd level, once per day, after spending 10 minutes concentrating, the extoller may question a corpse, asking up to one question per two caster levels; the corpse's knowledge is limited to what the creature knew in life (including its languages), answers are usually brief, cryptic, or repetitive, and the body must be mostly intact. Exalted Dialog covers the extoller's extended ceremonial conversations with exalted ancestor spirits (see the class text and its Ancestor Attitude tables).", 2, `${SKORNE} — Extoller (pp. 234–235)`),
      f("Bonus Feat", "At 3rd level, and again at 7th level, the extoller gains a bonus feat, which must be a metamagic feat or an item creation feat.", 3, `${SKORNE} — Extoller (p. 234)`),
      f("Ancestral Conduit", "At 4th level, the extoller's link to the exalted ancestors strengthens, as described in the class.", 4, `${SKORNE} — Extoller (p. 234)`),
      f("Bonus Language (Ex)", "At 5th level, and again at 8th level, the extoller gains knowledge of a bonus extinct language from the study of ancient texts and tomes.", 5, `${SKORNE} — Extoller (p. 234)`),
      f("Spirit Siege (Su)", "At 6th level, as a standard action, the extoller may sacrifice a prepared spell of 1st level or higher to make a melee touch attack against any living target he can see within 60 feet; if it hits, the target takes 1d6 points of negative energy damage per spell level sacrificed plus the target's Strength modifier (if any). The extoller's ability to see a target's spirit does not require light and is not blocked by darkness, though intervening barriers or obstructions block this ability.", 6, `${SKORNE} — Extoller (p. 234)`),
      f("Direct Intercession (Su)", "At 10th level, the extoller can entreat an exalted spirit to lend direct intercession, prompting a great ancestor to expend considerable effort and personal energy to influence events through the extoller as its liaison.", 10, `${SKORNE} — Extoller (p. 234)`),
    ].map((x) => x as FeatureDefinition),
  },
];
