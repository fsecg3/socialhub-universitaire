
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Types d'actions disponibles dans l'application
export type ActionType = 
  | 'contact-doctor' 
  | 'emergency-numbers' 
  | 'appointment-booking'
  | 'appointment-modification'
  | 'appointment-cancellation'
  | 'appointment-history'
  | 'reimbursement-request'
  | 'reimbursement-detail'
  | 'reimbursement-history'
  | 'question-submit'
  | 'service-access';

// Résultats possibles d'une action
export type ActionResult = {
  success: boolean;
  message: string;
  data?: any;
};

const useActions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [lastActionResult, setLastActionResult] = useState<ActionResult | null>(null);
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  // Simule le traitement d'une action médicale avec un résultat
  const handleHealthAction = (actionType: ActionType, actionDetails?: string) => {
    setIsLoading(true);
    
    // Délai simulé pour le traitement
    const processingTime = Math.floor(Math.random() * 1000) + 500; // Entre 500ms et 1500ms
    
    setTimeout(() => {
      let result: ActionResult;
      
      // Logique spécifique à chaque type d'action
      switch(actionType) {
        case 'contact-doctor':
          result = {
            success: true,
            message: "Un médecin vous contactera dans les prochaines 30 minutes",
            data: {
              referenceId: `MED-${Date.now()}`,
              estimatedResponseTime: "30 minutes",
              priority: "Normale"
            }
          };
          break;
          
        case 'emergency-numbers':
          result = {
            success: true,
            message: "Voici les numéros d'urgence",
            data: {
              samu: "14",
              police: "17",
              pompiers: "14",
              urgencesMédicales: "115",
              centreDeSanté: "0561234567"
            }
          };
          break;
          
        case 'appointment-booking':
          result = {
            success: true,
            message: "Votre demande de rendez-vous a été enregistrée",
            data: {
              appointmentId: `APT-${Date.now()}`,
              status: "En attente de confirmation"
            }
          };
          break;
          
        case 'appointment-modification':
          result = {
            success: true,
            message: "Votre demande de modification a été prise en compte",
            data: {
              appointmentId: actionDetails?.split(" ").pop() || `APT-${Date.now()}`,
              status: "En cours de traitement"
            }
          };
          break;
          
        case 'appointment-cancellation':
          result = {
            success: true,
            message: "Votre rendez-vous a été annulé avec succès",
            data: {
              appointmentId: actionDetails?.split(" ").pop() || `APT-${Date.now()}`,
              status: "Annulé",
              refundPolicy: "Aucun frais d'annulation ne sera appliqué"
            }
          };
          break;
          
        case 'appointment-history':
          result = {
            success: true,
            message: "Historique de vos rendez-vous",
            data: {
              totalAppointments: 5,
              completedAppointments: 3,
              cancelledAppointments: 1,
              pendingAppointments: 1
            }
          };
          break;
          
        case 'reimbursement-request':
          result = {
            success: true,
            message: "Votre demande de remboursement a été enregistrée",
            data: {
              referenceId: `RMB-${Date.now()}`,
              submissionDate: new Date().toLocaleDateString('fr-FR'),
              status: "Soumise",
              estimatedProcessingTime: "7 jours ouvrables"
            }
          };
          break;
          
        case 'reimbursement-detail':
          result = {
            success: true,
            message: `Détails du remboursement ${actionDetails}`,
            data: {
              referenceId: actionDetails || `RMB-${Date.now()}`,
              submissionDate: new Date().toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' }),
              amount: `${Math.floor(Math.random() * 10000) + 1000} DA`,
              status: "En cours de traitement",
              documents: ["Facture.pdf", "Ordonnance.pdf"],
              comments: "Traitement en cours par l'équipe financière"
            }
          };
          break;
          
        case 'reimbursement-history':
          result = {
            success: true,
            message: "Historique des remboursements",
            data: {
              totalRequests: 8,
              approvedRequests: 5,
              pendingRequests: 2,
              rejectedRequests: 1,
              totalReimbursed: `${Math.floor(Math.random() * 50000) + 10000} DA`
            }
          };
          break;
          
        case 'question-submit':
          result = {
            success: true,
            message: "Votre question a été enregistrée",
            data: {
              ticketId: `FAQ-${Date.now()}`,
              estimatedResponseTime: "24-48 heures",
              category: "Général"
            }
          };
          break;
          
        case 'service-access':
          result = {
            success: true,
            message: `Accès au service ${actionDetails}`,
            data: {
              serviceId: actionDetails,
              status: "Ouvert",
              availableSlots: Math.floor(Math.random() * 10) + 1
            }
          };
          break;
          
        default:
          result = {
            success: true,
            message: actionDetails || "Action traitée avec succès",
            data: {
              timestamp: new Date().toISOString()
            }
          };
      }
      
      // Mettre à jour l'état et afficher le toast
      setLastActionResult(result);
      setIsLoading(false);
      
      toast({
        title: result.success ? "Action réussie" : "Action échouée",
        description: result.message,
        duration: 5000,
      });
    }, processingTime);
  };

  const handleAction = (actionType: string, customMessage?: string) => {
    setIsLoading(true);
    
    // Simuler une action avec un délai
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: customMessage || "Action effectuée",
        description: `L'action ${actionType} a été traitée avec succès.`,
        duration: 3000,
      });
    }, 1000);
  };

  return {
    isLoading,
    lastActionResult,
    showNotAvailableMessage,
    handleAction,
    handleHealthAction
  };
};

export default useActions;
