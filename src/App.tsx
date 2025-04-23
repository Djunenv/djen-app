import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CarbonFootprintCalculator from './components/carbon/CarbonFootprintCalculator';
import WasteManagementPlan from './components/waste/WasteManagementPlan';
import CarbonOffsetList from './components/offsets/CarbonOffsetList';
import ResourcesGrid from './components/education/ResourcesGrid';
import ChatInterface from './components/chat/ChatInterface';
import FloatingActionButton from './components/FloatingActionButton';
import ActionCard from './components/ActionCard';
import { ActionCard as ActionCardType } from './types';
import { BarChart2, Recycle, Leaf, BookOpen } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  
  const actionCards: ActionCardType[] = [
    {
      id: '1',
      title: 'Calculate Your Carbon Footprint',
      description: 'Measure your impact and get personalized tips to reduce emissions',
      iconName: 'chart',
      category: 'carbon',
      onClick: () => setActiveSection('carbon')
    },
    {
      id: '2',
      title: 'Get Your Waste Management Plan',
      description: 'Create a custom plan for recycling and reducing waste',
      iconName: 'recycle',
      category: 'waste',
      onClick: () => setActiveSection('waste')
    },
    {
      id: '3',
      title: 'Explore Carbon Offset Options',
      description: 'Learn about verified carbon offset projects and providers',
      iconName: 'leaf',
      category: 'offsets',
      onClick: () => setActiveSection('offsets')
    },
    {
      id: '4',
      title: 'Educational Resources',
      description: 'Discover guides, articles, and tools to deepen your knowledge',
      iconName: 'book',
      category: 'education',
      onClick: () => setActiveSection('education')
    }
  ];

  // Render active section content
  const renderSection = () => {
    switch (activeSection) {
      case 'carbon':
        return <CarbonFootprintCalculator />;
      case 'waste':
        return <WasteManagementPlan />;
      case 'offsets':
        return <CarbonOffsetList />;
      case 'education':
        return <ResourcesGrid />;
      default:
        return (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-emerald-600 p-6 text-white">
              <h2 className="text-2xl font-semibold">Welcome to Djen</h2>
              <p className="text-emerald-100 mt-2">
                Your personal AI assistant for reducing your environmental footprint
              </p>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What would you like to do today?</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {actionCards.map((card) => (
                    <ActionCard key={card.id} card={card} />
                  ))}
                </div>
              </div>
              
              <div className="bg-emerald-50 rounded-lg p-5 mb-8">
                <h3 className="text-emerald-800 font-medium mb-2">Did You Know?</h3>
                <p className="text-emerald-700 text-sm">
                  The average American produces about 16 tons of carbon dioxide each year, one of the highest rates in the world.
                  Small changes in daily habits can significantly reduce this number.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Start by asking a question</h3>
                <div 
                  className="border border-dashed border-emerald-300 rounded-lg p-4 cursor-pointer hover:bg-emerald-50 transition-colors"
                  onClick={toggleChat}
                >
                  <p className="text-gray-500 italic">
                    "How can I reduce my carbon footprint at home?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      <div className="flex pt-16">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="flex-1 p-4 lg:p-6">
          <div className="container mx-auto max-w-4xl">
            {renderSection()}
          </div>
        </main>
      </div>
      
      <FloatingActionButton onClick={toggleChat} isChatOpen={isChatOpen} />
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;