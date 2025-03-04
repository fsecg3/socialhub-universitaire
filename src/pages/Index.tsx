import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/ui/ServiceCard';
import FadeIn from '@/components/animations/FadeIn';
import { Building, Utensils, GraduationCap, HeartPulse, Activity } from 'lucide-react';
import heroBackground from '@/assets/images/hero-bg.svg';

const Index = () => {
  const services = [
    {
      title: 'Logements universitaires',
      description: 'Accédez aux demandes de logement, suivez l{"\'"}attribution et gérez votre dossier en ligne.',
      icon: Building,
      href: '/housing',
    },
    {
      title: 'Restauration',
      description: 'Consultez les menus, horaires et tarifs des restaurants universitaires du campus.',
      icon: Utensils,
      href: '/dining',
    },
    {
      title: 'Bourses et aides',
      description: 'Découvrez les aides financières disponibles et soumettez vos demandes facilement.',
      icon: GraduationCap,
      href: '/scholarships',
    },
    {
      title: 'Services de santé',
      description: 'Prenez rendez-vous avec les professionnels de santé et accédez à votre suivi médical.',
      icon: HeartPulse,
      href: '/health',
    },
    {
      title: 'Activités',
      description: 'Explorez et inscrivez-vous aux activités culturelles et sportives proposées sur le campus.',
      icon: Activity,
      href: '/activities',
    },
  ];

  const features = [
    {
      title: 'Centralisation des services',
      description: 'Tous les services sociaux universitaires accessibles depuis une plateforme unique.'
    },
    {
      title: 'Suivi en temps réel',
      description: 'Suivez l{"\'"}état de vos demandes et recevez des notifications sur leur avancement.'
    },
    {
      title: 'Accessibilité 24/7',
      description: 'Accédez à vos informations et services à tout moment, où que vous soyez.'
    },
    {
      title: 'Interface intuitive',
      description: 'Navigation simplifiée et adaptée aux besoins des étudiants et du personnel.'
    },
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-10 overflow-hidden">
        <img 
          src={heroBackground} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={100} className="space-y-6">
              <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary">
                Plateforme de gestion des œuvres sociales
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Simplifiez l{"'"}accès aux <span className="text-primary">services sociaux</span> universitaires
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Accédez à tous les services sociaux de l{"'"}université sur une plateforme centralisée, 
                intuitive et personnalisée pour les étudiants, enseignants et personnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all text-base">
                  Créer un compte
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 text-base">
                  Découvrir les services
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={300} direction="left" className="relative lg:h-[540px] hidden lg:block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-100/50 dark:border-blue-800/10 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="glass dark:glass-dark absolute right-4 top-4 p-5 w-72 rounded-xl shadow-soft animate-float">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Building size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Demande de logement</h3>
                      <p className="text-xs text-muted-foreground">Dossier #1234</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">État: En cours de traitement</span>
                      <span className="text-primary font-medium">75%</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass dark:glass-dark absolute left-4 bottom-24 p-5 w-64 rounded-xl shadow-soft animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                      <HeartPulse size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Rendez-vous médical</h3>
                      <p className="text-xs text-muted-foreground">Dr. Martin</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs">
                      <div className="font-medium">14 Mai 2024</div>
                      <div className="text-muted-foreground">14:30 - 15:00</div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8 text-xs px-3">
                      Modifier
                    </Button>
                  </div>
                </div>
                
                <div className="glass dark:glass-dark absolute right-4 bottom-4 p-5 w-56 rounded-xl shadow-soft animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Bourse</h3>
                      <p className="text-xs text-muted-foreground">Année 2023-2024</p>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center justify-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm font-medium text-green-600 dark:text-green-400">Approuvée</div>
                      <div className="text-xs text-green-500/70 dark:text-green-500/50">Versement mensuel</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
          <div className="w-2 h-2 rounded-full bg-foreground/60"></div>
          <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
                Nos services
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Des services adaptés à vos besoins
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez l{"'"}ensemble des services sociaux proposés par l{"'"}université pour faciliter 
                votre vie quotidienne sur le campus.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                delay={100 + index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-video lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10"></div>
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                  <div className="glass rounded-xl p-4 md:p-6 self-start max-w-xs">
                    <h3 className="text-lg font-medium mb-2">Traitement rapide</h3>
                    <p className="text-sm text-muted-foreground">
                      Les délais de traitement des demandes sont réduits grâce à la digitalisation des processus.
                    </p>
                  </div>
                  
                  <div className="glass rounded-xl p-4 md:p-6 self-end max-w-xs">
                    <h3 className="text-lg font-medium mb-2">Transparence</h3>
                    <p className="text-sm text-muted-foreground">
                      Suivez l{"'"}état de vos demandes en temps réel et comprenez chaque étape du processus.
                    </p>
                  </div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full glass flex items-center justify-center shadow-soft">
                    <span className="text-2xl md:text-4xl font-bold text-primary">+45%</span>
                  </div>
                </div>
                
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                  <span className="text-sm px-4 py-2 bg-white/80 rounded-full">
                    d{"'"}efficacité dans le traitement des demandes
                  </span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="space-y-6">
              <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary">
                Caractéristiques
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Une plateforme conçue pour simplifier les démarches administratives
              </h2>
              <p className="text-muted-foreground">
                SocialHub Universitaire repense entièrement la gestion des œuvres sociales pour 
                faciliter l{"'"}accès aux services et réduire les délais de traitement des demandes.
              </p>
              
              <div className="space-y-6 pt-4">
                {features.map((feature, index) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <Button asChild className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all text-base">
                  <Link to="/services">
                    Découvrir tous les avantages
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
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 px-6 md:px-10 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-soft border border-border/50 text-center">
              <div className="text-4xl font-bold text-primary mb-2">+5000</div>
              <div className="text-sm text-muted-foreground">Étudiants accompagnés</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border border-border/50 text-center">
              <div className="text-4xl font-bold text-primary mb-2">1500</div>
              <div className="text-sm text-muted-foreground">Logements gérés</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border border-border/50 text-center">
              <div className="text-4xl font-bold text-primary mb-2">300k</div>
              <div className="text-sm text-muted-foreground">Repas servis par mois</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border border-border/50 text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Prêt à simplifier votre vie universitaire?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Rejoignez SocialHub Universitaire et accédez à l{"'"}ensemble des services sociaux de l{"'"}université 
                  en quelques clics. Créez votre compte dès maintenant.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all text-base">
                    Créer un compte
                  </Button>
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base">
                    Contacter l{"'"}assistance
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

export default Index;
