import { Compass, Gauge, Layers, Sparkles } from "lucide-react";
import { PERSON, STATS } from "@/data/portfolio";
import { Section, SectionHeading } from "@/components/common/section";
import { Counter, Reveal } from "@/components/common/reveal";

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Design-led engineering",
    body: "I start from the experience, not the framework. The stack serves the interface, never the other way around.",
  },
  {
    icon: Gauge,
    title: "Performance as a feature",
    body: "Budgets for scripts, images and motion. A beautiful site that loads slowly is not a beautiful site.",
  },
  {
    icon: Layers,
    title: "Systems over pages",
    body: "Tokens, primitives and typed components — so the tenth screen costs less to build than the first.",
  },
  {
    icon: Sparkles,
    title: "Details people feel",
    body: "Focus states, empty states, error states, motion easing. The parts nobody lists but everybody notices.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A developer who takes the interface personally."
            description="Based in Lahore, working with clients across the UK, Europe and the US."
          />

          <Reveal delay={0.1} className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              I started with HTML and CSS out of curiosity and stayed because the web rewards
              craftsmanship. Over the last few years that curiosity turned into a practice: React and
              TypeScript front ends, Node and MongoDB behind them, and WordPress or Shopify when a
              client needs to own their content.
            </p>
            <p>
              Most of my work is for businesses that had a site which technically existed but never
              persuaded anyone. My job is to fix that — clear structure, honest copy, motion that
              guides rather than decorates, and performance good enough that nobody thinks about it.
            </p>
            <p className="text-foreground">
              I care about the handover as much as the launch. Clean code, documented decisions and a
              system the next developer can actually work in.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="surface-card rounded-2xl p-5">
                <p className="font-display text-3xl font-semibold">
                  <span className="text-gradient">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                </p>
                <p className="mt-1.5 text-xs tracking-wide text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:content-center">
          {PRINCIPLES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="surface-card group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                <span className="grid size-11 place-items-center rounded-xl border border-border/70 bg-surface/70 text-primary transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.3} className="sm:col-span-2">
            <div className="surface-card rounded-2xl p-6">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Currently
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                {PERSON.availability} — taking on frontend engineering, WordPress and Shopify projects.
                <span className="text-muted-foreground"> {PERSON.responseTime}.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
