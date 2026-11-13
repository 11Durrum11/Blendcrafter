/**
 * Omni sweep Wave 2 (2026-11-02): Shaun Bradley's own house documents —
 * the campaign files that outrank every book in his library. Sources:
 * "1. THE COST OF MAGIC.docx", "3. PILLS, POTIONS, OILS, SALVES &
 * INJECTIONS.docx", "Alchemical stuff.docx", "Arcane prothetics.docx",
 * "AI imagined steampunk prothetics.docx", "arrows.docx" / "104
 * arrows.txt", "dnd-35-grafts-symbionts-components-list.pdf", and
 * "magicItemsCreation.html". All records use ruleset "homebrew" and
 * carry "house-" id prefixes.
 *
 * What is here: every priced item in those documents whose name was
 * not already in the catalog. "Alchemical stuff.docx" turned out to
 * have been mined almost completely by an earlier pass (152 of its
 * 159 priced entries were already cataloged from that same document);
 * only its prose-only items and two "(1 flask)" table-name variants
 * were missing. The two prosthetics documents and the compiled
 * graft/symbiont/component list supplied the bulk of the new records.
 *
 * NOT built, deliberately:
 * - The arrow lists name 104 arrow types but print NO prices for any
 *   of them, so no arrow records could be built (see the omni-sweep
 *   report, house-docs.md).
 * - THE COST OF MAGIC and magicItemsCreation.html are rules/formula
 *   documents (magical destruction table; SRD creation-cost tables).
 *   The single priced consumable in THE COST OF MAGIC — the elemental
 *   alchemical reagent — is built below as equipment.
 * - PILLS, POTIONS, OILS, SALVES & INJECTIONS is a rules document
 *   (house Brew Potion feat chain, potion miscibility tables); its
 *   potion bar and the injector syringe carry no price in the
 *   document, so nothing was built from it.
 * - Grafts, symbionts, and components the compiled list names WITHOUT
 *   a price (the aboleth, beholder, fiendish, illithid, maug, undead,
 *   and silthilar graft families, the Fiend Folio symbionts, the
 *   docent, the final messenger, the spare hand, and the Essence of
 *   the Scout line) were not built; they are enumerated in the
 *   report.
 * - Arcane prosthetic MODIFICATIONS (armor, hidden weapon, enhanced
 *   strength, etc.) are priced in DC points folded into the frame's
 *   computed cost, not in standalone gp, so they are not records.
 *
 * Price conflicts involving these house documents (house documents
 * outrank book records) are itemized in the omni-sweep report:
 * Vanguard Treads 3,000 gp (house list) vs. 3,100 gp (MIC record);
 * Weapon Blanch, Cold Iron 50 gp vs. 20 gp and Weapon Blanch, Ghost
 * Salt 200 gp vs. 20 gp (the two tables INSIDE Alchemical stuff.docx
 * disagree with each other); Poppy Tears 20 gp (table) vs. 15 gp
 * (prose) inside the same document. Nothing existing was edited.
 * Prices and names are exactly as the documents print them;
 * summaries and notes are the documents' content in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const HOUSE_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "house-clockwork-piston-arm",
    "name": "Clockwork Piston Arm",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A brass-plated prosthetic arm driven by internal steam pistons. It grants a +2 or +4 inherent bonus to Strength checks involving that arm, but the jerking motion imposes a -2 penalty on delicate Sleight of Hand checks.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Steampunk (Clockwork & Tech) Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-gondian-multi-tool-hand",
    "name": "Gondian Multi-Tool Hand",
    "category": "wondrous-slotless",
    "cost": "2,500 gp",
    "summary": "A prosthetic hand whose fingers retract or fold back to reveal high-quality thieves' tools, a magnifying glass, a small blowtorch, or a heavy wrench. It counts as a masterwork tool for Disable Device and Open Lock checks.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Steampunk (Clockwork & Tech) Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-spring-loaded-dagger-forearm",
    "name": "Spring-Loaded Dagger Forearm",
    "category": "wondrous-slotless",
    "cost": "2,000 gp",
    "summary": "A prosthetic forearm with a hidden compartment housing a spring blade. Extending or retracting the blade is a free action, and the wearer gains a +4 bonus on Sleight of Hand checks to conceal the weapon.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Steampunk (Clockwork & Tech) Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-pneumatic-shield-arm",
    "name": "Pneumatic Shield Arm",
    "category": "wondrous-slotless",
    "cost": "4,150 gp",
    "summary": "A prosthetic forearm fitted with a folded, segmented iron plate. As an immediate action the plate snaps open and works as a heavy shield (+2 AC), but the hand is unusable while it is deployed.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Steampunk (Clockwork & Tech) Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-piston-heel-pegleg",
    "name": "Piston-Heel Pegleg",
    "category": "wondrous-slotless",
    "cost": "2,000 gp",
    "summary": "A heavy brass pegleg with a powerful internal compression spring. Triggering the spring grants a +10 competence bonus on a single Jump check, after which it takes a move action to reset the spring by hand.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Steampunk (Clockwork & Tech) Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-clockwork-braced-leg",
    "name": "Clockwork Braced Leg",
    "category": "wondrous-slotless",
    "cost": "5,000 gp",
    "summary": "A full prosthetic leg of articulated steel rods and gears that locks instantly into place when the wearer stands still. It grants a +4 bonus to resist bull rush and trip attempts.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Steampunk (Clockwork & Tech) Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-steam-vented-grapple-leg",
    "name": "Steam-Vented Grapple Leg",
    "category": "wondrous-slotless",
    "cost": "3,500 gp",
    "summary": "A prosthetic calf that fires its foot out by compressed air as a grappling hook attached to 50 feet of steel cable. The wearer can winch themselves up walls with it.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Steampunk (Clockwork & Tech) Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-gondian-monocle-eye",
    "name": "Gondian Monocle Eye",
    "category": "wondrous-slotless",
    "cost": "4,000 gp",
    "summary": "A brass eye socket holding rotating, multi-layered lenses the user can switch between magnification settings. It grants a +4 competence bonus on Search and Appraise checks, but a -2 penalty to Spot checks beyond 30 feet.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Steampunk (Clockwork & Tech) Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-acoustic-brass-ear",
    "name": "Acoustic Brass Ear",
    "category": "wondrous-slotless",
    "cost": "4,000 gp",
    "summary": "A stylized brass funnel attached to a mechanical drum inside the skull that filters out wind noise, granting a +2 bonus on Listen checks. The wearer is highly vulnerable to sonic damage, taking a -2 penalty on saving throws against sonic attacks.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Steampunk (Clockwork & Tech) Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-gilded-mage-hand",
    "name": "Gilded Mage-Hand",
    "category": "wondrous-slotless",
    "cost": "10,000 gp",
    "summary": "A pristine prosthetic hand sculpted from solid gold or silver and etched with glowing blue runes linked to the Weave. It acts as a permanent mage hand effect, letting the user detach the hand and float it up to 30 feet away under mental control.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Arcane & Alchemical Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-elemental-forge-arm",
    "name": "Elemental Forge-Arm",
    "category": "wondrous-slotless",
    "cost": "18,000 gp",
    "summary": "A prosthetic arm crafted from volcanic obsidian and bound with an imprisoned fire elemental. The hand radiates heat, dealing an extra 1d6 fire damage on successful unarmed strikes, and the user gains fire resistance 5.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Arcane & Alchemical Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-alchemical-toxin-claw",
    "name": "Alchemical Toxin Claw",
    "category": "wondrous-slotless",
    "cost": "12,000 gp",
    "summary": "A green-veined glass and ceramic prosthetic arm filled with shifting alchemical fluid. Once per day the user can deliver a touch attack that replicates the effects of a ghoul touch or poison spell.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Arcane & Alchemical Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-living-wood-arm",
    "name": "Living Wood Arm",
    "category": "wondrous-slotless",
    "cost": "6,000 gp",
    "summary": "A prosthetic arm grown from a living treant or twilight grove branch. It behaves exactly like a real arm, heals itself naturally over time, and lets the user cast goodberry or entangle once per day.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Arcane & Alchemical Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-gust-stride-greave",
    "name": "Gust-Stride Greave",
    "category": "wondrous-slotless",
    "cost": "11,000 gp",
    "summary": "A hollow, translucent marble prosthetic leg swirling with elemental air currents. It reduces the user's weight by half and increases base land speed by 10 feet.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Arcane & Alchemical Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-shadow-stitched-leg",
    "name": "Shadow-Stitched Leg",
    "category": "wondrous-slotless",
    "cost": "20,000 gp",
    "summary": "A prosthetic leg woven from raw shadow-stuff that makes no sound when it touches the ground, granting a +4 competence bonus to Move Silently checks. Once per day the user can initiate a short dimension door between shadows.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Arcane & Alchemical Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-stonemeld-prosthetic",
    "name": "Stonemeld Prosthetic",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A prosthetic leg carved from solid granite that merges seamlessly with the user's flesh. When the user stands on unworked stone, they gain the dwarf's stability trait and cannot be knocked prone.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Arcane & Alchemical Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-magisters-sapphire-eye",
    "name": "Magister's Sapphire Eye",
    "category": "wondrous-slotless",
    "cost": "15,000 gp",
    "summary": "A flawless blue gemstone set into the eye socket that taps into the Weave. It grants continuous detect magic or see invisibility out to 60 feet.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Arcane & Alchemical Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-chitinous-tremor-ear",
    "name": "Chitinous Tremor-Ear",
    "category": "wondrous-slotless",
    "cost": "12,000 gp",
    "summary": "An insectoid, segmented internal ear organ adapted from Underdark monsters. It grants tremorsense out to 30 feet, but robs the wearer of the ability to hear normal spoken language clearly.",
    "source": "AI imagined steampunk prothetics.docx (house document) — Arcane & Alchemical Prosthetics table",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-ssllalans-juggernaut",
    "name": "S'sllalans Juggernaut",
    "category": "artifact",
    "cost": "285,000 gp",
    "summary": "The oversized adamantine left arm (+4) of the drow weapon master S'sllalan, possibly the largest arcane prosthetic known: Strength 30, hardness 20, hp 180, 65 lb., with enhanced strength, oversized construction, claws, and a hidden weapon. It needs special harnesses and reinforced moorings, and it can wield large weapons in one hand.",
    "source": "Arcane prothetics.docx (house document) — Arcane Prosthetics of Renown",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-dimblesnips-steel-arm",
    "name": "Dimblesnips Steel Arm",
    "category": "artifact",
    "cost": "33,000 gp",
    "summary": "Said to be the first arcane prosthetic ever fashioned, made by the svirfneblin visionary Dimblesnip and now kept in a glass case as a relic of the craft. A medium-framed full steel right arm (hardness 12, hp 30, 15 lb., Strength 10) with a modular hand that takes interchangeable tools and weapons at the wrist socket.",
    "source": "Arcane prothetics.docx (house document) — Arcane Prosthetics of Renown",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-legs-of-theratis-az-rian",
    "name": "Legs of Theratis Az-Rian",
    "category": "artifact",
    "cost": "130,000 gp",
    "summary": "A matched pair of large-framed adamantine legs (+2) built over nearly five years by Theratis Az'rian's father: hardness 20, hp 180, 65 lb. for the pair, Strength 20, with armor, enhanced strength, heel spikes, and a hidden +4 mace. While wearing them she has no cap on her Jump checks and suffers no penalties for overland travel. The price is for both legs.",
    "source": "Arcane prothetics.docx (house document) — Arcane Prosthetics of Renown",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-drelloths-hammerfist",
    "name": "Drelloths Hammerfist",
    "category": "artifact",
    "cost": "156,000 gp",
    "summary": "The large prosthetic arm (+4) of Drelloth Furyfoe of Citadel Nossuth, whose modular hand is replaced with a huge fist-shaped +4 warhammer (or occasionally a +4 morningstar). Hardness 13, hp 150, 40 lb., Strength 19, with armor and enhanced strength modifications.",
    "source": "Arcane prothetics.docx (house document) — Arcane Prosthetics of Renown",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-added-tail",
    "name": "Added Tail",
    "category": "wondrous-slotless",
    "cost": "6,000 gp",
    "summary": "A yuan-ti graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Fiend Folio; reprinted in Serpent Kingdoms). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Yuan-ti grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-poison-fangs",
    "name": "Poison Fangs",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A yuan-ti graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Fiend Folio; reprinted in Serpent Kingdoms). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Yuan-ti grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-replacement-tail",
    "name": "Replacement Tail",
    "category": "wondrous-slotless",
    "cost": "12,000 gp",
    "summary": "A yuan-ti graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Fiend Folio; reprinted in Serpent Kingdoms). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Yuan-ti grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-scaly-skin",
    "name": "Scaly Skin",
    "category": "wondrous-slotless",
    "cost": "36,000 gp",
    "summary": "A yuan-ti graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Fiend Folio; reprinted in Serpent Kingdoms). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Yuan-ti grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-dragonbone-legs",
    "name": "Dragonbone Legs",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A draconic graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Races of the Dragon graft table; the list notes the Wyrmgrafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Draconic grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-gleaming-scales",
    "name": "Gleaming Scales",
    "category": "wondrous-slotless",
    "cost": "9,000 gp",
    "summary": "A draconic graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Races of the Dragon graft table; the list notes the Wyrmgrafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Draconic grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-glaring-eye",
    "name": "Glaring Eye",
    "category": "wondrous-slotless",
    "cost": "10,000 gp",
    "summary": "A draconic graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Races of the Dragon graft table; the list notes the Wyrmgrafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Draconic grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-dragonheart-presence",
    "name": "Dragonheart Presence",
    "category": "wondrous-slotless",
    "cost": "12,000 gp",
    "summary": "A draconic graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Races of the Dragon graft table; the list notes the Wyrmgrafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Draconic grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-frightful-crest",
    "name": "Frightful Crest",
    "category": "wondrous-slotless",
    "cost": "28,000 gp",
    "summary": "A draconic graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Races of the Dragon graft table; the list notes the Wyrmgrafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Draconic grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-smashing-tail",
    "name": "Smashing Tail",
    "category": "wondrous-slotless",
    "cost": "30,000 gp",
    "summary": "A draconic graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Races of the Dragon graft table; the list notes the Wyrmgrafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Draconic grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-taloned-arm",
    "name": "Taloned Arm",
    "category": "wondrous-slotless",
    "cost": "34,000 gp",
    "summary": "A draconic graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Races of the Dragon graft table; the list notes the Wyrmgrafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Draconic grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-metabolic-fire",
    "name": "Metabolic Fire",
    "category": "wondrous-slotless",
    "cost": "56,000 gp",
    "summary": "A draconic graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Races of the Dragon graft table; the list notes the Wyrmgrafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Draconic grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-resilient-scales",
    "name": "Resilient Scales",
    "category": "wondrous-slotless",
    "cost": "70,000 gp",
    "summary": "A draconic graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Races of the Dragon graft table; the list notes the Wyrmgrafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Draconic grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-buffeting-wings",
    "name": "Buffeting Wings",
    "category": "wondrous-slotless",
    "cost": "100,000 gp",
    "summary": "A draconic graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Races of the Dragon graft table; the list notes the Wyrmgrafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Draconic grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-mighty-arms",
    "name": "Mighty Arms",
    "category": "wondrous-slotless",
    "cost": "1,000 gp",
    "summary": "A construct graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Faiths of Eberron construct graft table; the list notes the Construct Grafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Construct grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-heavy-legs",
    "name": "Heavy Legs",
    "category": "wondrous-slotless",
    "cost": "6,000 gp",
    "summary": "A construct graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Faiths of Eberron construct graft table; the list notes the Construct Grafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Construct grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-heart-of-steel",
    "name": "Heart of Steel",
    "category": "wondrous-slotless",
    "cost": "9,000 gp",
    "summary": "A construct graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Faiths of Eberron construct graft table; the list notes the Construct Grafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Construct grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-adamantine-skin",
    "name": "Adamantine Skin",
    "category": "wondrous-slotless",
    "cost": "11,000 gp",
    "summary": "A construct graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Faiths of Eberron construct graft table; the list notes the Construct Grafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Construct grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-wakeful-mind",
    "name": "Wakeful Mind",
    "category": "wondrous-slotless",
    "cost": "14,000 gp",
    "summary": "A construct graft named and priced in the house compiled list of grafts, symbionts, and warforged components (Faiths of Eberron construct graft table; the list notes the Construct Grafter feat). The list gives the price only; the graft's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Construct grafts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-throwing-scarab",
    "name": "Throwing Scarab",
    "category": "wondrous-slotless",
    "cost": "1,000 gp",
    "summary": "A daelkyr symbiont from Magic of Eberron, named with its gp equivalent in the house compiled list of grafts, symbionts, and warforged components. The list gives the price only; the symbiont's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Magic of Eberron symbionts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-breed-leech",
    "name": "Breed Leech",
    "category": "wondrous-slotless",
    "cost": "2,000 gp",
    "summary": "A daelkyr symbiont from Magic of Eberron, named with its gp equivalent in the house compiled list of grafts, symbionts, and warforged components; the list notes that this parasite is what creates daelkyr half-bloods. The list gives the price only; the symbiont's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Magic of Eberron symbionts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-crawling-gauntlet",
    "name": "Crawling Gauntlet",
    "category": "wondrous-slotless",
    "cost": "2,000 gp",
    "summary": "A daelkyr symbiont from Magic of Eberron, named with its gp equivalent in the house compiled list of grafts, symbionts, and warforged components. The list gives the price only; the symbiont's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Magic of Eberron symbionts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-stormstalk",
    "name": "Stormstalk",
    "category": "wondrous-slotless",
    "cost": "4,000 gp",
    "summary": "A daelkyr symbiont from Magic of Eberron, named with its gp equivalent in the house compiled list of grafts, symbionts, and warforged components. The list gives the price only; the symbiont's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Magic of Eberron symbionts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-winter-cyst",
    "name": "Winter Cyst",
    "category": "wondrous-slotless",
    "cost": "4,000 gp",
    "summary": "A daelkyr symbiont from Magic of Eberron, named with its gp equivalent in the house compiled list of grafts, symbionts, and warforged components. The list gives the price only; the symbiont's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Magic of Eberron symbionts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-shadow-sibling",
    "name": "Shadow Sibling",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A daelkyr symbiont from Magic of Eberron, named with its gp equivalent in the house compiled list of grafts, symbionts, and warforged components. The list gives the price only; the symbiont's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Magic of Eberron symbionts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-spellwurm",
    "name": "Spellwurm",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A daelkyr symbiont from Magic of Eberron, named with its gp equivalent in the house compiled list of grafts, symbionts, and warforged components. The list gives the price only; the symbiont's full effects are in the source book.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Magic of Eberron symbionts",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-finger-picks",
    "name": "Finger Picks",
    "category": "wondrous-slotless",
    "cost": "500 gp",
    "summary": "An embedded warforged component named and priced in the house compiled list of grafts, symbionts, and warforged components (expanded component tables from Races of Eberron, Magic of Eberron, Forge of War, and Explorer's Handbook). The list gives the price only; the component's full effects are in the source books.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Warforged components (expanded)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-traction-claws",
    "name": "Traction Claws",
    "category": "wondrous-slotless",
    "cost": "4,000 gp",
    "summary": "An attached warforged component named and priced in the house compiled list of grafts, symbionts, and warforged components (expanded component tables from Races of Eberron, Magic of Eberron, Forge of War, and Explorer's Handbook). The list gives the price only; the component's full effects are in the source books.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Warforged components (expanded)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-essence-of-the-guard",
    "name": "Essence of the Guard",
    "category": "wondrous-slotless",
    "cost": "6,250 gp",
    "summary": "An embedded warforged component named and priced in the house compiled list of grafts, symbionts, and warforged components (expanded component tables from Races of Eberron, Magic of Eberron, Forge of War, and Explorer's Handbook). The list gives the price only; the component's full effects are in the source books.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Warforged components (expanded)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-command-circlet",
    "name": "Command Circlet",
    "category": "wondrous-slotless",
    "cost": "12,500 gp",
    "summary": "An attached warforged component named and priced in the house compiled list of grafts, symbionts, and warforged components (expanded component tables from Races of Eberron, Magic of Eberron, Forge of War, and Explorer's Handbook). The list gives the price only; the component's full effects are in the source books.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Warforged components (expanded)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-somatic-cables",
    "name": "Somatic Cables",
    "category": "wondrous-slotless",
    "cost": "16,200 gp",
    "summary": "An embedded warforged component named and priced in the house compiled list of grafts, symbionts, and warforged components (expanded component tables from Races of Eberron, Magic of Eberron, Forge of War, and Explorer's Handbook). The list gives the price only; the component's full effects are in the source books.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Warforged components (expanded)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-tracker-mask",
    "name": "Tracker Mask",
    "category": "wondrous-slotless",
    "cost": "18,000 gp",
    "summary": "An attached warforged component named and priced in the house compiled list of grafts, symbionts, and warforged components (expanded component tables from Races of Eberron, Magic of Eberron, Forge of War, and Explorer's Handbook). The list gives the price only; the component's full effects are in the source books.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Warforged components (expanded)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-monocle-of-the-ebon-hunter-lesser",
    "name": "Monocle of the Ebon Hunter, Lesser",
    "category": "wondrous-slotless",
    "cost": "18,000 gp",
    "summary": "An embedded warforged component named and priced in the house compiled list of grafts, symbionts, and warforged components (expanded component tables from Races of Eberron, Magic of Eberron, Forge of War, and Explorer's Handbook). The list gives the price only; the component's full effects are in the source books.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Warforged components (expanded)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-essence-of-the-guard-improved",
    "name": "Essence of the Guard, Improved",
    "category": "wondrous-slotless",
    "cost": "25,000 gp",
    "summary": "An embedded warforged component named and priced in the house compiled list of grafts, symbionts, and warforged components (expanded component tables from Races of Eberron, Magic of Eberron, Forge of War, and Explorer's Handbook). The list gives the price only; the component's full effects are in the source books.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Warforged components (expanded)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-projection-orb",
    "name": "Projection Orb",
    "category": "wondrous-slotless",
    "cost": "25,200 gp",
    "summary": "An embedded warforged component named and priced in the house compiled list of grafts, symbionts, and warforged components (expanded component tables from Races of Eberron, Magic of Eberron, Forge of War, and Explorer's Handbook). The list gives the price only; the component's full effects are in the source books.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Warforged components (expanded)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-essence-of-the-guard-greater",
    "name": "Essence of the Guard, Greater",
    "category": "wondrous-slotless",
    "cost": "56,250 gp",
    "summary": "An embedded warforged component named and priced in the house compiled list of grafts, symbionts, and warforged components (expanded component tables from Races of Eberron, Magic of Eberron, Forge of War, and Explorer's Handbook). The list gives the price only; the component's full effects are in the source books.",
    "source": "dnd-35-grafts-symbionts-components-list.pdf (house document) — Warforged components (expanded)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  }
];

export const HOUSE_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "house-alchemists-fire-1-flask",
    "name": "Alchemist's fire (1 flask)",
    "category": "alchemical gear",
    "cost": "20 gp",
    "weight": "1 lb.",
    "notes": "The house document's Oils and Flammables table lists the flask under this exact name (the catalog also holds a Goods and Gear record named simply \"Alchemist's Fire\" at the same price). A splash weapon: a direct hit deals 1d6 points of fire damage, creatures within 5 feet take 1 point of splash damage, and on the following round the target takes another 1d6 points unless it extinguishes the flames (full-round action, DC 15 Reflex save). Craft (alchemy) DC 20.",
    "source": "Alchemical_stuff.docx — Oils and Flammables table; document source tag: CRB",
    "sourceUrl": "workspace/user/files/Alchemical_stuff.docx",
    "ruleset": "homebrew"
  },
  {
    "id": "house-acid-1-flask",
    "name": "Acid (1 flask)",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "1 lb.",
    "notes": "The house document's Misc. Substances table lists the flask under this exact name. A splash weapon with a 10-foot range increment: a direct hit deals 1d6 points of acid damage and every creature within 5 feet of the impact takes 1 point of acid damage from the splash. Craft (alchemy) DC 15.",
    "source": "Alchemical_stuff.docx — Misc. Substances table; document source tag: CRB",
    "sourceUrl": "workspace/user/files/Alchemical_stuff.docx",
    "ruleset": "homebrew"
  },
  {
    "id": "house-powder-ball-empty",
    "name": "Powder ball (empty)",
    "category": "alchemical gear",
    "cost": "400 gp",
    "weight": "4 lbs.",
    "notes": "A steel sphere about the size of a cannon ball whose surface is pocked with small holes; it unscrews into two hemispherical pieces. Filled with volatile reagents (see Powder ball fuel) and fitted with a proprietary fuse, it works as a time-delayed explosive that bursts three times and can then be refilled and used again.",
    "source": "Alchemical_stuff.docx — Misc. Substances descriptions (Powder Ball); document source tag: none listed",
    "sourceUrl": "workspace/user/files/Alchemical_stuff.docx",
    "ruleset": "homebrew"
  },
  {
    "id": "house-powder-ball-fuel",
    "name": "Powder ball fuel",
    "category": "alchemical gear",
    "cost": "300 gp",
    "weight": "1 lb.",
    "notes": "The specific mixture of volatile chemical reagents used to fill a powder ball. Once its fuse is lit (a move action), the loaded ball explodes 1d4 rounds afterward for 2d6 points of fire damage in a 10-foot-radius burst (Reflex DC 15 half), then explodes twice more at short random intervals. The document's prose also says such reagents can typically be purchased for around 200 gp; the record uses the document's printed price line (300 gp).",
    "source": "Alchemical_stuff.docx — Misc. Substances descriptions (Powder Ball); document source tag: none listed",
    "sourceUrl": "workspace/user/files/Alchemical_stuff.docx",
    "ruleset": "homebrew"
  },
  {
    "id": "house-sky-mine",
    "name": "Sky Mine",
    "category": "alchemical gear",
    "cost": "1,000 gp",
    "weight": "500 lbs.",
    "notes": "A 20-foot-diameter cloth balloon filled with a secret, highly flammable gas (included in the price), used by dwarven siege warriors and released over enemy positions with a dummy in a cargo basket beneath it to draw fire. A successful DC 15 check guides it out to 300 feet; shot down with flaming arrows it detonates in a 50-foot-radius burst of flame dealing 10d6 points of fire damage.",
    "source": "Alchemical_stuff.docx — Misc. Substances descriptions (Sky Mine); document source tag: none listed",
    "sourceUrl": "workspace/user/files/Alchemical_stuff.docx",
    "ruleset": "homebrew"
  },
  {
    "id": "house-smoke-stick",
    "name": "Smoke stick",
    "category": "alchemical gear",
    "cost": "20 gp",
    "weight": "1/2 lb.",
    "notes": "The house document's prose headings this item \"smoke stick\" (two words); the catalog also holds a \"Smokestick\" record at the same price. An alchemically treated wooden stick that instantly creates thick, opaque smoke when burned, filling a 10-foot cube as a fog cloud spell; a moderate or stronger wind dissipates the smoke in 1 round, and it dissipates naturally after 1 minute. The stick is consumed after 1 round.",
    "source": "Alchemical_stuff.docx — Misc. Substances descriptions (smoke stick); document source tag: none listed",
    "sourceUrl": "workspace/user/files/Alchemical_stuff.docx",
    "ruleset": "homebrew"
  },
  {
    "id": "house-spell-scorch",
    "name": "Spell scorch",
    "category": "alchemical gear",
    "cost": "200 gp/dose",
    "weight": "—",
    "notes": "A poison refined from rare underground crystals that causes a burning headache impeding spellcasting (injury poison, Fortitude DC 14). A target that fails its save must make a Concentration check (DC 10 + spell level) to cast any spell for 1 minute, and all other Concentration checks to cast spells take a -5 penalty; cure is 1 save. The document's table leaves the price blank (\"?? gp\"); the price here is the 200 gp/dose given in the document's own prose entry.",
    "source": "Alchemical_stuff.docx — Misc. Substances descriptions (Spell scorch); document source tag: none listed",
    "sourceUrl": "workspace/user/files/Alchemical_stuff.docx",
    "ruleset": "homebrew"
  },
  {
    "id": "house-alchemical-reagent",
    "name": "Alchemical Reagent",
    "category": "alchemical gear",
    "cost": "25 gp per spell level",
    "weight": "1/10 lb.",
    "notes": "Since the scarring of the crystal sphere, every spell with an elemental descriptor (fire, air, earth, or water) requires an alchemical reagent aligned to that element, added as an extra material component, or the spell fails — even if the spell normally has no material component. Each casting consumes one reagent worth 25 gp per level of the spell cast, and lesser or greater substitutions are not suitable, so a caster carries reagents matched to each spell level.",
    "source": "1. THE COST OF MAGIC.docx (house document) — Elemental descriptor magic",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arcane-prosthetic-frame-small",
    "name": "Arcane Prosthetic Frame, Small",
    "category": "gear",
    "cost": "3,000 gp",
    "weight": "5 lb.",
    "notes": "Base frame for an arcane prosthetic hand (hands for Medium and Large wearers are this size), or a half-arm for a Small wearer. It has three modification slots, a base Craft (engineering) DC of 23, and deals 1d4 damage on attacks, provoking attacks of opportunity unless the owner has Improved Unarmed Combat. The cost is the base cost before the material multiplier and modification DCs are added.",
    "source": "Arcane prothetics.docx (house document) — Frames",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arcane-prosthetic-frame-medium",
    "name": "Arcane Prosthetic Frame, Medium",
    "category": "gear",
    "cost": "6,000 gp",
    "weight": "15 lb.",
    "notes": "Base frame for an arcane prosthetic half-arm or half-leg, or a full arm or leg for a Small wearer. It has six modification slots, a base Craft (engineering) DC of 26, and deals 1d4 damage on attacks that count as armed and do not provoke attacks of opportunity. The cost is the base cost before the material multiplier and modification DCs are added.",
    "source": "Arcane prothetics.docx (house document) — Frames",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arcane-prosthetic-frame-large",
    "name": "Arcane Prosthetic Frame, Large",
    "category": "gear",
    "cost": "9,000 gp",
    "weight": "25 lb.",
    "notes": "Base frame for a full arcane prosthetic arm or leg. It has eight modification slots, a base Craft (engineering) DC of 29, and deals 1d6 damage on attacks that count as armed and do not provoke attacks of opportunity. The cost is the base cost before the material multiplier and modification DCs are added.",
    "source": "Arcane prothetics.docx (house document) — Frames",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arcane-prosthetics-workshop",
    "name": "Arcane Prosthetics Workshop",
    "category": "gear",
    "cost": "40,000 gp",
    "weight": "—",
    "notes": "Creating an arcane prosthetic requires a fully stocked workshop complete with lathes, steel punches, forge and bellows, plus the finest tools. The document states the total cost of such a workshop runs a minimum of 40,000 gp; the record uses that minimum.",
    "source": "Arcane prothetics.docx (house document) — Craft (Engineering Arcane Prosthetics)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  }
];
