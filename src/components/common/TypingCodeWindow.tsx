import { useEffect, useState } from "react";

type Token = { text: string; className?: string };

const KEY = "text-cyan-400";
const PURPLE = "text-purple-400";
const GREEN = "text-green-400";
const PLAIN = "text-zinc-300";

// Edit this to change what gets typed in the hero code window.
const LINES: Token[][] = [
  [{ text: "const ", className: "text-red-400" }, { text: "engineer = {", className: PLAIN }],
  [
    { text: "  name: ", className: "text-zinc-200" },
    { text: '"Muhammad Anique Qadir"', className: "text-white font-bold" },
    { text: ",", className: PLAIN },
  ],
  [
    { text: "  focus: ", className: KEY },
    { text: '["interfaces", "performance"]', className: KEY },
    { text: ",", className: PLAIN },
  ],
  [
    { text: "  stack: ", className: PURPLE },
    { text: "[React, TypeScript, Node]", className: PURPLE },
    { text: ",", className: PLAIN },
  ],
  [
    { text: "  shipsFast: ", className: GREEN },
    { text: "true", className: GREEN },
    { text: ",", className: PLAIN },
  ],
  [{ text: "};", className: PLAIN }],
];

const lineLength = (l: Token[]) => l.reduce((n, t) => n + t.text.length, 0);
const TOTAL = LINES.reduce((n, l) => n + lineLength(l), 0);

export default function TypingCodeWindow() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(TOTAL);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const tick = (c: number) => {
      if (c >= TOTAL) {
        // finished: pause, then restart the loop
        timer = setTimeout(() => {
          setCount(0);
          tick(0);
        }, 3500);
        return;
      }
      timer = setTimeout(() => {
        setCount(c + 1);
        tick(c + 1);
      }, 35 + Math.random() * 55); // human-like typing speed
    };
    timer = setTimeout(() => tick(0), 600);
    return () => clearTimeout(timer);
  }, []);

  let consumed = 0;
  return (
    <div
      className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0d0f14]/90 shadow-2xl backdrop-blur"
      role="img"
      aria-label="Code snippet describing Muhammad Anique Qadir"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-amber-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-3 font-mono text-xs text-zinc-400">engineer.ts</span>
      </div>

      <pre className="min-h-[190px] overflow-x-auto px-4 py-5 font-mono text-[13px] leading-7 sm:text-sm">
        {LINES.map((line, i) => {
          const start = consumed;
          const len = lineLength(line);
          consumed += len;
          if (count < start) return null; // line not reached yet
          const isActive = count >= start && count <= start + len && count < TOTAL;
          const isLastDone = count >= TOTAL && i === LINES.length - 1;
          let left = count - start;
          return (
            <div key={i} className="flex">
              <span className="mr-4 w-4 select-none text-right text-zinc-600">{i + 1}</span>
              <code>
                {line.map((t, j) => {
                  const take = Math.max(0, Math.min(left, t.text.length));
                  left -= take;
                  return (
                    <span key={j} className={t.className}>
                      {t.text.slice(0, take)}
                    </span>
                  );
                })}
                {(isActive || isLastDone) && (
                  <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] animate-pulse bg-cyan-400" />
                )}
              </code>
            </div>
          );
        })}
      </pre>
    </div>
  );
}
