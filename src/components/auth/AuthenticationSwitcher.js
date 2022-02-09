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
      <div style={{ padding: '10px 0' }}>
        <Text tag="span" variant="regular12" color={tokens.colors.primaryWhite}>
          Switch to
        </Text>
      </div>
      <Text tag="span" variant="black12" color={tokens.colors.primary}>
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
