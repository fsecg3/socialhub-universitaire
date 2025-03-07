
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';
import useActions from '@/hooks/useActions';
import { FileText, Calendar, CircleDollarSign } from 'lucide-react';

const ReimbursementsList = () => {
  const { handleHealthAction, isLoading } = useActions();

  const pendingReimbursements = [
    {
      id: "RMB-2024-0123",
      date: "05 Mai 2024",
      type: "Consultation spécialiste",
      amount: "4500 DA",
      status: "En cours de traitement"
    },
    {
      id: "RMB-2024-0097",
      date: "28 Avril 2024",
      type: "Analyses de laboratoire",
      amount: "7800 DA",
      status: "En attente de validation"
    }
  ];

  return (
    <FadeIn>
      <Card>
        <CardHeader>
          <CardTitle>Mes remboursements</CardTitle>
          <CardDescription>
            Suivez l'état de vos demandes de remboursements de frais médicaux.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {pendingReimbursements.length > 0 ? (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/30">
                    <tr>
                      <th className="text-left font-medium p-3">Référence</th>
                      <th className="text-left font-medium p-3">Date</th>
                      <th className="text-left font-medium p-3">Type</th>
                      <th className="text-left font-medium p-3">Montant</th>
                      <th className="text-left font-medium p-3">Statut</th>
                      <th className="text-left font-medium p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingReimbursements.map((reimbursement, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3">{reimbursement.id}</td>
                        <td className="p-3">{reimbursement.date}</td>
                        <td className="p-3">{reimbursement.type}</td>
                        <td className="p-3">{reimbursement.amount}</td>
                        <td className="p-3">
                          <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                            {reimbursement.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleHealthAction('reimbursement-detail', reimbursement.id)}
                            disabled={isLoading}
                          >
                            Détails
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Vous n'avez aucune demande de remboursement en cours.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => handleHealthAction('reimbursement-history')}
            disabled={isLoading}
          >
            Historique
          </Button>
          <Button 
            onClick={() => handleHealthAction('reimbursement-request')}
            disabled={isLoading}
          >
            Nouvelle demande
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default ReimbursementsList;
