// Dragon Magazine #344 (Jun 2006) — feats draft: 9 records.
// The nine Ambush feats from Class Acts, "Out of the Shadows"
// (Hal Maclean), pp. 102–103 — the article that introduced the ambush
// feat mechanic (later collected, with changes, in Complete Scoundrel).
// All texts verified against the rendered page images (folios 102–103);
// the image governs over the OCR stream.
// House shape: ambush feats carry category "combat" (the app has no
// ambush category — the convention recorded in the live Complete
// Scoundrel feats file), benefitSummary leads with "[Ambush.]", and the
// article's shared ambush-feat frame rule rides in each record's
// `special` field. Benefit texts are faithful mechanical paraphrases.

import type { FeatDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #344 — Class Acts: Out of the Shadows (Hal Maclean), pp. 102–103";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "combat",
    prerequisites: [],
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const AMBUSH_FRAME =
  "Ambush feat. Unless otherwise noted, any reference to sneak attack in an ambush feat also includes skirmish, sudden strike, and any other class ability that allows a precision-based attack dealing extra damage. You must declare your intent to use an ambush feat's ability before making your attack roll, and you must deal at least one extra die of damage with the attack. You may apply multiple ambush feats to the same attack so long as you still deal at least one extra die of damage with it. Creatures immune to sneak attacks are immune to the secondary effects created by ambush feats.";

export const DRAGON_344_FEATS: FeatDefinition[] = [
  F({
    id: "burning-link",
    name: "Burning Link",
    prerequisites: ["Knowledge (arcana) 1 rank", "Knowledge (nature) 1 rank", "sneak attack +3d6"],
    benefitSummary:
      "[Ambush.] You can harm creatures possessing a mystical connection to your opponent. Benefit: By reducing your sneak attack damage by two damage dice, you can deal sneak attack damage to a creature linked with your target from a class ability — such as a druid or ranger's animal companion, a sorcerer or wizard's familiar, or a paladin's special mount. Only your sneak attack damage (what remains after subtracting two dice to use this feat) applies, and that damage only affects the target's linked creature, not your target; the base damage of your weapon, your Strength bonus, poison, and similar types of damage do not transfer and apply to your target normally. A creature has a special connection to your target if it gains Hit Dice, hit points, or other abilities due to the target's level. Creatures of a type normally immune to sneak attack damage (such as constructs or undead) are immune to the effects of this feat.",
    special: AMBUSH_FRAME,
  }),
  F({
    id: "dazzling-strike",
    name: "Dazzling Strike",
    prerequisites: ["sneak attack +2d6"],
    benefitSummary:
      "[Ambush.] Your attack reflects light into your opponent's face, leaving him with watering eyes. Benefit: By reducing your sneak attack damage by one damage die, your attack leaves your opponent dazzled for 1 round. If you reduce your sneak attack damage by more than one die, the duration of the dazzle effect increases by 1 round per damage die reduction. You and your foe must both be in an area of bright illumination for you to make use of this feat.",
    special: AMBUSH_FRAME,
  }),
  F({
    id: "eldritch-erosion-344",
    name: "Eldritch Erosion",
    prerequisites: ["sneak attack +3d6"],
    benefitSummary:
      "[Ambush.] You can weaken your opponent's ability to withstand magical threats. Benefit: By reducing your sneak attack damage by two damage dice, you can reduce the target's spell resistance by 5 (minimum 1) for 1 minute. Multiple attacks made with this feat do not stack. Each use of this feat begins the 1 minute duration anew.",
    special:
      AMBUSH_FRAME +
      " This is the feat's original Dragon #344 printing. The live catalog's separate Eldritch Erosion record (Complete Scoundrel) is a different version — different prerequisites (sneak attack +4d6), a larger damage-dice cost, and a different duration — and both records stand side by side; see SCREENING.md.",
  }),
  F({
    id: "flurry-of-throws",
    name: "Flurry of Throws",
    prerequisites: [
      "Dex 13",
      "Point Blank Shot",
      "Precise Shot",
      "Rapid Shot",
      "Weapon Focus (shuriken)",
      "Acrobatics (as printed; no such skill exists in D&D 3.5 — see SCREENING.md)",
      "sudden strike +4d6",
    ],
    benefitSummary:
      "[Ambush.] When you catch opponents unawares you can unleash a storm of shuriken striking at their most vulnerable points. Benefit: As part of a full-round attack using Rapid Shot, you can throw additional shuriken by reducing your sudden strike damage. You make every attack in the round with a -2 penalty. For each die by which you reduce your sudden strike damage you gain one additional attack, and you deal your remaining damage dice to each target struck by this ability. You can sacrifice up to three bonus damage dice to gain three extra attacks in a round. Each target of a shuriken attack made by this ability must be vulnerable to your sudden strike (that is, it does not currently have a Dexterity bonus to AC), and each shuriken you throw in this way must target a different creature. Other attacks you make as part of your full attack action that are not extra attacks from Rapid Shot or Flurry of Throws do not have to be made with shuriken, and they do not gain bonus sudden strike damage. For example, a 13th-level ninja uses Rapid Shot and Flurry of Throws to make six attacks (two normal attacks plus one Rapid Shot attack plus three Flurry of Throws attacks) with the following base attack bonuses: +6/+1/+6/+6/+6/+6; his three Flurry of Throws attacks deal normal shuriken damage plus 4d6 points of sudden strike damage and must be made against three different foes who lack their Dexterity bonuses to AC.",
    special:
      AMBUSH_FRAME +
      " Printed with a ninja-class worked example; staged as printed and flagged in SCREENING.md (the feat itself is not oriental material — its engine is the sudden strike ability — but the flag is Shaun's to rule on).",
  }),
  F({
    id: "hinder",
    name: "Hinder",
    prerequisites: ["Improved Initiative", "skirmish +2d6"],
    benefitSummary:
      "[Ambush.] Your attack leaves your opponent limping in pain. Benefit: By reducing your skirmish damage by one damage die, you can reduce your target's base land speed by up to 10 feet for 1 minute. Multiple attacks made with this feat stack, but you cannot reduce a creature's base land speed below 5 feet. This feat does not affect any other type of movement, such as flying or climbing. Special: A scout may take Hinder as one of her scout bonus feats (see page 13 of Complete Adventurer).",
    special: AMBUSH_FRAME,
  }),
  F({
    id: "lacerate",
    name: "Lacerate",
    prerequisites: [
      "Str 13",
      "Int 13",
      "Combat Expertise",
      "Improved Disarm",
      "Painful Strike (the Ambush feat from this same article — see painful-strike-344; a different feat of this name from The Quintessential Rogue does not qualify)",
      "Power Attack",
      "sneak attack +4d6",
    ],
    benefitSummary:
      "[Ambush.] With a single viper-swift blow you strike and temporarily paralyze your opponent's hand. Benefit: By reducing your sneak attack damage by three damage dice, you can make a melee attack that causes your target to lose the use of one of his hands (your choice) for 1 minute. Your target can make a Fortitude save to resist (DC 10 + 1/2 your level + damage dealt). If he fails the save he drops whatever he is holding in that hand, cannot use two-handed weapons, and he may not engage in any action that requires the use of both hands (such as using the Climb or Use Rope skills). Special: This feat only affects living creatures able to feel pain.",
    special: AMBUSH_FRAME,
  }),
  F({
    id: "painful-strike-344",
    name: "Painful Strike",
    prerequisites: ["Str 13", "Power Attack", "sneak attack +3d6"],
    benefitSummary:
      "[Ambush.] Your attack causes your opponent intense agony. Benefit: By reducing your sneak attack damage by two damage dice, you can strike to cause your target intense, throbbing pain. This pain imposes a -2 penalty on attack rolls, skill checks, and ability checks for 1 minute. Special: This feat only affects living creatures able to feel pain.",
    special:
      AMBUSH_FRAME +
      " A different feat also named Painful Strike (from The Quintessential Rogue) already stands in the live catalog under the plain id; this Dragon #344 Ambush feat is a separate record — see SCREENING.md.",
  }),
  F({
    id: "ring-the-ear",
    name: "Ring the Ear",
    prerequisites: ["Improved Unarmed Strike", "sneak attack +2d6"],
    benefitSummary:
      "[Ambush.] A mighty buffet leaves your opponent reeling and his ears buzzing. Benefit: By reducing your sneak attack damage by one damage die you can make a special unarmed strike attack that forces your target to make a Fortitude save (DC 10 + 1/2 your class level + your Str modifier). If your target fails this save he loses the ability to hear for 1 minute.",
    special: AMBUSH_FRAME,
  }),
  F({
    id: "weaken-the-heart",
    name: "Weaken the Heart",
    prerequisites: ["Base attack bonus +4", "sneak attack +3d6"],
    benefitSummary:
      "[Ambush.] Your attack leaves your opponent gasping for air and watching spots dance before his eyes. Benefit: By reducing your sneak attack damage by two damage dice you can make a special melee attack targeting your foe's vital organs that forces your target to make a Fortitude save (DC 10 + 1/2 your class level + your Int modifier). If your target fails this save, at any time in the next 10 minutes that he attempts to make a Strength-, Dexterity-, or Constitution-based skill check or an ability check using one of these scores he becomes fatigued. If already fatigued he becomes exhausted instead.",
    special: AMBUSH_FRAME,
  }),
];
