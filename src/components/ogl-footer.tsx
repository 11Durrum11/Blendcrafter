import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function OglFooter() {
  return (
    <footer className="border-t border-border bg-card/40 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6 text-foreground" />
            <span className="font-display text-sm font-semibold">Blendcrafter</span>
            <span className="text-xs text-muted-foreground">— open-source template blending character builder</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" data-testid="button-about-ogl">
                About &amp; Attribution
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="font-display text-xl">About Blendcrafter</DialogTitle>
                <DialogDescription>Open Game License and SRD attribution</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Blendcrafter is an independent, open-source character calculator for the d20 System Reference
                  Document (SRD), version 3.5. It is not affiliated with, endorsed by, or sponsored by Wizards of
                  the Coast. Blendcrafter does not use any Wizards of the Coast product names, trademarks, or
                  proprietary Product Identity — only rules content released under the Open Game License.
                </p>
                <p>
                  All game rule mechanics implemented here (ability score adjustments, stacking rules, template
                  statistics, class progressions) are drawn from Open Game Content published at{" "}
                  <a href="https://www.d20srd.org/" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
                    d20srd.org
                  </a>
                  , distributed under the terms of the Open Game License version 1.0a.
                </p>
                <div className="rounded-md border border-card-border bg-card p-3">
                  <p className="font-medium text-foreground">Open Game License 1.0a — Section 15 Copyright Notice</p>
                  <p className="mt-1">
                    Open Game License v 1.0a Copyright 2000, Wizards of the Coast, Inc. System Reference Document 3.5
                    Copyright 2003, Wizards of the Coast, Inc.; Authors Jonathan Tweet, Monte Cook, Skip Williams,
                    Rich Baker, Andy Collins, David Noonan, Rich Redman, Bruce R. Cordell, based on original material
                    by E. Gary Gygax and Dave Arneson.
                  </p>
                  <p className="mt-2">
                    Full license text:{" "}
                    <a href="https://www.d20srd.org/ogl.htm" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
                      d20srd.org/ogl.htm
                    </a>
                  </p>
                </div>
                <p>
                  Optional content sets for Eberron, Iron Kingdoms, and Sorcery &amp; Steam are independent
                  mechanical-reference indexes we compiled ourselves — short numeric/mechanical summaries (ability
                  adjustments, hit dice, bonus values, one-line benefit text) in the same spirit as long-standing fan
                  reference tools like PCGen or dndtools.net. We do not reproduce narrative text, art, or stat blocks
                  from those publications, and setting names, character names, and other Product Identity remain the
                  property of their respective publishers (Wizards of the Coast for Eberron; Privateer Press for Iron
                  Kingdoms and the Sorcery &amp; Steam-inspired steam-fantasy content). Blendcrafter is not endorsed by,
                  affiliated with, or sponsored by Wizards of the Coast or Privateer Press. These optional rule sets
                  are off by default — enable them from the "Rule Sets" control if you want them to appear in the
                  builder's pickers.
                </p>
                <p>
                  Source and license details for this project are also included in the repository as{" "}
                  <span className="font-mono text-xs">OGL.txt</span>, <span className="font-mono text-xs">SRD_ATTRIBUTION.md</span>, and{" "}
                  <span className="font-mono text-xs">LICENSE</span> (MIT, for the original code in this project).
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
}
