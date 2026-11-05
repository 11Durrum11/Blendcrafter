import type { TemplateDefinition } from "@/engine/types";

// Heroes of Horror (WotC, D&D 3.5) templates — the
// three full "Creating a..." templates of Chapter 6,
// transcribed from Shaun's own copy: Tainted Minion
// (p. 153), Tainted Raver (pp. 154-155), and Unholy
// Scion (pp. 155-157). Notes on the numbers the app
// must store as single values:
// - Tainted Minion and Tainted Raver print no level
//   adjustment number: the book says both "cannot be
//   player characters." levelAdjustment is recorded as
//   0 with that restriction stated in the record.
// - Tainted Raver's "Creating" block prints no
//   Challenge Rating line (its sample creature, a
//   5th-level fighter, is CR 5, the same as the base
//   creature), so crModifier is recorded as 0.
// - Unholy Scion's CR adjustment scales with HD
//   (+1 at HD 4 or less, +2 at HD 5-10, +3 at HD 11+);
//   crModifier records the first step and the summary
//   carries the full scale.
// Summaries are short mechanical paraphrases in our
// own words; no book prose is reproduced.

const HOH = "Heroes of Horror";
const HOH_PATH = "/Desktop/DnD-3.5/Supplements/Campaign Settings/Heroes Of Horror.pdf";
const TM = `${HOH} — Tainted Minion`;
const TR = `${HOH} — Tainted Raver`;
const US = `${HOH} — Unholy Scion`;

export const HEROES_OF_HORROR_TEMPLATES: TemplateDefinition[] = [
  {
    id: "tainted-minion",
    name: "Tainted Minion",
    ruleset: "core",
    timing: "acquired",
    summary: "An acquired template for a humanoid or monstrous humanoid with at least mild corruption and depravity, most often applied to a creature that dies because its corruption exceeds its severe threshold: it rises as an undead servant of taint. Type becomes undead, all Hit Dice become d12s, natural armor improves by +4, it gains claws, a fear aura, change shape, damage reduction by character level, fast healing 3, and undead traits. CR: as base creature +1. The book prints no level adjustment: \"Tainted minions cannot be player characters.\"",
    source: `${TM} (p. 153)`,
    sourceUrl: HOH_PATH,
    crModifier: 1,
    levelAdjustment: 0,
    prerequisites: [
      { note: "Can be added to any humanoid or monstrous humanoid creature with at least mild levels of both corruption and depravity." },
    ],
    abilityModifiers: { str: 4, dex: 2, con: null, cha: 4 },
    patches: [
      { op: "set-type", value: "Undead", note: "Type changes to undead (augmented humanoid or monstrous humanoid). Do not recalculate base attack bonus, saves, or skill points. Size is unchanged." },
      { op: "increase-hit-dice", amount: 2, note: "All current and future Hit Dice increase to d12s (recorded as a die-size increase; apply d12s directly)." },
    ],
    modifiers: [
      {
        id: "tainted-minion-natural-armor",
        source: "Tainted Minion",
        sourceUrl: HOH_PATH,
        target: "ac.natural",
        value: 4,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor bonus improves by +4 as chitinous plates form on and within the creature's flesh.",
      },
    ],
    features: [
      {
        key: "tainted-minion-claws",
        name: "Claws",
        description: "The minion grows inch-long claws usable as natural weapons (damage by size: Fine 1, Diminutive 1, Tiny 1d2, Small 1d3, Medium 1d4, Large 1d6, Huge 1d8, Gargantuan 2d6, Colossal 2d8; a creature with other natural weapons keeps the higher damage). Its natural weapons are treated as magic weapons for overcoming damage reduction.",
        category: "special-attack",
        source: TM,
        sourceUrl: HOH_PATH,
      },
      {
        key: "tainted-minion-fear-aura",
        name: "Fear Aura (Su)",
        description: "Creatures within a 30-foot radius must succeed on a Will save (DC 10 + 1/2 the tainted minion's level + its Cha modifier) or become shaken, taking a –2 morale penalty on attack rolls, weapon damage rolls, and saving throws.",
        category: "special-attack",
        source: TM,
        sourceUrl: HOH_PATH,
      },
      {
        key: "tainted-minion-change-shape",
        name: "Change Shape (Su)",
        description: "A tainted minion can assume the form of any humanoid creature (see Monster Manual, p. 306).",
        category: "special-quality",
        source: TM,
        sourceUrl: HOH_PATH,
      },
      {
        key: "tainted-minion-damage-reduction",
        name: "Damage Reduction (Ex)",
        description: "By character level: 1st–3rd, DR 5/magic or silver; 4th–7th, DR 10/magic; 8th–11th, DR 10/good; 12th or higher, DR 15/magic and silver.",
        category: "special-quality",
        source: TM,
        sourceUrl: HOH_PATH,
      },
      {
        key: "tainted-minion-fast-healing",
        name: "Fast Healing (Ex)",
        description: "A tainted minion heals 3 hit points per round so long as it has at least 1 hit point.",
        category: "special-quality",
        source: TM,
        sourceUrl: HOH_PATH,
      },
      {
        key: "tainted-minion-undead-traits",
        name: "Undead Traits",
        description: "Immune to mind-affecting spells and abilities, poison, magical sleep effects, paralysis, stunning, disease, death effects, and any effect requiring a Fortitude save unless it also works on objects or is harmless. Not subject to critical hits, nonlethal damage, ability damage to physical scores, ability drain, energy drain, fatigue, exhaustion, or death from massive damage. Cannot be raised; resurrection works only if it is willing. Darkvision out to 60 feet. A tainted minion no longer acquires taint: for special abilities, its corruption and depravity scores are both treated as half its Charisma score + 1. Alignment: always evil (any). Treasure: double standard.",
        category: "special-quality",
        source: TM,
        sourceUrl: HOH_PATH,
      },
    ],
  },
  {
    id: "tainted-raver",
    name: "Tainted Raver",
    ruleset: "core",
    timing: "acquired",
    summary: "An acquired template for a humanoid or monstrous humanoid with at least mild corruption and depravity, most often applied to a creature that goes insane because its depravity exceeds its severe threshold: its mind is utterly shattered by taint. It gains perpetual rage, fast healing 3, and madness (Charisma modifier on Will saves instead of Wisdom; immunity to confusion and insanity), at a –2 penalty to Armor Class. The book's template block prints no Challenge Rating line and no level adjustment: \"Tainted ravers cannot be player characters\" (its sample, a 5th-level human fighter, is CR 5, as the base creature).",
    source: `${TR} (pp. 154-155)`,
    sourceUrl: HOH_PATH,
    crModifier: 0,
    levelAdjustment: 0,
    prerequisites: [
      { note: "Can be added to any humanoid or monstrous humanoid creature with at least mild levels of both corruption and depravity." },
    ],
    abilityModifiers: { str: 4, con: 4, wis: -6, cha: 6 },
    patches: [],
    features: [
      {
        key: "tainted-raver-perpetual-rage",
        name: "Perpetual Rage (Ex)",
        description: "The raver is constantly in a state of insane fury similar to a barbarian's rage: +4 to Strength and Constitution, +2 on Will saves, and a –2 penalty to Armor Class (the ability score increases above are included in the template's ability modifiers, as printed \"for raging\"). An effect that counters rage, such as calm emotions, temporarily suppresses this ability. Unlike a barbarian's rage, it does not prevent actions requiring reasoned thought or concentration: the raver can cast spells, use skills, activate magic items, and even act calmly — though its madness can make it act unpredictably.",
        category: "special-attack",
        source: TR,
        sourceUrl: HOH_PATH,
      },
      {
        key: "tainted-raver-fast-healing",
        name: "Fast Healing (Ex)",
        description: "A tainted raver heals 3 points of damage each round.",
        category: "special-quality",
        source: TR,
        sourceUrl: HOH_PATH,
      },
      {
        key: "tainted-raver-madness",
        name: "Madness (Ex)",
        description: "A tainted raver is irretrievably mad: it uses its Charisma modifier on Will saves instead of its Wisdom modifier and has immunity to confusion and insanity effects. Anyone targeting it with a thought detection, mind control, or telepathic ability makes direct contact with its tortured mind and takes 1d3 points of taint (depravity). It cannot be restored to sanity by any means short of a miracle or wish; if restored, it loses this template. A tainted raver no longer acquires taint: its corruption and depravity scores are both treated as half its Charisma score + 1. Alignment: always evil (any). Treasure: double standard.",
        category: "special-quality",
        source: TR,
        sourceUrl: HOH_PATH,
      },
    ],
  },
  {
    id: "unholy-scion",
    name: "Unholy Scion",
    ruleset: "core",
    timing: "inherited",
    summary: "An inherited template for any living humanoid or animal, born when a fiend's offspring is conceived in an area of high taint, or when a fiend mentally possesses an unborn child. Type changes to outsider (evil, native) without recalculating Hit Dice, BAB, or saves; it gains a deflection bonus to AC equal to its Charisma modifier (minimum 1), claws, familial charm, spell-like abilities by Hit Dice, and unholy strike, plus damage reduction by HD, fast healing 4, immunities, resistances, and spell resistance equal to HD + 10 (maximum 35). CR: HD 4 or less, as base creature +1; HD 5–10, +2; HD 11 or more, +3. Level adjustment +5.",
    source: `${US} (pp. 155-157)`,
    sourceUrl: HOH_PATH,
    crModifier: 1,
    levelAdjustment: 5,
    prerequisites: [
      { note: "Can be added to any living humanoid or animal. Animal scions are exceptionally rare; the overwhelming majority are humanoids." },
    ],
    abilityModifiers: { dex: 2, int: 6, wis: 2, cha: 4 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to outsider (evil, native). Do not recalculate Hit Dice, base attack bonus, or saving throws. Size is unchanged." },
    ],
    features: [
      {
        key: "unholy-scion-claws",
        name: "Claws",
        description: "Unholy scions have claw attacks (damage by size: Fine 1, Diminutive 1, Tiny 1d2, Small 1d3, Medium 1d4, Large 1d6, Huge 1d8, Gargantuan 2d6, Colossal 3d6), using these values or the base creature's, whichever is greater.",
        category: "special-attack",
        source: US,
        sourceUrl: HOH_PATH,
      },
      {
        key: "unholy-scion-familial-charm",
        name: "Familial Charm (Su)",
        description: "The scion's mother is under a constant charm person or charm animal effect (as appropriate) generated by the scion, with no save allowed; it applies even before the scion's birth. The scion can switch between its own senses and its mother's at will as a free action, and can use any of its spell-like abilities with its mother, rather than itself, as the source.",
        category: "special-attack",
        source: US,
        sourceUrl: HOH_PATH,
      },
      {
        key: "unholy-scion-spell-like-abilities",
        name: "Spell-Like Abilities (Sp)",
        description: "A scion with an Intelligence or Wisdom score of 8 or higher has cumulative spell-like abilities by Hit Dice (each 1/day unless noted; caster level equals HD; save DCs are Charisma-based): HD 1–2: charm animal or charm person 3/day (animal or person per the base creature's kind). HD 3–4: desecrate. HD 5–6: enervation, protection from good 3/day. HD 7–8: major image 3/day, poison 3/day. HD 9–10: dominate animal or dominate person, baleful polymorph. HD 11–12: animate dead (control up to four times its HD in skeletons and zombies), true seeing 3/day. HD 13–14: unholy aura 3/day, unhallow. HD 15–16: harm. HD 17–18: gate (only to the home plane of the parent or possessing fiend; to the Abyss if created by taint). HD 19–20: polymorph any object.",
        category: "special-attack",
        source: US,
        sourceUrl: HOH_PATH,
      },
      {
        key: "unholy-scion-unholy-strike",
        name: "Unholy Strike (Su)",
        description: "The scion's natural weapons and any melee weapon it wields are treated as evil-aligned for overcoming damage reduction, and all such attacks deal an extra 2d6 points of damage against good-aligned opponents.",
        category: "special-attack",
        source: US,
        sourceUrl: HOH_PATH,
      },
      {
        key: "unholy-scion-defenses",
        name: "Scion Defenses",
        description: "Deflection bonus to AC equal to its Charisma modifier (minimum 1). Damage reduction 5/good or magic (HD 11 or less) or 10/good or magic (HD 12 or more). Darkvision out to 60 feet. Fast healing 4. Immunity to poison and mind-affecting spells and abilities. Resistance to acid 5, cold 5, electricity 5, and fire 5. Spell resistance equal to HD + 10 (maximum 35).",
        category: "special-quality",
        source: US,
        sourceUrl: HOH_PATH,
      },
      {
        key: "unholy-scion-instant-knowledge",
        name: "Instant Knowledge",
        description: "The moment a fetus is corrupted or possessed, it gains a working knowledge of the world and full access to its mental abilities, skills, and spell-like abilities (its Intelligence, Wisdom, and Charisma modifiers apply even before birth). The scion gains skill points as an outsider — (8 + Int modifier) × (HD + 3) — for its racial Hit Dice only, not class levels; skills from the base creature's list are class skills. Alignment: always evil (any). Treasure: as base creature.",
        category: "special-quality",
        source: US,
        sourceUrl: HOH_PATH,
      },
    ],
  },
];
