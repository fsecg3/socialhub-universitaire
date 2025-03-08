
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';

const HousingHeader = () => {
  return (
    <FadeIn>
      <div className="mb-12 text-center">
        <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
          Services de logement
        </span>
        <h1 className="text-4xl font-display font-bold mb-4">Logements universitaires</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Découvrez nos différentes options d'hébergement pour les étudiants, le personnel et les visiteurs académiques.
        </p>
      </div>
    </FadeIn>
  );
};

export default HousingHeader;
