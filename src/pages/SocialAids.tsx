
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Baby, School, PartyPopper, Gift } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const SocialAids = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const socialAids = [
    {
      title: "Allocation de mariage",
      description: "Aide financière accordée aux personnels de l'université à l'occasion de leur mariage.",
      icon: PartyPopper,
      eligibility: "Personnel universitaire et enseignants en activité",
      documents: ["Acte de mariage", "Demande écrite", "Attestation de travail", "RIB bancaire"],
      amount: "50 000 DA"
    },
    {
      title: "Allocation de naissance",
      description: "Prime attribuée aux parents à l'occasion de la naissance d'un enfant.",
      icon: Baby,
      eligibility: "Personnel universitaire et enseignants en activité",
      documents: ["Acte de naissance", "Livret de famille", "Attestation de travail", "RIB bancaire"],
      amount: "30 000 DA"
    },
    {
      title: "Allocation de circoncision",
      description: "Aide financière accordée à l'occasion de la circoncision d'un enfant.",
      icon: Gift,
      eligibility: "Personnel universitaire et enseignants avec enfants de sexe masculin",
      documents: ["Certificat médical de circoncision", "Livret de famille", "Attestation de travail", "RIB bancaire"],
      amount: "25 000 DA"
    },
    {
      title: "Allocation de départ à la retraite",
      description: "Prime versée aux personnels lors de leur départ à la retraite.",
      icon: GraduationCap,
      eligibility: "Personnel universitaire et enseignants partant à la retraite",
      documents: ["Décision de mise à la retraite", "Attestation de travail", "Relevé des années de service", "RIB bancaire"],
      amount: "Variable selon l'ancienneté"
    },
    {
      title: "Allocation scolaire",
      description: "Aide financière pour les frais de scolarité des enfants du personnel universitaire.",
      icon: School,
      eligibility: "Personnel universitaire et enseignants avec enfants scolarisés",
      documents: ["Certificat de scolarité", "Livret de famille", "Attestation de travail", "RIB bancaire"],
      amount: "15 000 DA par enfant scolarisé"
    }
  ];

  const pendingRequests = [
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
    <>
      <Header />
      <main className="min-h-screen bg-secondary/10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12 text-center">
              <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
                Aides sociales
              </span>
              <h1 className="text-4xl font-display font-bold mb-4">Aides Financières et Sociales</h1>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Découvrez et accédez aux différentes aides financières proposées par le programme des œuvres 
                sociales de l{"'"}université.
              </p>
            </div>
          </FadeIn>

          <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-2xl">
                <TabsTrigger value="overview" className="flex gap-2 items-center">
                  <GraduationCap className="w-4 h-4" />
                  <span>Aperçu</span>
                </TabsTrigger>
                <TabsTrigger value="myrequests" className="flex gap-2 items-center">
                  <Gift className="w-4 h-4" />
                  <span>Mes demandes</span>
                </TabsTrigger>
                <TabsTrigger value="newrequest" className="flex gap-2 items-center">
                  <Baby className="w-4 h-4" />
                  <span>Nouvelle demande</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview">
              <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {socialAids.map((aid) => (
                    <Card key={aid.title} className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full">
                      <CardHeader className="p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                          <aid.icon size={24} />
                        </div>
                        <CardTitle>{aid.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 space-y-4">
                        <CardDescription className="text-base">{aid.description}</CardDescription>
                        <div>
                          <h4 className="text-sm font-medium mb-1">Montant</h4>
                          <p className="text-lg font-semibold text-primary">{aid.amount}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1">Éligibilité</h4>
                          <p className="text-sm text-muted-foreground">{aid.eligibility}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full" onClick={showNotAvailableMessage}>
                          Faire une demande
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </FadeIn>
            </TabsContent>

            <TabsContent value="myrequests">
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
                              <Button variant="outline" size="sm" onClick={showNotAvailableMessage}>
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
                    <Button variant="outline" onClick={showNotAvailableMessage}>Historique</Button>
                    <Button onClick={showNotAvailableMessage}>Nouvelle demande</Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            </TabsContent>

            <TabsContent value="newrequest">
              <FadeIn>
                <Card>
                  <CardHeader>
                    <CardTitle>Nouvelle demande d{"'"}aide</CardTitle>
                    <CardDescription>
                      Sélectionnez le type d{"'"}aide pour lequel vous souhaitez faire une demande.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {socialAids.map((aid) => (
                        <div 
                          key={aid.title} 
                          className="border rounded-lg p-4 cursor-pointer hover:bg-secondary/20 transition-colors"
                          onClick={showNotAvailableMessage}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <aid.icon size={24} />
                            </div>
                            <div>
                              <h3 className="font-medium">{aid.title}</h3>
                              <p className="text-sm text-muted-foreground">Montant: {aid.amount}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Veuillez préparer tous les documents requis avant de soumettre votre demande.
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </FadeIn>
            </TabsContent>
          </Tabs>

          <FadeIn className="mt-16">
            <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-display font-bold mb-4">
                    Besoin d{"'"}assistance?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Notre équipe est disponible pour vous guider dans vos démarches et répondre 
                    à toutes vos questions concernant les aides sociales universitaires.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-primary to-blue-500" onClick={showNotAvailableMessage}>
                      Contacter le service social
                    </Button>
                    <Button variant="outline" onClick={showNotAvailableMessage}>
                      Guide des démarches
                    </Button>
                  </div>
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-md flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SocialAids;
