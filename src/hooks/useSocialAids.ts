
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const useSocialAids = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  const showNotAvailableMessage = () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Cette fonctionnalité sera disponible prochainement.",
      duration: 3000,
    });
  };

  return {
    activeTab,
    setActiveTab,
    showNotAvailableMessage
  };
};

export default useSocialAids;
