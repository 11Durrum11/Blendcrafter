import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

// Ghostwalk prestige classes: the four of Chapter 1 (pp. 18–26,
// Tables 1–3, 1–4, 1–5, and 1–7). Ghostwalk is a 3.0-era book (2003);
// following the Races of Faerun precedent, records are written in 3.5
// conventions, applying Wizards of the Coast's official Ghostwalk 3.5
// update (appended to this PDF): Alchemy becomes Craft (Alchemy),
// Intuit Direction and Wilderness Lore become Survival, Scry is
// deleted (folded into Spellcraft), Innuendo is dropped (folded into
// Bluff in 3.5), Read Lips is dropped (folded into Spot), and the
// Arboreal Guardian's class skill list is the update's replacement
// list. The update also corrects the Ghost Slayer's feat requirement
// ("Ghost Fighting" is not a feat; it is Incorporeal Target Fighting)
// and supplies the Deathwarden Chanter's Perform (sing) 1 rank.
// Knowledge (ghost lore) is a Knowledge specialty, as printed, not a
// separate skill in the app. Short mechanical summaries in our own
// words, cited to book + page.
// Source PDF: /A POC PC related/5.Splat/Ghostwalk.pdf

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const BC_BAB = [0, 1, 2, 3, 3, 4]; // Bone Collector, 6 levels
const BC_P = [0, 0, 1, 1, 1, 2];
const BC_G = [2, 3, 3, 4, 4, 5];
const GS_BAB = [1, 2, 3, 4, 5]; // Ghost Slayer, 5 levels
const GS_G = [2, 3, 3, 4, 4];
const GS_P = [0, 0, 1, 1, 1];

const GW = "Ghostwalk";
const GW_PATH = "/A POC PC related/5.Splat/Ghostwalk.pdf";
const CH1 = `${GW} — Chapter 1: All About Ghosts`;
const UPD = "official Ghostwalk 3.5 update (appended to the source PDF)";

export const GHOSTWALK_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "arboreal-guardian",
    name: "Arboreal Guardian",
    ruleset: "core",
    source: `${CH1} — Arboreal Guardian (pp. 18–20; Table 1–3, p. 19)`,
    sourceUrl: GW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Climb", "Concentration", "Craft", "Diplomacy", "Heal", "Handle Animal", "Hide", "Jump", "Knowledge (nature)", "Listen", "Move Silently", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Race: Elf or half-elf (a creature of another race who does a great service for the Arboreal Guardians or the spirit trees may be allowed to join)",
      "Skills: Survival 8 ranks (printed as Intuit Direction 5 ranks and Wilderness Lore 8 ranks)",
      "Feats: Great Fortitude, Green Bond, Point Blank Shot",
    ],
    features: [
      {
        key: "arboreal-guardian-features",
        name: "Arboreal Guardian Features",
        category: "trait",
        description:
          "A sworn protector of the Spirit Wood and its spirit trees, bound to one tree by the Green Bond feat. Arboreal Guardians gain no proficiency with any armor or shields. Spellcasting advances +1 level of an existing divine spellcasting class at every even level (2nd, 4th, 6th, 8th, 10th). Bond's call (1st): make an Intuit Direction check (DC 15; Survival in 3.5) once per round to determine the direction to her spirit tree. Forestwalk (1st): within the Spirit Wood, her land speed increases by 10 feet, stacking with other bonuses. Nature's water (2nd): acquire potions from her bonded spirit tree at the cost to create rather than the market price, if she provides the herbs and ingredients. Natural armor: an enhancement bonus to her existing natural armor bonus (per the official 3.5 update) of +1 at 2nd level, rising to +2 at 4th, +3 at 6th, +4 at 8th, and +5 at 10th; at +3 her skin takes on her spirit tree's coloration. Unhindered charge and wood speech (3rd: charge or run unhindered through plants, even trees; telepathically communicate with her spirit tree or its other Guardians within 1 mile), hunter's mercy and blindsight (5th), nature's defender and quench once per day (7th), and tree stride once per day (9th). Class skills are the replacement list from the official 3.5 update.",
        source: `${CH1} — Arboreal Guardian (pp. 18–20; Table 1–3, p. 19); ${UPD}`,
        sourceUrl: GW_PATH,
      },
    ],
  },
  {
    id: "bone-collector",
    name: "Bone Collector",
    ruleset: "core",
    source: `${CH1} — Bone Collector (pp. 20–22; Table 1–4, p. 21)`,
    sourceUrl: GW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(BC_BAB, BC_P, BC_P, BC_G),
    classSkills: ["Concentration", "Craft", "Heal", "Hide", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Sense Motive"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Craft (alchemy) 2 ranks (printed as Alchemy; changed by the official 3.5 update), Concentration 3 ranks, Craft (armorsmithing, bowmaking, or weaponsmithing) 1 rank, Heal 5 ranks, Knowledge (arcana) 3 ranks",
      "Feats: Endurance, Great Fortitude",
      "Special: Must have been knocked unconscious or killed by an undead creature or a necromancy spell, or have received a negative level or ability damage or drain from an undead creature or a necromancy spell",
    ],
    features: [
      {
        key: "bone-collector-features",
        name: "Bone Collector Features",
        category: "trait",
        description:
          "A hunter who draws personal power from the destruction of undead, bearing tokens and trophies of her kills; she gains no proficiency with any weapons, armor, or shields. She casts a small number of divine spells of her own (Wisdom-based, prepared and cast just as a cleric does; 1st–3rd level spells per Table 1–4, from a list built for fighting undead — hide from undead, bonerattle, consecrate, ghost touch armor, death ward, forced manifestation, searing light, and the like, as updated by the official 3.5 update). Recognize undead (1st): +4 on Spot checks or Will saves to penetrate an undead's disguise or an illusion that changes its appearance, and a Spot check (DC 10 + the undead's Cha modifier) to recognize an undisguised undead that naturally appears living. Her bone trophies empower her: lesser bone armor (1st) and lesser bone weapon (2nd), negative energy shroud (3rd), greater bone armor (4th), greater bone weapon (5th), and undead channel (6th).",
        source: `${CH1} — Bone Collector (pp. 20–22; Table 1–4, p. 21); ${UPD}`,
        sourceUrl: GW_PATH,
      },
    ],
  },
  {
    id: "deathwarden-chanter",
    name: "Deathwarden Chanter",
    ruleset: "core",
    source: `${CH1} — Deathwarden Chanter (pp. 22–25; Table 1–5, p. 23)`,
    sourceUrl: GW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (ghost lore)", "Knowledge (the planes)", "Knowledge (religion)", "Profession"],
    prerequisites: [
      "Race: Dwarf",
      "Alignment: Any lawful",
      "Base Attack Bonus: +4",
      "Skills: Concentration 5 ranks, Knowledge (ghost lore) 3 ranks, Knowledge (the planes) 3 ranks, Knowledge (religion) 5 ranks, Perform (sing) 1 rank (rank supplied by the official 3.5 update)",
      "Feats: Iron Will, Spell Focus (Evocation)",
      "Spells: Able to cast 3rd-level divine spells",
      "Patron Deity: Any but Orcus",
      "Special: Must have participated in a Hallowing with the permission of the Deathwarden dwarves; must have destroyed one undead of 3 HD or more through the use of positive energy",
    ],
    features: [
      {
        key: "deathwarden-chanter-features",
        name: "Deathwarden Chanter Features",
        category: "trait",
        description:
          "A leader of the dwarven Deathwarden clan, which prepares bodies for the afterlife and guards the Veil of Souls; he gains no proficiency with any weapons, armor, or shields. Spellcasting advances +1 level of an existing divine spellcasting class at every level. Smite undead once per day at 1st level (twice at 4th, three times at 8th), undead's foe (1st), and iron soul (2nd). Great rune (3rd, and again at 6th and 9th): he draws, paints, or engraves runes on solid surfaces — active runes function when completed, passive runes trigger like a glyph of warding; which runes he can choose (spell, ward, turning, armor, thunder, law, clan, veil, song) is set by his class level + Wisdom modifier, per Table 1–6 as clarified by the official 3.5 update, and some runes are powered by sacrificing a spell slot. Deep chant once per day at 5th level (twice at 10th) and shepherd soul (7th).",
        source: `${CH1} — Deathwarden Chanter (pp. 22–25; Table 1–5, p. 23; Table 1–6, p. 24); ${UPD}`,
        sourceUrl: GW_PATH,
      },
    ],
  },
  {
    id: "ghost-slayer",
    name: "Ghost Slayer",
    ruleset: "core",
    source: `${CH1} — Ghost Slayer (pp. 25–26; Table 1–7, p. 26)`,
    sourceUrl: GW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(GS_BAB, GS_G, GS_P, GS_G),
    classSkills: ["Bluff", "Climb", "Craft", "Diplomacy", "Disguise", "Forgery", "Gather Information", "Hide", "Knowledge (ghost lore)", "Listen", "Profession", "Sense Motive", "Spot"],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Gather Information 4 ranks, Knowledge (ghost lore) 5 ranks, Spot 5 ranks (the book also requires Innuendo 4 ranks, a 3.0 skill folded into Bluff in 3.5)",
      "Feats: Alertness, plus either Incorporeal Target Fighting or Incorporeal Spell Targeting (the book prints the nonexistent feat “Ghost Fighting”; the official 3.5 update corrects it to Incorporeal Target Fighting)",
      "Special: Must have been knocked unconscious by or failed a saving throw against an attack from a ghost; a character who is a ghost cannot take the ghost slayer prestige class",
    ],
    features: [
      {
        key: "ghost-slayer-features",
        name: "Ghost Slayer Features",
        category: "trait",
        description:
          "A living hunter who studies ghosts so they can be easily dispatched; ghost slayers are never themselves active as ghosts, and he gains no proficiency with any weapons, armor, or shields. Untainted spirit (1st): immune to all forms of possession. Silver aura (2nd): all of his melee weapons, including unarmed strikes, are treated as silver for the purpose of stunning a ghost with a successful critical hit or sneak attack. Protected vessel (3rd): +3 on all saving throws against ghost powers, and reduce ability damage or drain caused by ghost powers by 1 point per attack (minimum 0). Detect ghost at will as a spell-like ability and ghost touch aura (4th: as a move-equivalent action, cause his weapon to glow with a dull violet aura for 1 round). Ghost bane fires (5th).",
        source: `${CH1} — Ghost Slayer (pp. 25–26; Table 1–7, p. 26); ${UPD}`,
        sourceUrl: GW_PATH,
      },
    ],
  },
];
