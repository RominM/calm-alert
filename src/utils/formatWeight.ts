import { useMemo } from "react";

export function useFormattedWeight(g: number) {
  return useMemo(() => {
    if (g < 1000) return `${g} g`;
    
    const kg = Math.floor(g / 1000);
    if (kg < 1000) return `${kg} kg`;
    
    const t = Math.floor(kg / 1000);
    return `${t} t`;
  }, [g]);
}
