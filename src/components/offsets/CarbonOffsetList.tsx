import React from 'react';
import { ExternalLink, Check, Shield } from 'lucide-react';
import { CarbonOffsetProvider } from '../../types';

const CarbonOffsetList: React.FC = () => {
  // Sample offset providers
  const offsetProviders: CarbonOffsetProvider[] = [
    {
      name: 'Cool Effect',
      website: 'https://www.cooleffect.org',
      description: 'Supports a variety of carbon reduction projects around the world with strong verification standards.',
      projectTypes: ['Forestry', 'Renewable Energy', 'Community Projects'],
      certification: 'Gold Standard, VCS, CAR, ACR',
      priceRange: '$8-15 per ton CO₂e'
    },
    {
      name: 'Terrapass',
      website: 'https://terrapass.com',
      description: 'Provides carbon offsets for individuals and businesses through renewable energy and methane capture projects.',
      projectTypes: ['Landfill Gas Capture', 'Wind Energy', 'Farm Power'],
      certification: 'VCS, CAR, ACR',
      priceRange: '$11-13 per ton CO₂e'
    },
    {
      name: 'Gold Standard',
      website: 'https://www.goldstandard.org',
      description: 'Certified projects that reduce carbon emissions while contributing to sustainable development.',
      projectTypes: ['Clean Cookstoves', 'Water Purification', 'Reforestation'],
      certification: 'Gold Standard',
      priceRange: '$10-20 per ton CO₂e'
    },
    {
      name: 'Wren',
      website: 'https://www.wren.co',
      description: 'Subscription-based service that supports verified carbon offset projects with monthly updates.',
      projectTypes: ['Forest Protection', 'Tree Planting', 'Efficient Cookstoves'],
      certification: 'Various third-party verifications',
      priceRange: '$15-20 per ton CO₂e'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-emerald-600 p-4 text-white">
        <h2 className="text-xl font-semibold flex items-center">
          <Shield className="mr-2" /> 
          Carbon Offset Providers
        </h2>
        <p className="text-emerald-100 mt-1">
          Verified platforms to offset your carbon footprint
        </p>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">What are Carbon Offsets?</h3>
          <p className="text-gray-600">
            Carbon offsets fund projects that reduce greenhouse gas emissions to compensate for your own carbon footprint. 
            By purchasing offsets, you're investing in projects like renewable energy, methane capture, or reforestation 
            that otherwise wouldn't happen without funding.
          </p>
        </div>
        
        <div className="space-y-6">
          {offsetProviders.map((provider) => (
            <div key={provider.name} className="border rounded-lg overflow-hidden">
              <div className="bg-emerald-50 p-4 flex justify-between items-center">
                <h4 className="font-medium text-emerald-800">{provider.name}</h4>
                <a 
                  href={provider.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-800 flex items-center text-sm"
                >
                  Visit Website <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
              
              <div className="p-4">
                <p className="text-gray-700 mb-3">{provider.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-1">Project Types</h5>
                    <ul className="text-sm text-gray-600">
                      {provider.projectTypes.map((project, index) => (
                        <li key={index} className="flex items-start mb-1">
                          <Check size={14} className="text-emerald-500 mt-0.5 mr-1 flex-shrink-0" />
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="mb-2">
                      <h5 className="text-sm font-medium text-gray-700 mb-1">Certification</h5>
                      <p className="text-sm text-gray-600">{provider.certification}</p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-1">Price Range</h5>
                      <p className="text-sm text-gray-600">{provider.priceRange}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-2">How to Choose a Carbon Offset Provider</h4>
          <ul className="space-y-2 text-sm text-blue-700">
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded-full mr-2">•</span>
              <span><strong>Verification:</strong> Look for third-party verified projects (Gold Standard, Verified Carbon Standard)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded-full mr-2">•</span>
              <span><strong>Additionality:</strong> Ensure the project wouldn't happen without carbon offset funding</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded-full mr-2">•</span>
              <span><strong>Permanence:</strong> Check if carbon reductions are permanent rather than temporary</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded-full mr-2">•</span>
              <span><strong>Co-benefits:</strong> Consider projects that also provide social or environmental benefits</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarbonOffsetList;