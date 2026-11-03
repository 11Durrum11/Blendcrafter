/**
 * Omni sweep wave 2 (2026-11-02): The Quintessential Kobold — the
 * book's entire purchasable content is the "Kobold Tools" chapter
 * (printed pp. 43-51): kobold and animal weapons (p. 44), tools
 * (pp. 46-47), alchemical substances and drugs (pp. 47-48), and the
 * chapter's magic items (armor and weapon abilities, the five dragon
 * heart rings, and dragon-themed wondrous items). Every other "gp"
 * figure in the book is a spell material component cost, which is not
 * an item and is not built. None of the 60 names here existed in the
 * catalog. One in-book price conflict: the mundane dragon cloak's
 * table price is 200 gp but its item description prices it at 400 gp;
 * the description price (400 gp) is used and the record is named
 * "Dragon Cloak (Nonmagical)" to distinguish it from the chapter's
 * 7,500 gp magic dragon cloak. The tools table misprints "Dragon
 * Feet" as "Dragon Feat"; the description name is used. Flat-cost
 * armor and weapon abilities print a leading "+" in the book (e.g.
 * "+3,750 gp"); the plus is a pricing convention, not part of the
 * price, and is dropped in the cost field. Prices are the printed
 * market prices; summaries and notes are mechanical effects in our
 * own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const QKOB_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "fearful-presence",
    "name": "Fearful Presence",
    "category": "armor-special-ability",
    "cost": "3,750 gp",
    "summary": "Armor ability that grants the wearer a +5 bonus on Intimidate checks.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fearful-presence-improved",
    "name": "Fearful Presence, Improved",
    "category": "armor-special-ability",
    "cost": "15,000 gp",
    "summary": "Armor ability that grants the wearer a +10 bonus on Intimidate checks.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frightful-presence",
    "name": "Frightful Presence",
    "category": "armor-special-ability",
    "cost": "15,000 gp",
    "summary": "Armor ability that lets the wearer demoralize opponents with Intimidate out to 20 ft., leaving them shaken for 2d4 rounds.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shifting",
    "name": "Shifting",
    "category": "armor-special-ability",
    "cost": "3,750 gp",
    "summary": "Armor ability that grants the wearer a +5 bonus on Bluff checks made to feint in combat.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blooded",
    "name": "Blooded",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon ability that stores 'vials' of blood taken from dragons, sorcerer-favoured-class humanoids, magical beasts, and outsiders, which the wielder can spend to power blood-magic effects.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spell-bleeding",
    "name": "Spell Bleeding",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon ability that forces a struck spellcaster to make a Will save (DC 18) or lose their highest-level prepared spell or spell slot.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-heart-ring-black",
    "name": "Dragon Heart Ring (Black)",
    "category": "ring",
    "cost": "190,000 gp",
    "summary": "Ring granting +5 on Diplomacy checks with dragons, a dragon's frightful presence, immunity to dragons' frightful presence, and a one-step attitude shift from dragons. The black ring adds acid resistance 10, a 40 ft. acid breath weapon (15d6, Reflex DC 20 half) twice per day, and corrupt food and drink and blight (DC 18) once per day.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-heart-ring-blue",
    "name": "Dragon Heart Ring (Blue)",
    "category": "ring",
    "cost": "190,000 gp",
    "summary": "Ring granting +5 on Diplomacy checks with dragons, a dragon's frightful presence, immunity to dragons' frightful presence, and a one-step attitude shift from dragons. The blue ring adds electricity resistance 10, a 100 ft. lightning breath weapon (15d6, Reflex DC 20 half) twice per day, and dancing lights and chain lightning (DC 19) once per day.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-heart-ring-green",
    "name": "Dragon Heart Ring (Green)",
    "category": "ring",
    "cost": "190,000 gp",
    "summary": "Ring granting +5 on Diplomacy checks with dragons, a dragon's frightful presence, immunity to dragons' frightful presence, and a one-step attitude shift from dragons. The green ring adds a +5 bonus on saves against poison, a corrosive breath weapon (10d6 acid) twice per day, and touch of fatigue (DC 13) and cloudkill (DC 18) once per day.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-heart-ring-red",
    "name": "Dragon Heart Ring (Red)",
    "category": "ring",
    "cost": "190,000 gp",
    "summary": "Ring granting +5 on Diplomacy checks with dragons, a dragon's frightful presence, immunity to dragons' frightful presence, and a one-step attitude shift from dragons. The red ring adds fire resistance 10, a 100 ft. fire breath weapon (15d6, Reflex DC 20 half) twice per day, and flare (DC 13) and waves of fatigue (DC 18) once per day.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-heart-ring-white",
    "name": "Dragon Heart Ring (White)",
    "category": "ring",
    "cost": "190,000 gp",
    "summary": "Ring granting +5 on Diplomacy checks with dragons, a dragon's frightful presence, immunity to dragons' frightful presence, and a one-step attitude shift from dragons. The white ring adds cold resistance 10, a 100 ft. cold breath weapon (15d6, Reflex DC 20 half) twice per day, and ray of frost (DC 13) and cone of cold (DC 18) once per day.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blood-vial",
    "name": "Blood Vial",
    "category": "wondrous-throat",
    "cost": "6,000 gp",
    "summary": "Worn vial that lets the wearer carry one additional activated blood ability from a blooded weapon or similar blood-magic effect.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-breath-amulet",
    "name": "Dragon Breath Amulet",
    "category": "wondrous-throat",
    "cost": "54,000 gp",
    "summary": "Amulet that, when the wearer succeeds on a save against a breath weapon, absorbs the breath so nobody in the area takes damage; it stores one absorbed breath and can release it identically.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-cloak",
    "name": "Dragon Cloak",
    "category": "wondrous-shoulders",
    "cost": "7,500 gp",
    "summary": "Cloak granting a +5 bonus on Diplomacy and Intimidate checks.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-heart-qkob",
    "name": "Dragon Heart",
    "category": "wondrous-slotless",
    "cost": "14,000 gp",
    "summary": "A blood-magic focus: each hit point of blood stored in it counts as two for the purposes of blood-magic effects.",
    "source": "The Quintessential Kobold — Kobold Tools (Magic Items), pp. 43–51",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const QKOB_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "fang-guards",
    "name": "Fang Guards",
    "category": "weapon",
    "cost": "2 gp",
    "weight": "½ lb.",
    "notes": "Fitted fangs that grant a bite attack to a creature that does not naturally have one.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "flaming-vest",
    "name": "Flaming Vest",
    "category": "weapon",
    "cost": "10 gp",
    "weight": "2 lb.",
    "notes": "Vest rigged to channel alchemist's fire, burning for 5 rounds once lit; unarmed attackers and grapplers risk the flames (Reflex DC 14 for half).",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sharpened-pick",
    "name": "Sharpened Pick",
    "category": "weapon",
    "cost": "25 gp",
    "weight": "4 lb.",
    "notes": "Pick dealing 1d4 damage (1d6 for larger sizes) with a 19–20/×3 critical.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "strangling-sling",
    "name": "Strangling Sling",
    "category": "weapon",
    "cost": "2 gp",
    "weight": "1 lb.",
    "notes": "Sling with a 50 ft. range increment, sized and weighted for strangling attacks.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "talon-hands",
    "name": "Talon Hands",
    "category": "weapon",
    "cost": "15 gp",
    "weight": "2 lb.",
    "notes": "Worn talons that serve as claw weapons; they impose a −2 penalty on checks requiring fine manipulation.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tail-blade",
    "name": "Tail Blade",
    "category": "weapon",
    "cost": "4 gp",
    "weight": "1 lb.",
    "notes": "A blade fitted to the wearer's tail, letting a tailed creature attack with it.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tail-bludgeon",
    "name": "Tail Bludgeon",
    "category": "weapon",
    "cost": "4 gp",
    "weight": "1 lb.",
    "notes": "A weighted bludgeon fitted to the wearer's tail for bludgeoning tail attacks.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tail-spike",
    "name": "Tail Spike",
    "category": "weapon",
    "cost": "3 gp",
    "weight": "1 lb.",
    "notes": "A spike fitted to the wearer's tail for piercing tail attacks.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tail-stinger",
    "name": "Tail Stinger",
    "category": "weapon",
    "cost": "8 gp",
    "weight": "1½ lb.",
    "notes": "Tail-mounted stinger that holds a single dose of poison for delivery on a hit.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lash-blade",
    "name": "Lash Blade",
    "category": "weapon",
    "cost": "12 gp",
    "weight": "2 lb.",
    "notes": "Lashing blade with 10 ft. reach that can also strike adjacent opponents.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "razor-wings",
    "name": "Razor Wings",
    "category": "weapon",
    "cost": "20 gp",
    "weight": "7 lb.",
    "notes": "Bladed wing harness usable as a dual weapon or as a glider.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "slapping-wing",
    "name": "Slapping Wing",
    "category": "weapon",
    "cost": "25 gp",
    "weight": "12 lb.",
    "notes": "A heavy wing harness used to slap and buffet opponents.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snap-dragon",
    "name": "Snap Dragon",
    "category": "weapon",
    "cost": "20 gp",
    "weight": "6 lb.",
    "notes": "A spring-loaded weapon that snaps out to 10 ft.; resetting it takes a full-round action.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tail-extender",
    "name": "Tail Extender",
    "category": "weapon",
    "cost": "15 gp",
    "weight": "2 lb.",
    "notes": "Harness that extends the effective reach of the wearer's tail attacks to 10 ft.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "buzz-disk",
    "name": "Buzz Disk",
    "category": "weapon",
    "cost": "5 gp",
    "weight": "1 lb.",
    "notes": "A thrown clockwork disk; rewinding it for another throw takes a full-round action.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "buzzing-sling-bullet",
    "name": "Buzzing Sling Bullet",
    "category": "ammunition",
    "cost": "5 gp",
    "weight": "0 lb.",
    "notes": "A clockwork sling bullet that buzzes in flight.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-breather-black",
    "name": "Dragon Breather (Black)",
    "category": "weapon",
    "cost": "15 gp",
    "weight": "2 lb.",
    "notes": "Ranged touch weapon holding 6 shots per load, dealing 2d4 acid damage. An unproficient user risks the blast (Reflex DC 14 if proficient, DC 16 if not).",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-breather-blue",
    "name": "Dragon Breather (Blue)",
    "category": "weapon",
    "cost": "30 gp",
    "weight": "15 lb.",
    "notes": "Ranged touch weapon holding 6 shots per load; targets risk being stunned (Fortitude DC 14). An unproficient user risks the blast (Reflex DC 14 if proficient, DC 16 if not).",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-breather-green",
    "name": "Dragon Breather (Green)",
    "category": "weapon",
    "cost": "30 gp",
    "weight": "2 lb.",
    "notes": "Ranged touch weapon holding 6 shots per load, releasing a cloud dealing 1d4 Constitution damage (Fortitude DC 14). An unproficient user risks the blast (Reflex DC 14 if proficient, DC 16 if not).",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-breather-red",
    "name": "Dragon Breather (Red)",
    "category": "weapon",
    "cost": "15 gp",
    "weight": "2 lb.",
    "notes": "Ranged touch weapon holding 6 shots per load, dealing 2d4 fire damage with splash. An unproficient user risks the blast (Reflex DC 14 if proficient, DC 16 if not).",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-breather-white",
    "name": "Dragon Breather (White)",
    "category": "weapon",
    "cost": "15 gp",
    "weight": "2 lb.",
    "notes": "Ranged touch weapon holding 6 shots per load, dealing 2d4+2 cold damage. An unproficient user risks the blast (Reflex DC 14 if proficient, DC 16 if not).",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "clamp-jaw",
    "name": "Clamp Jaw",
    "category": "weapon",
    "cost": "2 gp",
    "weight": "1 lb.",
    "notes": "Animal weapon: a jaw fitting that locks onto a successful bite, maintaining a grapple.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "leg-blades",
    "name": "Leg Blades",
    "category": "weapon",
    "cost": "10 gp",
    "weight": "2 lb.",
    "notes": "Animal weapon: blades fitted to an animal's legs; price and weight are per leg.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tail-blunts",
    "name": "Tail Blunts",
    "category": "weapon",
    "cost": "20 gp",
    "weight": "2 lb.",
    "notes": "Animal weapon: a blunt tail fitting that also blocks the animal's own poison delivery.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tack-and-flame",
    "name": "Tack and Flame",
    "category": "weapon",
    "cost": "10 gp",
    "weight": "0 lb.",
    "notes": "Animal tack with a flame fitting; when lit, a wearer with Intelligence below 6 must make a Will save (DC 14) or be panicked for 2d4 rounds.",
    "source": "The Quintessential Kobold — Kobold Tools (Weapons), p. 44",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "aura-box",
    "name": "Aura Box",
    "category": "gear",
    "cost": "100 gp",
    "weight": "1 lb.",
    "notes": "A carried device granting a +2 bonus on Intimidate checks while its bearer is moving.",
    "source": "The Quintessential Kobold — Kobold Tools (Tools), pp. 46–47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bar-spreader",
    "name": "Bar Spreader",
    "category": "tool",
    "cost": "10 gp",
    "weight": "5 lb.",
    "notes": "Grants a +4 circumstance bonus on Strength checks made to bend bars.",
    "source": "The Quintessential Kobold — Kobold Tools (Tools), pp. 46–47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bright-eyes",
    "name": "Bright Eyes",
    "category": "gear",
    "cost": "20 gp",
    "weight": "1 lb.",
    "notes": "Goggles that remove the wearer's light sensitivity and grant a +2 bonus on Spot checks in low light or darkness.",
    "source": "The Quintessential Kobold — Kobold Tools (Tools), pp. 46–47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-cloak-nonmagical",
    "name": "Dragon Cloak (Nonmagical)",
    "category": "gear",
    "cost": "400 gp",
    "weight": "10 lb.",
    "notes": "A nonmagical cloak in the draconic style granting a +2 bonus on Diplomacy checks. (The chapter's table prices this cloak at 200 gp; its item description prices it at 400 gp, which is used here.)",
    "source": "The Quintessential Kobold — Kobold Tools (Tools), pp. 46–47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-feet",
    "name": "Dragon Feet",
    "category": "gear",
    "cost": "20 gp",
    "weight": "4 lb.",
    "notes": "Footwear that lets the wearer ignore Jump height limits, at a cost of −5 ft. to speed. (The chapter's table misprints the name as 'Dragon Feat'.)",
    "source": "The Quintessential Kobold — Kobold Tools (Tools), pp. 46–47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vermin-ball",
    "name": "Vermin Ball",
    "category": "gear",
    "cost": "1 gp",
    "weight": "½ lb.",
    "notes": "A ball used in handling and directing vermin.",
    "source": "The Quintessential Kobold — Kobold Tools (Tools), pp. 46–47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vermin-box",
    "name": "Vermin Box",
    "category": "gear",
    "cost": "2 gp",
    "weight": "1 lb.",
    "notes": "A container for transporting vermin.",
    "source": "The Quintessential Kobold — Kobold Tools (Tools), pp. 46–47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "voice-carrier",
    "name": "Voice Carrier",
    "category": "gear",
    "cost": "5 gp",
    "weight": "½ lb.",
    "notes": "Lowers by 2 the Listen DC to hear the wearer's voice.",
    "source": "The Quintessential Kobold — Kobold Tools (Tools), pp. 46–47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "voice-resonator",
    "name": "Voice Resonator",
    "category": "gear",
    "cost": "10 gp",
    "weight": "½ lb.",
    "notes": "Raises by 2 the DC to recognize the wearer's voice.",
    "source": "The Quintessential Kobold — Kobold Tools (Tools), pp. 46–47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "wing-glider",
    "name": "Wing Glider",
    "category": "gear",
    "cost": "150 gp",
    "weight": "10 lb.",
    "notes": "A glider harness: with a successful Tumble check (DC 15) the wearer glides 50 ft. for every 10 ft. of height dropped.",
    "source": "The Quintessential Kobold — Kobold Tools (Tools), pp. 46–47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-paint-black",
    "name": "Dragon Paint (Black)",
    "category": "alchemical gear",
    "cost": "20 gp",
    "weight": "½ lb.",
    "notes": "Body paint granting a +4 bonus on Swim checks while active (1 hour). All dragon paints deal 1 point of acid damage per minute to the wearer, who must save (Fort DC 14) or take 1 point of Constitution damage from the pain; one jar covers 3 Small or 1 Medium creature.",
    "source": "The Quintessential Kobold — Kobold Tools (Alchemical Items), pp. 47–48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-paint-blue",
    "name": "Dragon Paint (Blue)",
    "category": "alchemical gear",
    "cost": "25 gp",
    "weight": "½ lb.",
    "notes": "Body paint that masks the wearer's scent while active (1 hour). All dragon paints deal 1 point of acid damage per minute to the wearer, who must save (Fort DC 14) or take 1 point of Constitution damage from the pain; one jar covers 3 Small or 1 Medium creature.",
    "source": "The Quintessential Kobold — Kobold Tools (Alchemical Items), pp. 47–48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-paint-green",
    "name": "Dragon Paint (Green)",
    "category": "alchemical gear",
    "cost": "30 gp",
    "weight": "½ lb.",
    "notes": "Body paint granting a +4 bonus on Hide checks while the wearer remains still, active for 1 hour. All dragon paints deal 1 point of acid damage per minute to the wearer, who must save (Fort DC 14) or take 1 point of Constitution damage from the pain; one jar covers 3 Small or 1 Medium creature.",
    "source": "The Quintessential Kobold — Kobold Tools (Alchemical Items), pp. 47–48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-paint-red",
    "name": "Dragon Paint (Red)",
    "category": "alchemical gear",
    "cost": "30 gp",
    "weight": "½ lb.",
    "notes": "Body paint adding +1 fire damage to the wearer's unarmed attacks while active (1 hour). All dragon paints deal 1 point of acid damage per minute to the wearer, who must save (Fort DC 14) or take 1 point of Constitution damage from the pain; one jar covers 3 Small or 1 Medium creature.",
    "source": "The Quintessential Kobold — Kobold Tools (Alchemical Items), pp. 47–48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-paint-white",
    "name": "Dragon Paint (White)",
    "category": "alchemical gear",
    "cost": "20 gp",
    "weight": "½ lb.",
    "notes": "Body paint granting a +1 bonus on melee attacks while active (1 hour), but the wearer cannot use concentration-based skills. All dragon paints deal 1 point of acid damage per minute to the wearer, who must save (Fort DC 14) or take 1 point of Constitution damage from the pain; one jar covers 3 Small or 1 Medium creature.",
    "source": "The Quintessential Kobold — Kobold Tools (Alchemical Items), pp. 47–48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-paint-remover",
    "name": "Dragon Paint Remover",
    "category": "alchemical gear",
    "cost": "5 gp",
    "weight": "½ lb.",
    "notes": "Solvent that removes dragon paint safely.",
    "source": "The Quintessential Kobold — Kobold Tools (Alchemical Items), pp. 47–48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "flys-hope",
    "name": "Fly's Hope",
    "category": "alchemical gear",
    "cost": "5 gp",
    "weight": "½ lb.",
    "notes": "A solvent that dissolves up to ten 5-ft. squares of webbing.",
    "source": "The Quintessential Kobold — Kobold Tools (Alchemical Items), pp. 47–48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frenzy-qkob",
    "name": "Frenzy",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "½ lb.",
    "notes": "A drug that drives vermin into a rage.",
    "source": "The Quintessential Kobold — Kobold Tools (Alchemical Items), pp. 47–48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mulin",
    "name": "Mulin",
    "category": "alchemical gear",
    "cost": "20 gp",
    "weight": "½ lb.",
    "notes": "A drug that drives animals into a rage.",
    "source": "The Quintessential Kobold — Kobold Tools (Alchemical Items), pp. 47–48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "silence-qkob",
    "name": "Silence",
    "category": "alchemical gear",
    "cost": "18 gp",
    "weight": "½ lb.",
    "notes": "A drug that dazes vermin.",
    "source": "The Quintessential Kobold — Kobold Tools (Alchemical Items), pp. 47–48",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
