import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { RESUME_FILENAME, getResumeUrl } from "@/lib/resume";
import { PERSON, MARQUEE_TECH } from "@/data/portfolio";
import { AuroraBackground } from "@/components/common/aurora-background";
import { RevealText } from "@/components/common/reveal";
import { Magnetic } from "@/components/common/interactive";
import { Button } from "@/components/ui/button";

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = PERSON.roles[index % PERSON.roles.length] ?? "";
    const done = typed === full;
    const empty = typed.length === 0;

    const delay = deleting ? 34 : done ? 1700 : 62;
    const timer = setTimeout(() => {
      if (!deleting && done) return setDeleting(true);
      if (deleting && empty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % PERSON.roles.length);
        return;
      }
      setTyped(deleting ? full.slice(0, typed.length - 1) : full.slice(0, typed.length + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [typed, deleting, index]);

  return (
    <span className="font-mono text-primary">
      {typed}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] animate-pulse bg-primary" />
    </span>
  );
}

function CodeWindow() {
  const lines = [
    { t: "const engineer = {", c: "text-muted-foreground" },
    { t: '  name: "Muhammad Anique Qadir",', c: "text-foreground" },
    { t: '  focus: ["interfaces", "performance"],', c: "text-secondary" },
    { t: "  stack: [React, TypeScript, Node],", c: "text-accent" },
    { t: "  shipsFast: true,", c: "text-success" },
    { t: "};", c: "text-muted-foreground" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ transformPerspective: 1200 }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="surface-card overflow-hidden rounded-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-warning/70" />
          <span className="size-2.5 rounded-full bg-success/70" />
          <span className="ml-3 font-mono text-[11px] text-muted-foreground">engineer.ts</span>
        </div>
        <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-7 sm:text-[13.5px]">
          {lines.map((line, i) => (
            <motion.div
              key={line.t}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.12, duration: 0.4 }}
              className={line.c}
            >
              <span className="mr-4 inline-block w-4 text-right text-muted-foreground/40">
                {i + 1}
              </span>
              {line.t}
            </motion.div>
          ))}
        </pre>
      </motion.div>

      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pt-32 pb-16 sm:px-8"
    >

      <AuroraBackground />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-3 py-1.5 text-xs backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            <span className="text-muted-foreground">{PERSON.availability}</span>
          </motion.div>

          <h1 className="mt-7 font-display text-4xl leading-[1.06] font-semibold text-balance sm:text-5xl lg:text-6xl">
            <RevealText text="Crafting digital" />
            <span className="block">
              <RevealText text="experiences that convert" delay={0.16} gradient />
            </span>
          </h1>


          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {PERSON.summary}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-5 text-sm"
          >
            <span className="text-muted-foreground">Currently working as </span>
            <RotatingRole />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Button asChild size="lg" className="group rounded-xl">
                <a href="#projects">
                  View projects
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="secondary" className="rounded-xl">
                <a href={getResumeUrl()} download={RESUME_FILENAME}>
                  <Download className="size-4" />
                  Download resume
                </a>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="ghost" className="rounded-xl">
              <a href="#contact">Contact me</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-9 flex items-center gap-3"
          >
            {[
              { href: PERSON.github, icon: Github, label: "GitHub" },
              { href: PERSON.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${PERSON.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                aria-label={label}
                className="grid size-10 place-items-center rounded-xl border border-border/70 bg-surface/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <CodeWindow />
      </div>

      <div className="relative mx-auto mt-10 w-full max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-10 font-mono text-xs tracking-[0.18em] text-muted-foreground/70 uppercase">
          {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, i) => (
            <span key={`${tech}-${i}`} className="flex items-center gap-10">
              {tech}
              <span className="size-1 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
