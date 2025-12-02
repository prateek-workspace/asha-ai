import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Home, Mic, Calendar, BookOpen, User, Apple } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useSettings } from '../../context/SettingsContext';

export const UserLayout = () => {
  const location = useLocation();
  const { t } = useSettings();

  const navItems = [
    { path: '/user/home', icon: Home, label: t('home') },
    { path: '/user/tracker', icon: Calendar, label: t('track') },
    { path: '/user/nutrition', icon: Apple, label: t('diet') },
    { path: '/user/education', icon: BookOpen, label: t('learn') },
    { path: '/user/profile', icon: User, label: t('profile') },
  ];

  const SidebarItem = ({ item }: { item: any }) => (
    <NavLink 
      to={item.path} 
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium mb-1",
        isActive 
          ? "bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 shadow-sm border border-pink-100 dark:border-pink-900/30" 
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
      )}
    >
      {({ isActive }) => (
        <>
          <item.icon size={20} className={isActive ? "text-pink-600 dark:text-pink-400" : "text-gray-400 dark:text-gray-500"} />
          <span>{item.label}</span>
        </>
      )}
    </NavLink>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex font-sans transition-colors duration-300">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col fixed h-full z-30 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-colors">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
          <div className="h-10 w-10 bg-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-200 dark:shadow-none">
            <User size={20} />
          </div>
          <div>
             <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">ASHA AI</h1>
             <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">User Portal</p>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="mb-6">
            <p className="px-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Menu</p>
            {navItems.map((item) => (
              <SidebarItem key={item.path} item={item} />
            ))}
          </div>
          
          <div>
            <p className="px-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Quick Action</p>
            <NavLink 
              to="/user/symptom-checker" 
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium border",
                isActive 
                  ? "bg-pink-600 text-white shadow-md border-pink-600" 
                  : "bg-white dark:bg-gray-900 text-pink-700 dark:text-pink-400 border-pink-200 dark:border-pink-900 hover:bg-pink-50 dark:hover:bg-pink-900/20"
              )}
            >
              {({ isActive }) => (
                <>
                  <Mic size={20} className={isActive ? "text-white" : "text-pink-600 dark:text-pink-400"} />
                  <span>{t('consult')}</span>
                </>
              )}
            </NavLink>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <div className="h-9 w-9 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-700 dark:text-pink-400 text-xs font-bold border border-pink-200 dark:border-pink-800">
              RD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">Radha Devi</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Bihar, India</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-72 min-h-screen relative transition-all duration-300">
        
        {/* Mobile Header */}
        <header className="md:hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 flex justify-between items-center sticky top-0 z-20 shadow-sm border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
             <div className="h-8 w-8 bg-pink-600 rounded-lg flex items-center justify-center text-white">
                <User size={16} />
             </div>
             <h1 className="text-lg font-bold">ASHA AI</h1>
          </div>
          <div className="h-8 w-8 bg-pink-50 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-xs font-bold text-pink-700 dark:text-pink-400 border border-pink-200 dark:border-pink-800">
            RD
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-8 w-full max-w-7xl mx-auto pb-24 md:pb-8">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-around py-3 pb-safe z-20 shadow-[0_-5px_10px_rgba(0,0,0,0.03)] dark:shadow-none">
          <NavLink to="/user/home" className={({ isActive }) => cn("flex flex-col items-center gap-1 text-[10px] font-medium w-16", isActive ? "text-pink-600 dark:text-pink-400" : "text-gray-400 dark:text-gray-500")}>
            {({ isActive }) => (
              <>
                <Home size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span>{t('home')}</span>
              </>
            )}
          </NavLink>
          <NavLink to="/user/tracker" className={({ isActive }) => cn("flex flex-col items-center gap-1 text-[10px] font-medium w-16", isActive ? "text-pink-600 dark:text-pink-400" : "text-gray-400 dark:text-gray-500")}>
            {({ isActive }) => (
              <>
                <Calendar size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span>{t('track')}</span>
              </>
            )}
          </NavLink>
          
          {/* FAB */}
          <NavLink to="/user/symptom-checker" className="relative -top-8">
            <div className="h-14 w-14 bg-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-200 dark:shadow-none border-4 border-white dark:border-gray-900 text-white transform transition-transform active:scale-95">
              <Mic size={24} />
            </div>
          </NavLink>

          <NavLink to="/user/nutrition" className={({ isActive }) => cn("flex flex-col items-center gap-1 text-[10px] font-medium w-16", isActive ? "text-pink-600 dark:text-pink-400" : "text-gray-400 dark:text-gray-500")}>
            {({ isActive }) => (
              <>
                <Apple size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span>{t('diet')}</span>
              </>
            )}
          </NavLink>
          <NavLink to="/user/profile" className={({ isActive }) => cn("flex flex-col items-center gap-1 text-[10px] font-medium w-16", isActive ? "text-pink-600 dark:text-pink-400" : "text-gray-400 dark:text-gray-500")}>
            {({ isActive }) => (
              <>
                <User size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span>{t('profile')}</span>
              </>
            )}
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
