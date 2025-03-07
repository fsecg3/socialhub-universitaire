
import React from 'react';
import { Button } from '@/components/ui/button';
import { HeartPulse, Phone } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import useActions from '@/hooks/useActions';

const EmergencyContact = () => {
  const { handleHealthAction, isLoading } = useActions();

  return (
    <FadeIn className="mt-16">
      <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-display font-bold mb-4">
              Besoin d{"'"}assistance médicale immédiate ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Notre équipe de professionnels de santé est disponible pour vous accompagner 
              en cas d{"'"}urgence ou pour toute question relative à votre santé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-primary to-blue-500 gap-2" 
                onClick={() => handleHealthAction('contact-doctor')}
                disabled={isLoading}
              >
                <Phone className="h-4 w-4" />
                Contacter un médecin
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleHealthAction('emergency-numbers')}
                disabled={isLoading}
              >
                Numéros d{"'"}urgence
              </Button>
            </div>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-md flex items-center justify-center">
            <HeartPulse className="w-12 h-12 md:w-16 md:h-16 text-primary" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default EmergencyContact;
