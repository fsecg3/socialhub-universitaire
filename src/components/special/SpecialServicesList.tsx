
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Umbrella, Plane, Tent, MapPin } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

interface SpecialServicesListProps {
  onActionClick: () => void;
}

const SpecialServicesList: React.FC<SpecialServicesListProps> = ({ onActionClick }) => {
  const specialServices = [
    {
      title: "Accidents et dommages",
      description: "Aide et soutien financier pour les accidents professionnels et personnels.",
      icon: Umbrella,
      action: "Demander assistance"
    },
    {
      title: "Soutien pour le pèlerinage (Omra)",
      description: "Aide financière et logistique pour faciliter le voyage de pèlerinage.",
      icon: Plane,
      action: "Consulter les options"
    },
    {
      title: "Gestion des camps d'été",
      description: "Organisation de séjours estivaux pour les enfants du personnel universitaire.",
      icon: Tent,
      action: "S'inscrire aux activités"
    },
    {
      title: "Gestion des sites touristiques",
      description: "Accès privilégié aux sites touristiques conventionnés avec réductions.",
      icon: MapPin,
      action: "Explorer les destinations"
    },
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialServices.map((service, index) => (
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
              <Button variant="outline" className="w-full" onClick={onActionClick}>
                {service.action}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
};

export default SpecialServicesList;
