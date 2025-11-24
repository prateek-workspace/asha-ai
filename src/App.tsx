import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext';
import { Landing } from './pages/Landing';
import { UserLayout } from './components/layout/UserLayout';
import { AshaLayout } from './components/layout/AshaLayout';

// User Pages
import { UserHome } from './pages/user/UserHome';
import { SymptomChecker } from './pages/user/SymptomChecker';
import { PeriodTracker } from './pages/user/PeriodTracker';
import { Education } from './pages/user/Education';
import { NutritionPlanner } from './pages/user/NutritionPlanner';
import { Profile } from './pages/user/Profile';

// Asha Pages
import { AshaDashboard } from './pages/asha/AshaDashboard';
import { PatientList } from './pages/asha/PatientList';
import { Reports } from './pages/asha/Reports';

function App() {
  return (
    <SettingsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          
          {/* User Routes (Responsive Layout) */}
          <Route path="/user" element={<UserLayout />}>
            <Route path="home" element={<UserHome />} />
            <Route path="symptom-checker" element={<SymptomChecker />} />
            <Route path="tracker" element={<PeriodTracker />} />
            <Route path="education" element={<Education />} />
            <Route path="nutrition" element={<NutritionPlanner />} />
            <Route path="profile" element={<Profile />} />
            <Route index element={<Navigate to="home" replace />} />
          </Route>

          {/* Asha Worker Routes (Desktop/Tablet Layout) */}
          <Route path="/asha" element={<AshaLayout />}>
            <Route path="dashboard" element={<AshaDashboard />} />
            <Route path="patients" element={<PatientList />} />
            <Route path="reports" element={<Reports />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Routes>
      </Router>
    </SettingsProvider>
  );
}

export default App;
