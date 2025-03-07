
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const useActions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleHealthAction = async (action: string, serviceId?: string, payload?: any) => {
    setIsLoading(true);
    
    // Simuler un délai réseau
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      switch (action) {
        case 'contact-doctor':
          toast({
            title: "Demande de contact envoyée",
            description: "Un médecin vous contactera dans les plus brefs délais.",
          });
          break;
        
        case 'emergency-numbers':
          toast({
            title: "Numéros d'urgence",
            description: "SAMU: 115, Police: 17, Pompiers: 14, Urgence européen: 112",
          });
          break;
        
        case 'question-submit':
          toast({
            title: "Question envoyée",
            description: "Nous vous répondrons sous 24 à 48 heures.",
          });
          break;
          
        case 'service-access':
          toast({
            title: "Accès au service",
            description: `Vous accédez au service: ${serviceId}`,
          });
          break;
          
        case 'appointment-book':
          toast({
            title: "Rendez-vous",
            description: "Votre demande de rendez-vous a été enregistrée.",
          });
          break;
          
        case 'reimbursement-track':
          toast({
            title: "Suivi de remboursement",
            description: "Votre demande est en cours de traitement.",
          });
          break;
          
        case 'service-request-submit':
          console.log("Form submitted:", { serviceId, payload });
          toast({
            title: "Demande envoyée",
            description: "Votre demande de service a été soumise avec succès. Un conseiller vous contactera prochainement.",
            duration: 5000,
          });
          break;
          
        default:
          toast({
            title: "Action non reconnue",
            description: "Cette fonctionnalité n'est pas encore disponible.",
            variant: "destructive",
          });
      }
    } catch (error) {
      console.error("Error handling health action:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleHealthAction
  };
};

export default useActions;
