/**
 * Wondrous-item subcategories (Shaun, 2026-11-02: "Sort those magic
 * items into their categories"). The data keeps every wondrous item
 * under the single category "wondrous" — 1,274 of the 2,128 magic
 * items — so the Equipment step subdivides that one section by the
 * item's kind, classified from its name. Classification is a display
 * grouping only; the records themselves are untouched.
 */

export interface WondrousSubcategory {
  key: string;
  label: string;
}

export const WONDROUS_SUBCATEGORY_ORDER: WondrousSubcategory[] = [
  { key: "neck", label: "Amulets, Necklaces & Pendants" },
  { key: "insignia", label: "Badges, Banners & Insignia" },
  { key: "containers", label: "Bags, Bottles & Containers" },
  { key: "belts", label: "Belts & Girdles" },
  { key: "footwear", label: "Boots, Shoes & Footwear" },
  { key: "arms", label: "Bracers, Bracelets & Cuffs" },
  { key: "cloaks", label: "Cloaks, Robes & Vestments" },
  { key: "hands", label: "Gloves & Gauntlets" },
  { key: "head", label: "Hats, Helms, Masks & Headgear" },
  { key: "eyes", label: "Eyes, Goggles & Lenses" },
  { key: "figurines", label: "Figurines & Statues" },
  { key: "instruments", label: "Instruments" },
  { key: "books", label: "Books, Tomes & Manuals" },
  { key: "scrying", label: "Orbs, Mirrors & Crystal Balls" },
  { key: "stones", label: "Ioun Stones, Gems & Pearls" },
  { key: "teeth", label: "Teeth & Fangs" },
  { key: "dusts", label: "Dusts, Elixirs & Powders" },
  { key: "ropes", label: "Ropes, Chains & Cordage" },
  { key: "transport", label: "Carpets, Brooms & Transport" },
  { key: "lights", label: "Candles, Incense & Lights" },
  { key: "psionic", label: "Psionic Skins, Crowns & Third Eyes" },
  { key: "seals", label: "Scarabs, Seals & Glyphs" },
  { key: "tokens", label: "Tokens, Cubes & Charms" },
  { key: "other", label: "Other Wondrous Items" },
];

/** Ordered: the first matching rule wins, specific kinds before generic. */
const RULES: { key: string; pattern: RegExp }[] = [
  { key: "figurines", pattern: /\bfigurine|statue|statuette|effigy|\bidol\b/ },
  { key: "psionic", pattern: /psicrown|psionatrix|third eye|skin of\b/ },
  { key: "books", pattern: /\btome\b|\bmanual\b|\bbook\b|spellbook|codex|libram|grimoire/ },
  { key: "transport", pattern: /\bcarpet\b|\bbroom\b|folding boat|\bboat\b|chariot|\bsled\b|\brug\b/ },
  { key: "instruments", pattern: /\blute\b|\blyre\b|\bharp\b|mandolin|\bhorn\b|\bdrum|pipes\b|\bflute\b|chime|\bbell|fiddle|\bviol\b/ },
  { key: "dusts", pattern: /\bdust\b|elixir|powder|salve|ointment|unguent/ },
  { key: "ropes", pattern: /\brope\b|\bchain|\bcord\b|lasso|shackles|manacles/ },
  { key: "scrying", pattern: /\borb\b|mirror|crystal ball|\bsphere\b|\bglobe\b/ },
  { key: "stones", pattern: /ioun|\bstone\b|\bgem\b|\bpearl\b/ },
  { key: "teeth", pattern: /\btooth\b|\bteeth\b|\bfang\b/ },
  { key: "seals", pattern: /scarab|\bseal\b|glyph/ },
  { key: "tokens", pattern: /feather token|\btoken\b|\bcube\b|chronocharm|\bcharm\b/ },
  { key: "lights", pattern: /candle|incense|lantern|\blamp\b|brazier|\btorch\b/ },
  { key: "containers", pattern: /\bbag\b|haversack|\bbottle\b|\bflask\b|decanter|\bewer\b|\bjug\b|\bpouch\b|\bchest\b|quiver|\burn\b|\bsack\b|\bbox\b|\bcase\b|\bvial\b|basket|waterskin|gourd/ },
  { key: "neck", pattern: /amulet|necklace|pendant|periapt|choker|\btorc\b|medallion|\bmedal\b|brooch|phylactery|strand of|prayer beads|\bcollar\b|locket|hand of glory/ },
  { key: "insignia", pattern: /badge|insignia|\bbanner\b|standard of|\bemblem\b/ },
  { key: "belts", pattern: /\bbelt\b|girdle|\bsash\b|cincture|tailbands/ },
  { key: "footwear", pattern: /boots|slippers|sandals|horseshoes|\bshoes\b/ },
  { key: "arms", pattern: /bracer|bracelet|\bcuff\b|armband|vambrace/ },
  { key: "cloaks", pattern: /cloak|\brobe\b|mantle|\bvest\b|vestment|shroud|\bshirt\b|tabard|\bcape\b|ephod|wings of/ },
  { key: "hands", pattern: /gloves|gauntlet/ },
  { key: "eyes", pattern: /goggles|\blens\b|lenses|monocle|spectacles|eyes of/ },
  { key: "head", pattern: /\bhat\b|\bhelm\b|helmet|headband|circlet|\bcrown\b|\bmask\b|\bhood\b|\bveil\b|\bcap\b|diadem|headdress|coif|turban/ },
];

export function wondrousSubcategory(name: string): string {
  const n = name.toLowerCase();
  for (const rule of RULES) {
    if (rule.pattern.test(n)) return rule.key;
  }
  return "other";
}

export interface WondrousSubSection<T> {
  key: string;
  label: string;
  items: T[];
}

/** Group wondrous items into their subcategories, alphabetical inside each. */
export function groupWondrousSubcategories<T extends { name: string }>(items: T[]): WondrousSubSection<T>[] {
  const byKey = new Map<string, T[]>();
  for (const item of items) {
    const key = wondrousSubcategory(item.name);
    const list = byKey.get(key) ?? [];
    list.push(item);
    byKey.set(key, list);
  }
  const sections: WondrousSubSection<T>[] = [];
  for (const { key, label } of WONDROUS_SUBCATEGORY_ORDER) {
    const list = byKey.get(key);
    if (list && list.length > 0) {
      sections.push({ key, label, items: [...list].sort((a, b) => a.name.localeCompare(b.name)) });
    }
  }
  return sections;
}
