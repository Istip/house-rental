import React from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Authentication } from './components/auth/';

// pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                !user ? <Authentication /> : <Navigate replace to="/home" />
              }
            />

            <Route
              path="/home"
              element={user ? <Home /> : <Navigate replace to="/" />}
            />

            <Route
              path="/settings"
              element={user ? <Settings /> : <Navigate replace to="/" />}
            />

            <Route path="/houses/:id" element={<Profile />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
