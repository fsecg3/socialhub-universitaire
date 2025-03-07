
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export type RecreationCategory = 
  | 'thermal' 
  | 'tourism' 
  | 'summer' 
  | 'family';

export interface RecreationDetail {
  id: RecreationCategory;
  title: string;
  description: string;
  features: string[];
  details: string[];
  locations: string[];
  price?: string;
  season?: string;
  capacity?: string;
}

const useRecreation = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState<RecreationCategory | null>(null);
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const recreationDetails: Record<RecreationCategory, RecreationDetail> = {
    thermal: {
      id: 'thermal',
      title: 'Stations thermales',
      description: 'Accès à des stations thermales pour des séjours de bien-être et de relaxation.',
      features: [
        'Tarifs préférentiels',
        'Réservation prioritaire',
        'Soins inclus',
        'Transport organisé'
      ],
      details: [
        'Durée: 3 à 7 jours',
        'Périodes: Printemps et automne',
        'Capacité: Selon disponibilité'
      ],
      locations: [
        'Hammam Melouane',
        'Hammam Righa',
        'Hammam Salihine'
      ],
      price: '30% de réduction sur les tarifs standards',
      season: 'Mars à mai et septembre à novembre',
      capacity: 'Variable selon les établissements'
    },
    tourism: {
      id: 'tourism',
      title: 'Sites touristiques',
      description: 'Excursions organisées vers les plus beaux sites touristiques du pays.',
      features: [
        'Guides professionnels',
        'Transport inclus',
        'Repas traditionnels',
        'Visites culturelles'
      ],
      details: [
        'Durée: 1 à 5 jours',
        'Périodes: Toute l\'année',
        'Capacité: Groupes de 15-30 personnes'
      ],
      locations: [
        'Tassili n\'Ajjer',
        'Casbah d\'Alger',
        'Timgad',
        'Tipaza'
      ],
      price: 'À partir de 5000 DA par personne',
      season: 'Programmation annuelle avec tarifs spéciaux hors saison',
      capacity: '15 à 30 personnes par groupe'
    },
    summer: {
      id: 'summer',
      title: 'Camps d\'été',
      description: 'Séjours estivaux en bord de mer pour vous et votre famille.',
      features: [
        'Logement tout confort',
        'Activités nautiques',
        'Animation pour enfants',
        'Pension complète'
      ],
      details: [
        'Durée: 7 à 14 jours',
        'Périodes: Juin à septembre',
        'Capacité: Familles de 2 à 6 personnes'
      ],
      locations: [
        'Zeralda',
        'Tipaza',
        'Jijel',
        'Béjaïa'
      ],
      price: 'Subvention de 40% pour les employés',
      season: 'Juin à septembre, réservation 3 mois à l\'avance',
      capacity: 'Hébergement pour familles jusqu\'à 6 personnes'
    },
    family: {
      id: 'family',
      title: 'Sorties familiales',
      description: 'Journées récréatives pour les familles dans des parcs et sites naturels.',
      features: [
        'Transport collectif',
        'Activités ludiques',
        'Repas champêtre',
        'Encadrement'
      ],
      details: [
        'Durée: 1 journée',
        'Périodes: Weekends et jours fériés',
        'Capacité: Groupes familiaux'
      ],
      locations: [
        'Forêt de Baïnem',
        'Jardin d\'Essai du Hamma',
        'Parc de loisirs de Ben Aknoun',
        'Dounia Parc'
      ],
      price: '1000 DA par adulte, 500 DA par enfant',
      season: 'Weekends et jours fériés',
      capacity: 'Jusqu\'à 100 personnes par sortie'
    }
  };

  return {
    activeTab,
    setActiveTab,
    selectedService,
    setSelectedService,
    recreationDetails,
    showNotAvailableMessage
  };
};

export default useRecreation;
