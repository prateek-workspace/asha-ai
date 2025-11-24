import React, { useState } from 'react';
import { User, Shield, Globe, Bell, LogOut, ToggleLeft, ToggleRight, Moon, Sun } from 'lucide-react';
import { useSettings } from '../../context/SettingsContext';
import { Language } from '../../lib/translations';

export const Profile = () => {
  const { theme, toggleTheme, language, setLanguage, t } = useSettings();
  const [privacyMode, setPrivacyMode] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'bh', label: 'भोजपुरी' },
  ];

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('profile')}</h2>

      {/* User Info */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4 transition-colors">
        <div className="h-16 w-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 text-xl font-bold border-2 border-pink-200 dark:border-pink-800">
          RD
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800 dark:text-white">Radha Devi</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Madhubani, Bihar</p>
        </div>
      </div>

      {/* Settings */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">{t('settings')}</h3>
        
        {/* Privacy Mode */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
              <Shield size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">{t('privacyMode')}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t('privacyDesc')}</p>
            </div>
          </div>
          <button onClick={() => setPrivacyMode(!privacyMode)} className="text-purple-600 dark:text-purple-400">
            {privacyMode ? <ToggleRight size={32} fill="currentColor" /> : <ToggleLeft size={32} className="text-gray-300 dark:text-gray-600" />}
          </button>
        </div>

        {/* Language */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col gap-3 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                <Globe size={20} />
                </div>
                <div>
                <h4 className="font-bold text-gray-800 dark:text-white">{t('language')}</h4>
                </div>
            </div>
          </div>
          <div className="flex gap-2 pl-12">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        language === lang.code
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                    {lang.label}
                </button>
            ))}
          </div>
        </div>

        {/* Dark Mode */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg">
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">{t('darkMode')}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t('appearance')}</p>
            </div>
          </div>
          <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
            {theme === 'dark' ? <ToggleRight size={32} className="text-blue-500" fill="currentColor" /> : <ToggleLeft size={32} className="text-gray-300" />}
          </button>
        </div>
      </div>

      <button className="w-full py-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold rounded-xl flex items-center justify-center gap-2 mt-8 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <LogOut size={20} />
        {t('logout')}
      </button>
    </div>
  );
};
