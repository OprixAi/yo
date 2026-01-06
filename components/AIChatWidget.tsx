import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Loader, Bot } from 'lucide-react';

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hello. I am the Oprix Enterprise Assistant. How can I help optimize your workflow today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY; // In a real app, this would be handled securely
      
      if (!apiKey) {
        // Fallback simulation if no key provided in env
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'model', text: "I'm currently running in demo mode. To enable full generative capabilities, please configure a valid Gemini API key in the environment." }]);
          setIsLoading(false);
        }, 1000);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
            systemInstruction: "You are an AI assistant for Oprix AI, an enterprise SAP optimization company. Keep answers professional, concise, and business-focused.",
        }
      });
      
      const text = response.text || "I apologize, I couldn't process that request.";
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection to enterprise node failed. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-oprix-accent hover:bg-oprix-accentHover text-white p-4 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-110"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="w-80 md:w-96 glass-panel rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-oprix-accent/30 animate-in slide-in-from-bottom-5 duration-300">
          <div className="p-4 bg-oprix-accent/10 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-oprix-accent" />
              <span className="font-semibold text-sm">Oprix Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-oprix-accent text-white rounded-br-none' 
                    : 'bg-white/10 text-gray-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-2">
                  <Loader className="w-4 h-4 animate-spin text-oprix-accent" />
                  <span className="text-xs text-gray-400">Processing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-black/60 border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about SAP optimization..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-oprix-accent/50 text-white placeholder-gray-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-oprix-accent hover:bg-oprix-accent/10 rounded-lg disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
