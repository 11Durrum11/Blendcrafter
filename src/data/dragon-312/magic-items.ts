import type { MagicItemDefinition } from "@/engine/types";

// Dragon Magazine #312 (WotC/Paizo, D&D 3.5) magic items — two
// records, both from "The Ebon Maw" (pp. 71–72): the rod of
// famine and the Fangs of Turaglas minor artifacts. Transcribed
// from the magazine text on archive.org. Summaries are mechanical
// paraphrases in our own words; the printed aura/caster-level and
// creation lines ride at the end of each summary, following the
// catalog's magic-item convention.

const DM312 = "Dragon Magazine #312";
const DM312_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine312_djvu.txt";

export const DRAGON_312_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "rod-of-famine",
    name: "Rod of Famine",
    category: "rod",
    cost: "65,000 gp",
    summary: "A rod carved from a single bone with mummified flesh and protruding teeth, held by the greatest leaders of the Feeders of the Ebon Maw. In combat it strikes as a +2 light mace, and on a critical hit it also deals 1d10 points of starvation (nonlethal) damage. With a touch, three times per day, it can rot food and wither nonmagical vegetation (up to 2 cubic feet), doing no additional damage to plant creatures. It functions as a ring of sustenance while carried on the wielder's person. Three times per day the wielder may quicken any Hunger domain spell he casts, as though prepared with the Quicken Spell feat, without changing the spell's slot. Moderate transmutation; CL 11th; Craft Rod, Quicken Spell, creator must have access to the Hunger domain.",
    source: `${DM312} — The Ebon Maw: New Magic Items (p. 71)`,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "fangs-of-turaglas",
    name: "Fangs of Turaglas",
    category: "artifact",
    cost: "—",
    summary: "Minor artifacts: thirteen +3 adamantine wounding weapons (1 bastard sword, 1 dagger, 1 greatsword, 1 heavy pick, 1 longspear, 3 longswords, 3 short swords, 2 shortspears) forged from ores Turaglas consumed and regurgitated, inexorably linked to the demon prince. On a critical hit a Fang bestows one negative level (Fortitude DC 16 one day later or the level becomes permanent) and grants the wielder 1d6 temporary hit points for 24 hours. Drawbacks: on a natural 1 attack roll the Fang bestows a negative level on the wielder (no temporary hit points); entering combat, the possessor must make a DC 25 Will save to draw any other weapon instead; once wielded in battle the wielder goes berserk as a barbarian's rage and fights until unconscious, dead, or no enemy remains within 30 feet; and the bearer cannot give the weapon away — only a carefully worded wish or miracle, or forcible taking, frees her. Every negative level or killing blow a Fang delivers feeds life force to Turaglas. The only known destruction is a good entity of divine rank hammering it flat on an anvil of stone or metal from Mechanus. Strong conjuration, evocation, and necromancy; CL 20th.",
    source: `${DM312} — The Ebon Maw: Minor Artifacts (pp. 71–72)`,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
];
