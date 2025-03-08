
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { FileIcon, Upload, ArrowLeft } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import useActions from '@/hooks/useActions';

interface ActivityRegistrationFormProps {
  activityType: string;
  activityTitle: string;
  description: string;
  onBackClick: () => void;
  requiredDocuments?: Array<{name: string, required: boolean}>;
}

const ActivityRegistrationForm: React.FC<ActivityRegistrationFormProps> = ({ 
  activityType,
  activityTitle,
  description,
  onBackClick,
  requiredDocuments = []
}) => {
  const { handleAction, isLoading } = useActions();
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    studentId: '',
    additionalInfo: '',
    agreeToTerms: false
  });
  
  const [uploadedDocuments, setUploadedDocuments] = useState<Record<string, boolean>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormState(prev => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAction('activity-registration', `Inscription à ${activityTitle}`);
    onBackClick();
  };

  const simulateFileUpload = (documentName: string) => {
    setUploadedDocuments(prev => ({ ...prev, [documentName]: true }));
  };

  const isFormComplete = () => {
    if (!formState.agreeToTerms || !formState.fullName || !formState.email || !formState.phone) {
      return false;
    }
    
    // Check if all required documents are uploaded
    if (requiredDocuments.length > 0) {
      const requiredDocsNotUploaded = requiredDocuments
        .filter(doc => doc.required)
        .some(doc => !uploadedDocuments[doc.name]);
        
      if (requiredDocsNotUploaded) return false;
    }
    
    return true;
  };

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
              <CardDescription>
                {description}
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
                  <Label htmlFor="studentId">Numéro d'étudiant ou d'employé</Label>
                  <Input 
                    id="studentId" 
                    name="studentId" 
                    placeholder="Votre numéro d'identification" 
                    value={formState.studentId}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {requiredDocuments.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Documents requis</h3>
                  <div className="space-y-3 border rounded-lg p-4">
                    {requiredDocuments.map((doc, index) => (
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
                    ))}
                  </div>
                </div>
              )}
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
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={formState.agreeToTerms}
                onCheckedChange={handleCheckboxChange}
                required
              />
              <Label htmlFor="terms" className="text-sm leading-none pt-0.5">
                Je certifie l{"'"}exactitude des informations fournies et j{"'"}accepte les conditions de participation aux activités.
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
            disabled={!isFormComplete() || isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Traitement en cours...
              </span>
            ) : (
              "Soumettre l'inscription"
            )}
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default ActivityRegistrationForm;
