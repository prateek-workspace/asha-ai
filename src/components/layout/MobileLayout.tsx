import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Home, Mic, Calendar, BookOpen, User, Menu, X, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

export const MobileLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navItems = [
    { path: '/user/home', icon: Home, label: 'Home' },
    { path: '/user/tracker', icon: Calendar, label: 'Track' },
    { path: '/user/symptom-checker', icon: Mic, label: 'Consult', isFab: true },
    { path: '/user/education', icon: BookOpen, label: 'Learn' },
    { path: '/user/nutrition', icon: BookOpen, label: 'Diet' }, // Added for desktop nav mainly
    { path: '/user/profile', icon: User, label: 'Profile' },
  ];

  // Desktop Sidebar Item Component
  const SidebarItem = ({ item }: { item: any }) => (
    <NavLink 
      to={item.path} 
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium",
        isActive 
          ? "bg-pink-50 text-pink-700 shadow-sm" 
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      )}
    >
      {({ isActive }) => (
        <>
          <item.icon size={22} className={isActive ? "text-pink-600" : "text-gray-400"} />
          <span>{item.label}</span>
        </>
      )}
    </NavLink>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-72 bg-white border-r border-gray-200 flex-col fixed h-full z-30">
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <div className="h-10 w-10 bg-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-200">
            <User size={20} />
          </div>
          <div>
             <h1 className="text-xl font-bold text-gray-900 tracking-tight">ASHA AI</h1>
             <p className="text-xs text-gray-500">User Portal</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.filter(i => !i.isFab).map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100">
            <NavLink 
              to="/user/symptom-checker" 
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium",
                isActive 
                  ? "bg-pink-600 text-white shadow-md" 
                  : "bg-pink-50 text-pink-700 hover:bg-pink-100"
              )}
            >
              {({ isActive }) => (
                <>
                  <Mic size={22} />
                  <span>Symptom Checker</span>
                </>
              )}
            </NavLink>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50">
            <div className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-700 text-xs font-bold">
              RD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Radha Devi</p>
              <p className="text-xs text-gray-500 truncate">Madhubani, Bihar</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-72 min-h-screen relative">
        
        {/* Mobile Header */}
        <header className="md:hidden bg-pink-600 text-white p-4 flex justify-between items-center sticky top-0 z-20 shadow-md">
          <div>
            <h1 className="text-xl font-bold">ASHA AI</h1>
            <p className="text-xs text-pink-100">Namaste, Radha Devi</p>
          </div>
          <div className="h-8 w-8 bg-pink-700 rounded-full flex items-center justify-center text-xs font-bold border border-pink-400">
            RD
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full pb-24 md:pb-8">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around py-3 pb-5 z-20 shadow-[0_-5px_10px_rgba(0,0,0,0.05)]">
          <NavLink to="/user/home" className={({ isActive }) => cn("flex flex-col items-center gap-1 text-xs", isActive ? "text-pink-600" : "text-gray-400")}>
            <Home size={20} />
            <span>Home</span>
          </NavLink>
          <NavLink to="/user/tracker" className={({ isActive }) => cn("flex flex-col items-center gap-1 text-xs", isActive ? "text-pink-600" : "text-gray-400")}>
            <Calendar size={20} />
            <span>Track</span>
          </NavLink>
          
          {/* FAB */}
          <NavLink to="/user/symptom-checker" className="relative -top-8">
            <div className="h-16 w-16 bg-pink-600 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-50 text-white">
              <Mic size={28} />
            </div>
          </NavLink>

          <NavLink to="/user/education" className={({ isActive }) => cn("flex flex-col items-center gap-1 text-xs", isActive ? "text-pink-600" : "text-gray-400")}>
            <BookOpen size={20} />
            <span>Learn</span>
          </NavLink>
          <NavLink to="/user/profile" className={({ isActive }) => cn("flex flex-col items-center gap-1 text-xs", isActive ? "text-pink-600" : "text-gray-400")}>
            <User size={20} />
            <span>Profile</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
