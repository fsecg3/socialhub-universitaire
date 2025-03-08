
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { FileIcon, Upload, ArrowLeft } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { LoanDetail } from '@/hooks/useLoans';

interface LoanApplicationFormProps {
  loan: LoanDetail;
  onBackClick: () => void;
  onSubmit: (formData: any) => void;
  uploadedDocuments: Record<string, boolean>;
  onDocumentUpload: (documentName: string) => void;
}

const LoanApplicationForm: React.FC<LoanApplicationFormProps> = ({
  loan,
  onBackClick,
  onSubmit,
  uploadedDocuments,
  onDocumentUpload
}) => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    employmentStatus: '',
    monthlyIncome: '',
    loanAmount: '',
    loanDuration: '',
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

  return (
    <FadeIn>
      <Card className="w-full">
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
              <CardTitle>Demande de {loan.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{loan.description}</p>
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
                <div>
                  <Label htmlFor="employmentStatus">Statut professionnel</Label>
                  <Input 
                    id="employmentStatus" 
                    name="employmentStatus" 
                    placeholder="Ex: Enseignant, Administratif, etc." 
                    required 
                    value={formState.employmentStatus}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="monthlyIncome">Revenu mensuel (DA)</Label>
                  <Input 
                    id="monthlyIncome" 
                    name="monthlyIncome" 
                    type="number" 
                    placeholder="Montant en DA" 
                    required 
                    value={formState.monthlyIncome}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="loanAmount">Montant demandé (DA)</Label>
                  <Input 
                    id="loanAmount" 
                    name="loanAmount" 
                    type="number" 
                    placeholder="Montant en DA" 
                    required 
                    value={formState.loanAmount}
                    onChange={handleInputChange}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Montant maximal: {loan.maxAmount}</p>
                </div>
                <div>
                  <Label htmlFor="loanDuration">Durée souhaitée (mois)</Label>
                  <Input 
                    id="loanDuration" 
                    name="loanDuration" 
                    type="number" 
                    placeholder="Nombre de mois" 
                    required 
                    value={formState.loanDuration}
                    onChange={handleInputChange}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Durée maximale: {loan.maxDuration}</p>
                </div>
                <div>
                  <Label htmlFor="additionalInfo">Informations complémentaires</Label>
                  <Textarea 
                    id="additionalInfo" 
                    name="additionalInfo" 
                    placeholder="Précisez toute information complémentaire relative à votre demande" 
                    rows={3}
                    value={formState.additionalInfo}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Documents requis</h3>
              <div className="space-y-3 border rounded-lg p-4">
                {loan.documents.map((doc, index) => (
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
                ))}
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
                Je certifie l'exactitude des informations fournies et j'accepte les conditions de traitement de ma demande de prêt.
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
            disabled={!formState.agreeToTerms || !Object.keys(uploadedDocuments).some(doc => uploadedDocuments[doc])}
          >
            Soumettre la demande
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default LoanApplicationForm;
