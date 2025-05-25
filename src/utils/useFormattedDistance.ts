import { useMemo } from "react";

export function useFormattedDistance(cm: number): string {
  return useMemo(() => {
    if (cm < 100) return `${cm} cm`;

    const meters = cm / 100;

    if (meters < 1000) {
    return `${meters.toFixed(meters % 1 === 0 ? 0 : 2)} m`;
  }

  const km = meters / 1000;
  return `${km.toFixed(km % 1 === 0 ? 0 : 2)} km`;
}, [cm]);
}
