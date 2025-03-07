
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, FileText, Upload, Check } from 'lucide-react';
import { HealthServiceCategory, HealthServiceDetail } from '@/hooks/useHealthServices';
import useActions from '@/hooks/useActions';
import FadeIn from '@/components/animations/FadeIn';

interface HealthServiceFormProps {
  serviceId: HealthServiceCategory;
  serviceDetails: HealthServiceDetail;
  onBack: () => void;
}

const HealthServiceForm: React.FC<HealthServiceFormProps> = ({ 
  serviceId, 
  serviceDetails, 
  onBack 
}) => {
  const { handleHealthAction, isLoading } = useActions();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateNeeded: '',
    additionalInfo: '',
  });
  const [uploadedDocuments, setUploadedDocuments] = useState<Record<string, boolean>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDocumentUpload = (documentName: string) => {
    setUploadedDocuments(prev => ({ ...prev, [documentName]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleHealthAction('service-request-submit', serviceId, { formData, uploadedDocuments });
  };

  const allRequiredDocsUploaded = serviceDetails.documents.every(
    doc => !doc.endsWith('*') || uploadedDocuments[doc.replace('*', '')]
  );

  return (
    <FadeIn>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8" 
              onClick={onBack}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <CardTitle>Demande de service: {serviceDetails.title}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form id="health-service-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Nom complet</Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    placeholder="Prénom et nom" 
                    required 
                    value={formData.fullName}
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
                    value={formData.email}
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
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="dateNeeded">Date souhaitée</Label>
                  <Input 
                    id="dateNeeded" 
                    name="dateNeeded" 
                    type="date" 
                    required 
                    value={formData.dateNeeded}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-4">
                {serviceDetails.documents.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium mb-3">Documents requis</h3>
                    <div className="space-y-3 border rounded-lg p-4">
                      {serviceDetails.documents.map((doc, index) => {
                        const docName = doc.endsWith('*') ? doc.replace('*', '') : doc;
                        const isRequired = doc.endsWith('*');
                        
                        return (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{docName}</span>
                              {isRequired && <span className="text-xs text-red-500">*</span>}
                            </div>
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="sm" 
                              className="h-8"
                              onClick={() => handleDocumentUpload(docName)}
                            >
                              {uploadedDocuments[docName] ? (
                                <span className="text-green-500 flex items-center gap-1">
                                  <Check size={16} />
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
                        );
                      })}
                    </div>
                    {serviceDetails.documents.length > 0 && (
                      <p className="text-xs text-muted-foreground mt-2">
                        * Documents obligatoires
                      </p>
                    )}
                  </div>
                )}
                <div>
                  <Label htmlFor="additionalInfo">Informations complémentaires</Label>
                  <Textarea 
                    id="additionalInfo" 
                    name="additionalInfo" 
                    placeholder="Précisez toute information complémentaire utile à votre demande" 
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={onBack}
          >
            Annuler
          </Button>
          <Button 
            type="submit"
            form="health-service-form"
            disabled={
              isLoading || 
              !formData.fullName || 
              !formData.email || 
              !formData.phone || 
              !formData.dateNeeded || 
              !allRequiredDocsUploaded
            }
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
              "Soumettre la demande"
            )}
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default HealthServiceForm;
