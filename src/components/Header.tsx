import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-emerald-600" />
          <h1 className="ml-2 text-xl font-semibold text-gray-800">Djen</h1>
        </div>
        
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors lg:hidden"
          aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#carbon" className="text-gray-700 hover:text-emerald-600 transition-colors">
            Carbon Footprint
          </a>
          <a href="#offsets" className="text-gray-700 hover:text-emerald-600 transition-colors">
            Carbon Offsets
          </a>
          <a href="#waste" className="text-gray-700 hover:text-emerald-600 transition-colors">
            Waste Management
          </a>
          <a href="#profile" className="text-gray-700 hover:text-emerald-600 transition-colors">
            My Profile
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;