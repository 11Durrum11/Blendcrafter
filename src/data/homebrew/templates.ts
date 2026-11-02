/**
 * Homebrew template pack: Shaun's own homebrew template from his
 * his wild-magic surge table document (Google Drive,
 * modified 2026-10-06), folded into Blendcrafter 2026-10-27 at his
 * direction alongside the document's random tables (see ./tables.ts).
 *
 * Modeling notes (matching the core template pack's conventions):
 * - The template keeps the base creature Undead and adds the [Construct]
 *   subtype, so the only structural patch is "add-subtype"; per the
 *   source document, Hit Dice, BAB, and saves are NOT recalculated.
 * - Natural armor "+4 increase" is an "improve" modifier, as in the core
 *   pack's template wording.
 * - The -5 ft land-speed penalty has no relative-speed patch or
 *   modifier target in the resolver, so it is carried as a trait
 *   feature (Heavy Plating) rather than faked with a set-speed patch
 *   that would need the base creature's speed.
 * - Level adjustment: the source document gives none (it is written
 *   for NPC/monster thralls), so levelAdjustment is 0 and the CR
 *   modifier is the document's +1.
 */
import type { TemplateDefinition } from "@/engine/types";

const HOMEBREW_DOC = "Shaun Bradley — Homebrew Wild-Magic Surge Table (D&D 3.5)";
const HOMEBREW_DOC_URL =
  "https://docs.google.com/document/d/1VY2BIGWKlOy-Ua-quZE05yP2rsiO_pYr/edit";

/**
 * Second source document for this pack: Shaun's "MISC OTHER HOUSE
 * RULES" document (his house-rules doc #4, uploaded 2026-11-02 as
 * workspace/user/files/4._MISC_OTHER_HOUSE_RULES_6_xpih.docx). The
 * Twisted template below is from that document. It is a different
 * template from the D&D Wiki "Twisted Creature" in the
 * homebrew-dandwiki pack (a random-mutation template); Shaun's is a
 * fixed corruption template, and both records stay.
 *
 * Modeling notes for the Twisted template:
 * - The document states no Challenge Rating adjustment and no level
 *   adjustment, so both are recorded as 0 with the omission stated
 *   in the summary (the D&D Wiki Twisted Creature convention).
 * - The document does not label the template inherited or acquired;
 *   it is recorded as "acquired" (a creature becomes twisted).
 * - The type change is conditional (animals and vermin become
 *   magical beasts; every other type is unchanged), which the
 *   unconditional patch ops cannot express, so it is carried as a
 *   trait feature and in the prerequisite note rather than faked
 *   with a "set-type" patch.
 * - Natural armor "+2 improvement" is an "improve" modifier, as in
 *   the Steampunk-Augmented Undead record above. "Intelligence is
 *   at least 3" is a floor, not a delta, so it is carried as a
 *   trait feature rather than an ability modifier.
 */
const DOC4 = "Shaun Bradley — Misc Other House Rules (house-rules doc #4)";
const DOC4_URL = "workspace/user/files/4._MISC_OTHER_HOUSE_RULES_6_xpih.docx";

export const HOMEBREW_TEMPLATES: TemplateDefinition[] = [
  {
    id: "steampunk-augmented-undead",
    name: "Steampunk-Augmented Undead",
    ruleset: "homebrew",
    timing: "acquired",
    summary:
      "A corporeal undead rebuilt as a boiler-driven thrall: bolted iron plating and brass gears grant +4 natural armor and a hydraulic Piston Slam, at the cost of speed and a vulnerability to electricity. Its steam core explodes when it is destroyed.",
    source: HOMEBREW_DOC,
    sourceUrl: HOMEBREW_DOC_URL,
    crModifier: 1,
    levelAdjustment: 0,
    prerequisites: [
      {
        allowedBaseTypes: ["Undead"],
        note: "Can be added to any corporeal undead base creature (such as a zombie, skeleton, ghoul, or wight).",
      },
    ],
    abilityModifiers: { str: 4, dex: -2 },
    patches: [
      {
        op: "add-subtype",
        value: "Construct",
        note: "Type remains Undead, but the creature gains the [Construct] subtype. Do not recalculate Hit Dice, base attack bonus, or base saving throws.",
      },
    ],
    modifiers: [
      {
        id: "steampunk-undead-natural-armor",
        source: "Steampunk-Augmented Undead",
        sourceUrl: HOMEBREW_DOC_URL,
        target: "ac.natural",
        value: 4,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor bonus increases by +4 — the necrotic frame is reinforced with bolted iron plating, heavy rivets, and brass gears.",
      },
    ],
    features: [
      {
        key: "steampunk-undead-piston-slam",
        name: "Piston Slam (Ex)",
        description:
          "Gains a primary natural slam attack if it did not already have one; if it already has a slam, its damage die increases by one step. The strike deals an extra 1d6 bludgeoning damage from the hydraulic power of its piston-driven limbs.",
        category: "special-attack",
        source: HOMEBREW_DOC,
        sourceUrl: HOMEBREW_DOC_URL,
      },
      {
        key: "steampunk-undead-steam-charge",
        name: "Steam Charge (Ex)",
        description:
          "Once per encounter, the creature can take a double-move or charge action at twice its adjusted land speed, powered by its internal pressure valves.",
        category: "special-quality",
        source: HOMEBREW_DOC,
        sourceUrl: HOMEBREW_DOC_URL,
      },
      {
        key: "steampunk-undead-boiler-explosion",
        name: "Boiler Explosion (Ex)",
        description:
          "When reduced to 0 hit points, its internal steam core ruptures: all creatures within 10 feet take 2d6 fire/scalding damage (Reflex DC 13 for half).",
        category: "special-quality",
        source: HOMEBREW_DOC,
        sourceUrl: HOMEBREW_DOC_URL,
      },
      {
        key: "steampunk-undead-alchemical-fortification",
        name: "Alchemical Fortification (Ex)",
        description:
          "The reinforced structural skeleton and integrated construct frame give a 25% chance to completely ignore extra damage from critical hits or sneak attacks.",
        category: "special-quality",
        source: HOMEBREW_DOC,
        sourceUrl: HOMEBREW_DOC_URL,
      },
      {
        key: "steampunk-undead-vulnerability-electricity",
        name: "Vulnerability to Electricity (Ex)",
        description:
          "The dense metal frame and copper gears act as lightning conductors: the creature takes 50% more damage (+50%) from any attack or spell with the [Electricity] descriptor.",
        category: "special-quality",
        source: HOMEBREW_DOC,
        sourceUrl: HOMEBREW_DOC_URL,
      },
      {
        key: "steampunk-undead-heavy-plating",
        name: "Heavy Plating",
        description:
          "The weight of the iron plating decreases the creature's standard land speed by 5 feet (minimum 5 feet). Carried as text: the resolver has no relative-speed patch.",
        category: "trait",
        source: HOMEBREW_DOC,
        sourceUrl: HOMEBREW_DOC_URL,
      },
    ],
  },
  {
    id: "twisted-house",
    name: "Twisted (House)",
    ruleset: "homebrew",
    timing: "acquired",
    summary:
      "Shaun's house 'twisted' template, from his Misc Other House Rules document — not the D&D Wiki Twisted Creature (a separate record in the homebrew-dandwiki pack). The creature gains Smite Good and a Disruptive Attack dealing vile damage, darkvision 60 ft, damage reduction 5/cold iron, immunity to electricity and poison, resistance 10 to acid, cold, and fire, +2 natural armor, and two claw attacks; +4 Strength, +4 Constitution, −2 Charisma, Intelligence at least 3, and its alignment changes to evil. The document gives no CR adjustment and no level adjustment (both recorded as 0).",
    source: DOC4,
    sourceUrl: DOC4_URL,
    crModifier: 0,
    levelAdjustment: 0,
    prerequisites: [
      {
        note: "Shaun's document places no restriction on the base creature: animals or vermin with this template become magical beasts, but otherwise the creature type is unchanged. Do not recalculate the creature's Hit Dice, base attack bonus, saves, or skill points if its type changes.",
      },
    ],
    abilityModifiers: { str: 4, con: 4, cha: -2 },
    patches: [],
    modifiers: [
      {
        id: "twisted-house-natural-armor",
        source: "Twisted (House)",
        sourceUrl: DOC4_URL,
        target: "ac.natural",
        value: 2,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +2 (thus stacking with natural armor the base creature had).",
      },
    ],
    features: [
      {
        key: "twisted-house-size-and-type",
        name: "Size and Type",
        description:
          "A twisted creature uses all the base creature's statistics and abilities except as noted in this template. Animals or vermin with this template become magical beasts, but otherwise the creature type is unchanged. Size is unchanged.",
        category: "trait",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
      {
        key: "twisted-house-smite-good",
        name: "Smite Good (Su)",
        description:
          "Once per day the creature can make a normal melee attack to deal extra damage equal to its HD total (maximum of +20) against a good foe.",
        category: "special-attack",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
      {
        key: "twisted-house-disruptive-attack",
        name: "Disruptive Attack (Su)",
        description:
          "The creature deals an additional 1 point of vile damage when it touches uncorrupted, living, corporeal nonoutsiders.",
        category: "special-attack",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
      {
        key: "twisted-house-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
      {
        key: "twisted-house-damage-reduction",
        name: "Damage Reduction",
        description:
          "Damage reduction 5/cold iron. If the base creature already has one or more of this template's special qualities, use the better value.",
        category: "special-quality",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
      {
        key: "twisted-house-magic-natural-weapons",
        name: "Natural Weapons as Magic",
        description:
          "Its natural weapons are treated as magic weapons for the purpose of overcoming damage reduction.",
        category: "special-quality",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
      {
        key: "twisted-house-immunities",
        name: "Immunities",
        description: "Immunity to electricity and poison.",
        category: "special-quality",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
      {
        key: "twisted-house-resistances",
        name: "Resistances",
        description: "Resistance to acid 10, cold 10, and fire 10.",
        category: "special-quality",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
      {
        key: "twisted-house-claw-attacks",
        name: "Claw Attacks",
        description:
          "A twisted has two claw attacks, which are its primary natural weapons. If the base creature can use weapons, the twisted retains this ability. A twisted without weapons uses a claw when making an attack action; when it has a weapon, it usually uses the weapon instead. These claw attacks deal 1d3 damage for a Medium creature (1d2 for a Small creature and 1d4 for a Large creature). Full attack: a twisted fighting without weapons uses both claws when making a full attack; if armed, it usually uses the weapon as its primary attack, and if it has a hand free, it uses a claw as an additional natural secondary attack.",
        category: "special-attack",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
      {
        key: "twisted-house-ability-adjustments",
        name: "Ability Adjustments",
        description:
          "+4 Strength, +4 Constitution, −2 Charisma (applied in this template's ability modifiers), but Intelligence is at least 3.",
        category: "trait",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
      {
        key: "twisted-house-alignment",
        name: "Alignment",
        description: "Alignment changes to evil.",
        category: "trait",
        source: DOC4,
        sourceUrl: DOC4_URL,
      },
    ],
  },
];
