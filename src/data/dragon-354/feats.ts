// Dragon Magazine #354 (April 2007) — feat draft: 8 records.
// All eight come from "Ancient PCs" (Hal Maclean), pp. 50-56 — the
// article's feat chain for characters who have lived a thousand years
// or more. WEDDED TO HISTORY (the sidebar feat on p. 54) is the gate:
// it grants one of the article's seven ancient backgrounds (digested
// in full in reference.md; backgrounds have no house catalog shape —
// the domains precedent, #323/#329). Seven further [General] feats on
// pp. 55-56 are each keyed to a specific background.
// The program survey listed "Ancient PCs" as reference-only; the issue
// in fact prints eight feats and a 9th-level spell — see MANIFEST.md.
// All feat names, prerequisites, and effects verified against rendered
// page images (magazine pp. 54-56); the image governs over the OCR
// stream — it fixes the eighth feat's name as PAWN IN THE GREAT GAME
// (the OCR garbled its header), confirms SHUFFLED INTERIOR, and gives
// Forgotten Lore's replenishment time as 8 hours.
// Feat texts are faithful mechanical paraphrases in our own words.

import type { FeatDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #354 — Ancient PCs (Hal Maclean), pp. 50-56";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_354_FEATS: FeatDefinition[] = [
  F({
    id: "wedded-to-history",
    name: "Wedded to History",
    prerequisites: ["Special: may only be taken at 1st level"],
    benefitSummary:
      "[General.] Born in the distant past, you enjoy a special insight or possess uncanny abilities that distinguish you from those for whom the time of your birth is at best a few memories passed down through countless generations. Prerequisite: You can only take this feat at 1st level. Benefit: When you take this feat, choose one of the article's ancient backgrounds, gaining any special abilities that accompany it. The seven backgrounds are: Apostle of the Forgotten, Elder of Legend, Golden Ager, Hand of Prophecy, Survivor, Throwback, and Wanderer — each digested in full in the pack's reference.md (the backgrounds themselves have no catalog record shape; this feat is their gate).",
  }),
  F({
    id: "ancestor",
    name: "Ancestor",
    prerequisites: ["Wedded to History", "Elder of legend background"],
    benefitSummary:
      "[General.] All members of your race consider you a distant, but revered, relative. Prerequisites: Wedded to History, elder of legend background. Benefit: You shift the initial attitude of anyone of your race one step closer to helpful. You gain a +2 bonus on Diplomacy checks made to further shift the attitudes of anyone of your race.",
  }),
  F({
    id: "false-master",
    name: "False Master",
    prerequisites: ["Use Magic Device 9 ranks", "Wedded to History", "Wanderer background"],
    benefitSummary:
      "[General.] The tutelage of your long-vanished homeland allows you to mimic the magical aura of others, including the creators of certain magical creatures. Prerequisites: Use Magic Device 9 ranks, Wedded to History, wanderer background. Benefit: As a full-round action that provokes an attack of opportunity, you attempt to impersonate the master or creator of an intelligent construct: a Use Magic Device check against a DC of 26 + the creature's HD. If you succeed, you can use a standard action to command the construct to perform any action it is normally capable of, as long as you succeed at a Use Magic Device check (DC 10 + the creature's HD) each round that the commanded action is performed. If you fail such a check, you must reestablish your false persona before issuing a new command. Special: The creature always recognizes its true master, making it impossible for you to control it in his presence.",
  }),
  F({
    id: "forgotten-lore",
    name: "Forgotten Lore",
    prerequisites: ["Appraise 1 rank", "Wedded to History", "Wanderer background"],
    benefitSummary:
      "[General.] Your incessant combing of marketplaces and bazaars sometimes leaves even you surprised by the contents of your backpack. Prerequisites: Appraise 1 rank, Wedded to History, wanderer background. Benefit: You may carry up to a maximum of 10 gp per level worth of items without recording their exact nature. Assuming you retain access to your gear, you may subsequently designate all or part of this amount to immediately add any desired item to your equipment list. You must spend 8 hours shopping in a town to replenish this gear. Special: You must record a nonmagical amount of weight occupied by this gear at the time of purchase and adjust your encumbrance accordingly. You may not add an item to your equipment list if its weight exceeds the amount you have allocated for this purpose.",
  }),
  F({
    id: "pawn-in-the-great-game",
    name: "Pawn in the Great Game",
    prerequisites: ["Diehard", "Endurance", "Wedded to History", "Hand of prophecy background"],
    benefitSummary:
      "[General.] You are a mere plaything to cosmic powers that might never permit you the release of death, although they take a toll in pain and suffering when you fail them. Prerequisites: Diehard, Endurance, Wedded to History, hand of prophecy background. Benefit: Whenever you fall prey to an attack that reduces you to -10 or fewer hit points (but not one that leaves you at positive hit points) or you fail a saving throw to resist a death attack, you may make a Fortitude saving throw (DC 25 - your level). If you succeed, you take 2 points of Strength drain and 2 points of Constitution drain but find yourself alive, with 1 hit point.",
  }),
  F({
    id: "self-sufficient-354",
    name: "Self-Sufficient",
    prerequisites: ["Wedded to History", "Survivor background"],
    benefitSummary:
      "[General.] Prerequisites: Wedded to History, survivor background. Benefit: You may treat the Heal skill as a class skill and can give yourself long-term care. Once each day you may heal 1d4 + your Intelligence modifier points of damage (minimum 1) by stitching up wounds and applying various alchemical unguents. This takes 1 minute of uninterrupted work and requires a healer's kit, using up one use of the kit.",
  }),
  F({
    id: "shuffled-interior",
    name: "Shuffled Interior",
    prerequisites: ["Great Fortitude", "Wedded to History", "Throwback background"],
    benefitSummary:
      "[General.] Prerequisites: Great Fortitude, Wedded to History, throwback background. Benefit: All your vital organs — heart, lungs, liver, and so on — are slightly off center from where they should be. When a critical hit or sneak attack is scored against you, there is a 25% chance that the critical hit or sneak attack is negated and damage is rolled normally.",
  }),
  F({
    id: "voice-of-bitter-experience",
    name: "Voice of Bitter Experience",
    prerequisites: ["Bluff 1 rank", "Wedded to History", "Apostle of the lost background [sic — the background's own header reads Apostle of the Forgotten; see MANIFEST.md]"],
    benefitSummary:
      "[General.] Your attachment to deities of old serves as a terror to even the most devoted servant of a god. Prerequisites: Bluff 1 rank, Wedded to History, apostle of the lost background (as printed; the background itself is headed Apostle of the Forgotten — print inconsistency, disclosed in MANIFEST.md). Benefit: Whenever you face someone able to cast divine spells, you can attempt — as a standard action that does not provoke an attack of opportunity — to unnerve him by recounting the fate of your own deity. Make a Bluff check opposed by the target's Sense Motive check. If you win the check, the target is shaken for the remainder of the encounter; if your check exceeds the target's check by 5 or more, the target is also frightened for 1 round. This is a mind-affecting, language-dependent effect.",
  }),
];
