import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** Geometric "AQ" monogram. Animates its stroke on hover. */
export function Logo({ className }: { className?: string }) {
  return (
    <motion.span
      className={cn("group inline-flex items-center gap-2.5", className)}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-border/70 bg-surface/70">
        <motion.span
          aria-hidden
          className="absolute inset-0 opacity-0"
          style={{ background: "var(--gradient-brand)" }}
          variants={{ rest: { opacity: 0 }, hover: { opacity: 0.9 } }}
          transition={{ duration: 0.35 }}
        />
        <svg viewBox="0 0 32 32" className="relative size-5" fill="none" aria-hidden>
          <motion.path
            d="M4 26 L13 6 L22 26"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="square"
            variants={{ rest: { pathLength: 1 }, hover: { pathLength: [0, 1] } }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.path
            d="M8.5 19.5 H17.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="square"
            variants={{ rest: { opacity: 1 }, hover: { opacity: [0, 1] } }}
            transition={{ duration: 0.4, delay: 0.15 }}
          />
          <motion.circle
            cx="24"
            cy="23"
            r="4.5"
            stroke="currentColor"
            strokeWidth="2.2"
            variants={{ rest: { rotate: 0 }, hover: { rotate: 90 } }}
            style={{ originX: "24px", originY: "23px" }}
            transition={{ duration: 0.5 }}
          />
        </svg>
      </span>
      <span className="font-display text-sm font-semibold tracking-tight">
        Anique<span className="text-primary">.</span>
      </span>
    </motion.span>
  );
}
