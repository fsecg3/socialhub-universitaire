
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';
import useActions from '@/hooks/useActions';
import { MessageSquare } from 'lucide-react';

const HealthFAQ = () => {
  const { handleHealthAction, isLoading } = useActions();

  const faqs = [
    {
      question: "Comment soumettre une demande de remboursement médical ?",
      answer: "Pour soumettre une demande de remboursement, connectez-vous à votre espace personnel, accédez à la section 'Services de santé' puis 'Demande de remboursement'. Remplissez le formulaire en ligne et téléchargez les pièces justificatives requises (ordonnance, factures acquittées). Vous pouvez suivre l'état de votre demande dans la section 'Mes remboursements'."
    },
    {
      question: "Quels sont les délais de remboursement des frais médicaux ?",
      answer: "Le délai de remboursement est généralement de 7 à 15 jours ouvrables après validation de votre demande. Ce délai peut varier selon la complexité du dossier et la période de l'année. Vous recevrez une notification par email et SMS dès que votre remboursement sera effectué."
    },
    {
      question: "Comment prendre rendez-vous avec un médecin conventionné ?",
      answer: "Vous pouvez prendre rendez-vous directement depuis votre espace personnel dans la section 'Services de santé' puis 'Prendre rendez-vous'. Consultez la liste des praticiens conventionnés, choisissez le spécialiste souhaité et sélectionnez un créneau disponible. Une confirmation vous sera envoyée par email et SMS."
    },
    {
      question: "Quels sont les taux de remboursement des différents actes médicaux ?",
      answer: "Les taux de remboursement varient selon la nature des actes médicaux : consultations généralistes (80%), consultations spécialistes (70%), analyses de laboratoire (60-90%), imagerie médicale (50-100%), hospitalisation (jusqu'à 90%). Pour connaître le taux exact applicable à votre situation, consultez la grille des remboursements disponible dans la section 'Documentation'."
    }
  ];

  return (
    <FadeIn>
      <Card>
        <CardHeader>
          <CardTitle>Questions fréquentes</CardTitle>
          <CardDescription>
            Retrouvez les réponses aux questions les plus fréquemment posées concernant les services de santé.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full gap-2" 
            onClick={() => handleHealthAction('question-submit')}
            disabled={isLoading}
          >
            <MessageSquare className="h-4 w-4" />
            Poser une question
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default HealthFAQ;
