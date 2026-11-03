import type { CharacterBuild } from "@/engine/types";
import type { TogglePrefs } from "@/lib/toggle-prefs";

/**
 * Build deep links — the Blendcrafter side of the APOC hub connection
 * (Shaun's order, 2026-10-28: "tracker link opens the actual build").
 *
 * A character's whole build is packed into a link:
 *   https://11durrum11.github.io/Blendcrafter/?build=<token>
 * The token is the same payload shape as the JSON export
 * ({ app: "blendcrafter", version: 1, build }), gzip-compressed when the
 * platform supports it and base64url-encoded. Token prefix "z" = gzip,
 * "j" = plain JSON (fallback). The token rides in the QUERY STRING, never
 * the hash — the app's router owns the hash (wouter useHashLocation).
 *
 * The Campaign Tracker stores this link on the character's record; opening
 * it loads the exact build here. Decoding never throws: a bad token
 * resolves to null and the app starts normally.
 */

export const SHARE_BASE_URL = "https://11durrum11.github.io/Blendcrafter/";

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlToBytes(text: string): Uint8Array {
  const b64 = text.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64 + "=".repeat((4 - (b64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function pipeThrough(data: Uint8Array, transform: TransformStream): Promise<Uint8Array> {
  const stream = new Blob([data as BlobPart]).stream().pipeThrough(transform);
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

export async function encodeBuildToken(build: CharacterBuild): Promise<string> {
  const payload = JSON.stringify({ app: "blendcrafter", version: 1, build });
  const raw = new TextEncoder().encode(payload);
  try {
    return "z" + bytesToBase64Url(await pipeThrough(raw, new CompressionStream("gzip")));
  } catch {
    return "j" + bytesToBase64Url(raw);
  }
}

export async function buildShareUrl(build: CharacterBuild): Promise<string> {
  return `${SHARE_BASE_URL}?build=${await encodeBuildToken(build)}`;
}

export async function decodeBuildToken(token: string): Promise<CharacterBuild | null> {
  try {
    if (!token || (token[0] !== "z" && token[0] !== "j")) return null;
    const bytes = base64UrlToBytes(token.slice(1));
    const raw =
      token[0] === "z" ? await pipeThrough(bytes, new DecompressionStream("gzip")) : bytes;
    const payload: unknown = JSON.parse(new TextDecoder().decode(raw));
    if (
      typeof payload !== "object" ||
      payload === null ||
      (payload as { app?: unknown }).app !== "blendcrafter" ||
      typeof (payload as { build?: unknown }).build !== "object" ||
      (payload as { build?: unknown }).build === null
    ) {
      return null;
    }
    return (payload as { build: CharacterBuild }).build;
  } catch {
    return null;
  }
}

/**
 * Settings links — carrying Shaun's toggle state between his devices
 * (2026-11-02). Toggle prefs live in each browser's own localStorage,
 * so the phone and the computer drift apart: he turned races off on
 * one device and the other still showed all of them. A settings link
 * packs the whole TogglePrefs (rulesets, house rules, and every
 * turned-off list) into the same token format as a build link;
 * opening it on another device applies them there.
 */
export async function encodeSettingsToken(prefs: TogglePrefs): Promise<string> {
  const payload = JSON.stringify({ app: "blendcrafter", version: 1, settings: prefs });
  const raw = new TextEncoder().encode(payload);
  try {
    return "z" + bytesToBase64Url(await pipeThrough(raw, new CompressionStream("gzip")));
  } catch {
    return "j" + bytesToBase64Url(raw);
  }
}

export async function settingsShareUrl(prefs: TogglePrefs): Promise<string> {
  return `${SHARE_BASE_URL}?settings=${await encodeSettingsToken(prefs)}`;
}

export async function decodeSettingsToken(token: string): Promise<TogglePrefs | null> {
  try {
    if (!token || (token[0] !== "z" && token[0] !== "j")) return null;
    const bytes = base64UrlToBytes(token.slice(1));
    const raw =
      token[0] === "z" ? await pipeThrough(bytes, new DecompressionStream("gzip")) : bytes;
    const payload: unknown = JSON.parse(new TextDecoder().decode(raw));
    if (
      typeof payload !== "object" ||
      payload === null ||
      (payload as { app?: unknown }).app !== "blendcrafter" ||
      typeof (payload as { settings?: unknown }).settings !== "object" ||
      (payload as { settings?: unknown }).settings === null
    ) {
      return null;
    }
    return (payload as { settings: TogglePrefs }).settings;
  } catch {
    return null;
  }
}

/** Extract the settings token from a query string. */
export function settingsTokenFromSearch(search: string): string | null {
  try {
    return new URLSearchParams(search).get("settings");
  } catch {
    return null;
  }
}

/** Extract the build token from a query string (e.g. window.location.search). */
export function buildTokenFromSearch(search: string): string | null {
  try {
    return new URLSearchParams(search).get("build");
  } catch {
    return null;
  }
}

/** Clipboard copy with the legacy textarea fallback. Resolves false only if both fail. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      return ok;
    } catch {
      return false;
    }
  }
}
