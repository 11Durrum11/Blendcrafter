// Dragon Magazine #340 (February 2006) — template draft: 1 template.
// The CAULDRON SPAWN, from "Novel Approach: The Black Cauldron"
// (Joshua Cole), p. 79 — an acquired template for the corpse of a
// once-living corporeal creature, applied when a body is placed in the
// Cauldron of Corruption (staged in magic-items-draft.ts) with no spell
// cast: 3 rounds later it arises as a cauldron spawn, enslaved to the
// cauldron and whoever placed the body.
// The survey listed Novel Approach as reference-only; the article
// prints a full artifact and a full template, and templates are a
// catalog type — both stage. See MANIFEST.md survey corrections.
// Everything was verified against the rendered page image (magazine
// p. 79); the image governs over the OCR stream — it fixes the natural
// armor table (Diminutive/Fine/Tiny +2, Small +4, Medium +6, Large +8)
// and the claw damage table (Diminutive or Fine 1, Tiny 1d2, Small 1d3,
// Medium 1d4, Large 1d6). The printed damage reduction is already in
// 3.5 form (DR 5/-); no 3.0 conversion was needed. The article prints
// no level adjustment; LA is recorded as 0 with that noted.
// APOC: cauldron spawn are ordinary (if foul) necromantic undead — the
// template stages as printed, and the standing APOC undead house rules
// (maximized hit points, +4 turn resistance, re-rolled resistance)
// apply on top at the table, as with every undead record.

import type { TemplateDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #340 — Novel Approach: The Black Cauldron (Joshua Cole), p. 79";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

export const DRAGON_340_TEMPLATES: TemplateDefinition[] = [
  {
    id: "cauldron-spawn",
    name: "Cauldron Spawn",
    ruleset: "core",
    timing: "acquired",
    summary:
      "Acquired template for the corpse of a once-living corporeal creature with Intelligence 6 or higher, Large or smaller, animated by the Cauldron of Corruption: type becomes undead (with the augmented subtype if applicable), all current and future Hit Dice become d12s, natural armor is set by size (+2 to +8), it gains a claw attack per hand, damage reduction 5/-, spell resistance 11 + 1/2 its Hit Dice, an unnerving presence, and the born of the cauldron and mindless qualities; Dexterity and Charisma each increase by +4. Challenge rating is the base creature's +2. No level adjustment is printed.",
    source: SRC,
    sourceUrl: SRC_URL,
    crModifier: 2,
    levelAdjustment: 0,
    prerequisites: [
      {
        note: "“Cauldron spawn” is an acquired template that can be added to the corpse of any creature that was once a living corporeal creature with an Intelligence of 6 or higher. Such creatures must be Large or smaller to fit within the Cauldron of Corruption and gain this template. A cauldron spawn uses all the base creature's statistics and abilities except as noted in the template.",
      },
    ],
    abilityModifiers: { dex: 4, cha: 4 },
    patches: [
      { op: "set-type", value: "Undead", note: "The creature's type changes to undead. Do not recalculate the creature's Hit Dice, base attack bonus, or skill points for the type change (but all current and future Hit Dice become d12s). Size is unchanged." },
      { op: "add-subtype", value: "Augmented", note: "The creature gains the augmented subtype if necessary (augmented by its original type, e.g. augmented humanoid)." },
    ],
    features: [
      {
        key: "cauldron-spawn-natural-armor",
        name: "Natural Armor by Size",
        description:
          "The cauldron spawn's natural armor bonus changes to a number based on the cauldron born's size: Diminutive, Fine, or Tiny +2; Small +4; Medium +6; Large +8.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "cauldron-spawn-claws",
        name: "Claw Attacks",
        description:
          "A cauldron spawn retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. A creature with hands gains one claw attack per hand; the cauldron spawn can strike with each of its claw attacks at its full base attack bonus. Natural and manufactured weapons deal damage normally. A claw attack deals damage depending on the cauldron spawn's size: Diminutive or Fine 1; Tiny 1d2; Small 1d3; Medium 1d4; Large 1d6. (If the base creature already had claw attacks with its hands, use the cauldron spawn claw damage only if it's better.)",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "cauldron-spawn-unnerving-presence",
        name: "Unnerving Presence (Ex)",
        description:
          "Cauldron spawn act with a deftness unsuited to the undead, which unsettles most living creatures. Creatures within 30 feet of a cauldron spawn must succeed on a Will save or be shaken for 1d4+1 rounds. Whether or not the save is successful, that creature cannot be affected again by the same cauldron spawn's unnerving presence ability for 24 hours. The save DC is Charisma based.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "cauldron-spawn-born-of-the-cauldron",
        name: "Born of the Cauldron (Su)",
        description:
          "A cauldron spawn is difficult to destroy, but it withers and collapses if separated from the Cauldron of Corruption for long periods. A cauldron spawn takes 2 points of Strength damage every day that it is more than 50 miles from the cauldron. Returning to and touching the cauldron immediately restores any Strength damage the spawn has suffered. If the Cauldron of Corruption is destroyed, so are all cauldron spawn.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "cauldron-spawn-dr-sr",
        name: "Damage Reduction and Spell Resistance",
        description:
          "A cauldron spawn has damage reduction 5/- — the ancient evil that animates cauldron spawn makes them particularly resistant to physical attacks. A cauldron spawn also gains spell resistance (Su) equal to 11 + 1/2 its Hit Dice.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "cauldron-spawn-mindless",
        name: "Mindless (Ex)",
        description:
          "Although cauldron spawn have an Intelligence score, they are treated as mindless creatures for the purposes of spells of the enchantment school. Cauldron spawn lose their memories and personality; they retain many of the instincts and skills they possessed in life, but their experiences and prowess are enslaved to the Cauldron of Corruption and its master. A cauldron spawn retains all the special qualities of the base creature and loses all of the base creature's special attacks, gaining unnerving presence instead. Alignment: always neutral evil.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  },
];
