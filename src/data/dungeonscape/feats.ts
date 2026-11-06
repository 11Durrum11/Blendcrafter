import type { FeatDefinition } from "@/engine/types";

// Dungeonscape (WotC, D&D 3.5) feats — all of Table 3-1:
// New Feats (Chapter 3, printed pp. 44-47), transcribed
// from Shaun's own copy: five general feats, two tactical
// feats, and two weapon style feats. Per the catalog
// convention established by the Complete Warrior pack,
// tactical and weapon style feats are filed as category
// "general" with the grouping named in the record's
// special field; the tactical feats' maneuvers are
// carried in full in the benefit summary. The printed
// feat type ([Tactical] or [Style]) is also noted at the
// start of each such benefit summary. Prerequisites
// arrays carry only the printed Prerequisites lines.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.
//
// The chapter's Dungeon Teamwork benefits (Climbing
// Squad and Search Team, p. 47) are NOT feats — they are
// teamwork benefits from the system in Dungeon Master's
// Guide II, gained by team training rather than a feat
// slot — and the app has no teamwork-benefit mechanism.
// They are written up in full in reference.md in this
// staging folder.

const DS = "Dungeonscape";
const DS_PATH = "workspace/library-staging/books/dungeonscape.pdf";

export const DUNGEONSCAPE_FEATS: FeatDefinition[] = [
  {
    id: "combat-tinkering",
    name: "Combat Tinkering",
    category: "general",
    prerequisites: [],
    benefitSummary: "You gain a +4 bonus on Concentration checks to avoid being distracted in combat while making Disable Device or Open Lock checks. You also gain a +4 bonus when attempting to quicken a Disable Device or Open Lock check (reducing the time the task takes by increasing its DC by 20, as described in the Quickened Skill Checks sidebar).",
    modifiers: [],
    source: DS,
    sourceUrl: DS_PATH,
    ruleset: "core",
  },
  {
    id: "gnome-tunnel-acrobatics",
    name: "Gnome Tunnel Acrobatics",
    category: "general",
    prerequisites: ["Gnome; or base attack bonus +4, Knowledge (dungeoneering) 2 ranks, Tumble 9 ranks"],
    benefitSummary: "[Tactical feat.] This feat enables three tactical maneuvers. Combat Puppeteer: if you use the Tumble skill to avoid an opponent's attack of opportunity, you can use this maneuver on the following round — make a double move and attempt a Tumble check at a -5 penalty to avoid a foe's attack of opportunity; if the check succeeds, your foe makes its attack of opportunity but targets a creature of your choice within its reach rather than you (usable against one creature per round). Tunnel Scrambler: if you make a successful melee attack against an opponent who has walls adjacent to at least two sides of his space, on your next turn you can take a full-round action to make a Tumble check to move through the target's space; on a success you stop in his space and attack as part of the full-round action, while on a failure you provoke an attack of opportunity and the rest of the action is wasted. If your melee attack hits, you move your foe 5 feet in a direction of your choice and occupy the space he occupied (or one of his spaces of your choice); if the attack misses, you return to the space you started from. Wall Leaper: if you drop from a wall while climbing and land adjacent to a creature, you can make one attack as a standard action; the attack counts as a charge, and you gain a bonus on your damage roll equal to the number of points of falling damage you take.",
    modifiers: [],
    special: "Tactical feat. A fighter can select Gnome Tunnel Acrobatics as one of his fighter bonus feats.",
    source: DS,
    sourceUrl: DS_PATH,
    ruleset: "core",
  },
  {
    id: "hammer-and-piton",
    name: "Hammer and Piton",
    category: "general",
    prerequisites: ["Strength 15", "Climb 3 ranks"],
    benefitSummary: "[Weapon style feat.] While wielding a one-handed bludgeoning melee weapon in your primary hand and a climbing piton or spike in the other, you can make a touch attack with the piton as a standard action, dealing 1d4 points of damage + your Strength modifier; the target must be size Large or bigger. If the target is at least one size category larger than you, you can then make a special Climb check (DC equal to the target's Armor Class) to enter his space as a move action; the check must be made on the same turn you struck the foe with the piton. On a success you enter and remain in the target's space without provoking an attack of opportunity from the target; you lose your Dexterity bonus to Armor Class, but if your foe moves, you remain in his space as he moves. If any attack against you deals 10 or more points of damage, you must make a Climb check (DC equal to the damage dealt) to remain in place; on a failure you leave your foe's space and enter the nearest clear space.",
    modifiers: [],
    special: "Weapon style feat. A fighter can select Hammer and Piton as one of his fighter bonus feats.",
    source: DS,
    sourceUrl: DS_PATH,
    ruleset: "core",
  },
  {
    id: "quick-reconnoiter",
    name: "Quick Reconnoiter",
    category: "general",
    prerequisites: ["Listen 5 ranks", "Spot 5 ranks"],
    benefitSummary: "You can make one Spot check and one Listen check each round as a free action. You also gain a +2 bonus on initiative checks.",
    modifiers: [],
    source: DS,
    sourceUrl: DS_PATH,
    ruleset: "core",
  },
  {
    id: "trap-engineer",
    name: "Trap Engineer",
    category: "general",
    prerequisites: ["Knowledge (architecture and engineering) 1 rank", "Knowledge (dungeoneering) 4 ranks"],
    benefitSummary: "You know the styles of famous dungeon architects and can recognize their influences. After finding or setting off a trap in a dungeon, you gain a +2 bonus on future Search checks and Disable Device checks to find or disarm traps in that same dungeon. You also gain a +4 bonus on Reflex saves to avoid traps in that dungeon, and a +4 dodge bonus to Armor Class against attacks made by traps in that dungeon.",
    modifiers: [],
    source: DS,
    sourceUrl: DS_PATH,
    ruleset: "core",
  },
  {
    id: "trap-sensitivity",
    name: "Trap Sensitivity",
    category: "general",
    prerequisites: ["Elf or trapfinding class feature, trap sense +2"],
    benefitSummary: "When you pass within 5 feet of a mechanical trap, you are entitled to make a Search check to notice the trap as if you were actively looking for it. You cannot sense magic traps or spell traps with this feat.",
    modifiers: [],
    source: DS,
    sourceUrl: DS_PATH,
    ruleset: "core",
  },
  {
    id: "tunnel-fighting",
    name: "Tunnel Fighting",
    category: "general",
    prerequisites: ["Base attack bonus +1"],
    benefitSummary: "When squeezing into or through a tight space, you do not take the usual -4 penalty on your attack rolls or the -4 penalty to your Armor Class.",
    modifiers: [],
    special: "A fighter can select Tunnel Fighting as one of his fighter bonus feats.",
    source: DS,
    sourceUrl: DS_PATH,
    ruleset: "core",
  },
  {
    id: "undermountain-tactics",
    name: "Undermountain Tactics",
    category: "general",
    prerequisites: ["Dwarf or gnome; or base attack bonus +6 and Knowledge (dungeoneering) 2 ranks"],
    benefitSummary: "[Tactical feat.] This feat enables three tactical maneuvers. Stair King: when you have the high ground bonus on your attacks against an opponent and you hit that foe with two or more melee attacks during your turn, he must make a Balance check (DC 10 + your Str modifier) or be knocked prone; your opponent can instead opt to succeed automatically on the Balance check, but if he does so he loses his move action on his next turn and automatically succeeds on Balance checks to resist this maneuver until the start of his next turn — he must make this choice before seeing the result of his Balance check. You can target a particular creature with this maneuver once per round. Tunnel Fighter: when you are the target of at least one melee attack from at least one foe while standing with walls adjacent to you on two or more sides, you gain a +2 bonus to Armor Class due to cover (this does not stack with cover from another source), and you block line of sight for any spells or attacks made by your opponents, though your allies can fire through your space as normal. Door Sentinel: when you fight defensively while adjacent to or standing in a doorway, gate, or similar opening in a wall (you must be adjacent to or standing in each square across the doorway's width), for 1 round after you fight defensively you gain a +4 bonus on Strength or Dexterity checks to resist bull rush or trip attacks; any creature attempting a Tumble check to avoid your attack of opportunity takes a -5 penalty on the check, and any creature attempting to tumble through your space takes a -10 penalty on its check.",
    modifiers: [],
    special: "Tactical feat. A fighter can select Undermountain Tactics as one of his fighter bonus feats.",
    source: DS,
    sourceUrl: DS_PATH,
    ruleset: "core",
  },
  {
    id: "weapon-and-torch",
    name: "Weapon and Torch",
    category: "general",
    prerequisites: [],
    benefitSummary: "[Weapon style feat.] While fighting with a one-handed melee weapon and holding a lit torch in the other hand, you can make a special attack as a full-round action: attack once with your melee weapon, and if the attack hits, you also sweep your torch across your foe's eyes, dealing 1d6 points of fire damage and dazzling him for 1d4 rounds. You can also use this feat while wielding a lit lantern, a sunrod, or an everburning torch in your off hand, although items that do not give off heat do not deal fire damage.",
    modifiers: [],
    special: "Weapon style feat.",
    source: DS,
    sourceUrl: DS_PATH,
    ruleset: "core",
  },
];
