
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';

const RecreationHeader = () => {
  return (
    <FadeIn>
      <div className="mb-12 text-center">
        <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
          Loisirs et découvertes
        </span>
        <h1 className="text-4xl font-display font-bold mb-4">Activités Touristiques et Récréatives</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Découvrez notre sélection d{"'"}activités touristiques, de loisirs et de bien-être pour vous et votre famille.
        </p>
      </div>
    </FadeIn>
  );
};

export default RecreationHeader;
