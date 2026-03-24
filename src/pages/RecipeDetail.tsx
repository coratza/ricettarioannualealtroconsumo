import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Heart, Printer, ChefHat, BookOpen, Timer, Clock, Users, X } from 'lucide-react';
import { recipes, type Recipe } from '@/data/recipes';
import { ingredients } from '@/data/ingredients';
import { RECIPE_IMAGES } from '@/data/images';
import { useApp } from '@/contexts/AppContext';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavoriteRecipe, toggleFavoriteRecipe, trackEvent } = useApp();
  const recipe = recipes.find(r => r.id === id);
  const [cookingMode, setCookingMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  // Wake lock for cooking mode
  useEffect(() => {
    if (cookingMode && 'wakeLock' in navigator) {
      let wl: WakeLockSentinel | null = null;
      (navigator as any).wakeLock.request('screen').then((lock: WakeLockSentinel) => { wl = lock; }).catch(() => {});
      return () => { wl?.release(); };
    }
  }, [cookingMode]);

  // Timer logic
  useEffect(() => {
    if (timerRunning && timerSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            setTimerRunning(false);
            // Could play a sound here
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [timerRunning, timerSeconds]);

  if (!recipe) {
    return <Layout><div className="container mx-auto px-4 py-12 text-center"><p className="text-boomer-xl">Ricetta non trovata</p></div></Layout>;
  }

  const isFav = isFavoriteRecipe(recipe.id);
  const recipeIngredients = recipe.ingredientIds.map(id => ingredients.find(i => i.id === id)).filter(Boolean);
  const currentStepData = recipe.steps[currentStep];

  const startTimer = (minutes: number) => {
    setTimerSeconds(minutes * 60);
    setTimerRunning(true);
  };

  const formatTimer = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handlePrint = () => {
    trackEvent('print_recipe', { id: recipe.id });
    window.print();
  };

  // Cooking mode view
  if (cookingMode) {
    return (
      <div className="fixed inset-0 z-[100] bg-background flex flex-col">
        {/* Cooking header */}
        <div className="flex items-center justify-between p-4 border-b-2 border-border bg-card">
          <h2 className="font-display text-boomer-lg font-bold truncate">{recipe.title}</h2>
          <div className="flex items-center gap-2">
            <span className="text-boomer-base text-muted-foreground">
              Passo {currentStep + 1} di {recipe.steps.length}
            </span>
            <button onClick={() => setCookingMode(false)} className="p-2 rounded-lg hover:bg-secondary" aria-label="Esci dalla modalità cucina">
              <X size={28} />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-secondary">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((currentStep + 1) / recipe.steps.length) * 100}%` }} />
        </div>

        {/* Step content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto">
          <p className="text-boomer-2xl md:text-boomer-3xl leading-relaxed font-display">
            {currentStepData.text}
          </p>
          
          {currentStepData.duration && (
            <div className="mt-8 space-y-3">
              {timerRunning ? (
                <div className="text-center">
                  <p className="text-boomer-4xl font-bold font-display tabular-nums text-primary">{formatTimer(timerSeconds)}</p>
                  <Button variant="outline" size="lg" className="mt-2 btn-boomer" onClick={() => setTimerRunning(false)}>
                    Pausa
                  </Button>
                </div>
              ) : timerSeconds > 0 ? (
                <div className="text-center">
                  <p className="text-boomer-4xl font-bold font-display tabular-nums">{formatTimer(timerSeconds)}</p>
                  <Button size="lg" className="mt-2 btn-boomer" onClick={() => setTimerRunning(true)}>
                    Riprendi
                  </Button>
                </div>
              ) : (
                <Button size="lg" className="btn-boomer" onClick={() => startTimer(currentStepData.duration!)}>
                  <Timer size={22} /> Avvia timer ({currentStepData.duration} min)
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4 p-6 border-t-2 border-border bg-card">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 btn-boomer text-boomer-lg"
            disabled={currentStep === 0}
            onClick={() => { setCurrentStep(prev => prev - 1); setTimerRunning(false); setTimerSeconds(0); }}
          >
            <ArrowLeft size={24} /> Indietro
          </Button>
          <Button
            size="lg"
            className="flex-1 btn-boomer text-boomer-lg"
            onClick={() => {
              if (currentStep < recipe.steps.length - 1) {
                setCurrentStep(prev => prev + 1);
                setTimerRunning(false);
                setTimerSeconds(0);
              } else {
                setCookingMode(false);
              }
            }}
          >
            {currentStep < recipe.steps.length - 1 ? (
              <>Avanti <ArrowRight size={24} /></>
            ) : (
              <>Fatto! 🎉</>
            )}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        {/* Back */}
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-boomer-base text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft size={20} /> Torna indietro
        </button>

        {/* Title */}
        <div className="flex items-start justify-between gap-3 mb-6">
          <h1 className="text-boomer-2xl md:text-boomer-3xl font-display font-bold">{recipe.title}</h1>
          <button
            onClick={() => toggleFavoriteRecipe(recipe.id)}
            className={`shrink-0 p-2 rounded-full ${isFav ? 'text-red-500' : 'text-muted-foreground hover:text-red-400'}`}
          >
            <Heart size={28} fill={isFav ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge variant="secondary" className="text-boomer-sm py-1.5 px-3"><Clock size={16} /> {recipe.time} minuti</Badge>
          <Badge variant="secondary" className="text-boomer-sm py-1.5 px-3"><Users size={16} /> {recipe.servings} porzioni</Badge>
          <Badge variant="secondary" className="text-boomer-sm py-1.5 px-3">
            {recipe.difficulty === 'facile' ? '🟢' : '🟡'} {recipe.difficulty}
          </Badge>
          {recipe.isTraditional && <Badge className="text-boomer-sm py-1.5 px-3">🏛️ {recipe.region}</Badge>}
        </div>

        {recipe.culturalNote && (
          <p className="text-boomer-base text-muted-foreground italic bg-secondary/50 p-4 rounded-xl mb-6">
            📖 {recipe.culturalNote}
          </p>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button className="btn-boomer" onClick={() => { setCookingMode(true); setCurrentStep(0); trackEvent('cooking_mode', { id: recipe.id }); }}>
            <ChefHat size={22} /> Modalità cucina
          </Button>
          <Button variant="outline" className="btn-boomer" onClick={handlePrint}>
            <Printer size={22} /> Stampa ricetta
          </Button>
        </div>

        {/* Ingredients */}
        <section className="mb-8">
          <h2 className="text-boomer-xl font-display font-bold mb-4">🧂 Ingredienti</h2>
          <div className="bg-card rounded-xl border-2 border-border p-5 space-y-2">
            {recipeIngredients.map(ing => ing && (
              <div key={ing.id} className="flex items-center gap-2 text-boomer-base py-1.5 border-b border-border/50 last:border-0">
                <span className="text-lg">•</span>
                <span className="font-medium">{ing.name}</span>
                {ing.months.includes(new Date().getMonth() + 1) && (
                  <Badge variant="outline" className="text-xs ml-auto">di stagione</Badge>
                )}
              </div>
            ))}
            {recipe.pantryIngredients.map(p => (
              <div key={p} className="flex items-center gap-2 text-boomer-base py-1.5 border-b border-border/50 last:border-0 text-muted-foreground">
                <span className="text-lg">•</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="mb-8">
          <h2 className="text-boomer-xl font-display font-bold mb-4">👨‍🍳 Procedimento</h2>
          <div className="space-y-4">
            {recipe.steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start p-4 bg-card rounded-xl border border-border">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-boomer-base shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-boomer-base">{step.text}</p>
                  {step.duration && (
                    <p className="text-boomer-sm text-muted-foreground mt-1 flex items-center gap-1">
                      <Timer size={14} /> {step.duration} minuti
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diet tags */}
        {recipe.dietTags.length > 0 && (
          <section className="mb-8">
            <h2 className="text-boomer-xl font-display font-bold mb-3">🏷️ Adatta per</h2>
            <div className="flex flex-wrap gap-2">
              {recipe.dietTags.map(t => (
                <Badge key={t} variant="outline" className="text-boomer-sm py-1 px-3">
                  {t.replace(/_/g, ' ')}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Print section */}
        <div className="print-only">
          <h1>{recipe.title}</h1>
          <p>Tempo: {recipe.time} min | Porzioni: {recipe.servings} | Difficoltà: {recipe.difficulty}</p>
          <h2>Ingredienti</h2>
          <ul>
            {recipeIngredients.map(ing => ing && <li key={ing.id}>{ing.name}</li>)}
            {recipe.pantryIngredients.map(p => <li key={p}>{p}</li>)}
          </ul>
          <h2>Procedimento</h2>
          <ol>
            {recipe.steps.map((step, i) => <li key={i}>{step.text}{step.duration ? ` (${step.duration} min)` : ''}</li>)}
          </ol>
          <div className="print-notes"></div>
        </div>
      </div>
    </Layout>
  );
}
