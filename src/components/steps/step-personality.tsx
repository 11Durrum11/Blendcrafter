import { useMemo, type ReactNode } from "react";
import { Brain, Dices, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import type { CharacterBuild, PersonalityProfile, ResolvedCharacter } from "@/engine/types";
import { DEFAULT_PERSONALITY, generatePersonality } from "@/engine/personality";

interface Props { build: CharacterBuild; resolved: ResolvedCharacter; onChange: (patch: Partial<PersonalityProfile>) => void; }
const backgrounds = ["Soldier", "Noble", "Criminal", "Guild Artisan", "Sage", "Hermit", "Outlander", "Entertainer", "Acolyte", "Folk Hero", "Urchin", "Scholar"];
const alignments = ["Lawful Good","Neutral Good","Chaotic Good","Lawful Neutral","True Neutral","Chaotic Neutral","Lawful Evil","Neutral Evil","Chaotic Evil"];
const families = ["Stable family","Large extended family","Estranged family","Orphaned","Widowed","Married / partnered","Single by choice","Family is politically powerful","Family is dangerous","Family presumed dead"];

export function StepPersonality({ build, resolved, onChange }: Props) {
  const p = build.personality;
  const generated = useMemo(() => generatePersonality(build, resolved, p), [build, resolved, p]);
  const set = (key: keyof PersonalityProfile, value: any) => onChange({ [key]: value });
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

    <Card><CardHeader><CardTitle className="font-display">Numeric Influence Weights</CardTitle></CardHeader><CardContent className="grid gap-6 md:grid-cols-3">{weightGroups.map(([title, keys])=><div key={title} className="space-y-4"><h3 className="text-sm font-semibold">{title}</h3>{keys.map(k=><Range key={k} label={`${labelize(k)}: ${p.weights[k]}/10`} value={p.weights[k]} min={0} max={10} onChange={v=>setWeight(k,v)}/>)}</div>)}</CardContent></Card>

    <div className="flex flex-wrap gap-2"><Button onClick={generate}><Sparkles className="mr-2 h-4 w-4"/>Generate Personality</Button><Button variant="outline" onClick={randomize}><Dices className="mr-2 h-4 w-4"/>Randomize Weights & Social Inputs</Button></div>

    <Card><CardHeader><CardTitle className="font-display">Generated NPC Profile</CardTitle></CardHeader><CardContent><div className="space-y-5 text-sm leading-6">
      <Section title="Temperament">{generated.temperament}</Section><Section title="Core Personality">{generated.corePersonality}</Section><Section title="Life History">{generated.lifeHistory}</Section><Section title="Values">{generated.values}</Section><Section title="Motivations"><List items={generated.motivations}/></Section><Section title="Fears"><List items={generated.fears}/></Section><Section title="Moral Outlook">{generated.moralOutlook}</Section><Section title="Social Behavior">{generated.socialBehavior}</Section><Section title="Reputation">{generated.reputationInterpretation}</Section><Section title="Relationships">{generated.relationships}</Section><Section title="Current Pressure">{generated.currentPressure}</Section><Section title="Mannerisms"><List items={generated.mannerisms}/></Section><Section title="Voice">{generated.voice}</Section><Section title="Combat Psychology">{generated.combatPsychology}</Section><Section title="Contradictions"><List items={generated.contradictions}/></Section><Section title="Adventure Hooks"><List items={generated.adventureHooks}/></Section>
    </div></CardContent></Card>
  </div>;
}
function Field({label,children}:{label:string;children:ReactNode}){return <div className="space-y-1.5"><Label>{label}</Label>{children}</div>}
function Range({label,value,min,max,onChange}:{label:string;value:number;min:number;max:number;onChange:(n:number)=>void}){return <div className="space-y-1.5"><div className="flex justify-between text-xs"><span>{label}</span></div><input className="w-full accent-primary" type="range" min={min} max={max} value={value} onChange={e=>onChange(Number(e.target.value))}/></div>}
function Section({title,children}:{title:string;children:ReactNode}){return <div><h3 className="mb-1 font-semibold text-primary">{title}</h3><div>{children}</div></div>}
function List({items}:{items:string[]}){return <ul className="list-disc space-y-1 pl-5">{items.map((x,i)=><li key={i}>{x}</li>)}</ul>}
function labelize(s:string){return s.replace(/([A-Z])/g," $1").replace(/^./,c=>c.toUpperCase())}
