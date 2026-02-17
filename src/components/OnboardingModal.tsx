import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function OnboardingModal() {
  const { hasSeenOnboarding, dismissOnboarding } = useApp();
  
  if (hasSeenOnboarding) return null;

  return (
    <Dialog open={!hasSeenOnboarding} onOpenChange={() => dismissOnboarding()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-boomer-2xl font-display text-center">
            🍅 Benvenuto in Stagioni in Cucina!
          </DialogTitle>
          <DialogDescription className="text-boomer-base text-center">
            Scopri cosa è di stagione e trova ricette facili.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
            <span className="text-3xl">📅</span>
            <div>
              <p className="text-boomer-base font-semibold">1. Scegli il mese</p>
              <p className="text-boomer-sm text-muted-foreground">
                Il mese corrente è già selezionato. Puoi cambiarlo quando vuoi.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
            <span className="text-3xl">🥕</span>
            <div>
              <p className="text-boomer-base font-semibold">2. Scopri gli ingredienti di stagione</p>
              <p className="text-boomer-sm text-muted-foreground">
                Vedi frutta, verdura e altri ingredienti freschi del mese.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
            <span className="text-3xl">👨‍🍳</span>
            <div>
              <p className="text-boomer-base font-semibold">3. Trova ricette facili</p>
              <p className="text-boomer-sm text-muted-foreground">
                Premi "Cosa cucino stasera?" per idee veloci e semplici.
              </p>
            </div>
          </div>
        </div>
        <Button onClick={dismissOnboarding} className="btn-boomer w-full text-boomer-lg">
          Ho capito, iniziamo! 🚀
        </Button>
      </DialogContent>
    </Dialog>
  );
}
