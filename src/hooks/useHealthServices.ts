
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export type HealthServiceCategory = 
  | 'surgical' 
  | 'disability' 
  | 'chronic' 
  | 'optical' 
  | 'labwork' 
  | 'practitioners';

export interface HealthServiceDetail {
  id: HealthServiceCategory;
  title: string;
  description: string;
  features: string[];
  documents: string[];
  estimatedProcessingTime?: string;
  coveragePercentage?: string;
  maximumAmount?: string;
}

const useHealthServices = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState<HealthServiceCategory | null>(null);
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const serviceDetails: Record<HealthServiceCategory, HealthServiceDetail> = {
    surgical: {
      id: 'surgical',
      title: 'Opérations chirurgicales',
      description: 'Prise en charge et remboursement des opérations chirurgicales programmées ou d\'urgence.',
      features: [
        'Pré-demande en ligne',
        'Estimation du remboursement',
        'Suivi médical',
        'Gestion des urgences'
      ],
      documents: [
        'Devis médical',
        'Rapport chirurgical',
        'Factures'
      ],
      estimatedProcessingTime: '3 à 5 jours ouvrables',
      coveragePercentage: 'Jusqu\'à 80%',
      maximumAmount: '500 000 DA'
    },
    disability: {
      id: 'disability',
      title: 'Aide aux personnes à besoins spécifiques',
      description: 'Soutien personnalisé et aides financières spécifiques pour les personnes en situation de handicap.',
      features: [
        'Évaluation personnalisée',
        'Montants adaptés au handicap',
        'Accompagnement social',
        'Suivi personnalisé'
      ],
      documents: [
        'Carte d\'invalidité',
        'Certificat médical détaillé'
      ],
      estimatedProcessingTime: '7 à 14 jours ouvrables',
      coveragePercentage: 'Jusqu\'à 100%',
      maximumAmount: 'Variable selon le degré de handicap'
    },
    chronic: {
      id: 'chronic',
      title: 'Suivi des maladies chroniques',
      description: 'Programme de soutien continu et aide financière adaptée pour les maladies chroniques reconnues.',
      features: [
        'Dossier médical numérique',
        'Remboursements spécifiques',
        'Suivi des traitements',
        'Alertes médicales'
      ],
      documents: [
        'Protocole de traitement',
        'Ordonnances',
        'Comptes-rendus médicaux'
      ],
      estimatedProcessingTime: '5 jours ouvrables',
      coveragePercentage: '90% à 100%',
      maximumAmount: 'Sans plafond pour les maladies reconnues'
    },
    optical: {
      id: 'optical',
      title: 'Remboursement optique',
      description: 'Remboursement des lunettes, lentilles et autres équipements optiques sur prescription médicale.',
      features: [
        'Calcul automatique',
        'Plafonds par type de correction',
        'Validation rapide',
        'Historique des remboursements'
      ],
      documents: [
        'Facture optique',
        'Ordonnance',
        'Prescription médicale'
      ],
      estimatedProcessingTime: '3 jours ouvrables',
      coveragePercentage: '50% à 75%',
      maximumAmount: '25 000 DA tous les 2 ans'
    },
    labwork: {
      id: 'labwork',
      title: 'Analyses et radiographies',
      description: 'Suivi et remboursement des examens médicaux, radiographies et analyses de laboratoire.',
      features: [
        'Remboursement en ligne',
        'Pourcentage selon le type d\'examen',
        'Validation médicale',
        'Traçabilité'
      ],
      documents: [
        'Factures',
        'Comptes-rendus',
        'Ordonnances'
      ],
      estimatedProcessingTime: '2 à 5 jours ouvrables',
      coveragePercentage: '60% à 100%',
      maximumAmount: 'Variable selon le type d\'examen'
    },
    practitioners: {
      id: 'practitioners',
      title: 'Contrats médicaux',
      description: 'Accès au réseau de praticiens conventionnés et remboursement des consultations.',
      features: [
        'Gestion des praticiens conventionnés',
        'Tarifs négociés',
        'Annuaire médical',
        'Évaluation des praticiens'
      ],
      documents: [],
      estimatedProcessingTime: 'Immédiat',
      coveragePercentage: '70% à 100%',
      maximumAmount: 'Selon convention'
    }
  };

  return {
    activeTab,
    setActiveTab,
    selectedService,
    setSelectedService,
    serviceDetails,
    showNotAvailableMessage
  };
};

export default useHealthServices;
