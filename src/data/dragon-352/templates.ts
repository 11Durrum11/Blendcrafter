// Dragon Magazine #352 (February 2007) — template draft: 1 record.
// The REMADE — "People of Bas-Lag" (Wolfgang Baur), pp. 45-48 ("Creating
// a Remade," p. 45; enhancement and defect charts and descriptions,
// pp. 46-48). An INHERITED template that can be added to any living,
// corporeal creature: the base creature is surgically and
// biothaumaturgically rebuilt, gaining 1d4 enhancements and the same
// number of defects, either specifically chosen by the DM or randomly
// rolled on the article's two d10 charts. Level adjustment: same as
// base creature +1 (so levelAdjustment 1, additive). No CR adjustment
// is printed (crModifier 0). `patches` is empty: the template grants
// no fixed patch — what it grants is the chart system, carried in the
// features below.
// PRINT QUIRK (verified against the page images): the enhancements
// chart (p. 46) lists TEN results, but ELEVEN enhancements are
// described in the text — Spring-Loaded Jumper (p. 48) has a full
// description and no chart slot. All eleven descriptions are carried
// here, and the chart is reproduced as printed; see SCREENING.md.
// Every chart entry, DC, die, and duration below was verified against
// rendered page images (magazine pp. 45-48); the image governs over
// the OCR stream.
// APOC note (see SCREENING.md): the Remade are living people reshaped
// with grafted and machine parts — adjacent to, but distinct from,
// Shaun's War-Torn canon (living people fitted with warforged
// prosthetics, drawing on the shared Warforged/War-Torn/Steamcraft
// equipment pool). The two are NOT merged in this record; the
// distinction is flagged for Shaun. Bas-Lag lore is stripped; the
// template stages as mechanics with neutral framing.

import type { TemplateDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #352 — People of Bas-Lag (Wolfgang Baur), pp. 45-48";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const PREREQ_NOTE =
  "Inherited template: 'Remade' can be added to any living, corporeal creature (referred to as the base creature). The base creature undergoes a regimen of tortures, surgeries, and biothaumaturgical procedures; a Remade uses all the base creature's statistics and special abilities except as noted in the enhancement and defect features. Level adjustment: same as base creature +1.";

const FRAME =
  "Becoming a Remade requires the base creature to undergo a regimen of tortures, surgeries, and biothaumaturgical procedures. After enduring this process, the character gains 1d4 enhancements and the same number of defects, either specifically chosen by the DM or randomly rolled on the Remade Enhancements and Remade Defects charts (each d10). Rather than determining exactly what a Remade looks like, these enhancements and defects assume that functionality is the important element — the appearance of any given modification is up to the player; the mechanics are defined in the features below. A Remade gains no construct immunities or innate advantages from the melding of flesh and machine: the victims of the process must relearn walking, speaking, and other simple acts in their new bodies.";

function f(key: string, name: string, description: string, category: "special-attack" | "special-quality" | "feat" | "trait") {
  return { key, name, description, category, source: SRC, sourceUrl: SRC_URL };
}

export const DRAGON_352_TEMPLATES: TemplateDefinition[] = [
  {
    id: "remade",
    name: "Remade",
    summary:
      "An inherited template for any living, corporeal creature, surgically and biothaumaturgically rebuilt with grafted limbs, metaclockwork components, and machine parts. The creature gains 1d4 enhancements and the same number of defects (DM's choice or rolled on the article's d10 charts) — gills, armored integument, extra arms or legs, a wakeful engine, balanced against boilers, crippled limbs, malfunctioning memories, and wheels. Level adjustment: same as base creature +1. The enhancement chart as printed lists ten results; an eleventh enhancement, Spring-Loaded Jumper, is described in the text with no chart slot (see SCREENING.md).",
    ruleset: "core",
    timing: "inherited",
    source: SRC,
    sourceUrl: SRC_URL,
    crModifier: 0,
    levelAdjustment: 1,
    prerequisites: [{ note: PREREQ_NOTE }],
    patches: [],
    features: [
      f("remade-frame", "Creating a Remade", FRAME, "trait"),
      // ---- Enhancements (chart d10 as printed, pp. 46-48) ----
      f(
        "remade-enhancement-aquatic-prosthesis",
        "Enhancement 1 — Aquatic Prosthesis",
        "The Remade gains primitive gills or an equivalent breathing apparatus. The gills are not especially effective, but grant a +4 bonus on checks or saving throws made to resist all drowning or poison gas checks. In addition, the character gains a swim speed of 10 feet or, if he already has a swim speed, a 10-foot increase to his base swim speed.",
        "special-quality",
      ),
      f(
        "remade-enhancement-armored-integument",
        "Enhancement 2 — Armored Integument",
        "The character gains +1 natural armor.",
        "special-quality",
      ),
      f(
        "remade-enhancement-consummate-eyes",
        "Enhancement 3 — Consummate Eyes",
        "This Remade has extra eyes, granting him a +4 racial bonus on Search and Spot checks.",
        "special-quality",
      ),
      f(
        "remade-enhancement-metaclockwork",
        "Enhancement 4 — Metaclockwork",
        "The Remade has a specialized metaclockwork component that performs a single thaumaturgical function 3 times per day. At the time of Remaking, the DM chooses three 0-level cleric or wizard spells the enhancement can replicate. Each function can be used multiple times per day, but every use counts toward the Remade's daily limit.",
        "special-quality",
      ),
      f(
        "remade-enhancement-night-vision",
        "Enhancement 5 — Night Vision",
        "The character gains an additional 60 feet of darkvision, to a maximum of 240 feet.",
        "special-quality",
      ),
      f(
        "remade-enhancement-olfactory-enhancers",
        "Enhancement 6 — Olfactory Enhancers",
        "The character gains the benefits of the scent special ability (see page 314 of the Monster Manual).",
        "special-quality",
      ),
      f(
        "remade-enhancement-supernumerary-arms",
        "Enhancement 7 — Supernumerary Arms",
        "The Remade is multi-limbed. This new limb is somehow awkward but aids in a number of mundane tasks: the character gains a +2 bonus on Climb checks and can hold an item weighing less than 5 pounds in it. The hand does not have the articulation to wield a weapon or throw items. It also does not provide extra slots for magic items.",
        "special-quality",
      ),
      f(
        "remade-enhancement-supernumerary-legs",
        "Enhancement 8 — Supernumerary Legs",
        "The Remade possesses an additional leg, wheels, or powerful tentacles. This grants him a 5-foot increase in base speed and a +4 bonus on ability checks made to resist being bull rushed or tripped.",
        "special-quality",
      ),
      f(
        "remade-enhancement-unnatural-weapon",
        "Enhancement 9 — Unnatural Weapon",
        "Some dangerous tool, makeshift claw, or wicked appendage has been permanently affixed to the Remade. This attachment can be used as a natural weapon and deals damage depending on the Remade's size: Fine —, Diminutive 1, Tiny 1d2, Small 1d3, Medium 1d4, Large 1d6, Huge 1d8, Gargantuan 2d6, Colossal 2d8.",
        "special-attack",
      ),
      f(
        "remade-enhancement-wakeful-engine",
        "Enhancement 10 — Wakeful Engine",
        "A Remade with the wakeful engine must take the boiler defect. Characters with this enhancement require no rest periods to avoid fatigue or exhaustion (although they still require periods of quiet contemplation to regain spells). This modification is often made to horses, oxen, and other beasts of burden.",
        "special-quality",
      ),
      f(
        "remade-enhancement-spring-loaded-jumper",
        "Enhancement (Described, No Chart Slot) — Spring-Loaded Jumper",
        "The Remade is a powerful leaper and gains a +4 bonus on all Balance and Jump checks. (Print quirk: this enhancement is described in the article text but does not appear on the printed d10 enhancements chart, which lists only the ten results above — see SCREENING.md.)",
        "special-quality",
      ),
      // ---- Defects (chart d10 as printed, pp. 47-48) ----
      f(
        "remade-defect-boiler",
        "Defect 1 — Boiler",
        "The character has a steam boiler that constantly requires fuel, and costs 2 gp per day to feed. If fuel runs out, the character is immediately fatigued. For every day the boiler remains out, the character must make a Fortitude save (DC 14 + 1/day out) or be exhausted. Completely submerging in water or other liquids extinguishes the boiler. Characters with boilers weigh 40 pounds more than characters without.",
        "trait",
      ),
      f(
        "remade-defect-clumsy",
        "Defect 2 — Clumsy",
        "Many Remade are of shoddy construction, and Remade are notoriously unable to control their bodies. Their attachments often fumble or fail at motor coordination. This Remade's Dexterity score drops by −2 (that is, a −2 penalty to Dexterity).",
        "trait",
      ),
      f(
        "remade-defect-crippled-limb",
        "Defect 3 — Crippled Limb",
        "One of the character's hands or whole arms has been amputated, weakened, or warped to the point of near uselessness. The Remade cannot wield weapons with the afflicted limb or make use of weapons that require two hands. The limb lacks the ability to grip and cannot hold items, although, depending on the details of the defect, the Remade might still retain his finger and arm or wrist magic item slots.",
        "trait",
      ),
      f(
        "remade-defect-dulled-faculties",
        "Defect 4 — Dulled Faculties",
        "The Remade's normal senses are somehow compromised by his augmentations. Choose two of the following penalties: −4 on Listen checks, −4 on Search checks, or −4 on Spot checks.",
        "trait",
      ),
      f(
        "remade-defect-hideous-deformity",
        "Defect 5 — Hideous Deformity",
        "The Remade has been fashioned with oozing sores, sealed mouth, exposed muscle or bone, or similar visual flaws. The character takes a −4 penalty on Diplomacy and Gather Information checks.",
        "trait",
      ),
      f(
        "remade-defect-malfunctioning-memories",
        "Defect 6 — Malfunctioning Memories",
        "The character's brain has somehow been tampered with, affecting his memory and skills. There is a 25% chance that whenever the Remade makes a skill check he only counts half of his ranks to determine his skill modifier. This defect has no effect on skill checks in which the character has no ranks.",
        "trait",
      ),
      f(
        "remade-defect-poor-healing",
        "Defect 7 — Poor Healing",
        "The Remade does not recover from injuries well. The character regains only a quarter as many hit points from natural healing as he normally would (minimum 1 hp per day).",
        "trait",
      ),
      f(
        "remade-defect-slow",
        "Defect 8 — Slow",
        "Because of their complex skeletal structures, metal parts, and general bolted-together natures, some Remade are simply not that fast. These characters' base movement is reduced by −10 feet.",
        "trait",
      ),
      f(
        "remade-defect-stiff-jointed",
        "Defect 9 — Stiff Jointed",
        "The character is bound by rusty metal joints, awkward bony outcroppings, poorly healed wounds, or a variety of other maladies that hinder his movement. He takes a −4 penalty on Balance, Jump, and Tumble checks.",
        "trait",
      ),
      f(
        "remade-defect-wheels",
        "Defect 10 — Wheels",
        "Remade without legs and feet must make DC 14 Strength checks to move over any space of rough terrain. (This DC might be higher in certain situations, as determined by the DM.) Failure means that the character has wasted 5 feet of movement and must either choose another path or try again (if he has any movement remaining). He cannot charge or run over even mildly uneven ground. These Remade cannot climb stairs or ladders without a Strength check for each 10 feet of length (DC 15 for stairs, DC 20 for ladders). All Swim and Ride checks take a −4 penalty.",
        "trait",
      ),
    ],
  },
];
