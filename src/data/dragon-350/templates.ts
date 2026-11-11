// Dragon Magazine #350 (December 2006) — template draft: 4 templates.
// THREE mutation templates from "Magic Pollution" (Hal Maclean and
// the Dragon staff; the article's in-body head is "Arcane Afflictions
// and Augmentations"), pp. 34-39: arcane-blood, poisonous, stonebone.
// Mutation templates are racial ability changes; a creature may take
// as many as it qualifies for, and the article's sidebar feat Evolved
// (staged in feats-draft.ts) lets a creature ignore a chosen
// template's drawbacks — each template's Evolved line is carried in
// its record.
// ONE corruption template from "Creatures of Corruption" (Jake
// Manley and Jason Bulmahn): the corrupted template, with its sample
// corrupted treant.
// ⚠️ VERSION WARNING (see SCREENING.md §6): this corrupted template
// is the Dragon #350 printing, NOT the Book of Vile Darkness
// corrupted template (a different, 3.0-era record with +N-keyed
// damage reduction). Do not merge them.
// Numbers were read from the issue's OCR stream and, for the
// corrupted template, cross-checked against the clean
// realmshelps.net transcription of this printing (the sample
// corrupted treant entry). The arcane-blood/poisonous CR and LA
// attributions rest on column reconstruction of the interleaved OCR
// and are flagged in MANIFEST.md. No magazine prose is reproduced;
// template text is a faithful mechanical paraphrase.

import type { TemplateDefinition } from "@/engine/types";

const SRC_POLLUTION = "Dragon Magazine #350 — Magic Pollution (Hal Maclean and the Dragon staff), pp. 34-39";
const SRC_CORRUPTION = "Dragon Magazine #350 — Creatures of Corruption (Jake Manley and Jason Bulmahn)";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

export const DRAGON_350_TEMPLATES: TemplateDefinition[] = [
  {
    id: "arcane-blood",
    name: "Arcane-Blood",
    ruleset: "core",
    timing: "acquired",
    summary:
      "Acquired mutation template for a corporeal living creature whose veins fill with volatile magical residue: its blood is keyed to one energy type (acid, cold, electricity, or fire, chosen when the template is gained and never changed). A creature that strikes it with a slashing or piercing melee weapon is sprayed with burning blood unless it makes a Reflex save, and the arcane-blood creature's own blood burns it for 1d6 points of the chosen energy each time it is so struck. Challenge rating is the base creature's +1; level adjustment is the base creature's +1. A creature with the Evolved feat ignores the self-damage drawback.",
    source: SRC_POLLUTION,
    sourceUrl: SRC_URL,
    crModifier: 1,
    levelAdjustment: 1,
    prerequisites: [
      {
        note: "\"Arcane-blood\" is an acquired template that can be added to any corporeal animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, or outsider, so long as the base creature is alive. An arcane-blood creature uses all the base creature's statistics and abilities except as noted in the template.",
      },
    ],
    patches: [
      { op: "set-type", value: "Magical Beast", note: "Only if the base creature is an animal: its type changes to magical beast. A humanoid instead becomes a monstrous humanoid; all other types are unchanged. Do not recalculate Hit Dice, base attack bonus, or saves for the type change. Size is unchanged." },
    ],
    features: [
      {
        key: "arcane-blood-magic-blood",
        name: "Magic Blood (Ex)",
        description:
          "The mutagenic pollution that altered the creature fills its veins, and its blood — keyed to a single energy type chosen when the template is gained (acid, cold, electricity, or fire; the choice cannot later be changed) — is volatile and dangerous when exposed to air. Whenever a creature strikes the arcane-blood creature with a slashing or piercing melee weapon, the attacker must succeed on a Reflex save (DC 10 + 1/2 the arcane-blood creature's Hit Dice + its Constitution modifier) or take energy damage of the chosen type based on the arcane-blood creature's size: Diminutive 1d2, Small 1d4, Large 1d8, Gargantuan 2d8 (intermediate sizes scale between these values as printed in the article's table). Creatures attacking with reach weapons are not subject to this damage, and a creature fighting with natural weapons is subject to it as if it had struck with a melee weapon. The arcane-blood creature itself takes 1d6 points of damage of the chosen energy type every time it is struck with a slashing or piercing weapon. Evolved: an arcane-blood creature with the Evolved feat ignores the damage its own magic blood deals to it.",
        category: "special-quality",
        source: SRC_POLLUTION,
        sourceUrl: SRC_URL,
      },
    ],
  },
  {
    id: "poisonous",
    name: "Poisonous",
    ruleset: "core",
    timing: "acquired",
    summary:
      "Acquired mutation template for any corporeal living creature: it grows long toxin-dripping fangs and gains a poisonous bite (choosing one of three printed poisons — necrotic, pustulant, or weakening), is immune to its own toxin, and gains +2 Constitution. The fangs interfere with precise speech, imposing a 20% failure chance on spells with verbal components and on command-word item activation. Challenge rating is the same as the base creature; level adjustment is the base creature's +3. A creature with the Evolved feat ignores the fang drawbacks.",
    source: SRC_POLLUTION,
    sourceUrl: SRC_URL,
    crModifier: 0,
    levelAdjustment: 3,
    prerequisites: [
      {
        note: "\"Poisonous\" is an acquired template that can be added to any corporeal living creature. A poisonous creature uses all the base creature's statistics and abilities except as noted in the template.",
      },
    ],
    abilityModifiers: { con: 2 },
    patches: [],
    features: [
      {
        key: "poisonous-bite",
        name: "Poisonous Bite (Ex)",
        description:
          "A poisonous creature retains all the attacks of the base creature and also gains a poisonous bite attack if it didn't already have one; if the base creature has a bite attack, it uses either its own bite damage or the template's, whichever is better. A poisonous creature that can use weapons retains that ability. Its bite carries a toxin left over from the mutagenic magical pollution that originally altered it: injury poison, Fortitude save DC 10 + 1/2 the poisonous creature's Hit Dice + its Constitution modifier. When the template is gained, choose one poison type: NECROTIC — initial damage 1d4 Con, secondary damage 1d2 Con. PUSTULANT — initial damage 1d2 Cha, secondary damage 1d6 Cha. WEAKENING — initial damage 1d2 Str, secondary damage 1d6 Str. A poisonous creature is immune to its own toxin, but not to the toxin of any other poisonous creature.",
        category: "special-attack",
        source: SRC_POLLUTION,
        sourceUrl: SRC_URL,
      },
      {
        key: "poisonous-fangs",
        name: "Long Fangs (Ex)",
        description:
          "The poisonous creature's unusually long fangs interfere with precise enunciation, imposing a 20% chance of spell failure when casting spells with verbal components and a 20% chance of failing to activate a magic item that requires a command word. Evolved: a poisonous creature with the Evolved feat ignores both of these drawbacks.",
        category: "special-quality",
        source: SRC_POLLUTION,
        sourceUrl: SRC_URL,
      },
    ],
  },
  {
    id: "stonebone",
    name: "Stonebone",
    ruleset: "core",
    timing: "acquired",
    summary:
      "Acquired mutation template for any corporeal living creature: its bones thicken into heavy, spur-covered stone, granting +4 Strength, -4 Dexterity, +4 Constitution, and the powerful build special quality, at the cost of reduced speed and a -4 penalty on Climb and Swim checks. Challenge rating is the base creature's +2 (Huge or smaller) or +1 (Gargantuan or larger); level adjustment is the base creature's +2. A creature with the Evolved feat ignores one chosen drawback group.",
    source: SRC_POLLUTION,
    sourceUrl: SRC_URL,
    crModifier: 2,
    levelAdjustment: 2,
    prerequisites: [
      {
        note: "\"Stonebone\" is an acquired template that can be added to any corporeal living creature. A stonebone creature uses all the base creature's statistics and abilities except as noted in the template. (Printed challenge rating: Huge or smaller, same as the base creature +2; Gargantuan or larger, same as the base creature +1 — crModifier records the +2 case.)",
      },
    ],
    abilityModifiers: { str: 4, dex: -4, con: 4 },
    patches: [],
    features: [
      {
        key: "stonebone-speed",
        name: "Reduced Speed",
        description:
          "A stonebone creature's land speed decreases by 10 feet (to a minimum of 10 feet) and its swim speed, if any, decreases by 20 feet (to a minimum of 10 feet). The speeds for other movement modes are unchanged.",
        category: "special-quality",
        source: SRC_POLLUTION,
        sourceUrl: SRC_URL,
      },
      {
        key: "stonebone-powerful-build",
        name: "Powerful Build (Ex)",
        description:
          "The stonebone creature's thick, heavy bones let it function in many ways as if it were one size category larger. Whenever it is subject to a size modifier or special size modifier for an opposed check (such as during grapple checks, bull rush attempts, and trip attempts), it is treated as one size larger if doing so is advantageous to it. It is also considered one size larger when determining whether a creature's special attacks based on size (such as improved grab or swallow whole) can affect it, and it can use weapons designed for a creature one size larger without penalty. Its space and reach, however, remain those of a creature of its actual size. The benefits of this special quality stack with the effects of powers, abilities, and spells that change the subject's size category. A Colossal creature gains no benefit from this special quality. A stonebone creature also takes a -4 penalty on Climb and Swim checks due to its heavy bone structure. Evolved: a stonebone creature with the Evolved feat may choose one drawback group to ignore — the speed decrease (including swim) together with the -4 on Climb and Swim checks, or the -4 to Dexterity.",
        category: "special-quality",
        source: SRC_POLLUTION,
        sourceUrl: SRC_URL,
      },
    ],
  },
  {
    id: "corrupted-350",
    name: "Corrupted",
    ruleset: "core",
    timing: "acquired",
    summary:
      "Acquired or inherited template (Dragon #350 printing — NOT the Book of Vile Darkness template of the same name) for any living corporeal creature warped by magical corruption: natural armor improves by +4, it gains two claw attacks and a bite, its bite carries a corruptive essence that infects wounds with a rotting disease, and it gains darkvision 60 feet, fast healing, immunity to disease and poison, and acid resistance 10, at the cost of ground speed and flight maneuverability. Strength +4, Dexterity -2, Constitution -2; alignment usually evil. Challenge rating is the base creature's +2; level adjustment is the base creature's +5.",
    source: SRC_CORRUPTION,
    sourceUrl: SRC_URL,
    crModifier: 2,
    levelAdjustment: 5,
    prerequisites: [
      {
        note: "\"Corrupted\" is an acquired or inherited template that can be added to any living corporeal creature (referred to hereafter as the base creature). A corrupted creature uses all the base creature's statistics and abilities except as noted in the template. (This is the Dragon Magazine #350 printing, with the sample corrupted treant; it is a distinct record from the Book of Vile Darkness corrupted template.)",
      },
    ],
    abilityModifiers: { str: 4, dex: -2, con: -2 },
    patches: [
      { op: "set-type", value: "Magical Beast", note: "Only if the base creature is an animal: its type changes to magical beast. Size and type are otherwise unchanged. Do not recalculate base attack bonus or saves." },
    ],
    features: [
      {
        key: "corrupted-natural-armor",
        name: "Natural Armor",
        description:
          "The corrupted creature's natural armor bonus improves by +4, and its speed changes with its warping: its land speed decreases by 10 feet (to a minimum of 10 feet), and its flight maneuverability, if any, drops by one grade (to a minimum of clumsy). All other modes of movement are unchanged.",
        category: "special-quality",
        source: SRC_CORRUPTION,
        sourceUrl: SRC_URL,
      },
      {
        key: "corrupted-attacks",
        name: "Claws and Bite",
        description:
          "The corrupted creature gains two claw attacks and a bite attack, and retains the use of weapons. If the base creature lacks these natural weapons, they deal damage by the corrupted creature's size: Fine — bite 1, claws —; Diminutive — bite 1d2, claw 1; Tiny — bite 1d3, claw 1d2; Small — bite 1d4, claw 1d3; Medium — bite 1d6, claw 1d4; Large — bite 1d8, claw 1d6; Huge — bite 2d6, claw 1d8; Gargantuan — bite 3d6, claw 2d6; Colossal — bite 4d6, claw 3d6. Use these values or the base creature's, whichever is greater.",
        category: "special-attack",
        source: SRC_CORRUPTION,
        sourceUrl: SRC_URL,
      },
      {
        key: "corrupted-contamination",
        name: "Contamination (Su)",
        description:
          "The corrupted creature's bite carries a corruptive essence. A creature wounded by the bite must succeed on a Fortitude save (DC 10 + 1/2 the corrupted creature's Hit Dice + its Constitution modifier) or become infected, as the slimy doom disease: incubation period 1 day, damage 1d4 points of Constitution damage, except that a victim who fails a saving throw against the disease's damage takes 1 point of permanent Constitution drain instead. The victim's flesh rots and sprouts growths, and the infection blocks all hit point recovery, natural or magical, for as long as the diseased state persists.",
        category: "special-attack",
        source: SRC_CORRUPTION,
        sourceUrl: SRC_URL,
      },
      {
        key: "corrupted-qualities",
        name: "Corrupted Qualities",
        description:
          "The corrupted creature gains darkvision out to 60 feet, fast healing equal to 1/2 its Hit Dice (maximum 10) so long as it has at least 1 hit point remaining, immunity to disease and poison, and acid resistance 10. Its alignment is usually evil (any). Sample creature printed in the article: the corrupted treant (NE Huge plant, CR 10, 7 HD, fast healing 3, contamination save DC 22).",
        category: "special-quality",
        source: SRC_CORRUPTION,
        sourceUrl: SRC_URL,
      },
    ],
  },
];
