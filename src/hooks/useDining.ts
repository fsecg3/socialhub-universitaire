
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export type DiningCategory = 
  | 'cafeterias' 
  | 'restaurants' 
  | 'foodmarket' 
  | 'catering';

export interface DiningDetail {
  id: DiningCategory;
  title: string;
  description: string;
  features: string[];
  details: string[];
  locations: string[];
  price?: string;
  hours?: string;
  dietary?: string[];
}

const useDining = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState<DiningCategory | null>(null);
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const diningDetails: Record<DiningCategory, DiningDetail> = {
    cafeterias: {
      id: 'cafeterias',
      title: 'Cafétérias',
      description: 'Espaces de restauration rapide avec boissons chaudes et froides, collations et sandwichs.',
      features: [
        'Boissons chaudes et fraîches',
        'Sandwichs et pâtisseries',
        'Espaces de travail',
        'WiFi gratuit'
      ],
      details: [
        'Horaires: 7h30 - 18h00',
        'Paiement par carte accepté',
        'Service à emporter disponible'
      ],
      locations: [
        'Bibliothèque centrale',
        'Faculté des sciences',
        'Faculté de médecine',
        'Campus résidentiel'
      ],
      hours: '7h30 - 18h00 du lundi au vendredi',
      dietary: [
        'Options végétariennes',
        'Options sans gluten sur demande'
      ]
    },
    restaurants: {
      id: 'restaurants',
      title: 'Restaurants universitaires',
      description: 'Restaurants proposant des repas complets et équilibrés à tarifs subventionnés.',
      features: [
        'Repas complets (entrée, plat, dessert)',
        'Options végétariennes',
        'Tarifs préférentiels',
        'Menus équilibrés'
      ],
      details: [
        'Horaires: 11h30 - 14h00 / 18h30 - 20h30',
        'Tickets disponibles en ligne',
        'Menus rotatifs hebdomadaires'
      ],
      locations: [
        'Restaurant central du campus',
        'Restaurant de la cité universitaire',
        'Restaurant de l\'école d\'ingénieurs'
      ],
      price: 'À partir de 3.30€ pour un repas complet',
      hours: 'Déjeuner: 11h30 - 14h00 / Dîner: 18h30 - 20h30',
      dietary: [
        'Options végétariennes quotidiennes',
        'Menu équilibré validé par un nutritionniste',
        'Indications des allergènes sur tous les plats'
      ]
    },
    foodmarket: {
      id: 'foodmarket',
      title: 'Épicerie solidaire',
      description: 'Épicerie proposant des produits alimentaires de base à prix réduits pour les étudiants.',
      features: [
        'Produits alimentaires essentiels',
        'Prix accessibles',
        'Produits frais et locaux',
        'Système de points de fidélité'
      ],
      details: [
        'Horaires: 9h00 - 19h00 du lundi au samedi',
        'Inscription nécessaire (critères sociaux)',
        'Livraison possible sur le campus'
      ],
      locations: [
        'Bâtiment des services sociaux',
        'Campus résidentiel Est'
      ],
      price: 'Jusqu\'à 70% de réduction sur le prix du marché',
      hours: '9h00 - 19h00 du lundi au samedi',
      dietary: [
        'Produits frais issus de l\'agriculture locale',
        'Produits de base pour tous régimes alimentaires'
      ]
    },
    catering: {
      id: 'catering',
      title: 'Service traiteur',
      description: 'Service de restauration pour vos événements académiques et associatifs.',
      features: [
        'Buffets pour événements',
        'Options de menus personnalisables',
        'Service sur place',
        'Livraison sur le campus'
      ],
      details: [
        'Réservation 72h à l\'avance',
        'Formules adaptées aux budgets étudiants',
        'Options pour régimes spécifiques'
      ],
      locations: [
        'Livraison sur tous les campus',
        'Salles de réception disponibles'
      ],
      price: 'À partir de 8€ par personne pour un buffet simple',
      hours: 'Service disponible 7j/7 sur réservation',
      dietary: [
        'Menus adaptables à tous régimes (végétarien, halal, sans gluten...)',
        'Options éco-responsables disponibles (vaisselle biodégradable)'
      ]
    }
  };

  return {
    activeTab,
    setActiveTab,
    selectedService,
    setSelectedService,
    diningDetails,
    showNotAvailableMessage
  };
};

export default useDining;
