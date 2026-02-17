export type Difficulty = 'facile' | 'media' | 'impegnativa';
export type CookingMethod = 'padella' | 'forno' | 'pentola' | 'crudo';
export type DietTag = 'vegetariana' | 'vegana' | 'senza_lattosio' | 'senza_glutine';

export interface RecipeStep {
  text: string;
  duration?: number; // minutes
}

export interface Recipe {
  id: string;
  title: string;
  months: number[];
  time: number; // minutes
  servings: number;
  difficulty: Difficulty;
  method: CookingMethod;
  ingredientIds: string[];
  pantryIngredients: string[];
  steps: RecipeStep[];
  tags: string[];
  dietTags: DietTag[];
  isTraditional?: boolean;
  region?: string;
  culturalNote?: string;
}

export const recipes: Recipe[] = [
  // === GENNAIO ===
  {
    id: 'R001', title: 'Vellutata di zucca e arancia', months: [1,2,12], time: 30, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F042','F001','F052'], pantryIngredients: ['olio extravergine','sale','pepe','noce moscata'],
    steps: [
      { text: 'Taglia la zucca a cubetti e il porro a rondelle.', duration: 5 },
      { text: 'Fai soffriggere il porro con un filo d\'olio per 3 minuti.', duration: 3 },
      { text: 'Aggiungi la zucca, copri con acqua calda e cuoci 20 minuti.', duration: 20 },
      { text: 'Frulla il tutto, aggiungi il succo di un\'arancia, sale e noce moscata.', duration: 2 },
      { text: 'Servi con un filo d\'olio a crudo.' }
    ],
    tags: ['comfort','veloce','inverno'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  {
    id: 'R002', title: 'Pasta con broccoli e acciughe', months: [1,2,3,12], time: 25, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F062'], pantryIngredients: ['pasta','olio extravergine','aglio','acciughe','peperoncino','pangrattato'],
    steps: [
      { text: 'Cuoci la pasta in acqua salata. Taglia i broccoli a cimette.', duration: 3 },
      { text: 'In padella, scalda olio con aglio e acciughe fino a scioglierle.', duration: 3 },
      { text: 'Aggiungi i broccoli e cuoci 10 minuti con un mestolo d\'acqua di cottura.', duration: 10 },
      { text: 'Scola la pasta al dente, saltala in padella con i broccoli.', duration: 3 },
      { text: 'Servi con pangrattato tostato sopra.' }
    ],
    tags: ['tradizione','veloce'], dietTags: ['senza_lattosio']
  },
  {
    id: 'R003', title: 'Insalata di finocchi e arance', months: [1,2,3,11,12], time: 10, servings: 4, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F054','F001'], pantryIngredients: ['olio extravergine','sale','olive nere'],
    steps: [
      { text: 'Affetta i finocchi sottili con una mandolina o un coltello affilato.', duration: 3 },
      { text: 'Pela le arance a vivo e tagliale a fette.', duration: 3 },
      { text: 'Componi il piatto alternando finocchi e arance.', duration: 2 },
      { text: 'Condisci con olio, sale e olive nere.' }
    ],
    tags: ['leggero','veloce','inverno'], dietTags: ['vegana','senza_glutine','senza_lattosio'],
    isTraditional: true, region: 'Sicilia', culturalNote: 'Un classico della cucina siciliana invernale, fresco e profumato.'
  },
  {
    id: 'R004', title: 'Frittata di cavolo nero', months: [1,2,3,11,12], time: 20, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F064'], pantryIngredients: ['uova','parmigiano','olio extravergine','sale','pepe'],
    steps: [
      { text: 'Lessa il cavolo nero per 5 minuti, scolalo e strizzalo.', duration: 7 },
      { text: 'Sbatti le uova con parmigiano, sale e pepe.', duration: 2 },
      { text: 'Taglia il cavolo nero a striscioline e aggiungilo alle uova.', duration: 2 },
      { text: 'Cuoci in padella con olio, 5 minuti per lato.', duration: 10 }
    ],
    tags: ['comfort','veloce','inverno'], dietTags: ['vegetariana','senza_glutine']
  },
  {
    id: 'R005', title: 'Zuppa di lenticchie e patate', months: [1,2,11,12], time: 40, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F041','F040','F052'], pantryIngredients: ['lenticchie secche','olio extravergine','sale','rosmarino','alloro'],
    steps: [
      { text: 'Taglia patate, carote e porro a cubetti.', duration: 5 },
      { text: 'Soffriggi il porro con olio e rosmarino.', duration: 3 },
      { text: 'Aggiungi le verdure, le lenticchie e copri con acqua.', duration: 2 },
      { text: 'Cuoci a fuoco dolce per 30 minuti.', duration: 30 },
      { text: 'Aggiusta di sale, servi con un filo d\'olio a crudo.' }
    ],
    tags: ['comfort','inverno','sostanzioso'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  // === FEBBRAIO ===
  {
    id: 'R006', title: 'Risotto al radicchio', months: [1,2,3,12], time: 30, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F078','F049'], pantryIngredients: ['riso carnaroli','brodo vegetale','vino bianco','burro','parmigiano','sale'],
    steps: [
      { text: 'Taglia il radicchio a striscioline e la cipolla finemente.', duration: 3 },
      { text: 'Tosta il riso con cipolla e olio per 2 minuti.', duration: 3 },
      { text: 'Sfuma con vino bianco.', duration: 1 },
      { text: 'Aggiungi il brodo un mestolo alla volta, cuocendo 16-18 minuti.', duration: 18 },
      { text: 'A metà cottura aggiungi il radicchio.', duration: 1 },
      { text: 'Manteca con burro e parmigiano. Servi subito.' }
    ],
    tags: ['tradizione','inverno'], dietTags: ['vegetariana'],
    isTraditional: true, region: 'Veneto', culturalNote: 'Il risotto al radicchio è un pilastro della cucina veneta, con il radicchio di Treviso.'
  },
  {
    id: 'R007', title: 'Carciofi alla romana', months: [1,2,3,4,5], time: 45, servings: 4, difficulty: 'media', method: 'pentola',
    ingredientIds: ['F055'], pantryIngredients: ['aglio','prezzemolo','mentuccia','olio extravergine','sale','pepe','limone'],
    steps: [
      { text: 'Pulisci i carciofi eliminando le foglie esterne dure. Taglia la punta.', duration: 10 },
      { text: 'Prepara un trito di aglio, prezzemolo e mentuccia.', duration: 3 },
      { text: 'Riempi i carciofi con il trito e disponili in una pentola.', duration: 5 },
      { text: 'Aggiungi acqua, olio e limone. Cuoci coperti a fuoco dolce per 25 minuti.', duration: 25 }
    ],
    tags: ['tradizione','inverno','primavera'], dietTags: ['vegana','senza_glutine','senza_lattosio'],
    isTraditional: true, region: 'Lazio', culturalNote: 'Piatto iconico della cucina romanesca, perfetto come antipasto o contorno.'
  },
  {
    id: 'R008', title: 'Pasta e cavolfiore', months: [1,2,3,10,11,12], time: 25, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F061'], pantryIngredients: ['pasta corta','aglio','olio extravergine','peperoncino','pecorino','sale'],
    steps: [
      { text: 'Dividi il cavolfiore in cimette e lessalo in acqua salata.', duration: 10 },
      { text: 'Nella stessa acqua cuoci la pasta.', duration: 2 },
      { text: 'In padella, rosola aglio e peperoncino in olio.', duration: 2 },
      { text: 'Scola pasta e cavolfiore, saltali in padella.', duration: 5 },
      { text: 'Servi con abbondante pecorino grattugiato.' }
    ],
    tags: ['comfort','veloce','inverno'], dietTags: ['vegetariana'],
    isTraditional: true, region: 'Campania', culturalNote: 'Un classico della cucina napoletana povera, sostanzioso e saporito.'
  },
  {
    id: 'R009', title: 'Vellutata di topinambur', months: [1,2,3,11,12], time: 30, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F073','F041'], pantryIngredients: ['olio extravergine','sale','pepe','timo','panna (opzionale)'],
    steps: [
      { text: 'Pela e taglia a pezzi il topinambur e la patata.', duration: 5 },
      { text: 'Cuocili in acqua salata con timo per 20 minuti.', duration: 20 },
      { text: 'Frulla il tutto fino a ottenere una crema vellutata.', duration: 3 },
      { text: 'Aggiungi un filo di panna se desideri, e servi con olio e pepe.' }
    ],
    tags: ['comfort','inverno','leggero'], dietTags: ['vegetariana','senza_glutine']
  },
  {
    id: 'R010', title: 'Contorno di spinaci saltati', months: [1,2,3,4,10,11,12], time: 10, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F085'], pantryIngredients: ['aglio','olio extravergine','sale','peperoncino','limone'],
    steps: [
      { text: 'Lava bene gli spinaci freschi.', duration: 2 },
      { text: 'In padella scalda olio con aglio e peperoncino.', duration: 2 },
      { text: 'Aggiungi gli spinaci e cuoci 3-4 minuti mescolando.', duration: 4 },
      { text: 'Condisci con sale e una spruzzata di limone.' }
    ],
    tags: ['veloce','leggero','contorno'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  // === MARZO ===
  {
    id: 'R011', title: 'Frittata di asparagi', months: [3,4,5], time: 20, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F056'], pantryIngredients: ['uova','parmigiano','olio extravergine','sale','pepe'],
    steps: [
      { text: 'Taglia gli asparagi a rondelle, scartando la parte più dura.', duration: 3 },
      { text: 'Saltali in padella con olio per 5 minuti.', duration: 5 },
      { text: 'Versa le uova sbattute con parmigiano, sale e pepe.', duration: 1 },
      { text: 'Cuoci 5 minuti per lato a fuoco dolce.', duration: 10 }
    ],
    tags: ['primavera','veloce'], dietTags: ['vegetariana','senza_glutine']
  },
  {
    id: 'R012', title: 'Pasta con fave e pecorino', months: [3,4,5,6], time: 20, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F057'], pantryIngredients: ['pasta','pecorino','olio extravergine','pepe nero','menta fresca'],
    steps: [
      { text: 'Sgrana le fave fresche.', duration: 5 },
      { text: 'Cuoci la pasta. Negli ultimi 3 minuti aggiungi le fave.', duration: 2 },
      { text: 'Scola e condisci con olio, pecorino e pepe.', duration: 3 },
      { text: 'Aggiungi foglioline di menta fresca.' }
    ],
    tags: ['primavera','veloce','tradizione'], dietTags: ['vegetariana'],
    isTraditional: true, region: 'Lazio/Sardegna', culturalNote: 'Fave e pecorino sono un abbinamento antico, tipico del 1° maggio nel Lazio.'
  },
  {
    id: 'R013', title: 'Risotto agli agretti', months: [3,4,5], time: 25, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F090'], pantryIngredients: ['riso carnaroli','brodo vegetale','cipolla','vino bianco','burro','parmigiano'],
    steps: [
      { text: 'Pulisci gli agretti tagliando le radichette. Lessali 3 minuti.', duration: 5 },
      { text: 'Tosta il riso con cipolla e sfuma col vino bianco.', duration: 4 },
      { text: 'Aggiungi brodo a mestoli per 16-18 minuti.', duration: 18 },
      { text: 'A fine cottura unisci gli agretti e manteca con burro e parmigiano.' }
    ],
    tags: ['primavera','raffinato'], dietTags: ['vegetariana']
  },
  {
    id: 'R014', title: 'Vignarola (stufato primaverile)', months: [3,4,5], time: 35, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F055','F057','F058'], pantryIngredients: ['cipollotto','olio extravergine','sale','pepe','lattuga romana'],
    steps: [
      { text: 'Pulisci carciofi, sgrana fave e piselli.', duration: 10 },
      { text: 'Soffriggi cipollotto a rondelle con olio.', duration: 3 },
      { text: 'Aggiungi carciofi a spicchi, poi fave e piselli.', duration: 5 },
      { text: 'Copri con poca acqua e cuoci dolcemente 20 minuti.', duration: 20 },
      { text: 'Unisci lattuga tagliata, sale e pepe. Cuoci 2 minuti.' }
    ],
    tags: ['tradizione','primavera','comfort'], dietTags: ['vegana','senza_glutine','senza_lattosio'],
    isTraditional: true, region: 'Lazio', culturalNote: 'La vignarola è il piatto primaverile romano per eccellenza, un inno alla stagione.'
  },
  {
    id: 'R015', title: 'Insalata di ravanelli e rucola', months: [3,4,5,6], time: 10, servings: 4, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F071','F084'], pantryIngredients: ['olio extravergine','aceto balsamico','sale','scaglie di grana'],
    steps: [
      { text: 'Lava la rucola e affetta i ravanelli sottili.', duration: 3 },
      { text: 'Componi l\'insalata in un piatto largo.', duration: 2 },
      { text: 'Condisci con olio, aceto, sale e scaglie di grana.' }
    ],
    tags: ['veloce','leggero','primavera'], dietTags: ['vegetariana','senza_glutine']
  },
  // === APRILE ===
  {
    id: 'R016', title: 'Risotto alle fragole', months: [4,5,6], time: 25, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F020'], pantryIngredients: ['riso carnaroli','cipolla','vino rosé','brodo vegetale','burro','parmigiano'],
    steps: [
      { text: 'Taglia le fragole a pezzetti (tieni alcune per decorare).', duration: 3 },
      { text: 'Tosta il riso con cipolla e sfuma col vino rosé.', duration: 4 },
      { text: 'Aggiungi brodo a mestoli per 16 minuti.', duration: 16 },
      { text: 'A fine cottura unisci le fragole, burro e parmigiano.', duration: 2 },
      { text: 'Decora con fragole fresche e pepe rosa.' }
    ],
    tags: ['primavera','raffinato','originale'], dietTags: ['vegetariana']
  },
  {
    id: 'R017', title: 'Pasta primavera con piselli', months: [4,5,6], time: 20, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F058','F050'], pantryIngredients: ['pasta','olio extravergine','parmigiano','menta','sale'],
    steps: [
      { text: 'Sgrana i piselli e affetta i cipollotti.', duration: 5 },
      { text: 'Cuoci cipollotti in olio, aggiungi piselli e poca acqua.', duration: 8 },
      { text: 'Cuoci la pasta, scolala e saltala con i piselli.', duration: 5 },
      { text: 'Condisci con parmigiano e foglie di menta.' }
    ],
    tags: ['primavera','veloce','leggero'], dietTags: ['vegetariana']
  },
  {
    id: 'R018', title: 'Nespole al forno con miele', months: [4,5], time: 20, servings: 4, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F038'], pantryIngredients: ['miele','cannella','yogurt greco'],
    steps: [
      { text: 'Taglia le nespole a metà e togli il nocciolo.', duration: 3 },
      { text: 'Disponile in una teglia, irrora con miele e spolvera di cannella.', duration: 2 },
      { text: 'Inforna a 180°C per 12-15 minuti.', duration: 15 },
      { text: 'Servi tiepide con yogurt greco.' }
    ],
    tags: ['dolce','primavera','veloce'], dietTags: ['vegetariana','senza_glutine']
  },
  {
    id: 'R019', title: 'Carciofi trifolati', months: [2,3,4,5], time: 25, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F055'], pantryIngredients: ['aglio','prezzemolo','olio extravergine','vino bianco','sale'],
    steps: [
      { text: 'Pulisci i carciofi e tagliali a fettine sottili.', duration: 8 },
      { text: 'In padella scalda olio con aglio.', duration: 2 },
      { text: 'Aggiungi i carciofi, sfuma col vino e cuoci 12 minuti coperti.', duration: 12 },
      { text: 'Spolvera con prezzemolo tritato e servi.' }
    ],
    tags: ['contorno','tradizione'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  {
    id: 'R020', title: 'Torta salata con bietole', months: [3,4,5,10,11,12], time: 45, servings: 6, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F086'], pantryIngredients: ['pasta sfoglia','ricotta','uova','parmigiano','sale','noce moscata'],
    steps: [
      { text: 'Lessa le bietole 5 minuti, scolale e strizzale bene.', duration: 7 },
      { text: 'Mescola ricotta, uova, parmigiano, sale e noce moscata.', duration: 3 },
      { text: 'Aggiungi le bietole tritate al composto.', duration: 2 },
      { text: 'Fodera una teglia con pasta sfoglia, versa il ripieno.', duration: 3 },
      { text: 'Inforna a 180°C per 30 minuti fino a doratura.', duration: 30 }
    ],
    tags: ['comfort','versatile'], dietTags: ['vegetariana']
  },
  // === MAGGIO ===
  {
    id: 'R021', title: 'Pasta con le sarde e finocchietto', months: [5,6], time: 30, servings: 4, difficulty: 'media', method: 'padella',
    ingredientIds: ['F056'], pantryIngredients: ['pasta bucatini','sarde fresche','cipolla','uvetta','pinoli','zafferano','pangrattato'],
    steps: [
      { text: 'Lessa il finocchietto selvatico e tienilo da parte.', duration: 5 },
      { text: 'Soffriggi cipolla, aggiungi sarde pulite.', duration: 5 },
      { text: 'Unisci uvetta, pinoli, zafferano e finocchietto.', duration: 3 },
      { text: 'Cuoci la pasta nell\'acqua del finocchietto. Condiscila.', duration: 15 },
      { text: 'Servi con pangrattato tostato.' }
    ],
    tags: ['tradizione','primavera'], dietTags: ['senza_lattosio'],
    isTraditional: true, region: 'Sicilia', culturalNote: 'La pasta con le sarde è il piatto simbolo di Palermo, antico e profumato.'
  },
  {
    id: 'R022', title: 'Fave con cicoria', months: [3,4,5], time: 30, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F057','F087'], pantryIngredients: ['olio extravergine','sale','peperoncino','pane casereccio'],
    steps: [
      { text: 'Lessa la cicoria in abbondante acqua salata. Scolala.', duration: 10 },
      { text: 'Cuoci le fave sgranate in poca acqua per 15 minuti.', duration: 15 },
      { text: 'Schiaccia le fave cotte fino a formare una purea.', duration: 3 },
      { text: 'Servi la purea con cicoria sopra, olio e peperoncino.' }
    ],
    tags: ['tradizione','primavera','comfort'], dietTags: ['vegana','senza_glutine','senza_lattosio'],
    isTraditional: true, region: 'Puglia', culturalNote: 'Fave e cicoria è il piatto simbolo della Puglia, semplicissimo e appagante.'
  },
  {
    id: 'R023', title: 'Asparagi gratinati', months: [3,4,5,6], time: 25, servings: 4, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F056'], pantryIngredients: ['parmigiano','pangrattato','burro','sale','pepe'],
    steps: [
      { text: 'Lessa gli asparagi 4 minuti in acqua salata.', duration: 6 },
      { text: 'Disponili in una teglia, cospargi di pangrattato e parmigiano.', duration: 3 },
      { text: 'Aggiungi fiocchetti di burro.', duration: 1 },
      { text: 'Gratina in forno a 200°C per 10 minuti.', duration: 10 }
    ],
    tags: ['contorno','primavera'], dietTags: ['vegetariana']
  },
  {
    id: 'R024', title: 'Insalata di farro con verdure di primavera', months: [4,5,6], time: 30, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F058','F071','F084'], pantryIngredients: ['farro','olio extravergine','limone','sale'],
    steps: [
      { text: 'Cuoci il farro in acqua salata per 25 minuti. Scolalo e raffreddalo.', duration: 27 },
      { text: 'Sgrana i piselli e lessali 5 minuti.', duration: 5 },
      { text: 'Affetta i ravanelli e lava la rucola.', duration: 3 },
      { text: 'Mescola tutto con olio, limone e sale.' }
    ],
    tags: ['leggero','primavera'], dietTags: ['vegana','senza_lattosio']
  },
  {
    id: 'R025', title: 'Frittata di cipollotto e patate', months: [4,5,6], time: 25, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F050','V103'], pantryIngredients: ['uova','olio extravergine','sale','pepe','rosmarino'],
    steps: [
      { text: 'Taglia le patate novelle a fettine e i cipollotti a rondelle.', duration: 5 },
      { text: 'Cuoci in padella con olio per 10 minuti.', duration: 10 },
      { text: 'Versa le uova sbattute con sale, pepe e rosmarino.', duration: 1 },
      { text: 'Cuoci 5 minuti per lato a fuoco dolce.', duration: 10 }
    ],
    tags: ['comfort','primavera','veloce'], dietTags: ['vegetariana','senza_glutine']
  },
  // === GIUGNO ===
  {
    id: 'R026', title: 'Caprese di pomodori e basilico', months: [6,7,8,9], time: 10, servings: 4, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F046','H001'], pantryIngredients: ['mozzarella di bufala','olio extravergine','sale','origano'],
    steps: [
      { text: 'Taglia i pomodori e la mozzarella a fette.', duration: 3 },
      { text: 'Alterna fette di pomodoro e mozzarella su un piatto.', duration: 3 },
      { text: 'Aggiungi foglie di basilico fresco, olio, sale e origano.' }
    ],
    tags: ['veloce','estate','leggero','tradizione'], dietTags: ['vegetariana','senza_glutine'],
    isTraditional: true, region: 'Campania', culturalNote: 'La caprese è il piatto estivo italiano per eccellenza, nato a Capri.'
  },
  {
    id: 'R027', title: 'Pasta alla Norma', months: [6,7,8,9], time: 25, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F044','F046','H001'], pantryIngredients: ['pasta','ricotta salata','olio per friggere','aglio','sale'],
    steps: [
      { text: 'Taglia le melanzane a cubetti e friggile in olio caldo.', duration: 8 },
      { text: 'Prepara un sugo con pomodoro, aglio e basilico.', duration: 10 },
      { text: 'Cuoci la pasta al dente e condiscila col sugo.', duration: 3 },
      { text: 'Aggiungi le melanzane fritte e ricotta salata grattugiata.' }
    ],
    tags: ['tradizione','estate'], dietTags: ['vegetariana'],
    isTraditional: true, region: 'Sicilia', culturalNote: 'Pasta alla Norma: omaggio a Bellini e alla cucina catanese.'
  },
  {
    id: 'R028', title: 'Gazpacho di pomodori', months: [6,7,8,9], time: 15, servings: 4, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F046','F048','F045'], pantryIngredients: ['pane raffermo','aglio','olio extravergine','aceto','sale'],
    steps: [
      { text: 'Taglia pomodori, cetriolo e peperone a pezzi grossi.', duration: 3 },
      { text: 'Frullali con pane bagnato, aglio, olio e aceto.', duration: 5 },
      { text: 'Aggiusta di sale e riponi in frigo almeno 1 ora.', duration: 2 },
      { text: 'Servi freddo con cubetti di verdure e crostini.' }
    ],
    tags: ['estate','leggero','veloce'], dietTags: ['vegana','senza_lattosio']
  },
  {
    id: 'R029', title: 'Teglia di zucchine al forno', months: [5,6,7,8,9], time: 35, servings: 4, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F043'], pantryIngredients: ['pangrattato','parmigiano','aglio','olio extravergine','sale','origano'],
    steps: [
      { text: 'Taglia le zucchine a rondelle e disponile in una teglia oliata.', duration: 5 },
      { text: 'Mescola pangrattato, parmigiano, aglio tritato e origano.', duration: 2 },
      { text: 'Cospargi il composto sulle zucchine.', duration: 2 },
      { text: 'Irrora con olio e inforna a 200°C per 25 minuti.', duration: 25 }
    ],
    tags: ['contorno','estate','comfort'], dietTags: ['vegetariana']
  },
  {
    id: 'R030', title: 'Crostata di ciliegie', months: [5,6,7], time: 50, servings: 8, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F021'], pantryIngredients: ['farina','burro','zucchero','uova','limone'],
    steps: [
      { text: 'Prepara la pasta frolla: impasta farina, burro freddo, zucchero, uovo e scorza di limone.', duration: 10 },
      { text: 'Falla riposare in frigo 30 minuti.', duration: 30 },
      { text: 'Snocciolale ciliegie.', duration: 5 },
      { text: 'Stendi la frolla, farcisci con le ciliegie e zucchero.', duration: 5 },
      { text: 'Inforna a 180°C per 30-35 minuti.', duration: 35 }
    ],
    tags: ['dolce','estate','tradizione'], dietTags: ['vegetariana']
  },
  // === LUGLIO ===
  {
    id: 'R031', title: 'Panzanella', months: [7,8,9], time: 15, servings: 4, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F046','F048','F049'], pantryIngredients: ['pane toscano raffermo','basilico','olio extravergine','aceto di vino rosso','sale'],
    steps: [
      { text: 'Bagna il pane raffermo e strizzalo.', duration: 3 },
      { text: 'Taglia pomodori, cetriolo e cipolla a pezzi.', duration: 5 },
      { text: 'Mescola tutto con basilico, olio e aceto.', duration: 3 },
      { text: 'Lascia insaporire 10 minuti prima di servire.' }
    ],
    tags: ['tradizione','estate','leggero','veloce'], dietTags: ['vegana','senza_lattosio'],
    isTraditional: true, region: 'Toscana', culturalNote: 'La panzanella è il piatto contadino toscano dell\'estate, nato per non sprecare il pane.'
  },
  {
    id: 'R032', title: 'Peperoni ripieni al forno', months: [7,8,9], time: 45, servings: 4, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F045'], pantryIngredients: ['riso','pomodoro','olive','capperi','olio extravergine','sale','prezzemolo'],
    steps: [
      { text: 'Taglia i peperoni a metà e svuotali.', duration: 3 },
      { text: 'Cuoci il riso a metà cottura.', duration: 8 },
      { text: 'Mescola il riso con pomodoro a pezzi, olive, capperi e prezzemolo.', duration: 3 },
      { text: 'Riempi i peperoni e disponili in una teglia oliata.', duration: 5 },
      { text: 'Inforna a 180°C per 30 minuti.', duration: 30 }
    ],
    tags: ['estate','comfort','tradizione'], dietTags: ['vegana','senza_glutine','senza_lattosio'],
    isTraditional: true, region: 'Piemonte/Sud Italia', culturalNote: 'I peperoni ripieni si preparano in tutta Italia con infinite varianti regionali.'
  },
  {
    id: 'R033', title: 'Spaghetti alle vongole e fagiolini', months: [7,8,9], time: 25, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F059'], pantryIngredients: ['spaghetti','vongole','aglio','vino bianco','prezzemolo','olio extravergine','peperoncino'],
    steps: [
      { text: 'Taglia i fagiolini a pezzetti e lessali 5 minuti.', duration: 7 },
      { text: 'Fai aprire le vongole in padella con aglio, olio e vino.', duration: 5 },
      { text: 'Cuoci gli spaghetti al dente.', duration: 10 },
      { text: 'Condisci con vongole, fagiolini, prezzemolo e peperoncino.' }
    ],
    tags: ['estate','mare'], dietTags: ['senza_lattosio']
  },
  {
    id: 'R034', title: 'Insalata di anguria e feta', months: [6,7,8,9], time: 10, servings: 4, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F027','H009'], pantryIngredients: ['feta','olio extravergine','olive nere','sale'],
    steps: [
      { text: 'Taglia l\'anguria a cubetti.', duration: 3 },
      { text: 'Sbriciola la feta sopra.', duration: 2 },
      { text: 'Aggiungi foglie di menta, olive nere e un filo d\'olio.' }
    ],
    tags: ['estate','veloce','leggero','fresco'], dietTags: ['vegetariana','senza_glutine']
  },
  {
    id: 'R035', title: 'Pasta fredda con melanzane grigliate', months: [6,7,8,9], time: 25, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F044','F046','H001'], pantryIngredients: ['pasta corta','olio extravergine','aglio','sale'],
    steps: [
      { text: 'Taglia le melanzane a fette e grigliale.', duration: 10 },
      { text: 'Cuoci la pasta, scolala e raffreddala sotto acqua.', duration: 10 },
      { text: 'Taglia i pomodorini a metà.', duration: 2 },
      { text: 'Mescola tutto con basilico, olio e aglio.' }
    ],
    tags: ['estate','leggero'], dietTags: ['vegana','senza_lattosio']
  },
  // === AGOSTO ===
  {
    id: 'R036', title: 'Caponata siciliana', months: [7,8,9], time: 40, servings: 6, difficulty: 'media', method: 'padella',
    ingredientIds: ['F044','F045','F046','F049'], pantryIngredients: ['sedano','olive verdi','capperi','aceto','zucchero','olio extravergine','sale','basilico'],
    steps: [
      { text: 'Taglia melanzane, peperoni, cipolla e sedano a cubetti.', duration: 8 },
      { text: 'Friggi le melanzane separatamente e mettile da parte.', duration: 10 },
      { text: 'Cuoci cipolla, peperoni e sedano 10 minuti.', duration: 10 },
      { text: 'Aggiungi pomodoro, olive, capperi, aceto e zucchero.', duration: 5 },
      { text: 'Unisci le melanzane fritte e cuoci 5 minuti.', duration: 5 },
      { text: 'Servi a temperatura ambiente con basilico.' }
    ],
    tags: ['tradizione','estate','comfort'], dietTags: ['vegana','senza_glutine','senza_lattosio'],
    isTraditional: true, region: 'Sicilia', culturalNote: 'La caponata è agrodolce e migliora il giorno dopo. Ogni famiglia siciliana ha la sua versione.'
  },
  {
    id: 'R037', title: 'Bruschetta con pomodori e basilico', months: [6,7,8,9], time: 10, servings: 4, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F046','H001'], pantryIngredients: ['pane casereccio','aglio','olio extravergine','sale'],
    steps: [
      { text: 'Taglia i pomodori a cubetti piccoli, condiscili con sale e basilico.', duration: 3 },
      { text: 'Tosta il pane e strofina con aglio.', duration: 3 },
      { text: 'Distribuisci i pomodori sul pane e irrora con olio.' }
    ],
    tags: ['veloce','estate','tradizione','antipasto'], dietTags: ['vegana','senza_lattosio']
  },
  {
    id: 'R038', title: 'Frullato di pesche e menta', months: [6,7,8,9], time: 5, servings: 2, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F023','H009'], pantryIngredients: ['yogurt','miele','ghiaccio'],
    steps: [
      { text: 'Taglia le pesche a pezzi.', duration: 2 },
      { text: 'Frulla con yogurt, miele, menta e ghiaccio.', duration: 2 },
      { text: 'Servi subito in bicchieri grandi.' }
    ],
    tags: ['veloce','estate','leggero','bevanda'], dietTags: ['vegetariana','senza_glutine']
  },
  {
    id: 'R039', title: 'Parmigiana di melanzane', months: [7,8,9], time: 60, servings: 6, difficulty: 'media', method: 'forno',
    ingredientIds: ['F044','F046','H001'], pantryIngredients: ['mozzarella','parmigiano','olio per friggere','aglio','sale'],
    steps: [
      { text: 'Taglia le melanzane a fette, salale e lasciale spurgare 30 minuti.', duration: 35 },
      { text: 'Prepara un sugo con pomodoro, aglio e basilico.', duration: 15 },
      { text: 'Friggi le melanzane e scolale su carta assorbente.', duration: 15 },
      { text: 'Componi strati di melanzane, sugo, mozzarella e parmigiano.', duration: 5 },
      { text: 'Inforna a 180°C per 30 minuti.', duration: 30 }
    ],
    tags: ['tradizione','estate','comfort'], dietTags: ['vegetariana'],
    isTraditional: true, region: 'Campania/Sicilia', culturalNote: 'La parmigiana di melanzane è uno dei piatti più amati della cucina del Sud Italia.'
  },
  {
    id: 'R040', title: 'Macedonia di frutta estiva', months: [6,7,8,9], time: 10, servings: 4, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F023','F027','F032','F033'], pantryIngredients: ['zucchero','limone','menta'],
    steps: [
      { text: 'Taglia tutta la frutta a cubetti.', duration: 5 },
      { text: 'Condisci con succo di limone e poco zucchero.', duration: 2 },
      { text: 'Mescola delicatamente e decora con menta.', duration: 2 },
      { text: 'Servi fresca o con gelato.' }
    ],
    tags: ['dolce','estate','veloce','leggero'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  // === SETTEMBRE ===
  {
    id: 'R041', title: 'Risotto con zucca e funghi porcini', months: [9,10,11], time: 35, servings: 4, difficulty: 'media', method: 'padella',
    ingredientIds: ['F042','F095'], pantryIngredients: ['riso carnaroli','cipolla','brodo','vino bianco','burro','parmigiano'],
    steps: [
      { text: 'Taglia la zucca a cubetti e i porcini a fette.', duration: 5 },
      { text: 'Rosola cipolla in olio, aggiungi la zucca e cuoci 5 minuti.', duration: 6 },
      { text: 'Tosta il riso e sfuma col vino.', duration: 3 },
      { text: 'Aggiungi brodo a mestoli per 18 minuti, unendo i porcini a metà.', duration: 18 },
      { text: 'Manteca con burro e parmigiano.' }
    ],
    tags: ['autunno','comfort','raffinato'], dietTags: ['vegetariana']
  },
  {
    id: 'R042', title: 'Schiacciata con l\'uva', months: [9,10], time: 50, servings: 8, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F029'], pantryIngredients: ['farina','lievito','olio extravergine','zucchero','rosmarino','sale'],
    steps: [
      { text: 'Impasta farina, lievito, olio, zucchero e sale. Fai lievitare 1 ora.', duration: 5 },
      { text: 'Stendi l\'impasto in una teglia oliata.', duration: 3 },
      { text: 'Premi i chicchi d\'uva nell\'impasto.', duration: 5 },
      { text: 'Cospargi di zucchero e rosmarino.', duration: 2 },
      { text: 'Inforna a 200°C per 25-30 minuti.', duration: 30 }
    ],
    tags: ['tradizione','autunno','dolce'], dietTags: ['vegana','senza_lattosio'],
    isTraditional: true, region: 'Toscana', culturalNote: 'La schiacciata con l\'uva si prepara a Firenze durante la vendemmia.'
  },
  {
    id: 'R043', title: 'Pasta al sugo di fichi', months: [8,9], time: 20, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F018'], pantryIngredients: ['pasta','pancetta','noci','pecorino','olio extravergine','pepe'],
    steps: [
      { text: 'Taglia i fichi a quarti.', duration: 3 },
      { text: 'Rosola la pancetta in padella.', duration: 4 },
      { text: 'Aggiungi i fichi e cuoci 3 minuti.', duration: 3 },
      { text: 'Cuoci e scola la pasta, saltala con il condimento.', duration: 8 },
      { text: 'Servi con noci spezzettate e pecorino.' }
    ],
    tags: ['autunno','originale'], dietTags: []
  },
  {
    id: 'R044', title: 'Fagioli all\'uccelletto', months: [8,9,10], time: 30, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F060','F046'], pantryIngredients: ['aglio','salvia','olio extravergine','pomodoro','sale','pepe'],
    steps: [
      { text: 'Se usi fagioli freschi, sgranali. Se secchi, ammollali prima.', duration: 5 },
      { text: 'Scalda olio con aglio e salvia.', duration: 2 },
      { text: 'Aggiungi i fagioli e il pomodoro. Cuoci 20 minuti a fuoco dolce.', duration: 20 },
      { text: 'Aggiusta di sale e pepe. Servi con pane tostato.' }
    ],
    tags: ['tradizione','autunno','comfort'], dietTags: ['vegana','senza_glutine','senza_lattosio'],
    isTraditional: true, region: 'Toscana', culturalNote: 'Piatto contadino toscano, si chiama "all\'uccelletto" per il condimento simile a quello degli uccellini.'
  },
  {
    id: 'R045', title: 'Insalata di farro con uva e noci', months: [9,10], time: 25, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F029','F016'], pantryIngredients: ['farro','rucola','olio extravergine','aceto balsamico','sale'],
    steps: [
      { text: 'Cuoci il farro e raffreddalo.', duration: 25 },
      { text: 'Taglia i chicchi d\'uva a metà, spezza le noci.', duration: 3 },
      { text: 'Mescola con rucola, olio e aceto balsamico.' }
    ],
    tags: ['autunno','leggero'], dietTags: ['vegana','senza_lattosio']
  },
  // === OTTOBRE ===
  {
    id: 'R046', title: 'Vellutata di castagne e porcini', months: [10,11], time: 35, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F014','F095'], pantryIngredients: ['cipolla','patata','brodo vegetale','olio extravergine','rosmarino','sale'],
    steps: [
      { text: 'Lessa le castagne e pelale (o usa quelle già cotte).', duration: 5 },
      { text: 'Soffriggi cipolla, aggiungi patata a cubetti e castagne.', duration: 5 },
      { text: 'Copri con brodo e cuoci 20 minuti.', duration: 20 },
      { text: 'Frulla il tutto. Rosola i porcini a parte.', duration: 5 },
      { text: 'Servi la vellutata con porcini sopra e un filo d\'olio.' }
    ],
    tags: ['autunno','comfort','raffinato'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  {
    id: 'R047', title: 'Zucca al forno con rosmarino', months: [9,10,11,12,1,2], time: 35, servings: 4, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F042'], pantryIngredients: ['rosmarino','aglio','olio extravergine','sale','pepe'],
    steps: [
      { text: 'Taglia la zucca a spicchi senza pelarla.', duration: 5 },
      { text: 'Condisci con olio, rosmarino, aglio, sale e pepe.', duration: 3 },
      { text: 'Disponi su una teglia foderata.', duration: 2 },
      { text: 'Inforna a 200°C per 25 minuti fino a doratura.', duration: 25 }
    ],
    tags: ['contorno','autunno','comfort','veloce'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  {
    id: 'R048', title: 'Pasta con radicchio e speck', months: [10,11,12,1,2], time: 20, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F078'], pantryIngredients: ['pasta','speck','cipolla','panna','parmigiano','olio','sale'],
    steps: [
      { text: 'Taglia il radicchio a striscioline e lo speck a listarelle.', duration: 3 },
      { text: 'Rosola lo speck, aggiungi cipolla e radicchio.', duration: 5 },
      { text: 'Unisci la panna e cuoci 3 minuti.', duration: 3 },
      { text: 'Scola la pasta e saltala nel condimento con parmigiano.' }
    ],
    tags: ['autunno','comfort','veloce'], dietTags: []
  },
  {
    id: 'R049', title: 'Torta di mele', months: [9,10,11,12,1], time: 55, servings: 8, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F010'], pantryIngredients: ['farina','zucchero','uova','burro','lievito','limone','cannella'],
    steps: [
      { text: 'Sbatti uova e zucchero fino a ottenere un composto chiaro.', duration: 5 },
      { text: 'Aggiungi burro fuso, farina, lievito e scorza di limone.', duration: 3 },
      { text: 'Pela e taglia le mele a fettine.', duration: 5 },
      { text: 'Versa l\'impasto in una teglia imburrata e disponi le mele sopra.', duration: 3 },
      { text: 'Spolvera di cannella e inforna a 180°C per 40 minuti.', duration: 40 }
    ],
    tags: ['dolce','tradizione','comfort','autunno'], dietTags: ['vegetariana'],
    isTraditional: true, region: 'Trentino/tutta Italia', culturalNote: 'La torta di mele è il dolce casalingo per eccellenza, ogni nonna ha la sua ricetta.'
  },
  {
    id: 'R050', title: 'Crema di barbabietola', months: [10,11,12,1,2,3], time: 25, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F072','F041'], pantryIngredients: ['cipolla','olio extravergine','brodo','sale','yogurt greco'],
    steps: [
      { text: 'Taglia barbabietole (precotte) e patata a pezzi.', duration: 3 },
      { text: 'Soffriggi cipolla, aggiungi verdure e brodo.', duration: 5 },
      { text: 'Cuoci 15 minuti e frulla il tutto.', duration: 17 },
      { text: 'Servi con un cucchiaio di yogurt e un filo d\'olio.' }
    ],
    tags: ['inverno','leggero','comfort'], dietTags: ['vegetariana','senza_glutine']
  },
  // === NOVEMBRE ===
  {
    id: 'R051', title: 'Ribollita toscana', months: [11,12,1,2], time: 50, servings: 6, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F064','F065','F049','F040'], pantryIngredients: ['fagioli cannellini','pane toscano','olio extravergine','pomodoro','sale'],
    steps: [
      { text: 'Taglia cavolo nero, verza, cipolla e carote a pezzi.', duration: 8 },
      { text: 'Soffriggi cipolla e carote con olio.', duration: 5 },
      { text: 'Aggiungi le verdure, pomodoro, fagioli e acqua.', duration: 3 },
      { text: 'Cuoci a fuoco dolce per 30 minuti.', duration: 30 },
      { text: 'Aggiungi fette di pane raffermo e cuoci altri 10 minuti.', duration: 10 },
      { text: 'Servi con abbondante olio a crudo.' }
    ],
    tags: ['tradizione','inverno','comfort','sostanzioso'], dietTags: ['vegana','senza_lattosio'],
    isTraditional: true, region: 'Toscana', culturalNote: 'La ribollita si chiama così perché veniva "ribollita" il giorno dopo. Migliora col tempo.'
  },
  {
    id: 'R052', title: 'Orecchiette con cime di rapa', months: [11,12,1,2,3], time: 25, servings: 4, difficulty: 'facile', method: 'padella',
    ingredientIds: ['F069'], pantryIngredients: ['orecchiette','aglio','acciughe','peperoncino','olio extravergine','sale'],
    steps: [
      { text: 'Pulisci le cime di rapa tenendo solo le cimette e le foglie tenere.', duration: 5 },
      { text: 'Lessale nella stessa acqua della pasta per 5 minuti.', duration: 5 },
      { text: 'Cuoci le orecchiette nell\'acqua delle cime di rapa.', duration: 12 },
      { text: 'In padella rosola aglio, acciughe e peperoncino in olio.', duration: 3 },
      { text: 'Scola tutto e salta in padella.' }
    ],
    tags: ['tradizione','inverno'], dietTags: ['senza_lattosio'],
    isTraditional: true, region: 'Puglia', culturalNote: 'Le orecchiette con le cime di rapa sono il piatto simbolo della Puglia.'
  },
  {
    id: 'R053', title: 'Castagne arrosto', months: [10,11,12], time: 30, servings: 4, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F014'], pantryIngredients: ['sale'],
    steps: [
      { text: 'Incidi le castagne sulla parte piatta con un taglio a croce.', duration: 5 },
      { text: 'Disponile sulla teglia forata o su una padella per castagne.', duration: 2 },
      { text: 'Cuoci in forno a 200°C per 20-25 minuti, mescolando ogni tanto.', duration: 25 },
      { text: 'Avvolgile in un canovaccio per 5 minuti, poi pelale calde.' }
    ],
    tags: ['autunno','tradizione','comfort'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  {
    id: 'R054', title: 'Minestrone invernale', months: [11,12,1,2,3], time: 45, servings: 6, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F040','F041','F065','F052','F085'], pantryIngredients: ['fagioli','pasta corta','olio extravergine','parmigiano','sale'],
    steps: [
      { text: 'Taglia tutte le verdure a cubetti piccoli.', duration: 10 },
      { text: 'Soffriggi porro con olio. Aggiungi le verdure.', duration: 5 },
      { text: 'Copri con acqua, aggiungi fagioli e cuoci 25 minuti.', duration: 25 },
      { text: 'Aggiungi la pasta corta e cuoci altri 10 minuti.', duration: 10 },
      { text: 'Servi con parmigiano e olio a crudo.' }
    ],
    tags: ['inverno','comfort','sostanzioso','tradizione'], dietTags: ['vegetariana']
  },
  {
    id: 'R055', title: 'Teglia di carciofi e patate', months: [11,12,1,2,3,4], time: 45, servings: 4, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F055','F041'], pantryIngredients: ['aglio','prezzemolo','pangrattato','olio extravergine','sale','pepe'],
    steps: [
      { text: 'Pulisci i carciofi e tagliali a spicchi. Pela e affetta le patate.', duration: 10 },
      { text: 'Alterna strati di patate e carciofi in una teglia oliata.', duration: 5 },
      { text: 'Cospargi ogni strato con aglio, prezzemolo e pangrattato.', duration: 3 },
      { text: 'Irrora con olio e inforna a 180°C per 30 minuti.', duration: 30 }
    ],
    tags: ['inverno','comfort','contorno'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  // === DICEMBRE ===
  {
    id: 'R056', title: 'Pasta e broccoli in brodo', months: [12,1,2,3], time: 25, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F062'], pantryIngredients: ['pasta mista','aglio','peperoncino','olio extravergine','pecorino','sale'],
    steps: [
      { text: 'Taglia i broccoli a cimette.', duration: 3 },
      { text: 'Cuocili in acqua salata per 5 minuti.', duration: 5 },
      { text: 'Aggiungi la pasta mista e cuoci fino a cottura.', duration: 12 },
      { text: 'Condisci con aglio rosolato in olio e peperoncino.', duration: 3 },
      { text: 'Servi con pecorino e olio.' }
    ],
    tags: ['inverno','comfort','tradizione'], dietTags: ['vegetariana']
  },
  {
    id: 'R057', title: 'Insalata di arance rosse', months: [12,1,2,3], time: 10, servings: 4, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F001'], pantryIngredients: ['cipolla rossa','olive nere','olio extravergine','sale','origano'],
    steps: [
      { text: 'Pela le arance a vivo e tagliale a rondelle.', duration: 3 },
      { text: 'Affetta sottilmente la cipolla rossa.', duration: 2 },
      { text: 'Componi con olive nere, olio, sale e origano.' }
    ],
    tags: ['inverno','leggero','veloce','tradizione'], dietTags: ['vegana','senza_glutine','senza_lattosio'],
    isTraditional: true, region: 'Sicilia', culturalNote: 'Un\'insalata invernale siciliana che esalta le arance rosse di Sicilia.'
  },
  {
    id: 'R058', title: 'Cavolini di Bruxelles al forno', months: [11,12,1,2], time: 30, servings: 4, difficulty: 'facile', method: 'forno',
    ingredientIds: ['F068'], pantryIngredients: ['olio extravergine','aceto balsamico','sale','pepe','miele'],
    steps: [
      { text: 'Taglia i cavolini a metà.', duration: 3 },
      { text: 'Condiscili con olio, sale, pepe e un cucchiaio di miele.', duration: 2 },
      { text: 'Disponi su teglia e inforna a 200°C per 20-25 minuti.', duration: 25 },
      { text: 'Servi con un filo di aceto balsamico.' }
    ],
    tags: ['contorno','inverno'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  {
    id: 'R059', title: 'Crema di porri e patate', months: [10,11,12,1,2,3], time: 30, servings: 4, difficulty: 'facile', method: 'pentola',
    ingredientIds: ['F052','F041'], pantryIngredients: ['olio extravergine','brodo','sale','pepe','crostini'],
    steps: [
      { text: 'Taglia i porri a rondelle e le patate a cubetti.', duration: 5 },
      { text: 'Soffriggi i porri dolcemente per 5 minuti.', duration: 5 },
      { text: 'Aggiungi le patate e il brodo. Cuoci 15 minuti.', duration: 15 },
      { text: 'Frulla il tutto e servi con crostini e olio.' }
    ],
    tags: ['inverno','comfort','leggero'], dietTags: ['vegana','senza_glutine','senza_lattosio']
  },
  {
    id: 'R060', title: 'Pandoro farcito con crema al mascarpone', months: [12], time: 15, servings: 8, difficulty: 'facile', method: 'crudo',
    ingredientIds: ['F012'], pantryIngredients: ['pandoro','mascarpone','zucchero a velo','cacao','kiwi'],
    steps: [
      { text: 'Taglia il pandoro a fette orizzontali.', duration: 2 },
      { text: 'Prepara la crema: mascarpone con zucchero a velo.', duration: 3 },
      { text: 'Spalma la crema su ogni strato e ricomponi il pandoro.', duration: 5 },
      { text: 'Decora con kiwi a fette e spolvera di zucchero a velo.', duration: 3 }
    ],
    tags: ['dolce','natale','tradizione','veloce'], dietTags: ['vegetariana']
  },
];

// Helper functions
export function getRecipesForMonth(monthNumber: number): Recipe[] {
  return recipes.filter(r => r.months.includes(monthNumber));
}

export function getQuickRecipes(monthNumber: number, maxTime = 30): Recipe[] {
  return getRecipesForMonth(monthNumber).filter(r => r.time <= maxTime && r.difficulty === 'facile');
}

export function getTraditionalRecipes(monthNumber: number): Recipe[] {
  return getRecipesForMonth(monthNumber).filter(r => r.isTraditional);
}

export function searchRecipes(query: string): Recipe[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return recipes.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.tags.some(t => t.includes(q)) ||
    r.pantryIngredients.some(p => p.toLowerCase().includes(q))
  );
}

export function getRecipesByFridge(ingredientIds: string[], monthNumber?: number): { recipe: Recipe; matchPercent: number }[] {
  const pool = monthNumber ? getRecipesForMonth(monthNumber) : recipes;
  return pool.map(r => {
    const matched = r.ingredientIds.filter(id => ingredientIds.includes(id)).length;
    const total = r.ingredientIds.length;
    return { recipe: r, matchPercent: total > 0 ? Math.round((matched / total) * 100) : 0 };
  }).filter(r => r.matchPercent > 0).sort((a, b) => b.matchPercent - a.matchPercent);
}

export const QUICK_TAGS = [
  { id: 'poco_tempo', label: '⏱️ Ho poco tempo', filter: (r: Recipe) => r.time <= 15 },
  { id: 'ospiti', label: '👥 Ho ospiti', filter: (r: Recipe) => r.servings >= 6 },
  { id: 'leggero', label: '🥗 Leggero', filter: (r: Recipe) => r.tags.includes('leggero') },
  { id: 'comfort', label: '🍲 Comfort food', filter: (r: Recipe) => r.tags.includes('comfort') },
] as const;
