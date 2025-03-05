
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PartyPopper, Baby, Gift, GraduationCap, School, Heart } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { AidType, AidCategory } from '@/hooks/useSocialAids';

interface SocialAidsListProps {
  onActionClick: (category: AidCategory) => void;
  aids: AidType[]; // Add the aids prop to the interface
}

const SocialAidsList: React.FC<SocialAidsListProps> = ({ onActionClick, aids }) => {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aids.map((aid) => (
          <Card key={aid.id} className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full">
            <CardHeader className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <aid.icon size={24} />
              </div>
              <CardTitle>{aid.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <CardDescription className="text-base">{aid.description}</CardDescription>
              <div>
                <h4 className="text-sm font-medium mb-1">Montant</h4>
                <p className="text-lg font-semibold text-primary">{aid.amount}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Éligibilité</h4>
                <p className="text-sm text-muted-foreground">{aid.eligibility}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Documents requis</h4>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  {aid.documents.slice(0, 3).map((doc, index) => (
                    <li key={index}>{doc.name}</li>
                  ))}
                  {aid.documents.length > 3 && (
                    <li className="text-primary cursor-pointer">+ {aid.documents.length - 3} autres documents</li>
                  )}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full" onClick={() => onActionClick(aid.category)}>
                Faire une demande
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
};

export default SocialAidsList;
