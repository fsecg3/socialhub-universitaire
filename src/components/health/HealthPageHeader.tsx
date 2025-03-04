
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';

const HealthPageHeader = () => {
  return (
    <FadeIn>
      <div className="mb-12 text-center">
        <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
          Santé et bien-être
        </span>
        <h1 className="text-4xl font-display font-bold mb-4">Services de Santé</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Accédez à l{"'"}ensemble des services de santé proposés par l{"'"}université pour vous accompagner 
          dans votre parcours personnel et professionnel.
        </p>
      </div>
    </FadeIn>
  );
};

export default HealthPageHeader;
