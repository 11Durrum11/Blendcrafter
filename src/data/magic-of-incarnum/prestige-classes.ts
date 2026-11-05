import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Magic of Incarnum (WotC, 2005) — Chapter 6: Prestige
// Classes, printed pp. 115-168, transcribed from the
// pdftotext extraction of Shaun's own copy, 2026-11-05.
// All ten prestige classes in the chapter, with entry
// requirements, progression tables (BAB and saves as
// printed; the meldshaping and spellcasting columns the
// tables also print — essentia pool, soulmelds, binds,
// spells per day — are carried in the relevant feature
// text, since the app's progression-row shape holds only
// BAB and saves), and class features as printed.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const MOI = "Magic of Incarnum";
const MOI_PATH = "/Desktop/DnD-3.5/Supplements/Magic/Magic of Incarnum.pdf";
const CH6 = `${MOI} — Chapter 6: Prestige Classes`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key:
        source.split("— ")[1].toLowerCase().replace(/[^a-z0-9]+/g, "-") +
        "-" +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: MOI_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF10 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

const fic = mk(`${CH6} — Incandescent Champion`);
const fib = mk(`${CH6} — Incarnum Blade`);
const fif = mk(`${CH6} — Ironsoul Forgemaster`);
const fnc = mk(`${CH6} — Necrocarnate`);
const fsh = mk(`${CH6} — Sapphire Hierarch`);
const fsc = mk(`${CH6} — Soulcaster`);
const fsw = mk(`${CH6} — Spinemeld Warrior`);
const ftr = mk(`${CH6} — Totem Rager`);
const fud = mk(`${CH6} — Umbral Disciple`);
const fwb = mk(`${CH6} — Witchborn Binder`);

export const MAGIC_OF_INCARNUM_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "incandescent-champion",
    name: "Incandescent Champion",
    ruleset: "core",
    source: `${CH6} — Incandescent Champion (pp. 115-117)`,
    sourceUrl: MOI_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Heal", "Intimidate", "Knowledge (arcana)",
      "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Ride",
    ],
    prerequisites: [
      "Alignment: Any good",
      "Base attack bonus +6",
      "Skills: Concentration 4 ranks",
      "Essentia pool: 1",
    ],
    features: [
      fic("Incandescent Champion Basics", "A good-aligned warrior who wields pure incarnum to protect the innocent, dispensing with the barriers between wielder and the true power of the soul to become a living flame. Key abilities: Charisma (class ability effectiveness) and Strength. Weapon and armor proficiency: no new proficiencies with weapons, armor, or shields. If the candidate's original class has no meldshaping ability, she must select a feat that grants essentia — such as Azure Touch, Azure Turning, or Midnight Dodge — to qualify. Class features can be improved by investing essentia in them, as noted in each ability; essentia capacity for these abilities follows Table 2-1 by character level. Essentia pool by class level (Table 6-1): 1st 1, 2nd 2, 3rd 3, 4th 3, 5th 4, 6th 5, 7th 6, 8th 6, 9th 7, 10th 8.", undefined),
      fic("Incandescent Strike (Su)", "Channel incarnum to increase the damage of your melee attacks: for each augmented attack, gain a bonus on the damage roll equal to the essentia invested in this ability. Whenever you have essentia invested in incandescent strike, your hands glow with bright light equivalent to a light spell.", 1),
      fic("Fast Healing (Su)", "At 2nd level, gain fast healing equal to the essentia invested in this ability, usable for a number of rounds per day equal to your incandescent champion level (activating requires no action; investing essentia is a swift action, as normal). At 9th level, each ally adjacent to you when you activate the ability gains fast healing at the same rate and for the same duration.", 2),
      fic("Unbearable Countenance (Su)", "At 3rd level, with a glance (a move action) render a single foe within 30 feet shaken for 1 round (Will negates; DC 10 + invested essentia + Cha modifier); a mind-affecting fear effect, always active. A foe that successfully saves is immune to your unbearable countenance for 1 hour thereafter.", 3),
      fic("Incarnum Overload (Ex)", "At 4th level, once per day as a free action, temporarily boost the maximum essentia capacity of any one soulmeld, incarnum feat, or special ability that allows essentia investment: for 1 round, the chosen receptacle's essentia capacity increases by your Charisma bonus (minimum +1). Usable twice per day at 7th level and three times per day at 10th level.", 4),
      fic("Incandescent Ray (Su)", "Beginning at 5th level, channel incarnum into a ray of pure soul energy at will (standard action, ranged touch attack, range 60 feet), dealing 1d8 damage per point of essentia invested in this ability.", 5),
      fic("Incandescent Aura (Su)", "At 8th level, at the start of your turn every creature adjacent to you that you designate as a foe takes 1d6 damage per point of essentia invested in this ability (Will save halves; DC 10 + invested essentia + Cha modifier); always active. While essentia is invested in the aura, you shine with bright light equivalent to a daylight spell (caster level equal to your incandescent champion level).", 8),
      fic("Incandescent Transcendence", "At 10th level, forsake your mortal nature: your type changes to outsider with the native and good subtypes, and your natural weapons and any weapons you wield are treated as good-aligned for overcoming damage reduction. Furthermore, once per day as a standard action, transform your body into pure luminous energy for a number of rounds equal to your Charisma modifier (minimum 1): you become incorporeal and gain a fly speed of 60 feet (perfect maneuverability); you cannot attack, cast spells, or activate special abilities in this form, though you can invest essentia as usual and your incandescent aura functions normally. Once activated, the effect cannot be ended prematurely.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "incarnum-blade",
    name: "Incarnum Blade",
    ruleset: "core",
    source: `${CH6} — Incarnum Blade (pp. 121-123)`,
    sourceUrl: MOI_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows([1, 2, 3, 4, 5], [2, 3, 3, 4, 4], [0, 0, 1, 1, 1], [0, 0, 1, 1, 1]),
    classSkills: [
      "Climb", "Concentration", "Craft", "Intimidate", "Jump",
      "Knowledge (arcana)", "Swim",
    ],
    prerequisites: [
      "Alignment: Any except neutral",
      "Base attack bonus +5",
      "Skills: Concentration 2 ranks",
    ],
    features: [
      fib("Incarnum Blade Basics", "A five-level prestige class. A fierce warrior who shapes soul energy drawn from the greatest warriors of the past into a special soulmeld — the blademeld — incorporated into his melee weapon of choice; when he dies, he merges with the soul energy that powers his weapon, joining the legacy future heroes draw upon. Member of the Warriors Eternal mercenary company. Key ability: Constitution (rebind uses). Weapon and armor proficiency: no new proficiencies with weapons, armor, or shields.", undefined),
      fib("Shape Blademeld (Su)", "At 1st level, create a special soulmeld called a blademeld by wrapping incarnum into a melee weapon of your choice (the weapon appears to glow blue). The weapon is treated as a magic weapon for overcoming damage reduction; its hardness improves by 5 and its hit points increase by 5 per incarnum blade level you possess, and it gains a bonus on saving throws equal to your incarnum blade level. Shaping the blademeld requires 8 hours of rest followed by 1 hour of meditation, as any soulmeld; it remains shaped until you unshape it, and unshapes automatically if the weapon is sundered or destroyed (merely losing possession does not unshape it, and the weapon keeps its enhanced hardness, hit points, and save bonuses even when you aren't holding it). The wielder benefits apply to no one else who picks the weapon up.", 1),
      fib("Blademeld Chakra Bind (Su)", "When you shape your blademeld you can bind it to one of your chakras, granting a special ability that lasts while the blademeld is shaped and the weapon is held. The bind doesn't change the blademeld's appearance, the weapon is wielded normally even when bound to a chakra other than your hands, and — unlike a typical chakra bind — it does not close the corresponding body slot, nor does it grant the ability to bind soulmelds or other magic items. Access by level: 1st — least chakras (crown, feet, hands); 2nd — also lesser (arms, brow, shoulders); 3rd — also greater (throat, waist); 4th — heart; 5th — soul. Crown: opponents flanking you gain no +2 attack bonus (other flanking benefits, such as sneak attack, still apply); +4 insight bonus on opposed attack rolls to avoid being disarmed or having the weapon sundered; +4 insight bonus on Sense Motive against feints. Feet: +2 insight bonus on initiative checks; you can make attacks of opportunity with the blademeld weapon even while flat-footed. Hands: +1 insight bonus on damage rolls with the blademeld weapon. Arms: +4 insight bonus on attack rolls to confirm critical threats with the blademeld weapon. Brow: each time you miss with the blademeld weapon because of concealment, reroll the miss chance once (as Blind-Fight; no second reroll if you have Blind-Fight). Shoulders: any time a melee attack would deal you a critical hit, a 25% chance negates the extra damage (no awareness needed, but no benefit while unconscious or helpless; no effect against sneak attacks; doesn't stack with fortification). Throat: at will as a standard action, brandish the weapon and shout — each enemy within 60 feet who can hear you must save or be shaken for 1 round (Will DC 10 + incarnum blade level + Con modifier). Waist: +10 insight bonus on checks to avoid being bull rushed, grappled, tripped, or overrun, and you retain your Dexterity bonus to AC while flat-footed. Heart: bonus hit points equal to twice your character level (maximum +40), not lost first like temporary hit points; lost immediately if you change the bind. Soul: when you activate the bind, choose one alignment component (chaos, evil, good, or law) matching one of your own — the weapon gains that alignment for overcoming damage reduction and deals an extra 1d6 damage against creatures with the opposed alignment subtype (stacking with bane and aligned weapon qualities); the choice can't change until a new blademeld is shaped.", 1),
      fib("Rebind Blademeld (Su)", "At 3rd level, change the chakra to which your blademeld is bound as a standard action that does not provoke attacks of opportunity, a number of times per day equal to 1 + your Constitution bonus (minimum 1/day). At 5th level, you can change one or both of your blademeld's two chakra binds simultaneously as a standard action.", 3),
      fib("Dual Chakra Binding", "At 5th level, bind your blademeld to two chakras simultaneously. The second chakra bind must be one gained at a lower incarnum blade level than the first (for example, if the first bind is throat, the second cannot be waist — it must be lesser or least). You gain the special abilities from both binds as though using each independently.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "ironsoul-forgemaster",
    name: "Ironsoul Forgemaster",
    ruleset: "core",
    source: `${CH6} — Ironsoul Forgemaster (pp. 126-128)`,
    sourceUrl: MOI_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Diplomacy", "Knowledge (arcana)",
      "Knowledge (religion)", "Profession", "Sense Motive", "Spellcraft",
    ],
    prerequisites: [
      "Race: Dwarf",
      "Alignment: Any nonevil",
      "Skills: Craft (armorsmithing or weaponsmithing) 8 ranks",
      "Skills: Knowledge (arcana) 2 ranks",
      "Meldshaping: Ability to shape soulmelds",
    ],
    features: [
      fif("Ironsoul Forgemaster Basics", "A dwarven mastersmith who crafts weapons and armor that are physical, magical, and soulmelded all at the same time; member of the Ironsoul Guild (bolzral alurdar in Dwarven), sworn never to reveal the secret lore of the craft to outsiders. Weapon and armor proficiency: no new proficiencies. The class's bonds (shield, armor, weapon) apply to items the forgemaster originally crafted; an item remains 'crafted by you' even if someone else later adds an enhancement bonus or special quality.", undefined),
      fif("Meldshaping", "At each ironsoul forgemaster level after 1st, increase your meldshaper level, the number of soulmelds you can shape, the number of chakra binds you can create, and your essentia pool as if you had gained a level in the meldshaping class you belonged to before taking this class — but you gain no other abilities of that class, such as new tiers of chakra binds. With more than one prior meldshaping class, decide at each level which class to advance for these purposes. (Table 6-3 prints '—' at 1st level and '+1 level of existing meldshaping class' at 2nd through 10th.)", 1),
      fif("Shield Bond (Su)", "At 1st level, create a special bond with any shield you craft: invest essentia in the shield as if it were a soulmeld to gain resistance 5 per point invested against acid, cold, electricity, fire, and sonic damage. You gain this ability only while using the shield for defense (not while carrying it on your back or in a container); if you stop using it you lose the ability until you use it again, though the essentia can be reinvested elsewhere on your next turn as normal.", 1),
      fif("Secrets of the Forge (Ex)", "At 2nd level, gain Craft Magic Arms and Armor as a bonus feat, even if you do not meet the prerequisites. Your effective caster level for crafting magic arms and armor is three times your ironsoul forgemaster level, and these effective levels stack with other applicable caster levels. You must still meet any other prerequisites for the item, such as other feats or specific spells, which might require another character's assistance.", 2),
      fif("Forge Lore (Ex)", "At 3rd level, soul-to-soul communion with your people's ancestral forgemasters grants you an insight bonus equal to your ironsoul forgemaster level on all Craft (armorsmithing) and Craft (weaponsmithing) checks.", 3),
      fif("Chakra Binds", "Gain additional chakras for binding soulmelds or magic items, beyond any you already have: arms at 4th level, waist at 6th level, shoulders at 8th level, and heart at 10th level.", 4),
      fif("Armor Bond (Su)", "At 5th level, create a special bond with any suit of armor you craft: invest essentia in the armor as if it were a soulmeld to gain damage reduction equal to the essentia invested (DR n/—), stacking with damage reduction of the same kind granted by the armor itself (for example, 1 point invested in self-crafted adamantine full plate gives DR 4/—). You gain this ability only while wearing the armor; if you stop wearing it or it is destroyed, you lose the ability until you put it on again, though the essentia can be reinvested elsewhere as normal.", 5),
      fif("Weapon Bond (Su)", "At 9th level, create a special bond with any weapon you craft: invest essentia in the weapon as if it were a soulmeld to gain an insight bonus on damage rolls equal to twice the essentia invested. If at least 1 point of essentia is invested, the weapon also dazes any living opponent you strike with it for 1 round (Fortitude negates; DC 10 + invested essentia + Con modifier). You gain this ability only while wielding the weapon; if you stop wielding it you lose the ability until you pick it up again, though the essentia can be reinvested elsewhere as normal.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "necrocarnate",
    name: "Necrocarnate",
    ruleset: "core",
    source: `${CH6} — Necrocarnate (pp. 132-133)`,
    sourceUrl: MOI_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(
      [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4],
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4],
      [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    ),
    classSkills: [
      "Bluff", "Concentration", "Craft", "Intimidate", "Knowledge (arcana)",
      "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Alignment: Any evil",
      "Skills: Knowledge (arcana) 5 ranks, Knowledge (religion) 5 ranks, Spellcraft 10 ranks",
      "Feat: Necrocarnum Acolyte",
      "Meldshaping: Ability to shape soulmelds",
      "Meldshaping: Ability to bind soulmelds to the crown, feet, and hands chakras",
    ],
    features: [
      fnc("Necrocarnate Basics", "A thirteen-level prestige class. A black-hearted meldshaper who draws power from the tortured souls of the good, corrupting incarnum into necrocarnum; often a member of the Union of Darkened Souls. Using necrocarnum is an evil act. Weapon and armor proficiency: no new proficiencies. You gain no essentia for attaining higher levels in this class (Table 6-4 prints no essentia column); your power comes from harvesting souls instead. You gain special benefits when using soulmelds with the necrocarnum descriptor (necrocarnum melds).", undefined),
      fnc("Harvest Soul (Su)", "Beginning at 1st level, perform a short ritual to capture the soul energy of a newly dead corpse: 1 minute of uninterrupted concentration over the corpse of a living creature dead no longer than 1 hour per necrocarnate level. At the end of the ritual you gain essentia points equal to one-half your necrocarnate level (rounded up), lasting 24 hours. No corpse can be used for this purpose more than once. At 10th level, you can perform the ritual as a full-round action that provokes attacks of opportunity.", 1),
      fnc("Improved Meldshaper Level", "Each necrocarnate level also increases your meldshaper level as if you had gained a level in your prior meldshaping class — but you gain no other abilities of that class, such as additional melds, extra chakra binds, increased essentia, or new tiers of chakra binds.", 1),
      fnc("Necrocarnum Soulshield (Su)", "Beginning at 2nd level, tap the tortured souls forming your necrocarnum soulmelds to gain a profane bonus on all saving throws equal to the number of necrocarnum soulmelds you currently have shaped. This ability is usable a number of times per day equal to one-half your necrocarnate level.", 2),
      fnc("Chakra Binds", "Gain additional chakras for binding soulmelds or magic items, beyond any you already have: lesser chakras (arms, brow, shoulders) at 3rd level, greater chakras (throat and waist) at 8th level, heart at 11th level, and soul at 13th level.", 3),
      fnc("Extra Chakra Bind", "At 4th level, gain one additional chakra bind. Gain one more extra chakra bind at 8th level and again at 12th level.", 4),
      fnc("Extra Soulmelds", "At 4th level, the number of soulmelds you can have shaped at once increases by one. Gain this benefit again at 7th, 10th, and 13th level.", 4),
      fnc("Essentia Trap (Su)", "Starting at 5th level, capture soul energy from a creature that has just died: you must be within 100 feet of the creature, have line of sight to it, and take an immediate action no more than 1 round after its death. Gain essentia points equal to one-half the creature's character level, which you can invest as part of the same action. Usable once per round; the extra essentia lasts until the end of your next turn.", 5),
      fnc("Necrocarnum Zombie Master (Ex)", "Beginning at 6th level, you take only half the normal damage (1/2 the zombie's HD, minimum 1) when using the necrocarnum circlet crown chakra bind to create a necrocarnum zombie. At 13th level, you can have up to two necrocarnum zombies animated simultaneously, each zombie's maximum HD equals your necrocarnate level, and each zombie's essentia pool increases by the points of essentia invested in your necrocarnum circlet.", 6),
      fnc("Expanded Necrocarnum Meld Capacity (Ex)", "At 9th level, the essentia capacity of each necrocarnum meld you shape increases by 1, stacking with the increase provided by the incarnate's expanded soulmeld capacity.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "sapphire-hierarch",
    name: "Sapphire Hierarch",
    ruleset: "core",
    source: `${CH6} — Sapphire Hierarch (pp. 136-138)`,
    sourceUrl: MOI_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Diplomacy", "Knowledge (arcana)",
      "Knowledge (religion)", "Knowledge (the planes)", "Profession",
      "Sense Motive", "Spellcraft",
    ],
    prerequisites: [
      "Alignment: Lawful",
      "Meldshaping: Ability to shape three soulmelds",
      "Spellcasting: Ability to cast 2nd-level divine spells",
      "Skills: Knowledge (arcana) 4 ranks, Knowledge (religion) 4 ranks",
      "Essentia pool: 3",
      "Special: Access to the Law domain",
    ],
    features: [
      fsh("Sapphire Hierarch Basics", "A stalwart servant of law devoted to the Sapphire Eidolon — an ancient 30-foot sphere of crystallized incarnum in the Sulhaut Mountains — who combines a full divine spellcasting progression with a full meldshaping progression to battle chaos wherever it reigns. Key abilities: Wisdom, Constitution, Charisma (turning undead). Weapon and armor proficiency: no new proficiencies.", undefined),
      fsh("Meldshaping", "At each sapphire hierarch level, increase your meldshaper level, the number of soulmelds you can shape, the number of chakra binds you can create, and your essentia pool as if you had gained a level in a prior meldshaping class — but you gain no other abilities of that class, such as new tiers of chakra binds. With more than one prior meldshaping class, decide at each level which class to advance for these purposes.", 1),
      fsh("Spellcasting", "At each sapphire hierarch level, gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had gained a level in a prior divine spellcasting class — but no other benefits of that class (such as improved turning or bonus feats). With more than one prior divine spellcasting class, decide at each level which class to advance for spells per day, caster level, and spells known.", 1),
      fsh("Consultation", "Beginning at 1st level, consult with the Sapphire Eidolon for advice on almost any subject: the consultation functions like a commune spell, usable as a spell-like ability only while in the presence of the Sapphire Eidolon (you need not be able to cast the spell), though you must pay the spell's XP cost as normal. You can consult only three times at each sapphire hierarch level from 1st to 9th, and unused consultations for a given level are lost when you attain a new one. Upon reaching 10th level, you can consult the Sapphire Eidolon once per month for the rest of your career.", 1),
      fsh("Smite Chaos (Su)", "Beginning at 1st level, smite chaos once per day — identical to the paladin's smite evil, except the bonuses apply against chaotic creatures rather than evil ones. One additional use per day at 4th level and every three levels thereafter (2/day at 4th, 3/day at 7th, 4/day at 10th). Smite chaos attempts per day from multiple sources stack.", 1),
      fsh("Favored of the Eidolon (Ex)", "By 2nd level, you gain a +4 sacred bonus on saving throws against chaotic and transmutation effects.", 2),
      fsh("Damage Reduction (Ex)", "At 3rd level, your body begins to toughen, granting damage reduction 1/adamantine, improving to 2/adamantine at 6th level and 3/adamantine at 9th level.", 3),
      fsh("Sapphire Body (Ex)", "At 5th level, any critical hit or sneak attack scored against you has a 25% chance to be negated so that damage is rolled normally. At 10th level, this chance increases to 50%.", 5),
      fsh("Timeless Body (Ex)", "Beginning at 8th level, you no longer age (as the druid class feature of the same name).", 8),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "soulcaster",
    name: "Soulcaster",
    ruleset: "core",
    source: `${CH6} — Soulcaster (pp. 142-144)`,
    sourceUrl: MOI_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Knowledge (arcana)", "Knowledge (religion)",
      "Knowledge (the planes)", "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Skills: Knowledge (arcana) 8 ranks",
      "Feat: Incarnum Spellshaping",
      "Spellcasting: Ability to cast 2nd-level arcane spells",
      "Meldshaping: Ability to shape three soulmelds; ability to bind a soulmeld to a chakra",
    ],
    features: [
      fsc("Soulcaster Basics", "An arcane spellcaster who incorporates soul energy into his magic, from the arcane experiments of the wizards of the Last Watch. Both spellcasting and meldshaping progress at every level. Key abilities: Intelligence, Constitution (soulmelds shaped), Wisdom (soulmeld save DCs). Weapon and armor proficiency: no new proficiencies.", undefined),
      fsc("Meldshaping", "At each soulcaster level, increase your meldshaper level, the number of soulmelds you can shape, the number of chakra binds you can create, and your essentia pool as if you had gained a level in a prior meldshaping class — but you gain no other abilities of that class, such as new tiers of chakra binds. With more than one prior meldshaping class, decide at each level which class to advance for these purposes.", 1),
      fsc("Spellcasting", "At each soulcaster level, gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had gained a level in a prior arcane spellcasting class — but no other benefits of that class. With more than one prior arcane spellcasting class, decide at each level which class to advance for spells per day, caster level, and spells known.", 1),
      fsc("Arcane Investment (Su)", "Beginning at 1st level, when you shape your soulmelds you can invest 1 point of essentia in any single spell you know (and have prepared, if you prepare spells). At any time in the next 24 hours, when you cast that spell you can use the invested essentia (no action required): the spell's caster level and save DC each increase by 1, and the essentia then returns to your pool. You can affect a number of spells equal to your soulcaster level, and you can't invest essentia in the same spell more than once (even if you can cast it multiple times). This is separate from investing essentia in a spell as part of its casting — both can apply to the same casting. At 7th level, you can invest up to 2 points per spell, boosting caster level and save DC by 2 each for a single casting.", 1),
      fsc("Chakra Binds", "Gain additional chakras for binding soulmelds or magic items, beyond any you already have: least chakras (crown, feet, hands) at 3rd level, and lesser chakras (arms, brow, shoulders) at 8th level.", 3),
      fsc("Magical Distillation (Su)", "At 10th level, sacrifice one arcane spell slot (or one prepared arcane spell, if you prepare spells) of the highest level you can currently cast to gain points of essentia equal to that spell's level for 1 round; the essentia can be invested or used as normal but disappears at the start of your next turn. Usable once per round as a free action.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "spinemeld-warrior",
    name: "Spinemeld Warrior",
    ruleset: "core",
    source: `${CH6} — Spinemeld Warrior (pp. 147-148)`,
    sourceUrl: MOI_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL10, GOOD10, POOR10, POOR10),
    classSkills: [
      "Climb", "Craft", "Diplomacy", "Handle Animal", "Intimidate", "Jump",
      "Knowledge (nobility and royalty)", "Profession", "Ride", "Swim",
    ],
    prerequisites: [
      "Race: Skarn",
      "Alignment: Any lawful",
      "Base attack bonus +5",
      "Essentia pool: 1",
    ],
    features: [
      fsw("Spinemeld Warrior Basics", "A noble fighting skarn of the Hierarchy of Spinemeld Warriors, who fights in public ritual combat with the spines along his forearms, pursuing the mishtai quest for perfection of form. Ranks in the order by level (Table 6-7): 1st Green spine, 2nd Red spine, 3rd Flaw seeker, 4th Spine of rain, 5th Spine of snow, 6th Spine of mist, 7th Spine fighter, 8th Perfect of the south wind, 9th Perfect of the north wind, 10th August perfect of roses. Weapon and armor proficiency: no new proficiencies. Meldshaping is not required for entry — a feat granting an essentia pool suffices.", undefined),
      fsw("Meldshaping", "You can shape a small number of soulmelds, selected from the soulborn class list: one soulmeld per day beginning at 3rd level, and up to two per day at 7th level. The maximum number shaped simultaneously equals your Constitution score minus 10. Your meldshaper level for these soulmelds equals your spinemeld warrior level, and the save DC (if applicable) is 10 + invested essentia + your Con modifier; otherwise this follows the normal meldshaping rules. Table 6-7 columns — soulmelds shaped / essentia pool / chakra binds by level: 1st 0/0/0; 2nd 0/1/0; 3rd 1/2/0; 4th 1/3/0; 5th 1/3/0; 6th 1/4/0; 7th 2/5/1; 8th 2/6/1; 9th 2/6/1; 10th 2/7/1.", 3),
      fsw("Twin Spine Fighting (Ex)", "At 1st level, attack with the spines on both of your arms as if fighting with two light weapons. You cannot combine this ability with attacks using any other weapons.", 1),
      fsw("Two-Weapon Fighting", "Gain Two-Weapon Fighting as a bonus feat at 1st level, even if you do not meet the prerequisites. If you already have Two-Weapon Fighting, you can instead select any feat for which you qualify for which Two-Weapon Fighting is a prerequisite (such as Improved Two-Weapon Fighting or Two-Weapon Defense).", 1),
      fsw("Noble Familiarity", "Because the oldest noble houses support the Hierarchy, you have a passing familiarity with the aristocracy: beginning at 2nd level, gain a competence bonus equal to one-half your spinemeld warrior level on Knowledge (nobility and royalty) checks. In addition, your contacts among the nobility can put you in touch with someone selling almost any piece of equipment or magic item you seek: a Gather Information check (DC 15 + caster level for the item) learns the name of a seller, and you gain a competence bonus equal to your spinemeld warrior level on this check.", 2),
      fsw("Spine Enhancement (Su)", "Beginning at 2nd level, as a swift action invest essentia in your spines as if they were a soulmeld, granting an enhancement bonus equal to the essentia invested on attack rolls and damage rolls with your spines. Unlike your soulmelds or other incarnum-fueled abilities, your spines have a special essentia capacity (and thus a maximum enhancement bonus) equal to one-half your spinemeld warrior level.", 2),
      fsw("Spine Rend (Ex)", "Beginning at 5th level, whenever you hit a single opponent with a spine attack from each arm in the same round, you tear the opponent's flesh and deal an additional 2d6 damage plus one and one-half times your Strength bonus.", 5),
      fsw("Chakra Bind (Arms)", "Starting at 7th level, you can bind one of your shaped soulmelds to your arms chakra.", 7),
      fsw("Adamantine Spines (Ex)", "By 9th level, the constant flow of incarnum through your spines has rendered them incredibly tough: when used as weapons, they overcome damage reduction and hardness as if crafted from adamantine.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "totem-rager",
    name: "Totem Rager",
    ruleset: "core",
    source: `${CH6} — Totem Rager (pp. 153-154)`,
    sourceUrl: MOI_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ10, GOOD10, GOOD10, POOR10),
    classSkills: [
      "Climb", "Concentration", "Craft", "Handle Animal", "Intimidate", "Jump",
      "Knowledge (arcana)", "Knowledge (nature)", "Listen", "Profession",
      "Ride", "Spot", "Survival", "Swim",
    ],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Intimidate 5 ranks, Survival 9 ranks",
      "Feat: Cobalt Rage",
      "Special: Ability to bind soulmelds to the totem chakra",
      "Special: Rage class feature",
    ],
    features: [
      ftr("Totem Rager Basics", "A savage warrior who channels the spirits of magical beasts — rage and soulmelds feeding on each other: rage improves her totemist soulmelds with extra essentia, and essentia invested in rage extends and empowers it. Best path is barbarian plus totemist. Key abilities: Strength, Constitution (hit points and meldshaping), Charisma (wild empathy). Weapon and armor proficiency: no new proficiencies.", undefined),
      ftr("Meldshaping", "At each totem rager level except 1st and 6th, increase your meldshaper level, the number of soulmelds you can shape, the number of chakra binds you can create, and your essentia pool as if you had gained a level in a prior meldshaping class — but you gain no other abilities of that class, such as new tiers of chakra binds. With more than one prior meldshaping class, decide at each level which class to advance for these purposes.", 1),
      ftr("Totem Rage (Su)", "Enhance your rage by tapping the furious spirits of the beasts within you: the essentia capacity of your Cobalt Rage feat increases by 1. Furthermore, as long as a soulmeld occupies your totem chakra, you gain extra essentia points equal to one-half your totem rager level (minimum 1) while you rage. When you begin your rage you can invest some or all of this extra essentia into your Cobalt Rage feat as a free action (an exception to the rule that essentia can be invested in an incarnum feat only once every 24 hours), but you cannot shift essentia away from Cobalt Rage while raging; the remaining extra essentia can be invested elsewhere as normal. When your rage ends, the extra essentia is lost and all your essentia investments return to what they were initially.", 1),
      ftr("Wild Empathy (Ex)", "Beginning at 1st level, improve the attitude of an animal (as the druid class feature). Your totem rager level stacks with levels of any other classes granting wild empathy for determining the bonus.", 1),
      ftr("Extra Rage", "At 2nd level and again at 8th level, gain one extra use per day of your rage ability.", 2),
      ftr("Damage Reduction (Ex)", "Beginning at 3rd level, gain damage reduction 1/— (as the barbarian class feature); at 7th level it increases to 2/—. This damage reduction stacks with damage reduction against damage of all types from other sources (for example, barbarian DR), but not with damage reduction specific to one damage type.", 3),
      ftr("Chakra Binds", "Gain additional chakras for binding soulmelds or magic items, beyond any you already have: crown, feet, and hands at 4th level; arms, brow, and shoulders at 9th level.", 4),
      ftr("Extended Rage (Ex)", "Beginning at 5th level, the duration of your rage increases by a number of rounds equal to the points of essentia you invest in your Cobalt Rage feat. This benefit does not stack with the Extend Rage feat.", 5),
      ftr("Totem Chakra Bind", "At 10th level, the essentia capacity of any soulmeld bound to your totem chakra increases by an additional point, adding to the expanded capacity from your totemist levels for a total of +2.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "umbral-disciple",
    name: "Umbral Disciple",
    ruleset: "core",
    source: `${CH6} — Umbral Disciple (pp. 158-159)`,
    sourceUrl: MOI_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ10, POOR10, GOOD10, GOOD10),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Hide", "Jump",
      "Knowledge (arcana)", "Listen", "Move Silently", "Profession",
      "Sense Motive", "Spot", "Tumble",
    ],
    prerequisites: [
      "Skills: Concentration 4 ranks, Hide 8 ranks, Knowledge (arcana) 2 ranks, Listen 8 ranks",
      "Essentia pool: 1",
    ],
    features: [
      fud("Umbral Disciple Basics", "A stealthy student of shadow who infuses shadows with essentia to harness the darkness of the world and of his own soul — spy, burglar, or assassin, trained by an elite order known as a sept (such as the Shadow Lion Sept). Candidates typically qualify through a racial essentia trait (azurins and dusklings meet the requirement automatically), an incarnum feat such as Indigo Strike or Sapphire Smite, or a level in a meldshaping class. Key abilities: Dexterity and Constitution. Weapon and armor proficiency: no new proficiencies. Multiclass note: monks who take levels in umbral disciple can continue to advance as monks. Class features can be improved by investing essentia in them; your essentia capacity for these features follows Table 2-1 by character level. Essentia pool by class level (Table 6-9): 1st 1, 2nd 1, 3rd 2, 4th 2, 5th 3, 6th 3, 7th 4, 8th 5, 9th 6, 10th 7 — investable in class features, incarnum feats, and soulmelds as normal.", undefined),
      fud("Sept Knowledge", "If you belong to a sept, draw on its collected knowledge: a +2 bonus on any Knowledge or Gather Information checks made within 24 hours of speaking to another member of the same sept, or a +5 bonus if you visit the sept's citadel or stronghold.", 1),
      fud("Step of the Bodiless (Su)", "Beginning at 1st level, gain a +2 enhancement bonus on Balance, Climb, Jump, and Tumble checks for every point of essentia invested in this class feature, as the souls that grant you power lighten your step and bear you up.", 1),
      fud("Sneak Attack (Ex)", "Beginning at 2nd level, deal extra damage when flanking an opponent or whenever the target would be denied its Dexterity bonus (as the rogue class feature; ranged attacks qualify only within 30 feet): +1d6 at 2nd level, +2d6 at 5th level, +3d6 at 8th level.", 2),
      fud("Embrace of Shadow (Su)", "Starting at 3rd level, weave incarnum into an obscuring shadow that clings to you: while cloaked in shadow, each attack made against you has a 10% miss chance per point of essentia invested in this ability (this miss chance does not stack with miss chances from any other ability or effect). If the miss chance granted is 20% or higher, you can also hide in plain sight — use the Hide skill even while being observed (as the ranger class feature). Usable at will.", 3),
      fud("Sight of the Eyeless (Su)", "At 7th level, investing essentia in this ability grants you blindsight with a range of 10 feet per point invested. Usable at will.", 7),
      fud("Soulchilling Strike (Su)", "At 9th level, imbue your melee attacks with a soulchilling essence: for every point of essentia invested, your attack deals 1 point of Strength damage to the target (Fortitude negates; DC 10 + invested essentia + your Con modifier) in addition to its normal damage. Only one attack per round conveys this effect — in a full attack, the first successful attack delivers it. It applies to all melee attacks, natural or manufactured, while essentia is invested.", 9),
      fud("Kiss of the Shadows (Su)", "At 10th level, tangible incarnum-laced shadows mirror your attacks at range: your reach increases by 5 feet for every point of essentia invested in this class feature, but only on your turn. While this ability is active you are treated as if standing in the square adjacent to the target that is closest to your actual location for the purpose of flanking, attacking from higher ground, or similar situations. At the end of your turn, your reach (and the area you threaten) returns to normal.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "witchborn-binder",
    name: "Witchborn Binder",
    ruleset: "core",
    source: `${CH6} — Witchborn Binder (pp. 162-164)`,
    sourceUrl: MOI_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Escape Artist", "Knowledge (arcana)",
      "Knowledge (religion)", "Listen", "Profession", "Ride", "Search",
      "Sense Motive", "Spellcraft", "Spot", "Survival", "Use Rope",
    ],
    prerequisites: [
      "Meldshaping: Meldshaper level 6th",
      "Feats: Alertness, Track",
      "Skills: Knowledge (religion) 4 ranks, Search 4 ranks, Sense Motive 2 ranks, Survival 2 ranks, Use Rope 2 ranks",
      "Special: May not possess any arcane spellcasting class levels",
    ],
    features: [
      fwb("Witchborn Binder Basics", "A royal agent of the Vigilant Servants — an incarnum-wielding mage-hunter who creates shields, traps, and shackles of soul energy to smother the powers of arcane spellcasters ('the witchborn') and capture evil spellcasters who threaten the realm. The most direct path is six levels of incarnate or totemist plus the required feats and skills. Key abilities: Constitution (soulmelds and resistance to spells), Dexterity, Wisdom, Strength. Weapon and armor proficiency: no new proficiencies. Class features can be improved by investing essentia in them; essentia capacity for these features follows Table 2-1 by character level.", undefined),
      fwb("Meldshaping", "At each witchborn binder level indicated on Table 6-10 (1st, 3rd, 5th, 7th, 9th, and 10th), increase your meldshaper level, the number of soulmelds you can shape, the number of chakra binds you can create, and your essentia pool as if you had gained a level in a prior meldshaping class — but you gain no other abilities of that class, such as new tiers of chakra binds. With more than one prior meldshaping class, decide at each such level which class to advance for these purposes.", 1),
      fwb("Detect Magic (Sp)", "Beginning at 1st level, use detect magic at will.", 1),
      fwb("Meldshield", "Beginning at 1st level, use your essentia to protect yourself against magical attacks: gain an insight bonus equal to the essentia invested in this ability on all saving throws against spells and spell-like abilities.", 1),
      fwb("Royal Purse", "To finance your missions, draw a sum of money equal to your witchborn binder level times 500 gp from the royal treasury — from any place royal money is held (a government vault, a garrison's paychest) — or issue IOUs in the monarch's name; larger sums can be drawn or promised, but you must explain the liberty and may owe restitution. Usable only once at each witchborn binder level from 1st to 9th (unused draws are lost when you attain a new level); upon reaching 10th level, usable once per year for the rest of your career.", 1),
      fwb("Dispelling Orb (Su)", "At 2nd level, shape a small orb of incarnum and hurl it at any target within 30 feet as a standard action: on a successful ranged touch attack, the orb functions as a targeted dispel magic (caster level equals your meldshaper level), and you gain a +1 insight bonus on any dispel checks made with it per point of essentia invested in the orb. After the attack is resolved, the invested essentia returns to your essentia pool.", 2),
      fwb("Essentia", "At 2nd level and again at 6th level, gain 1 extra point of essentia.", 2),
      fwb("Mage Shackles (Su)", "Beginning at 4th level, as a standard action shape a set of shackles from incarnum and, with a successful melee touch attack, bind a creature capable of arcane spellcasting or using spell-like abilities that is within one size category of you (you must overcome any spell resistance with a caster level check using your meldshaper level, or the attack fails). The bound creature is entangled and barred from planar movement as if by dimensional anchor, and must succeed on a caster level check (DC 10 + your meldshaper level + essentia invested in the shackles) to cast an arcane spell or use any spell-like ability. The shackles cannot be damaged or broken except by an effect that unshapes a soulmeld, but a bound creature can escape as if from masterwork manacles (Escape Artist DC 35). A creature incapable of casting arcane spells or using spell-like abilities is unaffected. You can use this ability at will, but you can have only one set shaped at a time (shaping a second set makes the first disappear); after 24 hours the shackles automatically unshape unless you remain within 1 mile of the shackled creature; otherwise they remain until you unshape them (a free action). No one but you can use your mage shackles.", 4),
      fwb("Word of Abrogation (Sp)", "Beginning at 6th level, counterspell with your command of incarnum: ready an action; if any creature within 60 feet of you casts a spell or uses a spell-like ability, negate the effect as an immediate action with a caster level check (DC 11 + the enemy creature's caster level), using your meldshaper level as your caster level, with a +1 bonus per point of essentia invested in this ability. Each use abrogates only one spell or spell-like effect.", 6),
      fwb("Spiritflay (Su)", "Beginning at 8th level, catch a bit of an arcane spellcaster's soulstuff and mangle it: usable against any arcane spellcaster or creature with spell-like abilities within 60 feet. The target must succeed on a Fortitude save (DC 10 + your witchborn binder level + your Con modifier) or take 1d8 damage per point of essentia invested in the ability and be nauseated for 1 round; a successful save halves the damage and negates the nausea. A creature with no arcane spells prepared, no arcane spell slots unused, and no spell-like abilities available is immune.", 8),
      fwb("Grim Integument (Su)", "At 10th level, shape a coffinlike shroud of incarnum around a foe up to 30 feet away as a full-round action that provokes attacks of opportunity. The foe can attempt a Reflex save (DC 10 + invested essentia + your Con modifier) to escape before it forms; spell resistance must be overcome with a caster level check using your meldshaper level; a successful save renders the target immune to your grim integument for 24 hours. Once formed, the subject is rooted to the spot with its arms bound to its sides; it can still speak and use spell-like abilities, psionics, or spells requiring only verbal components, but each time it attempts to use an arcane spell or spell-like ability it takes 1d6 damage per point of essentia invested (Fortitude save halves; the damage can disrupt the spell normally). The shroud is opaque, providing total cover and total concealment for the creature inside, and provides it an unlimited supply of breathable air. Unlike most incarnum creations it can be physically damaged: the creature inside can burst out with a Strength check (DC 20 + invested essentia), and the shroud has hardness 10 and 20 hit points per point of essentia invested; any effect that unshapes a soulmeld destroys it — if it is destroyed or unshaped by another, the invested essentia is lost for 24 hours and you become fatigued. It persists while you remain within 30 feet of the subject; you can voluntarily unshape it as a full-round action, suffering no essentia loss or fatigue. Usable a number of times per day equal to 1 + your Constitution modifier (minimum once per day).", 10),
    ].map((x) => x as FeatureDefinition),
  },
];
