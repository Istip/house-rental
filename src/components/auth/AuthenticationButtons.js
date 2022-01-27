import React from 'react';
import styled from 'styled-components';
import { Button, Center, Icon } from '../UI';

const AuthenticationButtons = () => {
  return (
    <Wrapper>
      <Center gap="10" direction="column">
        <Button
          variant="facebook"
          block
          icon={<Icon icon="facebook" size={18} />}
        >
          Sign Up with Facebook
        </Button>
        <Button variant="google" block icon={<Icon icon="google" size={18} />}>
          Sign Up with Google
        </Button>
      </Center>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  max-width: 600px;
`;

export default AuthenticationButtons;
