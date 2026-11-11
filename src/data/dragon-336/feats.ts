// Dragon Magazine #336 (October 2005) — feat draft: 8 records.
// The program survey estimated "feats ~0 named" for this issue; the
// Class Acts department (pp. 98-108) actually prints EIGHT feats across
// four columns the survey never itemized — the recurring Class Acts
// blind spot (cf. issues #327-#331):
//   THREE bardic-music feats — "Class Acts: Blasphemous Utterances"
//     (Joshua Cole), p. 99: Blasphemous Utterance and Sickening Sonata
//     are printed with the [Bardic Music] tag; Undertone of Heresy is
//     printed without a tag line. ⚠️ Far Realm flavor — see SCREENING.md.
//   ONE vile feat — "Class Acts: Dark Side Druids" (William L.
//     Christensen), p. 101: Sacrificial Divination [Vile].
//   ONE general feat — "Class Acts: Pressure Point Attacks" (Alejandro
//     Melchor), p. 103: Pressure Point Strike [General], a Stunning
//     Fist expansion for monks. ⚠️ Monk/ki material — see SCREENING.md.
//   THREE wizard pact feats — "Class Acts: Dark Pacts" (Hal Maclean),
//     p. 108: Betrayal of the Spirit Linked, Excised From the Web of
//     Life, and Verminous Graft, all printed [General], each requiring
//     the ability to prepare and cast a named spell plus a "required
//     sacrifice," and each selectable as a wizard bonus feat. ⚠️ Pact /
//     elder-being flavor — see SCREENING.md.
// All prerequisites, DCs, and numbers verified against rendered page
// images (magazine pp. 99, 101, 103, 108); the image governs over the
// OCR stream. Benefit text is a faithful mechanical paraphrase in our
// own words; no magazine prose is reproduced.

import type { FeatDefinition } from "@/engine/types";

const SRC_BARD = "Dragon Magazine #336 — Class Acts: Blasphemous Utterances (Joshua Cole), p. 99";
const SRC_DRUID = "Dragon Magazine #336 — Class Acts: Dark Side Druids (William L. Christensen), p. 101";
const SRC_MONK = "Dragon Magazine #336 — Class Acts: Pressure Point Attacks (Alejandro Melchor), p. 103";
const SRC_WIZARD = "Dragon Magazine #336 — Class Acts: Dark Pacts (Hal Maclean), p. 108";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_BARD,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_336_FEATS: FeatDefinition[] = [
  // ---- Blasphemous Utterances (bard) — 3 ----
  F({
    id: "undertone-of-heresy",
    name: "Undertone of Heresy",
    prerequisites: ["Bardic music", "Perform 4 ranks"],
    benefitSummary:
      "The tones of your music hearken to the alien mindset of the creatures that inspire you. Benefit: You may spend two bardic music uses instead of one. If you do, the saving throw DC of your bardic music ability increases by +2. (The article's Dark Speech sidebar: groups using the Book of Vile Darkness may instead replace Undertone of Heresy with that book's Dark Speech feat and change the prerequisites of Blasphemous Utterance and Sickening Sonata to reflect the replacement — see SCREENING.md.)",
  }),
  F({
    id: "blasphemous-utterance",
    name: "Blasphemous Utterance",
    prerequisites: ["Bardic music", "Perform 9 ranks", "Undertone of Heresy"],
    benefitSummary:
      "[Bardic Music.] Strange whispers and dreadful images sometimes inspire you; they grant your bardic music a terrifying power. Benefit: Creatures within 60 feet that can hear you must make a Will save (DC 10 + half your bard level + your Charisma modifier) or be unnerved by the alien tones of your music. The effects of failing the save depend upon the victim's Hit Dice: creatures with fewer Hit Dice than you are panicked, those with an equal number of Hit Dice become frightened, and creatures with up to 3 Hit Dice more than you are shaken. All three effects last for a number of rounds equal to 1d4 + your Charisma modifier. This is a mind-affecting effect that aberrations are immune to. If a creature has heard your Blasphemous Utterance in the past week it gains a +2 bonus on its save. Special: Using this ability counts as one of your daily uses of bardic music. Levels in classes that advance bardic music progression count as bard levels for the purposes of this feat.",
  }),
  F({
    id: "sickening-sonata",
    name: "Sickening Sonata",
    prerequisites: ["Bardic music", "Perform 12 ranks", "Blasphemous Utterance", "Undertone of Heresy"],
    benefitSummary:
      "[Bardic Music.] Your Blasphemous Utterance becomes so terribly discordant and unnatural that it makes unprepared listeners physically ill. Benefit: Your Blasphemous Utterance affects creatures in a more powerful way: creatures with fewer Hit Dice than you are paralyzed, those with an equal number of Hit Dice become nauseated, and creatures with up to 3 Hit Dice more than you are sickened. All three effects last for a number of rounds equal to 1d4 + your Charisma modifier. This replaces the effect of Blasphemous Utterance; it otherwise functions as that ability.",
  }),
  // ---- Dark Side Druids — 1 ----
  F({
    id: "sacrificial-divination",
    name: "Sacrificial Divination",
    source: SRC_DRUID,
    prerequisites: ["Sacrificial Mastery"],
    benefitSummary:
      "[Vile.] By offering living sacrifices to dark powers you gain insight into the future. Prerequisites as printed: Sacrificial Mastery [Vile] (see Book of Vile Darkness, page 50). Benefit: You can see glimpses of the future by divining with the entrails of sacrificial victims. Upon doing so, you must make a Knowledge (nature) or Knowledge (religion) check; the result of the check determines which divination spell you emulate — DC 10 augury, DC 15 scrying, DC 20 divination, DC 25 commune, DC 30 greater scrying. You may apply the modifiers from Table 2-1: Typical Sacrifice Elements on page 27 of the Book of Vile Darkness to this roll, if any apply. You may always opt to use one of the spells of a DC lower than your check. Using Sacrificial Divination only grants you access to one such spell per day, no matter how many sacrifices you make. All spell effects created by this feat have a caster level equal to your Hit Dice. In addition, you may add the +4 profane bonus granted by Sacrificial Mastery on Knowledge (nature) checks rather than Knowledge (religion) checks when performing a divinatory sacrifice.",
  }),
  // ---- Pressure Point Attacks (monk) — 1 ----
  F({
    id: "pressure-point-strike",
    name: "Pressure Point Strike",
    source: SRC_MONK,
    prerequisites: [
      "Dex 13",
      "Wis 13",
      "Knowledge (arcana) 5 ranks",
      "Improved Unarmed Strike",
      "Stunning Fist",
      "Base attack bonus +8",
      "Ki strike (magic)",
    ],
    benefitSummary:
      "[General.] You know how to strike opponents in supernaturally vulnerable locations. Benefit: You must declare that you are using this feat, as well as which pressure point you wish to strike, before you make your attack roll (thus, a failed attack roll ruins the attempt). You can use Pressure Point Strike as an attack against an enemy or to remove a detrimental condition from an ally. As an attack, Pressure Point Strike forces a foe damaged by your unarmed strike to make a Fortitude save (DC 10 + 1/2 your character level + your Wisdom modifier), in addition to dealing damage normally; a defender who fails this saving throw suffers the effect of the targeted pressure point. This ability only works on giants, humanoids, and monstrous humanoids; other creature types either lack pressure points or have very different ones. You can instead aid an ally by attempting to remove a detrimental condition: make a level check against the DC of the effect that caused your ally's condition to remove the condition. The different uses of this feat count against the number of times per day you can use the Stunning Fist feat in specific amounts — White Tiger Array (1 use; on an enemy removes the stunned, sickened, or fatigued conditions — targeted at an ally it removes those conditions), Red Monkey Point (2 uses; paralyzes your opponent for 1d4 rounds; on an ally removes paralysis), Water Turtle Point (2 uses; blinds or deafens your foe, your choice, for 1d4 rounds; on an ally removes blindness or deafness), Dragon Soul Point (3 uses; lowers an opponent's spell resistance by 1d6 + your Wisdom modifier for 1 round, not below 0; on an ally increases his spell resistance, whether natural or granted by a spell or item, by the same amount for 1 round), Emerald Snake Point (3 uses; floods your foe's body with internal toxins, poisoning him — injury, Fortitude DC 10 + 1/2 your character level + your Constitution modifier, initial damage 1d4 Con, no secondary damage; for an ally, delays the effects of poison for 1d4 hours), Royal Viper Point (4 uses; imposes a penalty on the target's saves against poison by 1 + your Wisdom modifier for 1d4 rounds; touching this point also allows you to neutralize poison in an ally), Celestial Dragon Point (5 uses; prevents an enemy from casting spells or using spell-like abilities for 1d4 rounds; on an ally, you may attempt to remove a condition caused by a spell or spell-like ability as if using greater dispel magic).",
  }),
  // ---- Dark Pacts (wizard) — 3 ----
  F({
    id: "betrayal-of-the-spirit-linked",
    name: "Betrayal of the Spirit Linked",
    source: SRC_WIZARD,
    prerequisites: ["Ability to prepare and cast animate dead", "Required sacrifice (see benefit)"],
    benefitSummary:
      "[General.] A being of pure malice and darkness seduced you into the ultimate treachery: you murdered your own familiar, and now a twisted, undead mockery walks in its place. Prerequisites: ability to prepare and cast animate dead, required sacrifice. Sacrifice: You must kill your own familiar and animate it as either a zombie or skeleton (your choice). Due to the intervention of your patron you suffer none of the ill effects normally incurred by the death of a familiar. Even if you subsequently repent and try to summon a new familiar, only another undead creature answers your call. Benefit: Your familiar gains either the zombie or skeleton template; its abilities and qualities alter to conform with the template (see pages 225 and 265 of the Monster Manual). You no longer gain the special ability it once granted you (such as the +3 on Listen checks granted by a bat), and as a mindless undead it never develops the speak with master or speak with animals of its own kind abilities. However, you gain the ability to draw upon its supernatural vitality when it is within arm's reach: a skeleton familiar grants you DR 5/bludgeoning and a zombie familiar grants you DR 5/slashing. Special: A wizard may select Betrayal of the Spirit Linked as a wizard bonus feat (see page 57 of the Player's Handbook).",
  }),
  F({
    id: "excised-from-the-web-of-life",
    name: "Excised From the Web of Life",
    source: SRC_WIZARD,
    prerequisites: ["Ability to prepare and cast blight", "Required sacrifice (see benefit)"],
    benefitSummary:
      "[General.] A being spun out of madness has granted you the power to make the children of nature quail, but now you must endure their loathing. Prerequisites: ability to prepare and cast blight, required sacrifice. Sacrifice: You suffer a penalty equal to your level on all Charisma-based skills and checks when dealing with creatures of the animal, fey, and plant types, as well as anyone with the wild empathy class ability. Benefit: Whenever you successfully cast a spell upon any creature of the animal, fey, or plant type you may choose to deal damage equal to your caster level to the target, even if the spell does not normally deal damage. If the spell cast allows a saving throw and the target succeeds, it takes no damage from this ability. If the spell cast does not allow a saving throw, the target must make a Fortitude save to negate this damage. Special: A wizard may select Excised From the Web of Life as a wizard bonus feat.",
  }),
  F({
    id: "verminous-graft",
    name: "Verminous Graft",
    source: SRC_WIZARD,
    prerequisites: ["Ability to prepare and cast contagion", "Required sacrifice (see benefit)"],
    benefitSummary:
      "[General.] The darkness spoke to you, and to your eternal regret you listened, plunging your hand into a nest of stinging, crawling insects. Prerequisites: ability to prepare and cast contagion, required sacrifice. Sacrifice: You must give up the normal usage of one of your hands, making it home to a colony of insects like ants or termites. You may no longer use two-handed weapons or equipment. Further, the sight of your hand inspires fear and loathing in all who see it, imposing a -4 penalty on all Charisma-based skills or checks, except Intimidate, for which you instead gain a +2 bonus. This penalty also applies to any skill that requires both hands to use (such as Climb, Open Lock, or Use Rope). Effect: You may, as a standard action, make a melee touch attack with your vermin-covered hand. This attack deals 1d6 points of damage + your Intelligence modifier. In addition, you are always considered armed for the purpose of making or avoiding attacks of opportunity. Special: A wizard may select Verminous Graft as a wizard bonus feat.",
  }),
];
