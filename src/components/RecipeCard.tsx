import { Heart, Clock, Users } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { type Recipe } from '@/data/recipes';
import { RECIPE_IMAGES } from '@/data/images';
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
  const image = RECIPE_IMAGES[recipe.id];

  const difficultyEmoji = recipe.difficulty === 'facile' ? '🟢' : recipe.difficulty === 'media' ? '🟡' : '🔴';
  const methodEmoji = { padella: '🍳', forno: '🔥', pentola: '🍲', crudo: '🥗' }[recipe.method];

  return (
    <Link to={`/ricette/${recipe.id}`} className="block">
      <div className="card-boomer bg-card hover:shadow-xl transition-all overflow-hidden">
        {/* Header with image or emoji fallback */}
        <div className="relative bg-season-bg">
          {image ? (
            <img
              src={image}
              alt={recipe.title}
              loading="lazy"
              width={640}
              height={512}
              className="w-full h-44 object-cover"
            />
          ) : (
            <div className="p-4 flex items-center justify-between min-h-[80px]">
              <span className="text-4xl">{methodEmoji}</span>
            </div>
          )}
          <div className="absolute top-2 right-2 flex items-center gap-1.5">
            {isInSeason && <Badge variant="default" className="text-xs bg-primary/90 backdrop-blur-sm">🌿 Stagionale</Badge>}
            {recipe.isTraditional && <Badge variant="secondary" className="text-xs bg-secondary/90 backdrop-blur-sm">🏛️ Tradizione</Badge>}
          </div>
          <button
            onClick={e => { e.preventDefault(); e.stopPropagation(); toggleFavoriteRecipe(recipe.id); }}
            className={`absolute top-2 left-2 p-1.5 rounded-full bg-background/70 backdrop-blur-sm transition-colors ${isFav ? 'text-red-500' : 'text-muted-foreground hover:text-red-400'}`}
            aria-label={isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
          >
            <Heart size={20} fill={isFav ? 'currentColor' : 'none'} />
          </button>
          {!image && (
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
              {isInSeason && <Badge variant="default" className="text-xs">🌿 Stagionale</Badge>}
              {recipe.isTraditional && <Badge variant="secondary" className="text-xs">🏛️ Tradizione</Badge>}
            </div>
          )}
        </div>
        <div className="p-4 space-y-3">
          <h3 className="text-boomer-lg font-bold font-display leading-tight">{recipe.title}</h3>

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
