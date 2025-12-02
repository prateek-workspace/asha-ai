import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Droplet, Thermometer, Activity, Mic, Check, AlertCircle, RefreshCw } from 'lucide-react';
import { format, addDays, isSameDay, subDays, differenceInDays, isWithinInterval, startOfDay } from 'date-fns';
import { VoiceVisualizer } from '../../components/ui/VoiceVisualizer';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useSettings } from '../../context/SettingsContext';

// Types for our local mock database
interface DailyLog {
  isPeriodStart: boolean;
  flow: 'Light' | 'Medium' | 'Heavy' | null;
  cramps: boolean;
  mood: string | null;
}

export const PeriodTracker = () => {
  const { t } = useSettings();
  const [today] = useState(startOfDay(new Date()));
  
  // State for the currently selected date on the calendar
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  
  // State for the last confirmed period start date (used for predictions)
  const [lastPeriodDate, setLastPeriodDate] = useState(subDays(today, 16)); 
  
  // "Database" of logs keyed by date string (YYYY-MM-DD)
  const [logs, setLogs] = useState<Record<string, DailyLog>>({});

  // Voice State
  const [isListening, setIsListening] = useState(false);
  const [voiceLog, setVoiceLog] = useState<string | null>(null);

  // Cycle Constants
  const cycleLength = 28;
  const periodDuration = 5;

  // --- Derived State for Predictions ---
  const nextPeriodDate = addDays(lastPeriodDate, cycleLength);
  const daysUntilNext = differenceInDays(nextPeriodDate, today);
  
  const fertileStartDate = addDays(lastPeriodDate, 12); // Approx ovulation - 2
  const fertileEndDate = addDays(lastPeriodDate, 16);   // Approx ovulation + 2
  
  // Helper to get log for a specific date
  // We use this for rendering, but for updates we should use the functional state updater
  const getLog = (date: Date, currentLogs = logs) => {
    const key = format(date, 'yyyy-MM-dd');
    return currentLogs[key] || { isPeriodStart: false, flow: null, cramps: false, mood: null };
  };

  // Helper to update log safely
  const updateLog = (date: Date, updates: Partial<DailyLog>) => {
    const key = format(date, 'yyyy-MM-dd');
    setLogs(prev => {
      const prevLog = prev[key] || { isPeriodStart: false, flow: null, cramps: false, mood: null };
      return {
        ...prev,
        [key]: { ...prevLog, ...updates }
      };
    });
  };

  // --- Handlers ---

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setVoiceLog(null); // Clear old voice logs when switching days
  };

  const togglePeriodStart = () => {
    const currentLog = getLog(selectedDate);
    const newState = !currentLog.isPeriodStart;
    
    updateLog(selectedDate, { isPeriodStart: newState });
    
    if (newState) {
      setLastPeriodDate(selectedDate); // Update predictions
      setVoiceLog(`Cycle updated! Next period: ${format(addDays(selectedDate, cycleLength), 'MMM d')}`);
    }
  };

  const toggleSymptom = (type: 'flow' | 'cramps' | 'mood') => {
    const currentLog = getLog(selectedDate);
    let updates: Partial<DailyLog> = {};

    if (type === 'flow') {
       // Cycle: Null -> Light -> Medium -> Heavy -> Null
       const flows: (DailyLog['flow'])[] = [null, 'Light', 'Medium', 'Heavy'];
       const currentIndex = flows.indexOf(currentLog.flow);
       const nextIndex = (currentIndex + 1) % flows.length;
       updates.flow = flows[nextIndex];
    } else if (type === 'cramps') {
       updates.cramps = !currentLog.cramps;
    } else if (type === 'mood') {
       updates.mood = currentLog.mood === 'Irritable' ? null : 'Irritable';
    }

    updateLog(selectedDate, updates);
  };

  const handleVoiceLog = () => {
    setIsListening(true);
    setVoiceLog(null);
    
    // Simulate processing
    setTimeout(() => {
      setIsListening(false);
      
      // Simulated logic: In a real app, this would parse the transcript
      // Here we simulate logging "Period Started" for Today
      const dateKey = format(today, 'yyyy-MM-dd');
      setLastPeriodDate(today);
      setSelectedDate(today);
      
      setLogs(prev => ({
        ...prev,
        [dateKey]: { 
            ...prev[dateKey],
            isPeriodStart: true, 
            flow: 'Medium', 
            cramps: false 
        }
      }));

      setVoiceLog("Logged: Period started today");
    }, 2000);
  };

  // --- Render Helpers ---
  
  const currentLog = getLog(selectedDate);
  
  // Generate calendar days (2 weeks back, 1 week forward)
  const calendarDays = [];
  for (let i = -14; i <= 7; i++) {
    calendarDays.push(addDays(today, i));
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Status & Calendar */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Prediction Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-400 to-purple-500"></div>
            <div className="flex justify-between items-start mb-4">
                 <h2 className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider font-bold">Cycle Prediction</h2>
                 <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold px-2 py-1 rounded-full">Regular</span>
            </div>
            
            <div className="py-4">
                <div className="text-7xl font-bold text-pink-600 dark:text-pink-400 mb-2 tracking-tight">
                    {daysUntilNext > 0 ? daysUntilNext : 0} 
                    <span className="text-2xl text-gray-400 font-normal ml-2">{t('days')}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                    {daysUntilNext > 0 ? t('nextPeriodIn') : "Period might be today!"}
                </p>
                <p className="text-sm text-gray-400 mt-1">Expected: <span className="text-gray-800 dark:text-gray-200 font-bold">{format(nextPeriodDate, 'MMMM d, yyyy')}</span></p>
            </div>
            
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <div className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border transition-colors",
                    isWithinInterval(today, { start: fertileStartDate, end: fertileEndDate })
                        ? "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700 ring-2 ring-purple-400 ring-offset-2 dark:ring-offset-gray-800"
                        : "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-900/30"
                )}>
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span> {t('fertileWindow')}
                </div>
                <div className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-bold flex items-center gap-2 border border-green-100 dark:border-green-900/30">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> {t('safeDays')}
                </div>
            </div>
        </div>

        {/* Calendar Strip */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800 dark:text-white text-lg">Timeline</h3>
                <CalendarIcon size={20} className="text-gray-400" />
            </div>
            
            {/* Scrollable Calendar */}
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
            {calendarDays.map((date, i) => {
                const isSelected = isSameDay(date, selectedDate);
                const isTodayDate = isSameDay(date, today);
                const dayNum = format(date, 'd');
                const dayName = format(date, 'EEE');
                
                const isFertile = isWithinInterval(date, { start: fertileStartDate, end: fertileEndDate });
                const log = getLog(date);
                
                // Determine if this day should be colored as a period day
                // It is a period day if explicitly logged, OR if it falls within the predicted duration of the LAST confirmed period
                // However, if the user explicitly unchecked period start for the start date of the predicted cycle, we should be careful.
                // For simplicity in this MVP: Explicit log > Prediction.
                const isPeriodDay = log.isPeriodStart || log.flow !== null || (date >= lastPeriodDate && date < addDays(lastPeriodDate, periodDuration));

                return (
                    <button 
                        key={i} 
                        onClick={() => handleDateClick(date)}
                        className={cn(
                            "flex flex-col items-center gap-2 p-2 rounded-2xl transition-all relative min-w-[60px]",
                            isSelected 
                                ? "bg-pink-50 dark:bg-pink-900/30 ring-2 ring-pink-500 ring-offset-2 dark:ring-offset-gray-800" 
                                : "hover:bg-gray-50 dark:hover:bg-gray-700"
                        )}
                    >
                        <span className="text-[10px] font-bold text-gray-400 uppercase">{dayName}</span>
                        <div className={cn(
                            "h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors relative",
                            isPeriodDay 
                                ? "bg-pink-600 text-white shadow-md" 
                                : isTodayDate 
                                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                                    : isFertile 
                                        ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800" 
                                        : "bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                        )}>
                            {dayNum}
                            {/* Dot indicators for logs */}
                            <div className="absolute -bottom-1 flex gap-0.5">
                                {log.flow && <div className="w-1 h-1 rounded-full bg-white border border-pink-600"></div>}
                                {log.cramps && <div className="w-1 h-1 rounded-full bg-orange-500"></div>}
                            </div>
                        </div>
                    </button>
                );
            })}
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-pink-600"></span> Period</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-200 dark:bg-purple-800"></span> Fertile</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white"></span> Today</div>
            </div>
        </div>
      </div>

      {/* Right Column: Actions & Logging */}
      <div className="lg:col-span-5 space-y-6">
        
        {/* Voice Log Action */}
        <div className="bg-gradient-to-br from-pink-50 to-white dark:from-gray-800 dark:to-gray-900 border border-pink-100 dark:border-gray-700 rounded-3xl p-8 text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-pink-100 dark:bg-pink-900/20 rounded-full opacity-50 blur-2xl"></div>
            
            <div className="mb-4 inline-flex p-4 bg-white dark:bg-gray-800 rounded-full text-pink-600 dark:text-pink-400 shadow-sm">
                <Mic size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{t('voiceLog')}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Say "Meri date aaj aayi hai" to log instantly.</p>
            
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
                className="mb-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2 w-full justify-center"
            >
                <Check size={16} /> {voiceLog}
            </motion.div>
            )}

            <button 
                onClick={handleVoiceLog}
                className="w-full bg-pink-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-pink-700 transition-all shadow-lg shadow-pink-200 dark:shadow-none active:scale-95"
            >
                {t('tapToSpeak')}
            </button>
        </div>

        {/* Manual Log Symptoms */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">{t('logSymptoms')}</h3>
                    <p className="text-xs text-gray-400">{format(selectedDate, 'MMMM d')}</p>
                </div>
                <button 
                    onClick={togglePeriodStart}
                    className={cn(
                        "text-xs px-4 py-2 rounded-full font-bold transition-all flex items-center gap-2",
                        currentLog.isPeriodStart 
                            ? "bg-pink-600 text-white shadow-md" 
                            : "bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/50"
                    )}
                >
                    {currentLog.isPeriodStart && <Check size={12} />}
                    {currentLog.isPeriodStart ? "Period Started" : t('periodStarted')}
                </button>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
                <button 
                    onClick={() => toggleSymptom('flow')}
                    className={cn(
                        "p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all group h-24 justify-center",
                        currentLog.flow
                            ? "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400"
                            : "bg-gray-50 dark:bg-gray-700 border-gray-100 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                    )}
                >
                    <Droplet className={cn(currentLog.flow ? "fill-current" : "")} size={24} />
                    <span className="text-xs font-bold">{currentLog.flow || t('heavyFlow')}</span>
                </button>
                
                <button 
                    onClick={() => toggleSymptom('cramps')}
                    className={cn(
                        "p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all group h-24 justify-center",
                        currentLog.cramps
                            ? "bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400"
                            : "bg-gray-50 dark:bg-gray-700 border-gray-100 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                    )}
                >
                    <Thermometer className={cn(currentLog.cramps ? "fill-current" : "")} size={24} />
                    <span className="text-xs font-bold">{t('cramps')}</span>
                </button>
                
                <button 
                    onClick={() => toggleSymptom('mood')}
                    className={cn(
                        "p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all group h-24 justify-center",
                        currentLog.mood === 'Irritable'
                            ? "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
                            : "bg-gray-50 dark:bg-gray-700 border-gray-100 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    )}
                >
                    <Activity className={cn(currentLog.mood === 'Irritable' ? "fill-current" : "")} size={24} />
                    <span className="text-xs font-bold">{t('mood')}</span>
                </button>
            </div>

            {/* Suggestion Box based on logs */}
            {currentLog.cramps && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/30 rounded-xl flex items-start gap-3"
                >
                    <AlertCircle size={18} className="text-orange-500 mt-0.5 shrink-0" />
                    <div>
                        <p className="text-sm font-bold text-orange-800 dark:text-orange-200">Cramps detected</p>
                        <p className="text-xs text-orange-600 dark:text-orange-300">Try using a hot water bag and drink ginger tea.</p>
                    </div>
                </motion.div>
            )}
        </div>
      </div>
    </div>
  );
};
