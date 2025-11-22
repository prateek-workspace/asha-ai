import React, { useEffect, useState } from 'react';
import { BookOpen, Play, Pause, Headphones, Clock } from 'lucide-react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Lessons = () => {
    const [lessons, setLessons] = useState([]);
    const [playing, setPlaying] = useState(null);

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/lessons');
                setLessons(res.data);
            } catch (error) {
                console.error(error);
                // Fallback
                setLessons([
                    { id: 1, title: "Mahwari mein safai", subtitle: "Menstrual Hygiene", duration: "45 sec", category: "Period", color: "bg-pink-100 text-pink-600" },
                    { id: 2, title: "Khoon ki kami", subtitle: "Anemia Awareness", duration: "30 sec", category: "Nutrition", color: "bg-green-100 text-green-600" },
                ]);
            }
        };
        fetchLessons();
    }, []);

    const togglePlay = (id) => {
        setPlaying(playing === id ? null : id);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2 px-2">
                <div className="bg-blue-100 p-2 rounded-xl">
                    <BookOpen className="text-blue-600" size={24} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Swasthya Paathshala</h2>
                    <p className="text-xs text-gray-500">Audio Knowledge Base</p>
                </div>
            </div>

            {/* Featured Card */}
            <div className="bg-blue-600 text-white p-6 rounded-[2rem] shadow-lg shadow-blue-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-20">
                    <Headphones size={80} />
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">New Lesson</span>
                <h3 className="text-2xl font-bold mb-2">Kishori Poshan</h3>
                <p className="text-blue-100 mb-6 max-w-[80%]">Adolescent girls ke liye nutrition guide.</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg active:scale-95 transition-transform">
                    <Play size={18} fill="currentColor" /> Listen Now
                </button>
            </div>

            <div className="grid gap-4">
                {lessons.map((lesson, idx) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={lesson.id}
                        className={`bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 transition-all ${playing === lesson.id ? 'ring-2 ring-blue-400 bg-blue-50' : ''}`}
                    >
                        <button
                            onClick={() => togglePlay(lesson.id)}
                            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors ${playing === lesson.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-100'}`}
                        >
                            {playing === lesson.id ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                        </button>

                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-gray-800">{lesson.title}</h4>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${lesson.color || 'bg-gray-100 text-gray-600'}`}>
                                    {lesson.category}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mb-1">{lesson.subtitle}</p>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                <Clock size={12} /> {lesson.duration}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Lessons;
