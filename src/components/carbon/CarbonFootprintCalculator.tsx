import React, { useState } from 'react';
import { BarChart, Bike, Home, ShoppingBag, Utensils } from 'lucide-react';
import { CarbonFootprint } from '../../types';
import CarbonChart from './CarbonChart';

const CarbonFootprintCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    transportationMiles: 0,
    transportationType: 'car',
    homeEnergy: 'standard',
    homeSqFt: 0,
    dietType: 'omnivore',
    shoppingFrequency: 'average',
  });

  const [footprint, setFootprint] = useState<CarbonFootprint | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateFootprint = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a simplified calculation for demo purposes
    // In a real app, these would be much more sophisticated
    const transportation = formData.transportationMiles * 
      (formData.transportationType === 'car' ? 0.4 : 
       formData.transportationType === 'bus' ? 0.2 : 
       formData.transportationType === 'train' ? 0.1 : 0.05);
       
    const home = formData.homeSqFt * 
      (formData.homeEnergy === 'standard' ? 0.2 : 
       formData.homeEnergy === 'efficient' ? 0.1 : 0.05);
       
    const food = 
      formData.dietType === 'omnivore' ? 1500 : 
      formData.dietType === 'pescatarian' ? 1200 : 
      formData.dietType === 'vegetarian' ? 900 : 600;
      
    const goods = 
      formData.shoppingFrequency === 'frequent' ? 1000 : 
      formData.shoppingFrequency === 'average' ? 700 : 400;
      
    const services = 600; // Average services footprint
    
    const total = transportation + home + food + goods + services;
    
    setFootprint({
      transportation,
      home,
      food,
      goods,
      services,
      total
    });
    
    setShowResults(true);
  };

  const resetCalculator = () => {
    setFormData({
      transportationMiles: 0,
      transportationType: 'car',
      homeEnergy: 'standard',
      homeSqFt: 0,
      dietType: 'omnivore',
      shoppingFrequency: 'average',
    });
    setFootprint(null);
    setShowResults(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-emerald-600 p-4 text-white">
        <h2 className="text-xl font-semibold flex items-center">
          <BarChart className="mr-2" /> 
          Carbon Footprint Calculator
        </h2>
        <p className="text-emerald-100 mt-1">
          Estimate your annual carbon emissions in kg CO2e
        </p>
      </div>
      
      {!showResults ? (
        <form onSubmit={calculateFootprint} className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Transportation Section */}
            <div className="space-y-4">
              <div className="flex items-center text-emerald-700 font-medium">
                <Bike className="mr-2" size={20} />
                <h3>Transportation</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weekly miles traveled
                </label>
                <input
                  type="number"
                  name="transportationMiles"
                  value={formData.transportationMiles}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="0"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Primary transportation type
                </label>
                <select
                  name="transportationType"
                  value={formData.transportationType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="car">Car</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                  <option value="bike">Bike/Walk</option>
                </select>
              </div>
            </div>
            
            {/* Home Energy Section */}
            <div className="space-y-4">
              <div className="flex items-center text-emerald-700 font-medium">
                <Home className="mr-2" size={20} />
                <h3>Home Energy</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Home square footage
                </label>
                <input
                  type="number"
                  name="homeSqFt"
                  value={formData.homeSqFt}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="0"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Energy efficiency
                </label>
                <select
                  name="homeEnergy"
                  value={formData.homeEnergy}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="standard">Standard</option>
                  <option value="efficient">Energy Efficient</option>
                  <option value="renewable">Renewable Energy</option>
                </select>
              </div>
            </div>
            
            {/* Diet Section */}
            <div className="space-y-4">
              <div className="flex items-center text-emerald-700 font-medium">
                <Utensils className="mr-2" size={20} />
                <h3>Diet</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dietary preference
                </label>
                <select
                  name="dietType"
                  value={formData.dietType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="omnivore">Omnivore (Regular meat)</option>
                  <option value="pescatarian">Pescatarian</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </div>
            </div>
            
            {/* Shopping Section */}
            <div className="space-y-4">
              <div className="flex items-center text-emerald-700 font-medium">
                <ShoppingBag className="mr-2" size={20} />
                <h3>Shopping Habits</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shopping frequency
                </label>
                <select
                  name="shoppingFrequency"
                  value={formData.shoppingFrequency}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="minimal">Minimal (Essentials only)</option>
                  <option value="average">Average</option>
                  <option value="frequent">Frequent (Regular purchases)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <button 
              type="submit" 
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Calculate My Footprint
            </button>
          </div>
        </form>
      ) : (
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your Annual Carbon Footprint</h3>
            <div className="text-3xl font-bold text-emerald-700 flex items-baseline">
              {Math.round(footprint?.total || 0).toLocaleString()} 
              <span className="text-sm ml-1 text-gray-600">kg CO₂e</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              This is {footprint && footprint.total > 5000 ? 'above' : 'below'} the global average of ~5,000 kg CO₂e per person.
            </p>
          </div>
          
          {footprint && <CarbonChart footprint={footprint} />}
          
          <div className="mt-8 bg-emerald-50 p-4 rounded-lg">
            <h4 className="font-medium text-emerald-800 mb-2">Recommendations to Reduce Your Footprint</h4>
            <ul className="space-y-2 text-sm text-emerald-700">
              {footprint && footprint.transportation > 1000 && (
                <li className="flex items-start">
                  <span className="bg-emerald-100 p-1 rounded-full mr-2">•</span>
                  <span>Consider carpooling, public transit, or combining trips to reduce transportation emissions.</span>
                </li>
              )}
              {footprint && footprint.home > 1000 && (
                <li className="flex items-start">
                  <span className="bg-emerald-100 p-1 rounded-full mr-2">•</span>
                  <span>Improve home energy efficiency with better insulation and energy-efficient appliances.</span>
                </li>
              )}
              {footprint && footprint.food > 1000 && (
                <li className="flex items-start">
                  <span className="bg-emerald-100 p-1 rounded-full mr-2">•</span>
                  <span>Reduce meat consumption and food waste to lower your dietary carbon impact.</span>
                </li>
              )}
              {footprint && footprint.goods > 800 && (
                <li className="flex items-start">
                  <span className="bg-emerald-100 p-1 rounded-full mr-2">•</span>
                  <span>Choose durable products and consider second-hand items to minimize shopping emissions.</span>
                </li>
              )}
            </ul>
          </div>
          
          <button 
            onClick={resetCalculator}
            className="mt-6 w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprintCalculator;