import { Heart, Clock, Users, ChefHat, Printer } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { type Recipe } from '@/data/recipes';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface RecipeCardProps {
  recipe: Recipe;
  matchPercent?: number;
}

export function RecipeCard({ recipe, matchPercent }: RecipeCardProps) {
  const { isFavoriteRecipe, toggleFavoriteRecipe, currentMonth } = useApp();
  const isFav = isFavoriteRecipe(recipe.id);
  const isInSeason = recipe.months.includes(currentMonth);

  const difficultyEmoji = recipe.difficulty === 'facile' ? '🟢' : recipe.difficulty === 'media' ? '🟡' : '🔴';
  const methodEmoji = { padella: '🍳', forno: '🔥', pentola: '🍲', crudo: '🥗' }[recipe.method];

  return (
    <Link to={`/ricette/${recipe.id}`} className="block">
      <div className="card-boomer bg-card hover:shadow-xl transition-all">
        {/* Header */}
        <div className="bg-season-bg p-4 flex items-center justify-between">
          <span className="text-4xl">{methodEmoji}</span>
          <div className="flex items-center gap-2">
            {isInSeason && <Badge variant="default" className="text-xs">🌿 Stagionale</Badge>}
            {recipe.isTraditional && <Badge variant="secondary" className="text-xs">🏛️ Tradizione</Badge>}
          </div>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-boomer-lg font-bold font-display leading-tight">{recipe.title}</h3>
            <button
              onClick={e => { e.preventDefault(); e.stopPropagation(); toggleFavoriteRecipe(recipe.id); }}
              className={`shrink-0 p-1.5 rounded-full transition-colors ${isFav ? 'text-red-500' : 'text-muted-foreground hover:text-red-400'}`}
              aria-label={isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
            >
              <Heart size={22} fill={isFav ? 'currentColor' : 'none'} />
            </button>
          </div>

          <div className="flex flex-wrap gap-3 text-boomer-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Clock size={16} /> {recipe.time} min</span>
            <span className="flex items-center gap-1"><Users size={16} /> {recipe.servings} porz.</span>
            <span>{difficultyEmoji} {recipe.difficulty}</span>
          </div>

          {matchPercent !== undefined && (
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${matchPercent}%` }} />
              </div>
              <span className="text-boomer-sm font-semibold">{matchPercent}%</span>
            </div>
          )}

          {recipe.dietTags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {recipe.dietTags.map(t => (
                <Badge key={t} variant="outline" className="text-xs">
                  {t.replace('_', ' ')}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
