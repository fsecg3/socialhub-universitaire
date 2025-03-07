
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Plane, 
  Home, 
  FileCheck, 
  CircleDollarSign,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const PilgrimageList = () => {
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

  const pilgrimageServices = [
    {
      id: "financial",
      title: "Aide financière",
      description: "Soutien financier pour réaliser votre pèlerinage avec des conditions avantageuses.",
      icon: CircleDollarSign,
      action: "Demander une aide",
      features: [
        "Subvention partielle",
        "Avance remboursable",
        "Facilités de paiement",
        "Validation simplifiée"
      ],
      documents: [
        "Attestation d'emploi",
        "Justificatif d'inscription",
        "Demande formelle",
        "RIB bancaire"
      ]
    },
    {
      id: "accommodation",
      title: "Hébergement préférentiel",
      description: "Accès à des offres d'hébergement négociées et à tarifs préférentiels.",
      icon: Home,
      action: "Consulter les offres",
      features: [
        "Hôtels sélectionnés",
        "Proximité des lieux saints",
        "Services adaptés",
        "Réservation prioritaire"
      ],
      documents: [
        "Formulaire de réservation",
        "Copie du passeport",
        "Justificatif de paiement"
      ]
    },
    {
      id: "assistance",
      title: "Assistance administrative",
      description: "Accompagnement pour toutes les démarches administratives liées au pèlerinage.",
      icon: FileCheck,
      action: "Demander assistance",
      features: [
        "Préparation du dossier",
        "Obtention de visa",
        "Documentation complète",
        "Conseils personnalisés"
      ],
      documents: [
        "Passeport valide",
        "Photos d'identité",
        "Formulaires spécifiques"
      ]
    },
    {
      id: "travel",
      title: "Organisation du voyage",
      description: "Service complet pour l'organisation et la planification de votre voyage.",
      icon: Plane,
      action: "Explorer les voyages",
      features: [
        "Réservation de vols",
        "Transferts aéroport",
        "Planning personnalisé",
        "Guide accompagnateur"
      ],
      documents: [
        "Passeport valide",
        "Attestation médicale",
        "Formulaire d'inscription"
      ]
    }
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pilgrimageServices.map((service) => (
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
                  
                  {service.documents.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Documents requis</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.documents.map((doc, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <FileText size={14} className="text-primary flex-shrink-0" />
                            {doc}
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

export default PilgrimageList;
