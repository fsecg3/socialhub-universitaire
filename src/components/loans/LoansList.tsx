
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Stethoscope, 
  Home, 
  Building,
  ChevronDown,
  ChevronUp,
  FileText,
  AlertCircle
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const LoansList = () => {
  const { toast } = useToast();
  const [expandedLoan, setExpandedLoan] = useState<string | null>(null);

  const toggleExpand = (loanId: string) => {
    setExpandedLoan(expandedLoan === loanId ? null : loanId);
  };

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const loans = [
    {
      id: "marriage",
      title: "Prêt Mariage",
      description: "Financement adapté pour votre projet de mariage avec des conditions avantageuses.",
      icon: Heart,
      action: "Demander un prêt",
      features: [
        "Simulation de prêt",
        "Calcul des mensualités",
        "Validation rapide",
        "Suivi du remboursement"
      ],
      documents: [
        "Justificatif de revenu",
        "Projet de mariage",
        "Garanties"
      ],
      interestRate: "3% à 4%",
      maxAmount: "500 000 DA",
      maxDuration: "48 mois"
    },
    {
      id: "medical",
      title: "Prêt Médical",
      description: "Financement pour vos frais médicaux importants avec des conditions préférentielles.",
      icon: Stethoscope,
      action: "Demander un prêt",
      features: [
        "Montant adapté aux frais",
        "Taux préférentiels",
        "Déblocage rapide",
        "Plan de remboursement flexible"
      ],
      documents: [
        "Justificatifs médicaux",
        "Devis médical",
        "Attestation de soins"
      ],
      interestRate: "2% à 3%",
      maxAmount: "400 000 DA",
      maxDuration: "36 mois"
    },
    {
      id: "renovation",
      title: "Prêt Rénovation Logement",
      description: "Financement pour vos projets de rénovation et d'amélioration de votre logement.",
      icon: Home,
      action: "Demander un prêt",
      features: [
        "Évaluation des travaux",
        "Montant selon devis",
        "Suivi des travaux",
        "Conditions avantageuses"
      ],
      documents: [
        "Devis",
        "Plan des travaux",
        "Propriété du logement"
      ],
      interestRate: "3.5% à 4.5%",
      maxAmount: "800 000 DA",
      maxDuration: "60 mois"
    },
    {
      id: "purchase",
      title: "Prêt Achat/Construction Logement",
      description: "Solution de financement pour l'achat ou la construction de votre logement.",
      icon: Building,
      action: "Demander un prêt",
      features: [
        "Accompagnement projet immobilier",
        "Simulations financières",
        "Validation en ligne",
        "Suivi administratif"
      ],
      documents: [
        "Promesse d'achat",
        "Plan de financement",
        "Revenus"
      ],
      interestRate: "4% à 5%",
      maxAmount: "3 000 000 DA",
      maxDuration: "300 mois"
    }
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loans.map((loan) => (
          <Card 
            key={loan.id} 
            className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full flex flex-col"
          >
            <CardHeader className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <loan.icon size={24} />
              </div>
              <CardTitle>{loan.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4 flex-1">
              <CardDescription className="text-base">{loan.description}</CardDescription>
              
              {/* Interest Rate & Amount */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Taux d'intérêt</h4>
                  <p className="text-lg font-semibold text-primary">{loan.interestRate}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Montant max</h4>
                  <p className="text-lg font-semibold text-primary">{loan.maxAmount}</p>
                </div>
              </div>
              
              {/* Toggle section */}
              <Button 
                variant="ghost" 
                className="p-0 h-auto w-full flex justify-between items-center text-sm font-medium text-primary hover:bg-transparent"
                onClick={() => toggleExpand(loan.id)}
              >
                <span>Détails du prêt</span>
                {expandedLoan === loan.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Button>
              
              {/* Expanded content */}
              {expandedLoan === loan.id && (
                <div className="animate-accordion-down pt-2">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Caractéristiques</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Documents requis</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {loan.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <FileText size={14} className="text-primary flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-1">Durée maximale</h4>
                    <p className="text-sm text-muted-foreground">{loan.maxDuration}</p>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
              <Button className="w-full" onClick={showNotAvailableMessage}>
                {loan.action}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
};

export default LoansList;
