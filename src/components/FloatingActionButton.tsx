import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
  isChatOpen: boolean;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick, isChatOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-4 right-4 z-40 flex items-center justify-center p-4 rounded-full shadow-lg transition-all transform ${
        isChatOpen 
          ? 'bg-gray-700 hover:bg-gray-800 scale-90' 
          : 'bg-emerald-600 hover:bg-emerald-700 scale-100'
      }`}
      aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </button>
  );
};

export default FloatingActionButton;