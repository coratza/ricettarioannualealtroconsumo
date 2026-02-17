import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ChefHat, CalendarDays, Home, Leaf, Menu, X } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { MONTH_NAMES, MONTH_EMOJI } from '@/data/months';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function Header() {
  const { currentMonth, setMonth, isSimpleMode, toggleMode } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/ricette?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  }, [searchQuery]);

  const navLinks = [
    { to: '/', label: 'Questo mese', icon: Home },
    { to: '/calendario', label: 'Calendario', icon: CalendarDays },
    { to: '/ingredienti', label: 'Ingredienti', icon: Leaf },
    { to: '/ricette', label: 'Ricette', icon: ChefHat },
    { to: '/preferiti', label: 'Preferiti', icon: Heart },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 no-print">
        <div className="container mx-auto px-4">
          {/* Top row */}
          <div className="flex items-center justify-between gap-3 py-3">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <span className="text-2xl">🍅</span>
              <h1 className="font-display text-boomer-lg md:text-boomer-xl font-bold text-foreground">
                Stagioni in Cucina
              </h1>
            </Link>

            {/* Month pill */}
            <button
              onClick={() => setShowMonthPicker(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full border-2 border-primary/30 transition-colors text-boomer-base font-semibold text-foreground"
              aria-label="Cambia mese"
            >
              <span>{MONTH_EMOJI[currentMonth - 1]}</span>
              <span>Mese: {MONTH_NAMES[currentMonth - 1]}</span>
            </button>

            {/* Mode toggle */}
            <div className="hidden md:flex items-center gap-2">
              <label htmlFor="mode-toggle" className="text-boomer-sm text-muted-foreground cursor-pointer">
                {isSimpleMode ? 'Semplice' : 'Completa'}
              </label>
              <Switch
                id="mode-toggle"
                checked={!isSimpleMode}
                onCheckedChange={toggleMode}
                aria-label={isSimpleMode ? 'Passa a modalità completa' : 'Passa a modalità semplice'}
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary"
              aria-label="Menu"
            >
              {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Search + nav (desktop) */}
          <div className="hidden md:flex items-center gap-6 pb-3">
            <nav className="flex gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-boomer-sm font-medium transition-colors
                    ${location.pathname === link.to 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-secondary text-foreground'
                    }`}
                >
                  <link.icon size={18} />
                  {link.label}
                </Link>
              ))}
            </nav>
            <form onSubmit={handleSearch} className="flex-1 max-w-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="search"
                  placeholder="Cerca un ingrediente o una ricetta…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-10 h-11 text-boomer-sm"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-3">
            <button
              onClick={() => { setShowMonthPicker(true); setShowMobileMenu(false); }}
              className="flex items-center gap-2 w-full px-4 py-3 bg-primary/10 rounded-xl text-boomer-base font-semibold"
            >
              <span>{MONTH_EMOJI[currentMonth - 1]}</span>
              <span>Mese: {MONTH_NAMES[currentMonth - 1]}</span>
            </button>
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="search"
                  placeholder="Cerca…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-boomer-base"
                />
              </div>
            </form>
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-boomer-base">Modalità {isSimpleMode ? 'semplice' : 'completa'}</span>
              <Switch checked={!isSimpleMode} onCheckedChange={toggleMode} />
            </div>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setShowMobileMenu(false)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-boomer-base font-medium transition-colors
                    ${location.pathname === link.to ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                >
                  <link.icon size={20} />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Month picker dialog */}
      <Dialog open={showMonthPicker} onOpenChange={setShowMonthPicker}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-boomer-xl font-display">
              Scegli un mese
            </DialogTitle>
            <p className="text-boomer-base text-muted-foreground">
              Se preferisci, puoi scegliere un altro mese.
            </p>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-3 py-4">
            {MONTH_NAMES.map((name, i) => (
              <button
                key={i}
                onClick={() => { setMonth(i + 1); setShowMonthPicker(false); }}
                className={`flex flex-col items-center gap-1 px-3 py-4 rounded-xl border-2 text-boomer-base font-medium transition-all
                  ${currentMonth === i + 1
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                    : 'bg-card hover:bg-secondary border-border hover:border-primary/50'
                  }`}
              >
                <span className="text-xl">{MONTH_EMOJI[i]}</span>
                <span>{name}</span>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function BottomNav() {
  const location = useLocation();
  const { currentMonth } = useApp();

  const links = [
    { to: '/', label: 'Mese', icon: Home },
    { to: '/ingredienti', label: 'Ingredienti', icon: Leaf },
    { to: '/ricette', label: 'Ricette', icon: ChefHat },
    { to: '/preferiti', label: 'Preferiti', icon: Heart },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t-2 border-border no-print safe-area-bottom">
      <div className="flex items-stretch">
        {links.map(link => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex-1 flex flex-col items-center gap-1 py-3 px-1 transition-colors
                ${isActive ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground'}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <link.icon size={26} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-xs font-semibold">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pb-24 md:pb-8">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
