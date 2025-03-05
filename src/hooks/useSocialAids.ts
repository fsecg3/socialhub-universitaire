
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { LucideIcon, PartyPopper, Baby, Gift, GraduationCap, School, Heart } from 'lucide-react';

export type AidCategory = 'marriage' | 'birth' | 'circumcision' | 'retirement' | 'education' | 'funeral';

export type AidDocument = {
  name: string;
  required: boolean;
  description?: string;
  uploaded?: boolean;
  fileType?: 'pdf' | 'image' | 'any';
};

export type AidType = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  eligibility: string;
  documents: AidDocument[];
  amount: string;
  category: AidCategory;
  conditions?: string[];
  processingTime?: string;
  validityPeriod?: string;
};

export type AidRequestStatus = 'draft' | 'submitted' | 'reviewing' | 'pending_documents' | 'approved' | 'rejected';

export type AidRequest = {
  id: string;
  aidType: AidCategory;
  status: AidRequestStatus;
  submittedDate: string;
  lastUpdated: string;
  documents: { name: string; uploaded: boolean; validationStatus?: 'valid' | 'invalid' | 'pending' }[];
  progress: number;
  amount?: string;
  comments?: string[];
  expectedCompletionDate?: string;
};

// Simulate a database of aid types
const getAvailableAids = (): AidType[] => [
  {
    id: "aid-marriage",
    title: "Allocation de mariage",
    description: "Aide financière accordée aux personnels de l'université à l'occasion de leur mariage.",
    icon: PartyPopper,
    eligibility: "Personnel universitaire et enseignants en activité",
    documents: [
      { name: "Certificat de mariage", required: true, description: "Document officiel délivré par les autorités", fileType: "pdf" },
      { name: "Copies des cartes d'identité", required: true, description: "Copies des deux conjoints", fileType: "image" },
      { name: "Justificatif d'emploi", required: true, description: "Attestation de travail récente", fileType: "pdf" },
      { name: "Demande écrite", required: true, description: "Formulaire de demande signé", fileType: "pdf" },
      { name: "RIB bancaire", required: true, description: "Relevé d'identité bancaire", fileType: "pdf" }
    ],
    amount: "50 000 DA",
    category: "marriage",
    conditions: [
      "Être en activité depuis au moins 1 an",
      "Ne pas avoir bénéficié de cette allocation auparavant",
      "Formuler la demande dans les 3 mois suivant la date du mariage"
    ],
    processingTime: "15 jours ouvrables",
    validityPeriod: "3 mois après la date du mariage"
  },
  {
    id: "aid-birth",
    title: "Allocation de naissance",
    description: "Prime attribuée aux parents à l'occasion de la naissance d'un enfant.",
    icon: Baby,
    eligibility: "Personnel universitaire et enseignants en activité",
    documents: [
      { name: "Certificat de naissance", required: true, description: "Original ou copie certifiée conforme", fileType: "pdf" },
      { name: "Livret de famille", required: true, description: "Pages parents et enfant", fileType: "image" },
      { name: "Preuve d'affiliation", required: true, description: "Carte d'immatriculation sociale", fileType: "image" },
      { name: "Attestation de travail", required: true, description: "Document récent (moins de 3 mois)", fileType: "pdf" },
      { name: "RIB bancaire", required: true, description: "Relevé d'identité bancaire", fileType: "pdf" }
    ],
    amount: "30 000 DA",
    category: "birth",
    conditions: [
      "Être en activité au moment de la naissance",
      "Faire la demande dans les 6 mois suivant la naissance",
      "L'enfant doit être déclaré à l'état civil"
    ],
    processingTime: "10 jours ouvrables",
    validityPeriod: "6 mois après la date de naissance"
  },
  {
    id: "aid-circumcision",
    title: "Allocation de circoncision",
    description: "Aide financière accordée à l'occasion de la circoncision d'un enfant.",
    icon: Gift,
    eligibility: "Personnel universitaire et enseignants avec enfants de sexe masculin",
    documents: [
      { name: "Certificat médical de circoncision", required: true, description: "Délivré par un médecin agréé", fileType: "pdf" },
      { name: "Acte de naissance de l'enfant", required: true, description: "Copie originale ou certifiée", fileType: "pdf" },
      { name: "Livret de famille", required: true, description: "Pages parents et enfant", fileType: "image" },
      { name: "Attestation de travail", required: true, description: "Document récent", fileType: "pdf" },
      { name: "RIB bancaire", required: true, description: "Relevé d'identité bancaire", fileType: "pdf" }
    ],
    amount: "25 000 DA",
    category: "circumcision",
    conditions: [
      "L'enfant doit être âgé de moins de 10 ans",
      "Une seule allocation par enfant",
      "Demande à soumettre dans les 3 mois suivant l'acte"
    ],
    processingTime: "7 jours ouvrables",
    validityPeriod: "3 mois après la date de l'acte médical"
  },
  {
    id: "aid-retirement",
    title: "Allocation de départ à la retraite",
    description: "Prime versée aux personnels lors de leur départ à la retraite.",
    icon: GraduationCap,
    eligibility: "Personnel universitaire et enseignants partant à la retraite",
    documents: [
      { name: "Décision de mise à la retraite", required: true, description: "Document officiel", fileType: "pdf" },
      { name: "Relevé de carrière", required: true, description: "Historique complet", fileType: "pdf" },
      { name: "Attestation de travail", required: true, description: "Dernière attestation", fileType: "pdf" },
      { name: "Pièce d'identité", required: true, description: "Carte d'identité valide", fileType: "image" },
      { name: "RIB bancaire", required: true, description: "Relevé d'identité bancaire", fileType: "pdf" }
    ],
    amount: "Variable selon l'ancienneté",
    category: "retirement",
    conditions: [
      "Avoir accompli au moins 15 ans de service",
      "Retraite légale (pas de démission)",
      "Demande à soumettre dans les 6 mois suivant la mise à la retraite"
    ],
    processingTime: "30 jours ouvrables",
    validityPeriod: "6 mois après la date de mise à la retraite"
  },
  {
    id: "aid-education",
    title: "Allocation scolaire",
    description: "Aide financière pour les frais de scolarité des enfants du personnel universitaire.",
    icon: School,
    eligibility: "Personnel universitaire et enseignants avec enfants scolarisés",
    documents: [
      { name: "Certificat de scolarité", required: true, description: "Pour l'année en cours", fileType: "pdf" },
      { name: "Bulletins scolaires", required: true, description: "De l'année précédente", fileType: "pdf" },
      { name: "Justificatif de revenus familiaux", required: true, description: "Fiche de paie récente", fileType: "pdf" },
      { name: "Livret de famille", required: true, description: "Pages parents et enfants", fileType: "image" },
      { name: "RIB bancaire", required: true, description: "Relevé d'identité bancaire", fileType: "pdf" }
    ],
    amount: "15 000 DA par enfant scolarisé",
    category: "education",
    conditions: [
      "Enfants âgés de 6 à 25 ans",
      "Scolarisation dans un établissement reconnu",
      "Demande à soumettre au début de chaque année scolaire"
    ],
    processingTime: "15 jours ouvrables",
    validityPeriod: "Durant les deux premiers mois de l'année scolaire"
  },
  {
    id: "aid-funeral",
    title: "Allocation funéraire",
    description: "Aide financière accordée aux familles lors du décès d'un proche.",
    icon: Heart,
    eligibility: "Personnel universitaire et familles en cas de décès d'un proche",
    documents: [
      { name: "Acte de décès", required: true, description: "Document officiel", fileType: "pdf" },
      { name: "Justificatif de lien familial", required: true, description: "Livret de famille ou autre", fileType: "pdf" },
      { name: "Attestation de travail", required: true, description: "Document récent", fileType: "pdf" },
      { name: "RIB bancaire", required: true, description: "Relevé d'identité bancaire", fileType: "pdf" }
    ],
    amount: "40 000 DA",
    category: "funeral",
    conditions: [
      "Concerne le décès du travailleur, conjoint, enfant à charge ou parent direct",
      "Demande à soumettre dans les 3 mois suivant le décès",
      "Une seule allocation par décès"
    ],
    processingTime: "7 jours ouvrables (traitement prioritaire)",
    validityPeriod: "3 mois après la date du décès"
  }
];

// Simulate a database of pending requests
const getPendingRequests = (): AidRequest[] => [
  {
    id: "AID-2024-0045",
    aidType: "birth",
    status: "reviewing",
    submittedDate: "03 Juin 2024",
    lastUpdated: "05 Juin 2024",
    documents: [
      { name: "Certificat de naissance", uploaded: true, validationStatus: "valid" },
      { name: "Livret de famille", uploaded: true, validationStatus: "valid" },
      { name: "Preuve d'affiliation", uploaded: true, validationStatus: "pending" },
      { name: "Attestation de travail", uploaded: true, validationStatus: "valid" },
      { name: "RIB bancaire", uploaded: true, validationStatus: "valid" }
    ],
    progress: 60,
    expectedCompletionDate: "15 Juin 2024",
    comments: ["Documents reçus, en cours de vérification", "Complément d'information requis sur la preuve d'affiliation"]
  },
  {
    id: "AID-2024-0032",
    aidType: "education",
    status: "pending_documents",
    submittedDate: "25 Mai 2024",
    lastUpdated: "01 Juin 2024",
    documents: [
      { name: "Certificat de scolarité", uploaded: true, validationStatus: "valid" },
      { name: "Bulletins scolaires", uploaded: false },
      { name: "Justificatif de revenus familiaux", uploaded: true, validationStatus: "invalid" },
      { name: "Livret de famille", uploaded: true, validationStatus: "valid" },
      { name: "RIB bancaire", uploaded: true, validationStatus: "valid" }
    ],
    progress: 30,
    comments: ["Veuillez fournir les bulletins scolaires manquants", "Le justificatif de revenus est incomplet, merci de soumettre un document plus récent"]
  }
];

const useSocialAids = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAidCategory, setSelectedAidCategory] = useState<AidCategory | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingRequests, setPendingRequests] = useState<AidRequest[]>(getPendingRequests());
  const [availableAids] = useState<AidType[]>(getAvailableAids());
  const [uploadedDocuments, setUploadedDocuments] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const getAidDetails = (category: AidCategory | null) => {
    if (!category) return null;
    return availableAids.find(aid => aid.category === category) || null;
  };

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
    // Reset uploaded documents state when selecting a new aid
    setUploadedDocuments({});
  };

  const handleDocumentUpload = (documentName: string) => {
    // In a real app, this would handle the actual file upload
    setUploadedDocuments(prev => ({
      ...prev,
      [documentName]: true
    }));

    toast({
      title: "Document téléchargé",
      description: `Le document "${documentName}" a été téléchargé avec succès.`,
      duration: 3000,
    });
  };

  const validateForm = (formData: any, requiredDocuments: AidDocument[]) => {
    // Check if all required documents are uploaded
    let allDocsUploaded = true;
    let missingDocuments: string[] = [];

    requiredDocuments.forEach(doc => {
      if (doc.required && !uploadedDocuments[doc.name]) {
        allDocsUploaded = false;
        missingDocuments.push(doc.name);
      }
    });

    if (!allDocsUploaded) {
      toast({
        title: "Documents manquants",
        description: `Veuillez télécharger les documents suivants : ${missingDocuments.join(', ')}`,
        duration: 5000,
      });
      return false;
    }

    // In a real app, you would validate all form fields here
    if (!formData.acceptTerms) {
      toast({
        title: "Termes non acceptés",
        description: "Vous devez accepter les termes et conditions pour soumettre la demande.",
        duration: 3000,
      });
      return false;
    }

    return true;
  };

  const submitAidRequest = (formData: any) => {
    const aidDetails = getAidDetails(selectedAidCategory);
    
    if (!aidDetails) {
      toast({
        title: "Erreur",
        description: "Type d'aide non spécifié.",
        duration: 3000,
      });
      return;
    }

    // Validate the form and documents
    if (!validateForm(formData, aidDetails.documents)) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Create a new request and add it to pending requests
      const newRequest: AidRequest = {
        id: `AID-2024-${Math.floor(1000 + Math.random() * 9000)}`,
        aidType: selectedAidCategory as AidCategory,
        status: 'submitted',
        submittedDate: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }),
        lastUpdated: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }),
        documents: aidDetails.documents.map(doc => ({
          name: doc.name,
          uploaded: !!uploadedDocuments[doc.name],
          validationStatus: 'pending'
        })),
        progress: 10,
        comments: ["Demande reçue, en attente de traitement"]
      };

      setPendingRequests(prev => [newRequest, ...prev]);
      setIsSubmitting(false);
      
      toast({
        title: "Demande soumise",
        description: "Votre demande a été soumise avec succès et est en cours de traitement.",
        duration: 5000,
      });
      
      setActiveTab('myrequests');
      setSelectedAidCategory(null);
      setUploadedDocuments({});
    }, 1500);
  };

  const getRequestDetails = (requestId: string) => {
    return pendingRequests.find(req => req.id === requestId) || null;
  };

  const cancelRequest = (requestId: string) => {
    // In a real app, this would call an API to cancel the request
    setPendingRequests(prev => prev.filter(req => req.id !== requestId));
    
    toast({
      title: "Demande annulée",
      description: "Votre demande a été annulée avec succès.",
      duration: 3000,
    });
  };

  return {
    activeTab,
    setActiveTab,
    showNotAvailableMessage,
    selectedAidCategory,
    setSelectedAidCategory,
    handleAidSelection,
    isSubmitting,
    submitAidRequest,
    availableAids,
    pendingRequests,
    getAidDetails,
    uploadedDocuments,
    handleDocumentUpload,
    getRequestDetails,
    cancelRequest
  };
};

export default useSocialAids;
