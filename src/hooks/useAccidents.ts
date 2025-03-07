
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export type AccidentCategory = 
  | 'workplace' 
  | 'vehicle' 
  | 'property' 
  | 'material';

export interface AccidentDetail {
  id: AccidentCategory;
  title: string;
  description: string;
  features: string[];
  documents: string[];
  estimatedProcessingTime?: string;
  coveragePercentage?: string;
  maximumAmount?: string;
}

const useAccidents = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedAccident, setSelectedAccident] = useState<AccidentCategory | null>(null);
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const accidentDetails: Record<AccidentCategory, AccidentDetail> = {
    workplace: {
      id: 'workplace',
      title: 'Accidents de travail',
      description: 'Déclaration et suivi des accidents survenus dans le cadre professionnel.',
      features: [
        'Déclaration en ligne',
        'Suivi du dossier',
        'Assistance juridique',
        'Remboursement des frais médicaux'
      ],
      documents: [
        'Rapport d\'accident',
        'Certificats médicaux',
        'Témoignages éventuels'
      ],
      estimatedProcessingTime: '5 à 10 jours ouvrables',
      coveragePercentage: 'Jusqu\'à 100%',
      maximumAmount: 'Variable selon la gravité'
    },
    vehicle: {
      id: 'vehicle',
      title: 'Accidents de véhicule',
      description: 'Assistance pour les accidents impliquant un véhicule dans le cadre professionnel.',
      features: [
        'Constat amiable numérique',
        'Expertise à distance',
        'Remboursement des réparations',
        'Véhicule de remplacement'
      ],
      documents: [
        'Constat d\'accident',
        'Photos des dommages',
        'Devis de réparation'
      ],
      estimatedProcessingTime: '7 à 14 jours ouvrables',
      coveragePercentage: '70% à 90%',
      maximumAmount: '300 000 DA'
    },
    property: {
      id: 'property',
      title: 'Dommages aux biens',
      description: 'Déclaration de sinistres et dommages aux biens personnels ou professionnels.',
      features: [
        'Évaluation des dommages',
        'Expertise rapide',
        'Indemnisation adaptée',
        'Suivi personnalisé'
      ],
      documents: [
        'Inventaire des biens endommagés',
        'Photos des dommages',
        'Factures originales d\'achat'
      ],
      estimatedProcessingTime: '10 à 15 jours ouvrables',
      coveragePercentage: '50% à 80%',
      maximumAmount: '200 000 DA'
    },
    material: {
      id: 'material',
      title: 'Dommages matériels',
      description: 'Assistance pour les dommages causés au matériel professionnel.',
      features: [
        'Déclaration simplifiée',
        'Analyse technique',
        'Remplacement du matériel',
        'Assistance technique'
      ],
      documents: [
        'Description détaillée',
        'Photos du matériel endommagé',
        'Estimation du préjudice'
      ],
      estimatedProcessingTime: '3 à 7 jours ouvrables',
      coveragePercentage: '70% à 100%',
      maximumAmount: '150 000 DA'
    }
  };

  return {
    activeTab,
    setActiveTab,
    selectedAccident,
    setSelectedAccident,
    accidentDetails,
    showNotAvailableMessage
  };
};

export default useAccidents;
