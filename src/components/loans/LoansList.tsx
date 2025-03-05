
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Heart, Home, Building, Wallet } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

type LoanType = {
  title: string;
  description: string;
  icon: React.ElementType;
  eligibility: string;
  documents: string[];
  amount: string;
};

interface LoansListProps {
  onActionClick: () => void;
}

const LoansList: React.FC<LoansListProps> = ({ onActionClick }) => {
  const loans: LoanType[] = [
    {
      title: "Prêt pour mariage",
      description: "Prêt destiné à aider le personnel universitaire pour les dépenses liées à leur mariage.",
      icon: CreditCard,
      eligibility: "Personnel universitaire et enseignants en activité",
      documents: ["Acte de mariage", "Demande écrite", "Attestation de travail", "RIB bancaire", "Plan de remboursement"],
      amount: "Jusqu'à 500 000 DA"
    },
    {
      title: "Prêt médical",
      description: "Prêt pour couvrir les frais médicaux importants non pris en charge par la mutuelle.",
      icon: Heart,
      eligibility: "Personnel universitaire et enseignants en activité",
      documents: ["Certificats médicaux", "Devis médicaux", "Attestation de travail", "RIB bancaire"],
      amount: "Jusqu'à 400 000 DA"
    },
    {
      title: "Prêt pour rénovation de logement",
      description: "Financement pour les travaux de rénovation et d'amélioration de l'habitat.",
      icon: Home,
      eligibility: "Personnel universitaire et enseignants propriétaires d'un logement",
      documents: ["Titre de propriété", "Devis des travaux", "Photos avant rénovation", "Attestation de travail"],
      amount: "Jusqu'à 800 000 DA"
    },
    {
      title: "Prêt pour achat de logement",
      description: "Prêt complémentaire pour l'achat d'un logement neuf ou ancien.",
      icon: Building,
      eligibility: "Personnel universitaire et enseignants avec plus de 5 ans d'ancienneté",
      documents: ["Promesse de vente", "Plan de financement", "Attestation de travail", "Relevé de compte"],
      amount: "Jusqu'à 2 000 000 DA"
    }
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loans.map((loan) => (
          <Card key={loan.title} className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full">
            <CardHeader className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <loan.icon size={24} />
              </div>
              <CardTitle>{loan.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <CardDescription className="text-base">{loan.description}</CardDescription>
              <div>
                <h4 className="text-sm font-medium mb-1">Montant</h4>
                <p className="text-lg font-semibold text-primary">{loan.amount}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Éligibilité</h4>
                <p className="text-sm text-muted-foreground">{loan.eligibility}</p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full" onClick={onActionClick}>
                Faire une demande
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
};

export default LoansList;
export type { LoanType };
