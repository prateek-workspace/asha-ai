import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, User, Bot, Volume2, StopCircle } from 'lucide-react';
import { VoiceVisualizer } from '../../components/ui/VoiceVisualizer';
import { SYMPTOM_SCENARIOS } from '../../lib/mockData';
import { motion, AnimatePresence } from 'framer-motion';

export const SymptomChecker = () => {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    { id: 1, type: 'ai', text: "Namaste! Main ASHA hoon. Aap kaisa mehsoos kar rahi hain? (Hello! I am ASHA. How are you feeling?)", audio: true }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const processInput = (text: string) => {
    // Simple keyword matching for mock logic
    const lowerText = text.toLowerCase();
    let matchedScenario = SYMPTOM_SCENARIOS.find(s => 
      lowerText.includes(s.trigger.replace('_', ' ')) || 
      s.userAudioText.toLowerCase().includes(lowerText)
    );

    // Fallback if no match
    if (!matchedScenario) {
        // Randomly pick one if the input is generic like "hello" or "help"
        if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.length < 5) {
             addMessage('ai', "Namaste! Batayein kya takleef hai? (Hello! Tell me what is wrong?)");
             return;
        }
        matchedScenario = SYMPTOM_SCENARIOS[Math.floor(Math.random() * SYMPTOM_SCENARIOS.length)];
    }

    setTimeout(() => {
      addMessage('ai', matchedScenario!.aiResponse.hi);
    }, 1000);
  };

  const handleVoiceInput = () => {
    if (isListening) {
        setIsListening(false);
        return;
    }
    setIsListening(true);
    // Simulate listening duration
    setTimeout(() => {
      setIsListening(false);
      const scenario = SYMPTOM_SCENARIOS[Math.floor(Math.random() * SYMPTOM_SCENARIOS.length)];
      addMessage('user', scenario.userAudioText);
      setTimeout(() => {
        addMessage('ai', scenario.aiResponse.hi);
      }, 1500);
    }, 3000);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    addMessage('user', inputText);
    const textToProcess = inputText;
    setInputText("");
    processInput(textToProcess);
  };

  const addMessage = (type: 'user' | 'ai', text: string) => {
    setMessages(prev => [...prev, { id: Date.now(), type, text }]);
  };

  return (
    <div className="h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] flex flex-col w-full max-w-5xl mx-auto bg-white md:rounded-3xl shadow-xl overflow-hidden border border-gray-200">
      
      {/* Chat Header */}
      <div className="bg-pink-600 p-4 md:px-6 text-white flex items-center justify-between shadow-md z-10">
        <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-pink-600 shadow-sm">
                <Bot size={28} />
            </div>
            <div>
                <h2 className="font-bold text-lg leading-tight">ASHA Assistant</h2>
                <p className="text-xs text-pink-100 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    Online • Private & Secure
                </p>
            </div>
        </div>
        <button className="text-xs bg-pink-700 hover:bg-pink-800 px-3 py-1.5 rounded-full transition-colors">
            Clear Chat
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 bg-gray-50 scroll-smooth">
        {messages.map((msg) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={msg.id} 
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] md:max-w-[60%] rounded-2xl p-5 shadow-sm relative group ${
              msg.type === 'user' 
                ? 'bg-pink-600 text-white rounded-tr-none' 
                : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
            }`}>
              <div className={`flex items-center gap-2 mb-2 text-[10px] uppercase tracking-wider font-bold ${msg.type === 'user' ? 'text-pink-200' : 'text-gray-400'}`}>
                {msg.type === 'user' ? <User size={12} /> : <Bot size={12} />}
                <span>{msg.type === 'user' ? 'You' : 'ASHA AI'}</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed">{msg.text}</p>
              {msg.type === 'ai' && (
                <button className="mt-3 p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors" title="Play Audio">
                  <Volume2 size={18} />
                </button>
              )}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-white border-t border-gray-100">
        <AnimatePresence>
          {isListening && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mb-4 bg-pink-50 rounded-xl p-4 text-center border border-pink-100"
            >
              <p className="text-pink-600 text-sm font-bold mb-2 animate-pulse">Listening to you...</p>
              <VoiceVisualizer isListening={isListening} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-3 items-center max-w-4xl mx-auto">
          <button 
            onClick={handleVoiceInput}
            className={`h-14 w-14 rounded-full flex items-center justify-center transition-all hover:scale-105 flex-shrink-0 ${isListening ? 'bg-red-500 shadow-red-200 animate-pulse' : 'bg-pink-600 shadow-pink-200'} text-white shadow-lg`}
            title={isListening ? "Stop Listening" : "Speak"}
          >
            {isListening ? <StopCircle size={28} /> : <Mic size={28} />}
          </button>
          <div className="flex-1 relative">
            <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type symptoms (e.g., 'stomach pain')..."
                className="w-full bg-gray-100 rounded-full pl-6 pr-14 h-14 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all border border-transparent focus:border-pink-200 text-gray-800 placeholder:text-gray-400"
            />
            <button 
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="absolute right-2 top-2 h-10 w-10 bg-white rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-50 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
