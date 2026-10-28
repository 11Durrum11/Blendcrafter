import type { RaceDefinition } from "@/engine/types";

// Fiendish Codex II race: the hellbred (p. 77), the book's one
// playable race, presented with a full "Hellbred Traits" list.
// A hellbred's size and speed come from the entry's sample
// character stat block (Medium, 30 feet) rather than the trait
// bullets, which do not restate them; likewise its ability
// modifiers come entirely from the Infernal Aspect choice (the
// base trait list prints none), so both aspects are described
// in full in the traits below and abilityModifiers is empty.
// Short mechanical summaries in our own words, cited to
// book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf

const FC2 = "Fiendish Codex II: Tyrants of the Nine Hells";
const FC2_PATH = "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf";

export const FIENDISH_CODEX_II_RACES: RaceDefinition[] = [
  {
    id: "hellbred",
    name: "Hellbred",
    ruleset: "core",
    source: `${FC2} — Hellbred (pp. 77–78)`,
    sourceUrl: FC2_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Hellbred"],
    abilityModifiers: {},
    favoredClass: "paladin",
    levelAdjustment: 0,
    skillBonuses: { intimidate: 2 },
    traits: [
      {
        key: "hellbred-traits",
        name: "Hellbred Traits",
        description:
          "Hellbred have the following racial traits: Infernal Mien — a +2 racial bonus on Intimidate checks (recorded above). Evil Exception (Ex) — regardless of alignment or class restrictions, a hellbred can cast spells with the evil descriptor, use evil magic items, and take and use feats that have the evil descriptor without negative consequences; in addition, a paladin hellbred does not incur the normal penalties for committing occasional minor evil acts. Hellbound (Su) — a dead hellbred cannot be returned to life by any method short of resurrection or a more powerful effect, and cannot be reanimated as intelligent undead (only as mindless undead). Bonus feat: Devil's Favor (see Chapter 3 of this book). Automatic language: Infernal.",
        category: "special-quality",
        source: `${FC2} — Hellbred (p. 78)`,
        sourceUrl: FC2_PATH,
      },
      {
        key: "hellbred-infernal-aspect",
        name: "Infernal Aspect (choose one)",
        description:
          "Before taking the character's first class level, choose one aspect; it cannot later be changed. Body (Ex): the hellbred gains +2 Con and –2 Int (not recorded in abilityModifiers above so the choice stays visible), a +4 bonus on saving throws against poison, and a bonus devil-touched feat upon attaining 4 Hit Dice and again upon attaining 14 Hit Dice. Spirit (Su): the hellbred's soul is reborn in its new body; it gains +2 Cha and –2 Con, darkvision out to 30 feet, and a +2 bonus on Sense Motive checks; at 6 Hit Dice the darkvision improves to 60 feet, at 9 Hit Dice to 120 feet, at 12 Hit Dice it sees in magical darkness, and at 15 Hit Dice it gains telepathy out to 100 feet. Favored class: paladin — a hellbred paladin can leave the class and return to it, and a hellbred paladin is generally evil, unlike other races whose paladins are usually lawful good.",
        category: "special-quality",
        source: `${FC2} — Hellbred (p. 78)`,
        sourceUrl: FC2_PATH,
      },
    ],
  },
];
