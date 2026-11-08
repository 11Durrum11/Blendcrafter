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
import { ArrowLeftRight, ArrowUpDown, GripVertical, Lock, LockOpen, RotateCcw } from "lucide-react";
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

interface PiecesApi {
  layout: LayoutState;
  pieceState: (zoneId: string, pieceId: string) => PieceState;
  setPiece: (zoneId: string, pieceId: string, patch: Partial<PieceState>) => void;
  orderFor: (zoneId: string, ids: string[]) => string[];
  swapPieces: (zoneId: string, a: string, b: string, allIds: string[]) => void;
  resetAll: () => void;
}

const PiecesContext = createContext<PiecesApi | null>(null);

export function PiecesProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<LayoutState>(loadLayout);

  useEffect(() => {
    try {
      if (Object.keys(layout).length === 0) globalThis.localStorage?.removeItem(LAYOUT_STORAGE_KEY);
      else globalThis.localStorage?.setItem(LAYOUT_STORAGE_KEY, JSON.stringify(layout));
    } catch {
      // Storage unavailable: the arrangement lasts for this visit.
    }
  }, [layout]);

  const pieceState = useCallback(
    (zoneId: string, pieceId: string) => layout[zoneId]?.pieces?.[pieceId] ?? {},
    [layout],
  );

  const setPiece = useCallback((zoneId: string, pieceId: string, patch: Partial<PieceState>) => {
    setLayout((prev) => {
      const zone = prev[zoneId] ?? {};
      const pieces = { ...(zone.pieces ?? {}) };
      pieces[pieceId] = { ...(pieces[pieceId] ?? {}), ...patch };
      return { ...prev, [zoneId]: { ...zone, pieces } };
    });
  }, []);

  const orderFor = useCallback(
    (zoneId: string, ids: string[]) => {
      const stored = layout[zoneId]?.order ?? [];
      const known = stored.filter((id) => ids.includes(id));
      const missing = ids.filter((id) => !known.includes(id));
      return [...known, ...missing];
    },
    [layout],
  );

  const swapPieces = useCallback((zoneId: string, a: string, b: string, allIds: string[]) => {
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
  }, []);

  const resetAll = useCallback(() => {
    setLayout({});
    try {
      globalThis.localStorage?.removeItem(LAYOUT_STORAGE_KEY);
    } catch {
      // Nothing to clear.
    }
  }, []);

  const api = useMemo<PiecesApi>(
    () => ({ layout, pieceState, setPiece, orderFor, swapPieces, resetAll }),
    [layout, pieceState, setPiece, orderFor, swapPieces, resetAll],
  );

  return <PiecesContext.Provider value={api}>{children}</PiecesContext.Provider>;
}

export function usePieces(): PiecesApi {
  const ctx = useContext(PiecesContext);
  if (!ctx) throw new Error("usePieces must be used inside PiecesProvider");
  return ctx;
}

/** The header's Reset layout button: clears the piece layout and,
 * through onResetExtra, the header boxes' older saved order too. */
export function ResetLayoutButton({ onResetExtra }: { onResetExtra?: () => void }) {
  const { resetAll } = usePieces();
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
 */
export function Piece({ pieceId, basis = "full", layout = "flex", frame = false, className, children }: PieceProps) {
  const zoneId = useContext(ZoneIdContext);
  const { pieceState, setPiece, swapPieces } = usePieces();
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
  const onGripPointerDown = (e: ReactPointerEvent) => {
    if (locked || frame) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    const grip = e.currentTarget as HTMLElement;
    try {
      grip.setPointerCapture(e.pointerId);
    } catch {
      // Capture is a nicety; the drag still tracks over the zone.
    }
    dragRef.current = { pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, active: false, lastTarget: null };
  };
  const onGripPointerMove = (e: ReactPointerEvent) => {
    const info = dragRef.current;
    const shell = shellRef.current;
    if (!info || !shell) return;
    if (!info.active) {
      if (Math.hypot(e.clientX - info.startX, e.clientY - info.startY) < 6) return;
      info.active = true;
      setDragging(true);
    }
    const zoneEl = shell.closest("[data-piece-zone]");
    if (!zoneEl) return;
    const siblings = Array.from(zoneEl.querySelectorAll<HTMLElement>(":scope > [data-piece]"));
    const ids = siblings.map((s) => s.dataset.piece).filter((x): x is string => !!x);
    for (const sib of siblings) {
      const otherId = sib.dataset.piece;
      if (!otherId || otherId === pieceId || otherId === info.lastTarget) continue;
      const r = sib.getBoundingClientRect();
      if (e.clientX >= r.left - 4 && e.clientX <= r.right + 4 && e.clientY >= r.top - 4 && e.clientY <= r.bottom + 4) {
        info.lastTarget = otherId;
        swapPieces(zoneId, pieceId, otherId, ids);
        break;
      }
    }
  };
  const onGripPointerEnd = () => {
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
      {/* Piece chrome: grip (move), flip (orientation), lock. It
          floats over the piece's corner — visible faintly on touch
          screens, fully on hover/focus — and takes no layout room. */}
      <div className="piece-chrome absolute right-1 top-1 z-20 flex items-center gap-0.5 rounded-md border border-border bg-background/90 px-0.5 py-0.5 opacity-45 shadow-sm backdrop-blur transition-opacity focus-within:opacity-100 hover:opacity-100">
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
          className={cn("rounded p-0.5", locked ? "text-primary" : "text-muted-foreground hover:text-foreground")}
          onClick={() => setPiece(zoneId, pieceId, { lock: !locked })}
        >
          {locked ? <Lock className="h-3.5 w-3.5" /> : <LockOpen className="h-3.5 w-3.5" />}
        </button>
      </div>

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
          are equal tracks, and a resized cell would warp the row. */}
      {!locked && layout !== "grid" && (
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
            style={{ background: "linear-gradient(135deg, transparent 50%, hsl(var(--muted-foreground) / 0.55) 50%)" }}
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
    if (isValidElement(item) && item.type === Piece) pieces.push(item as ReactElement);
    else passthrough.push(item);
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
