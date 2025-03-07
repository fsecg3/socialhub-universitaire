
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ActivitySquare, 
  Accessibility, 
  Pill, 
  Eye, 
  Microscope, 
  Stethoscope
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { HealthServiceCategory } from '@/hooks/useHealthServices';

interface ActivityHealthServicesProps {
  onServiceSelect: (serviceId: HealthServiceCategory) => void;
}

const ActivityHealthServices: React.FC<ActivityHealthServicesProps> = ({ onServiceSelect }) => {
  const healthServices = [
    {
      id: "surgical",
      title: "Opérations chirurgicales",
      description: "Prise en charge des opérations chirurgicales liées aux activités sportives ou accidentelles.",
      icon: ActivitySquare,
      action: "Demander une prise en charge"
    },
    {
      id: "disability",
      title: "Aide aux personnes à besoins spécifiques",
      description: "Soutien pour la participation aux activités adaptées et équipements spécialisés.",
      icon: Accessibility,
      action: "Consulter les aides disponibles"
    },
    {
      id: "optical",
      title: "Remboursement optique",
      description: "Remboursement des équipements optiques spécialisés pour les activités sportives et culturelles.",
      icon: Eye,
      action: "Soumettre une demande"
    },
    {
      id: "practitioners",
      title: "Médecins spécialistes du sport",
      description: "Accès au réseau de médecins spécialisés en médecine du sport et traumatologie.",
      icon: Stethoscope,
      action: "Trouver un spécialiste"
    },
  ];

  return (
    <FadeIn>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Services de santé liés aux activités</h2>
        <p className="text-muted-foreground">
          Découvrez nos services de santé spécialement conçus pour soutenir vos activités sportives, 
          culturelles et scientifiques. Ces services vous aident à pratiquer vos passions en toute sécurité.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
            <CardContent className="p-6 pt-0 flex-1">
              <CardDescription className="text-base">{service.description}</CardDescription>
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

export default ActivityHealthServices;
