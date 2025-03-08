
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import useActions from '@/hooks/useActions';
import { HealthServiceCategory } from '@/hooks/useHealthServices';

export type ActivityCategory = 'sports' | 'culture' | 'science';

interface ActivityRegistration {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  documents?: Array<{name: string, required: boolean}>;
}

const useActivities = () => {
  const [activeTab, setActiveTab] = useState('sports');
  const [selectedHealthService, setSelectedHealthService] = useState<HealthServiceCategory | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<ActivityRegistration | null>(null);
  const { toast } = useToast();
  const { showNotAvailableMessage } = useActions();

  return {
    activeTab,
    setActiveTab,
    selectedHealthService,
    setSelectedHealthService,
    selectedActivity,
    setSelectedActivity,
    showNotAvailableMessage
  };
};

export default useActivities;
