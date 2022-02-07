import PropTypes from 'prop-types';
import React from 'react';
import { Button, Center, Icon } from '../UI';
import { ButtonsWrapper } from './styles';

const AuthenticationButtons = ({ signUpWithGoogle, signUpWithFacebook }) => {
  return (
    <ButtonsWrapper>
      <Center gap="10" direction="column">
        <Button
          variant="facebook"
          block
          icon={<Icon icon="facebook" size={18} />}
          onClick={signUpWithFacebook}
        >
          Continue with Facebook
        </Button>
        <Button
          variant="google"
          block
          icon={<Icon icon="google" size={18} />}
          onClick={signUpWithGoogle}
        >
          Continue with Google
        </Button>
      </Center>
    </ButtonsWrapper>
  );
};

export default AuthenticationButtons;

AuthenticationButtons.propTypes = {
  signUpWithFacebook: PropTypes.func,
  signUpWithGoogle: PropTypes.func,
};
