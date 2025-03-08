
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { FileIcon, Upload, ArrowLeft, Calendar, MapPin, UserIcon, Phone, Mail } from 'lucide-react';
import { ActivityCategory } from '@/hooks/useActivities';
import FadeIn from '@/components/animations/FadeIn';

interface ActivityRegistrationFormProps {
  activityType: ActivityCategory;
  activityTitle: string;
  description: string;
  requiredDocuments?: Array<{name: string, required: boolean}>;
  onBackClick: () => void;
  onSubmit: (formData: any) => void;
  uploadedDocuments: Record<string, boolean>;
  onDocumentUpload: (documentName: string) => void;
}

const ActivityRegistrationForm: React.FC<ActivityRegistrationFormProps> = ({
  activityType,
  activityTitle,
  description,
  requiredDocuments = [],
  onBackClick,
  onSubmit,
  uploadedDocuments,
  onDocumentUpload
}) => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    studentId: '',
    address: '',
    additionalInfo: '',
    agreeToTerms: false
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

  // Calculate if all required documents are uploaded
  const requiredDocumentsUploaded = requiredDocuments
    .filter(doc => doc.required)
    .every(doc => uploadedDocuments[doc.name]);

  // Check if form is valid
  const isFormValid = 
    formState.fullName.trim() !== '' && 
    formState.email.trim() !== '' && 
    formState.phone.trim() !== '' && 
    formState.agreeToTerms && 
    requiredDocumentsUploaded;

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
              <CardTitle>Inscription à {activityTitle}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-1">
                    <UserIcon className="h-4 w-4" />
                    Nom complet
                  </Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    placeholder="Prénom et nom" 
                    required 
                    value={formState.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
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
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    Téléphone
                  </Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="0X XX XX XX XX" 
                    required 
                    value={formState.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="birthDate" className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Date de naissance
                  </Label>
                  <Input 
                    id="birthDate" 
                    name="birthDate" 
                    type="date" 
                    value={formState.birthDate}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="studentId">Numéro d'étudiant / personnel</Label>
                  <Input 
                    id="studentId" 
                    name="studentId" 
                    placeholder="Votre identifiant universitaire" 
                    value={formState.studentId}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Adresse
                  </Label>
                  <Input 
                    id="address" 
                    name="address" 
                    placeholder="Votre adresse complète" 
                    value={formState.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Documents requis</h3>
                <div className="space-y-3 border rounded-lg p-4">
                  {requiredDocuments.length > 0 ? (
                    requiredDocuments.map((doc, index) => (
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
                          onClick={() => onDocumentUpload(doc.name)}
                        >
                          {uploadedDocuments[doc.name] ? (
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
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">Aucun document requis pour cette activité.</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Informations complémentaires</Label>
                  <Textarea 
                    id="additionalInfo" 
                    name="additionalInfo" 
                    placeholder="Précisez toute information utile (expérience préalable, besoins particuliers, etc.)" 
                    rows={4}
                    value={formState.additionalInfo}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-700 border border-blue-100">
                  <p>Les activités {activityType} nécessitent généralement une bonne condition physique et le respect des règles de sécurité.</p>
                  <p className="mt-1">Pour toute question, contactez le service des activités universitaires.</p>
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
                Je certifie l{"'"}exactitude des informations fournies et j{"'"}accepte les conditions de participation aux activités universitaires.
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
            disabled={!isFormValid}
          >
            Soumettre l'inscription
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default ActivityRegistrationForm;
