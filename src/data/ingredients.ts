export type IngredientCategory = 'frutta' | 'verdura' | 'erbe' | 'funghi' | 'legumi_freschi' | 'frutta_secca';

export interface Ingredient {
  id: string;
  name: string;
  category: IngredientCategory;
  months: number[];
  aliases: string[];
  tags: string[];
  imageUrl?: string;
  imagePrompt?: string;
}

export const CATEGORY_LABELS: Record<IngredientCategory, string> = {
  frutta: '🍎 Frutta',
  verdura: '🥬 Verdura',
  erbe: '🌿 Erbe aromatiche',
  funghi: '🍄 Funghi',
  legumi_freschi: '🫘 Legumi freschi',
  frutta_secca: '🌰 Frutta secca',
};

export const CATEGORY_EMOJI: Record<IngredientCategory, string> = {
  frutta: '🍎',
  verdura: '🥬',
  erbe: '🌿',
  funghi: '🍄',
  legumi_freschi: '🫘',
  frutta_secca: '🌰',
};

// Market tips per category/ingredient
export const MARKET_TIPS: Record<string, { choose: string[]; store: string[]; noWaste: string[] }> = {
  frutta: {
    choose: ['Scegli frutti pesanti rispetto alla loro dimensione: sono più succosi', 'Controlla che non ci siano ammaccature o macchie molli', 'Annusa: la frutta matura ha un profumo dolce e intenso'],
    store: ['Conserva la frutta di stagione a temperatura ambiente se la consumi entro 2-3 giorni', 'In frigorifero dura più a lungo, ma toglila 30 minuti prima di mangiarla', 'Non lavare la frutta prima di riporla: l\'umidità favorisce la muffa'],
    noWaste: ['La frutta troppo matura è perfetta per frullati e marmellate', 'Le bucce di agrumi si possono grattugiare e congelare', 'Congela la frutta a pezzi per smoothie veloci'],
  },
  verdura: {
    choose: ['Preferisci verdure con foglie turgide e colori vivaci', 'Evita ortaggi con parti ingiallite o appassite', 'Le verdure di stagione al mercato costano meno e sono più buone'],
    store: ['Avvolgi le verdure a foglia in un canovaccio umido in frigo', 'Conserva le radici (carote, rape) senza le foglie verdi', 'Patate e cipolle vanno in un luogo fresco, buio e asciutto'],
    noWaste: ['I gambi di broccoli e cavolfiori si possono cucinare in zuppe', 'Le foglie esterne di finocchi e sedano sono ottime per il brodo', 'Congela le verdure che non riesci a usare in tempo'],
  },
  erbe: {
    choose: ['Scegli mazzi con foglie verdi brillanti e steli sodi', 'Annusa: le erbe fresche hanno un profumo intenso e pulito', 'Evita foglie ingiallite o con macchie scure'],
    store: ['Metti gli steli in un bicchiere d\'acqua come un mazzolino', 'Avvolgi in carta assorbente umida e riponi in frigo', 'Congela le erbe tritate in vaschette del ghiaccio con olio'],
    noWaste: ['Prepara un pesto con le erbe che stanno appassendo', 'Essicca al sole o in forno a bassa temperatura', 'Usa gli steli più teneri nel soffritto o nel brodo'],
  },
  funghi: {
    choose: ['Devono essere sodi al tatto e senza macchie viscide', 'Il cappello deve essere integro e il profumo gradevole', 'Preferisci funghi con lamelle chiare e compatte'],
    store: ['Conserva in sacchetti di carta (mai plastica) in frigorifero', 'Consumali entro 2-3 giorni dall\'acquisto', 'Puliscili con un panno umido, mai sotto l\'acqua corrente'],
    noWaste: ['I gambi più duri si possono usare per il brodo', 'Essicca i funghi avanzati per averli tutto l\'anno', 'Trifolati e congelati si conservano per mesi'],
  },
  legumi_freschi: {
    choose: ['I baccelli devono essere turgidi e di colore brillante', 'Evita baccelli troppo grandi: i semi dentro potrebbero essere duri', 'Prova a piegare il baccello: deve spezzarsi con un "crac"'],
    store: ['Sgranali e conservali in frigorifero per 2-3 giorni', 'Puoi congelarli crudi dopo averli sbollentati 2 minuti', 'In baccello durano meno, meglio sgranarli subito'],
    noWaste: ['I baccelli teneri di fave e piselli si possono cuocere in crema', 'Cuoci una porzione abbondante e congela il surplus', 'Aggiungi legumi avanzati a zuppe e insalate'],
  },
  frutta_secca: {
    choose: ['Preferisci frutta secca con guscio: si conserva meglio', 'Controlla la data: la frutta secca rancida ha un sapore amaro', 'Scegli quella non salata e non tostata per più versatilità'],
    store: ['Conserva in barattoli di vetro ben chiusi al fresco', 'In frigorifero dura fino a 6 mesi', 'Lontano da fonti di calore e luce diretta'],
    noWaste: ['Trita la frutta secca avanzata per decorare dolci e insalate', 'Frulla con un po\' d\'acqua per ottenere latte vegetale', 'Usala nelle panature al posto del pangrattato'],
  },
};



export function getIngredientImageUrl(ingredient: Ingredient): string {
  if (ingredient.imageUrl) return ingredient.imageUrl;
  return `https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80&sig=${encodeURIComponent(ingredient.id)}`;
}

export const ingredients: Ingredient[] = [
  { id: 'F001', name: 'Arancia', category: 'frutta', months: [1,2,3,4,11,12], aliases: ['arance'], tags: ['agrumi','spremuta'] },
  { id: 'F002', name: 'Mandarino', category: 'frutta', months: [1,2,3,11,12], aliases: ['mandarini'], tags: ['agrumi'] },
  { id: 'F003', name: 'Clementina', category: 'frutta', months: [11,12,1,2], aliases: ['clementine'], tags: ['agrumi'] },
  { id: 'F004', name: 'Limone', category: 'frutta', months: [1,2,3,4,5,6,7,8,9,10,11,12], aliases: ['limoni'], tags: ['agrumi'] },
  { id: 'F005', name: 'Pompelmo', category: 'frutta', months: [1,2,3,4,11,12], aliases: ['pompelmi'], tags: ['agrumi'] },
  { id: 'F006', name: 'Cedro', category: 'frutta', months: [1,2,3,10,11,12], aliases: ['cedri'], tags: ['agrumi'] },
  { id: 'F007', name: 'Bergamotto', category: 'frutta', months: [12,1,2,3], aliases: ['bergamotti'], tags: ['agrumi'] },
  { id: 'F008', name: 'Chinotto', category: 'frutta', months: [12,1,2,3,4], aliases: ['chinotti'], tags: ['agrumi'] },
  { id: 'F009', name: 'Melograno', category: 'frutta', months: [10,11,12,1], aliases: ['melograni'], tags: ['autunno','inverno'] },
  { id: 'F010', name: 'Mela', category: 'frutta', months: [1,2,3,4,5,9,10,11,12], aliases: ['mele'], tags: ['classico'] },
  { id: 'F011', name: 'Pera', category: 'frutta', months: [1,2,3,10,11,12], aliases: ['pere'], tags: ['classico'] },
  { id: 'F012', name: 'Kiwi', category: 'frutta', months: [11,12,1,2,3,4], aliases: ['kiwi'], tags: ['inverno'] },
  { id: 'F013', name: 'Cachi', category: 'frutta', months: [10,11,12], aliases: ['kaki','diospero'], tags: ['autunno'] },
  { id: 'F014', name: 'Castagna', category: 'frutta_secca', months: [10,11,12], aliases: ['castagne','marroni'], tags: ['autunno'] },
  { id: 'F015', name: 'Nocciola', category: 'frutta_secca', months: [8,9,10,11], aliases: ['nocciole'], tags: ['frutta secca'] },
  { id: 'F016', name: 'Noci', category: 'frutta_secca', months: [9,10,11,12,1], aliases: ['noce','noci'], tags: ['frutta secca'] },
  { id: 'F017', name: 'Mandorla', category: 'frutta_secca', months: [8,9,10], aliases: ['mandorle'], tags: ['frutta secca'] },
  { id: 'F018', name: 'Fico', category: 'frutta', months: [6,7,8,9], aliases: ['fichi'], tags: ['estate'] },
  { id: 'F019', name: 'Fico d\'India', category: 'frutta', months: [8,9,10], aliases: ['fichi d india'], tags: ['fine estate'] },
  { id: 'F020', name: 'Fragola', category: 'frutta', months: [4,5,6], aliases: ['fragole'], tags: ['primavera'] },
  { id: 'F021', name: 'Ciliegia', category: 'frutta', months: [5,6,7], aliases: ['ciliegie'], tags: ['inizio estate'] },
  { id: 'F022', name: 'Albicocca', category: 'frutta', months: [6,7,8], aliases: ['albicocche'], tags: ['estate'] },
  { id: 'F023', name: 'Pesca', category: 'frutta', months: [6,7,8,9], aliases: ['pesche','percoca'], tags: ['estate'] },
  { id: 'F024', name: 'Nettarina', category: 'frutta', months: [6,7,8,9], aliases: ['nettarine'], tags: ['estate'] },
  { id: 'F025', name: 'Susina', category: 'frutta', months: [6,7,8,9], aliases: ['prugna','prugne','susine'], tags: ['estate'] },
  { id: 'F026', name: 'Prugna', category: 'frutta', months: [7,8,9], aliases: ['prugne'], tags: ['estate'] },
  { id: 'F027', name: 'Anguria', category: 'frutta', months: [6,7,8,9], aliases: ['cocomero'], tags: ['estate'] },
  { id: 'F028', name: 'Melone', category: 'frutta', months: [6,7,8,9], aliases: ['meloni','cantalupo'], tags: ['estate'] },
  { id: 'F029', name: 'Uva', category: 'frutta', months: [8,9,10], aliases: ['uva da tavola'], tags: ['fine estate'] },
  { id: 'F030', name: 'Uva fragola', category: 'frutta', months: [9,10], aliases: ['uva fragola'], tags: ['autunno'] },
  { id: 'F032', name: 'Lampone', category: 'frutta', months: [6,7,8,9], aliases: ['lamponi'], tags: ['piccoli frutti'] },
  { id: 'F033', name: 'Mirtillo', category: 'frutta', months: [6,7,8,9], aliases: ['mirtilli'], tags: ['piccoli frutti'] },
  { id: 'F034', name: 'Mora', category: 'frutta', months: [7,8,9], aliases: ['more'], tags: ['piccoli frutti'] },
  { id: 'F035', name: 'Ribes', category: 'frutta', months: [6,7], aliases: ['ribes rosso','ribes nero'], tags: ['piccoli frutti'] },
  { id: 'F036', name: 'Amarena', category: 'frutta', months: [6,7], aliases: ['amarene'], tags: ['estate'] },
  { id: 'F038', name: 'Nespola', category: 'frutta', months: [4,5], aliases: ['nespole'], tags: ['primavera'] },
  { id: 'F040', name: 'Carota', category: 'verdura', months: [1,2,3,4,5,6,7,8,9,10,11,12], aliases: ['carote'], tags: ['radici'] },
  { id: 'F041', name: 'Patata', category: 'verdura', months: [1,2,3,4,5,6,7,8,9,10,11,12], aliases: ['patate'], tags: ['tuberi'] },
  { id: 'F042', name: 'Zucca', category: 'verdura', months: [9,10,11,12,1,2], aliases: ['zucche'], tags: ['autunno','inverno'] },
  { id: 'F043', name: 'Zucchina', category: 'verdura', months: [5,6,7,8,9], aliases: ['zucchine'], tags: ['estate'] },
  { id: 'F044', name: 'Melanzana', category: 'verdura', months: [6,7,8,9], aliases: ['melanzane'], tags: ['estate'] },
  { id: 'F045', name: 'Peperone', category: 'verdura', months: [6,7,8,9,10], aliases: ['peperoni'], tags: ['estate'] },
  { id: 'F046', name: 'Pomodoro', category: 'verdura', months: [6,7,8,9,10], aliases: ['pomodori'], tags: ['estate'] },
  { id: 'F048', name: 'Cetriolo', category: 'verdura', months: [6,7,8,9], aliases: ['cetrioli'], tags: ['estate'] },
  { id: 'F049', name: 'Cipolla', category: 'verdura', months: [1,2,3,4,5,6,7,8,9,10,11,12], aliases: ['cipolle'], tags: ['base'] },
  { id: 'F050', name: 'Cipollotto', category: 'verdura', months: [3,4,5,6,7], aliases: ['cipollotti'], tags: ['primavera'] },
  { id: 'F051', name: 'Aglio', category: 'verdura', months: [5,6,7,8,9,10], aliases: ['aglio fresco'], tags: ['base'] },
  { id: 'F052', name: 'Porro', category: 'verdura', months: [10,11,12,1,2,3], aliases: ['porri'], tags: ['inverno'] },
  { id: 'F053', name: 'Sedano', category: 'verdura', months: [9,10,11,12,1,2,3,4,5], aliases: ['sedani'], tags: ['base'] },
  { id: 'F054', name: 'Finocchio', category: 'verdura', months: [10,11,12,1,2,3,4], aliases: ['finocchi'], tags: ['inverno'] },
  { id: 'F055', name: 'Carciofo', category: 'verdura', months: [11,12,1,2,3,4,5], aliases: ['carciofi'], tags: ['inverno','primavera'] },
  { id: 'F056', name: 'Asparago', category: 'verdura', months: [3,4,5,6], aliases: ['asparagi'], tags: ['primavera'] },
  { id: 'F057', name: 'Fava', category: 'legumi_freschi', months: [3,4,5,6], aliases: ['fave'], tags: ['primavera'] },
  { id: 'F058', name: 'Pisello', category: 'legumi_freschi', months: [3,4,5,6], aliases: ['piselli'], tags: ['primavera'] },
  { id: 'F059', name: 'Fagiolino', category: 'legumi_freschi', months: [6,7,8,9], aliases: ['fagiolini'], tags: ['estate'] },
  { id: 'F060', name: 'Fagiolo fresco', category: 'legumi_freschi', months: [7,8,9,10], aliases: ['borlotti freschi','cannellini freschi'], tags: ['estate'] },
  { id: 'F061', name: 'Cavolfiore', category: 'verdura', months: [10,11,12,1,2,3], aliases: ['cavolfiori'], tags: ['inverno'] },
  { id: 'F062', name: 'Broccolo', category: 'verdura', months: [10,11,12,1,2,3], aliases: ['broccoli'], tags: ['inverno'] },
  { id: 'F064', name: 'Cavolo nero', category: 'verdura', months: [11,12,1,2,3], aliases: ['cavolo nero'], tags: ['inverno'] },
  { id: 'F065', name: 'Cavolo verza', category: 'verdura', months: [10,11,12,1,2,3], aliases: ['verza'], tags: ['inverno'] },
  { id: 'F066', name: 'Cavolo cappuccio', category: 'verdura', months: [10,11,12,1,2,3,4], aliases: ['cappuccio'], tags: ['inverno'] },
  { id: 'F068', name: 'Cavolini di Bruxelles', category: 'verdura', months: [11,12,1,2], aliases: ['bruxelles','cavoletti'], tags: ['inverno'] },
  { id: 'F069', name: 'Cima di rapa', category: 'verdura', months: [11,12,1,2,3], aliases: ['broccoletti','cime di rapa'], tags: ['inverno'] },
  { id: 'F070', name: 'Rapa', category: 'verdura', months: [10,11,12,1,2,3], aliases: ['rape'], tags: ['inverno'] },
  { id: 'F071', name: 'Ravanello', category: 'verdura', months: [3,4,5,6], aliases: ['ravanelli'], tags: ['primavera'] },
  { id: 'F072', name: 'Barbabietola', category: 'verdura', months: [10,11,12,1,2,3,4], aliases: ['rapa rossa'], tags: ['inverno'] },
  { id: 'F073', name: 'Topinambur', category: 'verdura', months: [11,12,1,2,3], aliases: ['topinambur'], tags: ['inverno'] },
  { id: 'F074', name: 'Pastinaca', category: 'verdura', months: [11,12,1,2,3], aliases: ['pastinache'], tags: ['inverno'] },
  { id: 'F078', name: 'Radicchio', category: 'verdura', months: [9,10,11,12,1,2,3], aliases: ['radicchi'], tags: ['autunno','inverno'] },
  { id: 'F080', name: 'Indivia', category: 'verdura', months: [10,11,12,1,2,3,4], aliases: ['indivia riccia','scarola'], tags: ['inverno'] },
  { id: 'F082', name: 'Lattuga', category: 'verdura', months: [3,4,5,6,7,8,9,10], aliases: ['insalata','lattuga'], tags: ['quasi tutto anno'] },
  { id: 'F083', name: 'Songino', category: 'verdura', months: [10,11,12,1,2,3,4], aliases: ['valeriana'], tags: ['inverno'] },
  { id: 'F084', name: 'Rucola', category: 'verdura', months: [3,4,5,6,9,10,11], aliases: ['rucola'], tags: ['primavera','autunno'] },
  { id: 'F085', name: 'Spinacio', category: 'verdura', months: [10,11,12,1,2,3,4], aliases: ['spinaci'], tags: ['inverno'] },
  { id: 'F086', name: 'Bietola', category: 'verdura', months: [10,11,12,1,2,3,4,5], aliases: ['bietole','coste'], tags: ['inverno','primavera'] },
  { id: 'F087', name: 'Cicoria', category: 'verdura', months: [10,11,12,1,2,3,4], aliases: ['cicorie'], tags: ['inverno'] },
  { id: 'F088', name: 'Catalogna', category: 'verdura', months: [11,12,1,2,3,4], aliases: ['catalogna','puntarelle'], tags: ['inverno'] },
  { id: 'F090', name: 'Agretti', category: 'verdura', months: [3,4,5], aliases: ['barba di frate'], tags: ['primavera'] },
  { id: 'F095', name: 'Funghi porcini', category: 'funghi', months: [8,9,10], aliases: ['porcino','porcini'], tags: ['autunno'] },
  { id: 'F096', name: 'Funghi chiodini', category: 'funghi', months: [9,10,11], aliases: ['chiodini'], tags: ['autunno'] },
  { id: 'F097', name: 'Funghi finferli', category: 'funghi', months: [7,8,9], aliases: ['gallinacci'], tags: ['estate'] },
  { id: 'F098', name: 'Funghi champignon', category: 'funghi', months: [1,2,3,4,5,6,7,8,9,10,11,12], aliases: ['prataioli'], tags: ['coltivati'] },
  { id: 'F099', name: 'Funghi pleurotus', category: 'funghi', months: [10,11,12,1,2,3,4], aliases: ['orecchioni'], tags: ['autunno','inverno'] },
  { id: 'H001', name: 'Basilico', category: 'erbe', months: [6,7,8,9], aliases: ['basilico'], tags: ['aromatiche'] },
  { id: 'H002', name: 'Prezzemolo', category: 'erbe', months: [3,4,5,6,7,8,9,10,11], aliases: ['prezzemolo'], tags: ['aromatiche'] },
  { id: 'H003', name: 'Rosmarino', category: 'erbe', months: [1,2,3,4,5,6,7,8,9,10,11,12], aliases: ['rosmarino'], tags: ['aromatiche'] },
  { id: 'H004', name: 'Salvia', category: 'erbe', months: [1,2,3,4,5,6,7,8,9,10,11,12], aliases: ['salvia'], tags: ['aromatiche'] },
  { id: 'H005', name: 'Timo', category: 'erbe', months: [1,2,3,4,5,6,7,8,9,10,11,12], aliases: ['timo'], tags: ['aromatiche'] },
  { id: 'H006', name: 'Origano', category: 'erbe', months: [6,7,8,9,10], aliases: ['origano'], tags: ['aromatiche'] },
  { id: 'H009', name: 'Menta', category: 'erbe', months: [4,5,6,7,8,9], aliases: ['menta'], tags: ['aromatiche'] },
  { id: 'H010', name: 'Alloro', category: 'erbe', months: [1,2,3,4,5,6,7,8,9,10,11,12], aliases: ['alloro'], tags: ['aromatiche'] },
  { id: 'V103', name: 'Patata novella', category: 'verdura', months: [4,5,6], aliases: ['patate novelle'], tags: ['primavera'] },
  { id: 'V104', name: 'Patata dolce', category: 'verdura', months: [10,11,12,1,2], aliases: ['batata'], tags: ['autunno','inverno'] },
];

// Build search index
export function searchIngredients(query: string): Ingredient[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return ingredients.filter(i => 
    i.name.toLowerCase().includes(q) ||
    i.aliases.some(a => a.toLowerCase().includes(q)) ||
    i.tags.some(t => t.toLowerCase().includes(q))
  );
}

export function getIngredientsForMonth(monthNumber: number): Ingredient[] {
  return ingredients.filter(i => i.months.includes(monthNumber));
}

export function getIngredientsByCategory(items: Ingredient[]): Record<IngredientCategory, Ingredient[]> {
  const result: Record<string, Ingredient[]> = {};
  for (const cat of Object.keys(CATEGORY_LABELS)) {
    result[cat] = items.filter(i => i.category === cat);
  }
  return result as Record<IngredientCategory, Ingredient[]>;
}

// Top ingredients for simple mode (prioritize non-import, common items)
export function getTopIngredients(monthNumber: number, limit = 16): Ingredient[] {
  const all = getIngredientsForMonth(monthNumber);
  // Prioritize: not import, not "varietà", main categories
  const scored = all.map(i => ({
    ingredient: i,
    score: (i.tags.includes('import') ? 0 : 2) + 
           (i.tags.includes('varietà') ? 0 : 2) +
           (['frutta', 'verdura'].includes(i.category) ? 1 : 0)
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(s => s.ingredient);
}
