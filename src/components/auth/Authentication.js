import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { useLogin } from '../../hooks/useLogin';

const Authentication = () => {
  const state = { email: '', password: '', name: '' };

  const [isRegistered, setIsRegistered] = useState(false);
  const [credentials, setCredentials] = useState(state);

  const { signUp, signUpLoading, signUpError } = useSignup();
  const { login, loginLoading, loginError } = useLogin();

  // Function handling input fields
  const handleInput = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Function to change login / register state
  const handleAuthState = () => {
    setIsRegistered(!isRegistered);
  };

  // Function handling the user sign up
  const handleAuth = (e) => {
    e.preventDefault();
    setCredentials(state);

    if (isRegistered) {
      signUp(credentials.email, credentials.password, credentials.name);
    } else {
      login(credentials.email, credentials.password);
    }
  };

  return (
    <div>
      <h3>Authentication</h3>
      <button
        onClick={handleAuthState}
        className="primary focus:outline-none focus-visible:ring"
      >
        {isRegistered ? 'LOGIN' : 'REGISTER'}
      </button>

      <form onSubmit={handleAuth}>
        {isRegistered && (
          <>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={credentials.name}
              onChange={handleInput}
            />
          </>
        )}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleInput}
        />

        <label htmlFor="name">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleInput}
        />

        <button type="submit" disabled={loginLoading || signUpLoading}>
          SUBMIT
        </button>
      </form>

      {signUpError && <div>{signUpError}</div>}
      {loginError && <div>{loginError}</div>}
    </div>
  );
};

export default Authentication;
