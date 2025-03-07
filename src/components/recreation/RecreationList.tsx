
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Droplets, 
  Mountain, 
  Tent, 
  MapPin,
  FileText,
  ChevronDown,
  ChevronUp,
  Calendar
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const RecreationList = () => {
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

  const recreationServices = [
    {
      id: "thermal",
      title: "Stations thermales",
      description: "Accès à des stations thermales pour des séjours de bien-être et de relaxation.",
      icon: Droplets,
      action: "Réserver un séjour",
      features: [
        "Tarifs préférentiels",
        "Réservation prioritaire",
        "Soins inclus",
        "Transport organisé"
      ],
      details: [
        "Durée: 3 à 7 jours",
        "Périodes: Printemps et automne",
        "Capacité: Selon disponibilité"
      ],
      locations: [
        "Hammam Melouane",
        "Hammam Righa",
        "Hammam Salihine"
      ]
    },
    {
      id: "tourism",
      title: "Sites touristiques",
      description: "Excursions organisées vers les plus beaux sites touristiques du pays.",
      icon: Mountain,
      action: "Découvrir les excursions",
      features: [
        "Guides professionnels",
        "Transport inclus",
        "Repas traditionnels",
        "Visites culturelles"
      ],
      details: [
        "Durée: 1 à 5 jours",
        "Périodes: Toute l'année",
        "Capacité: Groupes de 15-30 personnes"
      ],
      locations: [
        "Tassili n'Ajjer",
        "Casbah d'Alger",
        "Timgad",
        "Tipaza"
      ]
    },
    {
      id: "summer",
      title: "Camps d'été",
      description: "Séjours estivaux en bord de mer pour vous et votre famille.",
      icon: Tent,
      action: "Réserver un camp",
      features: [
        "Logement tout confort",
        "Activités nautiques",
        "Animation pour enfants",
        "Pension complète"
      ],
      details: [
        "Durée: 7 à 14 jours",
        "Périodes: Juin à septembre",
        "Capacité: Familles de 2 à 6 personnes"
      ],
      locations: [
        "Zeralda",
        "Tipaza",
        "Jijel",
        "Béjaïa"
      ]
    },
    {
      id: "family",
      title: "Sorties familiales",
      description: "Journées récréatives pour les familles dans des parcs et sites naturels.",
      icon: MapPin,
      action: "Voir le calendrier",
      features: [
        "Transport collectif",
        "Activités ludiques",
        "Repas champêtre",
        "Encadrement"
      ],
      details: [
        "Durée: 1 journée",
        "Périodes: Weekends et jours fériés",
        "Capacité: Groupes familiaux"
      ],
      locations: [
        "Forêt de Baïnem",
        "Jardin d'Essai du Hamma",
        "Parc de loisirs de Ben Aknoun",
        "Dounia Parc"
      ]
    }
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recreationServices.map((service) => (
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
              <CardDescription className="text-base">{service.description}</CardDescription>
              
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
                            <Calendar size={14} className="text-primary flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {service.locations.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Destinations</h4>
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
                {service.action}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
};

export default RecreationList;
