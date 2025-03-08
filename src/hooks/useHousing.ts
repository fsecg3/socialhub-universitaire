
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export type HousingCategory = 
  | 'university' 
  | 'family' 
  | 'staff' 
  | 'temporary';

export interface HousingDetail {
  id: HousingCategory;
  title: string;
  description: string;
  features: string[];
  details: string[];
  locations: string[];
  price?: string;
  availability?: string;
  requirements?: string[];
}

const useHousing = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState<HousingCategory | null>(null);
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const housingDetails: Record<HousingCategory, HousingDetail> = {
    university: {
      id: 'university',
      title: 'Résidences universitaires',
      description: 'Logements sur le campus pour les étudiants en formation initiale.',
      features: [
        'Chambres individuelles ou partagées',
        'Accès WiFi gratuit',
        'Espaces communs',
        'Proximité des installations universitaires'
      ],
      details: [
        'Durée: Année académique',
        'Priorité aux boursiers',
        'Services inclus: eau, électricité, chauffage'
      ],
      locations: [
        'Campus Central',
        'Cité Universitaire Est',
        'Résidence Nord',
        'Résidence Sud'
      ],
      price: 'À partir de 2000 DA/mois',
      availability: 'Selon critères sociaux et distance',
      requirements: [
        'Attestation de scolarité',
        'Justificatif de bourse (si applicable)',
        'Justificatif de domicile des parents'
      ]
    },
    family: {
      id: 'family',
      title: 'Logements familiaux',
      description: 'Appartements pour les enseignants et personnels avec famille.',
      features: [
        'F2, F3 ou F4 selon composition familiale',
        'Équipement de base',
        'Jardins communs',
        'Parkings réservés'
      ],
      details: [
        'Durée: Contrat renouvelable',
        'Attribution selon ancienneté',
        'Loyer modéré'
      ],
      locations: [
        'Résidence des Enseignants',
        'Quartier Familial Ouest',
        'Complexe Résidentiel Sud'
      ],
      price: '4000 à 7000 DA/mois selon superficie',
      availability: 'Liste d\'attente selon critères',
      requirements: [
        'Contrat de travail permanent',
        'Livret de famille',
        'Attestation de non-propriété',
        'Fiche de paie récente'
      ]
    },
    staff: {
      id: 'staff',
      title: 'Studios personnel',
      description: 'Studios individuels pour le personnel administratif et enseignant célibataire.',
      features: [
        'Studios de 30 à 45m²',
        'Meublés ou semi-meublés',
        'Cuisine équipée',
        'Accès sécurisé'
      ],
      details: [
        'Durée: Contrat annuel renouvelable',
        'Disponibilité limitée',
        'Entretien inclus'
      ],
      locations: [
        'Résidence du Personnel',
        'Campus Est',
        'Annexe Administrative'
      ],
      price: '3000 à 5000 DA/mois',
      availability: 'Attribution par commission',
      requirements: [
        'Justificatif de statut',
        'Attestation de célibat',
        'Fiche de paie',
        'Demande motivée'
      ]
    },
    temporary: {
      id: 'temporary',
      title: 'Hébergement temporaire',
      description: 'Solutions à court terme pour visiteurs académiques et intervenants.',
      features: [
        'Chambres d\'hôtes',
        'Accès aux services de restauration',
        'Salles de travail',
        'Wifi haut débit'
      ],
      details: [
        'Durée: 1 jour à 3 mois',
        'Réservation obligatoire',
        'Services hôteliers'
      ],
      locations: [
        'Maison d\'hôtes universitaire',
        'Résidence internationale',
        'Centre de conférences'
      ],
      price: 'À partir de 1500 DA/nuit',
      availability: 'Selon calendrier des événements',
      requirements: [
        'Lettre d\'invitation',
        'Dates précises du séjour',
        'Motif professionnel'
      ]
    }
  };

  return {
    activeTab,
    setActiveTab,
    selectedService,
    setSelectedService,
    housingDetails,
    showNotAvailableMessage
  };
};

export default useHousing;
