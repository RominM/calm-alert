import { useState, useEffect, useCallback } from "react";
import { Preferences } from "@capacitor/preferences";

type AppState = {
  isMuted: boolean;
  isPaused: boolean;
  lastUnlockTimestamp: number | null;
};

const defaultState: AppState = {
  isMuted: false,
  isPaused: false,
  lastUnlockTimestamp: null,
};

const STORAGE_KEY = "calmAlertAppState";

export const useLocalAppState = () => {
  const [state, setState] = useState<AppState>(defaultState);

  // Charger l’état depuis le storage au démarrage
  useEffect(() => {
    const loadState = async () => {
      const result = await Preferences.get({ key: STORAGE_KEY });
      if (result.value) {
        setState(JSON.parse(result.value));
      }
    };
    loadState();
  }, []);

  // Sauvegarder à chaque changement
  useEffect(() => {
    Preferences.set({ key: STORAGE_KEY, value: JSON.stringify(state) });
  }, [state]);

  // Fonctions de mise à jour
  const toggleMute = useCallback(() => {
    setState((prev) => ({ ...prev, isMuted: !prev.isMuted }));
  }, []);

  const togglePause = useCallback(() => {
    setState((prev) => ({ ...prev, isPaused: !prev.isPaused }));
  }, []);

  const setUnlockTimestamp = useCallback((timestamp: number) => {
    setState((prev) => ({ ...prev, lastUnlockTimestamp: timestamp }));
  }, []);

  return {
    isMuted: state.isMuted,
    isPaused: state.isPaused,
    lastUnlockTimestamp: state.lastUnlockTimestamp,
    toggleMute,
    togglePause,
    setUnlockTimestamp,
  };
};
