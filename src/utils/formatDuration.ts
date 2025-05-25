import { useMemo } from "react";

export function useFormattedDuration(seconds: number) {
  return useMemo(() => {
    const y = Math.floor(seconds / (3600 * 24 * 365));
    const mo = Math.floor((seconds % (3600 * 24 * 365)) / (3600 * 24 * 30));
    const d = Math.floor((seconds % (3600 * 24 * 30)) / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    const parts = [];
    if (y) parts.push(`${y} an${y > 1 ? "s" : ""}`);
    if (mo) parts.push(`${mo} mois`);
    if (d) parts.push(`${d} jour${d > 1 ? "s" : ""}`);
    if (h) parts.push(`${h}h`);
    if (m) parts.push(`${m}min`);
    if (s) parts.push(`${s}s`);

    return parts.join(" ");
  }, [seconds]);
}
