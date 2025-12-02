import React, { useState } from 'react';
import { NUTRITION_PLAN } from '../../lib/mockData';
import { ChevronLeft, ChevronRight, CheckCircle, Info, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useSettings } from '../../context/SettingsContext';

export const NutritionPlanner = () => {
  const { t } = useSettings();
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [tabletTaken, setTabletTaken] = useState(false);
  const currentDay = NUTRITION_PLAN[currentDayIndex];

  const nextDay = () => {
    setCurrentDayIndex((prev) => (prev + 1) % 7);
    setTabletTaken(false); 
  };
  
  const prevDay = () => {
    setCurrentDayIndex((prev) => (prev - 1 + 7) % 7);
    setTabletTaken(false);
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
        
        <div className="relative z-10">
            <h2 className="text-3xl font-bold">{t('diet')}</h2>
            <p className="opacity-90 mt-1 text-green-50">Fight Anemia, Stay Strong</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 min-w-[220px] border border-white/20 relative z-10">
          <div className="bg-white text-green-700 h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm">Hb</div>
          <div>
            <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Hemoglobin</p>
            <div className="flex items-baseline gap-1">
                <p className="font-bold text-xl">10.5</p>
                <span className="text-sm font-normal opacity-80">g/dL</span>
            </div>
            <span className="text-[10px] bg-yellow-400 text-yellow-900 px-1.5 py-0.5 rounded font-bold">Mild Anemia</span>
          </div>
        </div>
      </div>

      {/* Day Navigator */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
        <button onClick={prevDay} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"><ChevronLeft size={24} /></button>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{currentDay.day}</h3>
          <p className="text-green-600 dark:text-green-400 font-medium">{currentDay.localName}</p>
        </div>
        <button onClick={nextDay} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"><ChevronRight size={24} /></button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Meals Column */}
        <div className="lg:col-span-2">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-400 rounded-full"></span>
                Recommended Meals
            </h3>
            <AnimatePresence mode='wait'>
            <motion.div 
                key={currentDay.day}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {currentDay.meals.map((meal, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex gap-4 items-start group">
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-inner transition-transform group-hover:scale-110 ${meal.type === 'Breakfast' ? 'bg-orange-50 dark:bg-orange-900/20' : 'bg-green-50 dark:bg-green-900/20'}`}>
                    {meal.type === 'Breakfast' ? '🌅' : '🍛'}
                    </div>
                    <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">{meal.type}</p>
                    <h4 className="font-bold text-lg text-gray-800 dark:text-white leading-tight">{meal.item}</h4>
                    <p className="text-xs text-green-700 dark:text-green-400 mt-2 flex items-center gap-1 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-md w-fit font-medium border border-green-100 dark:border-green-900/30">
                        <Info size={10} /> {meal.benefit}
                    </p>
                    </div>
                </div>
                ))}
            </motion.div>
            </AnimatePresence>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
            {/* IFA Tablet Reminder */}
            {currentDay.ifaTablet ? (
                <div className={cn(
                    "border rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-sm transition-all duration-500",
                    tabletTaken ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/30" : "bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900/30"
                )}>
                    <div className={cn(
                        "h-16 w-16 rounded-full flex items-center justify-center shadow-sm transition-colors",
                        tabletTaken ? "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400" : "bg-white dark:bg-red-900/40 text-red-500 dark:text-red-400"
                    )}>
                         {tabletTaken ? <Check size={32} /> : <span className="text-3xl">💊</span>}
                    </div>
                    <div>
                        <h4 className={cn("font-bold text-lg", tabletTaken ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300")}>
                            {tabletTaken ? "Tablet Taken!" : "Iron (IFA) Tablet"}
                        </h4>
                        <p className={cn("text-sm mt-1", tabletTaken ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400")}>
                            {tabletTaken ? "Great job! Keep it up." : "Take after lunch with lemon water."}
                        </p>
                    </div>
                    <button 
                        onClick={() => setTabletTaken(!tabletTaken)}
                        className={cn(
                            "w-full py-3 rounded-xl font-bold transition-all active:scale-95",
                            tabletTaken ? "bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800" : "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-200 dark:shadow-none"
                        )}
                    >
                        {tabletTaken ? "Undo" : t('markTaken')}
                    </button>
                </div>
            ) : (
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center text-gray-500 dark:text-gray-400">
                    <p className="font-medium">No IFA tablet required today.</p>
                    <p className="text-xs mt-1">Relax and eat healthy!</p>
                </div>
            )}

            {/* Local Food Tips */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <h3 className="font-bold text-gray-800 dark:text-white mb-4 text-sm uppercase tracking-wider">Local Superfoods</h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30">
                        <span className="text-2xl">🍯</span>
                        <div>
                            <p className="font-bold text-gray-800 dark:text-white text-sm">Jaggery (Gud)</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Natural Iron Source</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30">
                        <span className="text-2xl">🥬</span>
                        <div>
                            <p className="font-bold text-gray-800 dark:text-white text-sm">Spinach (Palak)</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Vitamin Rich</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
