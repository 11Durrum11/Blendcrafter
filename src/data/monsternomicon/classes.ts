import type { ClassDefinition, ClassLevelProgressionRow, FeatureDefinition } from "@/engine/types";

// Monsternomicon base classes: the two full 20-level base
// classes printed in the "Skorne Character Classes" section
// of Monsternomicon vol. 2 (Privateer Press) — Paingiver
// (pp. 222–225) and Mortitheurge (pp. 226–231). (In the Iron
// Kingdoms Character Guide the mortitheurge appears as a
// prestige class; this book prints it as a full base class
// with its own spell list and spells-per-day table, and it is
// recorded as printed here.) Progression rows are recorded
// for levels 1–10, per this app's convention for base
// classes; spellcasting is described in the features, as in
// the other packs. Short mechanical summaries in our own
// words, cited to book + page.
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
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

export const MONSTERNOMICON_CLASSES: ClassDefinition[] = [
  {
    id: "paingiver",
    name: "Paingiver",
    ruleset: "iron_kingdoms",
    source: `${SKORNE} — Paingiver (pp. 222–225)`,
    sourceUrl: MN2_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 5,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: [
      "Balance", "Bluff", "Climb", "Craft", "Craft (alchemy)", "Diplomacy", "Escape Artist",
      "Handle Animal", "Heal", "Hide", "Intimidate", "Jump", "Knowledge (anatomy)",
      "Knowledge (arcana)", "Knowledge (local)", "Knowledge (philosophy)",
      "Knowledge (skorne houses)", "Knowledge (skorne ancestors)", "Listen", "Move Silently",
      "Open Lock", "Profession (torturer)", "Ride", "Search", "Sense Motive", "Spot",
      "Survival", "Tumble", "Use Rope",
    ],
    features: [
      f("Paingiver Basics", "Alignment: any non-chaotic, non-good. Race: any skorne. Weapon and armor proficiencies: all simple weapons, all martial weapons, paingiver-specific weapons (paingiver whip and claws), and light armor (printed in the class description). Skill points are printed as 5 + Int modifier per level (×4 at 1st level).", undefined, `${SKORNE} — Paingiver (pp. 222–224)`),
      f("Pain Strike (Ex)", "Excruciatingly painful strike: when a paingiver hits with a melee attack and inflicts any nonlethal damage, with no penalty to the attack roll, a living opponent so damaged must make a Fortitude save (DC 10 + paingiver class level + the paingiver's Int bonus) or be sickened for 1d4 rounds. Targets immune to pain or immune to critical hits are unaffected.", 1, `${SKORNE} — Paingiver (p. 224)`),
      f("Torture Training (Ex)", "The paingiver receives 4 skill points that must be spent on Profession (torturer) (see the skill in this pack), plus 1 additional point at each level, and gains a +2 competence bonus on Will saves and Fortitude saves made against Profession (torturer) checks.", 1, `${SKORNE} — Paingiver (p. 224)`),
      f("Sneak Attack", "From 2nd level, the paingiver gains sneak attack +1d6, as the rogue class feature, increasing every three levels thereafter (+2d6 at 5th, +3d6 at 8th, +4d6 at 11th, +5d6 at 14th, +6d6 at 17th, +7d6 at 20th in the full table).", 2, `${SKORNE} — Paingiver (p. 225)`),
      f("Abuse Beast (Ex) and Poison Use", "At 3rd level, the paingiver can use Handle Animal on magical beasts and monstrous humanoids with an Intelligence of up to 6 and no more than twice the paingiver's level in Hit Dice, and gains poison use (never risks accidentally poisoning himself when applying poison).", 3, `${SKORNE} — Paingiver (p. 225)`),
      f("Uncanny Dodge and Improved Uncanny Dodge (Ex)", "Uncanny dodge at 4th level and improved uncanny dodge at 8th level, as the rogue class features.", 4, `${SKORNE} — Paingiver (p. 225)`),
      f("Canny Defense (Ex)", "At 6th level, when not wearing armor or using a shield, the paingiver adds his Intelligence bonus (if any) to his Armor Class; he loses this bonus when caught flat-footed or otherwise denied his Dexterity bonus.", 6, `${SKORNE} — Paingiver (p. 225)`),
      f("Spellcasting, Armored Caster, and Necromantic Affinity", "Beginning at 7th level, the paingiver casts a small number of arcane spells drawn from the paingiver spell list (spells per day for 1st- through 4th-level spells per the class table), prepared like a mortitheurge and Intelligence-based (Int 10 + spell level to learn, prepare, or cast; save DC 10 + spell level + Int modifier). Armored Caster (Ex): the paingiver reduces the arcane spell failure chance for wearing armor by 20% when casting spells from the paingiver spell list. Necromantic Affinity (Ex): the normal dangers of casting necromantic spells (the \"Dangers of the Dark Arts\" rules, Iron Kingdoms Character Guide p. 263) do not apply to paingivers.", 7, `${SKORNE} — Paingiver (pp. 224–225)`),
      f("Lesser Mortitheurgy (Su)", "Starting at 9th level, the paingiver can draw power from injury and bloodshed: with a blade or appropriate bloodletting tool, as a full-round action he can spontaneously cast a known spell without losing a prepared spell, inflicting 1d8 damage to himself per spell level of the spell cast. The damage is inflicted before casting, and if the paingiver is knocked unconscious or killed the spell fails; any effect that would prevent the damage prevents the ability from functioning.", 9, `${SKORNE} — Paingiver (p. 225)`),
      f("Special Ability", "At 10th level, and again at 13th, 16th, and 19th levels in the full table, the paingiver gains a special ability chosen from the list printed in the class, which includes Break Foe (a nerve-cluster strike against a distracted, sickened target), Nerve Strike, Skill Mastery, and others.", 10, `${SKORNE} — Paingiver (pp. 224–225)`),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "mortitheurge",
    name: "Mortitheurge",
    ruleset: "iron_kingdoms",
    source: `${SKORNE} — Mortitheurge (pp. 226–231)`,
    sourceUrl: MN2_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: [
      "Concentration", "Craft", "Decipher Script", "Diplomacy", "Heal", "Knowledge (all)",
      "Profession", "Spellcraft",
    ],
    features: [
      f("Mortitheurge Basics", "Alignment: any non-good at 1st level. Race: any skorne. Starting gold 5d4 × 10 gp; skill points (2 + Int modifier) × 4 at 1st level. The mortitheurge is an Intelligence-based prepared arcane spellcaster with its own spell list (pp. 229–231) and spells-per-day table: 0-level spells 3 per day at every level; 1st-level spells from 1st level, rising to 9th-level spells at 17th level in the full 20-level table. Whenever a mortitheurge dies, there is a chance (2% per mortitheurge level) that he will rise again as a genzoul (see the template in this pack) in 1d6+1 days unless the body is burned or otherwise completely destroyed.", undefined, `${SKORNE} — Mortitheurge (pp. 226–231)`),
      f("Armored Caster (Ex)", "The mortitheurge reduces the arcane spell failure chance for wearing armor by 20% when casting spells from the mortitheurge spell list.", 1, `${SKORNE} — Mortitheurge (p. 228)`),
      f("Necromantic Affinity (Ex)", "The normal dangers of casting necromantic spells (the \"Dangers of the Dark Arts\" rules, Iron Kingdoms Character Guide p. 263) do not apply to mortitheurges.", 1, `${SKORNE} — Mortitheurge (p. 228)`),
      f("Mortitheurgy (Su)", "The mortitheurge can draw power from injury and bloodshed: with a ready blade or appropriate bloodletting tool, as a full-round action he can spontaneously cast a known spell without losing a prepared spell, inflicting 1d6 damage per spell level of the spell cast (1 damage to cast a 0-level spell) to himself. The damage is inflicted before casting, and if the mortitheurge is knocked unconscious the spell fails; any effect that would prevent the damage prevents the ability from functioning.", 1, `${SKORNE} — Mortitheurge (p. 229)`),
      f("Bonus Feats", "At 4th level, and again at 12th and 20th levels in the full table, the mortitheurge gains a bonus feat, which must be a metamagic feat, an item creation feat, or Spell Mastery.", 4, `${SKORNE} — Mortitheurge (pp. 227–228)`),
      f("Mortification (Su)", "At 5th level, the mortitheurge gains the ability to draw on his life essence to amplify his spells: as a free action, he can suffer nonlethal damage to spontaneously gain the benefits of a metamagic feat without having prepared the spell with a higher-level spell slot; he must possess the metamagic feat and have access to the spell level he would normally require to prepare the spell with it. After any use, the mortitheurge cannot benefit from magical healing until he has rested at least 8 hours; if the damage drops him below half his total hit points he becomes fatigued, and if it reduces him to 0 hit points he must make a Fortitude save or worse (see the class text).", 5, `${SKORNE} — Mortitheurge (p. 230)`),
      f("Moral Detachment", "By 7th level, the mortitheurge has steeped himself in the energies of death until he can no longer empathize with the living; if the mortitheurge is of a neutral alignment, his alignment moves one step toward evil.", 7, `${SKORNE} — Mortitheurge (p. 230)`),
      f("Greater Mortitheurgy (Su)", "At 10th level, the mortitheurge can utilize the life essence of others to fuel his spells rather than suffering damage personally: with both a blade or appropriate bloodletting tool and a helpless or willing subject, as a full-round action he can spontaneously cast a known spell without losing a prepared spell, inflicting the damage on the subject instead of himself.", 10, `${SKORNE} — Mortitheurge (p. 230)`),
    ].map((x) => x as FeatureDefinition),
  },
];
