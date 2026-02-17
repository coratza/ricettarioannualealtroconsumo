import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getCurrentMonthIndex, getSeasonForMonth, SEASON_CLASS, type SeasonName } from '@/data/months';

interface AppState {
  currentMonth: number; // 1-based
  isSimpleMode: boolean;
  favorites: { ingredients: string[]; recipes: string[] };
  fridgeItems: string[];
  hasSeenOnboarding: boolean;
  season: SeasonName;
}

interface AppContextType extends AppState {
  setMonth: (m: number) => void;
  toggleMode: () => void;
  toggleFavoriteIngredient: (id: string) => void;
  toggleFavoriteRecipe: (id: string) => void;
  isFavoriteIngredient: (id: string) => boolean;
  isFavoriteRecipe: (id: string) => boolean;
  addToFridge: (id: string) => void;
  removeFromFridge: (id: string) => void;
  clearFridge: () => void;
  dismissOnboarding: () => void;
  trackEvent: (event: string, data?: Record<string, unknown>) => void;
}

const AppContext = createContext<AppContextType | null>(null);

function loadState(): Partial<AppState> {
  try {
    const raw = localStorage.getItem('stagioni-cucina-state');
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveState(state: Partial<AppState>) {
  try {
    localStorage.setItem('stagioni-cucina-state', JSON.stringify(state));
  } catch {}
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const saved = loadState();
  const autoMonth = getCurrentMonthIndex() + 1; // 1-based

  const [currentMonth, setCurrentMonth] = useState(saved.currentMonth || autoMonth);
  const [isSimpleMode, setIsSimpleMode] = useState(saved.isSimpleMode !== undefined ? saved.isSimpleMode : true);
  const [favorites, setFavorites] = useState(saved.favorites || { ingredients: [], recipes: [] });
  const [fridgeItems, setFridgeItems] = useState<string[]>(saved.fridgeItems || []);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(saved.hasSeenOnboarding || false);

  const season = getSeasonForMonth(currentMonth - 1);

  // Apply season class to document
  useEffect(() => {
    const root = document.documentElement;
    Object.values(SEASON_CLASS).forEach(cls => root.classList.remove(cls));
    root.classList.add(SEASON_CLASS[season]);
  }, [season]);

  // Persist state
  useEffect(() => {
    saveState({ currentMonth, isSimpleMode, favorites, fridgeItems, hasSeenOnboarding });
  }, [currentMonth, isSimpleMode, favorites, fridgeItems, hasSeenOnboarding]);

  const setMonth = useCallback((m: number) => {
    setCurrentMonth(m);
    trackEvent('month_changed', { month: m });
  }, []);

  const toggleMode = useCallback(() => {
    setIsSimpleMode(prev => !prev);
    trackEvent('mode_toggled');
  }, []);

  const toggleFavoriteIngredient = useCallback((id: string) => {
    setFavorites(prev => ({
      ...prev,
      ingredients: prev.ingredients.includes(id)
        ? prev.ingredients.filter(i => i !== id)
        : [...prev.ingredients, id]
    }));
    trackEvent('favorite_ingredient', { id });
  }, []);

  const toggleFavoriteRecipe = useCallback((id: string) => {
    setFavorites(prev => ({
      ...prev,
      recipes: prev.recipes.includes(id)
        ? prev.recipes.filter(i => i !== id)
        : [...prev.recipes, id]
    }));
    trackEvent('favorite_recipe', { id });
  }, []);

  const isFavoriteIngredient = useCallback((id: string) => favorites.ingredients.includes(id), [favorites.ingredients]);
  const isFavoriteRecipe = useCallback((id: string) => favorites.recipes.includes(id), [favorites.recipes]);

  const addToFridge = useCallback((id: string) => {
    setFridgeItems(prev => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  const removeFromFridge = useCallback((id: string) => {
    setFridgeItems(prev => prev.filter(i => i !== id));
  }, []);

  const clearFridge = useCallback(() => setFridgeItems([]), []);

  const dismissOnboarding = useCallback(() => setHasSeenOnboarding(true), []);

  const trackEvent = useCallback((event: string, data?: Record<string, unknown>) => {
    console.log('[Analytics]', event, data);
  }, []);

  return (
    <AppContext.Provider value={{
      currentMonth, isSimpleMode, favorites, fridgeItems, hasSeenOnboarding, season,
      setMonth, toggleMode, toggleFavoriteIngredient, toggleFavoriteRecipe,
      isFavoriteIngredient, isFavoriteRecipe,
      addToFridge, removeFromFridge, clearFridge,
      dismissOnboarding, trackEvent,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
