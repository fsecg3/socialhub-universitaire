
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Logement', href: '/housing' },
    { name: 'Restauration', href: '/dining' },
    { name: 'Bourses', href: '/scholarships' },
    { name: 'Santé', href: '/health' },
    { name: 'Activités', href: '/activities' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10',
        isScrolled ? 'glass shadow-soft' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
            SocialHub
          </span>
          <span className="text-sm font-medium text-muted-foreground">Universitaire</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="rounded-full px-6">
            Connexion
          </Button>
          <Button className="rounded-full px-6 bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all">
            Inscription
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 z-50 md:hidden bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out transform',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full p-6 pt-24">
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col space-y-4 mb-12">
              <Button
                variant="outline"
                className="rounded-full py-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connexion
              </Button>
              <Button
                className="rounded-full py-6 bg-gradient-to-r from-primary to-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inscription
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
