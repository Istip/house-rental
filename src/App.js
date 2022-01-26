import React from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <>
      <h1>Hello</h1>
      <input type="text" />
      {authIsReady && (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                !user ? (
                  <div>Helloka bejelentkezett!</div>
                ) : (
                  <Navigate replace to="/dashboard" />
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
