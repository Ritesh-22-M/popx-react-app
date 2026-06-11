import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MobileShell from './components/MobileShell';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AccountSettingsPage from './pages/AccountSettingsPage';

function App() {
  return (
    <Router>
      <MobileShell>
        <Routes>
          <Route path="/" element={<Navigate to="/landing" replace />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
        </Routes>
      </MobileShell>
    </Router>
  );
}

export default App;
