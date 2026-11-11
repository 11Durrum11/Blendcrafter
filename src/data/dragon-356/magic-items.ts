// Dragon Magazine #356 (June 2007) — magic item draft: 10 records.
// "Savage Tidings: Into the Abyss" (Robert J. Schwalb), pp. 67-70 —
// the Planar Marketplace sidebar prints ten fully-statted Magic Item
// Compendium-format items. (The program survey filed Savage Tidings
// as reference-only; the issue prints ten record-shaped items, and
// the pipeline precedent — issue #353's Savage Tidings ship upgrades
// staged as magic items — governs. See MANIFEST.md.)
// Every price, caster level, aura, and creation line was verified
// against rendered page images (magazine pp. 67-70); the image
// governs over the archive.org OCR stream. Image corrections to the
// OCR: Might Stone is 28,800 gp (OCR read 25,800 gp); Figurine of
// the Ivory Champion is 20,000 gp (OCR price line garbled); the
// Demonhair Shirt's creator "must not be good" (OCR inverted it);
// Brilliant Jewel's prerequisite spell is limited wish (OCR garbled);
// Demonfoe grants DR 5/— (OCR garbled the bypass line).
// The Ivory Champion construct stat block that accompanies the
// figurine digests in reference.md (monsters have no catalog barrel).
// APOC screening: the marketplace is set in the Abyss — planar
// framing only; no item opens a plane, holds an extra-dimensional
// space, summons, or calls. Three items name summon monster I / IV
// as CRAFTING prerequisites only (Arrow of Glory, Demonfoe,
// Demonhair Shirt) — carried as printed and flagged in SCREENING.md.
// Beastfriend Collar's place-exchange is benign transposition (a
// teleportation-subschool effect between the wearer and her own
// companion/familiar) — flagged per the teleportation precedent.

import type { MagicItemDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #356 — Savage Tidings: Into the Abyss (Robert J. Schwalb), pp. 67-70";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_356_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "agony-sais",
    name: "Agony Sais",
    category: "weapon",
    cost: "20,642 gp",
    summary:
      "Planar Marketplace item (item level 15th). Body slot — (held); CL 10th; aura moderate necromancy (DC 20); activation —; weight 2 lb. (for the pair). Both sais are identical, crafted so the center blade resembles a serpent; green leather covers the handle and the tines are fashioned to look like recoiling vipers, fangs bared. Agony sais are always sold in pairs; each one functions as a +2 silver sai. Whenever the wielder strikes a living creature with both sais in the same round, she can leave one or both weapons buried in her opponent's flesh, wracking the target with terrible pain: such targets take 1d6 points of damage per sai each round and function as if under the effect of the slow spell. Removing a sai is a standard action, and both must be removed to end the slow effect. Prerequisites: Craft Magic Arms and Armor, slow, wracking touch. Cost to Create: 10,000 gp (plus 642 gp for two masterwork alchemically silvered sais), 800 XP.",
  }),
  M({
    id: "arrow-of-glory",
    name: "Arrow of Glory",
    category: "weapon",
    cost: "500 gp",
    summary:
      "Planar Marketplace item (item level 4th). Body slot — (held); CL 12th; aura strong conjuration and evocation (DC 21); activation —; weight —. This unusual arrow has a white shaft and fletching and is inscribed all along its length with tiny lettering, prayers to the good gods to guide the arrow to its mark. An arrow of glory is a +3 evil outsider bane arrow. Whenever it strikes a creature, it explodes in bright white light, dazzling all creatures within 20 feet for 1d6 rounds unless they succeed on a DC 20 Fortitude save. In addition to the normal bane effects, should the arrow strike an evil outsider, the target must succeed on a DC 20 Fortitude save or be prevented from running or charging for 1d6 rounds. Prerequisites: Craft Magic Arms and Armor, radiance, summon monster I, creator must be good. Cost to Create: 246 gp, 5 sp (plus 7 gp for masterwork arrow), 20 XP. (Crafting prerequisite names summon monster I — a crafting requirement only, the arrow summons nothing; see SCREENING.md.)",
  }),
  M({
    id: "beastfriend-collar",
    name: "Beastfriend Collar",
    cost: "17,500 gp",
    summary:
      "Planar Marketplace item (item level 14th). Body slot throat; CL 14th; aura strong conjuration and transmutation (DC 22); activation 1 immediate action; weight 1 lb. This wide brown leather choker features crude images of an eagle, wolf, cat, and toad. Upon placing the beastfriend collar around your neck, the item grants a +4 competence bonus on Handle Animal and wild empathy checks. If you have an animal companion or familiar, the range of your share spells ability extends to 5 feet per two character levels. Also, as an immediate action, you can exchange places with your animal companion or familiar so long as the creature is within range of your share spells ability; you must wait 5 rounds between each use of this ability. Prerequisites: Craft Wondrous Item, benign transposition, animal companion or summon familiar ability. Cost to Create: 8,750 gp, 700 XP. (The place-exchange is benign transposition — a teleportation-subschool effect between wearer and companion; flagged in SCREENING.md per the standing teleportation precedent.)",
  }),
  M({
    id: "brilliant-jewel",
    name: "Brilliant Jewel",
    cost: "24,500 gp",
    summary:
      "Planar Marketplace item (item level 15th). Body slot —; CL 16th; aura strong universal (DC 23); activation see text; weight 1 lb. This diamond changes color before your eyes, drifting from red to green to blue and back to red. A character wielding a brilliant jewel gains a +1 luck bonus on all saving throws. The brilliant jewel can store magical energy to augment spells and spell-like abilities cast within the radius of its light: you may cast any spell or spell-like ability into the jewel, causing it to flare with rainbow colors; it illuminates out to a 30-foot radius with bright light and 30 feet further with shadowy light, and remains illuminated for a number of rounds equal to the level of the spell or spell-like ability cast into it. Once activated, all spells and spell-like abilities you cast of a school corresponding to the spell cast into the brilliant jewel are cast at +2 caster levels. Prerequisites: Craft Wondrous Item, Heighten Spell, limited wish. Cost to Create: 9,750 gp (plus 5,000 gp for diamond), 1,080 XP.",
  }),
  M({
    id: "demonfoe",
    name: "Demonfoe",
    category: "weapon",
    cost: "21,335 gp",
    summary:
      "Planar Marketplace item (item level 15th). Body slot — (held); CL 12th; aura strong conjuration and transmutation (DC 21); activation —; weight 6 lb. This bastard sword sits in a black leather sheath; when drawn, it sheds a soft green light from the green steel of the blade. Matching black leather winds around the handle and the pommel resembles a beautiful angelic face. This weapon is a +2 evil outsider bane bastard sword. As a swift action, you may suppress the evil outsider bane ability to gain damage reduction 5/— for 1 round; you can use this ability only three times per day. When used against an evil outsider, you may make a single attack as a full-round action: if the attack hits and deals at least 1 point of damage, you may immediately make a second attack using the same attack modifier as the first; further successful strikes do not grant additional attacks. When drawn, demonfoe sheds light as the light spell. Prerequisites: Craft Magic Arms and Armor, haste, light, summon monster I. Cost to Create: 10,500 gp (plus 335 gp for masterwork bastard sword), 840 XP. (Crafting prerequisite names summon monster I — a crafting requirement only; see SCREENING.md.)",
  }),
  M({
    id: "demonhair-shirt",
    name: "Demonhair Shirt",
    cost: "26,000 gp",
    summary:
      "Planar Marketplace item (item level 16th). Body slot torso; CL 13th; aura strong conjuration and enchantment (DC 21); activation —; weight 3 lb. This filthy black garment is woven from coarse black hair; the knots and flecks of unspeakable grime make wearing, let alone handling, the shirt unpleasant. When wearing a demonhair shirt you gain immunity to fear. If you have the rage class feature (or a similar ability), you may spend two of your daily uses of rage at once to become overcome with demonic fury, gaining a +6 profane bonus to Strength, a +2 profane bonus to Armor Class, and a +10 profane bonus to speed; while under the effects of demonic fury, your natural weapons and weapons you wield count as chaotic for the purposes of overcoming damage reduction. In exchange for these benefits, you take 2 points of nonlethal damage each round. Once activated, the demonic fury lasts for a number of rounds equal to your improved Constitution bonus (minimum 1 round); this benefit stacks with rage (and frenzy), and at the end of this time you become fatigued for 1 hour. Good characters take no penalty for wearing this shirt unless they abide by a code of conduct; wearing this item violates codes of conduct for both good and lawful characters. Prerequisites: Craft Wondrous Item, rage, summon monster IV, caster must have 16 ranks in Craft (weaving), caster must not be good. Cost to Create: 13,000 gp, 1,040 XP. (Crafting prerequisite names summon monster IV — a crafting requirement only; see SCREENING.md. Creator alignment line verified against the page image: \"must not be good.\")",
  }),
  M({
    id: "figurine-of-the-ivory-champion",
    name: "Figurine of the Ivory Champion",
    cost: "20,000 gp",
    summary:
      "Planar Marketplace item (item level 15th). Body slot —; CL 13th; aura strong transmutation (DC 21); activation 1 standard action; weight —. The figurine is a miniature statuette of an armored knight adorned with symbols of good deities; it stands two inches tall. When the figurine is tossed to the ground and the command word spoken, it expands in size, taking the form of a Large knight carved from ivory (the Ivory Champion, CR 13 — full stat block digested in the pack's reference.md). The construct obeys and serves you. If the figurine is broken or destroyed in statuette form, it is forever ruined; if slain in construct form, it instantly reverts to a statuette and cannot be used again for 1 week. The figurine may be used once per day for up to 1 hour at a time. Prerequisites: Craft Construct, Craft Wondrous Item, animate objects. Cost to Create: 10,000 gp, 800 XP.",
  }),
  M({
    id: "shadowstealers-cloak",
    name: "Shadowstealer's Cloak",
    cost: "18,000 gp",
    summary:
      "Planar Marketplace item (item level 14th). Body slot shoulders; CL 11th; aura moderate illusion (DC 20); activation — (see text); weight 2 lb. This long black cloak absorbs any light that falls upon it. A shadowstealer's cloak grants a +10 competence bonus on your Hide checks; creatures with the see in darkness ability gain no special benefit to perceive you, allowing you to make Hide checks normally. If you are using a magic item that increases your Dexterity score (such as gloves of dexterity), you may spend an immediate action to gain concealment (20% miss chance) for 1 round; you must wait 5 rounds between each use of this ability. Prerequisites: Craft Wondrous Item, blur. Cost to Create: 9,000 gp, 720 XP.",
  }),
  M({
    id: "might-stone",
    name: "Might Stone",
    cost: "28,800 gp",
    summary:
      "Planar Marketplace item (item level 16th). Body slot —; CL 15th; aura strong transmutation (DC 22); activation 1 swift action (see text); weight 1 lb. This smooth gray stone features a round black depression on its surface. You gain a +2 luck bonus on saving throws against spells and spell-like effects. A spontaneous caster (bard, sorcerer, favored soul, and so on), a character who uses invocations (dragonfire adept or warlock), or a psionic character can invest a known spell, invocation, or power into the might stone, temporarily removing it from his knowledge for 1 day. For a number of times per day equal to the spell level invested, you may, as a swift action, activate the might stone, gaining any one of the following features: increase the save DC of a spell or power of the same school or discipline by +2; add an extra 1d6 points of damage (of the same type) to an eldritch blast or breath weapon; or gain a +2 bonus on checks made to overcome the spell or power resistance of a target creature. Imbuing the spell takes 1 minute of concentration, and you may imbue just one spell into the might stone per day. Prerequisites: Craft Universal Item, Craft Wondrous Item, bestow power, spell matrix. Cost to Create: 14,400 gp, 1,152 XP. (Price verified against the page image: 28,800 gp; the OCR stream reads 25,800 gp.)",
  }),
  M({
    id: "starry-score",
    name: "Starry Score",
    cost: "17,000 gp",
    summary:
      "Planar Marketplace item (item level 14th). Body slot — (held); CL 17th; aura strong enchantment (DC 23); activation 1 full-round action; weight —. This scroll is made from soft white vellum; when unrolled, it reveals dense silver writing in an unknown language. The starry score is a portion of a great opera performed by the eladrin to please their mistress, the Queen of Stars. A good-aligned bard who spends a use of bardic music can discern the words and notes recorded and perform them as a full-round action by making a Perform check. All evil outsiders who can clearly hear the bard perform and are within 30 feet must succeed on Will saves (DC equals the bard's Perform check result) or be physically pained, taking a -5 penalty on attack rolls, damage rolls, saving throws, and checks. Conversely, all good outsiders gain a +5 sacred bonus on attack rolls, damage rolls, saving throws, and checks. Both effects last for as long as you continue to perform and for 3 rounds thereafter. Prerequisites: Craft Wondrous Item, crushing despair, good hope, caster must have 16 ranks of Perform (sing), caster must be good. Cost to Create: 8,500 gp, 680 XP.",
  }),
];
