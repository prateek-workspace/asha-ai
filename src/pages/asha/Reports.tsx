import React from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { Download, FileText, TrendingUp, Users } from 'lucide-react';

const ANEMIA_DATA = [
  { month: 'Jan', cases: 45 },
  { month: 'Feb', cases: 42 },
  { month: 'Mar', cases: 38 },
  { month: 'Apr', cases: 30 },
  { month: 'May', cases: 25 },
  { month: 'Jun', cases: 22 },
];

const IMMUNIZATION_DATA = [
  { name: 'Fully Immunized', value: 65, fill: '#10b981' },
  { name: 'Partially', value: 25, fill: '#f59e0b' },
  { name: 'Not Immunized', value: 10, fill: '#ef4444' },
];

const DELIVERY_DATA = [
  { month: 'Jan', institutional: 8, home: 2 },
  { month: 'Feb', institutional: 10, home: 1 },
  { month: 'Mar', institutional: 7, home: 3 },
  { month: 'Apr', institutional: 12, home: 0 },
];

export const Reports = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Health Reports</h2>
          <p className="text-gray-500 dark:text-gray-400">Village: Rampur (Jan - Jun 2025)</p>
        </div>
        <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors shadow-sm font-medium">
          <Download size={18} /> Export PDF
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
              <TrendingUp size={20} />
            </div>
            <h4 className="font-bold text-gray-700 dark:text-gray-300">Anemia Reduction</h4>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">51% <span className="text-sm text-green-500 font-medium">↓ drop</span></p>
          <p className="text-xs text-gray-500 mt-1">Since January 2025</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
              <FileText size={20} />
            </div>
            <h4 className="font-bold text-gray-700 dark:text-gray-300">Institutional Deliveries</h4>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">92% <span className="text-sm text-green-500 font-medium">↑ rise</span></p>
          <p className="text-xs text-gray-500 mt-1">Target: 100%</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
              <Users size={20} />
            </div>
            <h4 className="font-bold text-gray-700 dark:text-gray-300">Active Pregnancies</h4>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">18</p>
          <p className="text-xs text-gray-500 mt-1">4 High Risk</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Anemia Trend */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-white mb-6">Anemia Cases Trend</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ANEMIA_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Line type="monotone" dataKey="cases" stroke="#ef4444" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Immunization Pie */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-white mb-6">Child Immunization Status</h3>
          <div className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={IMMUNIZATION_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {IMMUNIZATION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Delivery Stats */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 lg:col-span-2">
          <h3 className="font-bold text-gray-800 dark:text-white mb-6">Institutional vs Home Deliveries</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DELIVERY_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Legend />
                <Bar dataKey="institutional" name="Hospital" fill="#0d9488" radius={[4, 4, 0, 0]} />
                <Bar dataKey="home" name="Home" fill="#f97316" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};
