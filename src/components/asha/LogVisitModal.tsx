import React, { useState } from 'react';
import { X, Stethoscope, Activity, Scale, HeartPulse, Save } from 'lucide-react';
import { motion } from 'framer-motion';

interface LogVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientName: string;
  onSave: (visitData: any) => void;
}

export const LogVisitModal: React.FC<LogVisitModalProps> = ({ isOpen, onClose, patientName, onSave }) => {
  const [vitals, setVitals] = useState({
    bp: '',
    weight: '',
    hb: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(vitals);
    onClose();
    setVitals({ bp: '', weight: '', hb: '', notes: '' });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden"
      >
        <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Stethoscope size={20} /> Log Home Visit
            </h3>
            <p className="text-xs text-blue-100">Patient: {patientName}</p>
          </div>
          <button onClick={onClose} className="hover:bg-blue-500 p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">BP (mmHg)</label>
              <div className="relative">
                <Activity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="120/80"
                  className="w-full pl-9 p-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={vitals.bp}
                  onChange={e => setVitals({...vitals, bp: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Weight (kg)</label>
              <div className="relative">
                <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="number" 
                  placeholder="55"
                  className="w-full pl-9 p-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={vitals.weight}
                  onChange={e => setVitals({...vitals, weight: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Hb (g/dL)</label>
              <div className="relative">
                <HeartPulse className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="number" 
                  placeholder="11.2"
                  className="w-full pl-9 p-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={vitals.hb}
                  onChange={e => setVitals({...vitals, hb: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Observations / Notes</label>
            <textarea 
              className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none h-24 resize-none"
              placeholder="e.g. Patient complained of dizziness. Advised to take IFA tablets regularly."
              value={vitals.notes}
              onChange={e => setVitals({...vitals, notes: e.target.value})}
            ></textarea>
          </div>

          <div className="flex items-center gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 rounded-lg">
             <input type="checkbox" id="referral" className="rounded text-blue-600 focus:ring-blue-500" />
             <label htmlFor="referral" className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">Flag for Doctor Referral (Red Alert)</label>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200 dark:shadow-none"
            >
              <Save size={20} /> Save Visit Record
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
