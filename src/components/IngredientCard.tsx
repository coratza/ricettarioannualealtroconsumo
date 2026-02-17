import { Heart, Printer } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { type Ingredient, CATEGORY_EMOJI } from '@/data/ingredients';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface IngredientCardProps {
  ingredient: Ingredient;
  compact?: boolean;
}

export function IngredientCard({ ingredient, compact }: IngredientCardProps) {
  const { isFavoriteIngredient, toggleFavoriteIngredient, addToFridge, currentMonth } = useApp();
  const isFav = isFavoriteIngredient(ingredient.id);
  const isInSeason = ingredient.months.includes(currentMonth);

  return (
    <div className="card-boomer bg-card flex flex-col">
      {/* Header with emoji */}
      <div className="bg-season-bg p-4 flex items-center justify-center text-5xl min-h-[80px]">
        {CATEGORY_EMOJI[ingredient.category]}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-boomer-lg font-bold font-display leading-tight">{ingredient.name}</h3>
          <button
            onClick={() => toggleFavoriteIngredient(ingredient.id)}
            className={`shrink-0 p-1.5 rounded-full transition-colors ${isFav ? 'text-red-500' : 'text-muted-foreground hover:text-red-400'}`}
            aria-label={isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
          >
            <Heart size={22} fill={isFav ? 'currentColor' : 'none'} />
          </button>
        </div>
        {isInSeason && (
          <Badge variant="default" className="self-start text-xs">🌿 Di stagione</Badge>
        )}
        {!compact && (
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            <Link to={`/ingredienti/${ingredient.id}`}>
              <Button variant="outline" size="sm" className="text-boomer-sm">Dettagli</Button>
            </Link>
            <Link to={`/ricette?ingrediente=${ingredient.id}`}>
              <Button variant="outline" size="sm" className="text-boomer-sm">Ricette</Button>
            </Link>
            <Button variant="secondary" size="sm" className="text-boomer-sm" onClick={() => addToFridge(ingredient.id)}>
              + Frigo
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
