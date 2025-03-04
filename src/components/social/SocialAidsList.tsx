
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PartyPopper, Baby, Gift, GraduationCap, School } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

type SocialAidType = {
  title: string;
  description: string;
  icon: React.ElementType;
  eligibility: string;
  documents: string[];
  amount: string;
};

interface SocialAidsListProps {
  onActionClick: () => void;
}

const SocialAidsList: React.FC<SocialAidsListProps> = ({ onActionClick }) => {
  const socialAids: SocialAidType[] = [
    {
      title: "Allocation de mariage",
      description: "Aide financière accordée aux personnels de l'université à l'occasion de leur mariage.",
      icon: PartyPopper,
      eligibility: "Personnel universitaire et enseignants en activité",
      documents: ["Acte de mariage", "Demande écrite", "Attestation de travail", "RIB bancaire"],
      amount: "50 000 DA"
    },
    {
      title: "Allocation de naissance",
      description: "Prime attribuée aux parents à l'occasion de la naissance d'un enfant.",
      icon: Baby,
      eligibility: "Personnel universitaire et enseignants en activité",
      documents: ["Acte de naissance", "Livret de famille", "Attestation de travail", "RIB bancaire"],
      amount: "30 000 DA"
    },
    {
      title: "Allocation de circoncision",
      description: "Aide financière accordée à l'occasion de la circoncision d'un enfant.",
      icon: Gift,
      eligibility: "Personnel universitaire et enseignants avec enfants de sexe masculin",
      documents: ["Certificat médical de circoncision", "Livret de famille", "Attestation de travail", "RIB bancaire"],
      amount: "25 000 DA"
    },
    {
      title: "Allocation de départ à la retraite",
      description: "Prime versée aux personnels lors de leur départ à la retraite.",
      icon: GraduationCap,
      eligibility: "Personnel universitaire et enseignants partant à la retraite",
      documents: ["Décision de mise à la retraite", "Attestation de travail", "Relevé des années de service", "RIB bancaire"],
      amount: "Variable selon l'ancienneté"
    },
    {
      title: "Allocation scolaire",
      description: "Aide financière pour les frais de scolarité des enfants du personnel universitaire.",
      icon: School,
      eligibility: "Personnel universitaire et enseignants avec enfants scolarisés",
      documents: ["Certificat de scolarité", "Livret de famille", "Attestation de travail", "RIB bancaire"],
      amount: "15 000 DA par enfant scolarisé"
    }
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialAids.map((aid) => (
          <Card key={aid.title} className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full">
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
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full" onClick={onActionClick}>
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
export type { SocialAidType };
