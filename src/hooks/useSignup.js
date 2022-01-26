import { useEffect, useState } from 'react';
import { projectAuth, projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [cancelled, setCancelled] = useState(false);
  const [signUpLoading, setLoading] = useState(false);
  const [signUpError, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signUp = async (email, password, name) => {
    setError(null);
    setLoading(true);

    // sign up the user
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      // handling if sign up fails
      if (!res) {
        throw new Error('Could not complete the sign up!');
      }

      // updating the user
      await res.user.updateProfile({ displayName: name });

      // create document with the user
      await projectFirestore.collection('users').doc(res.user.uid).set({
        uid: res.user.uid,
        displayName: name,
        email: email,
      });

      // dispatching login action
      dispatch({ type: 'LOGIN', payload: res.user });

      // update state
      if (!cancelled) {
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      if (!cancelled) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return { signUpLoading, signUpError, signUp };
};
