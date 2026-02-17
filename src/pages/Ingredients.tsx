import { useState, useMemo } from 'react';
import { useApp } from '@/contexts/AppContext';
import { getIngredientsForMonth, getIngredientsByCategory, CATEGORY_LABELS, type IngredientCategory, searchIngredients } from '@/data/ingredients';
import { Layout } from '@/components/layout/Layout';
import { IngredientCard } from '@/components/IngredientCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Ingredients() {
  const { currentMonth, isSimpleMode } = useApp();
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<IngredientCategory | 'all'>('all');

  const allIngredients = useMemo(() => getIngredientsForMonth(currentMonth), [currentMonth]);
  
  const displayed = useMemo(() => {
    let items = search ? searchIngredients(search) : allIngredients;
    if (filterCategory !== 'all') {
      items = items.filter(i => i.category === filterCategory);
    }
    return items;
  }, [search, allIngredients, filterCategory]);

  const categories: (IngredientCategory | 'all')[] = ['all', 'frutta', 'verdura', 'erbe', 'funghi', 'legumi_freschi', 'frutta_secca'];
  const categoryLabelsAll: Record<string, string> = { all: '🌍 Tutti', ...CATEGORY_LABELS };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="section-title mb-2">🥕 Ingredienti di stagione</h1>
        <p className="text-boomer-base text-muted-foreground mb-6">
          {allIngredients.length} ingredienti disponibili questo mese.
        </p>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="search"
            placeholder="Cerca per nome…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10 h-12 text-boomer-base"
          />
        </div>

        {/* Category filter */}
        {!isSimpleMode && (
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={filterCategory === cat ? 'default' : 'outline'}
                size="sm"
                className="text-boomer-sm"
                onClick={() => setFilterCategory(cat)}
              >
                {categoryLabelsAll[cat]}
              </Button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayed.map(i => <IngredientCard key={i.id} ingredient={i} />)}
        </div>

        {displayed.length === 0 && (
          <p className="text-boomer-base text-muted-foreground text-center py-12">
            Nessun ingrediente trovato. Prova con un altro termine di ricerca.
          </p>
        )}
      </div>
    </Layout>
  );
}
