import { usePointer } from "@/hooks/use-portfolio";
import { cn } from "@/lib/utils";

/** Layered aurora + grid + noise backdrop. Purely decorative. */
export function AuroraBackground({ className }: { className?: string }) {
  const pointer = usePointer();

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden noise-overlay", className)}
    >
      <div className="grid-lines absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      <div
        className="animate-aurora absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full opacity-45 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-primary), transparent 62%)" }}
      />
      <div
        className="animate-aurora absolute -top-24 right-0 h-[30rem] w-[30rem] rounded-full opacity-35 blur-[120px] [animation-delay:-6s]"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 62%)" }}
      />
      <div
        className="animate-aurora absolute top-1/2 left-1/3 h-[28rem] w-[28rem] rounded-full opacity-25 blur-[130px] [animation-delay:-12s]"
        style={{ background: "radial-gradient(circle, var(--color-secondary), transparent 62%)" }}
      />
      <div
        className="absolute inset-0 opacity-50 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${pointer.x * 100}% ${pointer.y * 100}%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%)`,
        }}
      />
    </div>
  );
}

/** Thin section-level glow, lighter than the hero backdrop. */
export function SectionGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-px",
        "bg-gradient-to-r from-transparent via-primary/40 to-transparent",
        className,
      )}
    />
  );
}
