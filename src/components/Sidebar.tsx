import React from 'react';
import { Leaf, BarChart2, Recycle, Info, User, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { id: 'carbon', icon: <BarChart2 size={20} />, label: 'Carbon Footprint' },
    { id: 'offsets', icon: <Leaf size={20} />, label: 'Carbon Offsets' },
    { id: 'waste', icon: <Recycle size={20} />, label: 'Waste Management' },
    { id: 'education', icon: <Info size={20} />, label: 'Learn More' },
    { id: 'profile', icon: <User size={20} />, label: 'My Profile' },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden" 
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-auto`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <Leaf className="h-6 w-6 text-emerald-600" />
            <h2 className="ml-2 text-lg font-medium text-gray-800">Djen</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        
        <nav className="mt-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className="flex items-center px-6 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                >
                  <span className="mr-3 text-emerald-500">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="bg-emerald-50 rounded-lg p-3">
            <p className="text-sm text-emerald-800">
              "The greatest threat to our planet is the belief that someone else will save it."
            </p>
            <p className="text-xs text-emerald-600 mt-2">— Robert Swan</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;