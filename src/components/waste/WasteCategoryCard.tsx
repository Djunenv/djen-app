import React from 'react';
import { Recycle, Coffee, Trash, AlertTriangle } from 'lucide-react';

interface WasteCategoryCardProps {
  title: string;
  items: string[];
  iconColor: string;
  bgColor: string;
}

const WasteCategoryCard: React.FC<WasteCategoryCardProps> = ({ 
  title, 
  items, 
  iconColor, 
  bgColor 
}) => {
  const getIcon = () => {
    switch (title) {
      case 'Recyclables':
        return <Recycle className={`${iconColor}`} size={20} />;
      case 'Compostables':
        return <Coffee className={`${iconColor}`} size={20} />;
      case 'General Waste':
        return <Trash className={`${iconColor}`} size={20} />;
      case 'Special Disposal':
        return <AlertTriangle className={`${iconColor}`} size={20} />;
      default:
        return <Recycle className={`${iconColor}`} size={20} />;
    }
  };
  
  return (
    <div className={`${bgColor} rounded-lg p-4`}>
      <div className="flex items-center mb-3">
        {getIcon()}
        <h4 className="font-medium ml-2">{title}</h4>
      </div>
      
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-sm flex items-start">
            <span className="text-emerald-600 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WasteCategoryCard;