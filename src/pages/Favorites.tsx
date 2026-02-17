import { useMemo } from 'react';
import { useApp } from '@/contexts/AppContext';
import { ingredients } from '@/data/ingredients';
import { recipes, getRecipesByFridge } from '@/data/recipes';
import { Layout } from '@/components/layout/Layout';
import { IngredientCard } from '@/components/IngredientCard';
import { RecipeCard } from '@/components/RecipeCard';
import { Button } from '@/components/ui/button';
import { Heart, Printer } from 'lucide-react';

export default function Favorites() {
  const { favorites, fridgeItems, clearFridge, trackEvent } = useApp();

  const favIngredients = useMemo(
    () => ingredients.filter(i => favorites.ingredients.includes(i.id)),
    [favorites.ingredients]
  );

  const favRecipes = useMemo(
    () => recipes.filter(r => favorites.recipes.includes(r.id)),
    [favorites.recipes]
  );

  const fridgeIngredients = useMemo(
    () => ingredients.filter(i => fridgeItems.includes(i.id)),
    [fridgeItems]
  );

  const fridgeRecipes = useMemo(
    () => getRecipesByFridge(fridgeItems),
    [fridgeItems]
  );

  const handlePrintShoppingList = () => {
    trackEvent('print_shopping_list');
    window.print();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="section-title mb-8"><Heart className="inline" size={28} /> I tuoi preferiti</h1>

        {/* Fridge section */}
        {fridgeItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-boomer-xl font-display font-bold">🧊 Il tuo frigo ({fridgeItems.length} ingredienti)</h2>
              <Button variant="ghost" size="sm" onClick={clearFridge} className="text-boomer-sm text-muted-foreground">
                Svuota frigo
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {fridgeIngredients.map(i => (
                <span key={i.id} className="inline-flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-full text-boomer-sm font-medium">
                  {i.name}
                </span>
              ))}
            </div>

            {fridgeRecipes.length > 0 && (
              <>
                <h3 className="text-boomer-lg font-bold mb-4">👨‍🍳 Ricette che puoi preparare:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  {fridgeRecipes.slice(0, 6).map(({ recipe, matchPercent }) => (
                    <RecipeCard key={recipe.id} recipe={recipe} matchPercent={matchPercent} />
                  ))}
                </div>
              </>
            )}

            {/* Shopping list for missing ingredients */}
            <div className="print-only">
              <h2>📋 Lista della spesa</h2>
              <p>Ingredienti mancanti per le ricette suggerite:</p>
              <ul>
                {fridgeRecipes.slice(0, 3).map(({ recipe }) => (
                  <li key={recipe.id}>
                    <strong>{recipe.title}:</strong> {recipe.pantryIngredients.join(', ')}
                    {recipe.ingredientIds.filter(id => !fridgeItems.includes(id)).map(id => {
                      const ing = ingredients.find(i => i.id === id);
                      return ing ? `, ${ing.name}` : '';
                    }).join('')}
                  </li>
                ))}
              </ul>
              <div className="print-notes"></div>
            </div>
            <Button variant="outline" className="btn-boomer" onClick={handlePrintShoppingList}>
              <Printer size={20} /> Stampa lista della spesa
            </Button>
          </section>
        )}

        {/* Favorite ingredients */}
        <section className="mb-12">
          <h2 className="text-boomer-xl font-display font-bold mb-4">🍎 Ingredienti preferiti ({favIngredients.length})</h2>
          {favIngredients.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {favIngredients.map(i => <IngredientCard key={i.id} ingredient={i} />)}
            </div>
          ) : (
            <p className="text-boomer-base text-muted-foreground py-8 text-center bg-secondary/50 rounded-xl">
              Non hai ancora ingredienti preferiti. Tocca il ❤️ su un ingrediente per salvarlo qui.
            </p>
          )}
        </section>

        {/* Favorite recipes */}
        <section>
          <h2 className="text-boomer-xl font-display font-bold mb-4">👨‍🍳 Ricette preferite ({favRecipes.length})</h2>
          {favRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {favRecipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
            </div>
          ) : (
            <p className="text-boomer-base text-muted-foreground py-8 text-center bg-secondary/50 rounded-xl">
              Non hai ancora ricette preferite. Tocca il ❤️ su una ricetta per salvarla qui.
            </p>
          )}
        </section>
      </div>
    </Layout>
  );
}
