
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowLeft, FileCheck, Info } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { LoanDetail } from '@/hooks/useLoans';

interface LoanApplicationConfirmationProps {
  loan: LoanDetail;
  formData: any;
  uploadedDocuments: Record<string, boolean>;
  onConfirm: () => void;
  onCancel: () => void;
}

const LoanApplicationConfirmation: React.FC<LoanApplicationConfirmationProps> = ({
  loan,
  formData,
  uploadedDocuments,
  onConfirm,
  onCancel
}) => {
  const uploadedDocumentCount = Object.keys(uploadedDocuments).length;
  const requiredDocumentCount = loan.documents.filter(doc => doc.required).length;
  
  const isReadyToSubmit = uploadedDocumentCount >= requiredDocumentCount;

  return (
    <FadeIn>
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8" 
              onClick={onCancel}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <CardTitle>Confirmez votre demande de prêt</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border rounded-md bg-background">
            <h3 className="font-semibold text-lg mb-2">{loan.title}</h3>
            <p className="text-muted-foreground mb-4">{loan.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Informations personnelles</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between text-sm p-2 border-b">
                    <span className="text-muted-foreground">Nom complet:</span>
                    <span>{formData.fullName}</span>
                  </li>
                  <li className="flex justify-between text-sm p-2 border-b">
                    <span className="text-muted-foreground">Email:</span>
                    <span>{formData.email}</span>
                  </li>
                  <li className="flex justify-between text-sm p-2 border-b">
                    <span className="text-muted-foreground">Téléphone:</span>
                    <span>{formData.phone}</span>
                  </li>
                  <li className="flex justify-between text-sm p-2 border-b">
                    <span className="text-muted-foreground">Adresse:</span>
                    <span>{formData.address}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Détails du prêt</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between text-sm p-2 border-b">
                    <span className="text-muted-foreground">Type de prêt:</span>
                    <span>{loan.title}</span>
                  </li>
                  <li className="flex justify-between text-sm p-2 border-b">
                    <span className="text-muted-foreground">Montant demandé:</span>
                    <span>{formData.loanAmount} DA</span>
                  </li>
                  <li className="flex justify-between text-sm p-2 border-b">
                    <span className="text-muted-foreground">Durée:</span>
                    <span>{formData.loanDuration} mois</span>
                  </li>
                  <li className="flex justify-between text-sm p-2 border-b">
                    <span className="text-muted-foreground">Taux d'intérêt:</span>
                    <span>{loan.interestRate}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <h4 className="font-medium text-sm">Documents téléchargés :</h4>
              {loan.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between text-sm p-2 border-b">
                  <span>{doc.name} {doc.required && <span className="text-xs text-red-500">*</span>}</span>
                  {uploadedDocuments[doc.name] ? (
                    <span className="flex items-center gap-1 text-green-500">
                      <FileCheck size={16} />
                      Téléchargé
                    </span>
                  ) : (
                    <span className="text-muted-foreground">Non téléchargé</span>
                  )}
                </div>
              ))}
            </div>
            
            {!isReadyToSubmit && (
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md text-amber-700 text-sm">
                <p>Veuillez télécharger tous les documents requis (*) avant de confirmer votre demande.</p>
              </div>
            )}
          </div>
          
          <div className="bg-muted/30 p-4 rounded-md">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Info size={16} className="text-primary" />
              Informations importantes :
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                <span>Votre demande sera évaluée dans un délai de {loan.processingTime}.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                <span>Vous recevrez une notification par email à chaque étape du traitement.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                <span>Les documents originaux pourront vous être demandés lors de l'étude de votre dossier.</span>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onCancel}>
            <X size={16} className="mr-1" /> Annuler
          </Button>
          <Button 
            onClick={onConfirm}
            disabled={!isReadyToSubmit}
          >
            <Check size={16} className="mr-1" /> Confirmer la demande
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default LoanApplicationConfirmation;
