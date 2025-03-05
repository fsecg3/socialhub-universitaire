
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PartyPopper, Baby, Gift, GraduationCap, School, Heart } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { AidType, AidCategory } from '@/hooks/useSocialAids';

interface SocialAidsListProps {
  onActionClick: (category: AidCategory) => void;
}

const SocialAidsList: React.FC<SocialAidsListProps> = ({ onActionClick }) => {
  const socialAids: AidType[] = [
    {
      id: "aid-marriage",
      title: "Allocation de mariage",
      description: "Aide financière accordée aux personnels de l'université à l'occasion de leur mariage.",
      icon: PartyPopper,
      eligibility: "Personnel universitaire et enseignants en activité",
      documents: [
        { name: "Certificat de mariage", required: true },
        { name: "Copies des cartes d'identité", required: true },
        { name: "Justificatif d'emploi", required: true },
        { name: "Demande écrite", required: true },
        { name: "RIB bancaire", required: true }
      ],
      amount: "50 000 DA",
      category: "marriage"
    },
    {
      id: "aid-birth",
      title: "Allocation de naissance",
      description: "Prime attribuée aux parents à l'occasion de la naissance d'un enfant.",
      icon: Baby,
      eligibility: "Personnel universitaire et enseignants en activité",
      documents: [
        { name: "Certificat de naissance", required: true },
        { name: "Livret de famille", required: true },
        { name: "Preuve d'affiliation", required: true },
        { name: "Attestation de travail", required: true },
        { name: "RIB bancaire", required: true }
      ],
      amount: "30 000 DA",
      category: "birth"
    },
    {
      id: "aid-circumcision",
      title: "Allocation de circoncision",
      description: "Aide financière accordée à l'occasion de la circoncision d'un enfant.",
      icon: Gift,
      eligibility: "Personnel universitaire et enseignants avec enfants de sexe masculin",
      documents: [
        { name: "Certificat médical de circoncision", required: true },
        { name: "Acte de naissance de l'enfant", required: true },
        { name: "Livret de famille", required: true },
        { name: "Attestation de travail", required: true },
        { name: "RIB bancaire", required: true }
      ],
      amount: "25 000 DA",
      category: "circumcision"
    },
    {
      id: "aid-retirement",
      title: "Allocation de départ à la retraite",
      description: "Prime versée aux personnels lors de leur départ à la retraite.",
      icon: GraduationCap,
      eligibility: "Personnel universitaire et enseignants partant à la retraite",
      documents: [
        { name: "Décision de mise à la retraite", required: true },
        { name: "Relevé de carrière", required: true },
        { name: "Attestation de travail", required: true },
        { name: "Pièce d'identité", required: true },
        { name: "RIB bancaire", required: true }
      ],
      amount: "Variable selon l'ancienneté",
      category: "retirement"
    },
    {
      id: "aid-education",
      title: "Allocation scolaire",
      description: "Aide financière pour les frais de scolarité des enfants du personnel universitaire.",
      icon: School,
      eligibility: "Personnel universitaire et enseignants avec enfants scolarisés",
      documents: [
        { name: "Certificat de scolarité", required: true },
        { name: "Bulletins scolaires", required: true },
        { name: "Justificatif de revenus familiaux", required: true },
        { name: "Livret de famille", required: true },
        { name: "RIB bancaire", required: true }
      ],
      amount: "15 000 DA par enfant scolarisé",
      category: "education"
    },
    {
      id: "aid-funeral",
      title: "Allocation funéraire",
      description: "Aide financière accordée aux familles lors du décès d'un proche.",
      icon: Heart,
      eligibility: "Personnel universitaire et familles en cas de décès d'un proche",
      documents: [
        { name: "Acte de décès", required: true },
        { name: "Justificatif de lien familial", required: true },
        { name: "Attestation de travail", required: true },
        { name: "RIB bancaire", required: true }
      ],
      amount: "40 000 DA",
      category: "funeral"
    }
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialAids.map((aid) => (
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
