
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-background px-6 md:px-10 pt-24 pb-16">
        <div className="max-w-md w-full text-center space-y-6">
          <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary">
            Erreur 404
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Page non trouvée</h1>
          <p className="text-muted-foreground">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="pt-4">
            <Button asChild className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all text-base">
              <Link to="/">
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
