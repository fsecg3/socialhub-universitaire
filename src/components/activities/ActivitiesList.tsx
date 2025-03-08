
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volleyball, Theater, Beaker, Star } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import useActivities, { ActivityCategory } from '@/hooks/useActivities';
import useActions from '@/hooks/useActions';
import ActivityRegistrationForm from './ActivityRegistrationForm';
import ActivityRegistrationConfirmation from './ActivityRegistrationConfirmation';
import ActivityRegistrationSuccess from './ActivityRegistrationSuccess';

interface ActivitiesListProps {
  category?: ActivityCategory;
  onActionClick?: () => void;
}

const ActivitiesList: React.FC<ActivitiesListProps> = ({ category, onActionClick }) => {
  const { 
    showNotAvailableMessage, 
    selectedActivity, 
    setSelectedActivity,
    favoriteActivities,
    toggleFavorite,
    registrationStep,
    uploadedDocuments,
    handleDocumentUpload,
    submitRegistration,
    confirmRegistration,
    cancelRegistration
  } = useActivities();
  const { handleAction, isLoading } = useActions();
  
  const handleActivityAction = (activityTitle: string, actionType: string) => {
    if (onActionClick) {
      onActionClick();
    } else {
      const activity = allActivities.find(a => a.title === activityTitle);
      if (activity) {
        setSelectedActivity(activity);
      } else {
        handleAction(actionType, `${actionType} pour "${activityTitle}"`);
      }
    }
  };

  // Activities with their registration requirements
  const allActivities = [
    {
      id: "sports-events",
      title: "Événements sportifs",
      description: "Participez aux compétitions sportives inter-universitaires et tournois régionaux.",
      icon: Volleyball,
      action: "S'inscrire",
      category: "sports" as ActivityCategory,
      documents: [
        { name: "Certificat médical d'aptitude sportive", required: true },
        { name: "Carte d'étudiant/personnel", required: true },
        { name: "Photo d'identité", required: true }
      ]
    },
    {
      id: "sports-workshops",
      title: "Ateliers sportifs",
      description: "Ateliers d'entraînement et de perfectionnement dans diverses disciplines sportives.",
      icon: Volleyball,
      action: "Voir le programme",
      category: "sports" as ActivityCategory
    },
    {
      id: "cultural-events",
      title: "Événements culturels",
      description: "Ateliers de théâtre, musique, et autres expressions artistiques pour tous les niveaux.",
      icon: Theater,
      action: "Découvrir le programme",
      category: "culture" as ActivityCategory,
      documents: [
        { name: "Formulaire d'inscription", required: true },
        { name: "Justificatif d'affiliation universitaire", required: true }
      ]
    },
    {
      id: "art-exhibitions",
      title: "Expositions artistiques",
      description: "Expositions des œuvres d'art des étudiants et artistes invités.",
      icon: Theater,
      action: "Voir le calendrier",
      category: "culture" as ActivityCategory
    },
    {
      id: "scientific-events",
      title: "Événements scientifiques",
      description: "Conférences, séminaires et ateliers scientifiques dans diverses disciplines académiques.",
      icon: Beaker,
      action: "Consulter le calendrier",
      category: "science" as ActivityCategory,
      documents: [
        { name: "Formulaire de participation", required: true },
        { name: "Résumé de présentation (si applicable)", required: false }
      ]
    },
    {
      id: "innovation-contests",
      title: "Concours d'innovation",
      description: "Compétitions et challenges pour encourager l'innovation et la recherche.",
      icon: Beaker,
      action: "S'inscrire",
      category: "science" as ActivityCategory,
      documents: [
        { name: "Description du projet", required: true },
        { name: "CV du/des participant(s)", required: true },
        { name: "Attestation d'encadrement (si applicable)", required: false }
      ]
    },
  ];

  // Filter activities by category if provided
  const activities = category 
    ? allActivities.filter(activity => activity.category === category)
    : allActivities;

  // Add favorite status to activities
  const activitiesWithFavorites = activities.map(activity => ({
    ...activity,
    isFavorite: favoriteActivities.includes(activity.id)
  }));

  if (selectedActivity) {
    if (registrationStep === 'form') {
      return (
        <ActivityRegistrationForm 
          activityType={selectedActivity.category}
          activityTitle={selectedActivity.title}
          description={selectedActivity.description}
          requiredDocuments={selectedActivity.documents}
          onBackClick={cancelRegistration}
          onSubmit={submitRegistration}
          uploadedDocuments={uploadedDocuments}
          onDocumentUpload={handleDocumentUpload}
        />
      );
    } else if (registrationStep === 'confirmation') {
      return (
        <ActivityRegistrationConfirmation
          activity={selectedActivity}
          uploadedDocuments={uploadedDocuments}
          onConfirm={confirmRegistration}
          onCancel={cancelRegistration}
        />
      );
    } else {
      return (
        <ActivityRegistrationSuccess
          activity={selectedActivity}
          onClose={cancelRegistration}
        />
      );
    }
  }

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activitiesWithFavorites.map((activity, index) => (
          <Card key={`${activity.title}-${index}`} className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full">
            <CardHeader className="p-6">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <activity.icon size={24} />
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(activity.id);
                  }}
                  className="h-8 w-8"
                >
                  <Star 
                    size={18} 
                    className={activity.isFavorite ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
                  />
                </Button>
              </div>
              <CardTitle>{activity.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-base">{activity.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => handleActivityAction(activity.title, activity.action)}
                disabled={isLoading}
              >
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
