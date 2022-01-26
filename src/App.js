import React from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import { useLogout } from './hooks/useLogout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import { Authentication } from './components/auth/';

function App() {
  const { authIsReady, user } = useAuthContext();

  const { logout } = useLogout();

  return (
    <>
      {authIsReady && (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                !user ? (
                  <Authentication />
                ) : (
                  <div>
                    Helloka bejelentkezett!
                    <button onClick={logout}>LOGOUT</button>
                  </div>
                  // <Navigate replace to="/dashboard" />
                )
              }
            />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
