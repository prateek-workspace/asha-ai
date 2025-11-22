import React, { useState } from 'react';
import { Calendar as CalendarIcon, Droplet, Thermometer, Activity, Mic, Check } from 'lucide-react';
import { format, addDays, isSameDay, subDays } from 'date-fns';
import { VoiceVisualizer } from '../../components/ui/VoiceVisualizer';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export const PeriodTracker = () => {
  const [today] = useState(new Date());
  const [lastPeriodDate, setLastPeriodDate] = useState(subDays(today, 16)); // Mock initial state
  const [isListening, setIsListening] = useState(false);
  const [voiceLog, setVoiceLog] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  
  // Simple prediction logic
  const cycleLength = 28;
  const nextPeriod = addDays(lastPeriodDate, cycleLength);
  const daysUntilNext = Math.ceil((nextPeriod.getTime() - today.getTime()) / (1000 * 3600 * 24));

  const handleVoiceLog = () => {
    setIsListening(true);
    setVoiceLog(null);
    setTimeout(() => {
      setIsListening(false);
      setVoiceLog("Logged: Period started today");
      setLastPeriodDate(today); // Update logic
    }, 2000);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    // In a real app, we'd fetch logs for this date
  };

  const logPeriodStart = () => {
    setLastPeriodDate(selectedDate);
    setVoiceLog(`Period logged for ${format(selectedDate, 'MMM d')}`);
  };

  // Generate calendar strip
  const days = [];
  for (let i = -3; i <= 3; i++) {
    days.push(addDays(today, i));
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Status & Calendar */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-400 to-purple-500"></div>
            <div className="flex justify-between items-start mb-4">
                 <h2 className="text-gray-500 text-xs uppercase tracking-wider font-bold">Cycle Prediction</h2>
                 <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-full">Regular</span>
            </div>
            
            <div className="py-4">
                <div className="text-7xl font-bold text-pink-600 mb-2 tracking-tight">{daysUntilNext} <span className="text-2xl text-gray-400 font-normal">days</span></div>
                <p className="text-gray-500 font-medium">until your next period</p>
                <p className="text-sm text-gray-400 mt-1">Expected: <span className="text-gray-800 font-bold">{format(nextPeriod, 'MMMM d, yyyy')}</span></p>
            </div>
            
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <div className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-bold flex items-center gap-2 border border-purple-100">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span> Fertile Window
                </div>
                <div className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold flex items-center gap-2 border border-green-100">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> Safe Days
                </div>
            </div>
        </div>

        {/* Calendar Strip */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800 text-lg">This Week</h3>
                <CalendarIcon size={20} className="text-gray-400" />
            </div>
            <div className="grid grid-cols-7 gap-2">
            {days.map((date, i) => {
                const isSelected = isSameDay(date, selectedDate);
                const isTodayDate = isSameDay(date, today);
                const dayNum = format(date, 'd');
                const dayName = format(date, 'EEE');
                
                // Mock fertile calculation relative to today for visual
                const diff = (date.getTime() - today.getTime()) / (1000 * 3600 * 24);
                const isFertile = diff >= 1 && diff <= 3;

                return (
                    <button 
                        key={i} 
                        onClick={() => handleDateClick(date)}
                        className={cn(
                            "flex flex-col items-center gap-2 p-2 rounded-2xl transition-all relative",
                            isSelected ? "bg-pink-50 ring-2 ring-pink-500 ring-offset-2" : "hover:bg-gray-50"
                        )}
                    >
                        <span className="text-[10px] font-bold text-gray-400 uppercase">{dayName}</span>
                        <div className={cn(
                            "h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors",
                            isTodayDate ? "bg-pink-600 text-white shadow-md" : 
                            isFertile ? "bg-purple-50 text-purple-600 border border-purple-200" : "bg-white border border-gray-100 text-gray-600"
                        )}>
                            {dayNum}
                        </div>
                        {isFertile && <div className="h-1.5 w-1.5 bg-purple-500 rounded-full"></div>}
                    </button>
                );
            })}
            </div>
        </div>
      </div>

      {/* Right Column: Actions & Logging */}
      <div className="lg:col-span-5 space-y-6">
        {/* Voice Log Action */}
        <div className="bg-gradient-to-br from-pink-50 to-white border border-pink-100 rounded-3xl p-8 text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-pink-100 rounded-full opacity-50 blur-2xl"></div>
            
            <div className="mb-4 inline-flex p-4 bg-white rounded-full text-pink-600 shadow-sm">
                <Mic size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Voice Log</h3>
            <p className="text-gray-500 mb-6 text-sm">Say "Meri date aaj aayi hai" to log instantly.</p>
            
            <AnimatePresence>
            {isListening && (
                <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mb-4"
                >
                <VoiceVisualizer isListening={isListening} />
                </motion.div>
            )}
            </AnimatePresence>

            {voiceLog && (
                <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 bg-green-100 text-green-800 px-4 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2 w-full justify-center"
            >
                <Check size={16} /> {voiceLog}
            </motion.div>
            )}

            <button 
                onClick={handleVoiceLog}
                className="w-full bg-pink-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-pink-700 transition-all shadow-lg shadow-pink-200 active:scale-95"
            >
                Tap to Speak
            </button>
        </div>

        {/* Manual Log Symptoms */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">Log for {format(selectedDate, 'MMM d')}</h3>
                <button 
                    onClick={logPeriodStart}
                    className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-bold hover:bg-pink-200 transition-colors"
                >
                    Period Started?
                </button>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
                <button className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex flex-col items-center gap-2 hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-all group h-24 justify-center">
                    <Droplet className="text-gray-400 group-hover:text-red-500" size={24} />
                    <span className="text-xs font-bold text-gray-600 group-hover:text-red-700">Heavy Flow</span>
                </button>
                <button className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex flex-col items-center gap-2 hover:bg-orange-50 hover:border-orange-100 hover:text-orange-600 transition-all group h-24 justify-center">
                    <Thermometer className="text-gray-400 group-hover:text-orange-500" size={24} />
                    <span className="text-xs font-bold text-gray-600 group-hover:text-orange-700">Cramps</span>
                </button>
                <button className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex flex-col items-center gap-2 hover:bg-blue-50 hover:border-blue-100 hover:text-blue-600 transition-all group h-24 justify-center">
                    <Activity className="text-gray-400 group-hover:text-blue-500" size={24} />
                    <span className="text-xs font-bold text-gray-600 group-hover:text-blue-700">Mood</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
