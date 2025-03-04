
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ActivitySquare, Accessibility, Pill, Microscope, Stethoscope } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const HealthServicesList = () => {
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const healthServices = [
    {
      title: "Interventions chirurgicales",
      description: "Prise en charge et remboursement des opérations chirurgicales programmées ou d'urgence.",
      icon: ActivitySquare,
      action: "Demander une prise en charge"
    },
    {
      title: "Aide aux personnes en situation de handicap",
      description: "Soutien personnalisé et aides financières spécifiques pour les personnes en situation de handicap.",
      icon: Accessibility,
      action: "Consulter les aides disponibles"
    },
    {
      title: "Suivi des maladies chroniques",
      description: "Programme de soutien continu et aide financière adaptée pour les maladies chroniques reconnues.",
      icon: Pill,
      action: "S'inscrire au programme"
    },
    {
      title: "Consultations médicales",
      description: "Accès au réseau de praticiens conventionnés et remboursement des consultations.",
      icon: Stethoscope,
      action: "Trouver un praticien"
    },
    {
      title: "Examens médicaux",
      description: "Suivi et remboursement des examens médicaux, radiographies et analyses de laboratoire.",
      icon: Microscope,
      action: "Soumettre une demande"
    },
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthServices.map((service, index) => (
          <Card key={service.title} className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full">
            <CardHeader className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <service.icon size={24} />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="outline" className="w-full" onClick={showNotAvailableMessage}>
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
