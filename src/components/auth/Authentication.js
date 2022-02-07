import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { useLogin } from '../../hooks/useLogin';
import { tokens, Center, Text, Input, Button, Error, Divider } from '../UI';
import { AuthForm, Background, Title } from './styles';
import AuthenticationButtons from './AuthenticationButtons';
import AuthenticationSwitcher from './AuthenticationSwitcher';
import Logo from '../../assets/Logo';

const Authentication = () => {
  const state = { email: '', password: '', name: '' };

  const [isRegistration, setisRegistration] = useState(false);
  const [credentials, setCredentials] = useState(state);

  const {
    signUp,
    signUpWithGoogle,
    signUpWithFacebook,
    signUpLoading,
    signUpError,
  } = useSignup();
  const { login, loginLoading, loginError } = useLogin();

  // Function handling input fields
  const handleInput = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
        <Center direction="column" gap={10}>
          <Logo />
          <Text tag="h1" color={tokens.colors.primary}>
            Hargitai hazak
          </Text>
        </Center>
      </Title>

      <AuthenticationSwitcher
        setisRegistration={setisRegistration}
        isRegistration={isRegistration}
      />

      <Center gap="10" direction="column">
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
                shadow
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
            shadow
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
            shadow
            required
          />

          <Button block type="submit" disabled={loginLoading || signUpLoading}>
            SUBMIT
          </Button>
        </AuthForm>

        <Divider padding="20px 60px">OR</Divider>

        <AuthenticationButtons
          signUpWithGoogle={signUpWithGoogle}
          signUpWithFacebook={signUpWithFacebook}
          isRegistration={isRegistration}
        />
      </Center>

      <Center>
        {signUpError && <Error>{signUpError}</Error>}
        {loginError && <Error>{loginError}</Error>}
      </Center>
    </Background>
  );
};

export default Authentication;
