
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  Car, 
  Home, 
  Backpack, 
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const AccidentsList = () => {
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

  const accidentServices = [
    {
      id: "workplace",
      title: "Accidents de travail",
      description: "Déclaration et suivi des accidents survenus dans le cadre professionnel.",
      icon: AlertTriangle,
      action: "Déclarer un accident",
      features: [
        "Déclaration en ligne",
        "Suivi du dossier",
        "Assistance juridique",
        "Remboursement des frais médicaux"
      ],
      documents: [
        "Rapport d'accident",
        "Certificats médicaux",
        "Témoignages éventuels"
      ]
    },
    {
      id: "vehicle",
      title: "Accidents de véhicule",
      description: "Assistance pour les accidents impliquant un véhicule dans le cadre professionnel.",
      icon: Car,
      action: "Signaler un accident",
      features: [
        "Constat amiable numérique",
        "Expertise à distance",
        "Remboursement des réparations",
        "Véhicule de remplacement"
      ],
      documents: [
        "Constat d'accident",
        "Photos des dommages",
        "Devis de réparation"
      ]
    },
    {
      id: "property",
      title: "Dommages aux biens",
      description: "Déclaration de sinistres et dommages aux biens personnels ou professionnels.",
      icon: Home,
      action: "Déclarer un sinistre",
      features: [
        "Évaluation des dommages",
        "Expertise rapide",
        "Indemnisation adaptée",
        "Suivi personnalisé"
      ],
      documents: [
        "Inventaire des biens endommagés",
        "Photos des dommages",
        "Factures originales d'achat"
      ]
    },
    {
      id: "material",
      title: "Dommages matériels",
      description: "Assistance pour les dommages causés au matériel professionnel.",
      icon: Backpack,
      action: "Signaler un dommage",
      features: [
        "Déclaration simplifiée",
        "Analyse technique",
        "Remplacement du matériel",
        "Assistance technique"
      ],
      documents: [
        "Description détaillée",
        "Photos du matériel endommagé",
        "Estimation du préjudice"
      ]
    }
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accidentServices.map((service) => (
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

export default AccidentsList;
