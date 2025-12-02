import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { VILLAGE_STATS, PATIENTS_LIST } from '../../lib/mockData';
import { Users, AlertTriangle, Activity, Calendar } from 'lucide-react';

export const AshaDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Patients</p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">142</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">High Risk</p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">8</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Deliveries Due</p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">3</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Visits Today</p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">12</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 lg:col-span-1 transition-colors">
          <h3 className="font-bold text-gray-800 dark:text-white mb-4">Village Health Overview</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={VILLAGE_STATS}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {VILLAGE_STATS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {VILLAGE_STATS.map((stat) => (
              <div key={stat.name} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stat.fill }}></div>
                <span className="text-gray-600 dark:text-gray-300">{stat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Patients List */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 lg:col-span-2 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 dark:text-white">Priority Follow-ups</h3>
            <button className="text-sm text-teal-600 dark:text-teal-400 font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Risk Factor</th>
                  <th className="pb-3 font-medium">Last Visit</th>
                  <th className="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {PATIENTS_LIST.map((patient) => (
                  <tr key={patient.id} className="border-b border-gray-50 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="py-4 font-medium text-gray-800 dark:text-gray-200">{patient.name} <span className="text-gray-400 font-normal text-xs">({patient.age})</span></td>
                    <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                            patient.status.includes('Pregnant') ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        }`}>
                            {patient.status}
                        </span>
                    </td>
                    <td className="py-4">
                        {patient.risk !== 'Normal' ? (
                            <span className="flex items-center gap-1 text-red-600 dark:text-red-400 font-medium">
                                <AlertTriangle size={14} />
                                {patient.risk}
                            </span>
                        ) : (
                            <span className="text-green-600 dark:text-green-400">Normal</span>
                        )}
                    </td>
                    <td className="py-4 text-gray-500 dark:text-gray-400">{patient.lastVisit}</td>
                    <td className="py-4">
                        <button className="text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 px-3 py-1 rounded-lg transition-colors">
                            Log Visit
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
