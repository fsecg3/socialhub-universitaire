
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';

const PilgrimageHeader = () => {
  return (
    <FadeIn>
      <div className="mb-12 text-center">
        <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
          Services religieux
        </span>
        <h1 className="text-4xl font-display font-bold mb-4">Pèlerinage (Omra)</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Accompagnement et soutien pour la préparation et l{"'"}organisation de votre pèlerinage.
        </p>
      </div>
    </FadeIn>
  );
};

export default PilgrimageHeader;
