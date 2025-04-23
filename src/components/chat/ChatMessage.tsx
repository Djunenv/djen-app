import React from 'react';
import { Message } from '../../types';
import { Leaf } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAssistant = message.sender === 'assistant';

  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      {isAssistant && (
        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center mr-2 flex-shrink-0">
          <Leaf className="h-4 w-4 text-emerald-600" />
        </div>
      )}
      
      <div 
        className={`max-w-[80%] p-3 rounded-lg ${
          isAssistant 
            ? 'bg-gray-100 text-gray-800' 
            : 'bg-emerald-600 text-white'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <div className={`text-xs mt-1 ${isAssistant ? 'text-gray-500' : 'text-emerald-100'}`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {!isAssistant && (
        <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center ml-2 flex-shrink-0">
          <span className="text-white text-xs font-medium">You</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;