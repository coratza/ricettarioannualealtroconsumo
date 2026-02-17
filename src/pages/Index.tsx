import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { MONTH_NAMES, MONTH_EMOJI } from '@/data/months';
import { getIngredientsForMonth, getTopIngredients, getIngredientsByCategory, CATEGORY_LABELS, type IngredientCategory } from '@/data/ingredients';
import { getRecipesForMonth, getQuickRecipes, getTraditionalRecipes } from '@/data/recipes';
import { Layout } from '@/components/layout/Layout';
import { OnboardingModal } from '@/components/OnboardingModal';
import { IngredientCard } from '@/components/IngredientCard';
import { RecipeCard } from '@/components/RecipeCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChefHat, Sparkles } from 'lucide-react';

const Index = () => {
  const { currentMonth, isSimpleMode } = useApp();
  const [activeCategory, setActiveCategory] = useState<'frutta' | 'verdura' | 'altro'>('frutta');

  const monthIngredients = useMemo(() => {
    if (isSimpleMode) return getTopIngredients(currentMonth);
    return getIngredientsForMonth(currentMonth);
  }, [currentMonth, isSimpleMode]);

  const byCategory = useMemo(() => getIngredientsByCategory(monthIngredients), [monthIngredients]);
  const monthRecipes = useMemo(() => getRecipesForMonth(currentMonth), [currentMonth]);
  const quickRecipes = useMemo(() => getQuickRecipes(currentMonth), [currentMonth]);
  const traditionalRecipes = useMemo(() => getTraditionalRecipes(currentMonth), [currentMonth]);

  const frutta = byCategory.frutta || [];
  const verdura = byCategory.verdura || [];
  const altro = [
    ...(byCategory.erbe || []),
    ...(byCategory.funghi || []),
    ...(byCategory.legumi_freschi || []),
    ...(byCategory.frutta_secca || []),
  ];

  return (
    <Layout>
      <OnboardingModal />

      {/* Hero */}
      <section className="bg-season-bg border-b border-border">
        <div className="container mx-auto px-4 py-8 md:py-12 text-center">
          <p className="text-boomer-lg text-muted-foreground mb-2">
            Questo mese è:
          </p>
          <h2 className="text-boomer-3xl md:text-boomer-4xl font-display font-bold mb-3">
            {MONTH_EMOJI[currentMonth - 1]} {MONTH_NAMES[currentMonth - 1]}
          </h2>
          <p className="text-boomer-base text-muted-foreground mb-6 max-w-lg mx-auto">
            Ricette semplici e di stagione, senza complicazioni.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/cosa-cucino">
              <Button className="btn-boomer text-boomer-lg bg-primary hover:bg-primary/90 shadow-lg">
                <ChefHat size={24} /> Cosa cucino stasera?
              </Button>
            </Link>
            <Link to="/calendario">
              <Button variant="outline" className="btn-boomer text-boomer-lg">
                📅 Vedi tutti i mesi
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* In stagione ora */}
        <section>
          <h2 className="section-title">🌿 In stagione ora</h2>
          <p className="text-boomer-base text-muted-foreground mb-6">
            {isSimpleMode 
              ? `I migliori ingredienti di ${MONTH_NAMES[currentMonth - 1]}.`
              : `Tutti gli ingredienti disponibili a ${MONTH_NAMES[currentMonth - 1]}: ${monthIngredients.length} ingredienti.`
            }
          </p>

          <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as any)}>
            <TabsList className="mb-4 h-auto gap-1">
              <TabsTrigger value="frutta" className="text-boomer-sm py-2 px-4">🍎 Frutta ({frutta.length})</TabsTrigger>
              <TabsTrigger value="verdura" className="text-boomer-sm py-2 px-4">🥬 Verdura ({verdura.length})</TabsTrigger>
              <TabsTrigger value="altro" className="text-boomer-sm py-2 px-4">🌿 Altri ({altro.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="frutta">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {frutta.map(i => <IngredientCard key={i.id} ingredient={i} compact={isSimpleMode} />)}
              </div>
              {frutta.length === 0 && <p className="text-boomer-base text-muted-foreground py-8 text-center">Nessuna frutta di stagione questo mese.</p>}
            </TabsContent>
            <TabsContent value="verdura">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {verdura.map(i => <IngredientCard key={i.id} ingredient={i} compact={isSimpleMode} />)}
              </div>
              {verdura.length === 0 && <p className="text-boomer-base text-muted-foreground py-8 text-center">Nessuna verdura di stagione questo mese.</p>}
            </TabsContent>
            <TabsContent value="altro">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {altro.map(i => <IngredientCard key={i.id} ingredient={i} compact={isSimpleMode} />)}
              </div>
              {altro.length === 0 && <p className="text-boomer-base text-muted-foreground py-8 text-center">Nessun altro ingrediente di stagione questo mese.</p>}
            </TabsContent>
          </Tabs>
        </section>

        {/* Quick recipes */}
        {quickRecipes.length > 0 && (
          <section>
            <h2 className="section-title">⚡ Ricette veloci del mese</h2>
            <p className="text-boomer-base text-muted-foreground mb-6">Pronte in 30 minuti o meno.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickRecipes.slice(0, isSimpleMode ? 3 : 6).map(r => <RecipeCard key={r.id} recipe={r} />)}
            </div>
            {quickRecipes.length > 3 && (
              <div className="text-center mt-6">
                <Link to="/ricette">
                  <Button variant="outline" className="btn-boomer">Vedi tutte le ricette →</Button>
                </Link>
              </div>
            )}
          </section>
        )}

        {/* Traditional recipes */}
        {traditionalRecipes.length > 0 && (
          <section>
            <h2 className="section-title">🏛️ Ricette della tradizione</h2>
            <p className="text-boomer-base text-muted-foreground mb-6">Piatti regionali italiani con ingredienti di stagione.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {traditionalRecipes.slice(0, 3).map(r => <RecipeCard key={r.id} recipe={r} />)}
            </div>
          </section>
        )}

        {/* All month recipes */}
        {!isSimpleMode && monthRecipes.length > 0 && (
          <section>
            <h2 className="section-title">📖 Tutte le ricette di {MONTH_NAMES[currentMonth - 1]}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {monthRecipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Index;
