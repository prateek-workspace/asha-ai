import React from 'react';
import { Mic, Calendar, PlayCircle, Apple, AlertCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const UserHome = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Namaste, Radha! 🙏</h1>
          <p className="text-gray-500">Here is your health summary for today.</p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm font-bold text-gray-800">Madhubani, Bihar</p>
          <p className="text-xs text-gray-500">28°C, Sunny</p>
        </div>
      </div>

      {/* Hero Card */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">How are you feeling?</h2>
          <p className="opacity-90 mb-6 text-lg">Tell ASHA about any symptoms or doubts you have today.</p>
          <button 
            onClick={() => navigate('/user/symptom-checker')}
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold flex items-center gap-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <Mic size={20} />
            Speak to ASHA AI
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
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
              <Calendar size={24} />
            </div>
            <span className="text-xs font-bold bg-purple-50 text-purple-600 px-2 py-1 rounded-full">Day 12</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800">Cycle Tracking</h3>
          <p className="text-sm text-gray-500 mb-4">Next period in 16 days</p>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full w-[40%]"></div>
          </div>
        </div>

        {/* Nutrition Card */}
        <div 
          onClick={() => navigate('/user/nutrition')} 
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
              <Apple size={24} />
            </div>
            <span className="text-xs font-bold bg-green-50 text-green-600 px-2 py-1 rounded-full">Today's Plan</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800">Iron Intake</h3>
          <p className="text-sm text-gray-500 mb-4">Spinach & Jaggery recommended</p>
          <div className="flex items-center gap-2 text-xs font-medium text-green-700 bg-green-50 p-2 rounded-lg">
            <AlertCircle size={14} /> Anemia Prevention
          </div>
        </div>

        {/* Daily Lesson Card */}
        <div 
          onClick={() => navigate('/user/education')}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <PlayCircle size={24} />
            </div>
            <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-full">New</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800">Daily Health Tip</h3>
          <p className="text-sm text-gray-500 mb-4">Why Iron is important?</p>
          <div className="flex items-center justify-between text-sm text-blue-600 font-medium">
            <span>Listen Now</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-red-50 rounded-2xl p-6 border border-red-100 flex flex-col md:flex-row md:items-center gap-4 shadow-sm">
        <div className="p-3 bg-white rounded-full shadow-sm text-red-500 shrink-0 w-fit">
          <AlertCircle size={24} />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-red-800">IFA Tablet Reminder</h4>
          <p className="text-sm text-red-600">Don't forget to take your Iron Folic Acid tablet today after lunch. It helps fight fatigue.</p>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors text-sm whitespace-nowrap">
          Mark as Taken
        </button>
      </div>
    </div>
  );
};
