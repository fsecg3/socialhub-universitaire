
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home,
  Users,
  UserRound,
  Bookmark,
  ChevronDown,
  ChevronUp,
  MapPin,
  Info,
  ClipboardCheck
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const HousingList = () => {
  const { toast } = useToast();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const housingServices = [
    {
      id: "university",
      title: "Résidences universitaires",
      description: "Logements sur le campus pour les étudiants en formation initiale.",
      icon: Home,
      action: "Déposer une demande",
      features: [
        "Chambres individuelles ou partagées",
        "Accès WiFi gratuit",
        "Espaces communs",
        "Proximité des installations universitaires"
      ],
      details: [
        "Durée: Année académique",
        "Priorité aux boursiers",
        "Services inclus: eau, électricité, chauffage"
      ],
      locations: [
        "Campus Central",
        "Cité Universitaire Est",
        "Résidence Nord",
        "Résidence Sud"
      ]
    },
    {
      id: "family",
      title: "Logements familiaux",
      description: "Appartements pour les enseignants et personnels avec famille.",
      icon: Users,
      action: "Consulter disponibilités",
      features: [
        "F2, F3 ou F4 selon composition familiale",
        "Équipement de base",
        "Jardins communs",
        "Parkings réservés"
      ],
      details: [
        "Durée: Contrat renouvelable",
        "Attribution selon ancienneté",
        "Loyer modéré"
      ],
      locations: [
        "Résidence des Enseignants",
        "Quartier Familial Ouest",
        "Complexe Résidentiel Sud"
      ]
    },
    {
      id: "staff",
      title: "Studios personnel",
      description: "Studios individuels pour le personnel administratif et enseignant célibataire.",
      icon: UserRound,
      action: "Faire une demande",
      features: [
        "Studios de 30 à 45m²",
        "Meublés ou semi-meublés",
        "Cuisine équipée",
        "Accès sécurisé"
      ],
      details: [
        "Durée: Contrat annuel renouvelable",
        "Disponibilité limitée",
        "Entretien inclus"
      ],
      locations: [
        "Résidence du Personnel",
        "Campus Est",
        "Annexe Administrative"
      ]
    },
    {
      id: "temporary",
      title: "Hébergement temporaire",
      description: "Solutions à court terme pour visiteurs académiques et intervenants.",
      icon: Bookmark,
      action: "Réserver",
      features: [
        "Chambres d'hôtes",
        "Accès aux services de restauration",
        "Salles de travail",
        "Wifi haut débit"
      ],
      details: [
        "Durée: 1 jour à 3 mois",
        "Réservation obligatoire",
        "Services hôteliers"
      ],
      locations: [
        "Maison d'hôtes universitaire",
        "Résidence internationale",
        "Centre de conférences"
      ]
    }
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {housingServices.map((service) => (
          <Card 
            key={service.id} 
            className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full flex flex-col"
          >
            <CardHeader className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <service.icon size={24} />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4 flex-1">
              <p className="text-base text-muted-foreground">{service.description}</p>
              
              {/* Toggle section */}
              <Button 
                variant="ghost" 
                className="p-0 h-auto w-full flex justify-between items-center text-sm font-medium text-primary hover:bg-transparent"
                onClick={() => toggleExpand(service.id)}
              >
                <span>Détails du service</span>
                {expandedService === service.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Button>
              
              {/* Expanded content */}
              {expandedService === service.id && (
                <div className="animate-accordion-down pt-2">
                  {service.features.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Caractéristiques</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {service.details.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Informations pratiques</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Info size={14} className="text-primary flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {service.locations.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Emplacements</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.locations.map((location, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <MapPin size={14} className="text-primary flex-shrink-0" />
                            {location}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
              <Button className="w-full" onClick={showNotAvailableMessage}>
                <ClipboardCheck className="mr-2 h-4 w-4" /> 
                {service.action}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
};

export default HousingList;
