import { Link } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { MONTH_NAMES, MONTH_EMOJI, MONTH_COLORS, getCurrentMonthIndex } from '@/data/months';
import { getIngredientsForMonth } from '@/data/ingredients';
import { getRecipesForMonth } from '@/data/recipes';
import { Layout } from '@/components/layout/Layout';

export default function Calendar() {
  const { currentMonth, setMonth } = useApp();
  const autoMonth = getCurrentMonthIndex() + 1;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="section-title text-center mb-2">📅 Calendario stagionale</h1>
        <p className="text-boomer-base text-muted-foreground text-center mb-8">
          Scegli un mese per scoprire cosa è di stagione.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {MONTH_NAMES.map((name, i) => {
            const monthNum = i + 1;
            const ingredientCount = getIngredientsForMonth(monthNum).length;
            const recipeCount = getRecipesForMonth(monthNum).length;
            const isActive = currentMonth === monthNum;
            const isToday = autoMonth === monthNum;

            return (
              <Link
                key={i}
                to="/"
                onClick={() => setMonth(monthNum)}
                className={`card-boomer p-5 text-center transition-all hover:scale-[1.03]
                  ${isActive ? 'ring-2 ring-primary shadow-lg bg-primary/5' : 'bg-card'}
                `}
              >
                <span className="text-3xl mb-2 block">{MONTH_EMOJI[i]}</span>
                <h3 className="text-boomer-lg font-display font-bold mb-1">{name}</h3>
                {isToday && (
                  <span className="inline-block text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full mb-2">oggi</span>
                )}
                <p className="text-boomer-sm text-muted-foreground">
                  {ingredientCount} ingredienti
                </p>
                <p className="text-boomer-sm text-muted-foreground">
                  {recipeCount} ricette
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
