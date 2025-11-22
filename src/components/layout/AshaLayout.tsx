import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Bell, Settings, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

export const AshaLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-teal-800 text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-teal-700">
          <h1 className="text-2xl font-bold">ASHA Connect</h1>
          <p className="text-sm text-teal-300 mt-1">Worker Portal</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavLink to="/asha/dashboard" className={({ isActive }) => cn("flex items-center gap-3 px-4 py-3 rounded-lg transition-colors", isActive ? "bg-teal-700 text-white" : "text-teal-100 hover:bg-teal-700/50")}>
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>
          <NavLink to="/asha/patients" className={({ isActive }) => cn("flex items-center gap-3 px-4 py-3 rounded-lg transition-colors", isActive ? "bg-teal-700 text-white" : "text-teal-100 hover:bg-teal-700/50")}>
            <Users size={20} />
            My Village
          </NavLink>
          <NavLink to="/asha/reports" className={({ isActive }) => cn("flex items-center gap-3 px-4 py-3 rounded-lg transition-colors", isActive ? "bg-teal-700 text-white" : "text-teal-100 hover:bg-teal-700/50")}>
            <FileText size={20} />
            Reports
          </NavLink>
        </nav>

        <div className="p-4 border-t border-teal-700">
          <button className="flex items-center gap-3 px-4 py-3 text-teal-100 hover:text-white w-full">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center md:hidden">
             <h1 className="text-xl font-bold text-teal-800">ASHA Connect</h1>
             {/* Mobile menu trigger would go here */}
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
