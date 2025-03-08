
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { LoanDetail } from '@/hooks/useLoans';

interface LoanApplicationSuccessProps {
  loan: LoanDetail;
  onClose: () => void;
}

const LoanApplicationSuccess: React.FC<LoanApplicationSuccessProps> = ({
  loan,
  onClose
}) => {
  const applicationReference = `LOAN-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const currentDate = new Date().toLocaleDateString('fr-FR');
  const estimatedResponseDate = new Date();
  estimatedResponseDate.setDate(estimatedResponseDate.getDate() + 7);
  
  return (
    <FadeIn>
      <Card className="w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <CheckCircle size={40} />
            </div>
          </div>
          <CardTitle className="text-2xl">Demande soumise avec succès</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border rounded-md bg-background text-center">
            <h3 className="font-semibold text-lg mb-2">{loan.title}</h3>
            <p className="text-muted-foreground">{loan.description}</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Référence :</span>
              <span className="font-medium">{applicationReference}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Date de soumission :</span>
              <span className="font-medium">{currentDate}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Statut :</span>
              <span className="text-blue-600 font-medium">En attente de traitement</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Délai de traitement estimé :</span>
              <span className="font-medium">{loan.processingTime}</span>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-700">
            <Calendar size={20} className="mr-2" />
            <p className="text-sm">Un email contenant tous les détails de votre demande vous sera envoyé prochainement. Vous pouvez suivre l'avancement de votre demande dans l'onglet "Mes demandes".</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={onClose}>
            Retour aux prêts <ArrowRight size={16} className="ml-1" />
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default LoanApplicationSuccess;
