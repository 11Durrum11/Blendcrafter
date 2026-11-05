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
  // Shaun's volume control (2026-11-04): a 0..1 fraction of the
  // engine's full-scale gain (0.6 — wallpaper, not a soundtrack).
  private volume = 1;

  private targetGain() {
    return 0.6 * this.volume;
  }

  setVolume(fraction: number) {
    this.volume = Math.min(1, Math.max(0, fraction));
    if (this.started && this.enabled) this.fadeTo(this.targetGain());
  }

  getVolume() {
    return this.volume;
  }

  setEnabled(on: boolean) {
    this.enabled = on;
    if (on) {
      this.armAutoStart();
      if (this.started) this.fadeTo(this.targetGain());
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
    this.fadeTo(this.targetGain());
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
        this.fadeTo(this.targetGain());
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

  /**
   * A crowd bed: band-passed noise with slow swells in level and
   * pitch, so it breathes like muffled conversation instead of
   * sitting flat like the plain noise loops. (Added 2026-11-04:
   * Shaun reported every scene "fronting the same sound" — the old
   * recipes all sat on the same lowpassed brown-noise bed, so the
   * bed drowned the differences. Beds are now quieter and each
   * scene leads with its own signature events.)
   */
  murmur(gain = 0.05, freq = 480) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    src.playbackRate.value = 0.9 + Math.random() * 0.3;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = freq;
    filter.Q.value = 0.8;
    const g = ctx.createGain();
    g.gain.value = gain;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07 + Math.random() * 0.05;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = gain * 0.55;
    lfo.connect(lfoGain).connect(g.gain);
    const lfo2 = ctx.createOscillator();
    lfo2.frequency.value = 0.045;
    const lfo2Gain = ctx.createGain();
    lfo2Gain.gain.value = freq * 0.35;
    lfo2.connect(lfo2Gain).connect(filter.frequency);
    src.connect(filter).connect(g).connect(this.master);
    src.start();
    lfo.start();
    lfo2.start();
    this.stops.push(() => {
      try {
        src.stop();
      } catch {
        /* noop */
      }
      try {
        lfo.stop();
      } catch {
        /* noop */
      }
      try {
        lfo2.stop();
      } catch {
        /* noop */
      }
    });
  }

  /** A low steady hum — arcane machinery, charged air. */
  drone(freq = 80, gain = 0.015) {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;
    const g = ctx.createGain();
    g.gain.value = gain;
    g.connect(this.master);
    const oscs: OscillatorNode[] = [];
    for (const [mult, amp] of [
      [1, 1],
      [2.01, 0.4],
    ] as const) {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq * mult;
      const og = ctx.createGain();
      og.gain.value = amp;
      osc.connect(og).connect(g);
      osc.start();
      oscs.push(osc);
    }
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.11;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = gain * 0.3;
    lfo.connect(lfoGain).connect(g.gain);
    lfo.start();
    oscs.push(lfo);
    this.stops.push(() => {
      for (const o of oscs) {
        try {
          o.stop();
        } catch {
          /* noop */
        }
      }
    });
  }

  /**
   * A crowd as an EVENT, not a bed: a few seconds of band-passed
   * noise that swells and fades like conversation passing. (Second
   * redesign, 2026-11-04: Shaun on v20.7 — "it all just sounds like
   * rushing waves." Every continuous noise bed reads as surf, so
   * the beds are GONE; scenes are now built from discrete tonal and
   * percussive events over quiet, which is also what survives a
   * phone speaker.)
   */
  murmurSwell(gain = 0.05, freq = 480, dur = 4) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    src.playbackRate.value = 0.95 + Math.random() * 0.2;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq, t);
    filter.frequency.linearRampToValueAtTime(freq * 1.15, t + dur * 0.5);
    filter.frequency.linearRampToValueAtTime(freq * 0.95, t + dur);
    filter.Q.value = 0.9;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + dur * 0.35);
    g.gain.linearRampToValueAtTime(gain * 0.55, t + dur * 0.7);
    g.gain.linearRampToValueAtTime(0, t + dur);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.1);
  }

  /** A saw stroke: a band-passed noise sweep, up and back down. */
  sawStroke(gain = 0.03) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 1.6;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(500, t);
    filter.frequency.linearRampToValueAtTime(1050, t + 0.35);
    filter.frequency.linearRampToValueAtTime(480, t + 0.72);
    filter.Q.value = 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.06);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.75);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + 0.8);
  }

  /** A water drip with a faint echo — eaves in the fog, cave roofs. */
  drip(gain = 0.05) {
    this.blip(1150 + Math.random() * 250, 240, 0.14, gain);
    window.setTimeout(() => this.blip(900, 200, 0.1, gain * 0.35), 95);
  }

  /** A tiny hard click — a clock's escapement, chalk on a board. */
  tick(gain = 0.03) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 2.5;
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 2500;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + 0.05);
  }

  /** Footsteps passing: a short run of soft, uneven thuds. */
  steps(gain = 0.05) {
    const n = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) {
      window.setTimeout(
        () => this.thud(gain * (0.7 + Math.random() * 0.5)),
        i * 340 + Math.random() * 60,
      );
    }
  }

  /** A burst of steam / a quench hiss. */
  hiss(gain = 0.04, dur = 0.7) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 1.8;
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 3000;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.05);
  }

  /** A bellows whoosh: a band-passed noise swell, up then down. */
  whoosh(gain = 0.06) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 1.1;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 500;
    filter.Q.value = 0.6;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.5);
    g.gain.linearRampToValueAtTime(0, t + 1.25);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + 1.3);
  }

  /** A little cascade of rising glissandi — magic sparkling. */
  sparkle(gain = 0.02) {
    const base = 1800 + Math.random() * 900;
    [0, 90, 200].forEach((delay, i) => {
      window.setTimeout(
        () => this.blip(base * (1 + i * 0.26), base * (1.5 + i * 0.3), 0.35, gain),
        delay,
      );
    });
  }

  /** Wood on wood — staves, crates, a mallet. */
  clack(gain = 0.07) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 1.4;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 780 + Math.random() * 250;
    filter.Q.value = 1.2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + 0.12);
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = 190;
    const og = ctx.createGain();
    og.gain.setValueAtTime(gain * 0.6, t);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    osc.connect(og).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.1);
  }

  /** A quill or chalk scratch: a short, dry, band-passed scrape. */
  scratch(gain = 0.02) {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 2;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2600;
    filter.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + 0.2);
  }
}

/**
 * One recipe per scene. Third design, 2026-11-04: v20.6's recipes
 * all sat on the same loud noise bed (Shaun: "the same sound");
 * v20.7 quieted the beds and added signatures, but continuous
 * filtered noise still dominated (Shaun: "rushing waves"). So the
 * continuous noise beds are gone entirely. Every scene is now
 * discrete events over quiet — drips, bells, hammers, pages,
 * bubbles, crackle — plus at most a faint tonal drone. Nothing
 * left that can read as surf.
 */
const RECIPES: Record<AmbienceScene, (e: AmbienceEngine) => void> = {
  // The Bastion's fog street: emptiness first — drips, a deep far
  // bell, footsteps passing, a faint machinery hum under it all.
  street: (e) => {
    e.drone(55, 0.008);
    e.every(2.5, 5, () => e.drip(0.05));
    e.every(55, 95, () => e.bell(196, 0.03));
    e.every(16, 30, () => e.steps(0.05));
    e.every(18, 30, () => e.creak(0.014));
    e.every(35, 60, () => e.whoosh(0.02));
  },
  // The great library: a ticking clock, page turns, a quill. Quiet.
  reference: (e) => {
    e.every(1.8, 2.4, () => e.tick(0.012));
    e.every(4, 8, () => e.rustle(0.055));
    e.every(8, 14, () => e.scratch(0.02));
    e.every(22, 36, () => e.creak(0.01));
  },
  // The hall of the peoples: conversation swells passing, feet, a
  // low bell now and then.
  race: (e) => {
    e.every(9, 16, () => e.murmurSwell(0.05, 520, 4.5));
    e.every(11, 20, () => e.steps(0.04));
    e.every(15, 25, () => e.clink(0.015));
    e.every(70, 110, () => e.bell(262, 0.012));
  },
  // The lecture hall: chalk taps, bench creaks, pages, and the
  // lecturer's low swell of voice.
  classes: (e) => {
    e.every(5, 10, () => {
      e.tick(0.03);
      window.setTimeout(() => e.tick(0.024), 160);
      window.setTimeout(() => e.tick(0.02), 330);
    });
    e.every(7, 13, () => e.creak(0.032));
    e.every(9, 16, () => e.rustle(0.028));
    e.every(14, 22, () => e.murmurSwell(0.022, 420, 5));
  },
  // The guild workshop: tool clinks, mallet knocks, a saw at work.
  skills: (e) => {
    e.every(2.5, 5.5, () => e.clink(0.045));
    e.every(6, 11, () => e.clack(0.06));
    e.every(12, 20, () => e.sawStroke(0.032));
    e.every(10, 17, () => e.creak(0.02));
    e.every(9, 15, () => e.rustle(0.03));
  },
  // The transformation laboratory: a low hum and slow, deep bubbles.
  templates: (e) => {
    e.drone(72, 0.018);
    e.every(1.2, 2.6, () => e.blip(180 + Math.random() * 120, 700, 0.5, 0.032));
    e.every(10, 16, () => e.clink(0.02));
    e.every(18, 30, () => e.hiss(0.02, 0.9));
  },
  // The training yard: dummy drills, staff clacks, a gust now and then.
  feats: (e) => {
    e.every(4, 8, () => {
      e.thud(0.13);
      window.setTimeout(() => e.thud(0.1), 260);
    });
    e.every(5, 10, () => e.clack(0.055));
    e.every(14, 22, () => e.steps(0.04));
    e.every(25, 45, () => e.whoosh(0.025));
  },
  // The spellbook: pages, a quill, a candle's crackle, faint sparkles.
  spells: (e) => {
    e.every(3.5, 7, () => e.rustle(0.055));
    e.every(9, 15, () => e.scratch(0.02));
    e.every(11, 20, () => e.sparkle(0.018));
    e.every(1.2, 3, () => e.crackle(0.018));
  },
  // The school: the bell runs this place. Stone steps between bells.
  prestige: (e) => {
    e.every(24, 40, () => e.bell(392, 0.05));
    e.every(12, 20, () => e.steps(0.045));
    e.every(12, 19, () => e.rustle(0.02));
    e.every(18, 28, () => e.murmurSwell(0.016, 460, 4));
  },
  // The market: crowd swells, coin, canvas, crates, passing feet.
  equipment: (e) => {
    e.every(7, 13, () => e.murmurSwell(0.055, 540, 4.5));
    e.every(4, 8, () => {
      e.clink(0.048);
      window.setTimeout(() => e.clink(0.032), 120);
    });
    e.every(3.5, 7, () => e.rustle(0.055));
    e.every(10, 17, () => e.thud(0.07));
    e.every(14, 24, () => e.steps(0.04));
  },
  // The magical laboratory: a brighter hum, quick bubbles, glass,
  // sparkles, fizz.
  "magic-items": (e) => {
    e.drone(96, 0.013);
    e.every(0.8, 1.8, () => e.blip(300 + Math.random() * 150, 950, 0.4, 0.032));
    e.every(5, 9, () => e.clink(0.04));
    e.every(8, 14, () => e.sparkle(0.02));
    e.every(15, 24, () => e.hiss(0.025, 0.8));
  },
  // The warehouse: big creaks, echoing drips, chains, a crate set down.
  inventory: (e) => {
    e.every(6, 11, () => e.creak(0.042));
    e.every(5, 9, () => e.drip(0.038));
    e.every(14, 22, () => {
      e.clink(0.02);
      window.setTimeout(() => e.clink(0.016), 130);
      window.setTimeout(() => e.clink(0.013), 270);
    });
    e.every(16, 26, () => e.thud(0.09));
  },
  // The tavern: the fire is the bed — crackle pops, not noise —
  // with mugs, chairs, and warm conversation swells.
  personality: (e) => {
    e.every(0.5, 1.3, () => e.crackle(0.05));
    e.every(6, 11, () => e.clink(0.032));
    e.every(10, 17, () => e.murmurSwell(0.04, 380, 5));
    e.every(11, 18, () => e.creak(0.02));
    e.every(20, 34, () => e.thud(0.05));
  },
  // The forge: coal crackle, bellows, hammer bursts, the quench.
  "item-creation": (e) => {
    e.every(0.6, 1.5, () => e.crackle(0.05));
    e.every(8, 13, () => e.whoosh(0.07));
    e.every(6, 11, () => {
      e.hammer();
      window.setTimeout(() => e.hammer(), 300);
      window.setTimeout(() => e.hammer(), 620);
    });
    e.every(22, 36, () => e.hiss(0.05, 1.1));
  },
};

export const ambience = new AmbienceEngine();
