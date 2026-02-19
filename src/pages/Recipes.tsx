import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { getRecipesForMonth, searchRecipes, getRecipeBook, type Recipe, type Difficulty, type CookingMethod, type DietTag, type RecipeBook } from '@/data/recipes';
import { Layout } from '@/components/layout/Layout';
import { RecipeCard } from '@/components/RecipeCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Recipes() {
  const { currentMonth, isSimpleMode } = useApp();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const ingredientFilter = searchParams.get('ingrediente') || '';
  
  const [search, setSearch] = useState(initialQuery);
  const [timeFilter, setTimeFilter] = useState<number | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | null>(null);
  const [methodFilter, setMethodFilter] = useState<CookingMethod | null>(null);
  const [dietFilter, setDietFilter] = useState<DietTag | null>(null);
  const [bookFilter, setBookFilter] = useState<RecipeBook | null>(null);
  const [meatOnly, setMeatOnly] = useState(false);

  const allRecipes = useMemo(() => getRecipesForMonth(currentMonth), [currentMonth]);

  const displayed = useMemo(() => {
    let items = search ? searchRecipes(search) : allRecipes;
    if (ingredientFilter) {
      items = items.filter(r => r.ingredientIds.includes(ingredientFilter));
    }
    if (timeFilter) items = items.filter(r => r.time <= timeFilter);
    if (difficultyFilter) items = items.filter(r => r.difficulty === difficultyFilter);
    if (methodFilter) items = items.filter(r => r.method === methodFilter);
    if (dietFilter) items = items.filter(r => r.dietTags.includes(dietFilter));
    if (bookFilter) items = items.filter(r => getRecipeBook(r) === bookFilter);
    if (meatOnly) items = items.filter(r => r.containsMeat);
    return items;
  }, [search, allRecipes, ingredientFilter, timeFilter, difficultyFilter, methodFilter, dietFilter, bookFilter, meatOnly]);

  const clearFilters = () => {
    setTimeFilter(null);
    setDifficultyFilter(null);
    setMethodFilter(null);
    setDietFilter(null);
    setBookFilter(null);
    setMeatOnly(false);
  };

  const hasFilters = timeFilter || difficultyFilter || methodFilter || dietFilter || bookFilter || meatOnly;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="section-title mb-2">👨‍🍳 Ricette di stagione</h1>
        <p className="text-boomer-base text-muted-foreground mb-6">
          {allRecipes.length} ricette per questo mese.
        </p>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="search"
            placeholder="Cerca una ricetta…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10 h-12 text-boomer-base"
          />
        </div>

        {/* Filters */}
        {!isSimpleMode && (
          <div className="space-y-3 mb-6">
            {/* Time */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-boomer-sm font-semibold w-20">⏱️ Tempo:</span>
              {[15, 30, 60].map(t => (
                <Button key={t} variant={timeFilter === t ? 'default' : 'outline'} size="sm" className="text-boomer-sm"
                  onClick={() => setTimeFilter(timeFilter === t ? null : t)}>
                  {'<'} {t} min
                </Button>
              ))}
            </div>
            {/* Difficulty */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-boomer-sm font-semibold w-20">🎯 Livello:</span>
              {(['facile', 'media'] as Difficulty[]).map(d => (
                <Button key={d} variant={difficultyFilter === d ? 'default' : 'outline'} size="sm" className="text-boomer-sm"
                  onClick={() => setDifficultyFilter(difficultyFilter === d ? null : d)}>
                  {d}
                </Button>
              ))}
            </div>
            {/* Method */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-boomer-sm font-semibold w-20">🍳 Metodo:</span>
              {([['padella', '🍳 Padella'], ['forno', '🔥 Forno'], ['pentola', '🍲 Pentola'], ['crudo', '🥗 Crudo']] as [CookingMethod, string][]).map(([m, label]) => (
                <Button key={m} variant={methodFilter === m ? 'default' : 'outline'} size="sm" className="text-boomer-sm"
                  onClick={() => setMethodFilter(methodFilter === m ? null : m)}>
                  {label}
                </Button>
              ))}
            </div>
            {/* Diet */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-boomer-sm font-semibold w-20">🏷️ Dieta:</span>
              {([['vegetariana', 'Vegetariana'], ['vegana', 'Vegana'], ['senza_lattosio', 'Senza lattosio'], ['senza_glutine', 'Senza glutine']] as [DietTag, string][]).map(([d, label]) => (
                <Button key={d} variant={dietFilter === d ? 'default' : 'outline'} size="sm" className="text-boomer-sm"
                  onClick={() => setDietFilter(dietFilter === d ? null : d)}>
                  {label}
                </Button>
              ))}
            </div>
            {/* Ricettario */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-boomer-sm font-semibold w-20">📚 Stile:</span>
              {([['tradizione', 'Tradizione'], ['stellata', 'Cucina stellata'], ['casa_veloce', 'Casa veloce']] as [RecipeBook, string][]).map(([b, label]) => (
                <Button key={b} variant={bookFilter === b ? 'default' : 'outline'} size="sm" className="text-boomer-sm"
                  onClick={() => setBookFilter(bookFilter === b ? null : b)}>
                  {label}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-boomer-sm font-semibold w-20">🥩 Proteine:</span>
              <Button variant={meatOnly ? 'default' : 'outline'} size="sm" className="text-boomer-sm" onClick={() => setMeatOnly(prev => !prev)}>
                Solo ricette con carne
              </Button>
            </div>

            {hasFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-boomer-sm text-muted-foreground">
                ✕ Rimuovi filtri
              </Button>
            )}
          </div>
        )}

        {/* Simple mode: just time filter */}
        {isSimpleMode && (
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-boomer-base font-semibold">Tempo:</span>
            {[15, 30, 60].map(t => (
              <Button key={t} variant={timeFilter === t ? 'default' : 'outline'} className="btn-boomer"
                onClick={() => setTimeFilter(timeFilter === t ? null : t)}>
                {'<'} {t} min
              </Button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map(r => <RecipeCard key={r.id} recipe={r} />)}
        </div>

        {displayed.length === 0 && (
          <p className="text-boomer-base text-muted-foreground text-center py-12">
            Nessuna ricetta trovata. Prova a cambiare i filtri o il termine di ricerca.
          </p>
        )}
      </div>
    </Layout>
  );
}
