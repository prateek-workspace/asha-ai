import React, { useState } from 'react';
import { Activity, Users, ClipboardList, Plus, Search, Phone, MapPin } from 'lucide-react';
import axios from 'axios';
import { motion } from 'framer-motion';

const AshaDashboard = () => {
    const [activeTab, setActiveTab] = useState('visits');
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', symptoms: '', notes: '' });

    const handleLogVisit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/asha/log-visit', {
                worker_id: 'asha-001',
                patient_name: formData.name,
                symptoms: formData.symptoms,
                notes: formData.notes
            });
            setShowForm(false);
            setFormData({ name: '', symptoms: '', notes: '' });
            alert("Visit log save ho gaya!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col gap-6 pb-20">
            {/* Header Card */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-6 rounded-[2rem] shadow-lg shadow-orange-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Activity size={120} />
                </div>
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <h1 className="text-2xl font-bold">ASHA Mode</h1>
                        <p className="text-orange-100">Sunita Devi (ID: 402)</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                        Online
                    </div>
                </div>

                <div className="flex gap-3 mt-6 relative z-10">
                    <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl flex-1 border border-white/10">
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-xs text-orange-100">Pending Visits</div>
                    </div>
                    <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl flex-1 border border-white/10">
                        <div className="text-2xl font-bold">3</div>
                        <div className="text-xs text-orange-100">High Risk</div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {['visits', 'pregnant', 'immunization'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-bold transition-all ${activeTab === tab
                                ? 'bg-gray-800 text-white shadow-md'
                                : 'bg-white text-gray-500 border border-gray-200'
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Content */}
            {activeTab === 'visits' && (
                <div className="flex flex-col gap-4">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowForm(!showForm)}
                        className="bg-white border-2 border-dashed border-orange-300 text-orange-500 p-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-orange-50 transition-colors"
                    >
                        <Plus size={20} /> Nayi Visit Jodein
                    </motion.button>

                    {showForm && (
                        <motion.form
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            onSubmit={handleLogVisit}
                            className="bg-white p-5 rounded-3xl shadow-md border border-gray-100 overflow-hidden"
                        >
                            <h3 className="font-bold mb-4 text-gray-800">Visit Details</h3>
                            <div className="space-y-3">
                                <input
                                    placeholder="Patient Name"
                                    className="input-field"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                                <input
                                    placeholder="Symptoms (e.g. Bukhar)"
                                    className="input-field"
                                    value={formData.symptoms}
                                    onChange={e => setFormData({ ...formData, symptoms: e.target.value })}
                                />
                                <textarea
                                    placeholder="Notes"
                                    className="input-field min-h-[80px]"
                                    value={formData.notes}
                                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                />
                                <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-orange-200">Save Record</button>
                            </div>
                        </motion.form>
                    )}

                    {/* List Items */}
                    <div className="space-y-3">
                        {[
                            { name: 'Rani Devi', symptom: 'Bukhar aur thakan', status: 'Done', risk: false },
                            { name: 'Meena Kumari', symptom: 'Pregnancy - 7th Month', status: 'Pending', risk: true },
                            { name: 'Suman Singh', symptom: 'Vaccination Due', status: 'Pending', risk: false }
                        ].map((patient, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className={`bg-white p-4 rounded-2xl shadow-sm border ${patient.risk ? 'border-l-4 border-l-red-500 border-gray-100' : 'border-gray-100'} flex justify-between items-center`}
                            >
                                <div className="flex gap-3 items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${patient.risk ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                                        {patient.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{patient.name}</h4>
                                        <p className="text-xs text-gray-500">{patient.symptom}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 bg-green-50 text-green-600 rounded-full hover:bg-green-100"><Phone size={16} /></button>
                                    <button className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"><MapPin size={16} /></button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AshaDashboard;
