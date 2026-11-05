/**
 * Ambient sound for the per-area backdrop scenes.
 *
 * REAL RECORDINGS (Shaun's order, 2026-11-04: "You gotta do
 * a better job with the audio. Find some audio files that
 * match [the background].") — the synthesized Web Audio
 * recipes that filled this file through v20.8 are GONE. Each
 * scene now plays a real field recording matched to its
 * backdrop (a Sevilla street at night for the street, the TU
 * Delft library for the great library, a Taipei street
 * market for the market, a real blacksmith's anvil for the
 * forge...), sourced lawfully — public domain / CC0 / CC-BY
 * only — and credited in src/data/ambience-audio.ts and in
 * Player Reference. The recordings live in that data module
 * as ~48-second looping excerpts and load lazily, the first
 * time ambience is switched on.
 *
 * ONE GAP, kept honest: the Training Yard (feats) has no
 * recording — no lawful direct-download recording of
 * wooden-weapon training exists in reach (the only sparring
 * recording found anywhere is CC BY-NC-SA). No substitute
 * was faked; that scene stays quiet until a lawful match
 * turns up.
 *
 * Browsers refuse to start audio before the user has
 * touched the page, so when the Ambience toggle is on the
 * engine arms a one-time gesture listener and starts on the
 * first tap/click/keypress.
 *
 * Volume is deliberately low: this is wallpaper, not a
 * soundtrack. The header slider sets the master gain through
 * setVolume; scene changes crossfade between recordings.
 */

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

interface Playing {
  source: AudioBufferSourceNode;
  gain: GainNode;
}

class AmbienceEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private enabled = false;
  private scene: AmbienceScene = "street";
  private started = false;
  private armed = false;
  // Shaun's volume control (2026-11-04): a 0..1 fraction of
  // the engine's full-scale gain (0.6 — wallpaper, not a
  // soundtrack).
  private volume = 1;

  private current: Playing | null = null;
  private buffers = new Map<AmbienceScene, AudioBuffer>();
  private modulePromise: Promise<Record<string, string>> | null = null;
  // Increments on every play change, so a recording that
  // finishes loading after the scene has already moved on
  // never starts playing late.
  private playToken = 0;

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
      if (this.started) {
        void this.ctx?.resume();
        this.playScene(this.scene);
        this.fadeTo(this.targetGain());
      }
    } else if (this.started) {
      this.fadeTo(0);
    }
  }

  setScene(scene: AmbienceScene) {
    if (scene === this.scene) return;
    this.scene = scene;
    if (this.started && this.enabled) this.playScene(scene);
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
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(this.ctx.destination);
    this.started = true;
    this.playScene(this.scene);
    this.fadeTo(this.targetGain());
  }

  private fadeTo(v: number) {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(v, t + 0.8);
  }

  /** The recordings module, imported once, lazily. */
  private audioModule(): Promise<Record<string, string>> {
    if (!this.modulePromise) {
      this.modulePromise = import("@/data/ambience-audio").then((m) => m.AMBIENCE_AUDIO);
    }
    return this.modulePromise;
  }

  private async loadBuffer(scene: AmbienceScene): Promise<AudioBuffer | null> {
    if (!this.ctx) return null;
    const cached = this.buffers.get(scene);
    if (cached) return cached;
    const audio = await this.audioModule();
    const uri = audio[scene];
    if (!uri) return null; // no lawful recording for this scene (feats)
    const res = await fetch(uri);
    const raw = await res.arrayBuffer();
    const buf = await this.ctx.decodeAudioData(raw);
    this.buffers.set(scene, buf);
    return buf;
  }

  /** Crossfade whatever is playing out, the new scene in. */
  private playScene(scene: AmbienceScene) {
    if (!this.ctx || !this.master) return;
    const token = ++this.playToken;
    this.stopCurrent();
    void this.loadBuffer(scene).then((buf) => {
      if (!buf || !this.ctx || !this.master) return;
      if (token !== this.playToken || !this.enabled || !this.started) return;
      const source = this.ctx.createBufferSource();
      source.buffer = buf;
      source.loop = true;
      const gain = this.ctx.createGain();
      const t = this.ctx.currentTime;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(1, t + 1.2);
      source.connect(gain);
      gain.connect(this.master);
      source.start();
      this.current = { source, gain };
    });
  }

  private stopCurrent() {
    if (!this.ctx || !this.current) return;
    const { source, gain } = this.current;
    this.current = null;
    const t = this.ctx.currentTime;
    gain.gain.cancelScheduledValues(t);
    gain.gain.setValueAtTime(gain.gain.value, t);
    gain.gain.linearRampToValueAtTime(0, t + 0.9);
    try {
      source.stop(t + 1);
    } catch {
      /* already stopped */
    }
    window.setTimeout(() => {
      try {
        source.disconnect();
        gain.disconnect();
      } catch {
        /* already gone */
      }
    }, 1200);
  }
}

export const ambience = new AmbienceEngine();
