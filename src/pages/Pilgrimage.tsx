
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Map, FileText, HelpCircle, Calendar } from 'lucide-react';

import PilgrimageHeader from '@/components/pilgrimage/PilgrimageHeader';
import PilgrimageList from '@/components/pilgrimage/PilgrimageList';
import usePilgrimage from '@/hooks/usePilgrimage';

const Pilgrimage = () => {
  const { activeTab, setActiveTab } = usePilgrimage();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary/10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PilgrimageHeader />

          <Tabs defaultValue="services" className="space-y-8" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-2xl">
                <TabsTrigger value="services" className="flex gap-2 items-center">
                  <Map className="w-4 h-4" />
                  <span>Services</span>
                </TabsTrigger>
                <TabsTrigger value="myrequests" className="flex gap-2 items-center">
                  <FileText className="w-4 h-4" />
                  <span>Mes demandes</span>
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex gap-2 items-center">
                  <Calendar className="w-4 h-4" />
                  <span>Calendrier</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="services">
              <PilgrimageList />
            </TabsContent>

            <TabsContent value="myrequests">
              <div className="rounded-lg border bg-card p-8 text-center">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Mes demandes</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cette fonctionnalité sera disponible prochainement.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="calendar">
              <div className="rounded-lg border bg-card p-8 text-center">
                <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Calendrier des événements</h3>
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

export default Pilgrimage;
