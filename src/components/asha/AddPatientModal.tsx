import React, { useState } from 'react';
import { X, User, MapPin, Activity, Save } from 'lucide-react';
import { motion } from 'framer-motion';

interface AddPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (patient: any) => void;
}

export const AddPatientModal: React.FC<AddPatientModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    village: 'Rampur East',
    status: 'Pregnant',
    risk: 'Normal'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      ...formData,
      lastVisit: 'Never',
      status: formData.status === 'Pregnant' ? 'Pregnant (1mo)' : formData.status
    });
    onClose();
    setFormData({ name: '', age: '', village: 'Rampur East', status: 'Pregnant', risk: 'Normal' });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
      >
        <div className="bg-teal-700 p-4 flex justify-between items-center text-white">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <User size={20} /> Add New Patient
          </h3>
          <button onClick={onClose} className="hover:bg-teal-600 p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
            <input 
              required
              type="text" 
              className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="e.g. Sunita Devi"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Age</label>
              <input 
                required
                type="number" 
                className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="24"
                value={formData.age}
                onChange={e => setFormData({...formData, age: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Village</label>
              <select 
                className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                value={formData.village}
                onChange={e => setFormData({...formData, village: e.target.value})}
              >
                <option>Rampur East</option>
                <option>Rampur West</option>
                <option>Lohiya Tola</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Health Status</label>
            <div className="grid grid-cols-3 gap-2">
              {['Pregnant', 'Lactating', 'Adolescent'].map(status => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setFormData({...formData, status})}
                  className={`p-2 rounded-lg text-sm font-medium border transition-colors ${
                    formData.status === status 
                      ? 'bg-teal-50 dark:bg-teal-900/30 border-teal-500 text-teal-700 dark:text-teal-300' 
                      : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Initial Risk Assessment</label>
            <select 
              className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              value={formData.risk}
              onChange={e => setFormData({...formData, risk: e.target.value})}
            >
              <option value="Normal">Normal</option>
              <option value="High (Anemia)">High (Anemia)</option>
              <option value="High (BP)">High (BP)</option>
              <option value="Irregular Periods">Irregular Periods</option>
            </select>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-200 dark:shadow-none"
            >
              <Save size={20} /> Register Patient
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
