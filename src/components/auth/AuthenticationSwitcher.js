import PropTypes from 'prop-types';
import React from 'react';
import { Center, Text, tokens } from '../UI';

const AuthenticationSwitcher = ({ isRegistration, setisRegistration }) => {
  // Function to change login / register state
  const handleAuthState = () => {
    setisRegistration(!isRegistration);
  };

  return (
    <Center
      onClick={handleAuthState}
      gap="4"
      style={{ margin: '0 30vw', cursor: 'pointer' }}
    >
      <Text tag="span" variant="regular12" color={tokens.colors.primaryDark2}>
        Switch to
      </Text>
      <Text tag="span" variant="black12" color={tokens.colors.primaryDark1}>
        {isRegistration ? 'Login' : 'Sign Up'}
      </Text>
    </Center>
  );
};

export default AuthenticationSwitcher;

AuthenticationSwitcher.propTypes = {
  isRegistration: PropTypes.bool.isRequired,
  setisRegistration: PropTypes.func.isRequired,
};