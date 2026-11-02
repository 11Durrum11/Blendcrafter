import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Brain, Dices, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import type { CharacterBuild, FlawTraitDefinition, PersonalityProfile, ResolvedCharacter } from "@/engine/types";
import { DEFAULT_PERSONALITY, generatePersonality } from "@/engine/personality";
import { ALL_FLAWS, ALL_TRAITS } from "@/data";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { describeFlawTrait, type EntityDetail } from "@/lib/entity-descriptions";

interface Props { build: CharacterBuild; resolved: ResolvedCharacter; onChange: (patch: Partial<PersonalityProfile>) => void; }
const backgrounds = ["Soldier", "Noble", "Criminal", "Guild Artisan", "Sage", "Hermit", "Outlander", "Entertainer", "Acolyte", "Folk Hero", "Urchin", "Scholar"];
const alignments = ["Lawful Good","Neutral Good","Chaotic Good","Lawful Neutral","True Neutral","Chaotic Neutral","Lawful Evil","Neutral Evil","Chaotic Evil"];
const families = ["Stable family","Large extended family","Estranged family","Orphaned","Widowed","Married / partnered","Single by choice","Family is politically powerful","Family is dangerous","Family presumed dead"];

export function StepPersonality({ build, resolved, onChange }: Props) {
  const p = build.personality;
  const generated = useMemo(() => generatePersonality(build, resolved, p), [build, resolved, p]);
  const set = (key: keyof PersonalityProfile, value: any) => onChange({ [key]: value });
  const [flawQuery, setFlawQuery] = useState("");
  const [traitQuery, setTraitQuery] = useState("");
  const [detail, setDetail] = useState<EntityDetail | null>(null);
  // Staged picks (Shaun, 2026-11-02): ticking a name only stages it.
  // The Confirm button beside the Flaws & Traits title commits the
  // staged picks to the character — that is when they land in the
  // picked boxes below and their crunch applies. The staged set
  // re-syncs whenever the committed picks change (another character
  // loaded, a Remove in the picked box, the Confirm itself).
  const committedFlaws = p.flawIds ?? [];
  const committedTraits = p.traitIds ?? [];
  const [stagedFlaws, setStagedFlaws] = useState<string[]>(committedFlaws);
  const [stagedTraits, setStagedTraits] = useState<string[]>(committedTraits);
  useEffect(() => { setStagedFlaws(p.flawIds ?? []); }, [JSON.stringify(p.flawIds ?? [])]);
  useEffect(() => { setStagedTraits(p.traitIds ?? []); }, [JSON.stringify(p.traitIds ?? [])]);
  const toggleFlaw = (id: string) =>
    setStagedFlaws((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  const toggleTrait = (id: string) =>
    setStagedTraits((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  const removeFlaw = (id: string) => {
    set("flawIds", committedFlaws.filter((x) => x !== id));
    setStagedFlaws((cur) => cur.filter((x) => x !== id));
  };
  const removeTrait = (id: string) => {
    set("traitIds", committedTraits.filter((x) => x !== id));
    setStagedTraits((cur) => cur.filter((x) => x !== id));
  };
  const sameSet = (a: string[], b: string[]) => a.length === b.length && a.every((x) => b.includes(x));
  const picksDirty = !sameSet(stagedFlaws, committedFlaws) || !sameSet(stagedTraits, committedTraits);
  const confirmPicks = () => onChange({ flawIds: stagedFlaws, traitIds: stagedTraits });
  const setWeight = (key: keyof PersonalityProfile["weights"], value: number) => onChange({ weights: { ...p.weights, [key]: value } });
  const generate = () => onChange({ generated });
  const randomize = () => {
    const keys = Object.keys(DEFAULT_PERSONALITY.weights) as (keyof PersonalityProfile["weights"])[];
    const weights = Object.fromEntries(keys.map(k => [k, 1 + Math.floor(Math.random() * 10)])) as PersonalityProfile["weights"];
    onChange({ socialStanding: 1 + Math.floor(Math.random()*10), wealth: 1 + Math.floor(Math.random()*10), personalReputation: Math.floor(Math.random()*11)-5, publicReputation: Math.floor(Math.random()*11)-5, weights });
  };
  const weightGroups: [string, (keyof PersonalityProfile["weights"])[]][] = [
    ["Identity & Society", ["race","class","level","alignment","age","background","socialStanding","wealth","family","religion","faction","reputation"]],
    ["Mind & Mechanics", ["abilities","feats","specialAbilities"]],
    ["History & Relationships", ["enemies","allies","trauma","goals","secrets","circumstances"]],
  ];
  return <div className="space-y-6">
    <Card>
      <CardHeader><CardTitle className="font-display flex items-center gap-2"><Brain className="h-5 w-5 text-primary"/> Personality & Life History</CardTitle></CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm text-muted-foreground">This tab builds a persistent personality from the character's actual Blendcrafter mechanics plus weighted life-history inputs. Changing the character's race, class, abilities, feats, or level changes the generated psychology.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Age"><Input type="number" min="1" max="1000" value={p.age} onChange={e=>set("age", Number(e.target.value)||1)}/></Field>
          <Field label="Alignment"><select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={p.alignment} onChange={e=>set("alignment",e.target.value)}>{alignments.map(x=><option key={x}>{x}</option>)}</select></Field>
          <Field label="Background"><select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={p.background} onChange={e=>set("background",e.target.value)}>{backgrounds.map(x=><option key={x}>{x}</option>)}</select></Field>
          <Field label="Family Status"><select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={p.familyStatus} onChange={e=>set("familyStatus",e.target.value)}>{families.map(x=><option key={x}>{x}</option>)}</select></Field>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Range label={`Social Standing: ${p.socialStanding}/10`} value={p.socialStanding} min={1} max={10} onChange={v=>set("socialStanding",v)}/>
          <Range label={`Wealth: ${p.wealth}/10`} value={p.wealth} min={1} max={10} onChange={v=>set("wealth",v)}/>
          <Range label={`Personal Reputation: ${p.personalReputation >= 0 ? "+" : ""}${p.personalReputation}`} value={p.personalReputation} min={-5} max={5} onChange={v=>set("personalReputation",v)}/>
          <Range label={`Public Reputation: ${p.publicReputation >= 0 ? "+" : ""}${p.publicReputation}`} value={p.publicReputation} min={-5} max={5} onChange={v=>set("publicReputation",v)}/>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Field label="Religion"><Input value={p.religion} onChange={e=>set("religion",e.target.value)} placeholder="Deity, philosophy, or none"/></Field>
          <Field label="Faction / Guild"><Input value={p.factionGuild} onChange={e=>set("factionGuild",e.target.value)} /></Field>
          <Field label="Occupation"><Input value={p.occupation} onChange={e=>set("occupation",e.target.value)} /></Field>
          <Field label="Allies"><Textarea value={p.allies} onChange={e=>set("allies",e.target.value)} placeholder="People, organizations, patrons..."/></Field>
          <Field label="Enemies"><Textarea value={p.enemies} onChange={e=>set("enemies",e.target.value)} placeholder="Rivals, organizations, grudges..."/></Field>
          <Field label="Trauma"><Textarea value={p.trauma} onChange={e=>set("trauma",e.target.value)} placeholder="Defining loss, betrayal, war, disaster..."/></Field>
          <Field label="Goals"><Textarea value={p.goals} onChange={e=>set("goals",e.target.value)} /></Field>
          <Field label="Secrets"><Textarea value={p.secrets} onChange={e=>set("secrets",e.target.value)} /></Field>
          <Field label="Current Circumstances"><Textarea value={p.circumstances} onChange={e=>set("circumstances",e.target.value)} placeholder="What is happening right now?"/></Field>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="font-display">Flaws & Traits</CardTitle>
          <div className="flex items-center gap-2">
            {picksDirty && <span className="text-xs font-medium text-amber-500" data-testid="text-unconfirmed-picks">Unconfirmed picks</span>}
            <Button type="button" size="sm" onClick={confirmPicks} disabled={!picksDirty} data-testid="button-confirm-flawtraits">
              {picksDirty ? "Confirm picks" : "Confirmed"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">The full library: the Unearthed Arcana lists plus a snapshot of the D&D Wiki, saved into Blendcrafter so wiki edits can't change it on you. Book guidance — a flaw is taken at 1st level and grants a bonus feat, and a character may have up to two traits — is shown for reference; Blendcrafter doesn't enforce either. Tick names to stage your picks, then hit <span className="font-medium text-foreground">Confirm picks</span> — that's when they land in the boxes below and their crunch applies to the character.</p>
        <FlawTraitPicker title="Flaws" items={ALL_FLAWS} selectedIds={stagedFlaws} query={flawQuery} onQuery={setFlawQuery} onToggle={toggleFlaw} onShowDetail={(item) => setDetail(describeFlawTrait(item))} testidPrefix="flaw" />
        <PickedBox title="Flaws" items={ALL_FLAWS} selectedIds={committedFlaws} onRemove={removeFlaw} onShowDetail={(item) => setDetail(describeFlawTrait(item))} testidPrefix="flaw" />
        <FlawTraitPicker title="Traits" items={ALL_TRAITS} selectedIds={stagedTraits} query={traitQuery} onQuery={setTraitQuery} onToggle={toggleTrait} onShowDetail={(item) => setDetail(describeFlawTrait(item))} testidPrefix="trait" />
        <PickedBox title="Traits" items={ALL_TRAITS} selectedIds={committedTraits} onRemove={removeTrait} onShowDetail={(item) => setDetail(describeFlawTrait(item))} testidPrefix="trait" />
      </CardContent>
    </Card>

    <Card><CardHeader><CardTitle className="font-display">Numeric Influence Weights</CardTitle></CardHeader><CardContent className="grid gap-6 md:grid-cols-3">{weightGroups.map(([title, keys])=><div key={title} className="space-y-4"><h3 className="text-sm font-semibold">{title}</h3>{keys.map(k=><Range key={k} label={`${labelize(k)}: ${p.weights[k]}/10`} value={p.weights[k]} min={0} max={10} onChange={v=>setWeight(k,v)}/>)}</div>)}</CardContent></Card>

    <div className="flex flex-wrap gap-2"><Button onClick={generate}><Sparkles className="mr-2 h-4 w-4"/>Generate Personality</Button><Button variant="outline" onClick={randomize}><Dices className="mr-2 h-4 w-4"/>Randomize Weights & Social Inputs</Button></div>

    <Card><CardHeader><CardTitle className="font-display">Generated NPC Profile</CardTitle></CardHeader><CardContent><div className="space-y-5 text-sm leading-6">
      <Section title="Temperament">{generated.temperament}</Section><Section title="Core Personality">{generated.corePersonality}</Section><Section title="Life History">{generated.lifeHistory}</Section><Section title="Values">{generated.values}</Section><Section title="Motivations"><List items={generated.motivations}/></Section><Section title="Fears"><List items={generated.fears}/></Section><Section title="Moral Outlook">{generated.moralOutlook}</Section><Section title="Social Behavior">{generated.socialBehavior}</Section><Section title="Reputation">{generated.reputationInterpretation}</Section><Section title="Relationships">{generated.relationships}</Section><Section title="Current Pressure">{generated.currentPressure}</Section><Section title="Mannerisms"><List items={generated.mannerisms}/></Section><Section title="Voice">{generated.voice}</Section><Section title="Combat Psychology">{generated.combatPsychology}</Section><Section title="Contradictions"><List items={generated.contradictions}/></Section><Section title="Adventure Hooks"><List items={generated.adventureHooks}/></Section>
    </div></CardContent></Card>
    <EntityDetailDialog detail={detail} onOpenChange={(open) => !open && setDetail(null)} />
  </div>;
}
/**
 * The picked box (Shaun, 2026-11-02): whatever flaw or trait the
 * player picks lands here, fully crunched out — name, prerequisite,
 * the full description text, and the source — not just the name.
 */
function PickedBox({title,items,selectedIds,onRemove,onShowDetail,testidPrefix}:{title:string;items:FlawTraitDefinition[];selectedIds:string[];onRemove:(id:string)=>void;onShowDetail:(item:FlawTraitDefinition)=>void;testidPrefix:string}) {
  const picked = items.filter(i=>selectedIds.includes(i.id));
  return <div className="rounded-md border border-card-border bg-muted/20 p-3" data-testid={`picked-box-${testidPrefix}`}>
    <h4 className="font-display text-sm font-semibold">Your {title} <span className="font-normal text-muted-foreground">({picked.length} picked)</span></h4>
    {picked.length===0 ? <p className="mt-1 text-sm text-muted-foreground">None picked yet — tick a name in the list above and it lands here, fully written out.</p> :
    <div className="mt-2 space-y-3">
      {picked.map(item=><div key={item.id} className="rounded-md border border-card-border bg-card p-3" data-testid={`picked-${testidPrefix}-${item.id}`}>
        <div className="flex items-start justify-between gap-2">
          <span className="flex items-center gap-2">
            <button type="button" className="text-left font-semibold underline-offset-2 hover:underline" onClick={()=>onShowDetail(item)} data-testid={`picked-name-${testidPrefix}-${item.id}`}>{item.name}</button>
            {item.modifiers && item.modifiers.length > 0 && <Badge variant="secondary" className="text-[10px]">Mechanical effect</Badge>}
          </span>
          <Button type="button" size="sm" variant="outline" className="h-6 shrink-0 text-xs" onClick={()=>onRemove(item.id)} data-testid={`picked-remove-${testidPrefix}-${item.id}`}>Remove</Button>
        </div>
        {item.prerequisite && <p className="mt-1 text-xs text-muted-foreground"><span className="font-medium text-foreground">Prerequisite:</span> {item.prerequisite}</p>}
        <p className="mt-1 text-sm leading-6">{item.description}</p>
        <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="mt-1 block text-[11px] text-primary underline underline-offset-2">{item.source}</a>
      </div>)}
    </div>}
  </div>;
}
function FlawTraitPicker({title,items,selectedIds,query,onQuery,onToggle,onShowDetail,testidPrefix}:{title:string;items:FlawTraitDefinition[];selectedIds:string[];query:string;onQuery:(v:string)=>void;onToggle:(id:string)=>void;onShowDetail:(item:FlawTraitDefinition)=>void;testidPrefix:string}) {
  const visible = items.filter(i=>i.name.toLowerCase().includes(query.toLowerCase()));
  const sorted = [...visible].sort((a,b)=>(Number(selectedIds.includes(b.id))-Number(selectedIds.includes(a.id)))||a.name.localeCompare(b.name));
  return <div className="space-y-2" data-testid={`picker-${testidPrefix}`}>
    <h3 className="text-sm font-semibold">{title} <span className="font-normal text-muted-foreground">({selectedIds.length} selected · {items.length} in the library)</span></h3>
    <Input value={query} onChange={e=>onQuery(e.target.value)} placeholder={`Search ${title.toLowerCase()}…`} className="h-8" data-testid={`input-${testidPrefix}-search`} />
    {/* Names only, four across (Shaun, 2026-11-02): the initial list
        shows just each flaw/trait name to save space; everything
        else — summary, full description, prerequisite, source —
        lives in the click (the name opens the detail dialog). */}
    <div className="grid max-h-64 grid-cols-2 gap-1 overflow-y-auto rounded-md border border-card-border p-2 md:grid-cols-4">
      {sorted.map(item=><label key={item.id} className="flex cursor-pointer items-start gap-1.5 rounded p-1.5 hover:bg-muted/40" data-testid={`${testidPrefix}-option-${item.id}`}>
        <input type="checkbox" className="mt-0.5 shrink-0 accent-primary" checked={selectedIds.includes(item.id)} onChange={()=>onToggle(item.id)} />
        <button type="button" className="text-left text-sm font-medium leading-tight underline-offset-2 hover:underline" onClick={(e)=>{e.preventDefault();e.stopPropagation();onShowDetail(item);}} data-testid={`${testidPrefix}-name-${item.id}`}>{item.name}</button>
      </label>)}
      {sorted.length===0 && <p className="col-span-full p-1 text-sm text-muted-foreground">No matches.</p>}
    </div>
  </div>;
}
function Field({label,children}:{label:string;children:ReactNode}){return <div className="space-y-1.5"><Label>{label}</Label>{children}</div>}
function Range({label,value,min,max,onChange}:{label:string;value:number;min:number;max:number;onChange:(n:number)=>void}){return <div className="space-y-1.5"><div className="flex justify-between text-xs"><span>{label}</span></div><input className="w-full accent-primary" type="range" min={min} max={max} value={value} onChange={e=>onChange(Number(e.target.value))}/></div>}
function Section({title,children}:{title:string;children:ReactNode}){return <div><h3 className="mb-1 font-semibold text-primary">{title}</h3><div>{children}</div></div>}
function List({items}:{items:string[]}){return <ul className="list-disc space-y-1 pl-5">{items.map((x,i)=><li key={i}>{x}</li>)}</ul>}
function labelize(s:string){return s.replace(/([A-Z])/g," $1").replace(/^./,c=>c.toUpperCase())}
