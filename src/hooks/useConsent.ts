import { useState } from "react";

export const useConsent = () => {
  const [hasConsented, setHasConsented] = useState(() => {
    return localStorage.getItem("hasConsented") === "true";
  });

  const saveConsent = () => {
    localStorage.setItem("hasConsented", "true");
    setHasConsented(true);
  };

  return { hasConsented, saveConsent };
};
