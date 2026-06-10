import { cn } from "@/lib/utils";

/**
 * MoonFrame brand mark, redrawn as SVG from the official logo
 * (public/brand/logo-design.png): a white crescent resting in an
 * open corner frame, with the lowercase wordmark beside it.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 40 40" className="size-8" aria-hidden="true" fill="none">
        <defs>
          <linearGradient id="mf-mark" x1="8" y1="4" x2="34" y2="38">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#becdef" />
          </linearGradient>
        </defs>
        {/* open corner frame */}
        <path
          d="M9 8.5 Q4.5 9.5 4.5 15 V29 Q4.5 35.5 11 35.5 H29 Q35.5 35.5 35.5 29 V20"
          stroke="url(#mf-mark)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* crescent */}
        <path
          d="M26.5 12.2a9.4 9.4 0 1 0 0 15.6 11.4 11.4 0 0 1-9.3-7.8 11.4 11.4 0 0 1 9.3-7.8Z"
          fill="url(#mf-mark)"
          transform="translate(-6.5 -8) scale(0.92) rotate(14 20 20)"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-moon">
          moonframe
        </span>
        <span className="mt-1 font-mono text-[8px] tracking-[0.42em] text-lunar">
          AGENCY
        </span>
      </span>
    </span>
  );
}
