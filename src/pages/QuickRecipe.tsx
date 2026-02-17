import { useState, useMemo } from 'react';
import { useApp } from '@/contexts/AppContext';
import { getQuickRecipes, getRecipesForMonth, QUICK_TAGS, type Recipe } from '@/data/recipes';
import { MONTH_NAMES } from '@/data/months';
import { Layout } from '@/components/layout/Layout';
import { RecipeCard } from '@/components/RecipeCard';
import { Button } from '@/components/ui/button';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function QuickRecipe() {
  const { currentMonth, trackEvent } = useApp();
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  
  const allQuick = useMemo(() => getQuickRecipes(currentMonth), [currentMonth]);
  const allMonth = useMemo(() => getRecipesForMonth(currentMonth), [currentMonth]);

  const filtered = useMemo(() => {
    if (!activeTag) return allQuick;
    const tag = QUICK_TAGS.find(t => t.id === activeTag);
    if (!tag) return allQuick;
    return allMonth.filter(tag.filter);
  }, [activeTag, allQuick, allMonth]);

  const [randomSeed, setRandomSeed] = useState(0);
  const suggestions = useMemo(() => {
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [filtered, randomSeed]);

  const handleReveal = () => {
    setRevealed(true);
    setRandomSeed(prev => prev + 1);
    trackEvent('cosa_cucino', { tag: activeTag });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-boomer-3xl font-display font-bold mb-3">
            🍽️ Cosa cucino stasera?
          </h1>
          <p className="text-boomer-base text-muted-foreground max-w-lg mx-auto">
            Ti suggeriamo ricette facili e veloci con ingredienti di {MONTH_NAMES[currentMonth - 1]}.
            Scegli cosa ti va di più.
          </p>
        </div>

        {/* Quick tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {QUICK_TAGS.map(tag => (
            <Button
              key={tag.id}
              variant={activeTag === tag.id ? 'default' : 'outline'}
              className="btn-boomer text-boomer-base"
              onClick={() => setActiveTag(activeTag === tag.id ? null : tag.id)}
            >
              {tag.label}
            </Button>
          ))}
        </div>

        {/* Reveal button */}
        <div className="text-center mb-8">
          <Button className="btn-boomer text-boomer-xl px-10 py-6 shadow-xl" onClick={handleReveal}>
            <Sparkles size={28} /> 
            {revealed ? 'Cambia idea!' : 'Scopri le proposte!'}
          </Button>
        </div>

        {/* Results */}
        {revealed && (
          <div className="space-y-4">
            {suggestions.length > 0 ? (
              <>
                <p className="text-boomer-lg text-center text-muted-foreground mb-4">
                  Ecco {suggestions.length} {suggestions.length === 1 ? 'idea' : 'idee'} per stasera:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {suggestions.map(r => <RecipeCard key={r.id} recipe={r} />)}
                </div>
                <div className="text-center mt-6">
                  <Button variant="outline" className="btn-boomer" onClick={handleReveal}>
                    <RefreshCw size={20} /> Non mi convince, cambia!
                  </Button>
                </div>
              </>
            ) : (
              <p className="text-boomer-base text-center text-muted-foreground py-8">
                Nessuna ricetta trovata con questi criteri. Prova a cambiare le opzioni.
              </p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
