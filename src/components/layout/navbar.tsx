import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X, FileDown } from "lucide-react";
import { RESUME_FILENAME, getResumeUrl } from "@/lib/resume";
import { NAV_SECTIONS } from "@/data/portfolio";
import { useActiveSection, useScrollDirection } from "@/hooks/use-portfolio";
import { useTheme } from "@/components/providers/theme-provider";
import { Logo } from "@/components/common/logo";
import { Magnetic } from "@/components/common/interactive";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export function Navbar() {
  const { y, hidden } = useScrollDirection();
  const active = useActiveSection(SECTION_IDS);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const scrolled = y > 24;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden && !open ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300",
          scrolled ? "glass-panel h-14 shadow-[var(--shadow-card)]" : "h-16 border border-transparent",
        )}
      >
        <a href="#home" className="rounded-lg" aria-label="Back to top">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_SECTIONS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm transition-colors",
                  active === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-surface/90 ring-1 ring-border/70"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="grid size-9 place-items-center rounded-xl border border-border/70 bg-surface/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <Magnetic className="hidden sm:inline-flex">
            <Button asChild size="sm" className="rounded-xl">
              <a href={getResumeUrl()} download={RESUME_FILENAME}>
                <FileDown className="size-4" />
                Resume
              </a>
            </Button>
          </Magnetic>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-xl border border-border/70 bg-surface/60 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass-panel mx-auto mt-3 w-full max-w-6xl rounded-2xl p-3 lg:hidden"
          >
            <ul className="grid gap-1">
              {NAV_SECTIONS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm transition-colors",
                      active === item.id
                        ? "bg-surface text-foreground"
                        : "text-muted-foreground hover:bg-surface/70",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
