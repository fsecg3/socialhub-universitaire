
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import useActions from '@/hooks/useActions';

const useActivities = () => {
  const [activeTab, setActiveTab] = useState('sports');
  const { toast } = useToast();
  const { showNotAvailableMessage } = useActions();

  return {
    activeTab,
    setActiveTab,
    showNotAvailableMessage
  };
};

export default useActivities;
