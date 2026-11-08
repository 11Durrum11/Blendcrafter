import {
  Children,
  Fragment,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ComponentType,
  type PointerEvent as ReactPointerEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { ArrowLeftRight, ArrowUpDown, GripVertical, Lock, LockOpen, Pencil, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Movable pieces (Shaun, 2026-11-07, voice call): the treatment he
 * ordered for the VTT goes on "pretty much everything" — Blendcrafter
 * included. Every individual piece of the page can be:
 *
 *   - MOVED: press and drag its six-dot grip; it swaps places with
 *     the piece it is dragged onto, inside its own zone.
 *   - RESIZED: drag its right edge (width) or bottom-right corner
 *     (width + height) to make it larger or smaller.
 *   - RE-FLOWED: a piece's contents follow its shape — narrow or
 *     tall pieces run as a single vertical column, wide pieces
 *     spread into rows (the flip button forces either way).
 *   - LOCKED: each piece has its own lock; a locked piece cannot
 *     be dragged or resized, but everything inside it still works.
 *
 * One reusable system: a page area is a ZONE (a flex or grid
 * container), each block inside it is a PIECE wrapped by <Piece>
 * (directly, through <Zone>, or through withPieces() for the step
 * pages' stacked cards). Positions, sizes, orientations and locks
 * persist PER DEVICE in localStorage only — layout is personal and
 * is never written to the shared character shelf. A Reset layout
 * button in the header restores the shipped arrangement and clears
 * every saved position, size and lock (it also resets the header
 * boxes' own order, which predates this system).
 *
 * Phone rule: pieces live in the normal document flow and start in
 * the shipped layout on every screen size; dragging starts only
 * from a piece's own grip, so page scrolling and taps are never
 * hijacked, and no content is ever taken out of reach.
 *
 * v20.74 add-ons (Shaun, voice call 2026-11-07 ~17:31–17:35):
 *
 *   - DM / PLAYER SPLIT across the whole treatment: the treatment
 *     is DM-only. A device is armed as the DM's by opening the site
 *     once with ?dm=1 in the link (the same arming pattern as the
 *     Weather Engine's DM workspace); the arming is remembered per
 *     device. Player devices are never armed: they see NO grips,
 *     NO resize handles, NO lock toggles, NO Reset layout button,
 *     NO edit affordances — content exactly in its shipped layout.
 *     (?dm=0 disarms a device again.)
 *   - EDITABLE TEXT: everything that got the treatment is editable
 *     in place — labels, headers, titles, text blocks, button
 *     names. Double-click a text inside a piece to rewrite it; the
 *     control underneath still does its job once editing is locked
 *     again. Clearing an edit back to blank restores the original.
 *   - EDIT LOCK: editing sits behind one toggle in the header,
 *     beside Reset layout. DEFAULT IS LOCKED — no text is
 *     editable and the page behaves exactly as normal. The toggle
 *     itself only exists on DM-armed devices, and its state
 *     persists per device.
 *   - Text edits are SHARED: they save to the site's shared store
 *     (the same Supabase project's site_settings table the whole
 *     APOC ecosystem uses, one row: blendcrafter_text_overrides),
 *     so the whole table sees the DM's words. A per-device
 *     localStorage copy loads instantly and is the fallback if the
 *     shared store is unreachable.
 *   - Campaign artwork is EXEMPT: images are never gated, never
 *     moved, never edited — open viewing for everyone, hands-off.
 *     The text engine below never touches img/svg/canvas/picture
 *     elements or anything inside an artwork container.
 *   - Live/computed values (numbers and labels the app recomputes)
 *     are not durably editable: their original text changes, so an
 *     override keyed to the old text simply stops applying.
 */

export interface PieceState {
  /** Width as a percentage of the zone (22–100). */
  w?: number;
  /** Explicit height in px; the piece scrolls internally past it. */
  h?: number;
  /** Forced content flow; derived from the resized shape otherwise. */
  orient?: "v" | "h";
  lock?: boolean;
}

export interface ZoneState {
  order?: string[];
  pieces?: Record<string, PieceState>;
}

export type LayoutState = Record<string, ZoneState>;

const LAYOUT_STORAGE_KEY = "blendcrafter:piece-layout-v1";
const EMPTY_LAYOUT: LayoutState = {};

function loadLayout(): LayoutState {
  try {
    const raw = globalThis.localStorage?.getItem(LAYOUT_STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return parsed as LayoutState;
  } catch {
    return {};
  }
}

/* ==================================================================
 * DM mode, the Edit Lock, and shared editable text (v20.74).
 * ================================================================== */

const DM_STORAGE_KEY = "blendcrafter:dm-mode-v1";
const EDIT_UNLOCKED_STORAGE_KEY = "blendcrafter:edit-unlocked-v1";
const TEXT_OVERRIDES_STORAGE_KEY = "blendcrafter:text-overrides-v1";

const DM_SESSION_KEY = "blendcrafter:dm-mode-session";
const JUST_ARMED_KEY = "blendcrafter:just-armed-v1";

/** Read the dm value out of the current URL, wherever it rode in:
 * the query string, the hash route's own query, or — belt and
 * braces, for webviews that mangle either — anywhere in the href. */
function dmParamFromUrl(): string | null {
  try {
    const loc = globalThis.location;
    if (!loc) return null;
    if (loc.search) {
      const v = new URLSearchParams(loc.search).get("dm");
      if (v) return v;
    }
    if (loc.hash && loc.hash.includes("?")) {
      const v = new URLSearchParams(loc.hash.split("?")[1]).get("dm");
      if (v) return v;
    }
    const m = /[?&#]dm=([^&#]*)/.exec(loc.href ?? "");
    if (m) return decodeURIComponent(m[1]);
    return null;
  } catch {
    return null;
  }
}

/** Storage writes/removals that can never throw: a blocked or full
 * store must not take the arming decision itself down with it. */
function dmStoreWrite() {
  try { globalThis.localStorage?.setItem(DM_STORAGE_KEY, "1"); } catch { /* session-only arming */ }
  try { globalThis.sessionStorage?.setItem(DM_SESSION_KEY, "1"); } catch { /* ignore */ }
}
function dmStoreClear() {
  try { globalThis.localStorage?.removeItem(DM_STORAGE_KEY); } catch { /* ignore */ }
  try { globalThis.sessionStorage?.removeItem(DM_SESSION_KEY); } catch { /* ignore */ }
}
function dmStoreRead(): boolean {
  try {
    if (globalThis.localStorage?.getItem(DM_STORAGE_KEY) === "1") return true;
  } catch { /* fall through to the session store */ }
  try {
    return globalThis.sessionStorage?.getItem(DM_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

/**
 * Is this device armed as the DM's? Two arming paths (Shaun,
 * 2026-11-08 — the link alone proved fragile on his phone: it can
 * land in a different browser than the one he plays in, and the
 * old build let a storage error silently swallow the arm):
 *  1. The link: open the site once with ?dm=1 (?dm=0 disarms);
 *     the device remembers it from then on. An explicit ?dm in
 *     the URL now decides the session EVEN IF persisting it
 *     fails — the write can no longer veto the arm.
 *  2. The header's DM button: press-and-hold arms the device
 *     from inside whichever browser is showing the page, so the
 *     right browser is always the one that gets armed.
 * Player devices that never arm show no treatment controls; the
 * one hint that arming exists is that small DM button.
 */
export function isDmArmed(): boolean {
  const dm = dmParamFromUrl();
  if (dm === "1" || dm === "on" || dm === "true") {
    dmStoreWrite();
    return true;
  }
  if (dm === "0" || dm === "off" || dm === "false") {
    dmStoreClear();
    return false;
  }
  return dmStoreRead();
}

export interface TextOverride {
  /** The shipped text, exactly as the page renders it by default. */
  from: string;
  /** The DM's replacement text. */
  to: string;
}

export type TextOverrides = Record<string, TextOverride>;

function loadLocalOverrides(): TextOverrides {
  try {
    const raw = globalThis.localStorage?.getItem(TEXT_OVERRIDES_STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return parsed as TextOverrides;
  } catch {
    return {};
  }
}

function saveLocalOverrides(overrides: TextOverrides): void {
  try {
    if (Object.keys(overrides).length === 0) globalThis.localStorage?.removeItem(TEXT_OVERRIDES_STORAGE_KEY);
    else globalThis.localStorage?.setItem(TEXT_OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
  } catch {
    // Storage unavailable: edits last for this visit (and still save shared).
  }
}

/* The shared store: the APOC ecosystem's Supabase project, the same
 * publishable (public by design) key the group shelf ships in
 * src/lib/shared-characters.ts. site_settings is the key/value table
 * the tracker and VTT already share state through. */
const SHARED_SETTINGS_URL = "https://gjvebpbxggmumtslidej.supabase.co/rest/v1/site_settings";
const SHARED_SETTINGS_KEY = "sb_publishable_lHurlKltZPfNQ5VviUv90g_yiQ7xZSl";
const OVERRIDES_ROW_KEY = "blendcrafter_text_overrides";

function sharedHeaders(extra?: Record<string, string>): Record<string, string> {
  const h: Record<string, string> = {};
  h["apikey"] = SHARED_SETTINGS_KEY;
  h["Authorization"] = "Bearer " + SHARED_SETTINGS_KEY;
  return { ...h, ...extra };
}

async function fetchSharedOverrides(): Promise<TextOverrides | null> {
  try {
    const response = await fetch(`${SHARED_SETTINGS_URL}?key=eq.${OVERRIDES_ROW_KEY}&select=value`, {
      headers: sharedHeaders(),
    });
    if (!response.ok) return null;
    const rows = (await response.json()) as Array<{ value?: { overrides?: unknown } }>;
    const raw = rows?.[0]?.value?.overrides;
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
    const clean: TextOverrides = {};
    for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
      const o = v as { from?: unknown; to?: unknown };
      if (o && typeof o.from === "string" && typeof o.to === "string") clean[k] = { from: o.from, to: o.to };
    }
    return clean;
  } catch {
    return null;
  }
}

async function saveSharedOverrides(overrides: TextOverrides): Promise<void> {
  try {
    await fetch(SHARED_SETTINGS_URL, {
      method: "POST",
      headers: sharedHeaders({
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      }),
      body: JSON.stringify({
        key: OVERRIDES_ROW_KEY,
        value: { overrides },
        updated_at: new Date().toISOString(),
      }),
    });
  } catch {
    // Fail soft, like the group shelf: the local copy holds the edit
    // and the next edit retries the shared save.
  }
}

/* ---------- the in-place text engine ----------
 * The engine walks the text leaves inside every treated piece
 * ([data-piece] shells). A leaf is a plain text-bearing element
 * with no element children. Each leaf gets a stable key —
 * zone / piece / ordinal of its original text within the piece —
 * and an override applies only while the leaf still shows the
 * original (or carries it in data-bc-orig), so React re-renders
 * and computed values are never fought. Artwork is untouchable:
 * image-like elements and artwork containers are skipped whole. */

const NON_TEXT_TAGS = new Set([
  "SCRIPT", "STYLE", "NOSCRIPT", "INPUT", "TEXTAREA", "SELECT", "OPTION",
  "IMG", "SVG", "CANVAS", "PICTURE", "VIDEO", "AUDIO", "BR", "HR", "IFRAME",
]);

function applyTextOverrides(overrides: TextOverrides, editable: boolean): void {
  if (typeof document === "undefined") return;
  const pieces = document.querySelectorAll<HTMLElement>("[data-piece]");
  pieces.forEach((piece) => {
    const zoneEl = piece.closest<HTMLElement>("[data-piece-zone]");
    const zoneId = zoneEl?.dataset.pieceZone ?? "zone";
    const pieceId = piece.dataset.piece ?? "piece";
    const seen = new Map<string, number>();
    const leaves = piece.querySelectorAll<HTMLElement>("*");
    leaves.forEach((el) => {
      if (el.children.length > 0) return;
      if (NON_TEXT_TAGS.has(el.tagName)) return;
      if (el.closest("[data-piece-chrome], [role='dialog'], [data-artwork], [data-bc-editing]")) return;
      const text = (el.textContent ?? "").trim();
      if (!text || text.length > 240) return;
      const identity = el.dataset.bcOrig ?? text;
      const n = seen.get(identity) ?? 0;
      seen.set(identity, n + 1);
      const key = `${zoneId}/${pieceId}#${n}:${identity}`;
      el.dataset.bcKey = key;
      const ov = overrides[key];
      if (ov) {
        if (text === ov.from || el.dataset.bcOrig === ov.from) {
          el.dataset.bcOrig = ov.from;
          if (text !== ov.to) el.textContent = ov.to;
        }
      } else if (el.dataset.bcOrig && text !== el.dataset.bcOrig) {
        // The override is gone (reverted here or on another device)
        // but this leaf still shows replacement text and React has
        // not repainted it: put the shipped words back.
        el.textContent = el.dataset.bcOrig;
        delete el.dataset.bcOrig;
      }
      if (editable) el.setAttribute("data-bc-editable", "");
      else el.removeAttribute("data-bc-editable");
    });
  });
}

const EDIT_STYLE_ID = "bc-edit-style";
/* Treatment outlines are DARK BLUE (Shaun, 2026-11-07 ~18:02 —
 * his corrected word; dark gray was first, dark blue governs). */
const TREATMENT_BLUE = "#1e3a8a";
const EDIT_CSS = `
[data-bc-editable] { outline: 1px dashed ${TREATMENT_BLUE}; outline-offset: 1px; cursor: text; }
[data-bc-editable][contenteditable="true"] { outline: 2px solid ${TREATMENT_BLUE}; outline-offset: 1px; background: hsl(var(--background)); cursor: text; }
`;

interface PiecesApi {
  layout: LayoutState;
  pieceState: (zoneId: string, pieceId: string) => PieceState;
  setPiece: (zoneId: string, pieceId: string, patch: Partial<PieceState>) => void;
  orderFor: (zoneId: string, ids: string[]) => string[];
  swapPieces: (zoneId: string, a: string, b: string, allIds: string[]) => void;
  resetAll: () => void;
  /** This device is armed as the DM's (see isDmArmed). */
  dm: boolean;
  /** Arm this device as the DM's (persists; see ArmDmButton). */
  armDm: () => void;
  /** Disarm this device (Exit DM in the header controls). */
  disarmDm: () => void;
  /** The Edit Lock: true = editing unlocked (DM devices only). */
  editUnlocked: boolean;
  setEditUnlocked: (v: boolean) => void;
  overrides: TextOverrides;
  setTextOverride: (key: string, next: TextOverride | null) => void;
}

const PiecesContext = createContext<PiecesApi | null>(null);

export function PiecesProvider({ children }: { children: ReactNode }) {
  const [dm, setDm] = useState<boolean>(() => isDmArmed());
  const { toast } = useToast();
  const armDm = useCallback(() => {
    dmStoreWrite();
    setDm(true);
  }, []);
  const disarmDm = useCallback(() => {
    dmStoreClear();
    setDm(false);
  }, []);
  // Confirmation after a hold-to-arm reload: the arm itself is
  // silent by design everywhere else, and a silent arm is how
  // this fault hid — say it once, plainly.
  useEffect(() => {
    try {
      if (globalThis.sessionStorage?.getItem(JUST_ARMED_KEY) === "1") {
        globalThis.sessionStorage?.removeItem(JUST_ARMED_KEY);
        toast({
          title: "DM mode is on for this device",
          description: "Pieces can be moved now. Text editing stays behind the Edit Lock in the header.",
        });
      }
    } catch {
      // No session store, no toast — the chrome appearing is the signal.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [layout, setLayout] = useState<LayoutState>(loadLayout);
  const [editUnlocked, setEditUnlockedState] = useState<boolean>(() => {
    try {
      return globalThis.localStorage?.getItem(EDIT_UNLOCKED_STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [overrides, setOverrides] = useState<TextOverrides>(loadLocalOverrides);
  const sharedSaveTimer = useRef<number | null>(null);

  useEffect(() => {
    try {
      if (Object.keys(layout).length === 0) globalThis.localStorage?.removeItem(LAYOUT_STORAGE_KEY);
      else globalThis.localStorage?.setItem(LAYOUT_STORAGE_KEY, JSON.stringify(layout));
    } catch {
      // Storage unavailable: the arrangement lasts for this visit.
    }
  }, [layout]);

  const setEditUnlocked = useCallback((v: boolean) => {
    setEditUnlockedState(v);
    try {
      if (v) globalThis.localStorage?.setItem(EDIT_UNLOCKED_STORAGE_KEY, "1");
      else globalThis.localStorage?.removeItem(EDIT_UNLOCKED_STORAGE_KEY);
    } catch {
      // The toggle still works for this visit.
    }
  }, []);

  // Shared text overrides: load the table's words once on mount.
  // Local edits made before the fetch lands win per key; everything
  // else takes the shared version, so every device converges.
  useEffect(() => {
    let cancelled = false;
    void fetchSharedOverrides().then((shared) => {
      if (cancelled || !shared) return;
      setOverrides((prev) => {
        const merged = { ...shared, ...prev };
        saveLocalOverrides(merged);
        return merged;
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const setTextOverride = useCallback(
    (key: string, next: TextOverride | null) => {
      if (!dm) return;
      const map = { ...overrides };
      if (next) map[key] = next;
      else delete map[key];
      setOverrides(map);
      saveLocalOverrides(map);
      if (sharedSaveTimer.current) window.clearTimeout(sharedSaveTimer.current);
      sharedSaveTimer.current = window.setTimeout(() => {
        void saveSharedOverrides(map);
      }, 500);
    },
    [dm, overrides],
  );

  // The text engine: apply overrides (every device — the table sees
  // the DM's words) and, on DM devices with editing unlocked, mark
  // the editable leaves. A MutationObserver re-applies after React
  // re-renders a page; it disconnects during its own pass so it
  // never chases itself.
  const editableNow = dm && editUnlocked;
  useEffect(() => {
    if (typeof document === "undefined" || !document.body) return;
    let raf = 0;
    const observer = new MutationObserver(() => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        observer.disconnect();
        applyTextOverrides(overrides, editableNow);
        observer.observe(document.body, { subtree: true, childList: true, characterData: true });
      });
    });
    applyTextOverrides(overrides, editableNow);
    observer.observe(document.body, { subtree: true, childList: true, characterData: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [overrides, editableNow]);

  // Editable-leaf outlines exist only while editing is unlocked.
  useEffect(() => {
    if (typeof document === "undefined") return;
    let style = document.getElementById(EDIT_STYLE_ID) as HTMLStyleElement | null;
    if (editableNow) {
      if (!style) {
        style = document.createElement("style");
        style.id = EDIT_STYLE_ID;
        style.textContent = EDIT_CSS;
        document.head.appendChild(style);
      }
    } else if (style) {
      style.remove();
    }
  }, [editableNow]);

  // Double-click an editable leaf to rewrite it in place. While
  // editing is unlocked, clicks that land directly on the TEXT of a
  // control are held back, so renaming a button never fires it;
  // the control itself (its padding, its icon) still works, and
  // locking editing restores completely normal behavior.
  useEffect(() => {
    if (!editableNow || typeof document === "undefined") return;
    const onDblClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.("[data-bc-editable]") as HTMLElement | null;
      if (!el || el.isContentEditable) return;
      const key = el.dataset.bcKey;
      if (!key) return;
      const from = el.dataset.bcOrig ?? overrides[key]?.from ?? (el.textContent ?? "").trim();
      e.preventDefault();
      e.stopPropagation();
      el.dataset.bcEditing = "1";
      el.contentEditable = "true";
      el.focus();
      try {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      } catch {
        // Selection is a nicety; the editor is open either way.
      }
      let done = false;
      const finish = (commit: boolean) => {
        if (done) return;
        done = true;
        el.contentEditable = "false";
        delete el.dataset.bcEditing;
        el.removeEventListener("blur", onBlur);
        el.removeEventListener("keydown", onKey);
        if (commit) {
          const to = (el.textContent ?? "").trim().replace(/\s+/g, " ");
          if (!to || to === from) {
            // Blank or unchanged: the override goes away and the
            // shipped words come back.
            setTextOverride(key, null);
            el.textContent = from;
            delete el.dataset.bcOrig;
          } else {
            el.dataset.bcOrig = from;
            setTextOverride(key, { from, to });
          }
        } else {
          el.textContent = overrides[key]?.to ?? from;
        }
      };
      const onBlur = () => finish(true);
      const onKey = (ke: KeyboardEvent) => {
        if (ke.key === "Enter") {
          ke.preventDefault();
          finish(true);
          el.blur();
        } else if (ke.key === "Escape") {
          ke.preventDefault();
          finish(false);
          el.blur();
        }
      };
      el.addEventListener("blur", onBlur);
      el.addEventListener("keydown", onKey);
    };
    const onClickCapture = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.("[data-bc-editable]") as HTMLElement | null;
      if (!el || el.isContentEditable) return;
      // Bug sweep 2026-11-08: navigation must keep working while
      // editing is unlocked — holding these clicks back stranded
      // the user on the current section (the click only selected
      // the control's text). Tabs and the section/step navigation
      // controls are exempt; renaming one still works by
      // double-clicking its text once it is the active control.
      // (The section toggles are plain buttons, not tabs — the
      // first fix only exempted [role='tab'] and they stayed held.)
      if (
        el.closest(
          "[role='tab'], [data-testid^='tab-step-'], [data-testid^='step-group-'], [data-testid='button-prev-step'], [data-testid='button-next-step']",
        )
      ) {
        return;
      }
      if (el.closest("button, a, [role='button'], [role='menuitem'], summary")) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    document.addEventListener("dblclick", onDblClick, true);
    document.addEventListener("click", onClickCapture, true);
    return () => {
      document.removeEventListener("dblclick", onDblClick, true);
      document.removeEventListener("click", onClickCapture, true);
    };
  }, [editableNow, overrides, setTextOverride]);

  // Players see the shipped layout: the saved arrangement only
  // exists on DM-armed devices.
  const visibleLayout = dm ? layout : EMPTY_LAYOUT;

  const pieceState = useCallback(
    (zoneId: string, pieceId: string) => visibleLayout[zoneId]?.pieces?.[pieceId] ?? {},
    [visibleLayout],
  );

  const setPiece = useCallback(
    (zoneId: string, pieceId: string, patch: Partial<PieceState>) => {
      if (!dm) return;
      setLayout((prev) => {
        const zone = prev[zoneId] ?? {};
        const pieces = { ...(zone.pieces ?? {}) };
        pieces[pieceId] = { ...(pieces[pieceId] ?? {}), ...patch };
        return { ...prev, [zoneId]: { ...zone, pieces } };
      });
    },
    [dm],
  );

  const orderFor = useCallback(
    (zoneId: string, ids: string[]) => {
      const stored = visibleLayout[zoneId]?.order ?? [];
      const known = stored.filter((id) => ids.includes(id));
      const missing = ids.filter((id) => !known.includes(id));
      return [...known, ...missing];
    },
    [visibleLayout],
  );

  const swapPieces = useCallback(
    (zoneId: string, a: string, b: string, allIds: string[]) => {
      if (!dm) return;
      setLayout((prev) => {
        const zone = prev[zoneId] ?? {};
        const stored = zone.order ?? [];
        const order = [...stored.filter((id) => allIds.includes(id)), ...allIds.filter((id) => !stored.includes(id))];
        const ia = order.indexOf(a);
        const ib = order.indexOf(b);
        if (ia === -1 || ib === -1 || ia === ib) return prev;
        [order[ia], order[ib]] = [order[ib], order[ia]];
        return { ...prev, [zoneId]: { ...zone, order } };
      });
    },
    [dm],
  );

  const resetAll = useCallback(() => {
    setLayout({});
    try {
      globalThis.localStorage?.removeItem(LAYOUT_STORAGE_KEY);
    } catch {
      // Nothing to clear.
    }
  }, []);

  const api = useMemo<PiecesApi>(
    () => ({
      layout: visibleLayout,
      pieceState,
      setPiece,
      orderFor,
      swapPieces,
      resetAll,
      dm,
      armDm,
      disarmDm,
      editUnlocked,
      setEditUnlocked,
      overrides,
      setTextOverride,
    }),
    [visibleLayout, pieceState, setPiece, orderFor, swapPieces, resetAll, dm, armDm, disarmDm, editUnlocked, setEditUnlocked, overrides, setTextOverride],
  );

  return <PiecesContext.Provider value={api}>{children}</PiecesContext.Provider>;
}

export function usePieces(): PiecesApi {
  const ctx = useContext(PiecesContext);
  if (!ctx) throw new Error("usePieces must be used inside PiecesProvider");
  return ctx;
}

/** The header's Reset layout button: clears the piece layout and,
 * through onResetExtra, the header boxes' older saved order too.
 * DM devices only — players never see a layout control. */
export function ResetLayoutButton({ onResetExtra }: { onResetExtra?: () => void }) {
  const { resetAll, dm } = usePieces();
  if (!dm) return null;
  return (
    <Button
      variant="ghost"
      size="sm"
      className="px-1.5 text-muted-foreground sm:px-2"
      onClick={() => {
        resetAll();
        onResetExtra?.();
      }}
      title="Put every movable piece back in its shipped place"
      data-testid="button-reset-layout"
    >
      <RotateCcw className="h-3.5 w-3.5 sm:mr-1.5" />
      <span className="hidden sm:inline">Reset layout</span>
    </Button>
  );
}

/**
 * The DM's header controls: the Edit Lock toggle with Reset layout
 * beside it, in one stable place. Renders NOTHING on a player
 * device — the toggle, the reset, and every other scrap of the
 * treatment are DM-only. The Edit Lock defaults to LOCKED on every
 * device (editing off, page exactly normal) and its state persists
 * per device; flipping it on is what makes double-click text
 * editing live.
 */
/** The header's arm switch, shown only on devices that are NOT
 * armed (Shaun, 2026-11-08): press-and-hold for a moment arms
 * THIS device from inside whichever browser is showing the page
 * — the fix for the ?dm=1 link landing in a different browser
 * than the one he plays in. A plain tap does nothing, so it
 * can't be armed by accident; holding fills the button dark
 * blue and the label says what's happening. Arming persists,
 * then the page reloads so every gate (piece chrome, header-box
 * dragging, the DM controls) wakes up together, and the
 * provider's just-armed toast confirms it out loud. */
export function ArmDmButton() {
  const { dm, armDm } = usePieces();
  const [holding, setHolding] = useState(false);
  const timer = useRef<number | null>(null);
  if (dm) return null;
  const cancel = () => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
    setHolding(false);
  };
  const start = () => {
    if (timer.current !== null) return;
    setHolding(true);
    timer.current = window.setTimeout(() => {
      timer.current = null;
      armDm();
      try { globalThis.sessionStorage?.setItem(JUST_ARMED_KEY, "1"); } catch { /* toast is a bonus */ }
      try { globalThis.location?.reload(); } catch { /* state already armed */ }
    }, 1200);
  };
  return (
    <Button
      variant="ghost"
      size="sm"
      className="touch-none select-none px-1.5 [-webkit-touch-callout:none] sm:px-2"
      onPointerDown={start}
      onPointerUp={cancel}
      onPointerLeave={cancel}
      onPointerCancel={cancel}
      onContextMenu={(e) => e.preventDefault()}
      onKeyDown={(e) => { if ((e.key === " " || e.key === "Enter") && !e.repeat) start(); }}
      onKeyUp={(e) => { if (e.key === " " || e.key === "Enter") cancel(); }}
      onClick={(e) => e.preventDefault()}
      title="Press and hold to turn on DM mode on this device — movable pieces and text editing. A plain tap does nothing."
      data-testid="button-arm-dm"
    >
      <Lock className={holding ? "h-3.5 w-3.5 text-[#1e3a8a] sm:mr-1.5" : "h-3.5 w-3.5 text-muted-foreground sm:mr-1.5"} />
      <span className="hidden sm:inline">{holding ? "Hold…" : "DM"}</span>
    </Button>
  );
}

export function DmControls({ onResetExtra }: { onResetExtra?: () => void }) {
  const { dm, editUnlocked, setEditUnlocked, disarmDm } = usePieces();
  if (!dm) return null;
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="px-1.5 sm:px-2"
        aria-pressed={editUnlocked}
        onClick={() => setEditUnlocked(!editUnlocked)}
        title={
          editUnlocked
            ? "Editing is ON: double-click any text in a piece to change the words. Click to lock editing again."
            : "Editing is locked, so no words can change by accident. Click to unlock text editing (DM only)."
        }
        data-testid="button-edit-lock"
      >
        {editUnlocked ? (
          <LockOpen className="h-3.5 w-3.5 text-[#1e3a8a] sm:mr-1.5" />
        ) : (
          <Lock className="h-3.5 w-3.5 text-muted-foreground sm:mr-1.5" />
        )}
        <span className="hidden sm:inline">{editUnlocked ? "Editing on" : "Edit locked"}</span>
      </Button>
      <ResetLayoutButton onResetExtra={onResetExtra} />
      <Button
        variant="ghost"
        size="sm"
        className="px-1.5 sm:px-2"
        onClick={() => {
          disarmDm();
          try { globalThis.location?.reload(); } catch { /* state already disarmed */ }
        }}
        title="Turn DM mode off on this device: the movable pieces and editing controls go away until it's armed again."
        data-testid="button-exit-dm"
      >
        <LockOpen className="h-3.5 w-3.5 text-muted-foreground sm:mr-1.5" />
        <span className="hidden sm:inline">Exit DM</span>
      </Button>
    </>
  );
}

const ZoneIdContext = createContext<string | null>(null);

interface PieceProps {
  pieceId: string;
  /** "full" starts the piece on its own row (the stacked pages);
   * "auto" keeps its natural inline size (panel controls). */
  basis?: "full" | "auto";
  /** In a grid zone the shell is a grid cell: no flex basis. */
  layout?: "flex" | "grid";
  /** A lone page body (PieceFrame): resizable, lockable, no drag. */
  frame?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * One movable piece. The chrome (grip, flip, lock) floats at the
 * piece's top-right and never takes layout space, so the shipped
 * layout measures exactly as before until Shaun grabs something.
 * On a player device there is no chrome and no handle at all —
 * the piece is just its content, in the shipped layout.
 */
export function Piece({ pieceId, basis = "full", layout = "flex", frame = false, className, children }: PieceProps) {
  const zoneId = useContext(ZoneIdContext);
  const { pieceState, setPiece, swapPieces, dm, editUnlocked } = usePieces();
  const shellRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    active: boolean;
    lastTarget: string | null;
  } | null>(null);
  const resizeRef = useRef<{
    pointerId: number;
    mode: "w" | "wh";
    startX: number;
    startY: number;
    startW: number;
    startH: number;
    zoneW: number;
  } | null>(null);

  if (!zoneId) throw new Error("Piece must be rendered inside a Zone");
  const ps = pieceState(zoneId, pieceId);
  const locked = !!ps.lock;
  const resized = ps.w != null || ps.h != null;
  const derivedOrient: "v" | "h" =
    ps.w != null && ps.w <= 45 ? "v" : ps.h != null && ps.w == null ? "v" : ps.h != null && ps.h > 480 ? "v" : "h";
  const orient = ps.orient ?? (resized ? derivedOrient : undefined);

  // --- drag to move (grip) -------------------------------------
  // Bug sweep 2026-11-08: a single continuous drag used to stop
  // after ONE swap — the swap re-renders the zone, the grip's
  // pointer capture dies with the re-render, and no further move
  // events arrive. The drag now also listens on the window (set up
  // at pointer-down, torn down at pointer-up), which survives any
  // re-render, and the last-swapped piece is forgotten once the
  // pointer leaves it, so one drag chains swap after swap.
  const winDragRef = useRef<{ move: (e: PointerEvent) => void; end: () => void } | null>(null);
  const endWinDrag = () => {
    const w = winDragRef.current;
    if (!w) return;
    window.removeEventListener("pointermove", w.move);
    window.removeEventListener("pointerup", w.end);
    window.removeEventListener("pointercancel", w.end);
    winDragRef.current = null;
  };
  useEffect(() => endWinDrag, []);

  const dragMove = (clientX: number, clientY: number) => {
    const info = dragRef.current;
    const shell = shellRef.current;
    if (!info || !shell) return;
    if (!info.active) {
      if (Math.hypot(clientX - info.startX, clientY - info.startY) < 6) return;
      info.active = true;
      setDragging(true);
    }
    const zoneEl = shell.closest("[data-piece-zone]");
    if (!zoneEl) return;
    const siblings = Array.from(zoneEl.querySelectorAll<HTMLElement>(":scope > [data-piece]"));
    const ids = siblings.map((s) => s.dataset.piece).filter((x): x is string => !!x);
    let overLast = false;
    for (const sib of siblings) {
      const otherId = sib.dataset.piece;
      if (!otherId || otherId === pieceId) continue;
      const r = sib.getBoundingClientRect();
      const inside = clientX >= r.left - 4 && clientX <= r.right + 4 && clientY >= r.top - 4 && clientY <= r.bottom + 4;
      if (otherId === info.lastTarget) {
        overLast = inside;
        continue;
      }
      if (inside) {
        info.lastTarget = otherId;
        swapPieces(zoneId, pieceId, otherId, ids);
        return;
      }
    }
    if (!overLast) info.lastTarget = null;
  };
  const onGripPointerDown = (e: ReactPointerEvent) => {
    if (locked || frame) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    const grip = e.currentTarget as HTMLElement;
    try {
      grip.setPointerCapture(e.pointerId);
    } catch {
      // Capture is a nicety; the window listeners below carry the drag.
    }
    dragRef.current = { pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, active: false, lastTarget: null };
    endWinDrag();
    const pointerId = e.pointerId;
    const move = (ev: PointerEvent) => {
      if (ev.pointerId === pointerId) dragMove(ev.clientX, ev.clientY);
    };
    const end = () => {
      endWinDrag();
      onGripPointerEnd();
    };
    winDragRef.current = { move, end };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
  };
  const onGripPointerMove = (e: ReactPointerEvent) => {
    dragMove(e.clientX, e.clientY);
  };
  const onGripPointerEnd = () => {
    endWinDrag();
    if (dragRef.current?.active) setDragging(false);
    dragRef.current = null;
  };

  // --- drag to resize (right edge / bottom-right corner) -------
  const onResizePointerDown = (mode: "w" | "wh") => (e: ReactPointerEvent) => {
    if (locked) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const shell = shellRef.current;
    if (!shell) return;
    e.preventDefault();
    e.stopPropagation();
    const handle = e.currentTarget as HTMLElement;
    try {
      handle.setPointerCapture(e.pointerId);
    } catch {
      // Same nicety as the grip.
    }
    const zoneEl = shell.closest("[data-piece-zone]");
    resizeRef.current = {
      pointerId: e.pointerId,
      mode,
      startX: e.clientX,
      startY: e.clientY,
      startW: shell.offsetWidth,
      startH: shell.offsetHeight,
      zoneW: zoneEl ? zoneEl.getBoundingClientRect().width : shell.offsetWidth,
    };
  };
  const onResizePointerMove = (e: ReactPointerEvent) => {
    const info = resizeRef.current;
    if (!info) return;
    const patch: Partial<PieceState> = {};
    const wPct = Math.round((((info.startW + (e.clientX - info.startX)) / Math.max(info.zoneW, 1)) * 100 + Number.EPSILON) * 10) / 10;
    patch.w = Math.min(100, Math.max(22, wPct));
    if (info.mode === "wh") {
      patch.h = Math.round(Math.min(2400, Math.max(90, info.startH + (e.clientY - info.startY))));
    }
    setPiece(zoneId, pieceId, patch);
  };
  const onResizePointerEnd = () => {
    resizeRef.current = null;
  };

  const shellStyle: CSSProperties = {};
  if (layout === "flex") {
    shellStyle.flexBasis = ps.w != null ? `${ps.w}%` : basis === "full" ? "100%" : "auto";
    shellStyle.maxWidth = "100%";
  }
  if (ps.h != null) shellStyle.height = `${ps.h}px`;

  return (
    <div
      ref={shellRef}
      data-piece={pieceId}
      data-locked={locked || undefined}
      className={cn(
        "group/piece relative min-w-0",
        layout === "grid" && "flex h-full flex-col",
        ps.h != null && "flex flex-col",
        dragging && "z-30 opacity-70",
        className,
      )}
      style={shellStyle}
    >
      {/* Piece chrome: grip (move), flip (orientation), lock — and,
          while editing is unlocked, a pencil marking that this
          piece's words can be changed. It floats over the piece's
          corner — visible faintly on touch screens, fully on
          hover/focus — and takes no layout room. DM devices only:
          a player device renders none of it. */}
      {dm && (
        <div
          data-piece-chrome
          className="piece-chrome absolute right-1 top-1 z-20 flex items-center gap-0.5 rounded-md border border-border bg-background/90 px-0.5 py-0.5 opacity-45 shadow-sm backdrop-blur transition-opacity focus-within:opacity-100 hover:opacity-100"
        >
          {!frame && (
            <button
              type="button"
              aria-label={locked ? "Piece locked" : "Drag to move this piece"}
              title={locked ? "Locked in place" : "Drag to move"}
              disabled={locked}
              className={cn("touch-none rounded p-0.5 text-muted-foreground", locked ? "cursor-not-allowed opacity-40" : "cursor-grab active:cursor-grabbing hover:text-foreground")}
              onPointerDown={onGripPointerDown}
              onPointerMove={onGripPointerMove}
              onPointerUp={onGripPointerEnd}
              onPointerCancel={onGripPointerEnd}
            >
              <GripVertical className="h-3.5 w-3.5" />
            </button>
          )}
          {layout !== "grid" && (
            <button
              type="button"
              aria-label="Flip this piece between vertical and horizontal flow"
              title="Flip vertical / horizontal"
              className="rounded p-0.5 text-muted-foreground hover:text-foreground"
              onClick={() => setPiece(zoneId, pieceId, { orient: orient === "v" ? "h" : "v" })}
            >
              {orient === "v" ? <ArrowLeftRight className="h-3.5 w-3.5" /> : <ArrowUpDown className="h-3.5 w-3.5" />}
            </button>
          )}
          <button
            type="button"
            aria-label={locked ? "Unlock this piece" : "Lock this piece in place"}
            title={locked ? "Unlock" : "Lock in place"}
            aria-pressed={locked}
            className={cn("rounded p-0.5", locked ? "text-[#1e3a8a]" : "text-muted-foreground hover:text-foreground")}
            onClick={() => setPiece(zoneId, pieceId, { lock: !locked })}
          >
            {locked ? <Lock className="h-3.5 w-3.5" /> : <LockOpen className="h-3.5 w-3.5" />}
          </button>
          {editUnlocked && (
            <span
              title="Editing is unlocked — double-click any text in this piece to change the words"
              className="px-0.5 text-[#1e3a8a]"
            >
              <Pencil className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      )}

      <div
        className={cn(
          "piece-body min-w-0",
          layout === "grid" && "min-h-0 flex-1",
          ps.h != null && "min-h-0 flex-1 overflow-y-auto",
        )}
        data-orient={orient}
      >
        {children}
      </div>

      {/* Resize handles: right edge (width) and bottom-right corner
          (width + height). Invisible until hovered, like the chrome.
          Grid-cell pieces (the section line) skip them: their cells
          are equal tracks, and a resized cell would warp the row.
          DM devices only, like the rest of the treatment. */}
      {dm && !locked && layout !== "grid" && (
        <>
          <div
            role="separator"
            aria-label="Drag to resize width"
            title="Drag to resize"
            className="absolute bottom-2 right-0 top-2 z-20 w-2 touch-none cursor-ew-resize opacity-0 transition-opacity hover:opacity-100 group-hover/piece:opacity-40"
            onPointerDown={onResizePointerDown("w")}
            onPointerMove={onResizePointerMove}
            onPointerUp={onResizePointerEnd}
            onPointerCancel={onResizePointerEnd}
          />
          <div
            role="separator"
            aria-label="Drag to resize width and height"
            title="Drag to resize"
            className="absolute bottom-0 right-0 z-20 h-4 w-4 touch-none cursor-nwse-resize opacity-0 transition-opacity hover:opacity-100 group-hover/piece:opacity-60"
            style={{ background: "linear-gradient(135deg, transparent 50%, rgba(30, 58, 138, 0.6) 50%)" }}
            onPointerDown={onResizePointerDown("wh")}
            onPointerMove={onResizePointerMove}
            onPointerUp={onResizePointerEnd}
            onPointerCancel={onResizePointerEnd}
          />
        </>
      )}
    </div>
  );
}

/** A lone page body with the treatment minus the drag: resizable,
 * re-flowable, lockable. Used for the pages whose insides are one
 * fitted or nested whole (Character Sheet, the nest pages). */
export function PieceFrame({
  zoneId,
  children,
  className,
}: {
  zoneId: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-piece-zone={zoneId} className={cn("flex flex-wrap items-start", className)}>
      <ZoneIdContext.Provider value={zoneId}>
        <Piece pieceId="page" frame>
          {children}
        </Piece>
      </ZoneIdContext.Provider>
    </div>
  );
}

/**
 * A zone container: renders its <Piece> children in the device's
 * saved order. Non-Piece children pass through after the pieces,
 * in their original order.
 */
export function Zone({
  zoneId,
  className,
  children,
  testId,
}: {
  zoneId: string;
  className?: string;
  children: ReactNode;
  testId?: string;
}) {
  const { orderFor } = usePieces();
  const items = Children.toArray(children);
  const pieces: ReactElement[] = [];
  const passthrough: ReactNode[] = [];
  for (const item of items) {
    // A child counts as a piece when it IS a Piece — or when it
    // carries a pieceId prop because it is a wrapper whose root
    // renders one (the nest blocks: their grips and drag state
    // worked, but as passthrough their stored order was never
    // applied — caught live 2026-11-08, v20.80).
    if (
      isValidElement(item) &&
      (item.type === Piece || typeof (item.props as { pieceId?: unknown }).pieceId === "string")
    ) {
      pieces.push(item as ReactElement);
    } else {
      passthrough.push(item);
    }
  }
  const ids = pieces.map((p) => (p.props as PieceProps).pieceId);
  const orderedIds = orderFor(zoneId, ids);
  const byId = new Map(pieces.map((p) => [(p.props as PieceProps).pieceId, p]));
  return (
    <div data-piece-zone={zoneId} className={className} data-testid={testId}>
      <ZoneIdContext.Provider value={zoneId}>
        {orderedIds.map((id) => byId.get(id)).filter(Boolean)}
        {passthrough}
      </ZoneIdContext.Provider>
    </div>
  );
}

/**
 * withPieces(zoneId, root): turns a stacked page root (a div of
 * Cards/sections) into a piece zone without rewriting the page —
 * the root keeps its element and classes (its vertical spacing
 * becomes the zone gap), each top-level block becomes a Piece,
 * fragments are opened one level, and elements listed in `skip`
 * (dialogs and other overlays) pass through untouched at the end.
 */
export function withPieces(
  zoneId: string,
  root: ReactElement,
  opts?: { skip?: ComponentType<never>[] },
): ReactElement {
  return <ZoneRoot zoneId={zoneId} root={root} skip={opts?.skip} />;
}

function ZoneRoot({
  zoneId,
  root,
  skip,
}: {
  zoneId: string;
  root: ReactElement;
  skip?: ComponentType<never>[];
}) {
  const { orderFor } = usePieces();
  const rootProps = root.props as { className?: string; children?: ReactNode };
  const flat: ReactElement[] = [];
  const passthrough: ReactElement[] = [];
  const pushChild = (child: ReactElement, index: number) => {
    if (skip && (skip as unknown[]).includes(child.type)) {
      passthrough.push(child);
      return;
    }
    flat.push(child);
    void index;
  };
  Children.toArray(rootProps.children).forEach((child, i) => {
    if (!isValidElement(child)) return;
    if (child.type === Fragment) {
      Children.toArray((child.props as { children?: ReactNode }).children).forEach((inner) => {
        if (isValidElement(inner)) pushChild(inner, i);
      });
    } else {
      pushChild(child, i);
    }
  });
  const ids = flat.map((child, i) => {
    const props = child.props as Record<string, unknown>;
    const testid = typeof props["data-testid"] === "string" ? (props["data-testid"] as string) : null;
    const key = child.key ? String(child.key).replace(/^\.\$?/, "") : null;
    return testid ?? (key && key !== String(i) ? key : null) ?? `p${i}`;
  });
  // Duplicate derived ids (repeated blocks) get a suffix so every
  // piece keeps its own state.
  const seen = new Map<string, number>();
  const uniqueIds = ids.map((id) => {
    const n = (seen.get(id) ?? 0) + 1;
    seen.set(id, n);
    return n > 1 ? `${id}-${n}` : id;
  });
  const orderedIds = orderFor(zoneId, uniqueIds);
  const byId = new Map(flat.map((child, i) => [uniqueIds[i], child]));
  const className = typeof rootProps.className === "string" ? rootProps.className : "";
  // The root's vertical spacing becomes the zone gap; any further
  // space-y tokens (a conditional variant, e.g. the Equipment
  // shell's tighter spacing) are dropped — the gap carries it.
  const gapMatch = className.match(/\bspace-y-([0-9.]+)/);
  const zoneClassName = cn(
    className.replace(/\bspace-y-[0-9.]+/g, "").trim(),
    gapMatch ? `gap-${gapMatch[1]}` : !/\bgap-/.test(className) ? "gap-6" : undefined,
    "flex flex-wrap items-start content-start",
  );
  return cloneElement(
    root,
    { className: zoneClassName, "data-piece-zone": zoneId } as Record<string, unknown>,
    <ZoneIdContext.Provider value={zoneId}>
      {orderedIds
        .map((id) => {
          const child = byId.get(id);
          if (!child) return null;
          return (
            <Piece key={id} pieceId={id}>
              {child}
            </Piece>
          );
        })
        .filter(Boolean)}
      {passthrough}
    </ZoneIdContext.Provider>,
  );
}
