
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { PartyPopper, Baby, Gift, GraduationCap, School, Heart, FileIcon, Upload, ArrowLeft } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { AidType, AidCategory } from '@/hooks/useSocialAids';

interface NewRequestFormProps {
  onAidClick: (category: AidCategory) => void;
  selectedAidCategory: AidCategory | null;
  onBackClick: () => void;
  onSubmit: (formData: any) => void;
  isSubmitting: boolean;
}

const NewRequestForm: React.FC<NewRequestFormProps> = ({ 
  onAidClick, 
  selectedAidCategory,
  onBackClick,
  onSubmit,
  isSubmitting
}) => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    additionalInfo: '',
    agreeToTerms: false,
    documentsUploaded: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormState(prev => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  const simulateFileUpload = (documentName: string) => {
    if (!formState.documentsUploaded.includes(documentName)) {
      setFormState(prev => ({
        ...prev,
        documentsUploaded: [...prev.documentsUploaded, documentName]
      }));
    }
  };

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

  const selectedAid = selectedAidCategory 
    ? socialAids.find(aid => aid.category === selectedAidCategory)
    : null;

  if (!selectedAidCategory) {
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
                  key={aid.id} 
                  className="border rounded-lg p-4 cursor-pointer hover:bg-secondary/20 transition-colors"
                  onClick={() => onAidClick(aid.category)}
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
  }

  return (
    <FadeIn>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8" 
              onClick={onBackClick}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <CardTitle>Demande d{"'"}allocation {selectedAid?.title.split(" ").slice(1).join(" ")}</CardTitle>
              <CardDescription>
                {selectedAid?.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Nom complet</Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    placeholder="Prénom et nom" 
                    required 
                    value={formState.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="votre@email.com" 
                    required 
                    value={formState.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="0X XX XX XX XX" 
                    required 
                    value={formState.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Adresse</Label>
                  <Input 
                    id="address" 
                    name="address" 
                    placeholder="Votre adresse complète" 
                    required 
                    value={formState.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Documents requis</h3>
                <div className="space-y-3 border rounded-lg p-4">
                  {selectedAid?.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{doc.name}</span>
                        {doc.required && <span className="text-xs text-red-500">*</span>}
                      </div>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        className="h-8"
                        onClick={() => simulateFileUpload(doc.name)}
                      >
                        {formState.documentsUploaded.includes(doc.name) ? (
                          <span className="text-green-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            Téléchargé
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Upload className="h-4 w-4" />
                            Télécharger
                          </span>
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
                <div>
                  <Label htmlFor="additionalInfo">Informations complémentaires</Label>
                  <Textarea 
                    id="additionalInfo" 
                    name="additionalInfo" 
                    placeholder="Précisez toute information complémentaire utile à votre demande" 
                    rows={4}
                    value={formState.additionalInfo}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={formState.agreeToTerms}
                onCheckedChange={handleCheckboxChange}
                required
              />
              <Label htmlFor="terms" className="text-sm leading-none pt-0.5">
                Je certifie l{"'"}exactitude des informations fournies et j{"'"}accepte les conditions de traitement des demandes d{"'"}aides sociales.
              </Label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={onBackClick}
          >
            Annuler
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!formState.agreeToTerms || isSubmitting || formState.documentsUploaded.length === 0}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Traitement en cours...
              </span>
            ) : (
              "Soumettre la demande"
            )}
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default NewRequestForm;
