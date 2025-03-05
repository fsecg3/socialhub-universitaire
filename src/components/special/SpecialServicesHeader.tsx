
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';

const SpecialServicesHeader = () => {
  return (
    <FadeIn>
      <div className="mb-12 text-center">
        <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
          Services Spéciaux
        </span>
        <h1 className="text-4xl font-display font-bold mb-4">Services Spéciaux</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Découvrez et accédez aux services spéciaux proposés par le programme des œuvres 
          sociales de l{"'"}université.
        </p>
      </div>
    </FadeIn>
  );
};

export default SpecialServicesHeader;
