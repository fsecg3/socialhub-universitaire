
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export type PilgrimageCategory = 
  | 'financial' 
  | 'accommodation' 
  | 'assistance' 
  | 'travel';

export interface PilgrimageDetail {
  id: PilgrimageCategory;
  title: string;
  description: string;
  features: string[];
  documents: string[];
  estimatedProcessingTime?: string;
  cost?: string;
  season?: string;
}

const usePilgrimage = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState<PilgrimageCategory | null>(null);
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const pilgrimageDetails: Record<PilgrimageCategory, PilgrimageDetail> = {
    financial: {
      id: 'financial',
      title: 'Aide financière',
      description: 'Soutien financier pour réaliser votre pèlerinage avec des conditions avantageuses.',
      features: [
        'Subvention partielle',
        'Avance remboursable',
        'Facilités de paiement',
        'Validation simplifiée'
      ],
      documents: [
        'Attestation d\'emploi',
        'Justificatif d\'inscription',
        'Demande formelle',
        'RIB bancaire'
      ],
      estimatedProcessingTime: '15 à 30 jours',
      cost: 'Subvention jusqu\'à 30% des frais'
    },
    accommodation: {
      id: 'accommodation',
      title: 'Hébergement préférentiel',
      description: 'Accès à des offres d\'hébergement négociées et à tarifs préférentiels.',
      features: [
        'Hôtels sélectionnés',
        'Proximité des lieux saints',
        'Services adaptés',
        'Réservation prioritaire'
      ],
      documents: [
        'Formulaire de réservation',
        'Copie du passeport',
        'Justificatif de paiement'
      ],
      estimatedProcessingTime: '7 à 14 jours',
      cost: 'Réduction de 15% à 25% sur les tarifs standards'
    },
    assistance: {
      id: 'assistance',
      title: 'Assistance administrative',
      description: 'Accompagnement pour toutes les démarches administratives liées au pèlerinage.',
      features: [
        'Préparation du dossier',
        'Obtention de visa',
        'Documentation complète',
        'Conseils personnalisés'
      ],
      documents: [
        'Passeport valide',
        'Photos d\'identité',
        'Formulaires spécifiques'
      ],
      estimatedProcessingTime: '10 à 20 jours',
      cost: 'Service gratuit pour les employés'
    },
    travel: {
      id: 'travel',
      title: 'Organisation du voyage',
      description: 'Service complet pour l\'organisation et la planification de votre voyage.',
      features: [
        'Réservation de vols',
        'Transferts aéroport',
        'Planning personnalisé',
        'Guide accompagnateur'
      ],
      documents: [
        'Passeport valide',
        'Attestation médicale',
        'Formulaire d\'inscription'
      ],
      estimatedProcessingTime: '20 à 30 jours',
      cost: 'Réduction de 10% sur le forfait complet',
      season: 'Disponible toute l\'année, recommandé hors haute saison'
    }
  };

  return {
    activeTab,
    setActiveTab,
    selectedService,
    setSelectedService,
    pilgrimageDetails,
    showNotAvailableMessage
  };
};

export default usePilgrimage;
