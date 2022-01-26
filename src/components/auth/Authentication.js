import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { useLogin } from '../../hooks/useLogin';
import { tokens, Center, Text, Input, Button, Error } from '../UI';
import {
  AuthForm,
  AuthSwitcher,
  Background,
  Title,
} from './Authentication.styles';

const Authentication = () => {
  const state = { email: '', password: '', name: '' };

  const [isRegistration, setisRegistration] = useState(false);
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
    setisRegistration(!isRegistration);
  };

  // Function handling the user sign up
  const handleAuth = (e) => {
    e.preventDefault();
    setCredentials(state);

    if (isRegistration) {
      signUp(credentials.email, credentials.password, credentials.name);
    } else {
      login(credentials.email, credentials.password);
    }
  };

  return (
    <Background>
      <Title>
        <Text tag="h1" color={tokens.colors.primary}>
          Hargitai hazak
        </Text>
      </Title>

      <Center gap="10" direction="column">
        <AuthSwitcher onClick={handleAuthState}>
          <Text variant="regular14" color={tokens.colors.primaryDark2}>
            Switch to{' '}
            <Text
              tag="span"
              variant="black14"
              color={tokens.colors.primaryDark1}
            >
              {isRegistration ? 'Login' : 'Sign Up'}
            </Text>
          </Text>
        </AuthSwitcher>

        <AuthForm onSubmit={handleAuth}>
          {isRegistration && (
            <>
              <Input
                type="text"
                id="name"
                name="name"
                value={credentials.name}
                label="Name"
                placeholder="Enter your name..."
                bottom="8px"
                onChange={handleInput}
                required
              />
            </>
          )}

          <Input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            label="Email"
            placeholder="Enter your email..."
            bottom="8px"
            onChange={handleInput}
            required
          />

          <Input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            label="Password"
            placeholder="Enter your password..."
            bottom="20px"
            onChange={handleInput}
            required
          />

          <Button block type="submit" disabled={loginLoading || signUpLoading}>
            SUBMIT
          </Button>
        </AuthForm>
      </Center>

      <Center>
        {signUpError && <Error>{signUpError}</Error>}
        {loginError && <Error>{loginError}</Error>}
      </Center>
    </Background>
  );
};

export default Authentication;