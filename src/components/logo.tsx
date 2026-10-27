interface LogoProps {
  className?: string;
}

/**
 * Blendcrafter mark: overlapping dragon-scale diamonds suggesting layered
 * templates fused into one composite shape. Monochrome via currentColor,
 * with the amber accent reserved for the innermost "core" scale.
 */
export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-label="Blendcrafter"
      role="img"
    >
      <path
        d="M20 3 L34 12 L34 28 L20 37 L6 28 L6 12 Z"
        stroke="currentColor"
        strokeWidth="1.75"
        opacity="0.55"
      />
      <path
        d="M20 9 L28 14 L28 26 L20 31 L12 26 L12 14 Z"
        stroke="currentColor"
        strokeWidth="1.75"
        opacity="0.85"
      />
      <path
        d="M20 15 L23.5 17.5 L23.5 22.5 L20 25 L16.5 22.5 L16.5 17.5 Z"
        fill="hsl(var(--primary))"
      />
    </svg>
  );
}
