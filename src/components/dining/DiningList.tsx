
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Coffee, 
  Utensils, 
  Store, 
  ChefHat,
  FileText,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const DiningList = () => {
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

  const diningServices = [
    {
      id: "cafeterias",
      title: "Cafétérias",
      description: "Espaces de restauration rapide avec boissons chaudes et froides, collations et sandwichs.",
      icon: Coffee,
      action: "Voir le menu",
      features: [
        "Boissons chaudes et fraîches",
        "Sandwichs et pâtisseries",
        "Espaces de travail",
        "WiFi gratuit"
      ],
      details: [
        "Horaires: 7h30 - 18h00",
        "Paiement par carte accepté",
        "Service à emporter disponible"
      ],
      locations: [
        "Bibliothèque centrale",
        "Faculté des sciences",
        "Faculté de médecine",
        "Campus résidentiel"
      ]
    },
    {
      id: "restaurants",
      title: "Restaurants universitaires",
      description: "Restaurants proposant des repas complets et équilibrés à tarifs subventionnés.",
      icon: Utensils,
      action: "Consulter les menus",
      features: [
        "Repas complets (entrée, plat, dessert)",
        "Options végétariennes",
        "Tarifs préférentiels",
        "Menus équilibrés"
      ],
      details: [
        "Horaires: 11h30 - 14h00 / 18h30 - 20h30",
        "Tickets disponibles en ligne",
        "Menus rotatifs hebdomadaires"
      ],
      locations: [
        "Restaurant central du campus",
        "Restaurant de la cité universitaire",
        "Restaurant de l'école d'ingénieurs"
      ]
    },
    {
      id: "foodmarket",
      title: "Épicerie solidaire",
      description: "Épicerie proposant des produits alimentaires de base à prix réduits pour les étudiants.",
      icon: Store,
      action: "Voir les produits",
      features: [
        "Produits alimentaires essentiels",
        "Prix accessibles",
        "Produits frais et locaux",
        "Système de points de fidélité"
      ],
      details: [
        "Horaires: 9h00 - 19h00 du lundi au samedi",
        "Inscription nécessaire (critères sociaux)",
        "Livraison possible sur le campus"
      ],
      locations: [
        "Bâtiment des services sociaux",
        "Campus résidentiel Est"
      ]
    },
    {
      id: "catering",
      title: "Service traiteur",
      description: "Service de restauration pour vos événements académiques et associatifs.",
      icon: ChefHat,
      action: "Demander un devis",
      features: [
        "Buffets pour événements",
        "Options de menus personnalisables",
        "Service sur place",
        "Livraison sur le campus"
      ],
      details: [
        "Réservation 72h à l'avance",
        "Formules adaptées aux budgets étudiants",
        "Options pour régimes spécifiques"
      ],
      locations: [
        "Livraison sur tous les campus",
        "Salles de réception disponibles"
      ]
    }
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {diningServices.map((service) => (
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
                            <Clock size={14} className="text-primary flex-shrink-0" />
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
                {service.action}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
};

export default DiningList;
