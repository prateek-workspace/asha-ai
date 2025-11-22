import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SymptomChecker from './pages/SymptomChecker';
import PeriodTracker from './pages/PeriodTracker';
import AshaDashboard from './pages/AshaDashboard';
import Lessons from './pages/Lessons';
import { Mic, Heart, Calendar, BookOpen, User, Activity } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const NavItem = ({ to, icon: Icon, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link to={to} className={`flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-pink-600 -translate-y-2' : 'text-gray-400'}`}>
            <div className={`p-2 rounded-full transition-all ${isActive ? 'bg-pink-100 shadow-lg shadow-pink-100' : ''}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className={`text-[10px] font-bold transition-all ${isActive ? 'opacity-100' : 'opacity-0 h-0'}`}>{label}</span>
        </Link>
    );
};

function App() {
    return (
        <Router>
            <div className="min-h-screen pb-24 bg-[#FFF8F0]">
                {/* Top Bar */}
                <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pink-100 px-4 py-3">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link to="/" className="text-2xl font-black bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent flex items-center gap-2">
                            <Heart className="fill-pink-600 text-pink-600" size={28} /> ASHA AI
                        </Link>
                        <div className="flex gap-3">
                            <Link to="/asha-mode" className="p-2 bg-orange-50 text-orange-600 rounded-full hover:bg-orange-100 transition-colors">
                                <Activity size={20} />
                            </Link>
                            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-700 font-bold text-sm border-2 border-white shadow-sm">
                                S
                            </div>
                        </div>
                    </div>
                </nav>

                <main className="container mx-auto p-4 max-w-md">
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/symptoms" element={<SymptomChecker />} />
                            <Route path="/tracker" element={<PeriodTracker />} />
                            <Route path="/asha-mode" element={<AshaDashboard />} />
                            <Route path="/lessons" element={<Lessons />} />
                        </Routes>
                    </AnimatePresence>
                </main>

                {/* Bottom Navigation */}
                <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-pink-100 px-6 py-4 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-50 max-w-md mx-auto">
                    <div className="flex justify-between items-end">
                        <NavItem to="/" icon={User} label="Home" />
                        <NavItem to="/symptoms" icon={Mic} label="Check" />
                        <NavItem to="/tracker" icon={Calendar} label="Track" />
                        <NavItem to="/lessons" icon={BookOpen} label="Learn" />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
