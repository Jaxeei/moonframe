/**
 * Renders a moon at a given illumination, from new moon (0) to full (1).
 * The signature motif of the MoonFrame process section.
 */
export function MoonPhase({
  phase,
  className,
}: {
  phase: number;
  className?: string;
}) {
  // The lit area is drawn by sliding a dark disc across a glowing one:
  // directly on top at new moon, fully clear of it at full moon.
  const occluderX = 24 - 44 * phase;
  const id = `moon-${Math.round(phase * 100)}`;

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <clipPath id={id}>
          <circle cx="24" cy="24" r="20" />
        </clipPath>
      </defs>
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="none"
        stroke="rgba(123,163,255,0.35)"
        strokeWidth="1"
      />
      <circle cx="24" cy="24" r="20" fill="rgba(77,127,255,0.9)" clipPath={`url(#${id})`} />
      <circle
        cx={occluderX}
        cy="24"
        r="20"
        fill="#0a0f1e"
        clipPath={`url(#${id})`}
      />
    </svg>
  );
}
