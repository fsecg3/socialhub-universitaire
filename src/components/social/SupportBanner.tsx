
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

interface SupportBannerProps {
  onContactClick: () => void;
  onGuideClick: () => void;
}

const SupportBanner: React.FC<SupportBannerProps> = ({ onContactClick, onGuideClick }) => {
  return (
    <FadeIn className="mt-16">
      <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-display font-bold mb-4">
              Besoin d{"'"}assistance?
            </h2>
            <p className="text-muted-foreground mb-6">
              Notre équipe est disponible pour vous guider dans vos démarches et répondre 
              à toutes vos questions concernant les aides sociales universitaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-primary to-blue-500" onClick={onContactClick}>
                Contacter le service social
              </Button>
              <Button variant="outline" onClick={onGuideClick}>
                Guide des démarches
              </Button>
            </div>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-md flex items-center justify-center">
            <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-primary" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default SupportBanner;
