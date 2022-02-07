import React, { useState } from 'react';
import { Button, Center, Icon, Text, tokens } from '../UI';
import { Nav, NavCloser } from './styles';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Nav show={show}>
        <Center height="100%" gap={10} between margin="0 20px">
          <Text variant="h3" color={tokens.colors.primary}>
            <Center gap={10}>
              <span>🏡</span>
              <span>LOGO</span>
            </Center>
          </Text>
          <Button
            size="medium"
            variant="secondary"
            onClick={() => setShow(false)}
          >
            <Icon icon="close" />
          </Button>
        </Center>
        {!show && (
          <NavCloser>
            <Button
              size="medium"
              variant="secondary"
              onClick={() => setShow(true)}
            >
              <Icon icon="menu" />
            </Button>
          </NavCloser>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
