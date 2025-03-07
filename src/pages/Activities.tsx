
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Ticket, Lightbulb, HeartPulse } from 'lucide-react';

import ActivitiesHeader from '@/components/activities/ActivitiesHeader';
import ActivitiesList from '@/components/activities/ActivitiesList';
import HealthServiceForm from '@/components/health/HealthServiceForm';
import ActivityHealthServices from '@/components/activities/ActivityHealthServices';
import useActivities from '@/hooks/useActivities';
import useHealthServices from '@/hooks/useHealthServices';

const Activities = () => {
  const { activeTab, setActiveTab, selectedHealthService, setSelectedHealthService } = useActivities();
  const { serviceDetails } = useHealthServices();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary/10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ActivitiesHeader />

          <Tabs defaultValue="sports" className="space-y-8" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="sports" className="flex gap-2 items-center">
                  <Trophy className="w-4 h-4" />
                  <span>Sports</span>
                </TabsTrigger>
                <TabsTrigger value="culture" className="flex gap-2 items-center">
                  <Ticket className="w-4 h-4" />
                  <span>Culture</span>
                </TabsTrigger>
                <TabsTrigger value="science" className="flex gap-2 items-center">
                  <Lightbulb className="w-4 h-4" />
                  <span>Science</span>
                </TabsTrigger>
                <TabsTrigger value="health" className="flex gap-2 items-center">
                  <HeartPulse className="w-4 h-4" />
                  <span>Santé</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="sports">
              <ActivitiesList category="sports" />
            </TabsContent>

            <TabsContent value="culture">
              <ActivitiesList category="culture" />
            </TabsContent>

            <TabsContent value="science">
              <ActivitiesList category="science" />
            </TabsContent>

            <TabsContent value="health">
              {selectedHealthService ? (
                <HealthServiceForm 
                  serviceId={selectedHealthService} 
                  serviceDetails={serviceDetails[selectedHealthService]} 
                  onBack={() => setSelectedHealthService(null)} 
                />
              ) : (
                <ActivityHealthServices onServiceSelect={setSelectedHealthService} />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Activities;
