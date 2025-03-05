
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wallet, FileText, Calculator, HelpCircle } from 'lucide-react';

import LoansHeader from '@/components/loans/LoansHeader';
import LoansList from '@/components/loans/LoansList';
import useLoans from '@/hooks/useLoans';

const Loans = () => {
  const { activeTab, setActiveTab } = useLoans();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary/10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoansHeader />

          <Tabs defaultValue="loans" className="space-y-8" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-2xl">
                <TabsTrigger value="loans" className="flex gap-2 items-center">
                  <Wallet className="w-4 h-4" />
                  <span>Prêts disponibles</span>
                </TabsTrigger>
                <TabsTrigger value="simulator" className="flex gap-2 items-center">
                  <Calculator className="w-4 h-4" />
                  <span>Simulateur</span>
                </TabsTrigger>
                <TabsTrigger value="myrequests" className="flex gap-2 items-center">
                  <FileText className="w-4 h-4" />
                  <span>Mes demandes</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="loans">
              <LoansList />
            </TabsContent>

            <TabsContent value="simulator">
              <div className="rounded-lg border bg-card p-8 text-center">
                <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Simulateur de prêt</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cette fonctionnalité sera disponible prochainement.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="myrequests">
              <div className="rounded-lg border bg-card p-8 text-center">
                <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Mes demandes de prêt</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cette fonctionnalité sera disponible prochainement.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Loans;
