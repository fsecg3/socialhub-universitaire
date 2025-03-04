
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';

type PendingRequestType = {
  id: string;
  type: string;
  submitDate: string;
  status: string;
  progress: number;
};

interface PendingRequestsListProps {
  onDetailsClick: () => void;
  onHistoryClick: () => void;
  onNewRequestClick: () => void;
}

const PendingRequestsList: React.FC<PendingRequestsListProps> = ({ 
  onDetailsClick, 
  onHistoryClick, 
  onNewRequestClick 
}) => {
  const pendingRequests: PendingRequestType[] = [
    {
      id: "AID-2024-0045",
      type: "Allocation de naissance",
      submitDate: "03 Juin 2024",
      status: "En cours de traitement",
      progress: 60
    },
    {
      id: "AID-2024-0032",
      type: "Allocation scolaire",
      submitDate: "25 Mai 2024",
      status: "En attente de documents",
      progress: 30
    }
  ];

  return (
    <FadeIn>
      <Card>
        <CardHeader>
          <CardTitle>Mes demandes d{"'"}aides</CardTitle>
          <CardDescription>
            Suivez le statut de vos demandes d{"'"}aides financières et sociales.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {pendingRequests.length > 0 ? (
            <div className="space-y-6">
              {pendingRequests.map((request) => (
                <div key={request.id} className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="font-medium">{request.type}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Référence: {request.id}</span>
                        <span>•</span>
                        <span>Soumise le {request.submitDate}</span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                        {request.status}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${request.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Progression</span>
                      <span className="font-medium">{request.progress}%</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" onClick={onDetailsClick}>
                      Voir les détails
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Vous n{"'"}avez aucune demande d{"'"}aide en cours.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onHistoryClick}>Historique</Button>
          <Button onClick={onNewRequestClick}>Nouvelle demande</Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default PendingRequestsList;
export type { PendingRequestType };
