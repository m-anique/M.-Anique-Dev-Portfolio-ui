import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SKILL_GROUPS } from "@/data/portfolio";
import { Section, SectionHeading } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState(SKILL_GROUPS[0]!.name);
  const group = SKILL_GROUPS.find((g) => g.name === active) ?? SKILL_GROUPS[0]!;

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit, and what I actually do with it."
        description="Not a list of logos. Each of these is something I have shipped and maintained in production."
      />

      <Reveal delay={0.08} className="mt-10">
        <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2">
          {SKILL_GROUPS.map((g) => (
            <button
              key={g.name}
              role="tab"
              aria-selected={active === g.name}
              onClick={() => setActive(g.name)}
              className={cn(
                "relative rounded-xl border px-4 py-2 text-sm transition-colors",
                active === g.name
                  ? "border-primary/40 text-foreground"
                  : "border-border/70 text-muted-foreground hover:text-foreground",
              )}
            >
              {active === g.name && (
                <motion.span
                  layoutId="skill-pill"
                  className="absolute inset-0 rounded-xl bg-primary/12"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{g.name}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <p className="mt-6 text-sm text-muted-foreground">{group.blurb}</p>

      <AnimatePresence mode="wait">
        <motion.ul
          key={group.name}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {group.skills.map((skill, i) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="surface-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-4">
                <h3 className="font-display text-base font-semibold">{skill.name}</h3>
                <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground/70 uppercase">
                  {group.name}
                </span>
              </div>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {skill.note}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </Section>
  );
}
