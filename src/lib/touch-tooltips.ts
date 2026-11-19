/**
 * Touch hover-help (Shaun's game-system-wide directive, 2026-11-18 —
 * the same standard as the hub pages): every control carries a `title`
 * with one plain sentence. Mouse pointers get the native hover title.
 * Touch has no hover, so on touch/pen pointers a press-and-hold
 * (~550ms) on a titled control shows that same title text in a bubble
 * WITHOUT the control firing; a quick tap works as normal; moving the
 * finger cancels the hold.
 *
 * Mechanics (mirroring the hub's tracker build):
 * - capture-phase pointerdown, touch/pen pointers only;
 * - the timer runs on the closest [title] ancestor of the press target;
 * - when it fires, the bubble shows and the following click is
 *   swallowed once (capture-phase preventDefault +
 *   stopImmediatePropagation), so the control never fires;
 * - contextmenu is suppressed on titled controls during a hold, and
 *   -webkit-touch-callout:none keeps iOS from stealing the press.
 */
const HOLD_MS = 550;
const MOVE_CANCEL_PX = 10;

let installed = false;

export function installTouchTooltips() {
  if (installed || typeof window === "undefined") return;
  installed = true;

  // iOS long-press callout would steal the press from titled controls.
  const style = document.createElement("style");
  style.textContent = "[title] { -webkit-touch-callout: none; }";
  document.head.appendChild(style);

  let bubble: HTMLDivElement | null = null;
  const ensureBubble = () => {
    if (bubble) return bubble;
    bubble = document.createElement("div");
    bubble.setAttribute("role", "tooltip");
    bubble.style.cssText = [
      "position:fixed",
      "z-index:9999",
      "pointer-events:none",
      "max-width:min(280px, calc(100vw - 24px))",
      "padding:6px 10px",
      "border-radius:6px",
      "background:hsl(var(--popover))",
      "color:hsl(var(--popover-foreground))",
      "border:1px solid hsl(var(--border))",
      "box-shadow:0 4px 16px rgba(0,0,0,0.35)",
      "font-size:12px",
      "line-height:1.35",
      "display:none",
    ].join(";");
    document.body.appendChild(bubble);
    return bubble;
  };
  const hideBubble = () => {
    if (bubble) bubble.style.display = "none";
  };
  const showBubble = (el: Element, text: string) => {
    const b = ensureBubble();
    b.textContent = text;
    b.style.display = "block";
    const rect = el.getBoundingClientRect();
    const bw = b.offsetWidth;
    const bh = b.offsetHeight;
    let x = rect.left + rect.width / 2 - bw / 2;
    x = Math.max(8, Math.min(x, window.innerWidth - bw - 8));
    let y = rect.top - bh - 8;
    if (y < 8) y = Math.min(rect.bottom + 8, window.innerHeight - bh - 8);
    b.style.left = `${x}px`;
    b.style.top = `${y}px`;
  };

  let timer: number | null = null;
  let activePointerId: number | null = null;
  let startX = 0;
  let startY = 0;
  let heldEl: Element | null = null;
  let shown = false;
  let swallowEl: Element | null = null;

  const cancelHold = () => {
    if (timer !== null) {
      window.clearTimeout(timer);
      timer = null;
    }
    activePointerId = null;
    heldEl = null;
    shown = false;
    hideBubble();
  };

  window.addEventListener(
    "pointerdown",
    (e) => {
      if (e.pointerType !== "touch" && e.pointerType !== "pen") return;
      const target = e.target as Element | null;
      const titled = target?.closest?.("[title]");
      if (!titled) return;
      const text = titled.getAttribute("title")?.trim();
      if (!text) return;
      cancelHold();
      activePointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      heldEl = titled;
      timer = window.setTimeout(() => {
        timer = null;
        shown = true;
        swallowEl = heldEl;
        showBubble(titled, text);
      }, HOLD_MS);
    },
    true,
  );

  window.addEventListener(
    "pointermove",
    (e) => {
      if (activePointerId === null || e.pointerId !== activePointerId) return;
      if (shown) return; // once shown, the bubble rides until release
      if (Math.abs(e.clientX - startX) > MOVE_CANCEL_PX || Math.abs(e.clientY - startY) > MOVE_CANCEL_PX) {
        cancelHold();
      }
    },
    true,
  );

  const endPress = (e: PointerEvent) => {
    if (activePointerId === null || e.pointerId !== activePointerId) return;
    const wasShown = shown;
    cancelHold();
    if (!wasShown) swallowEl = null;
  };
  window.addEventListener("pointerup", endPress, true);
  window.addEventListener("pointercancel", endPress, true);

  window.addEventListener(
    "click",
    (e) => {
      if (!swallowEl) return;
      const target = e.target as Element | null;
      const hit = target?.closest?.("[title]");
      const el = swallowEl;
      swallowEl = null;
      if (hit === el || (el && target && el.contains(target))) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
    true,
  );

  window.addEventListener(
    "contextmenu",
    (e) => {
      if (activePointerId === null) return;
      const target = e.target as Element | null;
      if (target?.closest?.("[title]")) e.preventDefault();
    },
    true,
  );
}
