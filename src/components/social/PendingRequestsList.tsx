
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, AlertCircle, CheckCircle, Clock, XCircle, Plus, Calendar, User, RefreshCw, XSquare } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { AidRequest, AidRequestStatus } from '@/hooks/useSocialAids';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PendingRequestsListProps {
  requests: AidRequest[];
  onDetailsClick: (requestId: string) => void;
  onHistoryClick: () => void;
  onNewRequestClick: () => void;
  onCancelClick: (requestId: string) => void;
}

const getStatusBadge = (status: AidRequestStatus) => {
  switch (status) {
    case 'draft':
      return <Badge variant="outline" className="bg-slate-100 text-slate-800">Brouillon</Badge>;
    case 'submitted':
      return <Badge variant="outline" className="bg-blue-100 text-blue-800">Soumise</Badge>;
    case 'reviewing':
      return <Badge variant="outline" className="bg-amber-100 text-amber-800">En revue</Badge>;
    case 'pending_documents':
      return <Badge variant="outline" className="bg-orange-100 text-orange-800">Documents manquants</Badge>;
    case 'approved':
      return <Badge variant="outline" className="bg-green-100 text-green-800">Approuvée</Badge>;
    case 'rejected':
      return <Badge variant="outline" className="bg-red-100 text-red-800">Rejetée</Badge>;
    default:
      return <Badge variant="outline">Inconnue</Badge>;
  }
};

const getStatusIcon = (status: AidRequestStatus) => {
  switch (status) {
    case 'draft':
      return <FileText size={16} className="text-slate-600" />;
    case 'submitted':
      return <Clock size={16} className="text-blue-600" />;
    case 'reviewing':
      return <RefreshCw size={16} className="text-amber-600" />;
    case 'pending_documents':
      return <AlertCircle size={16} className="text-orange-600" />;
    case 'approved':
      return <CheckCircle size={16} className="text-green-600" />;
    case 'rejected':
      return <XCircle size={16} className="text-red-600" />;
    default:
      return <FileText size={16} />;
  }
};

const PendingRequestsList: React.FC<PendingRequestsListProps> = ({ 
  requests,
  onDetailsClick, 
  onHistoryClick, 
  onNewRequestClick,
  onCancelClick
}) => {
  const [expandedRequest, setExpandedRequest] = useState<string | null>(null);

  const toggleRequestDetails = (requestId: string) => {
    setExpandedRequest(expandedRequest === requestId ? null : requestId);
  };

  return (
    <FadeIn>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Mes demandes d{"'"}aides
          </CardTitle>
          <CardDescription>
            Suivez le statut de vos demandes d{"'"}aides financières et sociales.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {requests.length > 0 ? (
            <div className="space-y-6">
              {requests.map((request) => (
                <div key={request.id} className="border border-border/50 rounded-lg overflow-hidden">
                  <div 
                    className="p-4 cursor-pointer hover:bg-secondary/20 transition-colors" 
                    onClick={() => toggleRequestDetails(request.id)}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">{getStatusIcon(request.status)}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{request.aidType.charAt(0).toUpperCase() + request.aidType.slice(1)}</h3>
                            {getStatusBadge(request.status)}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <span>Référence: {request.id}</span>
                            <span>•</span>
                            <span>Soumise le {request.submittedDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 flex items-center gap-2">
                        {request.status !== 'approved' && request.status !== 'rejected' && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" onClick={(e) => {
                                  e.stopPropagation();
                                  onCancelClick(request.id);
                                }}>
                                  <XSquare className="h-4 w-4 text-destructive" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Annuler la demande</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={(e) => {
                            e.stopPropagation();
                            onDetailsClick(request.id);
                          }}
                        >
                          Voir les détails
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            request.status === 'approved' 
                              ? 'bg-green-500' 
                              : request.status === 'rejected' 
                                ? 'bg-red-500' 
                                : 'bg-primary'
                          }`}
                          style={{ width: `${request.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progression</span>
                        <span className="font-medium">{request.progress}%</span>
                      </div>
                    </div>
                  </div>
                  
                  {expandedRequest === request.id && (
                    <div className="p-4 pt-0 border-t border-border/50 mt-4 bg-secondary/5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-primary" />
                            Dates importantes
                          </h4>
                          <ul className="text-sm space-y-2">
                            <li className="flex justify-between">
                              <span className="text-muted-foreground">Soumise le:</span>
                              <span>{request.submittedDate}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-muted-foreground">Dernière mise à jour:</span>
                              <span>{request.lastUpdated}</span>
                            </li>
                            {request.expectedCompletionDate && (
                              <li className="flex justify-between">
                                <span className="text-muted-foreground">Fin de traitement estimée:</span>
                                <span>{request.expectedCompletionDate}</span>
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                            <FileText className="w-4 h-4 text-primary" />
                            Documents
                          </h4>
                          <ul className="text-sm space-y-1">
                            {request.documents.map((doc, idx) => (
                              <li key={idx} className="flex justify-between items-center">
                                <span className="text-muted-foreground">{doc.name}:</span>
                                <Badge 
                                  variant="outline" 
                                  className={
                                    !doc.uploaded 
                                      ? "bg-red-100 text-red-800" 
                                      : doc.validationStatus === 'valid'
                                        ? "bg-green-100 text-green-800"
                                        : doc.validationStatus === 'invalid'
                                          ? "bg-red-100 text-red-800"
                                          : "bg-amber-100 text-amber-800"
                                  }
                                >
                                  {!doc.uploaded 
                                    ? "Non fourni" 
                                    : doc.validationStatus === 'valid'
                                      ? "Validé"
                                      : doc.validationStatus === 'invalid'
                                        ? "Refusé"
                                        : "En attente"
                                  }
                                </Badge>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {request.comments && request.comments.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                            <User className="w-4 h-4 text-primary" />
                            Commentaires du service
                          </h4>
                          <ul className="text-sm space-y-2 bg-white p-3 rounded-md border border-border/50">
                            {request.comments.map((comment, idx) => (
                              <li key={idx} className="pb-2 border-b border-border/30 last:border-0 last:pb-0">
                                {comment}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-border/50 rounded-lg">
              <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">Vous n{"'"}avez aucune demande d{"'"}aide en cours.</p>
              <Button onClick={onNewRequestClick}>Créer une nouvelle demande</Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onHistoryClick} className="gap-2">
            <FileText className="w-4 h-4" />
            Historique
          </Button>
          <Button onClick={onNewRequestClick} className="gap-2">
            <Plus className="w-4 h-4" />
            Nouvelle demande
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default PendingRequestsList;
