import React, { useState } from 'react';
import Logo from '../../assets/Logo';
import { Button, Center, Icon, Text, tokens } from '../UI';
import { Nav, NavCloser } from './styles';
import { useLogout } from '../../hooks/useLogout';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const { logout } = useLogout();

  return (
    <>
      <Nav show={show}>
        <Center height="100%" gap={10} between margin="0 20px">
          <Text tag="div" variant="h3" color={tokens.colors.primary}>
            <Center>
              <Logo size={24} />
            </Center>
          </Text>

          <Center gap={5}>
            <Button size="medium" onClick={logout}>
              Log Out
            </Button>
            <Button
              size="medium"
              variant="secondary"
              onClick={() => setShow(false)}
            >
              <Icon icon="close" />
            </Button>
          </Center>
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
