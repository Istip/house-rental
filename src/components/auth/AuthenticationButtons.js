import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button, Center, Icon } from '../UI';

const AuthenticationButtons = ({ signUpWithGoogle, signUpWithFacebook }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  max-width: 500px;
`;

export default AuthenticationButtons;

AuthenticationButtons.propTypes = {
  signUpWithFacebook: PropTypes.func,
  signUpWithGoogle: PropTypes.func,
};
