// Dragon Magazine #345 (July 2006) — magic item draft: 6 records.
//   1 — TRUEBANE, a new weapon special ability from the "New Weapon
//       Quality" sidebar in "Demonomicon of Iggwilv: Kostchtchie"
//       (James Jacobs), p. 23 — the bane variant credited to
//       Kostchtchie's cult. It stages as an item record: the ability
//       itself calls, summons, and contacts nothing (its creation
//       prerequisites include summon monster I — carried on the
//       record and flagged in SCREENING.md; the item summons
//       nothing).
//   5 — "Bazaar of the Bizarre: For and Against the Giants"
//       (William L. Christensen), pp. 72-74 — relics of the frost
//       giant queen Brynja Skjaldvör and other giant-craft pieces,
//       printed in Magic Item Compendium format. The program survey
//       estimated ~8 Bazaar items; the article prints five.
// Every price, aura, CL, construction, and weight line was verified
// against rendered page images (magazine pp. 23, 72, 73, 74); the
// image governs over the OCR stream — it confirms, among others,
// the Ring of the Frost Giant Jarl's construction cost of 8,100 gp
// against its 22,200 gp price, and the Ice Armor's construction
// line of 30,650 gp against its 58,650 gp price, both as printed.
// ⚠️ APOC FLAG: the Ring of the Frost Giant Jarl's effect is a
// summoning (it calls winter wolves via summon monster V
// construction) — summoning spells don't work in APOC. Staged as
// printed with the flag on the record and in SCREENING.md, per the
// standing item-flag pattern; Shaun's call. Hel's Death Staff is
// ordinary necromancy (animate dead) and stages clean under the
// undead house rules. See SCREENING.md.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_DEMON = "Dragon Magazine #345 — Demonomicon of Iggwilv: Kostchtchie (James Jacobs), p. 23";
const SRC_BAZAAR = "Dragon Magazine #345 — Bazaar of the Bizarre: For and Against the Giants (William L. Christensen), pp. 72-74";
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

export const DRAGON_345_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Demonomicon sidebar: new weapon quality ----
  M({
    id: "truebane",
    name: "Truebane",
    category: "weapon-special-ability",
    cost: "+3 bonus",
    source: SRC_DEMON,
    summary:
      "Weapon special ability. A truebane weapon is a more powerful variant of the commonplace bane weapon quality, generally (if begrudgingly) credited to the cult of Kostchtchie: when wielded, it gains the bane weapon quality against the same type of creature as the wielder — a giant wielding a truebane weapon gains the additional +2 enhancement bonus on attack rolls and damage and +2d6 additional damage against giants, while a lawful outsider would gain the bonus against other lawful outsiders. At the end of any round in which a truebane weapon deals damage to a creature, the weapon's bane quality changes to match the type of the creature it last damaged; this change persists for 1 round before reverting to the wielder's creature type (unless, of course, the weapon is used to damage a different creature in that round). Strong conjuration; CL 12th; Craft Magic Arms and Armor, rage, summon monster I; Price +3 bonus. (Creation includes a summoning spell as a prerequisite; the ability itself summons nothing.)",
  }),
  // ---- Bazaar of the Bizarre: For and Against the Giants (5) ----
  M({
    id: "cloud-giant-harp",
    name: "Cloud Giant Harp",
    cost: "4,860 gp",
    summary:
      "A harp of fine golden wood inset with brilliant jewels, its column crafted to resemble the face of a regal cloud giantess; it stands about 4 feet tall, is as light as a feather despite its thick wood construction, and emits beautiful angelic music when played (sentient versions even sing along in harmony — see Variants). Activation: you can play the harp as a standard action, but must succeed at either a DC 15 or a DC 20 Perform (string instruments) check for its magic to function; this check can be made once per day, whether or not it succeeds. Effect: on a successful DC 15 Perform (string instruments) check, you play a soothing melody that puts up to 10 HD of humanoids within 30 feet of you to sleep (as per deep slumber) unless they succeed at DC 14 Will saves. You can affect up to 20 HD of giants with this harp, but you must succeed at a DC 20 Perform (string instruments) check to do so; if you fail the DC 20 check but succeed at a DC 15 check, you may still affect up to 10 HD of creatures. Variants: sentient versions exist — elegant speakers and singers, extremely fond of their original cloud giant creators, who obey most of their masters' commands only after voicing displeasure at being 'used by such an inferior creature.' Aura/Caster Level: Faint enchantment; CL 5th. Construction: Craft Wondrous Item, deep slumber, 2,430 gp, 194 XP, 5 days. Weight: —.",
  }),
  M({
    id: "hels-death-staff",
    name: "Hel's Death Staff",
    category: "staff",
    cost: "59,310 gp",
    summary:
      "A staff crafted from a stone giant's femur, emitting a stench of decay when activated and absorbing the light around its head into an empty black sphere of shadowy illumination (no game effect). A Hel's death staff allows use of the following spells, each requiring a standard action to activate: blindness/deafness (1 charge), ray of enfeeblement (1 charge), animate dead (2 charges), finger of death (3 charges). When cast on a giant, the DCs of these spells increase by +2. Additionally, you can animate up to three times your caster level (instead of twice your caster level) of HD of undead with a single casting of animate dead — all of the undead you animate in this way must be from the bodies of giants — and you can control up to 6 HD of undead per caster level (instead of 4 HD per caster level) as long as you possess the staff and at least one of the undead creatures you control is a giant. Finally, when you slay a giant with a finger of death spell cast from the staff, you can opt to immediately (as a swift action) animate the giant's body with animate dead, expending only a single charge for that casting (instead of the normal 2 charges). Aura/Caster Level: Strong necromancy; CL 13th. Construction: Craft Staff, animate dead, blindness/deafness, finger of death, ray of enfeeblement, 29,655 gp, 2,372 XP, 60 days. Weight: 4 lb.",
  }),
  M({
    id: "ice-armor-of-the-northlands",
    name: "Ice Armor of the Northlands",
    category: "armor",
    cost: "58,650 gp",
    summary:
      "Ice-blue +1 full plate shrouded in frost and lined with thick fur, first crafted by the frost giantess Brynja Skjaldvör (Lore: a DC 20 Knowledge (arcana) or Knowledge (history) check reveals its history). Activation: donning the armor activates it. Effect: the armor wreathes you in a supernatural icy mist at all times that deals 2d6 points of cold damage each round to all creatures within 10 feet of you (if you are Large or larger) or to all creatures within 5 feet of you (if you are Medium or smaller) — and the armor deals the same damage to you each round. Variants: fire giant versions exist that wreathe the wearer in flames and deal fire damage instead of cold damage. Characters can resize Large armor to fit a Medium wearer by succeeding at a DC 20 Craft (armorsmithing) check. Aura/Caster Level: Moderate evocation; CL 7th. Construction: Craft Magic Arms and Armor, fire shield, 30,650 gp, 2,240 XP, 56 days (as printed). Weight: 100 lb. (Large) or 50 lb. (Medium).",
  }),
  M({
    id: "ring-of-the-frost-giant-jarl",
    name: "Ring of the Frost Giant Jarl",
    category: "ring",
    cost: "22,200 gp",
    summary:
      "A thick silver ring bearing the etching of a snarling winter wolf, sized for the fingers of Large giants but resizing for Medium wearers; the first was created by the frost giantess Brynja Skjaldvör (Lore: a DC 20 Knowledge (arcana) or Knowledge (history) check reveals its history). Activation: once per day as a standard action, you utter the command words (the names of the winter wolves the rings summon — common names are Medvyed, Varuna, and Zabava) to summon a single winter wolf, who serves you for 9 rounds; if you wear two rings you can instead utter the command words as a full-round action once per day to summon two winter wolves simultaneously (you can still summon the wolves separately if you wish). The winter wolves appear where you designate within 60 feet and act immediately on your turn. Effect: additionally, if you wear two rings of the frost giant jarl, you can once per day rub the rings together as a free action to spew a 60-foot cone of freezing breath dealing 9d6 points of cold damage to all within its area (DC 17 Reflex save for half damage). Aura/Caster Level: Moderate conjuration and moderate evocation; CL 9th. Construction: Forge Ring, cone of cold, summon monster V, 8,100 gp, 648 XP, 16 days (as printed). Weight: —. APOC FLAG: this item's primary effect is a summoning — summoning spells don't work in APOC; staged as printed, flagged for Shaun's call (see SCREENING.md).",
  }),
  M({
    id: "sword-of-giant-rending",
    name: "Sword of Giant Rending",
    category: "weapon",
    cost: "72,335 gp",
    summary:
      "An angular, blunt-tipped bastard sword with a jagged blade, its tip glowing with a faint ghostly flame. Activation: wielding it in combat; when you attack a giant, it gains additional powers. Effect: a sword of giant rending is a +2 giant bane bastard sword; when you succeed at an attack against a giant, the sword deals an additional amount of damage whose type depends on the kind of giant struck: cloud giant — shock (greater: shocking burst); fire giant — frost (icy burst); frost giant — flaming (flaming burst); hill giant — lawful (axiomatic); stone giant — shock (shocking burst); storm giant — lawful (axiomatic); other giant — wielder's choice (no greater ability). When you kill a giant and use this sword's blade to ritualistically remove its heart (a ritual requiring 1 hour), the sword gains greater power: if you remove three hearts of the same kind of giant in this manner within 24 hours, the blade thereafter gains the appropriate greater special ability, and retains it until you perform three more rituals on a different kind of giant, which grants it the new special ability instead. Aura/Caster Level: Strong evocation, moderate conjuration; CL 12th. Construction: Craft Magic Arms and Armor, call lightning or lightning bolt, chill metal or ice storm, flame blade or flame strike or fireball, order's wrath, 36,335 gp, 2,880 XP, 72 days. Weight: 6 lb.",
  }),
];
