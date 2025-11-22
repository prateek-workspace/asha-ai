import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, AlertCircle, User, Bot, StopCircle } from 'lucide-react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const SymptomChecker = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Namaste! Main ASHA AI hoon. Aapko kya pareshani ho rahi hai? Khul kar batayein.' }
    ]);
    const [isRecording, setIsRecording] = useState(false);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:8000/api/symptom-check', {
                text_input: input,
                language: 'hi'
            });

            const botMsg = {
                role: 'bot',
                text: response.data.advice,
                isRedFlag: response.data.red_flag
            };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error("Error fetching advice:", error);
            setMessages(prev => [...prev, { role: 'bot', text: 'Maaf kijiye, abhi sampark nahi ho pa raha hai. Kripya thodi der baad koshish karein.' }]);
        } finally {
            setLoading(false);
        }
    };

    const toggleRecording = () => {
        setIsRecording(!isRecording);
        if (!isRecording) {
            // Simulate listening
            setTimeout(() => {
                setInput("Mujhe pichle 2 din se tez pet dard ho raha hai");
                setIsRecording(false);
            }, 3000);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-180px)]">
            <div className="flex items-center gap-3 mb-4 px-2">
                <div className="bg-pink-100 p-2 rounded-xl">
                    <Mic className="text-pink-600" size={24} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Symptom Checker</h2>
                    <p className="text-xs text-gray-500">AI Health Assistant</p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto rounded-3xl bg-white border border-gray-100 shadow-sm p-4 mb-4 space-y-6 relative no-scrollbar">
                {messages.map((msg, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={idx}
                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-pink-100'}`}>
                            {msg.role === 'user' ? <User size={16} className="text-gray-600" /> : <Bot size={16} className="text-pink-600" />}
                        </div>

                        <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${msg.role === 'user'
                                ? 'bg-gray-800 text-white rounded-tr-sm'
                                : 'bg-pink-50 text-gray-800 rounded-tl-sm border border-pink-100'
                            }`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                            {msg.isRedFlag && (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="mt-3 flex items-start gap-2 text-red-600 bg-red-50 p-3 rounded-xl border border-red-100"
                                >
                                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                                    <span className="text-xs font-bold">Yeh gambhir ho sakta hai. Kripya doctor se milein.</span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                ))}

                {loading && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                            <Bot size={16} className="text-pink-600" />
                        </div>
                        <div className="bg-pink-50 p-4 rounded-2xl rounded-tl-sm border border-pink-100 flex gap-1">
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />

                <AnimatePresence>
                    {isRecording && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-3xl"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-20"></div>
                                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 rounded-full shadow-xl relative z-10">
                                    <Mic size={40} className="text-white" />
                                </div>
                            </div>
                            <p className="mt-6 text-gray-600 font-medium animate-pulse">Sun raha hoon...</p>
                            <button
                                onClick={() => setIsRecording(false)}
                                className="mt-8 px-6 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                                Rokein (Stop)
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex gap-2 items-center bg-white p-2 rounded-full shadow-lg border border-gray-100">
                <button
                    onClick={toggleRecording}
                    className={`p-3 rounded-full transition-all ${isRecording ? 'bg-red-50 text-red-500' : 'bg-pink-50 text-pink-600 hover:bg-pink-100'}`}
                >
                    {isRecording ? <StopCircle size={24} /> : <Mic size={24} />}
                </button>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Yahan likhein..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-400"
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="p-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full shadow-md hover:shadow-lg disabled:opacity-50 disabled:shadow-none transition-all"
                >
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
};

export default SymptomChecker;
