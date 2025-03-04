
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ExternalLink, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                SocialHub
              </span>
              <span className="text-sm font-medium text-muted-foreground">Universitaire</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Plateforme de gestion centralisée pour les œuvres sociales universitaires, 
              facilitant l'accès aux services pour tous les membres de la communauté universitaire.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-background text-foreground hover:bg-primary/10 transition-colors" 
                aria-label="Twitter"
              >
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-background text-foreground hover:bg-primary/10 transition-colors" 
                aria-label="Facebook"
              >
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-background text-foreground hover:bg-primary/10 transition-colors" 
                aria-label="Instagram"
              >
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">Services</p>
            <ul className="space-y-3">
              <li>
                <Link to="/housing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Logements universitaires
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Restauration
                </Link>
              </li>
              <li>
                <Link to="/scholarships" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Bourses et aides
                </Link>
              </li>
              <li>
                <Link to="/health" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services de santé
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Activités culturelles et sportives
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>contact@socialhub-universitaire.fr</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <ExternalLink size={16} className="mt-1" />
                <span>Campus Universitaire<br />123 Avenue des Études<br />75000 Paris</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SocialHub Universitaire. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Conditions d'utilisation
            </Link>
            <Link to="/sitemap" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
