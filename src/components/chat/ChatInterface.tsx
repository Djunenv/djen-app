import React, { useState, useRef, useEffect } from "react";
import { Send, Mic, X } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { Message } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { generateResponse } from "../../services/chatService";

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm Djen, your AI assistant for carbon footprint and waste management. How can I help you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: uuidv4(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await generateResponse(input);

      const assistantMessage: Message = {
        id: uuidv4(),
        content: response,
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error generating response:", error);

      const errorMessage: Message = {
        id: uuidv4(),
        content:
          "I'm sorry, I couldn't process your request. Please try again.",
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div
      className={`fixed bottom-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "translate-y-full"
      } sm:right-4 sm:bottom-4 sm:max-w-sm sm:translate-y-0 ${
        isOpen ? "sm:scale-100" : "sm:scale-0"
      } sm:origin-bottom-right`}
    >
      <div className="bg-white rounded-t-lg shadow-xl sm:rounded-lg flex flex-col h-[500px] w-full sm:w-[350px]">
        {/* Chat header */}
        <div className="flex items-center justify-between p-3 bg-emerald-600 text-white rounded-t-lg">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-white font-medium">E</span>
            </div>
            <h3 className="ml-2 font-medium">EcoGuide Assistant</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-emerald-500 rounded-full"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-500">
              <div
                className="bg-gray-200 h-2 w-2 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="bg-gray-200 h-2 w-2 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="bg-gray-200 h-2 w-2 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <form onSubmit={handleSubmit} className="p-3 border-t">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about carbon footprint, waste..."
              className="flex-1 py-2 px-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white p-2 rounded-r-lg hover:bg-emerald-700"
              disabled={!input.trim()}
            >
              <Send size={18} />
            </button>
            <button
              type="button"
              className="ml-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200"
              aria-label="Voice input"
            >
              <Mic size={18} className="text-gray-600" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
