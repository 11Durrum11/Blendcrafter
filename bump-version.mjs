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

// Library count (Shaun, 2026-11-05): the boot splash shows the
// library's true size, counted from the catalog itself — never a
// hand-typed figure again. Every bump recounts and refreshes
// public/library-count.json (fetched by the splash at load) and
// the fallback figure baked into index.html. A failure here must
// never break the bump: warn and carry on.
try {
  const { build } = await import("esbuild");
  const entry = new URL("./library-count-entry.ts", import.meta.url).pathname;
  const bundlePath = new URL("./.library-count.bundle.mjs", import.meta.url).pathname;
  await build({
    entryPoints: [entry],
    bundle: true,
    format: "esm",
    alias: { "@": new URL("./src", import.meta.url).pathname },
    outfile: bundlePath,
    logLevel: "silent",
  });
  const { LIBRARY_COUNT } = await import(`${bundlePath}?t=${Date.now()}`);
  if (Number.isFinite(LIBRARY_COUNT) && LIBRARY_COUNT > 0) {
    writeFileSync(
      new URL("./public/library-count.json", import.meta.url),
      JSON.stringify({ entries: LIBRARY_COUNT }) + "\n",
    );
    const htmlPath = new URL("./index.html", import.meta.url);
    const html = readFileSync(htmlPath, "utf8");
    const updated = html.replace(
      /(<span id="boot-count">)[^<]*(<\/span>)/,
      `$1${LIBRARY_COUNT.toLocaleString("en-US")}$2`,
    );
    if (updated !== html) writeFileSync(htmlPath, updated);
    console.log(`library-count -> ${LIBRARY_COUNT}`);
  }
} catch (error) {
  console.warn(`library count skipped: ${error.message}`);
}
