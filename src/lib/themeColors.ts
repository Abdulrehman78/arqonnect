/** Theme-aware scrim color for photo backdrops (black in dark, white in light). */
export function scrim(alpha: number): string {
  return `rgb(var(--scrim-rgb) / ${alpha})`;
}

export function scrimGradient(
  direction: string,
  stops: Array<[number, number]>,
): string {
  const parts = stops
    .map(([alpha, pct]) => `${scrim(alpha)} ${pct}%`)
    .join(", ");
  return `linear-gradient(${direction}, ${parts})`;
}
