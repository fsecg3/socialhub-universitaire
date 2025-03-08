
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { ActivityRegistration } from '@/hooks/useActivities';

interface ActivityRegistrationSuccessProps {
  activity: ActivityRegistration;
  onClose: () => void;
}

const ActivityRegistrationSuccess: React.FC<ActivityRegistrationSuccessProps> = ({
  activity,
  onClose
}) => {
  const registrationReference = `REG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const currentDate = new Date().toLocaleDateString('fr-FR');
  
  return (
    <FadeIn>
      <Card className="w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <CheckCircle size={40} />
            </div>
          </div>
          <CardTitle className="text-2xl">Inscription réussie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border rounded-md bg-background text-center">
            <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
            <p className="text-muted-foreground">{activity.description}</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Référence :</span>
              <span className="font-medium">{registrationReference}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Date d'inscription :</span>
              <span className="font-medium">{currentDate}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Statut :</span>
              <span className="text-green-600 font-medium">Confirmé</span>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-700">
            <Calendar size={20} className="mr-2" />
            <p className="text-sm">Un email contenant tous les détails de votre inscription vous sera envoyé prochainement.</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={onClose}>
            Retour aux activités <ArrowRight size={16} className="ml-1" />
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default ActivityRegistrationSuccess;
