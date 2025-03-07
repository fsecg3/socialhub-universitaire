
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ActivitySquare, 
  Accessibility, 
  Pill, 
  Eye, 
  Microscope, 
  Stethoscope,
  ChevronDown,
  ChevronUp,
  FileText,
  AlertCircle
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import useActions from '@/hooks/useActions';
import { HealthServiceCategory } from '@/hooks/useHealthServices';

interface HealthServicesListProps {
  onServiceSelect: (serviceId: HealthServiceCategory) => void;
}

const HealthServicesList: React.FC<HealthServicesListProps> = ({ onServiceSelect }) => {
  const { handleHealthAction, isLoading } = useActions();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const healthServices = [
    {
      id: "surgical",
      title: "Opérations chirurgicales",
      description: "Prise en charge et remboursement des opérations chirurgicales programmées ou d'urgence.",
      icon: ActivitySquare,
      action: "Demander une prise en charge",
      features: [
        "Pré-demande en ligne",
        "Estimation du remboursement",
        "Suivi médical",
        "Gestion des urgences"
      ],
      documents: [
        "Devis médical",
        "Rapport chirurgical",
        "Factures"
      ]
    },
    {
      id: "disability",
      title: "Aide aux personnes à besoins spécifiques",
      description: "Soutien personnalisé et aides financières spécifiques pour les personnes en situation de handicap.",
      icon: Accessibility,
      action: "Consulter les aides disponibles",
      features: [
        "Évaluation personnalisée",
        "Montants adaptés au handicap",
        "Accompagnement social",
        "Suivi personnalisé"
      ],
      documents: [
        "Carte d'invalidité",
        "Certificat médical détaillé"
      ]
    },
    {
      id: "chronic",
      title: "Suivi des maladies chroniques",
      description: "Programme de soutien continu et aide financière adaptée pour les maladies chroniques reconnues.",
      icon: Pill,
      action: "S'inscrire au programme",
      features: [
        "Dossier médical numérique",
        "Remboursements spécifiques",
        "Suivi des traitements",
        "Alertes médicales"
      ],
      documents: [
        "Protocole de traitement",
        "Ordonnances",
        "Comptes-rendus médicaux"
      ]
    },
    {
      id: "optical",
      title: "Remboursement optique",
      description: "Remboursement des lunettes, lentilles et autres équipements optiques sur prescription médicale.",
      icon: Eye,
      action: "Soumettre une demande",
      features: [
        "Calcul automatique",
        "Plafonds par type de correction",
        "Validation rapide",
        "Historique des remboursements"
      ],
      documents: [
        "Facture optique",
        "Ordonnance",
        "Prescription médicale"
      ]
    },
    {
      id: "labwork",
      title: "Analyses et radiographies",
      description: "Suivi et remboursement des examens médicaux, radiographies et analyses de laboratoire.",
      icon: Microscope,
      action: "Soumettre une demande",
      features: [
        "Remboursement en ligne",
        "Pourcentage selon le type d'examen",
        "Validation médicale",
        "Traçabilité"
      ],
      documents: [
        "Factures",
        "Comptes-rendus",
        "Ordonnances"
      ]
    },
    {
      id: "practitioners",
      title: "Contrats médicaux",
      description: "Accès au réseau de praticiens conventionnés et remboursement des consultations.",
      icon: Stethoscope,
      action: "Trouver un praticien",
      features: [
        "Gestion des praticiens conventionnés",
        "Tarifs négociés",
        "Annuaire médical",
        "Évaluation des praticiens"
      ],
      documents: []
    },
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthServices.map((service) => (
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
                  
                  {service.documents.length === 0 && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <AlertCircle size={14} className="text-primary flex-shrink-0" />
                      <span>Aucun document requis pour cette démarche.</span>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
              <Button 
                className="w-full" 
                onClick={() => onServiceSelect(service.id as HealthServiceCategory)}
              >
                {service.action}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
};

export default HealthServicesList;
