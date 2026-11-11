// Dragon Magazine #340 (February 2006) — magic item draft: 14 records.
// TWELVE zodiac items — "Bazaar of the Bizarre: Items of the Zodiac"
// (Mike Mearls), pp. 68-70, one item per sign of the zodiac from "The
// Stars Are Right."
// ONE star-forged item — the Dagger of Stones, the worked example in
// "The Stars Are Right" (Hal Maclean), p. 29.
// ONE major artifact — the Cauldron of Corruption, from "Novel
// Approach: The Black Cauldron" (Joshua Cole), pp. 78-79. (The survey
// listed Novel Approach as reference-only; the article prints a full
// artifact and a full template — the template stages in
// templates-draft.ts. See MANIFEST.md survey corrections.)
// Every price, aura, CL, and weight line was verified against rendered
// page images (magazine pp. 29, 68-70, 78); the image governs over the
// OCR stream. ID NOTE: the cloak of the dragon carries the id
// "cloak-of-the-dragon-340" — the live magic barrel already holds a
// different "cloak-of-the-dragon" (Complete Champion, p. 138); distinct
// items sharing a name, issue-suffixed per house precedent.
// As printed, the ettin's club — a weapon — carries a Craft
// Wondrous Item creation line; staged as printed and noted in its
// record and in SCREENING.md.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_BAZAAR = "Dragon Magazine #340 — Bazaar of the Bizarre: Items of the Zodiac (Mike Mearls), pp. 68-70";
const SRC_STARS = "Dragon Magazine #340 — The Stars Are Right (Hal Maclean), p. 29";
const SRC_NOVEL = "Dragon Magazine #340 — Novel Approach: The Black Cauldron (Joshua Cole), pp. 78-79";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_BAZAAR,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_340_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Bazaar of the Bizarre: Items of the Zodiac (12) ----
  M({
    id: "basilisks-mask",
    name: "Basilisk's Mask",
    cost: "35,000 gp",
    summary:
      "This bronze mask is carved to resemble a leering reptile. The mask's wearer always succeeds on his saving throws against gaze attacks. He also gains the benefits of the Diehard feat while wearing the mask. Finally, if reduced to -10 or fewer hit points, the wearer does not die until the end of his next turn. Until that point in time, he can receive healing and other effects that raise his hit points back above -10, to avoid death. If the healing received brings the wearer above -10 but not up to at least 0, he does not bleed and is considered stable. Each time this ability activates a single crack appears in the mask's surface. Once the mask has cracked in this manner three times it falls to pieces, its magical power spent. Moderate necromancy; CL 7th; Craft Wondrous Item, blindness, death ward; Weight 2 lb.",
  }),
  M({
    id: "bracers-of-the-chimera",
    name: "Bracers of the Chimera",
    cost: "12,400 gp",
    summary:
      "This set of lacquered wooden bracers bears silver-inlaid etchings depicting the chimera. Bracers of the chimera grant a +2 armor bonus at all times and have three additional powers that can each be used once per day. When activated, the bracers briefly transform the wearer's forearms and head into the three heads of the chimera; this does not cause the wearer to drop any held items. Dragon: breath, 30-foot cone of fire, 6d6 fire damage, DC 14 Reflex for half. Goat: knockback slam, 1d6 bludgeoning damage, bull rush (Str 25, size Large). Lion: roar, 30-foot cone, 2d4 sonic damage, deafened 1d6 rounds, DC 13 negates deafness. Moderate evocation; CL 6th; Craft Wondrous Item, bull's strength, fireball, shout; Weight 1 lb.",
  }),
  M({
    id: "cloak-of-the-dragon-340",
    name: "Cloak of the Dragon",
    cost: "8,400 gp",
    summary:
      "Crafted from the skin of a blue dragon, this magic cloak embodies the true essence of the sign of the dragon. It grants a +2 enhancement bonus on all Charisma checks and Charisma-based skill checks. In addition, once per day the cloak's wearer can impart a +1 morale bonus on his allies' attacks and saving throws for 1 minute; all allies who stand within 60 feet of the cloak's wearer and are able to see him gain this benefit. Moderate transmutation; CL 6th; Craft Wondrous Item, bless, eagle's splendor; Weight 1 lb.",
  }),
  M({
    id: "dryads-helm",
    name: "Dryad's Helm",
    cost: "4,000 gp",
    summary:
      "This steel, visored helm has a green plume set upon its top and the image of an oak tree inscribed upon each side. When the helmet's wearer strikes an opponent with a melee attack on his turn, that foe takes a -1 penalty on attacks against all targets except the wearer of the dryad's helm. This penalty increases with each successful attack to a maximum penalty of -5. This penalty lasts for 1 round. Only one creature at a time can suffer this penalty. The helm's wearer decides to impart the penalty, or withhold it for a different target, as a free action. Faint enchantment; CL 3rd; Craft Wondrous Item, enthrall; Weight 1 lb.",
  }),
  M({
    id: "ettins-club",
    name: "Ettin's Club",
    category: "weapon",
    cost: "18,300 gp",
    summary:
      "This cruel-looking, gnarled +2 greatclub is set with dozens of short barbs and spikes. When making an attack, the club's user may attack a random creature within his reach instead of choosing the target of his attack. The wielder randomly determines this target from among all threatened creatures, both friends and foes. The ettin's club grants its user an additional +2 bonus on the attack and deals +1d6 points of extra damage against this randomly determined target. This ability activates automatically before each attack. The wielder cannot suppress this effect. Faint enchantment; CL 5th; Craft Wondrous Item, rage; Weight 4 lb. (Creation feat as printed — the magazine gives Craft Wondrous Item for this weapon.)",
  }),
  M({
    id: "harpys-cap",
    name: "Harpy's Cap",
    cost: "3,000 gp",
    summary:
      "This black velvet tricorn hat is studded with six feathers taken from a harpy. The hat's wearer can remove one of the feathers to gain a specific effect. Each feather may be used once, and when all six feathers have been used the cap loses its magical properties. When the wearer activates the cap he chooses one of the following effects: a +5 bonus on Bluff, Diplomacy, Intimidate, and Perform checks for the next 5 minutes; a +10 bonus on the wearer's next Diplomacy or Intimidate check (this check must be made within 1 minute); or an additional use of the bardic music ability, as long as the wearer has that class ability (the wearer must use the bonus bardic music on the same round that he activates the cap). Note that the cap's different bonuses stack with each other, but each source of a bonus does not stack with itself. Faint transmutation; CL 3rd; Craft Wondrous Item, eagle's splendor; Weight 1 lb.",
  }),
  M({
    id: "krakens-bracelet",
    name: "Kraken's Bracelet",
    cost: "8,000 gp",
    summary:
      "A kraken's bracelet is forged of silver and crafted to resemble numerous tentacles linked together. The bracelet's wearer can use Knowledge skills untrained. In addition, he gains a +2 insight bonus on all Intelligence-based skill checks. Faint transmutation; CL 3rd; Craft Wondrous Item, fox's cunning; Weight —.",
  }),
  M({
    id: "eye-of-the-beholder",
    name: "Eye of the Beholder",
    cost: "8,700 gp",
    summary:
      "This necklace consists of a mithral chain set with a small, metal sphere. Three times per day, the necklace's wearer can command the sphere to open, revealing a living eye set within it. The eye darts back and forth, focusing its gaze on each living creature in the area. It remains open for 1 minute. During this time, the amulet's wearer gains a +5 bonus on all Sense Motive checks. In addition, while the eye is open its wearer gains darkvision with a range of 120 feet and ignores the effects of concealment on melee attacks (but not ranged attacks). Moderate divination; CL 7th; Craft Wondrous Item, darkvision, discern lies; Weight —.",
  }),
  M({
    id: "ring-of-the-hydra",
    name: "Ring of the Hydra",
    category: "ring",
    cost: "18,000 gp",
    summary:
      "This golden ring is set with nine slender, snakelike hydra heads. As an immediate action, the ring's wearer can activate its magical powers: when used, the ring allows its wearer to reroll a saving throw. The decision to reroll a save must be made after rolling the die but before learning if the save succeeded or failed. The wearer must take the result of the second roll, even if it is worse than the original roll. Each time the ring is used, one of the heads mounted upon it crumbles to dust, with the number of heads indicating the charges remaining. Faint divination; CL 5th; Craft Wondrous Item, aid, clairaudience/clairvoyance; Weight —. (Creation feat as printed — the magazine gives Craft Wondrous Item for this ring.)",
  }),
  M({
    id: "stirges-gauntlet",
    name: "Stirge's Gauntlet",
    category: "weapon",
    cost: "5,305 gp",
    summary:
      "This wicked, black metal armored glove has long, slender spikes mounted at the end of each finger and acts as a +1 spiked gauntlet. In combat, the gauntlet's wearer can use it to make an armed attack. In addition, once per day the stirge's gauntlet can drain blood from a target, sapping the target's strength while revitalizing its wearer: the gauntlet's wearer heals damage equal to the amount of damage dealt with it. Activating this ability is a swift action. It discharges on the next successful attack made with the gauntlet. The gauntlet's special ability fails to function against nonliving targets, but the gauntlet's magic is still discharged if used to attack a nonliving creature. Faint necromancy; CL 5th; Craft Wondrous Item, vampiric touch; Weight 1 lb.",
  }),
  M({
    id: "unicorns-shield",
    name: "Unicorn's Shield",
    category: "armor",
    cost: "9,170 gp",
    summary:
      "This white adamantine +2 heavy shield is emblazoned with the sign of a unicorn. If the unicorn's shield is used to make a shield bash attack as part of a charge, its true magical nature becomes apparent: the shield bestows an additional +2 bonus to AC for 1 round and the shield bash attack deals double normal damage. These benefits apply only during a charge. Moderate transmutation; CL 6th; Craft Wondrous Item, bull's strength, shield of faith; Weight 15 lb.",
  }),
  M({
    id: "wyverns-die",
    name: "Wyvern's Die",
    cost: "10,000 gp",
    summary:
      "A wyvern's die has twelve faces, each scribed with a symbol of the zodiac. Once per day, the bearer of this item can roll the wyvern's die to influence his fortune for the next 24 hours. The die's effect lasts for one day; after that, the magic it imparts fades, allowing the die to be rolled for a magical effect once again. A single person can gain only one benefit from this die per day. Rolling a second wyvern's die while still under the effects of the first yields no result but still discharges that die's daily use. Rolling the same wyvern's die twice yields no result for the second roll. An effect that discharges (such as the Wyvern) can only be used once and ends the effect for the day. To determine the wyvern die's effect, roll 1d12: 1 The Beholder, +2 bonus on all Spot checks. 2 The Harpy, +2 bonus on saves against mind-affecting effects. 3 The Ettin, whenever you roll an odd number on any die, subtract 1 from the result; when you roll an even number on any die, add 1 to the result. 4 The Dryad, +1 insight bonus to Armor Class. 5 The Stirge, +2 bonus on all opposed checks. 6 The Wyvern, gain a +4 bonus on one d20 roll of your choice (using this ability ends the effect for the day). 7 The Dragon, +2 bonus on Intimidate checks. 8 The Unicorn, use detect evil at will, caster level equal to your HD. 9 The Hydra, +1 morale bonus on saving throws. 10 The Chimera, +2 bonus on Diplomacy checks. 11 The Kraken, +1 bonus on one skill of your choice. 12 The Basilisk, heal 10 hit points as a swift action (using this ability ends the effect for the day). Strong universal; CL 13th; Craft Wondrous Item, limited wish; Weight —.",
  }),
  // ---- The Stars Are Right: star-forged example item (1) ----
  M({
    id: "dagger-of-stones",
    name: "Dagger of Stones",
    category: "weapon",
    cost: "52,302 gp",
    source: SRC_STARS,
    summary:
      "With a needlelike blade, this fencing dagger seems perfectly crafted to slip through cracks in armor; the gem adorning its pommel appears almost garish and out of place. The dagger of stones is a star-forged item: merely a +1 dagger to most people, in the hands of someone born under the star sign corresponding to its gemstone it becomes a +3 defending dagger. In addition, as long as the dagger is held, it grants the protective benefit of her birthstone to the wielder, even if she does not have the Starblessed feat. Strong abjuration; CL 12; Craft Magic Arms and Armor, Starblessed; shield or shield of faith, globe of invulnerability; Weight 1 lb.",
  }),
  // ---- Novel Approach: major artifact (1) ----
  M({
    id: "cauldron-of-corruption",
    name: "Cauldron of Corruption",
    category: "artifact",
    cost: "—",
    source: SRC_NOVEL,
    summary:
      "Major artifact. The Cauldron of Corruption is a black-iron cauldron approximately 9 feet in diameter, taking up a 10-foot square; up to twelve spellcasters could crowd around and make use of it. To use it, a spellcaster must merely be within 5 feet of the cauldron for the entire casting time of the spell he wishes it to affect: any spell with the evil or death descriptor, or of the necromancy school, gains the benefits of the Maximize Spell feat and is treated as if the caster were 5 levels higher than his actual level. If a corpse is placed within and the spell animate dead is cast upon the cauldron, a number of skeletons equal to the user's caster level (after being modified by the cauldron's previously noted abilities) begin crawling out at a rate of one per round; these skeletons are of the type of the creature placed inside, and each body so animated counts merely as a 1 Hit Die undead toward the number of Hit Dice of undead a caster can control with animate dead (normally restricted to twice his caster level). Casting animate dead while within 5 feet of the Cauldron of Corruption also negates the need for the usual material components. Additionally, if bodies are placed within the cauldron and no spell is cast, 3 rounds later they arise as cauldron spawn (see the cauldron spawn template): a single Large corpse, two Medium corpses or four Small or smaller corpses fit inside the cauldron. Cauldron spawn are under the control of the creature that placed the bodies into the cauldron, and each cauldron spawn counts its full Hit Dice toward the number of undead creatures the creator can control at any one time. Using the Cauldron of Corruption in any way is a decidedly evil act: any character who uses the cauldron must make a Will save (DC 22 +1 for each previous use of the cauldron) or have his alignment shift one step toward neutral evil. Destroying the Cauldron of Corruption requires an act as selfless as the artifact is depraved: a living being must willingly enter the cauldron and wish for the cauldron's destruction at the cost of his own life; such a sacrifice causes the artifact to shatter and destroys all the undead it has ever been used to create.",
  }),
];
