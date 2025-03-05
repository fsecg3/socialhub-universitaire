
import React from 'react';
import { Wallet, Calculator, Clock, BadgePercent } from 'lucide-react';

const LoansHeader = () => {
  return (
    <div className="space-y-6 mb-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Gestion des Prêts</h1>
        <p className="text-muted-foreground">
          Découvrez nos solutions de financement adaptées aux besoins des étudiants et du personnel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-background rounded-lg border p-4 flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Calculator />
          </div>
          <div>
            <h3 className="font-medium">Simulation en ligne</h3>
            <p className="text-sm text-muted-foreground">Estimez votre capacité d'emprunt</p>
          </div>
        </div>
        <div className="bg-background rounded-lg border p-4 flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <BadgePercent />
          </div>
          <div>
            <h3 className="font-medium">Taux avantageux</h3>
            <p className="text-sm text-muted-foreground">Des conditions adaptées</p>
          </div>
        </div>
        <div className="bg-background rounded-lg border p-4 flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Clock />
          </div>
          <div>
            <h3 className="font-medium">Traitement rapide</h3>
            <p className="text-sm text-muted-foreground">Réponse sous 7 jours en moyenne</p>
          </div>
        </div>
        <div className="bg-background rounded-lg border p-4 flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Wallet />
          </div>
          <div>
            <h3 className="font-medium">Remboursement flexible</h3>
            <p className="text-sm text-muted-foreground">Adaptez vos mensualités</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoansHeader;
