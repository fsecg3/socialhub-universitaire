
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowLeft, FileCheck } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { ActivityRegistration } from '@/hooks/useActivities';

interface ActivityRegistrationConfirmationProps {
  activity: ActivityRegistration;
  uploadedDocuments: Record<string, boolean>;
  onConfirm: () => void;
  onCancel: () => void;
}

const ActivityRegistrationConfirmation: React.FC<ActivityRegistrationConfirmationProps> = ({
  activity,
  uploadedDocuments,
  onConfirm,
  onCancel
}) => {
  const uploadedDocumentCount = Object.keys(uploadedDocuments).length;
  const requiredDocumentCount = activity.documents?.filter(doc => doc.required).length || 0;
  
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
            <CardTitle>Confirmer votre inscription</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border rounded-md bg-background">
            <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
            <p className="text-muted-foreground mb-4">{activity.description}</p>
            
            <div className="mt-4 space-y-2">
              <h4 className="font-medium text-sm">Documents téléchargés :</h4>
              {activity.documents?.map((doc, index) => (
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
                <p>Veuillez télécharger tous les documents requis (*) avant de confirmer votre inscription.</p>
              </div>
            )}
          </div>
          
          <div className="bg-muted/30 p-4 rounded-md">
            <h3 className="font-medium mb-2">Informations importantes :</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                <span>Votre inscription sera validée après vérification des documents fournis.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                <span>Vous recevrez une confirmation par email dans les 48 heures.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-0.5" />
                <span>Pour toute question, contactez le service des activités au 023-00-00-00.</span>
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
            <Check size={16} className="mr-1" /> Confirmer l'inscription
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default ActivityRegistrationConfirmation;
