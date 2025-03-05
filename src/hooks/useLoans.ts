
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export type LoanCategory = 
  | 'marriage' 
  | 'medical' 
  | 'renovation' 
  | 'purchase';

export interface LoanDetail {
  id: LoanCategory;
  title: string;
  description: string;
  features: string[];
  documents: string[];
  interestRate?: string;
  maxAmount?: string;
  maxDuration?: string;
  processingTime?: string;
}

const useLoans = () => {
  const [activeTab, setActiveTab] = useState('loans');
  const [selectedLoan, setSelectedLoan] = useState<LoanCategory | null>(null);
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const loanDetails: Record<LoanCategory, LoanDetail> = {
    marriage: {
      id: 'marriage',
      title: 'Prêt Mariage',
      description: 'Financement adapté pour votre projet de mariage avec des conditions avantageuses.',
      features: [
        'Simulation de prêt',
        'Calcul des mensualités',
        'Validation rapide',
        'Suivi du remboursement'
      ],
      documents: [
        'Justificatif de revenu',
        'Projet de mariage',
        'Garanties'
      ],
      interestRate: '3% à 4%',
      maxAmount: '500 000 DA',
      maxDuration: '48 mois',
      processingTime: '5 à 10 jours ouvrables'
    },
    medical: {
      id: 'medical',
      title: 'Prêt Médical',
      description: 'Financement pour vos frais médicaux importants avec des conditions préférentielles.',
      features: [
        'Montant adapté aux frais',
        'Taux préférentiels',
        'Déblocage rapide',
        'Plan de remboursement flexible'
      ],
      documents: [
        'Justificatifs médicaux',
        'Devis médical',
        'Attestation de soins'
      ],
      interestRate: '2% à 3%',
      maxAmount: '400 000 DA',
      maxDuration: '36 mois',
      processingTime: '3 à 7 jours ouvrables'
    },
    renovation: {
      id: 'renovation',
      title: 'Prêt Rénovation Logement',
      description: 'Financement pour vos projets de rénovation et d\'amélioration de votre logement.',
      features: [
        'Évaluation des travaux',
        'Montant selon devis',
        'Suivi des travaux',
        'Conditions avantageuses'
      ],
      documents: [
        'Devis',
        'Plan des travaux',
        'Propriété du logement'
      ],
      interestRate: '3.5% à 4.5%',
      maxAmount: '800 000 DA',
      maxDuration: '60 mois',
      processingTime: '7 à 14 jours ouvrables'
    },
    purchase: {
      id: 'purchase',
      title: 'Prêt Achat/Construction Logement',
      description: 'Solution de financement pour l\'achat ou la construction de votre logement.',
      features: [
        'Accompagnement projet immobilier',
        'Simulations financières',
        'Validation en ligne',
        'Suivi administratif'
      ],
      documents: [
        'Promesse d\'achat',
        'Plan de financement',
        'Revenus'
      ],
      interestRate: '4% à 5%',
      maxAmount: '3 000 000 DA',
      maxDuration: '300 mois',
      processingTime: '14 à 30 jours ouvrables'
    }
  };

  return {
    activeTab,
    setActiveTab,
    selectedLoan,
    setSelectedLoan,
    loanDetails,
    showNotAvailableMessage
  };
};

export default useLoans;
