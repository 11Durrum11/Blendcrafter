// Bump Blendcrafter's version for a publish (Shaun's standing rule,
// 2026-11-04): EVERY push raises the simple display version by one
// point (20.2 -> 20.3 -> 20.4 ...) and refreshes the cache-busting
// stamp in public/version.json. Run this as part of EVERY push, in
// the same push as the change itself.
// Usage: node bump-version.mjs
import { readFileSync, writeFileSync } from "node:fs";

const path = new URL("./public/version.json", import.meta.url);
const current = JSON.parse(readFileSync(path, "utf8"));

let display = typeof current.display === "string" && current.display ? current.display : "20.2";
const dot = display.lastIndexOf(".");
if (dot > 0) {
  const minor = Number.parseInt(display.slice(dot + 1), 10);
  if (Number.isFinite(minor)) display = `${display.slice(0, dot)}.${minor + 1}`;
}

const now = new Date(
  new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" }),
);
const pad = (n) => String(n).padStart(2, "0");
const stamp =
  `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}` +
  `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

writeFileSync(path, JSON.stringify({ version: stamp, display }) + "\n");
console.log(`version.json -> ${stamp} | display: ${display}`);
