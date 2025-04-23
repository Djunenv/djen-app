import React from 'react';
import { CarbonFootprint } from '../../types';

interface CarbonChartProps {
  footprint: CarbonFootprint;
}

const CarbonChart: React.FC<CarbonChartProps> = ({ footprint }) => {
  const categories = [
    { key: 'transportation', label: 'Transportation', color: '#10B981' },
    { key: 'home', label: 'Home Energy', color: '#3B82F6' },
    { key: 'food', label: 'Food', color: '#F59E0B' },
    { key: 'goods', label: 'Goods', color: '#8B5CF6' },
    { key: 'services', label: 'Services', color: '#EC4899' },
  ];
  
  const total = footprint.total;
  
  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-gray-700 mb-2">Breakdown by Category</h4>
      
      <div className="space-y-3">
        {categories.map((category) => {
          const value = footprint[category.key as keyof CarbonFootprint] as number;
          const percentage = (value / total) * 100;
          
          return (
            <div key={category.key} className="space-y-1">
              <div className="flex justify-between text-xs text-gray-600">
                <span>{category.label}</span>
                <span>
                  {Math.round(value).toLocaleString()} kg ({percentage.toFixed(1)}%)
                </span>
              </div>
              
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${percentage}%`, 
                    backgroundColor: category.color,
                    transition: 'width 1s ease-out'
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {categories.map((category) => (
          <div key={category.key} className="flex items-center text-xs">
            <div 
              className="h-3 w-3 rounded-full mr-1" 
              style={{ backgroundColor: category.color }}
            />
            <span className="truncate">{category.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarbonChart;