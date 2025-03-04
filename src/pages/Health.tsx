
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Stethoscope, Syringe, Activity, Clipboard, FileSpreadsheet, FileType, FileText } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';

const Health = () => {
  const medicalServices = [
    {
      title: 'Consultations médicales',
      description: 'Prenez rendez-vous avec un médecin généraliste ou spécialiste du réseau universitaire.',
      icon: <Stethoscope className="h-6 w-6" />,
      action: 'Prendre rendez-vous',
    },
    {
      title: 'Opérations chirurgicales',
      description: 'Demandez une prise en charge pour une intervention chirurgicale programmée.',
      icon: <Syringe className="h-6 w-6" />,
      action: 'Demander une prise en charge',
    },
    {
      title: 'Maladies chroniques',
      description: 'Suivez votre traitement et bénéficiez d{"\'"}un accompagnement personnalisé.',
      icon: <Activity className="h-6 w-6" />,
      action: 'Accéder au suivi',
    },
    {
      title: 'Handicap',
      description: 'Découvrez les aides spécifiques pour les personnes en situation de handicap.',
      icon: <FileType className="h-6 w-6" />,
      action: 'Voir les aides',
    },
    {
      title: 'Remboursement',
      description: 'Soumettez vos demandes de remboursement de frais médicaux et suivez leur traitement.',
      icon: <FileSpreadsheet className="h-6 w-6" />,
      action: 'Soumettre une demande',
    },
    {
      title: 'Examens médicaux',
      description: 'Planifiez vos examens (radiographies, analyses) et consultez vos résultats.',
      icon: <FileText className="h-6 w-6" />,
      action: 'Planifier un examen',
    },
  ];

  // Données de démonstration pour les rendez-vous à venir
  const upcomingAppointments = [
    {
      id: 'apt-001',
      doctor: 'Dr. Karim Benali',
      specialty: 'Médecine générale',
      date: '15 Mai 2024',
      time: '14:30',
      location: 'Centre médical universitaire - Bâtiment A',
    },
    {
      id: 'apt-002',
      doctor: 'Dr. Amina Rahmani',
      specialty: 'Cardiologie',
      date: '22 Mai 2024',
      time: '10:15',
      location: 'Centre médical universitaire - Bâtiment B',
    },
  ];

  // Données de démonstration pour les remboursements
  const reimbursements = [
    {
      id: 'remb-001',
      type: 'Consultation spécialiste',
      amount: '2500 DA',
      submissionDate: '02 Mai 2024',
      status: 'En traitement',
      progress: 50,
    },
    {
      id: 'remb-002',
      type: 'Achat médicaments',
      amount: '4300 DA',
      submissionDate: '18 Avril 2024',
      status: 'Approuvé',
      progress: 100,
    },
    {
      id: 'remb-003',
      type: 'Analyses sanguines',
      amount: '3700 DA',
      submissionDate: '10 Avril 2024',
      status: 'Remboursé',
      progress: 100,
    },
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 md:px-10 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={100} className="space-y-6 text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary">
              Services de santé
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Votre santé, notre priorité
            </h1>
            <p className="text-lg text-muted-foreground">
              Accédez à l{"\'"}ensemble des services de santé proposés par l{"\'"}université 
              et bénéficiez d{"\'"}un suivi médical complet pour vous et votre famille.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="services">Services disponibles</TabsTrigger>
              <TabsTrigger value="appointments">Mes rendez-vous</TabsTrigger>
              <TabsTrigger value="reimbursements">Mes remboursements</TabsTrigger>
            </TabsList>
            
            {/* Onglet Services */}
            <TabsContent value="services">
              <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {medicalServices.map((service) => (
                  <Card key={service.title} className="flex flex-col h-full border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                        {service.icon}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary/5 transition-colors">
                        <Link to="#">
                          <span>{service.action}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 transition-transform group-hover:translate-x-1"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </FadeIn>
              
              <FadeIn delay={300} className="mt-12 bg-secondary/30 rounded-xl p-8 text-center">
                <Clipboard className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold mb-2">
                  Besoin d{"\'"}une assistance médicale urgente?
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                  Pour toute urgence médicale, contactez directement le service médical de l{"\'"}université
                  ou rendez-vous au centre médical du campus.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="rounded-full bg-gradient-to-r from-primary to-blue-500">
                    Numéros d{"\'"}urgence
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    Localiser le centre médical
                  </Button>
                </div>
              </FadeIn>
            </TabsContent>
            
            {/* Onglet Rendez-vous */}
            <TabsContent value="appointments">
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-6">
                  <h2 className="text-2xl font-display font-semibold mb-4">Rendez-vous à venir</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {upcomingAppointments.map((appointment) => (
                      <Card key={appointment.id} className="border border-border/50">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Stethoscope className="h-5 w-5 text-primary" />
                            {appointment.doctor}
                          </CardTitle>
                          <CardDescription>{appointment.specialty}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Date et heure</span>
                            <span className="font-medium">{appointment.date} - {appointment.time}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Lieu</span>
                            <span className="font-medium">{appointment.location}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            Modifier
                          </Button>
                          <Button variant="destructive" size="sm">
                            Annuler
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all text-base">
                      Prendre un nouveau rendez-vous
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Stethoscope className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Aucun rendez-vous planifié</h3>
                  <p className="text-muted-foreground mb-6">
                    Vous n{"\'"}avez actuellement aucun rendez-vous médical planifié.
                  </p>
                  <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all text-base">
                    Prendre un rendez-vous
                  </Button>
                </div>
              )}
            </TabsContent>
            
            {/* Onglet Remboursements */}
            <TabsContent value="reimbursements">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-display font-semibold">Mes demandes de remboursement</h2>
                  <Button>
                    Nouvelle demande
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {reimbursements.map((reimbursement) => (
                    <Card key={reimbursement.id} className="border border-border/50">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <div>
                            <h4 className="font-medium">{reimbursement.type}</h4>
                            <p className="text-sm text-muted-foreground">Soumis le {reimbursement.submissionDate}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-lg">{reimbursement.amount}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">
                              {reimbursement.status}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {reimbursement.progress}%
                            </span>
                          </div>
                          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                reimbursement.status === 'Approuvé' 
                                  ? 'bg-green-500' 
                                  : reimbursement.status === 'Remboursé' 
                                    ? 'bg-blue-500' 
                                    : 'bg-primary'
                              }`}
                              style={{ width: `${reimbursement.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Détails
                          </Button>
                          {reimbursement.status === 'En traitement' && (
                            <Button variant="outline" size="sm">
                              Modifier
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Card className="border border-border/50 bg-muted/50 p-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <h4 className="font-medium">Total des remboursements de l{"\'"}année</h4>
                      <p className="text-sm text-muted-foreground">Année universitaire 2023-2024</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-xl text-primary">10 500 DA</span>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
              Questions fréquentes
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Comment pouvons-nous vous aider?
            </h2>
          </FadeIn>
          
          <div className="space-y-4">
            <FadeIn delay={100}>
              <Card className="border border-border/50">
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg">Comment prendre rendez-vous avec un médecin?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Vous pouvez prendre rendez-vous directement sur la plateforme en vous connectant à votre compte,
                    puis en accédant à la section "Services de santé" et en cliquant sur "Prendre rendez-vous".
                    Vous pourrez alors choisir le médecin, la date et l{"\'"}heure qui vous conviennent.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={200}>
              <Card className="border border-border/50">
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg">Comment soumettre une demande de remboursement?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pour soumettre une demande de remboursement, accédez à l{"\'"}onglet "Mes remboursements"
                    et cliquez sur "Nouvelle demande". Remplissez le formulaire en détaillant le type de soins,
                    la date et le montant, puis téléchargez les justificatifs requis (factures, ordonnances, etc.).
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={300}>
              <Card className="border border-border/50">
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg">Quels sont les délais de remboursement?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les demandes de remboursement sont généralement traitées dans un délai de 10 à 15 jours ouvrables.
                    Une fois approuvée, le versement est effectué sur votre compte bancaire dans un délai de 5 jours
                    ouvrables supplémentaires.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={400}>
              <Card className="border border-border/50">
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg">Comment bénéficier d{"\'"}une prise en charge pour une intervention chirurgicale?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pour bénéficier d{"\'"}une prise en charge pour une intervention chirurgicale, vous devez soumettre
                    une demande préalable accompagnée d{"\'"}un certificat médical et d{"\'"}un devis détaillé.
                    Le service médical universitaire examinera votre dossier et vous informera du montant pris en charge
                    et des démarches à suivre.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Besoin d{"\'"}aide pour vos démarches de santé?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Notre équipe est à votre disposition pour vous accompagner dans toutes vos démarches liées aux services de santé.
                  N{"\'"}hésitez pas à nous contacter pour toute question ou demande d{"\'"}information.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all text-base">
                    Contacter le service médical
                  </Button>
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base">
                    Consulter le guide santé
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Health;
