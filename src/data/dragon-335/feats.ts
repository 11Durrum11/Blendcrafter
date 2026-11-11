// Dragon Magazine #335 (September 2005) — feat draft: 17 records.
// The program survey named ~0 feats for this issue; Class Acts and the
// Ecology actually carry seventeen:
//  - FOUR fighter feats — "Cultured Combatants II" (Hal Maclean), p. 88
//    (part 1 ran in Dragon #333). All printed [General]; each Special
//    line makes it a fighter bonus feat. ⚠️ Nimble Deflections' Special
//    line prints "A fighter may select Trained Fingers as one of his
//    fighter bonus feats" — a magazine print error (Trained Fingers is
//    a different feat, from part 1); the image confirms the line as
//    printed, and the record carries it as printed with a note.
//  - FOUR ranger feats — "Favored Enemy Feats" (John E. Ling Jr.),
//    p. 91. All printed [General].
//  - ONE rogue feat — "A Second Skin" (Troy E. Taylor), p. 92. Printed
//    [General] in a sidebar box.
//  - TWO sorcerer feats — "Aquatic Fey Kin" (William L. Christensen),
//    p. 93: a [Bloodline] feat in the Dragon #311/#325 bloodline-feat
//    family and its [General] follow-on.
//  - THREE lizardfolk feats — "Ecology of the Lizardfolk" (Amber E.
//    Scott and F. Wesley Schneider), pp. 56-57. Deep Breather is
//    printed [General]; Chameleon Blood and Reptilian Healing print
//    with NO type tag (confirmed on the page images) and stage as
//    General with the omission noted in their records.
//  - THREE wizard feats — "Disposable Arcana" (Ben Vandgrift), p. 94.
//    ⚠️ These are NOT printed as formal feat blocks: the column names
//    each ("Feat: Notch Rune-Stick" etc.) with a flavor description and
//    states the governing rule — each type of disposable arcana
//    requires its own feat, functionally equivalent to Scribe Scroll.
//    They stage in the feats barrel on the issue-331 alternative
//    familiar abilities precedent, say so in their text, and are
//    flagged in SCREENING.md for Shaun's call.
// All feat texts verified against rendered page images (magazine
// pp. 56, 57, 88, 91, 92, 93); the image governs over the OCR stream.

import type { FeatDefinition } from "@/engine/types";

const SRC_FIGHTER = "Dragon Magazine #335 — Class Acts: Cultured Combatants II (Hal Maclean), p. 88";
const SRC_RANGER = "Dragon Magazine #335 — Class Acts: Favored Enemy Feats (John E. Ling Jr.), p. 91";
const SRC_ROGUE = "Dragon Magazine #335 — Class Acts: A Second Skin (Troy E. Taylor), p. 92";
const SRC_SORCERER = "Dragon Magazine #335 — Class Acts: Aquatic Fey Kin (William L. Christensen), p. 93";
const SRC_WIZARD = "Dragon Magazine #335 — Class Acts: Disposable Arcana (Ben Vandgrift), p. 94";
const SRC_ECOLOGY = "Dragon Magazine #335 — Ecology of the Lizardfolk (Amber E. Scott and F. Wesley Schneider), pp. 56-57";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_FIGHTER,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const RANGER_SPECIAL =
  "Special: You can gain this feat multiple times. Its effects do not stack. Instead, each time you take the feat you must choose a different favored enemy type.";

const WIZARD_FRAME =
  "Named feat from the Disposable Arcana column (not printed as a formal feat block — staged in the feats barrel as the catalog's fitting record shape; see SCREENING.md). Per the column's design rules, each type of disposable arcana requires its own feat, functionally equivalent to Scribe Scroll — knowing how to scribe a scroll doesn't enable you to use another form — and creation costs remain consistent with those of scrolls; the item must be decipherable via read magic so that a wizard can copy the spell into a spellbook. A single-use, spell-completion alternative to a scroll.";

export const DRAGON_335_FEATS: FeatDefinition[] = [
  // ---- Class Acts (Fighter): Cultured Combatants II (4) ----
  F({
    id: "nimble-deflections",
    name: "Nimble Deflections",
    prerequisites: ["Dex 13", "Perform (keyboard) 7 ranks", "Dodge"],
    benefitSummary:
      "[General.] Practice with moving your hands deftly on keyboards has taught you how to swiftly change their location, positioning them quickly to deflect blows. Benefit: When wielding a two-handed weapon and using the Dodge feat, you may use your weapon to fend off blows as well as make attacks: you gain a +2 shield bonus to your Armor Class against the opponent you have designated as the target of your Dodge feat. You lose this bonus whenever a condition makes you lose your Dexterity bonus to Armor Class. Special: A fighter may select Trained Fingers as one of his fighter bonus feats — as printed in the magazine; the Special line names Trained Fingers (a feat from part 1 of this series, Dragon #333) rather than this feat, an apparent print error carried as printed with this note. The other three feats in this column each name themselves as fighter bonus feats.",
  }),
  F({
    id: "supremely-confident",
    name: "Supremely Confident",
    prerequisites: ["Perform (act) 7 ranks"],
    benefitSummary:
      "[General.] With a sneer, a scornful laugh, and a raised eyebrow you send the message that you are merely toying with your opponents. Benefit: You may, as a standard action, make a Perform (act) check in place of an Intimidate check made to demoralize an opponent in combat (see page 76 of the Player's Handbook). In addition, whenever you make a successful critical hit you can immediately attempt to demoralize your target as a free action. Special: A fighter may select Supremely Confident as one of his fighter bonus feats (see page 38 of the Player's Handbook).",
  }),
  F({
    id: "war-chant",
    name: "War Chant",
    prerequisites: ["Perform (sing) 7 ranks"],
    benefitSummary:
      "[General.] Your rhythmic singing can impress on others the need for haste. Benefit: As long as you chant for 3 rounds prior to the start of combat you gain a +2 bonus on your initiative check. In addition, every ally within 30 feet of you who listened to your chanting for the entire time gains a +1 morale bonus on their initiative checks. The +1 bonuses granted by this feat stack with one another (to a maximum of +4), but provide no further benefit to the users of this feat; thus, a group containing four characters with War Chant grants each member not chanting a +4 morale bonus on initiative checks. Chanting to use this feat requires only a free action to begin and maintain, but the character cannot take any other verbal action while chanting. Special: A fighter may select War Chant as one of his fighter bonus feats.",
  }),
  F({
    id: "we-few-we-happy-few",
    name: "We Few, We Happy Few",
    prerequisites: ["Perform (oratory) 7 ranks"],
    benefitSummary:
      "[General.] Using your natural flair for public speaking your eloquence may bolster the hearts of allies. Benefit: Following a 1-minute speech, you may make a Perform (oratory) check. Any ally who listened to and understood your speech (for the full minute) may use the result of this check as his next Will save if made within the next 10 minutes. The character must decide whether to use the result of the Perform check before attempting his own Will save. Special: A fighter may select We Few, We Happy Few as one of his fighter bonus feats.",
  }),
  // ---- Class Acts (Ranger): Favored Enemy Feats (4) ----
  F({
    id: "favored-dodge",
    name: "Favored Dodge",
    source: SRC_RANGER,
    prerequisites: ["Dodge", "Favored enemy"],
    benefitSummary:
      "[General.] Study of your favored enemy's movements allows you to dance away from its most vicious attacks. Benefit: Select a favored enemy. When fighting a creature of that type you may add your favored enemy bonus to your Armor Class as a dodge bonus. This bonus applies to your Armor Class against creatures of the appropriate type (only). If you lose your Dexterity bonus to Armor Class for any reason, you also lose this dodge bonus. " +
      RANGER_SPECIAL,
  }),
  F({
    id: "intimidate-the-enemy",
    name: "Intimidate the Enemy",
    source: SRC_RANGER,
    prerequisites: ["Intimidate 3 ranks", "Favored enemy"],
    benefitSummary:
      "[General.] You've learned techniques to quickly and effectively taunt and demoralize your favored enemy. Benefit: Select a favored enemy. You may add your favored enemy bonus on any Intimidate checks made to demoralize a creature of the chosen type in combat. In addition, you can demoralize a creature of the chosen type as a move action (see page 76 of the Player's Handbook for more information on demoralizing an opponent). Normal: Demoralizing an opponent in battle is a standard action. " +
      RANGER_SPECIAL,
  }),
  F({
    id: "tactical-advantage",
    name: "Tactical Advantage",
    source: SRC_RANGER,
    prerequisites: ["Base attack bonus +5", "Favored enemy"],
    benefitSummary:
      "[General.] Your studies into your favored enemies' tactics has taught you how to better control the battlefield around them. Benefit: Select a favored enemy. When fighting a creature of that type you may add your favored enemy bonus on attack rolls and opposed checks made to perform trip, disarm, and bull rush attacks. This bonus applies to opposed checks made against a creature of the chosen type both when you initiate such an attack and when you defend against it. " +
      RANGER_SPECIAL,
  }),
  F({
    id: "no-threat-to-me",
    name: "No Threat to Me",
    source: SRC_RANGER,
    prerequisites: ["Base attack bonus +7", "Point Blank Shot", "Favored enemy"],
    benefitSummary:
      "[General.] You've learned to safely make a ranged attack when in close combat with your favored enemies. Benefit: Select one of your favored enemies. You may make a ranged attack without provoking an attack of opportunity from a creature of the chosen type. Creatures of other types that threaten you can make attacks of opportunity as normal whenever you use a ranged weapon. " +
      RANGER_SPECIAL,
  }),
  // ---- Class Acts (Rogue): A Second Skin (1) ----
  F({
    id: "improve-disguise",
    name: "Improve Disguise",
    source: SRC_ROGUE,
    prerequisites: ["Cha 13", "Disguise 7 ranks", "Sense Motive 5 ranks"],
    benefitSummary:
      "[General.] You can more effectively disguise yourself in a specific way, such as changing your gender, race, age, or social class. Benefit: You do not suffer the -2 penalty for attempting to disguise yourself as another gender, race, or age category. You can also don a disguise in half the normal amount of time.",
  }),
  // ---- Class Acts (Sorcerer): Aquatic Fey Kin (2) ----
  F({
    id: "aquatic-fey-bloodline",
    name: "Aquatic Fey Bloodline",
    source: SRC_SORCERER,
    prerequisites: ["Ability to cast arcane spells without preparation", "Ability to summon a familiar"],
    benefitSummary:
      "[Bloodline feat.] Your ancestry contains an aquatic fey creature. Your ancestry gives you a bonus spell known at each spell level, starting at 1st, from the following list: 1st — charm person; 2nd — alter self; 3rd — water breathing; 4th — charm monster; 5th — mind fog; 6th — control water; 7th — control weather; 8th — horrid wilting; 9th — shapechange. Characters with this feat cannot learn or cast spells from the conjuration (creation) or conjuration (healing) subschools, and all such spells are removed from the spell lists of all their spellcasting classes. (Bloodline feats were introduced in Dragon #311 and expanded in #325; a character can have only one bloodline feat. Do not confuse bloodline feats with bloodlines as presented in Unearthed Arcana — the systems are different but not mutually exclusive.)",
    special:
      "If a character takes this feat any time after 1st level and has already learned any of the spells on this list in the class to which she applies this feat, she gains no additional spells known at those spell levels. This restriction does not apply if she learned any of these spells as a member of another spellcasting class.",
  }),
  F({
    id: "fey-prescience",
    name: "Fey Prescience",
    source: SRC_SORCERER,
    prerequisites: ["Aquatic Fey Bloodline", "Ability to cast 5th-level arcane spells"],
    benefitSummary:
      "[General.] On stormy nights, your aquatic fey ancestry grants you the ability to see glimpses of the future. Benefit: You can cast divination once per day as a spell-like ability (caster level equals your level in the arcane spellcasting class that granted you access to this feat). However, you can only cast this spell on stormy nights, as it is your ancestral tie and its link to water that grants you this ability. This ability does not affect your number of spells known or spells per day.",
  }),
  // ---- Ecology of the Lizardfolk (3) ----
  F({
    id: "deep-breather",
    name: "Deep Breather",
    source: SRC_ECOLOGY,
    prerequisites: ["Con 16"],
    benefitSummary:
      "[General.] You can hold your breath much longer than normal. Benefit: You can hold your breath for double the normal number of rounds before you risk drowning (see page 304 of the Dungeon Master's Guide). For example, a human with this feat can hold his breath for a number of rounds equal to four times his Constitution score before he risks drowning. Normal: A human can normally only hold his breath for a number of rounds equal to two times his Constitution score before he risks drowning.",
  }),
  F({
    id: "chameleon-blood",
    name: "Chameleon Blood",
    source: SRC_ECOLOGY,
    prerequisites: ["Lizardfolk", "Cha 14"],
    benefitSummary:
      "[General — the magazine prints no type tag for this feat; staged as General.] Lizardfolk with this feat can slightly shift the color of their scales, aiding them in blending in with dense vegetation. Benefit: Lizardfolk with this feat gain a +6 racial bonus on Hide checks made in forested or swampy environments.",
  }),
  F({
    id: "reptilian-healing",
    name: "Reptilian Healing",
    source: SRC_ECOLOGY,
    prerequisites: ["Lizardfolk", "Con 16", "Great Fortitude"],
    benefitSummary:
      "[General — the magazine prints no type tag for this feat; staged as General.] Lizardfolk with this feat heal at an increased rate, much like many lesser reptilian creatures. Benefit: Lizardfolk with this feat regain hit points from normal healing at double the normal rate. For example, a full night's rest allows a lizardfolk with this feat to regain 2 hit points per character level or Hit Die, while complete bed rest restores 4 hit points per character level or Hit Die. This ability does not allow a lizardfolk to regenerate or reattach lost limbs. Normal: A full night's rest normally only restores 1 hit point per character level or Hit Die, while complete bed rest usually only restores 2 hit points per character level or Hit Die.",
  }),
  // ---- Class Acts (Wizard): Disposable Arcana (3) ----
  F({
    id: "notch-rune-stick",
    name: "Notch Rune-Stick",
    source: SRC_WIZARD,
    category: "item-creation",
    benefitSummary:
      "[Item Creation.] " +
      WIZARD_FRAME +
      " The rune-stick must come from ring-free heartwood; rare herbs and sometimes expensive vital animal essences are made into pastes and rubbed into the notches over time to empower the magic. To use a rune-stick (a thin stick of sacred wood, 6 to 8 inches long, its magic words notched in runes), the spellcaster snaps the stick and speaks aloud the proper ritualized phrase.",
  }),
  F({
    id: "infuse-jar",
    name: "Infuse Jar",
    source: SRC_WIZARD,
    category: "item-creation",
    benefitSummary:
      "[Item Creation.] " +
      WIZARD_FRAME +
      " Taking inspiration from canopic jars, the arcanist infuses spell energy into liquids sealed into ceramic vessels, glazed and painted with numerous colorful glyphs: the purest clays are shaped into small jars upon which hieroglyphs are painted with fine pigments, and inside the jars are long-stewing infusions of water-herbs and the dew collected from certain savanna flowers. Upon breaking the jar, the wizard frees the essence of the spell held within, awaiting the words of the caster to give it final form.",
  }),
  F({
    id: "mix-powder",
    name: "Mix Powder",
    source: SRC_WIZARD,
    category: "item-creation",
    benefitSummary:
      "[Item Creation.] " +
      WIZARD_FRAME +
      " Packets of specific powders and granules store the magical energy of spells as easily as markings on paper; the various ingredients (salts, spices, or ground minerals and plants) naturally account for the greatest part of their cost, and most wizards keep their powders stored in small paper envelopes held within waterproof leather pouches. A wizard uses a powder by sprinkling it, casting it into the air, or blowing it from the hand.",
  }),
];
