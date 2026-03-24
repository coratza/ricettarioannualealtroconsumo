import { Heart } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { type Ingredient, CATEGORY_EMOJI } from '@/data/ingredients';
import { INGREDIENT_IMAGES } from '@/data/images';
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
  const image = INGREDIENT_IMAGES[ingredient.id];

  return (
    <div className="card-boomer bg-card flex flex-col overflow-hidden">
      {/* Header with image or emoji fallback */}
      <div className="relative bg-season-bg min-h-[120px] flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={ingredient.name}
            loading="lazy"
            width={512}
            height={512}
            className="w-full h-32 object-cover"
          />
        ) : (
          <span className="text-5xl p-4">{CATEGORY_EMOJI[ingredient.category]}</span>
        )}
        <button
          onClick={() => toggleFavoriteIngredient(ingredient.id)}
          className={`absolute top-2 right-2 p-1.5 rounded-full bg-background/70 backdrop-blur-sm transition-colors ${isFav ? 'text-red-500' : 'text-muted-foreground hover:text-red-400'}`}
          aria-label={isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
        >
          <Heart size={20} fill={isFav ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-boomer-lg font-bold font-display leading-tight">{ingredient.name}</h3>
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
