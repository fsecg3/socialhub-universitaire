
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export type AidCategory = 'marriage' | 'birth' | 'circumcision' | 'retirement' | 'education' | 'funeral';

export type AidDocument = {
  name: string;
  required: boolean;
  description?: string;
};

export type AidType = {
  id: string;
  title: string;
  description: string;
  icon: any;
  eligibility: string;
  documents: AidDocument[];
  amount: string;
  category: AidCategory;
};

const useSocialAids = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAidCategory, setSelectedAidCategory] = useState<AidCategory | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  const handleAidSelection = (category: AidCategory) => {
    setSelectedAidCategory(category);
    setActiveTab('newrequest');
  };

  const submitAidRequest = (formData: any) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Demande soumise",
        description: "Votre demande a été soumise avec succès et est en cours de traitement.",
        duration: 5000,
      });
      setActiveTab('myrequests');
      setSelectedAidCategory(null);
    }, 1500);
  };

  return {
    activeTab,
    setActiveTab,
    showNotAvailableMessage,
    selectedAidCategory,
    setSelectedAidCategory,
    handleAidSelection,
    isSubmitting,
    submitAidRequest
  };
};

export default useSocialAids;
