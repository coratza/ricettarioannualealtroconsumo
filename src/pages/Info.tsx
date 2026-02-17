import { Layout } from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Info() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="section-title mb-6">ℹ️ Informazioni</h1>

        <section className="mb-10">
          <h2 className="text-boomer-xl font-display font-bold mb-3">🍅 Cos'è Stagioni in Cucina?</h2>
          <p className="text-boomer-base leading-relaxed mb-4">
            Stagioni in Cucina è un sito gratuito che ti aiuta a scoprire quali ingredienti sono di stagione in Italia, 
            mese per mese, e a trovare ricette semplici per cucinarli. Nessuna registrazione, nessuna pubblicità.
          </p>
          <p className="text-boomer-base leading-relaxed">
            Il nostro obiettivo è rendere la cucina di stagione facile e accessibile a tutti: 
            dalla spesa al mercato alla cena in tavola, senza complicazioni.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-boomer-xl font-display font-bold mb-4">❓ Domande frequenti</h2>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="q1" className="bg-card rounded-xl border-2 border-border px-5">
              <AccordionTrigger className="text-boomer-base font-semibold py-4">
                Come funziona la scelta del mese?
              </AccordionTrigger>
              <AccordionContent className="text-boomer-base pb-4">
                Il sito rileva automaticamente il mese corrente. Puoi cambiarlo in qualsiasi momento 
                premendo sul nome del mese nell'intestazione. La tua scelta viene ricordata.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="bg-card rounded-xl border-2 border-border px-5">
              <AccordionTrigger className="text-boomer-base font-semibold py-4">
                Cos'è la modalità semplice?
              </AccordionTrigger>
              <AccordionContent className="text-boomer-base pb-4">
                La modalità semplice mostra solo i principali ingredienti del mese e le ricette più facili. 
                Puoi passare alla modalità completa per vedere tutti gli ingredienti e i filtri avanzati.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="bg-card rounded-xl border-2 border-border px-5">
              <AccordionTrigger className="text-boomer-base font-semibold py-4">
                Come funziona "Cosa cucino stasera?"
              </AccordionTrigger>
              <AccordionContent className="text-boomer-base pb-4">
                Ti propone 1-3 ricette veloci e facili con ingredienti del mese. 
                Puoi scegliere opzioni come "Ho poco tempo" o "Leggero" per filtrare meglio.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4" className="bg-card rounded-xl border-2 border-border px-5">
              <AccordionTrigger className="text-boomer-base font-semibold py-4">
                Come stampo una ricetta?
              </AccordionTrigger>
              <AccordionContent className="text-boomer-base pb-4">
                Apri la ricetta e premi il pulsante "Stampa ricetta". 
                La pagina viene formattata apposta per la stampa: bianco e nero, testo leggibile, spazio per le note.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5" className="bg-card rounded-xl border-2 border-border px-5">
              <AccordionTrigger className="text-boomer-base font-semibold py-4">
                I miei dati vengono salvati?
              </AccordionTrigger>
              <AccordionContent className="text-boomer-base pb-4">
                I tuoi preferiti e le impostazioni vengono salvati solo sul tuo dispositivo (nel browser). 
                Non raccogliamo dati personali e non usiamo cookie di tracciamento.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-10">
          <h2 className="text-boomer-xl font-display font-bold mb-3">♿ Accessibilità</h2>
          <p className="text-boomer-base leading-relaxed mb-3">
            Stagioni in Cucina è progettato per essere accessibile a tutti:
          </p>
          <ul className="space-y-2 text-boomer-base">
            <li className="flex items-start gap-2">✅ Testo grande e leggibile (minimo 18px)</li>
            <li className="flex items-start gap-2">✅ Contrasti elevati tra testo e sfondo</li>
            <li className="flex items-start gap-2">✅ Navigazione da tastiera completa</li>
            <li className="flex items-start gap-2">✅ Rispetto dell'impostazione "riduci movimento"</li>
            <li className="flex items-start gap-2">✅ Pulsanti grandi e facili da premere</li>
            <li className="flex items-start gap-2">✅ Compatibile con lettori di schermo</li>
          </ul>
        </section>

        <section>
          <h2 className="text-boomer-xl font-display font-bold mb-3">📬 Contatti</h2>
          <p className="text-boomer-base leading-relaxed">
            Hai suggerimenti, segnalazioni o vuoi contribuire con ricette della tua tradizione?
            Scrivici: ci fa sempre piacere sentire la tua opinione.
          </p>
        </section>
      </div>
    </Layout>
  );
}
