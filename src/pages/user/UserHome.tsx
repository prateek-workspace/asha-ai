import React from 'react';
import { Mic, Calendar, PlayCircle, Apple, AlertCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';

export const UserHome = () => {
  const navigate = useNavigate();
  const { t } = useSettings();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">{t('welcome')}, Radha! 🙏</h1>
          <p className="text-gray-500 dark:text-gray-400">{t('healthSummary')}</p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Madhubani, Bihar</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">28°C, Sunny</p>
        </div>
      </div>

      {/* Hero Card */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{t('feelingQuestion')}</h2>
          <p className="opacity-90 mb-6 text-lg">{t('feelingPrompt')}</p>
          <button 
            onClick={() => navigate('/user/symptom-checker')}
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold flex items-center gap-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <Mic size={20} />
            {t('speakToAsha')}
          </button>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tracker Card */}
        <div 
          onClick={() => navigate('/user/tracker')} 
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
              <Calendar size={24} />
            </div>
            <span className="text-xs font-bold bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full">Day 12</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{t('cycleTracking')}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t('nextPeriodIn')} 16 {t('days')}</p>
          <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full w-[40%]"></div>
          </div>
        </div>

        {/* Nutrition Card */}
        <div 
          onClick={() => navigate('/user/nutrition')} 
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
              <Apple size={24} />
            </div>
            <span className="text-xs font-bold bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">Today</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{t('ironIntake')}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Spinach & Jaggery</p>
          <div className="flex items-center gap-2 text-xs font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
            <AlertCircle size={14} /> {t('anemiaPrev')}
          </div>
        </div>

        {/* Daily Lesson Card */}
        <div 
          onClick={() => navigate('/user/education')}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <PlayCircle size={24} />
            </div>
            <span className="text-xs font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">New</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{t('dailyTip')}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Why Iron is important?</p>
          <div className="flex items-center justify-between text-sm text-blue-600 dark:text-blue-400 font-medium">
            <span>{t('listenNow')}</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/30 flex flex-col md:flex-row md:items-center gap-4 shadow-sm">
        <div className="p-3 bg-white dark:bg-red-900/40 rounded-full shadow-sm text-red-500 dark:text-red-400 shrink-0 w-fit">
          <AlertCircle size={24} />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-red-800 dark:text-red-200">{t('ifaReminder')}</h4>
          <p className="text-sm text-red-600 dark:text-red-300">{t('takePill')}</p>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors text-sm whitespace-nowrap shadow-lg shadow-red-200 dark:shadow-none">
          {t('markTaken')}
        </button>
      </div>
    </div>
  );
};
