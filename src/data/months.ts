export const MONTH_NAMES = [
  'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
] as const;

export const MONTH_EMOJI = ['❄️', '❄️', '🌸', '🌸', '🌸', '☀️', '☀️', '☀️', '🍂', '🍂', '🍂', '❄️'];

export type SeasonName = 'winter' | 'spring' | 'summer' | 'autumn';

export const MONTH_SEASON: SeasonName[] = [
  'winter', 'winter', 'spring', 'spring', 'spring', 'summer',
  'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'
];

export const SEASON_LABELS: Record<SeasonName, string> = {
  winter: 'Inverno',
  spring: 'Primavera',
  summer: 'Estate',
  autumn: 'Autunno',
};

export const SEASON_CLASS: Record<SeasonName, string> = {
  winter: 'season-winter',
  spring: 'season-spring',
  summer: 'season-summer',
  autumn: 'season-autumn',
};

export const MONTH_COLORS: string[] = [
  'bg-blue-100 text-blue-900 border-blue-300',     // Gen
  'bg-blue-50 text-blue-800 border-blue-200',      // Feb
  'bg-green-100 text-green-900 border-green-300',   // Mar
  'bg-emerald-100 text-emerald-900 border-emerald-300', // Apr
  'bg-lime-100 text-lime-900 border-lime-300',      // Mag
  'bg-yellow-100 text-yellow-900 border-yellow-300', // Giu
  'bg-amber-100 text-amber-900 border-amber-300',   // Lug
  'bg-orange-100 text-orange-900 border-orange-300', // Ago
  'bg-amber-100 text-amber-900 border-amber-300',   // Set
  'bg-orange-100 text-orange-900 border-orange-300', // Ott
  'bg-red-100 text-red-900 border-red-200',         // Nov
  'bg-slate-100 text-slate-900 border-slate-300',   // Dic
];

export function getCurrentMonthIndex(): number {
  const now = new Date();
  const romeTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Rome' }));
  return romeTime.getMonth(); // 0-based
}

export function getSeasonForMonth(monthIndex: number): SeasonName {
  return MONTH_SEASON[monthIndex];
}
