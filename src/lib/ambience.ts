/**
 * Ambient sound for the per-area backdrop scenes (Shaun, 2026-11-04:
 * "with the appropriate ambient sounds"). Everything is synthesized
 * live with the Web Audio API — the site ships no audio files, so
 * each scene gets a small recipe of layered noise, tones and random
 * events (wind in the fog, a forge's crackle and hammer, bubbles in
 * the laboratory, a school bell across the courtyard...).
 *
 * Browsers refuse to start audio before the user has touched the
 * page, so when the Ambience toggle is on the engine arms a one-time
 * gesture listener and starts on the first tap/click/keypress.
 *
 * Volume is deliberately low: this is wallpaper, not a soundtrack.
 */

type StopFn = () => void;

export type AmbienceScene =
  | "street"
  | "reference"
  | "race"
  | "classes"
  | "skills"
  | "templates"
  | "feats"
  | "spells"
  | "prestige"
  | "equipment"
  | "magic-items"
  | "inventory"
  | "personality"
  | "item-creation";

class AmbienceEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuf: AudioBuffer | null = null;
  private stops: StopFn[] = [];
  private timers: number[] = [];
  private enabled = false;
  private scene: AmbienceScene = "street";
  private started = false;
  private armed = false;

  setEnabled(on: boolean) {
    this.enabled = on;
    if (on) {
      this.armAutoStart();
      if (this.started) this.fadeTo(0.6);
    } else if (this.started) {
      this.fadeTo(0);
    }
  }

  setScene(scene: AmbienceScene) {
    if (scene === this.scene) return;
    this.scene = scene;
    if (this.started && this.enabled) this.swapRecipe();
  }

  /** Start on the first user gesture (browser autoplay rule). */
  private armAutoStart() {
    if (this.started || this.armed) return;
    this.armed = true;
    const kick = () => {
      window.removeEventListener("pointerdown", kick);
      window.removeEventListener("keydown", kick);
      this.armed = false;
      if (this.enabled) this.start();
    };
    window.addEventListener("pointerdown", kick);
    window.addEventListener("keydown", kick);
  }

  private start() {
    if (this.started) return;
    const AC: typeof AudioContext | undefined =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(this.ctx.destination);
    // Shared brown-noise buffer (soft, low rumble character).
    const len = this.ctx.sampleRate * 2;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = this.noiseBuf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
    this.started = true;
    this.buildRecipe();
    this.fadeTo(0.6);
  }

  private fadeTo(v: number) {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(v, t + 0.8);
  }

  private swapRecipe() {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(0, t + 0.35);
    window.setTimeout(() => {
      this.teardownRecipe();
      if (this.enabled) {
        this.buildRecipe();
        this.fadeTo(0.6);
      }
    }, 400);
  }

  private teardownRecipe() {
    for (const s of this.stops) {
      try {
        s();
      } catch {
        /* already stopped */
      }
    }
    this.stops = [];
    for (const id of this.timers) window.clearTimeout(id);
    this.timers = [];
  }

  private buildRecipe() {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const R = RECIPES[this.scene] ?? RECIPES.street;
    R(this);
  }

  // ---- building blocks (used by the recipes below) ----

  /** Looping filtered noise: wind / room tone / fire body. */
  loopNoise(filterType: BiquadFilterType, freq: number, gain: number, lfoRate = 0, lfoDepth = 0) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    src.playbackRate.value = 0.7 + Math.random() * 0.5;
    const filter = ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.value = gain;
    src.connect(filter).connect(g).connect(this.master);
    src.start();
    let lfoOsc: OscillatorNode | null = null;
    if (lfoRate > 0 && lfoDepth > 0) {
      lfoOsc = ctx.createOscillator();
      lfoOsc.frequency.value = lfoRate;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = lfoDepth;
      lfoOsc.connect(lfoGain).connect(filter.frequency);
      lfoOsc.start();
    }
    this.stops.push(() => {
      try {
        src.stop();
      } catch {
        /* noop */
      }
      if (lfoOsc) {
        try {
          lfoOsc.stop();
        } catch {
          /* noop */
        }
      }
    });
  }

  /** Schedule a repeating random event; fn does the sound. */
  every(minS: number, maxS: number, fn: () => void) {
    const tick = () => {
      if (this.enabled) fn();
      const id = window.setTimeout(
        tick,
        (minS + Math.random() * (maxS - minS)) * 1000,
      );
      this.timers.push(id);
    };
    const first = window.setTimeout(
      tick,
      (minS + Math.random() * (maxS - minS)) * 1000,
    );
    this.timers.push(first);
  }

  /** A short pitched blip with a falling pitch — drips, bubbles. */
  blip(fFrom: number, fTo: number, dur: number, gain: number) {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(fFrom, t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(30, fTo), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  /** A short metallic ting — tools, glass, mugs. */
  clink(gain = 0.05) {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const base = 1600 + Math.random() * 1800;
    for (const mult of [1, 2.7]) {
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = base * mult;
      const g = ctx.createGain();
      g.gain.setValueAtTime(gain / mult, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
      osc.connect(g).connect(this.master);
      osc.start(t);
      osc.stop(t + 0.3);
    }
  }

  /** A low thud — a dummy taking a hit, a crate set down. */
  thud(gain = 0.12) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 150;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + 0.3);
  }

  /** A wooden creak — a slow falling sine with a wobble. */
  creak(gain = 0.03) {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "sawtooth";
    const f0 = 110 + Math.random() * 60;
    osc.frequency.setValueAtTime(f0, t);
    osc.frequency.exponentialRampToValueAtTime(f0 * 0.55, t + 0.5);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 420;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
    osc.connect(filter).connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.6);
  }

  /** A soft rustle — paper, canvas, leaves of a book. */
  rustle(gain = 0.04) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 1.6;
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 1400;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + 0.35);
  }

  /** Fire crackle: a little cluster of tiny pops. */
  crackle(gain = 0.05) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const pops = 2 + Math.floor(Math.random() * 4);
    for (let i = 0; i < pops; i++) {
      const t = ctx.currentTime + Math.random() * 0.5;
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuf;
      src.playbackRate.value = 2.2;
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 900 + Math.random() * 1600;
      const g = ctx.createGain();
      g.gain.setValueAtTime(gain * (0.5 + Math.random() * 0.7), t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      src.connect(filter).connect(g).connect(this.master);
      src.start(t);
      src.stop(t + 0.08);
    }
  }

  /** A bell toll — inharmonic partials, long decay. */
  bell(base = 392, gain = 0.045) {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    for (const [mult, amp] of [
      [1, 1],
      [2.02, 0.5],
      [2.74, 0.32],
      [3.76, 0.18],
      [5.4, 0.08],
    ] as const) {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = base * mult;
      const g = ctx.createGain();
      g.gain.setValueAtTime(gain * amp, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 3.6);
      osc.connect(g).connect(this.master);
      osc.start(t);
      osc.stop(t + 3.8);
    }
  }

  /** A hammer ring on the anvil. */
  hammer() {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    for (const [freq, amp] of [
      [1244, 1],
      [1866, 0.55],
      [2510, 0.3],
    ] as const) {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.05 * amp, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
      osc.connect(g).connect(this.master);
      osc.start(t);
      osc.stop(t + 1);
    }
    this.thud(0.05);
  }
}

/** One recipe per scene: a base layer plus scheduled events. */
const RECIPES: Record<AmbienceScene, (e: AmbienceEngine) => void> = {
  street: (e) => {
    e.loopNoise("lowpass", 380, 0.1, 0.07, 140);
    e.every(45, 80, () => e.bell(330, 0.02));
    e.every(14, 26, () => e.creak(0.015));
  },
  reference: (e) => {
    e.loopNoise("lowpass", 300, 0.035, 0.05, 80);
    e.every(7, 15, () => e.rustle(0.035));
    e.every(18, 30, () => e.creak(0.012));
  },
  race: (e) => {
    e.loopNoise("bandpass", 500, 0.05, 0.06, 180);
    e.every(6, 12, () => e.blip(1400, 500, 0.3, 0.02));
    e.every(20, 34, () => e.creak(0.015));
  },
  classes: (e) => {
    e.loopNoise("lowpass", 320, 0.04, 0.04, 60);
    e.every(9, 18, () => e.creak(0.025));
    e.every(12, 22, () => e.rustle(0.02));
  },
  skills: (e) => {
    e.loopNoise("lowpass", 360, 0.05, 0.06, 100);
    e.every(6, 13, () => e.clink(0.03));
    e.every(11, 20, () => e.creak(0.02));
  },
  templates: (e) => {
    e.loopNoise("lowpass", 260, 0.045, 0.05, 60);
    e.every(1.6, 4, () => e.blip(240 + Math.random() * 200, 120, 0.5, 0.028));
    e.every(15, 26, () => e.clink(0.018));
  },
  feats: (e) => {
    e.loopNoise("lowpass", 420, 0.11, 0.08, 160);
    e.every(7, 14, () => e.thud(0.1));
    e.every(10, 19, () => e.clink(0.02));
  },
  spells: (e) => {
    e.loopNoise("lowpass", 300, 0.035, 0.05, 70);
    e.every(9, 16, () => e.rustle(0.04));
    e.every(16, 28, () => e.blip(1900, 1500, 0.7, 0.012));
  },
  prestige: (e) => {
    e.loopNoise("lowpass", 380, 0.07, 0.06, 120);
    e.every(30, 50, () => e.bell(392, 0.04));
    e.every(13, 24, () => e.rustle(0.02));
  },
  equipment: (e) => {
    e.loopNoise("lowpass", 400, 0.09, 0.07, 140);
    e.every(4, 9, () => e.clink(0.028));
    e.every(8, 15, () => e.rustle(0.05));
  },
  "magic-items": (e) => {
    e.loopNoise("lowpass", 280, 0.04, 0.05, 60);
    e.every(1.2, 3, () => e.blip(500 + Math.random() * 420, 260, 0.35, 0.024));
    e.every(8, 15, () => e.clink(0.035));
  },
  inventory: (e) => {
    e.loopNoise("lowpass", 340, 0.06, 0.06, 110);
    e.every(8, 16, () => e.creak(0.03));
    e.every(16, 28, () => {
      e.clink(0.02);
      window.setTimeout(() => e.clink(0.016), 130);
      window.setTimeout(() => e.clink(0.013), 270);
    });
  },
  personality: (e) => {
    e.loopNoise("lowpass", 200, 0.055, 0.05, 40);
    e.every(0.7, 2.2, () => e.crackle(0.045));
    e.every(9, 17, () => e.clink(0.02));
  },
  "item-creation": (e) => {
    e.loopNoise("lowpass", 220, 0.06, 0.06, 50);
    e.every(0.8, 2.4, () => e.crackle(0.05));
    e.every(8, 16, () => e.hammer());
  },
};

export const ambience = new AmbienceEngine();
