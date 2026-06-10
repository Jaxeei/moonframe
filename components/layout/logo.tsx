import { cn } from "@/lib/utils";

/**
 * MoonFrame brand mark: a waxing crescent held inside a rounded frame.
 * Swap the <svg> for the official logo asset when available.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        className="size-8"
        aria-hidden="true"
        fill="none"
      >
        <defs>
          <linearGradient id="mf-glow" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#7ba3ff" />
            <stop offset="100%" stopColor="#4d7fff" />
          </linearGradient>
        </defs>
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="11"
          stroke="url(#mf-glow)"
          strokeWidth="1.5"
        />
        <path
          d="M26.5 12.2a9.4 9.4 0 1 0 0 15.6 11.4 11.4 0 0 1-9.3-7.8 11.4 11.4 0 0 1 9.3-7.8Z"
          fill="url(#mf-glow)"
        />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-moon">
        Moon<span className="text-glow-soft">Frame</span>
      </span>
    </span>
  );
}
