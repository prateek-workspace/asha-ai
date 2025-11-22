import React, { useState } from 'react';
import { User, Shield, Globe, Bell, LogOut, ToggleLeft, ToggleRight } from 'lucide-react';

export const Profile = () => {
  const [privacyMode, setPrivacyMode] = useState(false);
  const [language, setLanguage] = useState('Hindi');

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>

      {/* User Info */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xl font-bold border-2 border-pink-200">
          RD
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800">Radha Devi</h3>
          <p className="text-gray-500 text-sm">Madhubani, Bihar</p>
        </div>
      </div>

      {/* Settings */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Settings</h3>
        
        {/* Privacy Mode */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
              <Shield size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Whisper Privacy</h4>
              <p className="text-xs text-gray-500">Auto-delete voice notes</p>
            </div>
          </div>
          <button onClick={() => setPrivacyMode(!privacyMode)} className="text-purple-600">
            {privacyMode ? <ToggleRight size={32} fill="currentColor" /> : <ToggleLeft size={32} className="text-gray-300" />}
          </button>
        </div>

        {/* Language */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Globe size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Language</h4>
              <p className="text-xs text-gray-500">Current: {language}</p>
            </div>
          </div>
          <button className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Change
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
              <Bell size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Reminders</h4>
              <p className="text-xs text-gray-500">Pills & Period Alerts</p>
            </div>
          </div>
          <ToggleRight size={32} className="text-green-500" fill="currentColor" />
        </div>
      </div>

      <button className="w-full py-3 bg-gray-100 text-gray-600 font-bold rounded-xl flex items-center justify-center gap-2 mt-8">
        <LogOut size={20} />
        Log Out
      </button>
    </div>
  );
};
