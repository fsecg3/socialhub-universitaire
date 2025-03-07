
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volleyball, Theater, Beaker } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import useActivities from '@/hooks/useActivities';

interface ActivitiesListProps {
  category?: string;
  onActionClick?: () => void;
}

const ActivitiesList: React.FC<ActivitiesListProps> = ({ category, onActionClick }) => {
  const { showNotAvailableMessage } = useActivities();
  
  const handleAction = () => {
    if (onActionClick) {
      onActionClick();
    } else {
      showNotAvailableMessage();
    }
  };

  // Filtered activities based on category
  const allActivities = [
    {
      title: "Événements sportifs",
      description: "Participez aux compétitions sportives inter-universitaires et tournois régionaux.",
      icon: Volleyball,
      action: "S'inscrire",
      category: "sports"
    },
    {
      title: "Ateliers sportifs",
      description: "Ateliers d'entraînement et de perfectionnement dans diverses disciplines sportives.",
      icon: Volleyball,
      action: "Voir le programme",
      category: "sports"
    },
    {
      title: "Événements culturels",
      description: "Ateliers de théâtre, musique, et autres expressions artistiques pour tous les niveaux.",
      icon: Theater,
      action: "Découvrir le programme",
      category: "culture"
    },
    {
      title: "Expositions artistiques",
      description: "Expositions des œuvres d'art des étudiants et artistes invités.",
      icon: Theater,
      action: "Voir le calendrier",
      category: "culture"
    },
    {
      title: "Événements scientifiques",
      description: "Conférences, séminaires et ateliers scientifiques dans diverses disciplines académiques.",
      icon: Beaker,
      action: "Consulter le calendrier",
      category: "science"
    },
    {
      title: "Concours d'innovation",
      description: "Compétitions et challenges pour encourager l'innovation et la recherche.",
      icon: Beaker,
      action: "S'inscrire",
      category: "science"
    },
  ];

  // Filter activities by category if provided
  const activities = category 
    ? allActivities.filter(activity => activity.category === category)
    : allActivities;

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <Card key={`${activity.title}-${index}`} className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full">
            <CardHeader className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <activity.icon size={24} />
              </div>
              <CardTitle>{activity.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-base">{activity.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="outline" className="w-full" onClick={handleAction}>
                {activity.action}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
};

export default ActivitiesList;
