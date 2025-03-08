
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import useActions from '@/hooks/useActions';
import { HealthServiceCategory } from '@/hooks/useHealthServices';

export type ActivityCategory = 'sports' | 'culture' | 'science';

export interface ActivityRegistration {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  documents?: Array<{name: string, required: boolean}>;
  isFavorite?: boolean;
}

const useActivities = () => {
  const [activeTab, setActiveTab] = useState('sports');
  const [selectedHealthService, setSelectedHealthService] = useState<HealthServiceCategory | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<ActivityRegistration | null>(null);
  const [registrationStep, setRegistrationStep] = useState<'form' | 'confirmation' | 'success'>('form');
  const [favoriteActivities, setFavoriteActivities] = useState<string[]>([]);
  const [uploadedDocuments, setUploadedDocuments] = useState<Record<string, boolean>>({});
  const { toast } = useToast();
  const { showNotAvailableMessage } = useActions();
  
  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteActivities');
    if (savedFavorites) {
      setFavoriteActivities(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('favoriteActivities', JSON.stringify(favoriteActivities));
  }, [favoriteActivities]);

  const toggleFavorite = (activityId: string) => {
    setFavoriteActivities(prev => {
      if (prev.includes(activityId)) {
        return prev.filter(id => id !== activityId);
      } else {
        return [...prev, activityId];
      }
    });
  };

  const handleDocumentUpload = (documentName: string) => {
    setUploadedDocuments(prev => ({
      ...prev,
      [documentName]: true
    }));
    
    toast({
      title: "Document téléchargé",
      description: `${documentName} a été téléchargé avec succès.`,
    });
  };

  const submitRegistration = (formData: any) => {
    setRegistrationStep('confirmation');
    console.log("Registration form data:", formData);
  };

  const confirmRegistration = () => {
    setRegistrationStep('success');
    toast({
      title: "Inscription réussie",
      description: `Vous êtes maintenant inscrit(e) à ${selectedActivity?.title}`,
      duration: 5000,
    });
    
    // Reset form after successful submission
    setTimeout(() => {
      setSelectedActivity(null);
      setRegistrationStep('form');
      setUploadedDocuments({});
    }, 3000);
  };

  const cancelRegistration = () => {
    setSelectedActivity(null);
    setRegistrationStep('form');
    setUploadedDocuments({});
  };

  return {
    activeTab,
    setActiveTab,
    selectedHealthService,
    setSelectedHealthService,
    selectedActivity,
    setSelectedActivity,
    showNotAvailableMessage,
    favoriteActivities,
    toggleFavorite,
    registrationStep,
    setRegistrationStep,
    uploadedDocuments,
    handleDocumentUpload,
    submitRegistration,
    confirmRegistration,
    cancelRegistration
  };
};

export default useActivities;
