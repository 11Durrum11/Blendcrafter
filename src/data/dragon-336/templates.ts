// Dragon Magazine #336 (October 2005) — template draft: 6 records.
// "Not for the Living: Six Haunted Templates" (James Jacobs), pp. 22-32 —
// the issue's headline yield. These six "templates" are HAUNTINGS: they
// are applied to LOCATIONS, not creatures (the article says so itself:
// hauntings "are not themselves creatures. They are more accurately
// categorized as complex hazards or traps"). They stage in the templates
// barrel as the catalog's only fitting record shape, in the completed-
// TemplateDefinition form of the issue-326 half-elemental precedent:
// crModifier and levelAdjustment are 0 because a haunting has neither —
// its power is measured by MAGNITUDE (typically 1-20, independent of
// type), which sets its caster level (= magnitude, also its effective
// Hit Dice), its save DCs (10 + magnitude), its attack bonus
// (= magnitude), and its saving throw modifiers (= magnitude). A
// haunting's initiative check is a straight 1d20 roll and it may take
// one action per round unless its entry says otherwise. `patches` is
// empty on every record: no creature patch applies to a place.
// FRAMEWORK RULES (apply to all six; carried in full on the Bad Place
// record's "Haunting Framework" feature): a cleric can suppress most
// hauntings with a turn undead check, treating the haunting as a single
// undead creature with Hit Dice equal to its magnitude — on a success
// the haunting is inert for 1 minute; on a roll good enough to destroy
// it, inert for a day. Turning can never completely exorcise a haunting.
// A cleric who channels negative energy can suppress a haunting the
// same way, and on a roll good enough to command it may instead render
// it harmless to himself and anyone he designates while leaving it in
// effect against his enemies. Many hauntings can be exorcised by a
// dispel evil spell, in which case the caster must succeed at a caster
// level check opposed by the haunting's magnitude (each entry gives its
// own exorcism rule, which governs where it differs).
// Every Reach figure, magnitude threshold, DC, and duration below was
// verified against rendered page images (magazine pp. 23-32); the image
// governs over the OCR stream.
// ⚠️ APOC FLAGS — see SCREENING.md: the Planar Canker is a breach
// between planes under a sealed crystal sphere, and the Primeval Scar's
// vanishing is a teleportation effect that strands creatures elsewhere /
// elsewhen; both stage as printed under the task brief's explicit
// all-six-templates order, flagged for Shaun. The hauntings' undead
// effects stage as printed — Shaun's APOC undead house rules (maximized
// HP, +4 turn resistance, re-roll each round) apply ON TOP at play and
// are NOT baked into these records.
// Feature descriptions are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { TemplateDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #336 — Not for the Living: Six Haunted Templates (James Jacobs), pp. 22-32";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const PREREQ_NOTE =
  "Location template (haunting), not a creature template: applied to a place, structure, or set of objects, never to a creature. The haunting's power is its magnitude (typically 1-20), which sets its caster level and effective Hit Dice, its save DCs (10 + magnitude), its attack bonus, and its saving throw modifiers. It has no Challenge Rating or level adjustment of its own; associated creatures whose CR changes inside its reach say so in their entries.";

const FRAMEWORK =
  "Haunting framework (all six hauntings): magnitude typically 1-20 (above 20 extraordinarily rare) and independent of type — a magnitude 1 planar canker is as legitimate as a magnitude 20 entity. Caster level and effective Hit Dice equal magnitude; save DCs for a haunting's magical attacks are 10 + magnitude; attack rolls use a bonus equal to magnitude (some types add more); the haunting (or any structure within its reach) has saving throw modifiers equal to magnitude. In combat a haunting's initiative is a straight 1d20 roll and it takes one action per round unless noted. A cleric can suppress most hauntings with a turn undead check (treat as one undead creature, HD = magnitude): success renders it inert 1 minute, a destroy-level result 1 day; turning never fully exorcises a haunting. Negative-energy channelers suppress the same way, and on a command-level result may instead leave the haunting in effect but harmless to themselves and anyone they designate. Destroying an associated ghost does not destroy its haunting (the haunting remains and may revive); destroying a haunting leaves its ghost to plague the region without the haunting's support. Where an entry gives an exorcism by dispel evil, the caster must succeed at a caster level check opposed by the haunting's magnitude.";

function T(seed: Partial<TemplateDefinition> & Pick<TemplateDefinition, "id" | "name" | "summary">): TemplateDefinition {
  return {
    ruleset: "core",
    timing: "acquired",
    source: SRC,
    sourceUrl: SRC_URL,
    crModifier: 0,
    levelAdjustment: 0,
    prerequisites: [{ note: PREREQ_NOTE }],
    patches: [],
    ...seed,
  } as TemplateDefinition;
}

export const DRAGON_336_TEMPLATES: TemplateDefinition[] = [
  T({
    id: "haunting-bad-place",
    name: "Bad Place (Haunting)",
    summary:
      "A location haunting born where torment and cruelty have soaked into a place — a massacre site, an ancient graveyard, a prison, asylum, school, temple, orphanage, mansion, or castle where many lives were lost or minds shattered. It lies dormant until intelligent living creatures enter its reach, wakes over 4d6 days, and then drains 1d4 Wisdom per day (Will DC 10 + magnitude) from everyone inside; a creature drained to 0 Wisdom becomes the bad place's chaotic evil murderous pawn. Bad place hauntings have +6 turn resistance. Its incorporeal undead gain fast healing and turn resistance within its reach, and its ghosts may gain the Shape of Terror attack.",
    features: [
      {
        key: "bad-place-framework",
        name: "Haunting Framework",
        description: FRAMEWORK,
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "bad-place-reach-heart",
        name: "Reach and Heart",
        description:
          "Reach: the central structure and its attending grounds; a bad place can be any size, and larger ones tend to have more established and intricate histories. Every bad place has a 'heart' — a central location where the energies of the spirits that power it are focused, usually an underground chamber below the haunted structure, but possibly a secret room, a secluded attic section, or rarely something plainly visible such as a disturbing painting in the foyer or the gallows in a prison's inner courtyard. The heart writhes and coils with wrathful spirits when viewed with true seeing, radiates evil as a magic item with a caster level equal to the haunting's magnitude, and is simple to identify with true seeing or detect evil.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "bad-place-structural",
        name: "Structural Effects",
        description:
          "A bad place can change the appearance of any structure in its reach with a major image spell, up to a number of times per day equal to its magnitude — typically to disorient living creatures, trick them into dangerous areas, or display some past event. A bad place of magnitude at least 7 can target a creature with phantasmal killer once per day; one of magnitude at least 17 can cast weird once per day. Bad place hauntings are harder to affect with turning checks and have +6 turn resistance.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "bad-place-living",
        name: "Living Effects",
        description:
          "The bad place despises intelligent living creatures. When no living creatures are in its reach it goes dormant after 1d10 days; mindless creatures and those with Intelligence 2 or less do not concern it. If a creature with Intelligence 3 or higher enters its reach, the bad place slowly awakens over 4d6 days (sometimes much longer after an unusually long dormancy). Once awake, all living creatures within its reach must make a Will save (DC 10 + magnitude) every day or take 1d4 points of Wisdom drain. A creature drained to 0 Wisdom does not become comatose: its alignment switches to chaotic evil, it becomes a murderous pawn of the bad place (using its Charisma score instead of Wisdom for all Wisdom-modified effects), and it seeks to kill any other intelligent creatures it encounters that are not under the bad place's control. A pawn forced beyond the bad place's reach immediately falls prone (rescue procedures are given under Exorcism).",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "bad-place-undead",
        name: "Undead Effects",
        description:
          "Incorporeal undead gain fast healing equal to 1/2 the bad place's magnitude while in its reach, and turn resistance +4; this increases their CR by +1. Bad place ghosts always possess the malevolence special attack, and may also possess Shape of Terror (Su): up to 3 times per day, as a free action, a manifested ghost may momentarily change its shape into the most feared object or creature of any one target within 30 feet; if the ghost then makes a successful touch attack against that creature during this round, the creature must make a Fortitude save or drop dead from fright — success means it merely takes 3d6 points of damage. This is a mind-affecting necromantic fear effect.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "bad-place-associated-exorcism",
        name: "Associated Monsters and Exorcism",
        description:
          "Associated monsters: the spirits of a bad place often manifest as one type of incorporeal undead — allips, shadows, specters, or wraiths — dormant while the bad place is dormant and mobile only once it wakes, tending to hide in the heart. Vermin, animals, and magical beasts with Intelligence 2 or lower are also often found living in a bad place, always unusually large (advanced by several Hit Dice) and cantankerous. Exorcism: utterly destroying all the buildings in the bad place's reach has a chance of exorcising the site, but if the bad place makes a DC 15 magnitude check it survives and can infect any new structure built on the site; dispel evil is useless unless cast upon the bad place's heart, in which case a successful casting exorcises the haunting for good. Creatures captured by a bad place are restored by first restoring their Wisdom scores to their original values and then casting atonement on them; if the atonement is not cast, the victim immediately drops to 0 Wisdom (and becomes a pawn again) the next time he fails to resist the bad place's call.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  }),
  T({
    id: "haunting-dreamscape",
    name: "Dreamscape (Haunting)",
    summary:
      "A small, simple haunting that manifests only through the dreams of those who sleep nearby — typically a single building or a few rooms — arising when a single being of great imagination or creative talent dies an unexpected or accidental death (rarely deliberate violence, which more often makes an eidolon; rarely, a powerful living mind can unconsciously create one). Any intelligent living creature that falls asleep in its reach must make a Will save (DC 10 + magnitude) or suffer a nightmare; a creature slain by the nightmare dies in the real world and rises as a zombie 1d6 rounds later. Zombies in its reach gain damage reduction 10/—, and its ghosts may gain Nightmare Vision.",
    features: [
      {
        key: "dreamscape-reach-living",
        name: "Reach and Living Effects",
        description:
          "Reach: 10 square feet per point of magnitude. Structural effects: none. To outward observation a dreamscape looks unremarkable. Any intelligent living creature that falls asleep in a dreamscape must make a Will save (DC 10 + magnitude): success means the victim wakes with vague memories of disturbing dreams; failure means the victim suffers the effects of a nightmare spell. A living creature slain by these nightmares suffers the same fate in the real world — a nightmare of being murdered results in the victim's body being murdered in the same manner — and a creature slain in this manner rises as a zombie 1d6 rounds after its death.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "dreamscape-undead",
        name: "Undead Effects",
        description:
          "Zombies in a dreamscape's reach gain damage reduction 10/—; this increases their CR by +1. Ghosts in a dreamscape sometimes possess Nightmare Vision (Su): as a standard action, the ghost can invade the mind of one living opponent within 30 feet, who immediately falls into a nightmare-haunted sleep unless he succeeds at a Will save. The sleep persists for 1d10 rounds, during which the victim tosses and turns and cries out; when it passes the victim wakes with a scream and must make a Fortitude save or take 1d6 points of Constitution damage. A victim wakened before the effect passes suffers a -4 penalty on his Fortitude save. This is a mind-affecting fear and sleep effect.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "dreamscape-associated-exorcism",
        name: "Associated Monsters and Exorcism",
        description:
          "Associated monsters: the region around a dreamscape is often plagued with zombies created from those who have fallen victim to the haunting; evil priests and necromancers often make their lairs in or near dreamscapes to capitalize on this effect and augment their undead legions. Exorcism: one must first use a dreaming creature as bait to lure the haunting into the physical world; as soon as the dreaming creature is targeted by the dreamscape, a successful dispel evil cast upon the dreamer can exorcise the haunting if the dreamer succeeds at its save against the dreamscape nightmare.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  }),
  T({
    id: "haunting-eidolon",
    name: "Eidolon (Haunting)",
    summary:
      "A haunting not tied to a static location: the unquiet spirit of an artist or other truly gifted individual, dead by violence and burning for vengeance, infuses works of art, mirrors, written words, and similar media. A creature that studies one of its foci must make a Will save (DC 10 + magnitude) or be pulled through a hallucination of the eidolon's life and death and emerge under a geas/quest to perform the eidolon's (usually evil) tasks. Each focus can manifest a ghost; its ghosts always have horrific appearance and many have an Aura of Curses.",
    features: [
      {
        key: "eidolon-reach",
        name: "Reach",
        description:
          "Reach: a number of objects (typically scrolls, books, mirrors, works of art, or similar media) up to the haunting's magnitude. These objects must be within 100 feet of each other when the eidolon first manifests, but they can be separated by any distance from each other thereafter. An eidolon can affect any creature that studies any of these focus objects.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "eidolon-living",
        name: "Living Effects",
        description:
          "Structural effects: none. Any creature that examines a book, views a mirror, or otherwise observes a work the eidolon has chosen must immediately make a Will save (DC 10 + magnitude). Success means the victim feels uneasy but escapes unharmed (he must save again if he studies the object again). Failure means the eidolon has infiltrated the victim's psyche: he experiences a vivid but disjointed hallucination, cloaked in symbolism and metaphor, in which he relives key moments of the eidolon's life culminating in its death. When he emerges from the hallucination (which typically lasts 2d6 rounds, during which a dispel evil spell can disrupt it), he has become affected by a geas/quest to perform a set series of tasks for the eidolon; the tasks vary but invariably require evil acts. The eidolon often chooses a single person as its tool, forcing the victim into doing its will out of fear.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "eidolon-undead",
        name: "Undead Effects",
        description:
          "Each separate focus connected to an eidolon can manifest a ghost when it needs to mete out punishment or otherwise affect the physical world. These ghosts are typically similar in shape and abilities but are not necessarily identical. An eidolon can be defeated when its ghosts manifest, so it resorts to manifesting a ghost only when it feels assured of victory or has no other choice. Eidolon ghosts always have the horrific appearance special attack, and many of them have Aura of Curses (Su) as well: any creature that comes within 30 feet of the ghost must make a Will save or become cursed, as if by the bestow curse spell — unlike the standard spell, this effect has a duration of 1 day per Hit Die of the ghost, and a single creature can only be targeted by this ability once per day whether or not the save succeeds.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "eidolon-associated-exorcism",
        name: "Associated Monsters and Exorcism",
        description:
          "Associated monsters: eidolons can appear anywhere and are not typically associated with specific creatures other than ghosts. Exorcism: there are two ways. The first requires all of its constituent foci to be confronted: forcing the eidolon to manifest a ghost out of each focus (either by damaging the foci or successfully turning it) and then defeating the ghosts defeats the eidolon itself — a daunting task, especially for high-magnitude eidolons, since the power of each individual ghost does not diminish as others are slain. Alternatively, if a character can 'set right' the events that caused the eidolon to form, the remaining ghosts are appeased and leave the physical world, taking their foci with them; the exact conditions are fairly obscure and complex and likely require communication with the haunting at some point.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  }),
  T({
    id: "haunting-entity",
    name: "Entity (Haunting)",
    summary:
      "The most common haunting: the 'shadow' of a single ghost that has existed in an area for at least 100 years, its will and personality so infusing its haunt that the area changes, physically and spiritually, to match it. Its magnitude equals the associated ghost's CR. Within its reach (30-foot radius per magnitude), fear effects are more potent (-4 penalty on saves against them) and undead gain turn resistance +2. The haunting can reshape appearances with major image and strike with cause fear, fear, or finger of death as its magnitude grows; its ghost always has malevolence and often Animate Objects.",
    features: [
      {
        key: "entity-reach-structural",
        name: "Reach and Structural Effects",
        description:
          "An entity haunting's magnitude is equal to the associated ghost's CR. Reach: 30-foot radius per point of magnitude. An entity haunting changes the appearance and nature of any structures in its reach in subtle ways to match the nature of the haunting ghost, most obviously where the ghost met its end (a drowning victim's haunting has water-stained walls and mysterious puddles; a spider victim's is infested with spiders and clogged with cobwebs). Like a bad place, an entity haunting can change the appearance of anything in its reach with a major image spell, but only once per day — typically to display something associated with the ghost's past. An entity haunting may cast cause fear once per day; one with magnitude at least 7 can cast fear once per day; one with magnitude at least 13 can cast finger of death once per day.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "entity-living-undead",
        name: "Living and Undead Effects",
        description:
          "Living effects: fear effects are more potent within an entity haunting's reach — creatures in its reach suffer a -4 penalty against fear effects. Undead effects: undead within an entity haunting's reach gain turn resistance +2, which stacks with any existing turn resistance. The article notes that, for groups using Libris Mortis, most ghosts that have spawned entity hauntings are also augmented by that book's evolved undead template. Ghosts associated with an entity haunting always have the malevolence special attack, and often gain Animate Objects (Su): a ghost may use its malevolence ability to possess inanimate objects, transforming the object into an animated object; destroying the animated object does not harm the ghost, and the effect functions as animate objects with a caster level equal to the ghost's Hit Dice.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "entity-associated-exorcism",
        name: "Associated Monsters and Exorcism",
        description:
          "Associated monsters: entity hauntings often have lesser undead such as ghouls, shadows, wights, and wraiths lurking nearby, drawn more by the haunting's aura (and turn resistance boost) than by the associated ghost; if the ghost was killed by a particular type of creature, those creatures are often found within the reach as well, drawn by the psychic lure of the ghost's anguish and rage. Exorcism: one must first destroy the haunting's associated ghost; once this is done, a successful dispel evil cast anywhere within the haunting's reach can exorcise the haunting.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  }),
  T({
    id: "haunting-planar-canker",
    name: "Planar Canker (Haunting)",
    summary:
      "A haunting that is not the work of any spirit: a place where something has eroded the boundaries between the Material Plane and an inimical other plane (such as the Abyss or the Far Realm), so reality itself grows unstable. Rare and quite small — one room, up to a 5-foot radius per magnitude. Every minute, living creatures inside must make a Will save (DC 10 + magnitude) or take 1 point of Wisdom drain; the drained Wisdom fuels progressively stronger structural effects, from silent image to animated objects, and every minute carries a cumulative 2% chance that something on the other side notices and comes through. Turning checks have no effect on its manifestations. APOC: a planar breach — flagged prominently in SCREENING.md.",
    features: [
      {
        key: "planar-canker-reach-structural",
        name: "Reach and Structural Effects",
        description:
          "Reach: one room, up to a 5-foot radius per point of magnitude. A planar canker can exist with ease in nearly any area and might taint only a single room in an otherwise normal tavern; sealing the door to an infected room is an effective containment, since without intelligent living creatures to interact with, the canker remains dormant and harmless. Turning checks have no effect on manifestations created by a planar canker. The canker has the most dramatic structural effects of the hauntings: they manifest as the animation and transformation of physical objects in the tainted room, powered by the sanity it drains. Once it has drained 3 points of Wisdom it can cause minor changes by casting silent image once per round; at 6 points drained, major image once per round; once it has drained 10 points, it can begin animating objects in the room — an animated object becomes twisted, warped, and horrific, animates as if by an animate objects spell, gains fast healing equal to 1/2 the canker's magnitude and +6 Dexterity, and its CR increases by +1. These effects persist until a creature manifests (see Associated Monsters) or until all living things in the room are dead, at which point the haunting loses 1 point of drained Wisdom per round and the room eventually returns to normal. Animated objects cannot leave the haunting's reach and immediately revert to normal objects if forced out of it.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "planar-canker-living-undead",
        name: "Living and Undead Effects",
        description:
          "Living effects: planar cankers disorient living creatures within their reach — once every minute, such creatures must make Will saves (DC 10 + magnitude) or take 1 point of Wisdom drain as their grip on reality erodes and madness sets in; this drained Wisdom 'fuels' the canker and allows for progressively more potent structural effects (above). Undead effects: none — ghosts are not typically associated with planar cankers.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "planar-canker-associated-exorcism",
        name: "Associated Monsters and Exorcism",
        description:
          "Associated monsters: while the breakdown of reality can itself be deadly, the true danger is that the boundaries have grown unstable. Every minute a living creature remains within a planar canker there is a 2% cumulative chance that some entity on the other side takes notice; when this occurs the structural effects become more pronounced as the approaching creature forces reality to writhe and shift — animated objects are affected by haste (caster level equal to the canker's magnitude) and gain a +4 profane bonus on attack rolls, damage rolls, and saving throws. When the creature from beyond arrives, it can use the canker as a gate to physically appear in the Material Plane for 2d6 rounds before it is forced to retreat back to its source plane, after which the canker is 'burnt out' for 1d6 days. Any creature grappled by an outsider when it returns to its source plane must make a Will save or be transported to the source plane with the outsider. The nature of the creature is left to the DM; good choices include chaos beasts, evil outsiders, or creatures from the Far Realm. Exorcism: a planar canker can be 'burnt out' for 1d6 days with a successful dispel chaos spell; a hallow spell with a dispel chaos woven into its casting can extend this duration to a year; permanently exorcising one requires powerful magic like Mordenkainen's disjunction, miracle, or wish.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  }),
  T({
    id: "haunting-primeval-scar",
    name: "Primeval Scar (Haunting)",
    summary:
      "The oldest and most dangerous haunting: a region haunted by the unquiet, hateful spirits of the land itself, where remnants of ancient life still hold sway. Reach is a 1-mile radius per magnitude. No artificial structure can last within it, its animals are unnaturally aggressive, Survival checks take a penalty equal to its magnitude, and each day an intruder must make a Will save (DC equal to the magnitude, +1 per previous check) or simply vanish — a teleportation effect from which only miracle or wish can restore him, drained and memory-less. Those who die in its reach before vanishing linger as its guardian ghosts, which may gain Empty Soul. Its exorcism is beyond mortal magic. APOC: the vanishing is a teleportation effect — flagged in SCREENING.md.",
    features: [
      {
        key: "primeval-scar-reach-structural",
        name: "Reach and Structural Effects",
        description:
          "Reach: 1-mile radius per point of magnitude. A DC 20 Sense Motive check is enough to notice the sensation of being an unwelcome intruder; the deeper one travels or the longer one remains, the more powerful the sensation becomes. Structural effects: no artificial structure can last within the reach of a primeval scar — a structure created in such a scar has a cumulative 1% chance with each passing day of being absorbed by the scar, and someone who witnesses the absorption sees it simply fade away from view; creatures and objects within a structure that vanishes can make a Reflex save (DC 10 + magnitude) to avoid vanishing as well. Vegetation within the reach seems 'off' — a DC 20 Knowledge (nature) check reveals the plants grow where they should not, or seem to twist and writhe as if in a gentle breeze despite the utter stillness of the wind.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "primeval-scar-living",
        name: "Living Effects",
        description:
          "Animals in a primeval scar behave strangely: unnaturally aggressive toward intruders and typically attacking on sight, with wild empathy checks against native animals taking a penalty equal to the scar's magnitude; observed in secrecy they act strangely (arranging kills in neat piles, eating soil or rocks, sleeping standing up). Animals not native to a scar (such as animal companions or pets) must make a Will save each hour they spend in the scar to avoid becoming shaken. Intruders face two dangers: all Survival checks in the scar are penalized by an amount equal to the haunting's magnitude, and each day an intruder remains he must make a Will save (DC equals the magnitude, +1 per previous check) or simply vanish — always when no one else is looking. This vanishing is a teleportation effect, so a creature under dimensional anchor or a similar effect is protected. A vanished creature can be restored only via miracle or wish, and even then returns with its Intelligence, Wisdom, and Charisma scores drained to 0 (restoration, greater restoration, or heal is required to cure this damage) and no memories of its time away. Evil-aligned fey, native animals, and ghosts are immune to these effects. Artificial objects left unattended vanish as living creatures do; nonmagical items always fail their saving throws and any nonmagical item left untended for a day automatically vanishes (including bodies of once-living creatures left for more than a day), while magic items receive a Will save as normal.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "primeval-scar-undead",
        name: "Undead Effects",
        description:
          "Primeval scar ghosts are usually created when a creature wanders into the haunting's reach, becomes lost, and dies (starvation, thirst, animal attack, or exposure) before it vanishes; when the body invariably vanishes the day after death, the soul lingers on, bound to the region as a guardian. These ghosts often have the unique special ability Empty Soul (Su): if the ghost manages to possess a creature with its malevolence, it can attempt to cause the creature to vanish as a free action, up to once per round; the creature can resist with a successful Will save — success forces the possessing ghost to flee the body, but failure indicates the body vanishes (as above) and the ghost gains a +4 profane bonus to its Charisma score for the next hour.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "primeval-scar-associated-exorcism",
        name: "Associated Monsters and Exorcism",
        description:
          "Associated monsters: animals and plant monsters are common in a primeval scar, as are the ghosts of those who die within the scar; most other creatures avoid primeval scars, although any creature that has recently become lost within one may be encountered. Since evil-aligned fey (such as the Fiend Folio's kelpie and wendigo) are immune to the vanishing effects, they often use these hauntings as lairs. Exorcism: primeval scars are the most potent and dangerous of the six hauntings presented in the article; they have existed for countless eons, and their exorcism is beyond the reach of mortal magic — certain artifacts or the will of a deity might be able to exorcise a region of this haunting, at the DM's discretion.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  }),
];
