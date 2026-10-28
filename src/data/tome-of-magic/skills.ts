import type { SkillDefinition } from "../../engine/types";

// Tome of Magic's one new skill: Truespeak, printed in Chapter 4 (Truename
// Magic), p. 195, with its full description on pp. 232–234 (Speaking an
// Utterance). Short mechanical summary in our own words. The source PDF is
// image-only, so this record was built from OCR of the relevant pages.
// Source PDF: /A POC PC related/5.Splat/Tome of Magic.pdf

const TOM = "Tome of Magic";
const TOM_PATH = "/A POC PC related/5.Splat/Tome of Magic.pdf";

export const TOME_OF_MAGIC_SKILLS: SkillDefinition[] = [
  {
    id: "truespeak",
    name: "Truespeak",
    ruleset: "core",
    keyAbility: "int",
    trainedOnly: true,
    armorCheckPenalty: false,
    description:
      "Speaking the language of creation. You make a Truespeak check to deliver an utterance or recitation: the DC is 15 + (2 × the target creature's CR), 15 + the object's caster level for an object, or similar per the printed rules; against your own personal truename the DC is based on your own Hit Dice and you gain a +4 bonus. The Law of Resistance raises the DC by 2 after each successful utterance against the same target in a day, and you can't take 10 or take 20 on Truespeak checks. Failing a check on a dangerous truename can have consequences (see pp. 232–234).",
    source: `${TOM}, p. 195 (description pp. 232–234)`,
    sourceUrl: TOM_PATH,
  },
];
