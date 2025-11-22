import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Calendar, BookOpen, Activity, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ to, icon: Icon, title, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
    >
        <Link to={to} className="group relative overflow-hidden bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 hover:shadow-md transition-all active:scale-95">
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-${color}-500`} />
            <div className={`p-4 rounded-2xl bg-${color}-50 text-${color}-500 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={32} />
            </div>
            <span className="font-bold text-gray-800 text-center">{title}</span>
        </Link>
    </motion.div>
);

const Home = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Greeting Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 text-white p-8 rounded-[2.5rem] shadow-xl shadow-pink-500/20"
            >
                <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Sparkles size={100} />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 opacity-90">
                        <span className="text-sm font-medium uppercase tracking-wider">Namaste</span>
                        <div className="h-px w-8 bg-white/50" />
                    </div>
                    <h1 className="text-3xl font-black mb-2">Sunita Didi</h1>
                    <p className="text-pink-100 text-lg mb-6 max-w-[80%]">Main ASHA AI hoon. Aaj aap kaise hain?</p>

                    <Link to="/symptoms" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2.5 rounded-full font-bold hover:bg-white/30 transition-colors">
                        <Mic size={18} />
                        <span>Bol kar batayein</span>
                    </Link>
                </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
                <FeatureCard to="/symptoms" icon={Mic} title="Tabiyat Check" color="pink" delay={0.1} />
                <FeatureCard to="/tracker" icon={Calendar} title="Period Tracker" color="purple" delay={0.2} />
                <FeatureCard to="/lessons" icon={BookOpen} title="Seekhein" color="blue" delay={0.3} />
                <FeatureCard to="/asha-mode" icon={Activity} title="ASHA Mode" color="orange" delay={0.4} />
            </div>

            {/* Daily Tip */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-2 h-full bg-orange-400" />
                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-gray-800">Aaj ka Suvichar</h3>
                    <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded-lg">Daily Tip</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    "Gud aur chana iron ke liye bahut achha hai. Ise rozana khane se khoon ki kami door hoti hai."
                </p>
            </motion.div>
        </div>
    );
};

export default Home;
