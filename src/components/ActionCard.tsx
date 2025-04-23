import React from 'react';
import { 
  BarChart2, Recycle, Leaf, BookOpen, ArrowRight,
  ChevronRight
} from 'lucide-react';
import { ActionCard as ActionCardType } from '../types';

interface ActionCardProps {
  card: ActionCardType;
}

const ActionCard: React.FC<ActionCardProps> = ({ card }) => {
  const { title, description, iconName, category, onClick } = card;
  
  const getIcon = () => {
    switch (iconName) {
      case 'chart':
        return <BarChart2 size={24} className="text-blue-500" />;
      case 'recycle':
        return <Recycle size={24} className="text-emerald-500" />;
      case 'leaf':
        return <Leaf size={24} className="text-green-500" />;
      case 'book':
        return <BookOpen size={24} className="text-amber-500" />;
      default:
        return <ArrowRight size={24} className="text-gray-500" />;
    }
  };
  
  const getBgColor = () => {
    switch (category) {
      case 'carbon':
        return 'bg-blue-50 hover:bg-blue-100';
      case 'waste':
        return 'bg-emerald-50 hover:bg-emerald-100';
      case 'offsets':
        return 'bg-green-50 hover:bg-green-100';
      case 'education':
        return 'bg-amber-50 hover:bg-amber-100';
      default:
        return 'bg-gray-50 hover:bg-gray-100';
    }
  };
  
  return (
    <div 
      className={`rounded-lg p-5 cursor-pointer transition-all transform hover:-translate-y-1 hover:shadow-md ${getBgColor()}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div className="flex-shrink-0 mr-4">
          {getIcon()}
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        
        <div className="flex-shrink-0 ml-2">
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ActionCard;