import React, { useState } from 'react';
import { Calendar as CalendarIcon, Check, ChevronRight, Droplets, Info } from 'lucide-react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { format, addDays } from 'date-fns';

const PeriodTracker = () => {
    const [lastDate, setLastDate] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!lastDate) return;
        setLoading(true);

        try {
            const res = await axios.post('http://localhost:8000/api/track-period', {
                user_id: 'demo-user',
                last_period_date: lastDate
            });
            // Simulate network delay for effect
            setTimeout(() => {
                setPrediction(res.data);
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2 px-2">
                <div className="bg-purple-100 p-2 rounded-xl">
                    <CalendarIcon className="text-purple-600" size={24} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Period Tracker</h2>
                    <p className="text-xs text-gray-500">Cycle & Fertility</p>
                </div>
            </div>

            {!prediction ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-[2rem] shadow-lg border border-purple-50 relative overflow-hidden"
                >
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>

                    <h3 className="font-bold text-xl mb-6 text-center text-gray-800">Pichla period kab shuru hua tha?</h3>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="relative">
                            <input
                                type="date"
                                value={lastDate}
                                onChange={(e) => setLastDate(e.target.value)}
                                className="w-full p-4 bg-purple-50 border-2 border-purple-100 rounded-2xl text-center text-lg font-bold text-purple-900 focus:outline-none focus:border-purple-400 transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-purple-200 hover:shadow-purple-300 active:scale-95 transition-all flex justify-center items-center gap-2"
                        >
                            {loading ? (
                                <span className="animate-pulse">Calculating...</span>
                            ) : (
                                <>
                                    <Check size={20} /> Save Date
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-4"
                >
                    {/* Main Cycle Status */}
                    <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-purple-50 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
                        <div className="w-40 h-40 rounded-full border-[8px] border-purple-100 flex items-center justify-center mb-4 relative">
                            <div className="absolute inset-0 border-[8px] border-purple-500 rounded-full border-t-transparent border-l-transparent rotate-45"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-purple-600">12</span>
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-wide">Day</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">Follicular Phase</h3>
                        <p className="text-sm text-gray-500 mb-4">Low chance of pregnancy</p>

                        <div className="w-full grid grid-cols-2 gap-4 mt-2">
                            <div className="bg-purple-50 p-3 rounded-2xl">
                                <div className="text-xs text-gray-500 mb-1">Next Period</div>
                                <div className="font-bold text-purple-700">{format(new Date(prediction.next_period), 'dd MMM')}</div>
                            </div>
                            <div className="bg-indigo-50 p-3 rounded-2xl">
                                <div className="text-xs text-gray-500 mb-1">Fertile</div>
                                <div className="font-bold text-indigo-700">{prediction.fertile_window}</div>
                            </div>
                        </div>
                    </div>

                    {/* Symptom Log Prompt */}
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-5 rounded-3xl text-white flex justify-between items-center shadow-lg shadow-pink-200">
                        <div>
                            <h4 className="font-bold">Aaj kaisa lag raha hai?</h4>
                            <p className="text-pink-100 text-sm">Log symptoms for better predictions</p>
                        </div>
                        <button className="bg-white/20 p-3 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                            <ChevronRight />
                        </button>
                    </div>

                    <button
                        onClick={() => setPrediction(null)}
                        className="text-center text-gray-400 text-sm font-medium hover:text-purple-600 transition-colors"
                    >
                        Edit Last Period Date
                    </button>
                </motion.div>
            )}

            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex gap-3 items-start">
                <Info className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-blue-800 leading-relaxed">
                    <span className="font-bold">Tip:</span> Agar period 35 din se zyada late ho, to doctor se salah lein.
                </p>
            </div>
        </div>
    );
};

export default PeriodTracker;
