import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Printer } from 'lucide-react';
import { ingredients, CATEGORY_LABELS, MARKET_TIPS } from '@/data/ingredients';
import { recipes } from '@/data/recipes';
import { useApp } from '@/contexts/AppContext';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RecipeCard } from '@/components/RecipeCard';
import { MONTH_NAMES } from '@/data/months';

export default function IngredientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavoriteIngredient, toggleFavoriteIngredient, addToFridge, trackEvent, currentMonth } = useApp();
  const ingredient = ingredients.find(i => i.id === id);

  if (!ingredient) {
    return <Layout><div className="container mx-auto px-4 py-12 text-center"><p className="text-boomer-xl">Ingrediente non trovato</p></div></Layout>;
  }

  const isFav = isFavoriteIngredient(ingredient.id);
  const relatedRecipes = recipes.filter(r => r.ingredientIds.includes(ingredient.id));
  const tips = MARKET_TIPS[ingredient.category];
  const seasonMonths = ingredient.months.map(m => MONTH_NAMES[m - 1]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-boomer-base text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft size={20} /> Torna indietro
        </button>

        <div className="flex items-start justify-between gap-3 mb-4">
          <h1 className="text-boomer-2xl md:text-boomer-3xl font-display font-bold">{ingredient.name}</h1>
          <button
            onClick={() => toggleFavoriteIngredient(ingredient.id)}
            className={`shrink-0 p-2 rounded-full ${isFav ? 'text-red-500' : 'text-muted-foreground hover:text-red-400'}`}
          >
            <Heart size={28} fill={isFav ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="text-boomer-sm py-1.5 px-3">{CATEGORY_LABELS[ingredient.category]}</Badge>
          {ingredient.months.includes(currentMonth) && (
            <Badge className="text-boomer-sm py-1.5 px-3">🌿 Di stagione ora</Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="outline" className="btn-boomer" onClick={() => { addToFridge(ingredient.id); }}>
            🧊 Aggiungi al frigo
          </Button>
          <Button variant="outline" className="btn-boomer" onClick={() => { trackEvent('print_ingredient', { id: ingredient.id }); window.print(); }}>
            <Printer size={20} /> Stampa scheda
          </Button>
        </div>

        {/* Months */}
        <section className="mb-8">
          <h2 className="text-boomer-xl font-display font-bold mb-3">📅 Mesi di stagione</h2>
          <div className="flex flex-wrap gap-2">
            {ingredient.months.map(m => (
              <Badge key={m} variant={m === currentMonth ? 'default' : 'outline'} className="text-boomer-sm py-1 px-3">
                {MONTH_NAMES[m - 1]}
              </Badge>
            ))}
          </div>
        </section>

        {/* Market tips */}
        {tips && (
          <section className="mb-8 space-y-6">
            <div>
              <h2 className="text-boomer-xl font-display font-bold mb-3">🛒 Come scegliere</h2>
              <ul className="space-y-2">
                {tips.choose.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-boomer-base p-3 bg-card rounded-lg border border-border">
                    <span className="text-primary font-bold">✓</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-boomer-xl font-display font-bold mb-3">❄️ Come conservare</h2>
              <ul className="space-y-2">
                {tips.store.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-boomer-base p-3 bg-card rounded-lg border border-border">
                    <span className="text-primary font-bold">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-boomer-xl font-display font-bold mb-3">♻️ Idee antispreco</h2>
              <ul className="space-y-2">
                {tips.noWaste.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-boomer-base p-3 bg-card rounded-lg border border-border">
                    <span className="text-primary font-bold">💡</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Related recipes */}
        {relatedRecipes.length > 0 && (
          <section className="mb-8">
            <h2 className="text-boomer-xl font-display font-bold mb-4">👨‍🍳 Ricette con {ingredient.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedRecipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
