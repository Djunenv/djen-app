export interface UserProfile {
  location?: string;
  householdSize?: number;
  hasCompostSpace?: boolean;
  hasRecyclingAccess?: boolean;
  transportationMode?: 'car' | 'public' | 'bike' | 'walk' | 'mixed';
  dietType?: 'omnivore' | 'pescatarian' | 'vegetarian' | 'vegan';
  energySource?: 'standard' | 'renewable' | 'mixed';
}

export interface CarbonFootprint {
  transportation: number;
  home: number;
  food: number;
  goods: number;
  services: number;
  total: number;
}

export interface WastePlan {
  recyclables: string[];
  compostables: string[];
  generalWaste: string[];
  specialDisposal: string[];
  tips: string[];
}

export interface CarbonOffsetProvider {
  name: string;
  website: string;
  description: string;
  projectTypes: string[];
  certification: string;
  priceRange: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface ActionCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'carbon' | 'waste' | 'offsets' | 'education';
  onClick: () => void;
}