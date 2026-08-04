import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS, type Project } from "@/data/portfolio";
import { Section, SectionHeading } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { TiltCard } from "@/components/common/interactive";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ACCENT: Record<Project["accent"], string> = {
  primary: "from-primary/25",
  secondary: "from-secondary/25",
  accent: "from-accent/25",
};

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <TiltCard className="h-full">
      <article className="surface-card group relative flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-[var(--shadow-float)]">
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden bg-gradient-to-br to-transparent",
            ACCENT[project.accent],
          )}
        >
          <div className="grid-lines absolute inset-0 opacity-40" />
          <div className="absolute inset-0 flex items-end p-6">
            <span className="font-display text-2xl font-semibold tracking-tight opacity-90 transition-transform duration-500 group-hover:-translate-y-1">
              {project.title}
            </span>
          </div>
          <span className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            {project.client}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="rounded-md font-mono text-[10px]">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
            <Button size="sm" variant="secondary" className="rounded-lg" onClick={onOpen}>
              Case study
            </Button>
            <Button asChild size="sm" variant="ghost" className="group/link rounded-lg">
              <a href={project.live} target="_blank" rel="noreferrer noopener">
                Live
                <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </Button>
            {project.repo && (
              <Button asChild size="sm" variant="ghost" className="rounded-lg">
                <a href={project.repo} target="_blank" rel="noreferrer noopener" aria-label="Repository">
                  <Github className="size-3.5" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => (p.categories as string[]).includes(filter)),
    [filter],
  );

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects treated as case studies, not screenshots."
        description="Client sites and personal products. Every one of them shipped, live and in use."
      />

      <Reveal delay={0.08} className="mt-10 flex flex-wrap gap-2">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "relative rounded-xl border px-4 py-2 text-sm transition-colors",
              filter === f
                ? "border-primary/40 text-foreground"
                : "border-border/70 text-muted-foreground hover:text-foreground",
            )}
          >
            {filter === f && (
              <motion.span
                layoutId="project-pill"
                className="absolute inset-0 rounded-xl bg-primary/12"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </Reveal>

      <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[86svh] overflow-y-auto sm:max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  {selected.client}
                </span>
                <DialogTitle className="font-display text-2xl">{selected.title}</DialogTitle>
                <DialogDescription>{selected.caseStudy.overview}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6 text-sm leading-relaxed">
                <div className="flex flex-wrap gap-1.5">
                  {selected.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="rounded-md font-mono text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {[
                  { label: "The problem", body: selected.caseStudy.problem },
                  { label: "My solution", body: selected.caseStudy.solution },
                  { label: "Hardest part", body: selected.caseStudy.challenges },
                ].map((block) => (
                  <div key={block.label}>
                    <h4 className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                      {block.label}
                    </h4>
                    <p className="mt-2 text-muted-foreground">{block.body}</p>
                  </div>
                ))}

                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                    Key features
                  </h4>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {selected.caseStudy.features.map((f) => (
                      <li key={f} className="flex gap-2 text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                    Results
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {selected.caseStudy.results.map((r) => (
                      <li key={r} className="flex gap-2 text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-success" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Button asChild className="rounded-xl">
                    <a href={selected.live} target="_blank" rel="noreferrer noopener">
                      Visit live site
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                  {selected.repo && (
                    <Button asChild variant="secondary" className="rounded-xl">
                      <a href={selected.repo} target="_blank" rel="noreferrer noopener">
                        <Github className="size-4" />
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
