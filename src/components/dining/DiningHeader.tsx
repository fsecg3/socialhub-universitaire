
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';

const DiningHeader = () => {
  return (
    <FadeIn>
      <div className="mb-12 text-center">
        <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
          Services de restauration
        </span>
        <h1 className="text-4xl font-display font-bold mb-4">Restauration et Cafétéria</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Découvrez nos différentes options de restauration et services associés pour votre confort au quotidien.
        </p>
      </div>
    </FadeIn>
  );
};

export default DiningHeader;
