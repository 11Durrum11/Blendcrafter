// Dragon Magazine #338 classes — integrated in the Dragon
// Magazine treatment program (issue #338 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-338/
// (MANIFEST.md / SCREENING.md / reference.md).
// Variant classes and substitution levels staged as variant records, flagged on the records per the pack SCREENING: Horselord, Imbued Staff (Sorcerer), Imbued Staff (Wizard), Solstice Knight, Dwarf Rogue.
// Records carry levels 1-10 progression rows on the class chassis
// with features at their true levels (prestige classes derive
// BAB/saves from their printed tables). Feature descriptions are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced.

import type {
  ClassDefinition,
  ClassLevelProgressionRow,
  FeatureDefinition,
} from "@/engine/types";

type F = FeatureDefinition & { levelsNeeded?: number };

function f(
  name: string,
  description: string,
  level: number | undefined,
  source: string,
  sourceUrl: string,
): F {
  const base: F = {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl,
  };
  return level ? { ...base, levelsNeeded: level } : base;
}

interface RawFeature {
  name: string;
  description: string;
  level?: number;
}

interface RawClass {
  id: string;
  name: string;
  ruleset: string;
  source: string;
  sourceUrl: string;
  hitDie: string;
  skillPointsPerLevel: number;
  babProgression: string;
  goodSaves: string[];
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  features: RawFeature[];
}







const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";
const SRC_HORSELORD = "Dragon Magazine #338 — Class Acts: Giants in the Saddle (Joe Pitkin), p. 88";
const SRC_STAFF = "Dragon Magazine #338 — Staffs of the Magi (Ben Vandgrift), pp. 58-59";
const SRC_SOLSTICE = "Dragon Magazine #338 — Class Acts: The Solstice Knight (Hal Maclean), p. 94";
const SRC_DWARF = "Dragon Magazine #338 — Class Acts: Dwarf Rogues (Joshua Cole), p. 96";

const FULL_GOOD_FORT = [
  { level: 1, bab: 1, fort: 2, ref: 0, will: 0 },
  { level: 2, bab: 2, fort: 3, ref: 0, will: 0 },
  { level: 3, bab: 3, fort: 3, ref: 1, will: 1 },
  { level: 4, bab: 4, fort: 4, ref: 1, will: 1 },
  { level: 5, bab: 5, fort: 4, ref: 1, will: 1 },
  { level: 6, bab: 6, fort: 5, ref: 2, will: 2 },
  { level: 7, bab: 7, fort: 5, ref: 2, will: 2 },
  { level: 8, bab: 8, fort: 6, ref: 2, will: 2 },
  { level: 9, bab: 9, fort: 6, ref: 3, will: 3 },
  { level: 10, bab: 10, fort: 7, ref: 3, will: 3 },
];

const FULL_GOOD_FORT_WILL = [
  { level: 1, bab: 1, fort: 2, ref: 0, will: 2 },
  { level: 2, bab: 2, fort: 3, ref: 0, will: 3 },
  { level: 3, bab: 3, fort: 3, ref: 1, will: 3 },
  { level: 4, bab: 4, fort: 4, ref: 1, will: 4 },
  { level: 5, bab: 5, fort: 4, ref: 1, will: 4 },
  { level: 6, bab: 6, fort: 5, ref: 2, will: 5 },
  { level: 7, bab: 7, fort: 5, ref: 2, will: 5 },
  { level: 8, bab: 8, fort: 6, ref: 2, will: 6 },
  { level: 9, bab: 9, fort: 6, ref: 3, will: 6 },
  { level: 10, bab: 10, fort: 7, ref: 3, will: 7 },
];

const HALF_GOOD_WILL = [
  { level: 1, bab: 0, fort: 0, ref: 0, will: 2 },
  { level: 2, bab: 1, fort: 0, ref: 0, will: 3 },
  { level: 3, bab: 1, fort: 1, ref: 1, will: 3 },
  { level: 4, bab: 2, fort: 1, ref: 1, will: 4 },
  { level: 5, bab: 2, fort: 1, ref: 1, will: 4 },
  { level: 6, bab: 3, fort: 2, ref: 2, will: 5 },
  { level: 7, bab: 3, fort: 2, ref: 2, will: 5 },
  { level: 8, bab: 4, fort: 2, ref: 2, will: 6 },
  { level: 9, bab: 4, fort: 3, ref: 3, will: 6 },
  { level: 10, bab: 5, fort: 3, ref: 3, will: 7 },
];

const TQ_GOOD_REF = [
  { level: 1, bab: 0, fort: 0, ref: 2, will: 0 },
  { level: 2, bab: 1, fort: 0, ref: 3, will: 0 },
  { level: 3, bab: 2, fort: 1, ref: 3, will: 1 },
  { level: 4, bab: 3, fort: 1, ref: 4, will: 1 },
  { level: 5, bab: 3, fort: 1, ref: 4, will: 1 },
  { level: 6, bab: 4, fort: 2, ref: 5, will: 2 },
  { level: 7, bab: 5, fort: 2, ref: 5, will: 2 },
  { level: 8, bab: 6, fort: 2, ref: 6, will: 2 },
  { level: 9, bab: 6, fort: 3, ref: 6, will: 3 },
  { level: 10, bab: 7, fort: 3, ref: 7, will: 3 },
];

const BARBARIAN_SKILLS = [
  "Climb",
  "Craft",
  "Handle Animal",
  "Intimidate",
  "Jump",
  "Listen",
  "Ride",
  "Survival",
  "Swim",
];

const SORCERER_SKILLS = [
  "Bluff",
  "Concentration",
  "Craft",
  "Knowledge (arcana)",
  "Profession",
  "Spellcraft",
];

const WIZARD_SKILLS = [
  "Concentration",
  "Craft",
  "Decipher Script",
  "Knowledge (all skills, taken individually)",
  "Profession",
  "Spellcraft",
];

const PALADIN_SKILLS = [
  "Concentration",
  "Craft",
  "Diplomacy",
  "Handle Animal",
  "Heal",
  "Knowledge (nobility and royalty)",
  "Knowledge (religion)",
  "Profession",
  "Ride",
  "Sense Motive",
];

const DWARF_ROGUE_SKILLS = [
  "Appraise",
  "Balance",
  "Bluff",
  "Climb",
  "Craft",
  "Decipher Script",
  "Disable Device",
  "Disguise",
  "Escape Artist",
  "Forgery",
  "Gather Information",
  "Hide",
  "Intimidate",
  "Jump",
  "Knowledge (architecture and engineering)",
  "Listen",
  "Move Silently",
  "Open Lock",
  "Perform",
  "Profession",
  "Search",
  "Sense Motive",
  "Sleight of Hand",
  "Spot",
  "Swim",
  "Tumble",
  "Use Magic Device",
  "Use Rope",
];

// The imbued staff's shared rules text, used by both staff records.
// The advancement table (magazine p. 59, image-verified): master
// level 1st-2nd — hardness 5, 15 hp, cantrips and deliver touch
// spells; 3rd-4th — hardness 5, 15 hp, enhanced weapon +1; 5th-6th —
// hardness 5, 15 hp, remote viewing; 7th-8th — hardness 10, 20 hp;
// 9th-10th — hardness 10, 20 hp, vital transfer; 11th-12th —
// hardness 10, 20 hp, enhanced weapon +2; 13th-14th — hardness 15,
// 25 hp, perfect location; 15th-16th — hardness 15, 25 hp, mighty
// weapon; 17th-18th — hardness 15, 25 hp, return; 19th-20th —
// hardness 20, 30 hp, enhanced weapon +3. PRINT CONFLICT: the
// article's prose (p. 58) says the staff "has 10 Hit Points" while
// its own table starts it at 15; the table is carried on these
// records and the conflict is disclosed in MANIFEST.md/SCREENING.md.
const IMBUED_STAFF_FRAME =
  "The staff is treated as a magic item. Its hardness and hit points follow the Imbued Staff Advancement table by master class level: hardness 5 and 15 hit points at 1st-2nd level, rising through hardness 10 and 20 hit points at 7th-8th, hardness 15 and 25 hit points at 13th-14th, to hardness 20 and 30 hit points at 19th-20th. (The article's prose gives the new staff 10 hit points while its own table starts it at 15; the table governs here — see the pack's MANIFEST.md.) The staff makes saving throws as its creator, even when unattended. If an imbued staff is broken, its creator must attempt a DC 15 Fortitude save or lose 500 experience points per level in the imbuing class (half that on a successful save; the loss can never reduce the creator's experience total below 0), and a broken imbued staff cannot be replaced for a year and a day. If the imbuing character dies, the staff loses all its magical properties; should the character return from the grave, the staff regains its imbued powers the first time the imbuing character touches it. A character with the Craft Staff feat may enhance an imbued staff as a normal staff (Dungeon Master's Guide, p. 287), except that all creation costs increase by 20%; a staff crafted this way is created with 50 charges and retains its imbued powers and magical nature even after the charges are expended. Five feats in the same article build on an imbued staff (Enchant Staff, Imbued Defense, Imbued Strength, Invest Spell, Recharge Staff; feats-draft.ts).";

const RAW: RawClass[] = [
  {
    id: "horselord",
    name: "Horselord",
    ruleset: "core",
    source: SRC_HORSELORD,
    sourceUrl: SRC_URL,
    hitDie: "d12",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: FULL_GOOD_FORT,
    classSkills: BARBARIAN_SKILLS,
    features: [
      {
        name: "Horselord Basics",
        description:
          "A variant barbarian: unless otherwise noted, a horselord advances in the same manner as a barbarian — the same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills. When a character elects to take a level of barbarian or horselord, he may not later take levels in the other class (this prevents gaining the benefits of a 1st-level barbarian twice). The horselord loses the barbarian's fast movement and trap sense, and does not gain rage; he gains battle ecstasy, riding skill, an animal companion mount, and Improved Mounted Archery instead, as described in the features below. All other barbarian class features (uncanny dodge, improved uncanny dodge, damage reduction, indomitable will) are gained as a barbarian of the same level.",
        level: 1,
      },
      {
        name: "Battle Ecstasy",
        description:
          "The horselord does not rage; he replaces that ability with a battle ecstasy he can use with the same frequency as a barbarian's rage (1/day at 1st level, with an additional daily use every four levels thereafter). In battle ecstasy he temporarily gains a +4 bonus to Dexterity, a +4 bonus to Constitution, and damage reduction 1/—. The damage reduction granted while in battle ecstasy increases the damage reduction he receives at higher levels (thus a 7th-level horselord has DR 2/— while in battle ecstasy). A horselord can use any skill or feat while in battle ecstasy, but all skill checks except Handle Animal and Ride take a −2 penalty. Battle ecstasy lasts as long as a barbarian's rage and has the same fatiguing effect; beginning at 17th level, the horselord is no longer fatigued after leaving a battle ecstasy. The horselord's battle ecstasy has no greater rage or mighty rage equivalents.",
        level: 1,
      },
      {
        name: "Skilled Rider",
        description:
          "A horselord takes no penalty on Ride checks for riding bareback and gains a +2 bonus on Ride checks when using any kind of saddle (which stacks with the normal +2 bonus on Ride checks when using a military saddle). A horselord must choose a kind of animal he knows of and has ridden as a mount at least once; he receives a +2 bonus on Handle Animal checks whenever dealing with the selected kind of animal. (Most horselords choose the animals their tribes routinely use.)",
        level: 1,
      },
      {
        name: "Animal Companion",
        description:
          "At 4th level, the horselord's mount becomes an animal companion, as per the ranger ability of the same level. The horselord must own and ride the horse for at least two months before he can bond with it in this way. Treat the mount in all ways as the animal companion of a ranger of the same level as the horselord, except the horselord's mount retains the animal type and is not considered a magical beast. If the mount is killed or otherwise lost, the horselord can find a new companion mount after 1d4 months of searching and a successful DC 15 Handle Animal check.",
        level: 4,
      },
      {
        name: "Improved Mounted Archery",
        description:
          "At 6th level, the horselord gains Improved Mounted Archery (Complete Warrior, p. 101) as a bonus feat.",
        level: 6,
      },
    ],
  },
  {
    id: "imbued-staff-sorcerer",
    name: "Imbued Staff (Sorcerer)",
    ruleset: "core",
    source: SRC_STAFF,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: HALF_GOOD_WILL,
    classSkills: SORCERER_SKILLS,
    features: [
      {
        name: "Imbued Staff (Sorcerer) Basics",
        description:
          "An optional rule from \"Staffs of the Magi\": a sorcerer may opt to forego a normal familiar in order to imbue her traveling staff with a portion of her power. To do this, she selects a quarterstaff-length of wood that resonates with her mystical signature and personality; it cannot have been previously enchanted (although it may subsequently be), and it must be of masterwork quality. It must be prepared using materials costing at least 500 gp, usually with a gem to serve as a mounted finial. The imbuing ritual takes 24 hours and ties a portion of the spellcaster's power into the staff — a separate piece of her soul that grows in power as she does. Upon its imbuing, the staff becomes magically linked to its creator. " +
          IMBUED_STAFF_FRAME +
          " All other sorcerer class features are unchanged.",
        level: 1,
      },
      {
        name: "Cantrips (Sp)",
        description:
          "Three times per day, as a standard action, the wielder of the staff can make it shed a flickering light as per the light spell; once activated, this light remains until the wielder dismisses it (a free action). In addition, the staff can hold a single cantrip available to the wielder, decided upon when it is first imbued; once per day, as a standard action, the master can cast this cantrip from the staff. The caster level for these effects is equal to that of the master, and the save DC for any cantrip cast by the staff is 10.",
        level: 1,
      },
      {
        name: "Deliver Touch Spells (Su)",
        description:
          "The master may deliver touch spells with the staff. When using the staff in this way, the wielder may attempt to deal the staff's damage by hitting the target's standard AC (as opposed to the target's touch AC). A successful critical hit with the staff does not double the spell's effect when delivered in this way.",
        level: 1,
      },
      {
        name: "Enhanced Weapon (Su)",
        description:
          "The staff gains the listed enhancement bonus to attack and damage when wielded by its master: +1 at master level 3rd, +2 at 11th, and +3 at 19th. This bonus applies to both ends of the staff. In the hands of any other it is merely an ordinary masterwork staff.",
        level: 3,
      },
      {
        name: "Remote Viewing (Su)",
        description:
          "The staff's master may concentrate and view the staff's surroundings as though looking through the finial. This effect is identical to that of clairvoyance except that it lasts for as long as the owner concentrates and has an infinite range so long as the staff is on the same plane. While in effect, the staff's finial glows faintly, illuminating the area around the staff like a candle.",
        level: 5,
      },
      {
        name: "Vital Transfer (Su)",
        description:
          "The staff's master may opt to forego her natural healing for the evening and mend her staff through mystical means. Each night's rest thus spent returns a number of hit points to the staff equal to the master's character level, up to the staff's maximum hit points. The Heal skill does not increase this amount.",
        level: 9,
      },
      {
        name: "Perfect Location (Su)",
        description:
          "By concentrating for a full round, the master knows the direction and distance to her staff, so long as it is on the same plane.",
        level: 13,
      },
      {
        name: "Mighty Weapon (Su)",
        description:
          "The staff gains the bane, defending, flaming, frost, merciful, shock, or thundering special weapon ability. This ability applies to both ends of the staff. Once chosen, the bonus cannot be changed and does not function in the hands of anyone other than the staff's master.",
        level: 15,
      },
      {
        name: "Return (Su)",
        description:
          "The master can summon the staff to her hand as a standard action, so long as it is on the same plane. When summoned in this way, the staff simply appears in its master's hand. Any effect targeting the staff or the master that prevents teleportation also blocks this ability.",
        level: 17,
      },
    ],
  },
  {
    id: "imbued-staff-wizard",
    name: "Imbued Staff (Wizard)",
    ruleset: "core",
    source: SRC_STAFF,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: HALF_GOOD_WILL,
    classSkills: WIZARD_SKILLS,
    features: [
      {
        name: "Imbued Staff (Wizard) Basics",
        description:
          "An optional rule from \"Staffs of the Magi\": a wizard may opt to forego a normal familiar in order to imbue her traveling staff with a portion of her power. To do this, she selects a quarterstaff-length of wood that resonates with her mystical signature and personality; it cannot have been previously enchanted (although it may subsequently be), and it must be of masterwork quality. It must be prepared using materials costing at least 500 gp, usually with a gem to serve as a mounted finial. The imbuing ritual takes 24 hours and ties a portion of the spellcaster's power into the staff — a separate piece of her soul that grows in power as she does. Upon its imbuing, the staff becomes magically linked to its creator. " +
          IMBUED_STAFF_FRAME +
          " All other wizard class features are unchanged.",
        level: 1,
      },
      {
        name: "Cantrips (Sp)",
        description:
          "Three times per day, as a standard action, the wielder of the staff can make it shed a flickering light as per the light spell; once activated, this light remains until the wielder dismisses it (a free action). In addition, the staff can hold a single cantrip available to the wielder, decided upon when it is first imbued; once per day, as a standard action, the master can cast this cantrip from the staff. The caster level for these effects is equal to that of the master, and the save DC for any cantrip cast by the staff is 10.",
        level: 1,
      },
      {
        name: "Deliver Touch Spells (Su)",
        description:
          "The master may deliver touch spells with the staff. When using the staff in this way, the wielder may attempt to deal the staff's damage by hitting the target's standard AC (as opposed to the target's touch AC). A successful critical hit with the staff does not double the spell's effect when delivered in this way.",
        level: 1,
      },
      {
        name: "Enhanced Weapon (Su)",
        description:
          "The staff gains the listed enhancement bonus to attack and damage when wielded by its master: +1 at master level 3rd, +2 at 11th, and +3 at 19th. This bonus applies to both ends of the staff. In the hands of any other it is merely an ordinary masterwork staff.",
        level: 3,
      },
      {
        name: "Remote Viewing (Su)",
        description:
          "The staff's master may concentrate and view the staff's surroundings as though looking through the finial. This effect is identical to that of clairvoyance except that it lasts for as long as the owner concentrates and has an infinite range so long as the staff is on the same plane. While in effect, the staff's finial glows faintly, illuminating the area around the staff like a candle.",
        level: 5,
      },
      {
        name: "Vital Transfer (Su)",
        description:
          "The staff's master may opt to forego her natural healing for the evening and mend her staff through mystical means. Each night's rest thus spent returns a number of hit points to the staff equal to the master's character level, up to the staff's maximum hit points. The Heal skill does not increase this amount.",
        level: 9,
      },
      {
        name: "Perfect Location (Su)",
        description:
          "By concentrating for a full round, the wizard knows the direction and distance to her staff, so long as it is on the same plane.",
        level: 13,
      },
      {
        name: "Mighty Weapon (Su)",
        description:
          "The staff gains the bane, defending, flaming, frost, merciful, shock, or thundering special weapon ability. This ability applies to both ends of the staff. Once chosen, the bonus cannot be changed and does not function in the hands of anyone other than the staff's master.",
        level: 15,
      },
      {
        name: "Return (Su)",
        description:
          "The master can summon the staff to her hand as a standard action, so long as it is on the same plane. When summoned in this way, the staff simply appears in its master's hand. Any effect targeting the staff or the master that prevents teleportation also blocks this ability.",
        level: 17,
      },
    ],
  },
  {
    id: "solstice-knight",
    name: "Solstice Knight",
    ruleset: "core",
    source: SRC_SOLSTICE,
    sourceUrl: SRC_URL,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: FULL_GOOD_FORT_WILL,
    classSkills: PALADIN_SKILLS,
    features: [
      {
        name: "Solstice Knight Basics",
        description:
          "Paladin substitution levels. A substitution level is a level of a given class that you take instead of the level described for the standard class; selecting a substitution level is not the same as multiclassing — you remain with the class for which the substitution level is taken. The class features of the substitution level simply replace those of the standard level: you can select each substitution level only at a specific class level, and when you take a substitution level for your class at a given level, you give up the class features gained at that level for the standard class, and you get the substitution level features instead. You can't go back and gain the class features you gave up — when you take your next level in the standard class, you gain the next higher level as if you had gained the previous level normally. Solstice knight substitution levels grant the same class skills as the standard paladin class, 2 + Intelligence modifier skill points per level, and a d10 Hit Die (the printed table's badge). PRINT CONFLICT, carried as printed: the column's Requirements line reads \"To take a solstice knight substitution level, a character must be a paladin about to take her 2nd or 5th level of paladin,\" but the substitution table and the Blessed Radiance feature text both place the first substitution level at 3rd level (the level at which the standard paladin gains divine health, which blessed radiance replaces). The table and feature text govern the feature levels on this record; the Requirements line is carried verbatim in this Basics feature.",
        level: 1,
      },
      {
        name: "Blessed Radiance (Sp)",
        description:
          "Embraced by the risen sun, a 3rd-level solstice knight carries a light deep within her soul, a radiance she pledges to bear into places of darkness and terror. She gains the ability to create a glorious, swirling aura of light, painting the area around her with a magnificent cascade of silver and gold: as a free action, a solstice knight may cast daylight, centered upon herself, a number of times per day equal to her number of uses of smite evil. (The two effects are not related — they merely have an equal number of uses.) Her caster level equals her paladin level. This substitution replaces the standard paladin's divine health at 3rd level; the 3rd-level substitution row otherwise retains aura of courage.",
        level: 3,
      },
      {
        name: "Darkvision (Ex)",
        description:
          "At 5th level the solstice knight also gains darkvision with a range of 30 feet. If she already possesses darkvision she instead increases the range of her darkvision by 30 feet. The 5th-level substitution row otherwise retains the standard paladin's special mount.",
        level: 5,
      },
      {
        name: "Strike of the Faithful (Su)",
        description:
          "A solstice knight can channel the titanic power of the sun's righteous light: whenever the paladin uses her smite evil ability against an evil undead creature he deals double the smite damage. The paladin loses one daily use of smite evil from her total number of uses when she gains this ability; thereafter she has one fewer use per day (only two at 10th level, for example).",
        level: 5,
      },
    ],
  },
  {
    id: "dwarf-rogue",
    name: "Dwarf Rogue",
    ruleset: "core",
    source: SRC_DWARF,
    sourceUrl: SRC_URL,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: TQ_GOOD_REF,
    classSkills: DWARF_ROGUE_SKILLS,
    features: [
      {
        name: "Dwarf Rogue Basics",
        description:
          "Dwarf racial substitution levels for the rogue class (only a member of the appropriate race can take a racial substitution level; see the Solstice Knight column on magazine p. 94 for the substitution-level rules). A dwarven rogue can choose from new abilities at 1st, 3rd, and 5th level. Dwarf rogue substitution levels grant class skills as the base rogue class, plus Knowledge (architecture and engineering), at 8 + Intelligence modifier skill points per level. Per the printed substitution table, the 1st-level row retains trapfinding and the 3rd-level row retains trap sense +1 alongside the demolitionist abilities below. Printed requirement: the character must be a dwarf about to take her 1st, 3rd, or 5th level of rogue.",
        level: 1,
      },
      {
        name: "Demolitionist (Ex)",
        description:
          "A 1st-level dwarf rogue deals +1d6 points of damage against constructs and objects. This bonus does not ignore hardness or damage reduction.",
        level: 1,
      },
      {
        name: "Expert Demolitionist (Ex)",
        description:
          "At 3rd level, the rogue deals +2d6 points of damage against constructs and objects (replacing the demolitionist +1d6). This bonus does not ignore hardness or damage reduction. In addition, she gains a +2 competence bonus on Craft, Disable Device, or Knowledge (architecture and engineering) checks made to demolish, tunnel through, or otherwise degrade the structural integrity of an object or building — or to plan to do so.",
        level: 3,
      },
      {
        name: "Rapid Demolitionist (Su)",
        description:
          "A 5th-level dwarf rogue deals +3d6 points of damage against constructs and objects (replacing the expert demolitionist +2d6). This bonus does not ignore hardness or damage reduction. It takes less time for a rogue to use her Craft, Disable Device, or Knowledge (architecture and engineering) checks in order to demolish, tunnel through, or otherwise degrade the structural integrity of an object or building — or to plan to do so: if the task ordinarily takes more than 1 minute to complete, it instead takes half as long; a 1-minute task requires only 5 rounds; tasks that require a full-round action take only a standard action, and those that begin as a standard action only need a move action; a task that takes a move action or free action does not change. As printed, this substitution replaces the rogue's normal +3d6 points of sneak attack damage at 5th level. (The 1st- and 3rd-level substitutions print no replacement clause; only the 5th-level exchange is stated in the column.)",
        level: 5,
      },
    ],
  },
];

export const DRAGON_338_CLASSES: ClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as ClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: c.babProgression as ClassDefinition["babProgression"],
  goodSaves: c.goodSaves as ClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
