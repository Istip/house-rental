import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
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
        photoURL: null,
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

  const signUpWithGoogle = async () => {
    setError(null);
    setLoading(true);

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    // sign up the user
    try {
      const res = await projectAuth.signInWithPopup(googleProvider);

      // handling if sign up fails
      if (!res) {
        throw new Error('Could not complete the sign up!');
      }

      // updating the user
      await res.user.updateProfile({ displayName: res.user.displayName });

      // create document with the user
      await projectFirestore.collection('users').doc(res.user.uid).set({
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
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

  const signUpWithFacebook = async () => {
    setError(null);
    setLoading(true);

    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    // sign up the user
    try {
      const res = await projectAuth.signInWithPopup(facebookProvider);

      // handling if sign up fails
      if (!res) {
        throw new Error('Could not complete the sign up!');
      }

      // updating the user
      await res.user.updateProfile({ displayName: res.user.displayName });

      // create document with the user
      await projectFirestore.collection('users').doc(res.user.uid).set({
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
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

  return {
    signUpLoading,
    signUpError,
    signUp,
    signUpWithGoogle,
    signUpWithFacebook,
  };
};
