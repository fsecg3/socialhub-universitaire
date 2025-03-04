
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartPulse, Calendar, FileText, HelpCircle, ActivitySquare, Wheelchair, Pill, Microscope, Stethoscope } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const Health = () => {
  const [activeTab, setActiveTab] = useState('services');
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const healthServices = [
    {
      title: "Interventions chirurgicales",
      description: "Prise en charge et remboursement des opérations chirurgicales programmées ou d'urgence.",
      icon: ActivitySquare,
      action: "Demander une prise en charge"
    },
    {
      title: "Aide aux personnes en situation de handicap",
      description: "Soutien personnalisé et aides financières spécifiques pour les personnes en situation de handicap.",
      icon: Wheelchair,
      action: "Consulter les aides disponibles"
    },
    {
      title: "Suivi des maladies chroniques",
      description: "Programme de soutien continu et aide financière adaptée pour les maladies chroniques reconnues.",
      icon: Pill,
      action: "S'inscrire au programme"
    },
    {
      title: "Consultations médicales",
      description: "Accès au réseau de praticiens conventionnés et remboursement des consultations.",
      icon: Stethoscope,
      action: "Trouver un praticien"
    },
    {
      title: "Examens médicaux",
      description: "Suivi et remboursement des examens médicaux, radiographies et analyses de laboratoire.",
      icon: Microscope,
      action: "Soumettre une demande"
    },
  ];

  const upcomingAppointments = [
    {
      date: "15 Juin 2024",
      time: "10:30",
      doctor: "Dr. Bensalem",
      specialty: "Cardiologie",
      location: "Centre Médical Universitaire"
    },
    {
      date: "22 Juin 2024",
      time: "14:00",
      doctor: "Dr. Mansouri",
      specialty: "Ophtalmologie",
      location: "Clinique El Azhar"
    }
  ];

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
    <>
      <Header />
      <main className="min-h-screen bg-secondary/10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12 text-center">
              <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
                Santé et bien-être
              </span>
              <h1 className="text-4xl font-display font-bold mb-4">Services de Santé</h1>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Accédez à l'ensemble des services de santé proposés par l'université pour vous accompagner 
                dans votre parcours personnel et professionnel.
              </p>
            </div>
          </FadeIn>

          <Tabs defaultValue="services" className="space-y-8" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="services" className="flex gap-2 items-center">
                  <HeartPulse className="w-4 h-4" />
                  <span>Services</span>
                </TabsTrigger>
                <TabsTrigger value="appointments" className="flex gap-2 items-center">
                  <Calendar className="w-4 h-4" />
                  <span>Rendez-vous</span>
                </TabsTrigger>
                <TabsTrigger value="reimbursements" className="flex gap-2 items-center">
                  <FileText className="w-4 h-4" />
                  <span>Remboursements</span>
                </TabsTrigger>
                <TabsTrigger value="faq" className="flex gap-2 items-center">
                  <HelpCircle className="w-4 h-4" />
                  <span>FAQ</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="services">
              <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {healthServices.map((service, index) => (
                    <Card key={service.title} className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full">
                      <CardHeader className="p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                          <service.icon size={24} />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button variant="outline" className="w-full" onClick={showNotAvailableMessage}>
                          {service.action}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </FadeIn>
            </TabsContent>

            <TabsContent value="appointments">
              <FadeIn>
                <Card>
                  <CardHeader>
                    <CardTitle>Mes rendez-vous médicaux</CardTitle>
                    <CardDescription>
                      Consultez et gérez vos rendez-vous avec les professionnels de santé conventionnés.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {upcomingAppointments.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingAppointments.map((appointment, index) => (
                          <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg">
                            <div className="flex gap-4 items-center mb-4 md:mb-0">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Calendar size={20} />
                              </div>
                              <div>
                                <h3 className="font-medium">{appointment.doctor}</h3>
                                <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                                <div className="flex items-center gap-2 text-sm mt-1">
                                  <span>{appointment.date}</span>
                                  <span>•</span>
                                  <span>{appointment.time}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 w-full md:w-auto">
                              <Button variant="outline" size="sm" className="flex-1 md:flex-initial" onClick={showNotAvailableMessage}>
                                Modifier
                              </Button>
                              <Button variant="destructive" size="sm" className="flex-1 md:flex-initial" onClick={showNotAvailableMessage}>
                                Annuler
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Vous n'avez aucun rendez-vous à venir.</p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={showNotAvailableMessage}>Historique</Button>
                    <Button onClick={showNotAvailableMessage}>Prendre rendez-vous</Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            </TabsContent>

            <TabsContent value="reimbursements">
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
                                    <Button variant="ghost" size="sm" onClick={showNotAvailableMessage}>
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
                    <Button variant="outline" onClick={showNotAvailableMessage}>Historique</Button>
                    <Button onClick={showNotAvailableMessage}>Nouvelle demande</Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            </TabsContent>

            <TabsContent value="faq">
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
                    <Button variant="outline" className="w-full" onClick={showNotAvailableMessage}>
                      Poser une question
                    </Button>
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
                    Besoin d'assistance médicale immédiate ?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Notre équipe de professionnels de santé est disponible pour vous accompagner 
                    en cas d'urgence ou pour toute question relative à votre santé.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-primary to-blue-500" onClick={showNotAvailableMessage}>
                      Contacter un médecin
                    </Button>
                    <Button variant="outline" onClick={showNotAvailableMessage}>
                      Numéros d'urgence
                    </Button>
                  </div>
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-md flex items-center justify-center">
                  <HeartPulse className="w-12 h-12 md:w-16 md:h-16 text-primary" />
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

export default Health;
