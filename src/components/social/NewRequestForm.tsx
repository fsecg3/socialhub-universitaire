
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import FadeIn from '@/components/animations/FadeIn';
import { SocialAidType } from './SocialAidsList';

interface NewRequestFormProps {
  onAidClick: () => void;
}

const NewRequestForm: React.FC<NewRequestFormProps> = ({ onAidClick }) => {
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
      <Card>
        <CardHeader>
          <CardTitle>Nouvelle demande d{"'"}aide</CardTitle>
          <CardDescription>
            Sélectionnez le type d{"'"}aide pour lequel vous souhaitez faire une demande.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialAids.map((aid) => (
              <div 
                key={aid.title} 
                className="border rounded-lg p-4 cursor-pointer hover:bg-secondary/20 transition-colors"
                onClick={onAidClick}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <aid.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">{aid.title}</h3>
                    <p className="text-sm text-muted-foreground">Montant: {aid.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              Veuillez préparer tous les documents requis avant de soumettre votre demande.
            </p>
          </div>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default NewRequestForm;

// Import the icons at the top level to avoid redeclaring them
import { PartyPopper, Baby, Gift, GraduationCap, School } from 'lucide-react';
