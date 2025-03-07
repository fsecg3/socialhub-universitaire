
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HeartPulse, Calendar, FileText, HelpCircle } from 'lucide-react';

import HealthPageHeader from '@/components/health/HealthPageHeader';
import HealthServicesList from '@/components/health/HealthServicesList';
import AppointmentsList from '@/components/health/AppointmentsList';
import ReimbursementsList from '@/components/health/ReimbursementsList';
import HealthFAQ from '@/components/health/HealthFAQ';
import EmergencyContact from '@/components/health/EmergencyContact';
import HealthServiceForm from '@/components/health/HealthServiceForm';
import useHealthServices from '@/hooks/useHealthServices';

const Health = () => {
  const { activeTab, setActiveTab, selectedService, setSelectedService, serviceDetails } = useHealthServices();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary/10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HealthPageHeader />

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
              {selectedService ? (
                <HealthServiceForm 
                  serviceId={selectedService} 
                  serviceDetails={serviceDetails[selectedService]} 
                  onBack={() => setSelectedService(null)} 
                />
              ) : (
                <HealthServicesList onServiceSelect={setSelectedService} />
              )}
            </TabsContent>

            <TabsContent value="appointments">
              <AppointmentsList />
            </TabsContent>

            <TabsContent value="reimbursements">
              <ReimbursementsList />
            </TabsContent>

            <TabsContent value="faq">
              <HealthFAQ />
            </TabsContent>
          </Tabs>

          <EmergencyContact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Health;
