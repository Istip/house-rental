import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [loginError, setError] = useState(null);
  const [loginLoading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    try {
      // login with email and password
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      if (!isCancelled) {
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return {
    login,
    loginLoading,
    loginError,
  };
};
