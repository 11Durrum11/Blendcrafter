import type { ClassDefinition, ClassLevelProgressionRow, FeatureDefinition } from "@/engine/types";

// Chaos Magic: Wild Sorcery (Encyclopaedia Arcane,
// Mongoose Publishing, 2001) — the Chaos Mage base class,
// printed pp. 14-17, transcribed from Shaun's own scanned
// copy (read visually; the scan is image-only), 2026-11-04.
// This is a 3.0-era book: entries are transcribed as
// printed, including 3.0 forms such as the Alchemy skill,
// partial actions in the Movement effect text, and the
// class's own spell system, which replaces spell slots
// with a Casting check (1d20 + chaos mage level + Cha
// modifier) against a DC built from spell elements —
// see spells.ts for the effect elements and the draft
// report for the full system digest. Progression rows
// transcribe the printed table in full (levels 1-20,
// verified against the table on printed p. 15; from
// 11th level the printed base attack column shows
// iterative attacks, e.g. +6/+1, recorded here as the
// primary value). Summaries
// are short mechanical paraphrases in our own words; no
// book prose is reproduced.

const CM = "Chaos Magic: Wild Sorcery";
const CM_PATH = "/Desktop/DnD-3.5/Supplements/Magic/Encyclopaedia Arcane/Chaos Magic - Wild Sorcery.pdf";
const CMAGE = `${CM} — The Chaos Mage`;

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];
const GOOD = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
const POOR = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6];

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key:
        source.split("— ")[1].toLowerCase().replace(/[^a-z0-9]+/g, "-") +
        "-" +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: CM_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fc = mk(CMAGE);

export const CHAOS_MAGIC_CLASSES: ClassDefinition[] = [
  {
    id: "chaos-mage",
    name: "Chaos Mage",
    ruleset: "core",
    source: `${CMAGE} (pp. 14-17)`,
    sourceUrl: CM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, POOR, POOR, GOOD),
    classSkills: [
      "Alchemy", "Bluff", "Concentration", "Craft", "Knowledge (arcana)",
      "Profession", "Spellcraft",
    ],
    features: [
      fc("Chaos Mage Basics", "Alignment: any chaotic. Key ability: Charisma — the Casting check is 1d20 + chaos mage class level + Cha modifier, and chaos spells' saving throw DC is 10 + Cha modifier + one-half the caster's level. Weapon and armour proficiency: all simple weapons, but no proficiency with armour or shields of any sort; armour interferes with the chaos mage's ability to 'feel' the flows of chaos, and any armour worn has the same chance of causing arcane spell failure for a chaos mage as for a static mage, though with far more dire consequences (a failed arcane spell failure roll causes a backlash — see The Price of Chaos in the draft report). Skill points at 1st level: (2 + Int modifier) x 4. Spellcraft quirk: only one-half of a chaos mage's Spellcraft ranks may be used when studying the workings of a static or divine magic item or spell, and static mages and divine spellcasters likewise apply only one-half of their Spellcraft ranks when dealing with chaos magic items or spells.", undefined),
      fc("Chaos Magic", "The chaos mage is attuned to the forces of chaos and manipulates them to create magical effects, building each spell at casting time from effect, area, range, duration and saving throw elements (see the effect element records in spells.ts). Chaos mages have no spell slots and no hard limit on spells per day; instead every spell attempted deals the mage 1 point of damage per 5 full points of the spell's Casting DC, applied immediately after the Casting check whether it succeeds or not — subdual damage on a success, real damage on a failure, and a failed Casting check also leaves the mage stunned for the rest of the round. A chaos mage staggered or knocked unconscious by subdual damage from spellcasting can cast no more spells until he has had eight continuous hours of full rest. Chaos magic is anathema to the static arts: a character cannot multiclass into chaos mage if he has any levels as a sorcerer or wizard.", 1),
      fc("Chaos Familiar", "The chaos mage does not start his career with a familiar. At 4th level, or any point thereafter, he may craft his own familiar from the primal forces of chaos, infusing the creation with a fraction of his own essence; no equipment is required, but he must be completely undisturbed for 24 hours — if disturbed, the attempted creation fails and he must wait seven days before attempting again. Chaos familiars are much stronger and more capable than their static magic counterparts, but the pain caused by their death or injury is also much more devastating (full familiar rules are digested in the draft report).", 4),
      fc("Multiple Effects (2)", "The chaos mage may combine several effect elements into single spells, as described on p. 26: the Casting DC of a spell with more than one effect is the highest effect DC plus one-half of the lowest effect DC, and all effects in a single spell share the same area, range, duration, saving throws and spell resistance. The maximum number of effect elements in a single spell is 2 at 5th level, rising to 3 at 10th level, 4 at 15th level, and 5 at 20th level.", 5),
      fc("Countermagic", "The chaos mage can unleash raw chaos to counter the spells of his opponents, as the counterspell ability of any other arcane caster but with these changes: he does not need to make a Spellcraft check to determine the spell being cast, and instead makes a Casting check at DC 15 + the level of the spell being countered. The standard chances for backlash, manifestation and steps along the Paths of Chaos apply as normal. Countermagic is capable of blocking any arcane spell, even those not normally affected by counterspell, but has no ability to affect divine spellcasting.", 8),
      fc("Purge Chaos", "Once per week, a chaos mage can invoke this ability to free himself of one step on his Path of Chaos. This has an experience cost equal to 500 x the level of the step being negated, and stepping back removes all penalties and bonuses associated with the step just removed. The first step on a Path can never be removed under any circumstances.", 12),
      fc("Ex-Chaos Mages", "If a chaos mage ever becomes non-chaotic in alignment, or multiclasses as a static mage, he will no longer be able to use chaos magic or any of his other class abilities, and will be unable to advance any further as a chaos mage. If he ever returns to a chaotic alignment, he will be able to continue his pursuit of this class from the point he left it. So long as a chaos mage retains his chaotic alignment, he may freely multiclass as a divine spellcaster without penalty. Chaos magic is considered arcane spellcasting — clerics gaining the Chaos domain through their divine character class do not receive any further benefit to their chaos magic casting.", undefined),
    ].map((x) => x as FeatureDefinition),
  },
];
