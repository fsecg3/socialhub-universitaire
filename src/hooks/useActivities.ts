
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import useActions from '@/hooks/useActions';
import { HealthServiceCategory } from '@/hooks/useHealthServices';

const useActivities = () => {
  const [activeTab, setActiveTab] = useState('sports');
  const [selectedHealthService, setSelectedHealthService] = useState<HealthServiceCategory | null>(null);
  const { toast } = useToast();
  const { showNotAvailableMessage } = useActions();

  return {
    activeTab,
    setActiveTab,
    selectedHealthService,
    setSelectedHealthService,
    showNotAvailableMessage
  };
};

export default useActivities;
