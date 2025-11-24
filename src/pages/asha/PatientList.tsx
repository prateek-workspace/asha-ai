import React, { useState } from 'react';
import { PATIENTS_LIST } from '../../lib/mockData';
import { Search, Filter, Plus, MoreVertical, AlertTriangle, Check, Stethoscope } from 'lucide-react';
import { AddPatientModal } from '../../components/asha/AddPatientModal';
import { LogVisitModal } from '../../components/asha/LogVisitModal';

export const PatientList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState(PATIENTS_LIST);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [visitModalData, setVisitModalData] = useState<{isOpen: boolean, patientId: number | null, patientName: string}>({
    isOpen: false,
    patientId: null,
    patientName: ''
  });

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.village.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = (newPatient: any) => {
    setPatients(prev => [newPatient, ...prev]);
  };

  const handleOpenVisitLog = (id: number, name: string) => {
    setVisitModalData({ isOpen: true, patientId: id, patientName: name });
  };

  const handleSaveVisit = (visitData: any) => {
    setPatients(prev => prev.map(p => {
        if (p.id === visitModalData.patientId) {
            return { 
                ...p, 
                lastVisit: "Just now",
                risk: visitData.notes.toLowerCase().includes('dizzy') || visitData.notes.toLowerCase().includes('weak') ? 'High (Review)' : p.risk
            };
        }
        return p;
    }));
    // In a real app, we would save the visit details (bp, weight, etc.) to a separate visits table
    console.log("Visit Logged:", visitData);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Patients</h2>
            <p className="text-gray-500 dark:text-gray-400">Manage health records and visits</p>
        </div>
        
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-700 transition-colors shadow-sm font-medium"
        >
            <Plus size={20} />
            Add New Patient
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-4 shadow-sm transition-colors">
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
                type="text" 
                placeholder="Search by name or village..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 dark:text-white focus:bg-white dark:focus:bg-gray-600 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors">
            <Filter size={18} />
            Filter
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase tracking-wider">Name / Age</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase tracking-wider">Village</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase tracking-wider">Risk Factor</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase tracking-wider">Last Visit</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase tracking-wider text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {filteredPatients.map((patient) => (
                        <tr key={patient.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                            <td className="px-6 py-4">
                                <div className="font-bold text-gray-900 dark:text-white">{patient.name}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{patient.age} years</div>
                            </td>
                            <td className="px-6 py-4 text-gray-600 dark:text-gray-300 text-sm">{patient.village}</td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                    patient.status.includes('Pregnant') ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300' :
                                    patient.status.includes('Lactating') ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' :
                                    'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                                }`}>
                                    {patient.status}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {patient.risk !== 'Normal' ? (
                                    <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400 text-sm font-bold bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-md w-fit">
                                        <AlertTriangle size={14} />
                                        {patient.risk}
                                    </div>
                                ) : (
                                    <span className="text-green-600 dark:text-green-400 text-sm font-medium flex items-center gap-1">
                                        <Check size={14} /> Normal
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                {patient.lastVisit === "Just now" ? <span className="text-teal-600 dark:text-teal-400 font-bold">Just now</span> : patient.lastVisit}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <button 
                                        onClick={() => handleOpenVisitLog(patient.id, patient.name)}
                                        className="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1.5 rounded-md font-bold hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors flex items-center gap-1"
                                    >
                                        <Stethoscope size={14} /> Log
                                    </button>
                                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1">
                                        <MoreVertical size={18} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {filteredPatients.length === 0 && (
            <div className="p-12 text-center text-gray-500 dark:text-gray-400">
                <p className="text-lg font-medium">No patients found</p>
                <p className="text-sm">Try adjusting your search terms</p>
            </div>
        )}
      </div>

      {/* Modals */}
      <AddPatientModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAdd={handleAddPatient} 
      />

      <LogVisitModal
        isOpen={visitModalData.isOpen}
        onClose={() => setVisitModalData({...visitModalData, isOpen: false})}
        patientName={visitModalData.patientName}
        onSave={handleSaveVisit}
      />
    </div>
  );
};
