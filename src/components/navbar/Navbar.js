import React, { useState } from 'react';
import Logo from '../../assets/Logo';
import { Button, Center, Icon, Text, tokens } from '../UI';
import { Nav, NavCloser } from './styles';
import { useLogout } from '../../hooks/useLogout';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const { logout } = useLogout();

  return (
    <>
      <Nav show={show}>
        <Center height="100%" margin="0 auto" style={{ maxWidth: '1440px' }}>
          <Center
            height="100%"
            gap={10}
            between
            margin="0 20px"
            style={{ width: '100%' }}
          >
            <Text tag="div" variant="h3" color={tokens.colors.primary}>
              <Center>
                <Link to="/home">
                  <Logo size={24} color={tokens.colors.primary} />
                </Link>
              </Center>
            </Text>

            <Center gap={5}>
              <Button size="medium" onClick={logout}>
                Log Out
              </Button>

              <Link to="/settings">
                <Button
                  size="medium"
                  icon={<Icon icon="settings" size={18} />}
                />
              </Link>

              <Button
                size="medium"
                variant="secondary"
                onClick={() => setShow(false)}
              >
                <Icon icon="close" />
              </Button>
            </Center>
          </Center>
        </Center>

        {!show && (
          <NavCloser>
            <Button
              size="medium"
              variant="secondary"
              onClick={() => setShow(true)}
              icon={<Icon icon="menu" />}
            />
          </NavCloser>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
