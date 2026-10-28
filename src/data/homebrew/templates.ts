/**
 * Homebrew template pack: Shaun's own homebrew template from his
 * "HOMEBREW VALLEY WILD-MAGIC SURGE TABLE (D&D 3.5).docx" (Google Drive,
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
];
