// Dragon Magazine #359 (September 2007) — feat draft: 11 records.
// The FINAL print issue of Dragon Magazine.
//
// EIGHT "Arcane Lore Abilities" — "Class Acts — Finale: Arcane Lore
// Abilities" (Monte Cook), p. 124. Feats that grant supernatural
// abilities (suppressed in an antimagic field, not dispellable); the
// article frames them as the fruits of long delving into arcane lore,
// all gated by high arcane caster levels.
//
// ONE feat from "Class Acts — Warrior: The Universal Key" (Jeremy
// Walker), p. 122: Find Flaw [General]. Its full text (prerequisites,
// benefit, fighter-bonus special) was recovered from the realmshelps
// feat index (Source: Dragon #359) because the issue's OCR stream
// interleaves the feat block with the skeleton key item block; the
// magazine header "FIND FLAW [GENERAL]" is confirmed in the issue text.
//
// ONE feat from "Class Acts — Adventurer: Body Modifications" (James
// Lafond Sutter), p. 116: Skincaster [General]. Header confirmed in the
// issue text; prerequisite/benefit cross-checked against realmshelps
// (Source: Dragon #359); the Living Spellbook sidebar in the article
// supplies the scribing details carried in the record.
//
// ONE feat from "Dragonmarks: Echoes of the Mourning" (Keith Baker),
// pp. 106-115: Mourning Mutate [Aberrant]. Eberron material — the feat
// stages as mechanics only, setting lore stripped, per the standing
// Eberron rule; its printed prerequisite ("you survived the Mourning")
// is setting-bound and is flagged in SCREENING.md for Shaun.
//
// ⚠️ OCR CAUTION: this pack was extracted from the archive.org OCR
// text stream, not from rendered page images. Every caster-level gate
// in the Arcane Lore set was read from the stream (Countenance reads
// "caster level oth" — staged as 9th as the set's lowest gate and
// flagged in SCREENING.md; Name of the Mage's frightened duration is
// partially garbled). Image verification is listed as an integration
// step in SCREENING.md; nothing here was silently invented.

import type { FeatDefinition } from "@/engine/types";

const SRC_LORE = "Dragon Magazine #359 — Class Acts: Arcane Lore Abilities (Monte Cook), p. 124";
const SRC_KEY = "Dragon Magazine #359 — Class Acts: The Universal Key (Jeremy Walker), p. 122";
const SRC_BODY = "Dragon Magazine #359 — Class Acts: Body Modifications (James Lafond Sutter), p. 116";
const SRC_MOURNING = "Dragon Magazine #359 — Dragonmarks: Echoes of the Mourning (Keith Baker), pp. 106-115";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_LORE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const LORE_FRAME =
  "Arcane lore ability: this feat grants a supernatural ability — it cannot be dispelled, but it is suppressed in an antimagic field.";

export const DRAGON_359_FEATS: FeatDefinition[] = [
  // ---- Arcane Lore Abilities (8) ----
  F({
    id: "countenance-of-the-mage",
    name: "Countenance of the Mage",
    prerequisites: ["Int 13", "Cha 11", "Arcane caster level 9th"],
    benefitSummary:
      "[General.] You use ancient magical secrets to control your appearance. " +
      LORE_FRAME +
      " Benefit: With a full round of concentration you can rid yourself of dust, dirt, sweat, and grime whenever you wish; changing your hair's color or length, or shaving, trimming, or coloring facial or body hair, are likewise full-round actions. You may also adopt a single cosmetic affectation — curiously shaped or colored eyes, hair that waves in an unfelt breeze, a strangely shaped shadow, and so forth; the affectation is permanent once chosen, cannot be changed, and has no game effect. Finally, you may designate a single nonmagical container no larger than 3 feet by 3 feet by 3 feet that holds nothing but nonmagical apparel or jewelry: by concentrating for a round you can conjure any article in the container and have it appear on your body, instantly worn, optionally transferring the clothing you already wear in that position back to the container at the same time. This never conjures weapons or gear. (Caster-level gate read as 9th from a garbled OCR line — see SCREENING.md.)",
  }),
  F({
    id: "ears-of-the-mage",
    name: "Ears of the Mage",
    prerequisites: ["Int 13", "Arcane caster level 14th"],
    benefitSummary:
      "[General.] You use arcane lore to enhance your hearing to a supernatural degree. " +
      LORE_FRAME +
      " Benefit: You designate one specific, proper name. Thereafter, if anyone within a radius of 10 miles per your arcane spellcaster level speaks that name, you hear it and instantaneously know the direction of, distance to, and name of the speaker. No concentration or action is required to gain this knowledge, and incoming information does not distract or hinder you — although if a great many people speak the name at once, the DM is free to adjudicate that the incoming information is lost (wise mages choose uncommon names; most choose their own name). You may choose a new name as a standard action once per year, but only one name can be designated at a time.",
  }),
  F({
    id: "eyes-of-the-mage",
    name: "Eyes of the Mage",
    prerequisites: ["Int 13", "Arcane caster level 12th"],
    benefitSummary:
      "[General.] You master rare mysteries to enhance your vision. " +
      LORE_FRAME +
      " Benefit: Your eyes glow with a supernatural sheen, granting you darkvision and low-light vision. If you already have darkvision due to your race, its range is increased by 60 feet. Your eyesight becomes absolutely perfect: you gain a +1 bonus on Search checks and a +1 insight bonus on all ranged attacks due to your particular keenness of vision.",
  }),
  F({
    id: "footsteps-of-the-mage",
    name: "Footsteps of the Mage",
    prerequisites: ["Int 13", "Arcane caster level 12th"],
    benefitSummary:
      "[General.] Using obscure arcane lore, you gain the ability to glide mysteriously along the ground. " +
      LORE_FRAME +
      " Benefit: You can move without actually taking steps: your feet glide along the ground at your normal speed. You can move this way as long as your feet touch the ground, even if they are bound. You gain a +2 bonus on Balance checks and a +4 bonus on Reflex saves made to avoid falling (such as into a pit) or traps triggered by stepping onto the floor.",
  }),
  F({
    id: "hands-of-the-mage",
    name: "Hands of the Mage",
    prerequisites: ["Int 13", "Arcane caster level 14th"],
    benefitSummary:
      "[General.] You develop a supernatural affinity between your hands and a specific object using the nearly forgotten teachings of a far-off time or place. " +
      LORE_FRAME +
      " Benefit: You designate one object that you own and can lift on your own without magical aid; the object must have been in your possession for at least a week and a day. Once designated, as a free action you can have the item fly to your hand(s) via telekinesis as long as you can see it and have line of effect to it; the item travels to you in 1 round, avoiding obstacles, regardless of distance. Further, once per week, with a full round of concentration, the item can be conjured to appear instantaneously in your hand from any distance. You may designate a new object only if the previous item is destroyed; otherwise your choice is permanent, and the new object must meet all the same requirements. Special: You may take this feat multiple times; each time you do, you must choose a different item.",
  }),
  F({
    id: "name-of-the-mage",
    name: "Name of the Mage",
    prerequisites: ["Arcane caster level 20th"],
    benefitSummary:
      "[General.] By plumbing the depths of eldritch knowledge, you have discovered dire secrets no mortal was ever meant to know; your name itself has gained an inherent power all its own. " +
      LORE_FRAME +
      " Benefit: Anyone other than you who speaks your name becomes greatly unnerved, as are all who hear it (other than you). If the creature who speaks your name has as many or more Hit Dice than you, he is shaken for 3 rounds (no save); if he has fewer Hit Dice than you, he is frightened (duration partially garbled in the source scan — see SCREENING.md). Creatures who hear your name must make a Will save (DC 10 + your arcane spellcasting level + your Charisma bonus) or become frightened for 3 rounds; even those who succeed on the saving throw are shaken for 1 round. Neither your presence nor knowledge of you has any effect on this ability. This is a mind-affecting fear effect.",
  }),
  F({
    id: "presence-of-the-mage",
    name: "Presence of the Mage",
    prerequisites: ["Int 11", "Cha 17", "Arcane caster level 18th"],
    benefitSummary:
      "[General.] Your delving into secrets unknown to mortals has forever changed you on an intangible level. " +
      LORE_FRAME +
      " Benefit: Allies within 25 feet of you are heartened and gain a +1 morale bonus on saving throws and attack rolls. Non-allied creatures within 25 feet of you are slightly unnerved and suffer a -1 penalty on saving throws and attack rolls. Further, natural animals shy away from you, becoming uneasy within 25 feet; any attempt by you or your allies to influence an animal using a Charisma-based skill or ability (such as Handle Animal or wild empathy) within this area suffers a -1 penalty, and Ride checks made within the area suffer a -2 penalty. (The animal/Ride lines are read from a partially interleaved passage — see SCREENING.md.)",
  }),
  F({
    id: "voice-of-the-mage",
    name: "Voice of the Mage",
    prerequisites: ["Int 13", "Arcane caster level 16th"],
    benefitSummary:
      "[General.] You can alter and modulate your voice to give you a host of different vocal effects, making you sound terrifying or alien. " +
      LORE_FRAME +
      " Benefit: You gain a +1 bonus on Disguise, Intimidate, and Perform checks made when using your voice. In addition, you can speak in a normal tone, or even a whisper, and be heard by creatures within 1 mile. You may choose to cause specific listeners (rather than all within shouting distance) to hear your voice, but you must be aware of their presence and general location; no line of sight or line of effect is needed.",
  }),
  // ---- The Universal Key (1) ----
  F({
    id: "find-flaw",
    name: "Find Flaw",
    source: SRC_KEY,
    prerequisites: ["Str 13", "Power Attack", "Base attack bonus +6"],
    benefitSummary:
      "[General.] Years of experience in bashing your way through problems has given you an insight into the most efficient way to batter things to pieces; you know just where to hit things in order to destroy them as rapidly as possible. Benefit: Whenever you use the Power Attack feat while attacking an object, you may ignore 1 point of the object's hardness for each point that you subtract from your attack roll. This reduction in hardness stacks with any special ability of the weapon you are using to ignore or reduce hardness (such as from an adamantine weapon). Special: A fighter may select Find Flaw as one of his fighter bonus feats.",
  }),
  // ---- Body Modifications (1) ----
  F({
    id: "skincaster",
    name: "Skincaster",
    source: SRC_BODY,
    prerequisites: ["Prepares spells from a spellbook"],
    benefitSummary:
      "[General.] You copy all spells directly to your skin instead of a spellbook. Benefit: You use your own body as a spellbook (the article's \"Living Spellbook\") and need only be able to read your skin in order to prepare spells. Transferring a spell to your skin costs 100 gp per spell level of the spell. Spells scribed in this manner must still be prepared as normal (unlike the Tattoo Magic feat of Races of Faerûn); if an opponent attempts to use erase on your tattooed spells, you are allowed a Fortitude save to resist the spell. Scribing spells onto your flesh requires a DC 10 Craft (body modifications) or Heal check. The body-modification procedure rules this feat belongs to are digested in this pack's reference.md and flagged in SCREENING.md.",
  }),
  // ---- Dragonmarks: Echoes of the Mourning (1) ----
  F({
    id: "mourning-mutate",
    name: "Mourning Mutate",
    source: SRC_MOURNING,
    prerequisites: ["Survived the Mourning (see SCREENING.md — Eberron setting prerequisite)"],
    benefitSummary:
      "[Aberrant.] You survived the Mourning, but it left its mark upon your body. While one feature is especially noteworthy, you might have any number of purely cosmetic oddities — unusual skin, hair, and eye colors are common, as are strange rashes or webs of scars; the form of a warped feature is up to you and the DM. Benefit: You gain a physical feature that grants you a racial bonus on one type of check or action, chosen from the following list: Disturbing sores — +3 on saving throws vs. poison and disease; Hideous features — +3 on Intimidate checks; Spongy flesh — DR 3/— vs. nonlethal damage; Unnaturally flexible — +3 on Escape Artist checks; Warped ears — +3 on Listen checks; Warped eyes — +3 on Spot checks; Warped limb — the limb deals +2 damage with unarmed strikes. Special: This feat is treated as Aberration Blood (Lords of Madness) for purposes of meeting feat prerequisites. If you have disturbing sores and successfully save against a disease by 3 or fewer points, you avoid its effects. APOC: Eberron mechanics staged with setting lore stripped; the Mourning prerequisite is flagged in SCREENING.md.",
  }),
];
