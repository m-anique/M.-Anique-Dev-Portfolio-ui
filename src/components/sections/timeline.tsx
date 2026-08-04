import { Briefcase, GraduationCap } from "lucide-react";
import { EDUCATION, EXPERIENCE, type TimelineItem } from "@/data/portfolio";
import { Section, SectionHeading } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { Badge } from "@/components/ui/badge";

function Timeline({ items, icon: Icon }: { items: TimelineItem[]; icon: typeof Briefcase }) {
  return (
    <div className="relative mt-10 space-y-6 border-l border-border/70 pl-6 sm:pl-10">
      {items.map((item, i) => (
        <Reveal key={item.title + item.period} delay={i * 0.07}>
          <div className="relative">
            <span className="absolute -left-[2.1rem] grid size-8 place-items-center rounded-xl border border-border/70 bg-surface text-primary sm:-left-[3.35rem]">
              <Icon className="size-4" />
            </span>
            <div className="surface-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                {item.period}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-primary">{item.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="rounded-md font-mono text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>

  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Four years of shipping, mostly for other people's businesses."
        description="Freelance and agency work across frontend engineering, CMS development and full stack builds."
      />
      <Timeline items={EXPERIENCE} icon={Briefcase} />
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="Formal foundations, self-taught craft."
        description="Computer science at university, interface engineering everywhere else."
      />
      <Timeline items={EDUCATION} icon={GraduationCap} />
    </Section>
  );
}
