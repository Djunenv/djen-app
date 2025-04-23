import React, { useState } from 'react';
import { Recycle, Home, Users, MapPin } from 'lucide-react';
import { WastePlan } from '../../types';
import WasteCategoryCard from './WasteCategoryCard';

const WasteManagementPlan: React.FC = () => {
  const [formData, setFormData] = useState({
    location: '',
    householdSize: 1,
    hasCompostSpace: false,
    hasRecyclingAccess: true,
  });

  const [wastePlan, setWastePlan] = useState<WastePlan | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : type === 'number' 
          ? Number(value) 
          : value
    }));
  };

  const generateWastePlan = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would typically call an API with the form data
    // Here we'll generate a sample plan based on the inputs
    
    const plan: WastePlan = {
      recyclables: [
        'Paper (newspapers, magazines, mail)',
        'Cardboard boxes (flattened)',
        'Plastic bottles and containers (rinsed)',
        'Glass bottles and jars (rinsed)',
        'Metal cans (rinsed)'
      ],
      compostables: formData.hasCompostSpace 
        ? [
            'Fruit and vegetable scraps',
            'Coffee grounds and filters',
            'Tea bags',
            'Eggshells',
            'Yard trimmings'
          ]
        : [
            'Consider community composting options',
            'Look for food waste collection services'
          ],
      generalWaste: [
        'Non-recyclable plastics',
        'Soiled paper products',
        'Broken ceramics and glassware',
        'Disposable diapers',
        'Pet waste'
      ],
      specialDisposal: [
        'Batteries',
        'Electronics',
        'Paint and chemicals',
        'Medications',
        'Light bulbs'
      ],
      tips: [
        'Reduce single-use items like plastic bags and straws',
        'Buy in bulk to minimize packaging waste',
        'Use reusable containers for food storage',
        'Donate usable items instead of disposing them',
        'Consider composting food scraps to reduce landfill waste'
      ]
    };
    
    setWastePlan(plan);
    setShowPlan(true);
  };

  const resetForm = () => {
    setFormData({
      location: '',
      householdSize: 1,
      hasCompostSpace: false,
      hasRecyclingAccess: true,
    });
    setWastePlan(null);
    setShowPlan(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-emerald-600 p-4 text-white">
        <h2 className="text-xl font-semibold flex items-center">
          <Recycle className="mr-2" /> 
          Personalized Waste Management Plan
        </h2>
        <p className="text-emerald-100 mt-1">
          Get customized recommendations for your household
        </p>
      </div>
      
      {!showPlan ? (
        <form onSubmit={generateWastePlan} className="p-6">
          <div className="space-y-6">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <MapPin size={16} className="mr-1" /> Your Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                placeholder="City, State or ZIP"
              />
              <p className="text-xs text-gray-500 mt-1">
                This helps us provide location-specific recycling information
              </p>
            </div>
            
            {/* Household Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Users size={16} className="mr-1" /> Household Size
              </label>
              <select
                name="householdSize"
                value={formData.householdSize}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value={1}>1 person</option>
                <option value={2}>2 people</option>
                <option value={3}>3 people</option>
                <option value={4}>4 people</option>
                <option value={5}>5+ people</option>
              </select>
            </div>
            
            {/* Composting */}
            <div>
              <div className="flex items-center">
                <input
                  id="hasCompostSpace"
                  name="hasCompostSpace"
                  type="checkbox"
                  checked={formData.hasCompostSpace}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor="hasCompostSpace" className="ml-2 block text-sm text-gray-700 flex items-center">
                  <Home size={16} className="mr-1" /> I have space for composting
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-1 ml-6">
                Yard, balcony, or area for a compost bin
              </p>
            </div>
            
            {/* Recycling Access */}
            <div>
              <div className="flex items-center">
                <input
                  id="hasRecyclingAccess"
                  name="hasRecyclingAccess"
                  type="checkbox"
                  checked={formData.hasRecyclingAccess}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor="hasRecyclingAccess" className="ml-2 block text-sm text-gray-700 flex items-center">
                  <Recycle size={16} className="mr-1" /> I have access to recycling services
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-1 ml-6">
                Curbside pickup or recycling drop-off locations
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <button 
              type="submit" 
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Generate My Waste Plan
            </button>
          </div>
        </form>
      ) : (
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-1">Your Personalized Waste Management Plan</h3>
            <p className="text-sm text-gray-600">
              {formData.location ? `For ${formData.location}` : 'Based on your information'}, 
              household of {formData.householdSize} {formData.householdSize === 1 ? 'person' : 'people'}
            </p>
          </div>
          
          {wastePlan && (
            <div className="grid gap-4 md:grid-cols-2">
              <WasteCategoryCard 
                title="Recyclables"
                items={wastePlan.recyclables}
                iconColor="text-blue-500"
                bgColor="bg-blue-50"
              />
              
              <WasteCategoryCard 
                title="Compostables"
                items={wastePlan.compostables}
                iconColor="text-green-500"
                bgColor="bg-green-50"
              />
              
              <WasteCategoryCard 
                title="General Waste"
                items={wastePlan.generalWaste}
                iconColor="text-gray-500"
                bgColor="bg-gray-50"
              />
              
              <WasteCategoryCard 
                title="Special Disposal"
                items={wastePlan.specialDisposal}
                iconColor="text-amber-500"
                bgColor="bg-amber-50"
              />
            </div>
          )}
          
          {wastePlan && (
            <div className="mt-6 bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-800 mb-2">Recommended Tips</h4>
              <ul className="space-y-2 text-sm text-emerald-700">
                {wastePlan.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-emerald-100 p-1 rounded-full mr-2">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <button 
            onClick={resetForm}
            className="mt-6 w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default WasteManagementPlan;