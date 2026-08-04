import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PERSON } from "@/data/portfolio";
import { Logo } from "@/components/common/logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-5 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted-foreground">
            Frontend engineering, WordPress and Shopify work for teams that care how it feels.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PERSON.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid size-10 place-items-center rounded-xl border border-border/70 bg-surface/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
          </a>
          <a
            href={PERSON.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="grid size-10 place-items-center rounded-xl border border-border/70 bg-surface/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${PERSON.email}`}
            aria-label="Send an email"
            className="grid size-10 place-items-center rounded-xl border border-border/70 bg-surface/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="#home"
            className="ml-2 inline-flex items-center gap-2 rounded-xl border border-border/70 bg-surface/60 px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowUp className="size-4" />
            Back to top
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {PERSON.name} — designed and built in {PERSON.location}.
      </div>
    </footer>
  );
}
