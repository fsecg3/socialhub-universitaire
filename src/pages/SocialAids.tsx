
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Baby, School, PartyPopper, Gift, FileText } from 'lucide-react';
import useSocialAids from '@/hooks/useSocialAids';
import SocialAidsHeader from '@/components/social/SocialAidsHeader';
import SocialAidsList from '@/components/social/SocialAidsList';
import PendingRequestsList from '@/components/social/PendingRequestsList';
import NewRequestForm from '@/components/social/NewRequestForm';
import SupportBanner from '@/components/social/SupportBanner';
import FadeIn from '@/components/animations/FadeIn';

const SocialAids = () => {
  const { 
    activeTab, 
    setActiveTab, 
    showNotAvailableMessage, 
    selectedAidCategory, 
    handleAidSelection,
    isSubmitting,
    submitAidRequest,
    availableAids,
    pendingRequests,
    getAidDetails,
    uploadedDocuments,
    handleDocumentUpload,
    cancelRequest
  } = useSocialAids();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary/10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialAidsHeader />

          <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab} value={activeTab}>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-2xl">
                <TabsTrigger value="overview" className="flex gap-2 items-center">
                  <GraduationCap className="w-4 h-4" />
                  <span>Aperçu</span>
                </TabsTrigger>
                <TabsTrigger value="myrequests" className="flex gap-2 items-center">
                  <FileText className="w-4 h-4" />
                  <span>Mes demandes</span>
                </TabsTrigger>
                <TabsTrigger value="newrequest" className="flex gap-2 items-center">
                  <Baby className="w-4 h-4" />
                  <span>Nouvelle demande</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview">
              <SocialAidsList 
                onActionClick={handleAidSelection} 
                aids={availableAids}
              />
            </TabsContent>

            <TabsContent value="myrequests">
              <PendingRequestsList 
                requests={pendingRequests}
                onDetailsClick={showNotAvailableMessage}
                onHistoryClick={showNotAvailableMessage}
                onNewRequestClick={() => setActiveTab('newrequest')}
                onCancelClick={cancelRequest}
              />
            </TabsContent>

            <TabsContent value="newrequest">
              <NewRequestForm 
                onAidClick={handleAidSelection} 
                selectedAidCategory={selectedAidCategory} 
                onBackClick={() => setActiveTab('overview')} 
                onSubmit={submitAidRequest}
                isSubmitting={isSubmitting}
                aidDetails={getAidDetails(selectedAidCategory)}
                uploadedDocuments={uploadedDocuments}
                onDocumentUpload={handleDocumentUpload}
              />
            </TabsContent>
          </Tabs>

          <SupportBanner 
            onContactClick={showNotAvailableMessage}
            onGuideClick={showNotAvailableMessage}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SocialAids;
